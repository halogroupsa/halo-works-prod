import Link from "next/link";
import { projectAreas } from "@/lib/project-visibility";
import { projectAreaPath } from "@/lib/project-paths";
import Brand from "./brand";
import { Icon } from "./icons";
import { Picture } from "./ui";

const socialLinks = [
  ["YouTube", "https://www.youtube.com/@haloworksllc", "youtube"],
  ["Instagram", "https://www.instagram.com/haloworksllc/", "instagram"],
  ["Pinterest", "https://www.pinterest.com/haloworksuae/", "pinterest"],
  ["TikTok", "https://www.tiktok.com/@haloworkllc", "tiktok"],
  ["Facebook", "https://www.facebook.com/profile.php?id=61589612106010#", "facebook"],
] as const;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-media" aria-hidden="true" data-reveal="zoom">
        <Picture
          name="scope-joinery-natural"
          alt=""
          sizes="100vw"
          className="footer-photo"
        />
      </div>
      <div className="wrap footer-top">
        <div data-reveal>
          <Brand />
          <p>
            Interior projects.
            <br />
            Specialist teams.
            <br />
            One agreed delivery plan.
          </p>
          <span className="eyebrow">Dubai, United Arab Emirates</span>
        </div>
        <div data-reveal>
          <h2>Explore</h2>
          {[
            ["/", "Home"],
            ["/about/", "About Halo Works"],
            ["/process/", "How it works"],
            ["/projects/", "Projects"],
            ["/gallery/", "Design gallery"],
            ["/blog/", "Blog"],
            ["/faqs/", "FAQs"],
            ["/book-online/", "Book online"],
          ].map(([url, name]) => (
            <Link prefetch={false} href={url} key={url}>
              {name}
            </Link>
          ))}
        </div>
        <div data-reveal>
          <h2>Services</h2>
          <div className="footer-service-links">
            {[
              ["villa-renovation", "Villa renovation"],
              ["apartment-renovation", "Apartment renovation"],
              ["office-fit-out", "Office fit-out & renovation"],
              ["kitchen-renovation", "Kitchen renovation"],
              ["bathroom-renovation", "Bathroom renovation"],
              ["wardrobes-cabinets", "Wardrobes & cabinets"],
              ["villa-extensions-doors", "Villa extensions & doors"],
              ["landscaping", "Landscaping"],
              ["swimming-pools", "Swimming pools"],
              ["annual-maintenance", "Annual maintenance (AMC)"],
              ["painting", "Painting"],
              ["ac-installation", "AC installation"],
              ["flooring-finishes", "Flooring & finishes"],
              ["bespoke-joinery", "Bespoke joinery"],
              ["interior-design", "Interior design & planning"],
              ["project-delivery", "Project management"],
            ].map(([slug, name]) => (
              <Link prefetch={false} href={`/services/${slug}/`} key={slug}>
                {name}
              </Link>
            ))}
          </div>
          <Link prefetch={false} href="/services/">
            View all services <Icon name="diagonal" size={16} />
          </Link>
        </div>
        <div data-reveal>
          <h2>Your project</h2>
          <a href="tel:+971566442008">+971 56 644 2008</a>
          <a href="mailto:info@haloworks.ae">info@haloworks.ae</a>
          <Link prefetch={false} href="/contact/">
            Request a quotation <Icon name="diagonal" size={16} />
          </Link>
          <Link prefetch={false} href="/approvals/">
            Authority & community approvals
          </Link>
          <Link prefetch={false} href="/cost-guide/">
            Planning your budget
          </Link>
        </div>
      </div>
      <nav className="wrap footer-social" aria-labelledby="footer-social-title">
        <h2 id="footer-social-title">Follow Halo Works</h2>
        <ul>
          {socialLinks.map(([name, url, icon]) => (
            <li key={name}>
              <a href={url}>
                <Icon name={icon} size={18} />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {projectAreas.length > 0 && (
        <nav
          className="wrap footer-locations"
          aria-labelledby="footer-locations-title"
        >
          <h2 id="footer-locations-title">Project communities</h2>
          <ul>
            {projectAreas.map(({ slug, name }) => (
              <li key={slug}>
                <Link href={projectAreaPath(slug)} prefetch={false}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
      <div className="wrap footer-bottom" data-reveal>
        <span>© {new Date().getFullYear()} Halo Works LLC-FZ</span>
        <span>Digital experience by DesignsFrontier</span>
        <Link prefetch={false} href="/privacy/">
          Privacy
        </Link>
      </div>
    </footer>
  );
}
