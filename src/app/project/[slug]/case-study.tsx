import Link from "next/link";
import { isPublishedProject, publishedProjects, type Project } from "@/lib/site-content";
import { projectAreas } from "@/lib/project-visibility";
import { projectAreaPath, projectPath } from "@/lib/project-paths";
import { pageMetadata } from "@/lib/seo";
import PageHero from "@/components/page-hero";
import {
  ImagePlaceholder,
  ProjectCard,
  ClosingCTA,
} from "@/components/site-sections";
import ProjectEnquiryActions from "@/components/project-enquiry-actions";
import { Icon } from "@/components/icons";

export function caseStudyMetadata(project: Project) {
  const live = isPublishedProject(project);
  const meta = pageMetadata(
    live ? project.title : project.category + " case study layout",
    live
      ? project.brief.slice(0, 170)
      : "Case study layout preview awaiting approved project details and photographs.",
    projectPath(project.slug),
  );
  if (live && project.after) {
    const image = { url: project.after.src, alt: project.after.alt };
    meta.openGraph = { ...meta.openGraph, images: [image] };
    meta.twitter = { ...meta.twitter, images: [image] };
  }
  return { ...meta, robots: { index: live, follow: true } };
}

export default function CaseStudy({ project }: { project: Project }) {
  const live = isPublishedProject(project);
  const title = live ? project.title : project.category;
  const location = projectAreas.find(({ projects }) =>
    projects.includes(project),
  );
  const related = live
    ? publishedProjects
        .filter(
          (other) =>
            other !== project &&
            (location?.projects.includes(other) ||
              other.services.some((service) =>
                project.services.includes(service),
              )),
        )
        .slice(0, 3)
    : [];
  const photos = [
    { label: "Before", image: project.before },
    { label: "After", image: project.after },
  ];
  const facts = [
    ...(live && project.clientName ? [["Client", project.clientName]] : []),
    ["Location", project.location],
    ["Scope", project.scope],
    ["Duration", project.duration],
    ["Halo Works’ role", project.role],
  ];
  const narrative = [
    [
      "The brief",
      project.brief,
      "Client priorities and the original condition.",
    ],
    [
      "Delivery",
      project.delivery,
      "Agreed work packages, specialist appointments and Halo Works’ responsibilities.",
    ],
    [
      "Outcome & handover",
      project.outcome,
      "Verified changes, inspections and handover details.",
    ],
  ];

  return (
    <>
      <PageHero
        variant="case"
        className={live ? "" : "page-hero--draft"}
        label={live ? project.category : "Case study layout preview"}
        title={title}
        description={
          live
            ? project.location
            : "Reserved for approved case study photographs and project details."
        }
        path={projectPath(project.slug)}
        crumb={title}
        parent={{ name: "Projects", href: "/projects/" }}
        media={
          live && project.after ? (
            <img
              src={project.after.src}
              alt={project.after.alt}
              width={1600}
              height={900}
              fetchPriority="high"
            />
          ) : (
            <ImagePlaceholder
              className="case-cover-slot"
              label="Completed space photograph"
            />
          )
        }
      />
      <div className="wrap case-action-row" id="project-details">
        <ProjectEnquiryActions />
        {location && (
          <Link
            href={projectAreaPath(location.slug)}
            prefetch={false}
            className="text-link"
          >
            More in {location.name} <Icon name="diagonal" size={16} />
          </Link>
        )}
      </div>
      <div className="case-facts-band">
        <dl className="wrap project-facts">
          {facts.map(([label, value], index) => (
            <div key={label} data-reveal="case" data-reveal-order={index}>
              <dt>{label}</dt>
              <dd>{value || "Awaiting details"}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="wrap case-body">
        <div className="case-comparison">
          <h2>Before &amp; after</h2>
          <div className="before-after-grid">
            {photos.map(({ label, image }) => (
              <figure key={label}>
                {image ? (
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                  />
                ) : (
                  <ImagePlaceholder label={label + " photograph"} />
                )}
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        {(project.gallery.length > 0 || !live) && (
          <section className="case-details">
            <h2>Work &amp; details</h2>
            <div className="gallery-grid">
              {live ? (
                project.gallery.map((image) => (
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    loading="lazy"
                    key={image.src}
                  />
                ))
              ) : (
                <>
                  <ImagePlaceholder label="Work in progress" />
                  <ImagePlaceholder label="Details & finish" />
                </>
              )}
            </div>
          </section>
        )}
        <div className="project-narrative">
          {narrative.map(([heading, copy, placeholder]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{copy || placeholder}</p>
            </section>
          ))}
        </div>
        {related.length > 0 && (
          <section
            className="project-records"
            aria-labelledby="related-projects-title"
          >
            <h2 id="related-projects-title">Related projects</h2>
            <ul className="project-record-grid">
              {related.map((other) => (
                <li key={other.slug}>
                  <ProjectCard project={other} />
                </li>
              ))}
            </ul>
          </section>
        )}
        <Link
          prefetch={false}
          className="text-link project-back"
          href="/projects/"
        >
          All projects <Icon name="diagonal" size={16} />
        </Link>
      </div>
      <ClosingCTA />
    </>
  );
}
