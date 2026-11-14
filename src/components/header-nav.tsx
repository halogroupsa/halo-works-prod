"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import Brand from "./brand";
import { Icon } from "./icons";
import { Picture } from "./ui";

type ServiceLink = {
  name: string;
  category: string;
  href: string;
  image: string;
};
type Group = { id: string; title: string; links: ServiceLink[] };
type CommunityLink = { name: string; href: string };
type Menu = "projects" | "services";
const desktopNavigation = "(min-width: 992px)";

const links = [
  { href: "/gallery/", name: "Gallery" },
  { href: "/about/", name: "About" },
  { href: "/contact/", name: "Contact" },
  { href: "/blog/", name: "Blog" },
];
const planningLinks = [
  { href: "/book-online/", name: "Book online" },
  { href: "/process/", name: "How it works" },
  { href: "/approvals/", name: "Approvals" },
  { href: "/cost-guide/", name: "Cost guide" },
];

export default function HeaderNav({
  groups,
  featured,
  communities,
}: {
  groups: Group[];
  featured: ServiceLink[];
  communities: CommunityLink[];
}) {
  const path = usePathname();
  const currentPath = path.endsWith("/") ? path : path + "/";
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<Menu | null>(null);
  const [group, setGroup] = useState<string | null>(null);
  const root = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const projectsButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const hovered = useRef<Menu | null>(null);

  const projectsOpen = activeMenu === "projects";
  const servicesOpen = activeMenu === "services";
  const onProjects = currentPath === "/projects/" ||
    currentPath.startsWith("/project/") ||
    communities.some(({ href }) => href === currentPath);
  const cards = groups.find((item) => item.id === group)?.links ?? featured;

  function closeSection() {
    hovered.current = null;
    setActiveMenu(null);
    setGroup(null);
  }

  function close() {
    setOpen(false);
    closeSection();
  }

  function showSection(menu: Menu, byHover = false) {
    hovered.current = byHover ? menu : null;
    setActiveMenu(menu);
    setGroup(null);
  }

  function toggleSection(menu: Menu) {
    if (activeMenu === menu && hovered.current !== menu) closeSection();
    else showSection(menu);
  }

  function disclosure(menu: Menu) {
    return {
      onPointerEnter(event: ReactPointerEvent<HTMLDivElement>) {
        if (event.pointerType === "mouse" && matchMedia(desktopNavigation).matches && activeMenu !== menu) {
          showSection(menu, true);
        }
      },
      onPointerLeave(event: ReactPointerEvent<HTMLDivElement>) {
        if (hovered.current === menu && !event.currentTarget.contains(document.activeElement)) {
          closeSection();
        }
      },
      onBlur(event: FocusEvent<HTMLDivElement>) {
        if (
          !open &&
          activeMenu === menu &&
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          closeSection();
        }
      },
    };
  }

  useEffect(close, [path]);

  useEffect(() => {
    const header = root.current;
    if (!header) return;
    const syncSurface = () => {
      const scrolled = String(window.scrollY > 50);
      if (header.dataset.scrolled !== scrolled)
        header.dataset.scrolled = scrolled;
    };
    syncSurface();
    window.addEventListener("scroll", syncSurface, { passive: true });
    window.addEventListener("pageshow", syncSurface);
    const desktop = window.matchMedia(desktopNavigation);
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("scroll", syncSurface);
      window.removeEventListener("pageshow", syncSurface);
      desktop.removeEventListener("change", close);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const inactive = [
      ...document.querySelectorAll<HTMLElement>(
        ".skip-link, #main, .site-footer, .whatsapp-float",
      ),
    ].filter((element) => !element.inert);
    inactive.forEach((element) => {
      element.inert = true;
    });
    return () =>
      inactive.forEach((element) => {
        element.inert = false;
      });
  }, [open]);

  useEffect(() => {
    if (!open && !activeMenu) return;
    function onEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (activeMenu) {
        closeSection();
        (activeMenu === "projects" ? projectsButton : servicesButton).current?.focus();
      } else {
        close();
        menuButton.current?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        close();
    }
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open, activeMenu]);

  return (
    <header
      ref={root}
      className="halo-header"
      data-open={open || activeMenu !== null}
      data-mobile-open={open}
      onBlur={(event) => {
        if (
          event.relatedTarget instanceof Node &&
          !event.currentTarget.contains(event.relatedTarget)
        )
          close();
      }}
    >
      <div className="wrap halo-nav-row">
        <div className="halo-nav-brand" onClick={close}>
          <Brand />
        </div>
        <button
          ref={menuButton}
          type="button"
          className="halo-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="main-nav"
          aria-expanded={open}
          onClick={() => (open ? close() : setOpen(true))}
        >
          <span className="halo-menu-glyph" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
        <nav
          className="halo-nav"
          data-open={open}
          id="main-nav"
          aria-label="Main navigation"
        >
          <div className="halo-nav-item halo-project-nav" {...disclosure("projects")}>
            <Link
              href="/projects/"
              prefetch={false}
              onClick={close}
              data-current={onProjects}
              aria-current={currentPath === "/projects/" ? "page" : undefined}
            >
              Projects
            </Link>
            <button
              ref={projectsButton}
              type="button"
              aria-label="Project communities"
              aria-expanded={projectsOpen}
              aria-controls="project-menu"
              onClick={() => toggleSection("projects")}
            >
              <Icon name="chevron" size={15} />
            </button>
            <div
              id="project-menu"
              className="halo-dropdown"
              hidden={!projectsOpen}
              inert={!projectsOpen}
            >
              <div className="wrap halo-dropdown-layout">
                <div className="halo-dropdown-rail">
                  <Link
                    href="/projects/"
                    prefetch={false}
                    onClick={close}
                    style={{ animationDelay: "170ms" }}
                  >
                    All projects <Icon name="diagonal" size={15} />
                  </Link>
                  <p className="eyebrow">Browse by community</p>
                </div>
                <ul className="halo-project-links" aria-label="Project communities">
                  {communities.map(({ href, name }, index) => (
                    <li key={href} style={{ animationDelay: 220 + index * 30 + "ms" }}>
                      <Link
                        href={href}
                        prefetch={false}
                        onClick={close}
                        aria-current={currentPath === href ? "page" : undefined}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="halo-nav-item halo-service-nav" {...disclosure("services")}>
            <Link
              className="halo-services-mobile-link"
              href="/services/"
              prefetch={false}
              onClick={close}
              data-current={currentPath.startsWith("/services/")}
              aria-current={currentPath === "/services/" ? "page" : undefined}
            >
              Services
            </Link>
            <button
              ref={servicesButton}
              type="button"
              aria-label="Services"
              aria-expanded={servicesOpen}
              aria-controls="service-menu"
              aria-current={currentPath.startsWith("/services/") ? "page" : undefined}
              onClick={() => toggleSection("services")}
            >
              <span>Services</span>
              <Icon name="chevron" size={15} />
            </button>
            <div
              id="service-menu"
              className="halo-dropdown"
              hidden={!servicesOpen}
              inert={!servicesOpen}
            >
              <div className="wrap halo-dropdown-layout">
                <div className="halo-dropdown-rail">
                  <Link
                    href="/services/"
                    prefetch={false}
                    onClick={close}
                    onPointerEnter={(event) => {
                      if (event.pointerType === "mouse") setGroup(null);
                    }}
                    style={{ animationDelay: "170ms" }}
                  >
                    All services <Icon name="diagonal" size={15} />
                  </Link>
                  {groups.map((item, index) => (
                    <button
                      type="button"
                      key={item.id}
                      style={{ animationDelay: 220 + index * 50 + "ms" }}
                      aria-pressed={group === item.id}
                      onPointerEnter={(event) => {
                        if (event.pointerType === "mouse") setGroup(item.id);
                      }}
                      onClick={() => setGroup(item.id)}
                    >
                      {item.title}
                    </button>
                  ))}
                  <Link
                    href="/services/landscaping/"
                    prefetch={false}
                    onClick={close}
                    style={{ animationDelay: 220 + groups.length * 50 + "ms" }}
                  >
                    Landscaping
                  </Link>
                  <div className="halo-service-tools">
                    {planningLinks.map(({ href, name }) => (
                      <Link
                        href={href}
                        key={href}
                        prefetch={false}
                        onClick={close}
                      >
                        {name} <Icon name="diagonal" size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="halo-service-cards" key={group}>
                  {cards.map((item, index) => (
                    <Link
                      href={item.href}
                      key={item.href}
                      prefetch={false}
                      onClick={close}
                      style={{ animationDelay: 220 + index * 40 + "ms" }}
                    >
                      <Picture
                        name={item.image}
                        alt=""
                        sizes="(max-width: 991px) 50vw, (max-width: 1440px) 20vw, 360px"
                      />
                      <small>{item.category}</small>
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {links.map(({ href, name }) => (
            <Link
              href={href}
              key={href}
              prefetch={false}
              onClick={close}
              aria-current={path.startsWith(href) ? "page" : undefined}
            >
              <span>{name}</span>
            </Link>
          ))}
          <div className="halo-nav-contact">
            <a
              href="https://wa.me/971566442008"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            <a href="mailto:info@haloworks.ae">Email</a>
            <Link href="/cost-guide/" prefetch={false} onClick={close}>
              Cost guide
            </Link>
          </div>
        </nav>
        <a
          className="halo-nav-call"
          href="tel:+971566442008"
          aria-label="Call us at +971 56 644 2008"
        >
          Call us
        </a>
      </div>
    </header>
  );
}
