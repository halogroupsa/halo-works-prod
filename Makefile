.DEFAULT_GOAL := help

PROJECT_DIR := $(abspath $(dir $(lastword $(MAKEFILE_LIST))))
WRANGLER ?= npx --yes wrangler@4.156.2
PAGES_PROJECT ?=

.PHONY: help install ci dev dev-review build build-review build-clean preview preview-review \
	typecheck test check-export check-seo check check-review deploy clean \
	sync-to-prod sync-from-prod sync-to-prod-dry sync-from-prod-dry sync-prod-status \
	sync-to-peer sync-from-peer

help:
	@echo "Halo Works — site commands"
	@echo "  make install                 Install locked dependencies"
	@echo "  make dev                     Start the development server"
	@echo "  make dev-review              Start the dev server with draft case studies"
	@echo "  make build                   Export the production site to out/"
	@echo "  make build-review            Export the review site (with drafts) to out-review/"
	@echo "  make build-clean             Remove build output, then export out/"
	@echo "  make preview                 Serve out/ on http://localhost:3007"
	@echo "  make preview-review          Serve out-review/ on http://localhost:3007"
	@echo "  make typecheck               Run TypeScript checks"
	@echo "  make test                    Run the enquiry tests"
	@echo "  make check                   Build, typecheck, test and verify out/ (export + SEO)"
	@echo "  make check-review            Build and verify out-review/"
	@echo "  make deploy                  Check and deploy out/ (set PAGES_PROJECT=name)"
	@echo "  make clean                   Remove .next, out, out-review and tsbuildinfo"
	@echo "  Preview port: HALO_PREVIEW_PORT=3007 (default)"
	@echo ""
	@echo "  Sync PROD <-> THIS (halo-works-prod):"
	@echo "  make sync-prod-status        Show what differs, plus prod's own config/git state"
	@echo "  make sync-to-prod-dry        Preview HERE -> PROD without touching anything"
	@echo "  make sync-to-prod            Mirror HERE -> PROD (dry-run + confirm)"
	@echo "  make sync-from-prod-dry      Preview PROD -> HERE without touching anything"
	@echo "  make sync-from-prod          Mirror PROD -> HERE (dry-run + confirm)"
	@echo ""
	@echo "  Sync an arbitrary PEER checkout:"
	@echo "  make sync-to-peer PEER_DIR=/path     Mirror HERE -> PEER (dry-run + confirm)"
	@echo "  make sync-from-peer PEER_DIR=/path   Mirror PEER -> HERE (dry-run + confirm)"

install:
	npm ci

ci:
	npm ci

dev:
	npm run dev

dev-review:
	HALO_PROJECT_PREVIEWS=1 npm run dev

build:
	npm run build

build-review:
	HALO_PROJECT_PREVIEWS=1 npm run build

build-clean:
	rm -rf .next out
	npm run build

preview:
	npm run preview -- out

preview-review:
	npm run preview -- out-review

typecheck:
	npm run typecheck

test:
	node --experimental-strip-types --test scripts/enquiry.test.mjs

check-export:
	python3 scripts/check-export.py out

check-seo:
	python3 scripts/check-seo.py out

check: build typecheck test check-export check-seo

check-review: build-review
	python3 scripts/check-export.py out-review
	python3 scripts/check-seo.py out-review

deploy:
	@if ! printf '%s' "$(PAGES_PROJECT)" | grep -Eq '^[a-z0-9][a-z0-9-]*$$'; then \
		echo "Set the actual Cloudflare project name: make deploy PAGES_PROJECT=your-pages-project"; \
		exit 1; \
	fi
	$(MAKE) check
	$(WRANGLER) pages deploy out --project-name "$(PAGES_PROJECT)"

clean:
	rm -rf .next out out-review tsconfig.tsbuildinfo

# ==============================================================================
# SYNC BETWEEN CHECKOUTS OF THIS PROJECT
# ==============================================================================
#
# PROD_DIR is halo-works-prod: the same "halo-works" package as this tree, with
# its own git remote (halogroupsa/halo-works-prod, separate from this checkout's
# Admin-DesignsFrontier/halo-works-df).
#
# These targets MIRROR: a file deleted here is deleted on the target too, so the
# two trees stay identical rather than prod accumulating stale routes and images.
# Every target dry-runs first and lists deletions before asking to proceed.
#
# Never synced in either direction; each checkout owns its own copy:
#
#   .env            NEXT_PUBLIC_GTM_ID (and NEXT_PUBLIC_SITE_URL if overridden)
#   wrangler.*      Cloudflare config, if a checkout ever adds one
#   .git            the two checkouts track different remotes
#
# plus build artefacts and local-only working folders (.next, out, out-review,
# node_modules, keywords_planner, outputs, docs/redesign, docs/audits/visual,
# tsbuildinfo). The full list is EXCLUDES in scripts/sync-tree.sh.
#
# Prod needs no .env for indexing: src/lib/seo.ts falls back to
# https://haloworks.ae when NEXT_PUBLIC_SITE_URL is unset. GTM only ships when
# NEXT_PUBLIC_GTM_ID is set at build time, so give prod a .env with that ID, or
# set it in the Cloudflare Pages build environment.
# `make sync-prod-status` reports which.
#
# The copy/prune split, and why this is not a plain `rsync -a --delete`, is
# explained at the top of scripts/sync-tree.sh: macOS ships openrsync, which
# deletes --excluded paths in the destination (it would wipe prod's .git and
# .env) and which ignores --exclude entirely once any --filter is present.

