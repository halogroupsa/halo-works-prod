import Link from "next/link";
import { Picture, Button } from "./ui";
import { Icon } from "./icons";
import {
  commitments,
  featuredServices,
  services,
  steps,
  articles,
  isPublishedProject,
  publishedProjects,
  type Project,
} from "@/lib/site-content";
import { projectReferences } from "@/lib/project-references";
import { projectPath } from "@/lib/project-paths";
import { serviceScenes } from "@/lib/service-scenes";
import ContactForm from "./contact-form";
import ProjectMarquee from "./project-marquee";
import ProjectRail from "./project-rail";
import ProjectReferenceCard from "./project-reference-card";

export function SectionHeading({
  label,
  title,
  copy,
  href,
  link,
}: {
  label?: string;
  title: string;
  copy?: string;
  href?: string;
  link?: string;
}) {
  return (
    <div className="section-heading-row" data-reveal>
      <div>
        {label && <p className="eyebrow">{label}</p>}
        <h2>{title}</h2>
      </div>
      <div>
        {copy && <p>{copy}</p>}
        {href && (
          <Link prefetch={false} className="text-link" href={href}>
            {link || "Explore"} <Icon name="diagonal" size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
export function Commitments({
  home = false,
  points = commitments,
}: {
  home?: boolean;
  points?: readonly (readonly string[])[];
}) {
  const icons = ["scope", "people", "progress", "check", "scope"] as const;
  const items = home
    ? [
        ...points,
        [
          "Agreed finishes",
          "Samples and specifications reviewed before orders are placed.",
        ],
      ]
    : points;
  return (
    <section className="commitments">
      <div className="wrap">
        <h2 data-reveal>What you can expect</h2>
        <div className={home ? "home-promises" : "four-grid"}>
          {items.map(([h, p], i) => (
            <article key={h} data-reveal="stagger" data-reveal-order={i}>
              <Icon name={icons[i]} size={28} />
              <h3>{h}</h3>
              <p>{p}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ServiceTile({
  slug,
  name,
  image,
  order,
  sizes = "(max-width: 840px) 50vw, 25vw",
}: {
  slug: string;
  name: string;
  image: string;
  order: number;
  sizes?: string;
}) {
  return (
    <Link
      prefetch={false}
      className="service-tile"
      href={`/services/${slug}/`}
      data-reveal="stagger"
      data-reveal-order={order}
    >
      <Picture name={image} alt="" sizes={sizes} />
      <div className="service-tile-label">
        <h3>{name}</h3>
        <Icon name="diagonal" size={18} />
      </div>
    </Link>
  );
}

export function ServiceGrid() {
  const list = featuredServices.map(
    (slug) => services.find((s) => s.slug === slug)!,
  );
  return (
    <div className="service-mosaic">
      {list.map((s, index) => (
        <ServiceTile
          key={s.slug}
          slug={s.slug}
          name={s.name}
          image={serviceScenes[s.slug][0].image}
          order={index % 4}
        />
      ))}
      <ServiceTile
        slug="landscaping"
        name="Landscaping"
        image="landscaping-hero"
        order={list.length % 4}
      />
    </div>
  );
}
export function ProcessSection({
  items = steps,
  title = "From your brief to handover.",
  checkpoint,
}: {
  items?: readonly (readonly string[])[];
  title?: string;
  checkpoint?: string;
} = {}) {
  return (
    <section className="section-pad process-section" id="delivery">
      <div className="wrap">
        <SectionHeading
          label="How it works"
          title={title}
          href="/process/"
          link="Our delivery process"
        />
        <ol className="process-grid">
          {items.map(([h, p], i) => (
            <li key={h} data-reveal="stagger" data-reveal-order={i}>
              <span className="step-number">0{i + 1}</span>
              <h3>{h}</h3>
              <p>{p}</p>
            </li>
          ))}
        </ol>
        {checkpoint && (
          <p className="service-checkpoint" data-reveal>
            <strong>Decide early</strong> {checkpoint}
          </p>
        )}
      </div>
    </section>
  );
}
export function ImagePlaceholder({
  label = "Project photograph",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={`image-placeholder ${className}`}>
      <svg
        viewBox="0 0 130 95"
        width="130"
        height="95"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path d="M13 83V12h103v71H13Zm6-6V18h91v59H19ZM50 18v21m0 13v25m0-26a12 12 0 0 0 12-12H50M50 62h31m13 0h16m-28 0a12 12 0 0 1 12-12v12M75 18v44M6 12H1m5 71H1m3-71v71m9 6v6m103-6v6M13 92h103" />
      </svg>
      <span>{label}</span>
      <small>Photo slot</small>
    </div>
  );
}
export function ProjectCard({
  project: p,
  featured = false,
  showSummary = false,
}: {
  project: Project;
  featured?: boolean;
  showSummary?: boolean;
}) {
  const published = isPublishedProject(p);
  const showCaseSummary = showSummary && published;
  return (
    <Link
      className={
        featured ? "project-card project-card--featured" : "project-card"
      }
      href={projectPath(p.slug)}
      prefetch={false}
    >
      {published && p.after ? (
        <img
          src={p.after.src}
          alt={p.after.alt}
          width={1200}
          height={800}
          loading="lazy"
        />
      ) : (
        <ImagePlaceholder label="Before & after" />
      )}
      <div className="card-heading">
        {featured && (
          <p className="eyebrow">
            {published ? p.location : "Case study layout preview"}
          </p>
        )}
        <h3>{published ? p.title : p.category}</h3>
        {showCaseSummary && p.clientName && (
          <p>Client · {p.clientName}</p>
        )}
        {(featured || showCaseSummary) && (
          <p>
            {showCaseSummary
              ? p.brief
              : published
                ? p.scope
                : "Before-and-after photos, scope, duration and Halo Works’ role will appear here."}
          </p>
        )}
        <span>
          {featured || showCaseSummary
            ? "View case study"
            : published
              ? p.location
              : "Layout preview"}{" "}
          <Icon name="diagonal" size={15} />
        </span>
      </div>
    </Link>
  );
}
const featuredReferenceSlugs = [
  "dubai-marina-apartment-kitchen",
  "almas-boardroom-joinery",
  "jumeirah-living-microcement-vanity",
  "meydan-bedroom-joinery",
];

export function ProjectSection() {
  const featuredCaseStudies = publishedProjects.slice(0, 4);
  const featuredReferences = featuredReferenceSlugs.flatMap((slug) => {
    const project = projectReferences.find((reference) => reference.slug === slug);
    return project ? [project] : [];
  }).slice(0, 4 - featuredCaseStudies.length);
  const moreReferences = projectReferences.filter(
    (project) => !featuredReferences.includes(project),
  );

  return (
    <>
      <section
        className="section-pad project-showcase"
        aria-labelledby="home-projects-title"
      >
        <div className="wrap">
          <div className="home-section-heading" data-reveal>
            <div>
              <p className="eyebrow">Featured projects</p>
              <h2 id="home-projects-title">Projects</h2>
            </div>
            <Link prefetch={false} className="text-link" href="/projects/">
              Browse projects <Icon name="diagonal" size={16} />
            </Link>
          </div>
          <ProjectRail>
            {featuredCaseStudies.map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
            {featuredReferences.map((project) => (
              <ProjectReferenceCard
                project={project}
                key={project.slug}
                sizes="(min-width: 1920px) 1100px, (min-width: 992px) 60vw, 85vw"
              />
            ))}
          </ProjectRail>
        </div>
      </section>
      <ProjectMarquee>
        {publishedProjects.slice(4).map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
        {moreReferences.map((project) => (
          <ProjectReferenceCard
            project={project}
            key={project.slug}
            sizes="(min-width: 1558px) 405px, (min-width: 904px) 26vw, 235px"
          />
        ))}
      </ProjectMarquee>
    </>
  );
}
export function EnquirySection({ service = "" }: { service?: string }) {
  return (
    <section id="enquire" className="enquiry-section section-pad">
      <div className="wrap enquiry-layout">
        <div>
          <p className="eyebrow">Project enquiries</p>
          <h2>Discuss your project.</h2>
          <p>
            Tell us what you want to change and when it needs to be ready. We’ll
            review your brief and discuss the next steps.
          </p>
          <a
            className="enquiry-direct"
            href="https://wa.me/971566442008"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" /> <span>Chat on WhatsApp</span>{" "}
            <Icon name="diagonal" size={16} />
          </a>
          <a className="enquiry-direct" href="mailto:info@haloworks.ae">
            <Icon name="email" /> <span>info@haloworks.ae</span>{" "}
            <Icon name="diagonal" size={16} />
          </a>
        </div>
        <ContactForm initialService={service} />
      </div>
    </section>
  );
}
export function BlogSection({
  serviceSlug,
  id,
}: { serviceSlug: string; id: string }) {
  const guides = articles
    .filter(({ serviceSlugs }) => serviceSlugs.includes(serviceSlug))
    .sort(
      (a, b) =>
        Number(b.serviceSlugs[0] === serviceSlug) -
        Number(a.serviceSlugs[0] === serviceSlug),
    )
    .slice(0, 3);
  return (
    <section className="section-surface section-pad" id={id}>
      <div className="wrap">
        <SectionHeading
          label="Planning your project"
          title="Related guides"
          href="/blog/"
          link="All guides"
        />
        <div className="three-grid">
          {guides.map((a) => (
            <Link
              className="article-card"
              key={a.slug}
              href={`/blog/${a.slug}/`}
              prefetch={false}
            >
              <Picture
                name={a.image}
                alt=""
                sizes="(max-width: 700px) 100vw, 33vw"
              />
              <span className="eyebrow">{a.category}</span>
              <h3>{a.title}</h3>
              <p>{a.excerpt}</p>
              <span className="text-link">
                Read guide <Icon name="diagonal" size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ClosingCTA() {
  return (
    <section className="closing-cta">
      <div className="wrap" data-reveal>
        <div>
          <p className="eyebrow">Project enquiries</p>
          <h2>Tell us what you want to change.</h2>
        </div>
        <Button href="/contact/">Discuss your project</Button>
      </div>
    </section>
  );
}
