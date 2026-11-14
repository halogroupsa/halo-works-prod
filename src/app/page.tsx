import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import HeroGallery from "@/components/hero-gallery";
import HomeDelivery from "@/components/home-delivery";
import { Icon } from "@/components/icons";
import { Button, Picture } from "@/components/ui";
import {
  Commitments,
  EnquirySection,
  ProjectSection,
  ServiceGrid,
} from "@/components/site-sections";

export const metadata = pageMetadata(
  "Interior Fit-Out & Renovation in Dubai",
  "Halo Works plans and manages interior fit-out, renovation, bespoke joinery and focused upgrades for homes and commercial spaces in Dubai.",
  "/",
  "hero-courtyard",
);

export default function Home() {
  return (
    <>
      <HeroGallery>
        <div>
          <p className="eyebrow">Residential & commercial · Dubai</p>
          <h1 id="home-title">
            Interior fit-out
            <br /> &amp; renovation
          </h1>
        </div>
        <div className="hero-stage-action">
          <p>
            From fitted joinery to a complete refurbishment. We bring specialist
            teams together and manage the work through handover.
          </p>
          <Button href="#enquire">Discuss your project</Button>
        </div>
      </HeroGallery>

      <section className="home-intro">
        <div className="wrap" data-reveal>
          <p className="eyebrow">Halo Works LLC-FZ</p>
          <h2>One plan for the whole project.</h2>
          <p>
            Start with the space you want to change. We define the scope with
            you, appoint the specialists and manage procurement, installation
            and the checks before handover.
          </p>
          <div className="home-actions">
            <Button href="#enquire">Request a consultation</Button>
            <Link prefetch={false} className="text-link" href="/process/">
              See how we work <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Commitments home />

      <section className="wrap home-experience">
        <div className="home-experience-number" data-reveal>
          <strong>
            20<span>+</span>
          </strong>
          <span>
            Years of collective
            <br />
            industry experience
          </span>
        </div>
        <div data-reveal data-reveal-order={1}>
          <p className="eyebrow">The team behind the work</p>
          <h2>Homes, workplaces, hospitality and retail.</h2>
        </div>
        <Link
          prefetch={false}
          className="text-link"
          href="/about/"
          data-reveal
          data-reveal-order={2}
        >
          Meet Halo Works <Icon name="diagonal" size={16} />
        </Link>
      </section>

      <section className="home-services section-pad" id="services">
        <div className="wrap">
          <div className="home-section-heading" data-reveal>
            <div>
              <p className="eyebrow">Find the right scope</p>
              <h2>Our services</h2>
            </div>
            <Link prefetch={false} href="/services/" className="text-link">
              All services <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="wrap assessment-slice">
        <div data-reveal>
          <p className="eyebrow">Whole-home renovation</p>
          <h2>Renovating more than one room?</h2>
          <p>
            Share your plans, priorities and move-in date. We assess access,
            finishes and lead times, then agree how the work across your home
            will be sequenced.
          </p>
          <div className="home-actions">
            <Button href="#enquire">Plan your renovation</Button>
            <Link
              prefetch={false}
              className="text-link"
              href="/services/home-renovation/"
            >
              Whole-home services <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
        <figure>
          <Picture
            name="living-natural"
            reveal="frame"
            alt="Open-plan living and dining space with warm timber finishes"
            sizes="(max-width: 660px) 100vw, 48vw"
          />
          <figcaption>Whole-home renovation</figcaption>
        </figure>
      </section>

      <EnquirySection />

      <section className="home-design">
        <figure>
          <Picture
            name="kitchen"
            reveal="frame"
            alt="Kitchen with a limestone island, walnut cabinetry and bronze fittings"
            sizes="(max-width: 660px) 100vw, 55vw"
          />
          <figcaption>Fitted kitchen</figcaption>
        </figure>
        <div data-reveal>
          <p className="eyebrow">Interior design &amp; planning</p>
          <h2>Make the decisions that carry through to site.</h2>
          <p>
            Layouts, finishes and shop drawings guide what gets ordered,
            manufactured and installed. If you already have a designer, we can
            work from their information and establish what else the team needs.
          </p>
          <Link
            prefetch={false}
            className="text-link"
            href="/services/interior-design/"
          >
            Explore design &amp; planning <Icon name="diagonal" size={16} />
          </Link>
        </div>
      </section>

      <ProjectSection />

      <HomeDelivery />
    </>
  );
}
