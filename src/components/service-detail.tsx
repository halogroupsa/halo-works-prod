import Link from "next/link";
import { haloWorksBudgetBand } from "@/lib/project-budget";
import { projectReferences } from "@/lib/project-references";
import { servicePlanning } from "@/lib/service-planning";
import { serviceScenes } from "@/lib/service-scenes";
import { serviceGroups, services, type Service } from "@/lib/site-content";
import { visibleProjects } from "@/lib/project-visibility";
import { absoluteUrl } from "@/lib/seo";
import { JsonLd } from "./seo";
import PageHero from "./page-hero";
import { Icon } from "./icons";
import ServiceGallery, { type Scene } from "./service-gallery";
import ProjectReferenceCard from "./project-reference-card";
import FAQ from "./faq";
import { Partners } from "./trust";
import { Button, Picture } from "./ui";
import {
  BlogSection,
  Commitments,
  EnquirySection,
  ProcessSection,
  ProjectCard,
  SectionHeading,
  ServiceTile,
} from "./site-sections";

const reviewSteps = [
  ["Share the brief", "Send the property details, photographs or drawings, and what you want to change."],
  ["Check the interfaces", "Identify where the specialist work meets the property, finishes or other work packages."],
  ["Confirm responsibilities", "Ask the relevant specialist or provider to confirm the scope, price, programme and any approval requirements."],
] as const;

const reviewCommitments = [
  ["A brief you can share", "Record what you want to change, what should stay and which details still need checking."],
  ["Clear responsibilities", "Identify which decisions belong to the specialist, provider or property manager."],
  ["Agreed interfaces", "Check where specialist work meets existing finishes, services or another package."],
  ["A proposal to compare", "Ask the provider to confirm the scope, exclusions, programme and records they will supply."],
] as const;

const commonQuestions = [
  [
    "Who carries out the specialist work?",
    "We appoint designers, engineers, manufacturers and contractors as required for the agreed work. Your proposal records who is responsible for each package.",
  ],
  [
    "What should I share for a quotation?",
    "Share the property location, photos or drawings, your priorities and required completion date. An indicative budget helps us assess options.",
  ],
  [
    "Will my project need approval?",
    "That depends on the property and the proposed work. We establish the requirements with the appointed specialists and agree who will submit the information.",
  ],
  [
    "What happens at handover?",
    "We inspect the agreed work, record and follow up outstanding items, and compile the applicable test records, care information and warranty details.",
  ],
];

const jumps = [
  ["case-studies", "Examples"],
  ["scope", "Scope"],
  ["delivery", "Process"],
  ["budget", "Cost & timing"],
  ["service-faq", "FAQs"],
  ["service-guides", "Guides"],
];

