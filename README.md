# Halo Works

Next.js static website for Halo Works LLC-FZ. The supplied 2026 company profile defines the services, delivery responsibilities and enquiry contacts. Rayfitout informs the visual direction. Yalla Renovation informs page structure and placement.

## Run locally

```sh
npm ci
HALO_PROJECT_PREVIEWS=1 npm run build
npm run preview -- out-review
```

Open http://localhost:3007. The review export includes four draft case-study layouts. Use `HALO_PROJECT_PREVIEWS=1 npm run dev` for local development with those layouts.

For production, run `npm run build` and publish **`out/`**. The ordinary build excludes unpublished case-study routes. `out-review/` is for local design review. The public site runs on static hosting.

## Pages and content

- Home, About, Services, How it works, Approvals, Cost guide, FAQs, Contact, Book online and Privacy.
- 16 profile-backed service pages, grouped by renovation, interior fit-out, joinery and finishes, and design and delivery.
- A landscaping and outdoor living service page covering scope, specialist coordination, budget considerations and enquiries.
- Specialist scope review pages for villa extensions and doors, swimming pools, annual maintenance and AC installation.
- The Projects archive, community guides, project examples and four review-only case-study layouts. Approved Halo Works case studies include location, scope, duration, role, before/after photos and handover details.
- A separate concept gallery with six clearly labelled design studies.
- A blog listing and five original planning guides.
- The existing noindex fit-out campaign route.

Update service and project records in `src/lib/site-content.ts`. Service image selections are in `src/lib/service-scenes.ts`. The concept and guide collections are in `src/lib/content.ts`. [Content provenance](docs/content-sources.md) and the [project publishing guide](docs/redesign/project-content-guide.md) document attribution and approval requirements.

## Enquiries

WhatsApp is the primary contact channel. The contact page and floating button use **+971 56 644 2008**. Email drafts use **info@haloworks.ae**. The form includes landscaping, quick transformations and a required completion date or flexible-date selection. It prepares a draft for the visitor to review and send in WhatsApp or their email app. Attachments and receipt are handled in that app.

## Sitemaps and hosting

`/sitemap.xml` links to three non-overlapping sitemaps.

- `/pages-sitemap.xml` lists indexable main pages, services, the concept gallery and the blog listing.
- `/blog-sitemap.xml` lists blog articles.
- `/projects-sitemap.xml` lists the Projects archive, community guides, project examples and approved Halo Works case studies. Drafts stay out of the index.

Set an approved project's `area` in `src/lib/site-content.ts` with a display `name` and a stable lowercase `slug` to include it in a collection at `/<area>/`. Individual projects use `/project/<slug>/`.

Community guidance lives in `src/lib/project-communities.ts`. Project examples and their source paths live in `src/lib/project-references.ts`.

`robots.txt` points to the sitemap index.

The canonical origin is `https://haloworks.ae`. Set `NEXT_PUBLIC_SITE_URL` before building if the production origin changes. The setting controls canonicals, Open Graph URLs, schema and sitemap locations.

For Cloudflare Pages, use build command `npm run build` and output directory `out`. `public/_redirects` retains the former project, location, Journal, Spaces and hospitality-service links on that host. Replicate those redirects if using another host.

## Verification

```sh
npm run build
npm run typecheck
python3 scripts/check-export.py
python3 scripts/check-seo.py
node --experimental-strip-types --test scripts/enquiry.test.mjs
```

Pass `out-review` to either Python script to verify the review export. See the [design reference map](docs/redesign/design-plan.md) and [verification report](docs/redesign/verification.md) for browser evidence and the remaining live checks.