SYNC := $(PROJECT_DIR)/scripts/sync-tree.sh

PROD_DIR ?= /Volumes/MacLexarSsd/Lexar_Documents/DesignsFrontier/halo_ae/halo-works-prod
PEER_DIR ?=

# Dry-run, show the copy and delete lists, then apply only on an explicit yes.
define sync_confirm
	@$(SYNC) "$(1)" "$(2)"
	@echo ""
	@read -p "Apply these changes? [y/N]: " confirm; \
	if [ "$$confirm" = "y" ] || [ "$$confirm" = "Y" ]; then \
		$(SYNC) "$(1)" "$(2)" --apply; \
	else \
		echo "Cancelled"; \
	fi
endef

# Refuse to run the peer targets unless PEER_DIR was passed.
define require_peer
	@if [ -z "$(PEER_DIR)" ]; then \
		echo "❌ PEER_DIR is not set. Pass it explicitly:"; \
		echo "   make $@ PEER_DIR=/path/to/counterpart"; \
		echo "   (for halo-works-prod use make sync-to-prod / sync-from-prod)"; \
		exit 1; \
	fi
endef

# ---- prod ---------------------------------------------------------------------

sync-to-prod-dry:
	@$(SYNC) "$(PROJECT_DIR)" "$(PROD_DIR)"

sync-from-prod-dry:
	@$(SYNC) "$(PROD_DIR)" "$(PROJECT_DIR)"

sync-to-prod:
	$(call sync_confirm,$(PROJECT_DIR),$(PROD_DIR))

sync-from-prod:
	$(call sync_confirm,$(PROD_DIR),$(PROJECT_DIR))

# Prod's env and git state are outside the sync, so check them here.
sync-prod-status:
	@echo "PROD_DIR: $(PROD_DIR)"
	@if [ ! -d "$(PROD_DIR)" ]; then echo "  ❌ does not exist"; exit 1; fi
	@if [ -f "$(PROD_DIR)/.env" ]; then \
		site=$$(sed -n 's/^NEXT_PUBLIC_SITE_URL=//p' "$(PROD_DIR)/.env"); \
		gtm=$$(sed -n 's/^NEXT_PUBLIC_GTM_ID=//p' "$(PROD_DIR)/.env"); \
		echo "  ✅ .env present"; \
		echo "     SITE_URL: $${site:-(unset, defaults to https://haloworks.ae)}"; \
		if [ -n "$$gtm" ]; then echo "     GTM_ID:   $$gtm"; \
		else echo "     GTM_ID:   ⚠️  unset, local builds in prod ship no GTM tag"; fi; \
	else \
		echo "  ·  .env absent: canonical on https://haloworks.ae and indexable,"; \
		echo "     but NO GTM tag unless NEXT_PUBLIC_GTM_ID is set in the"; \
		echo "     Cloudflare Pages build environment."; \
	fi
	@if git -C "$(PROD_DIR)" rev-parse --verify HEAD >/dev/null 2>&1; then \
		echo "  git: $$(git -C "$(PROD_DIR)" rev-parse --abbrev-ref HEAD), $$(git -C "$(PROD_DIR)" rev-list --count HEAD) commit(s)"; \
	else \
		echo "  git: $$(git -C "$(PROD_DIR)" branch --show-current) — no commits yet"; \
	fi
	@git -C "$(PROD_DIR)" remote get-url origin 2>/dev/null | sed 's/^/  remote: /' || true
	@echo ""
	@$(SYNC) "$(PROJECT_DIR)" "$(PROD_DIR)"

# ---- arbitrary peer checkout --------------------------------------------------

sync-to-peer:
	$(require_peer)
	$(call sync_confirm,$(PROJECT_DIR),$(PEER_DIR))

sync-from-peer:
	$(require_peer)
	$(call sync_confirm,$(PEER_DIR),$(PROJECT_DIR))