export default function ServiceDetail({
  service,
  scenes,
  cover = scenes[0],
  process,
  questions,
  relatedSlugs,
  enquiryName = service.name,
  serviceType,
}: {
  service: Service;
  scenes: Scene[];
  cover?: Scene;
  process?: readonly (readonly [string, string])[];
  questions?: string[][];
  relatedSlugs?: string[];
  enquiryName?: string;
  serviceType?: string;
}) {
  const { slug, name, category, intro, description, scope, note, review } = service;
  const planning = servicePlanning[slug];
  const path = `/services/${slug}/`;
  const group = serviceGroups.find(({ slugs }) => slugs.includes(slug));
  const related = relatedSlugs ?? group?.slugs.filter((item) => item !== slug).slice(0, 4) ?? [];
  const relatedImageSizes = related.length < 2
    ? "(max-width: 450px) 100vw, 420px"
    : `(max-width: 840px) 50vw, ${Math.ceil(100 / related.length)}vw`;
  const projectRecords = visibleProjects.filter((project) => project.services.includes(slug));
  const examples = projectReferences.filter(({ slug: example }) => planning.examples?.includes(example));
  const costSection =
    slug === "kitchen-renovation"
      ? "#kitchen"
      : slug === "bathroom-renovation"
        ? "#bathroom"
        : group?.id === "renovation"
          ? "#home"
          : "";
  const [outcomeTitle, outcomeCopy] = planning.outcome;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: review ? name + " scope review" : name,
          serviceType,
          description: intro,
          url: absoluteUrl(path),
          provider: { "@id": absoluteUrl("/#organization") },
          areaServed: { "@type": "City", name: "Dubai" },
        }}
      />
      <PageHero
        label={category + " · Dubai"}
        title={name}
        description={intro}
        image={cover.image}
        alt={cover.alt}
        path={path}
        crumb={enquiryName}
        parent={{ name: "Services", href: "/services/" }}
        action={{ href: "#enquire", label: "Discuss your brief" }}
        secondaryAction={{ href: "https://wa.me/971566442008", label: "WhatsApp" }}
      />
      <nav aria-label="On this page" className="service-jumps">
        <div className="wrap">
          <div className="service-jump-links">
            {jumps.map(([id, label]) => (
              <a key={id} href={`#${id}`}>{label}</a>
            ))}
          </div>
          <a className="service-jump-enquire" href="#enquire">
            Enquire <Icon name="diagonal" size={14} />
          </a>
        </div>
      </nav>

      <section className="wrap section-pad service-examples" id="case-studies" aria-labelledby="service-examples-title">
        <div className="service-examples-feature" data-reveal>
          <div className="service-examples-copy">
            <p className="eyebrow">Ideas for your brief</p>
            <h2 id="service-examples-title">A closer look at {name.toLowerCase()}</h2>
            <p>Use the gallery to identify details you want to discuss for your own property.</p>
            <Link prefetch={false} className="text-link" href="/gallery/">
              Explore the design gallery <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <ServiceGallery key={slug} scenes={scenes} />
        </div>
        {projectRecords.length > 0 && (
          <>
            <SectionHeading title="Related case studies" />
            <div className={projectRecords.length === 1 ? "related-project-feature" : "project-grid"}>
              {projectRecords.map((project) => (
                <ProjectCard
                  project={project}
                  key={project.slug}
                  featured={projectRecords.length === 1}
                />
              ))}
            </div>
          </>
        )}
        {examples.length > 0 && (
          <>
            <SectionHeading
              label="Halo Interiors portfolio"
              title="Project examples"
              href="/projects/"
              link="Browse project records"
            />
            <ul className="project-record-grid">
              {examples.map((project, index) => (
                <li key={project.slug} data-reveal="stagger" data-reveal-order={index % 3}>
                  <ProjectReferenceCard project={project} showPhotos />
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <Partners />

      <aside className="service-credentials" aria-label="About Halo Works">
        <div className="wrap" data-reveal>
          <div>
            <p className="eyebrow">Halo Works LLC-FZ · Dubai</p>
            <p><strong>20+ years</strong> of collective industry experience</p>
          </div>
          <Link prefetch={false} href="/about/" className="text-link">
            Meet Halo Works <Icon name="diagonal" size={16} />
          </Link>
        </div>
      </aside>

      <section className="wrap section-pad service-scope" id="scope">
        <SectionHeading
          label={name}
          title={review ? "What to review" : "What the work can include"}
          copy={description}
        />
        <ul className="service-scope-grid">
          {scope.map(([heading, copy], index) => (
            <li key={heading} data-reveal="stagger" data-reveal-order={index % 3}>
              <h3>{heading}</h3>
              <p>{copy}</p>
            </li>
          ))}
        </ul>
        <p className="scope-note" data-reveal>{note}</p>
      </section>

      <Commitments points={review ? reviewCommitments : undefined} />

      <ProcessSection
        items={process ?? (review ? reviewSteps : undefined)}
        title={review ? "From brief to specialist assessment" : undefined}
        checkpoint={planning.checkpoint}
      />

      <section className="section-pad service-budget" id="budget" aria-labelledby="service-budget-title">
        <div className="wrap" data-reveal>
          <div>
            <p className="eyebrow">{review ? "Specialist proposal" : "Quotation & programme"}</p>
            <h2 id="service-budget-title">Cost of {name.toLowerCase()} in Dubai</h2>
            <div className="service-budget-range">
              <p className="eyebrow">Halo Works project budget range</p>
              <strong>{haloWorksBudgetBand}</strong>
            </div>
          </div>
          <div className="service-budget-copy">
            <p>{planning.quotation}</p>
            <p>
              {review
                ? "Specialist providers quote their own work. Ask the provider to record their inclusions, exclusions and programme before you commit."
                : "Your proposal sets out inclusions, exclusions, payment milestones and programme assumptions. Tell us your target date so we can account for access, approvals and lead times."}
            </p>
            <Link prefetch={false} className="text-link" href={`/cost-guide/${costSection}`}>
              Read the cost guide <Icon name="diagonal" size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-pad service-brief" id="brief" aria-labelledby="service-brief-title">
        <div className="service-brief-image" aria-hidden="true">
          <Picture name={cover.image} alt="" sizes="100vw" />
        </div>
        <div className="wrap service-brief-layout">
          <div data-reveal>
            <p className="eyebrow">What a clear brief makes possible</p>
            <h2 id="service-brief-title">{outcomeTitle}</h2>
            <p>{outcomeCopy}</p>
            {slug === "painting" && (
              <a href="https://decopaint.ae/free-samples" className="text-link">
                Book a decorative finish sample review with DecoPaint <Icon name="diagonal" size={16} />
              </a>
            )}
          </div>
          <div className="service-brief-next" data-reveal data-reveal-order={1}>
            <h3>What to send us</h3>
            <p>
              {review?.brief ??
                "Send the property location, photos or drawings, what you want to change and your target date. Include an indicative budget if you have one."}
            </p>
            <Button href="#enquire">Prepare your brief</Button>
          </div>
        </div>
      </section>

      <FAQ
        id="service-faq"
        title="Common questions"
        label={name}
        contact={{ href: "#enquire", label: "Ask about this service" }}
        items={[planning.question, ...(questions ?? review?.faqs ?? commonQuestions)]}
      />
      <BlogSection serviceSlug={slug} id="service-guides" />

      <section className="wrap service-related" id="service-related">
        <SectionHeading title="Related services" />
        <div className="service-mosaic">
          {related.map((item, index) => (
            <ServiceTile
              key={item}
              slug={item}
              name={services.find((candidate) => candidate.slug === item)!.name}
              image={serviceScenes[item][0].image}
              order={index}
              sizes={relatedImageSizes}
            />
          ))}
        </div>
      </section>
      <EnquirySection key={slug} service={enquiryName} />
    </>
  );
}
