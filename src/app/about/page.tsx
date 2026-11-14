import Link from "next/link";
import { Icon } from "@/components/icons";
import PageHero from "@/components/page-hero";
import { pageMetadata } from "@/lib/seo";
import { Picture } from "@/components/ui";
import { Commitments, ClosingCTA } from "@/components/site-sections";
export const metadata = pageMetadata(
  "About Halo Works",
  "Halo Works LLC-FZ brings specialist teams together for interior design planning, fit-out, renovation, joinery and project delivery in Dubai.",
  "/about/",
  "process-hero",
);
export default function About() {
  return (
    <>
      <PageHero
        variant="inset"
        className="page-hero--about"
        label="Interior fit-out & renovation · Dubai"
        title="About Halo Works"
        description="We plan and manage interior projects in Dubai. Our work connects the client brief, the designers and trades appointed to the project, procurement and the installation programme."
        image="process-hero"
        alt="Planning table at an interior fit-out"
        path="/about/"
        crumb="About"
        panels={["Design", "Procurement", "Delivery"]}
      />
      <section className="section-surface section-pad">
        <div className="wrap split-feature">
          <div data-reveal>
            <p className="eyebrow">Halo Works LLC-FZ · Dubai</p>
            <h2>Experience across the work</h2>
            <p>
              Our team draws on experience in design and fit-out, joinery, home
              renovation, offices, hospitality and retail. We apply it when we set
              the scope, review materials and plan the sequence of work on site.
            </p>
            <div className="experience-detail">
              <strong>20+</strong>
              <span>Years of collective industry experience</span>
            </div>
          </div>
          <figure>
            <Picture
              name="scope-planning"
              alt="Drawings and material selections"
              reveal="frame"
            />
          </figure>
        </div>
      </section>
      <Commitments />
      <section className="about-message section-pad">
        <div className="wrap scope-layout">
          <div data-reveal>
            <p className="eyebrow">General Manager</p>
            <h2>Khalil Rahman</h2>
            <a className="text-link" href="mailto:khalil@haloworks.ae">
              khalil@haloworks.ae <Icon name="diagonal" size={16} />
            </a>
          </div>
          <div className="prose" data-reveal data-reveal-order={1}>
            <p>
              Khalil leads Halo Works with more than 20 years of UAE and
              regional experience across fit-out, joinery, renovation, sourcing
              and project delivery. His focus is to remain closely involved and
              carry decisions made during design and procurement through to the
              work on site.
            </p>
            <a className="text-link" href="tel:+971503119165">
              Speak with Khalil: +971 50 311 9165{" "}
              <Icon name="diagonal" size={16} />
            </a>
          </div>
        </div>
      </section>
      <section className="wrap section-pad scope-layout">
        <div data-reveal>
          <p className="eyebrow">Our group relationship</p>
          <h2>Halo Interiors</h2>
        </div>
        <div className="prose" data-reveal data-reveal-order={1}>
          <p>
            Halo Interiors is our parent company. Halo Works LLC-FZ manages
            interior fit-out, renovation and joinery projects with the
            specialists appointed for each brief.
          </p>
          <a
            className="text-link"
            href="https://halo.ae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Halo Interiors <Icon name="diagonal" size={16} />
          </a>
          <p>
            <Link href="/process/">
              Explore the Halo Works delivery process{" "}
              <Icon name="diagonal" size={16} />
            </Link>
          </p>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
