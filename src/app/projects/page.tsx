import Link from "next/link";
import { ClosingCTA, ProjectCard } from "@/components/site-sections";
import { Breadcrumbs } from "@/components/seo";
import { Icon } from "@/components/icons";
import ProjectBudgetNote from "@/components/project-budget-note";
import ProjectEnquiryActions from "@/components/project-enquiry-actions";
import ProjectFilter from "@/components/project-filter";
import ProjectReferenceCard from "@/components/project-reference-card";
import { PageIntro } from "@/components/ui";
import { haloWorksBudgetBand } from "@/lib/project-budget";
import { projectReferences } from "@/lib/project-references";
import {
  projectAreas,
  visibleProjects,
} from "@/lib/project-visibility";
import { projectAreaPath } from "@/lib/project-paths";
import { pageMetadata } from "@/lib/seo";
import { isPublishedProject, publishedProjects } from "@/lib/site-content";

export const metadata = pageMetadata(
  "Renovation & Fit-Out Projects",
  "Explore renovation, fit-out and joinery projects and plan your scope by Dubai community.",
  "/projects/",
);

const communityGroups = [
  "Apartments",
  "Villas & townhouses",
  "Workplaces",
] as const;

export default function Projects() {
  const drafts = visibleProjects.filter(
    (project) => !isPublishedProject(project),
  );
  const otherAreas = projectAreas.filter(({ guide }) => !guide);

  return (
    <>
      <section className="wrap project-index project-browse">
        <Breadcrumbs items={[{ name: "Projects", href: "/projects/" }]} />
        <PageIntro
          label={"Halo Works · " + haloWorksBudgetBand}
          title="Projects"
          description="Explore renovation, fit-out and joinery projects by community. See what to prioritise for your property and budget."
        />
        <div className="project-browse-actions">
          <ProjectEnquiryActions />
          <Link prefetch={false} className="text-link" href="#project-locations-title">
            Browse by community <Icon name="down" size={16} />
          </Link>
        </div>
        <section
          className="project-records"
          aria-labelledby="project-examples-title"
        >
          <h2 id="project-examples-title">Project examples</h2>
          <p className="project-section-intro">
            Browse kitchens, bathrooms, fitted storage and workspaces. Each
            example includes a scope you can adapt for your own brief.
          </p>
          <ProjectFilter
            entries={projectReferences.map((project) => ({
              slug: project.slug,
              category: project.category,
              card: <ProjectReferenceCard project={project} />,
            }))}
          />
        </section>
        {publishedProjects.length > 0 && (
          <section
            className="project-records"
            aria-labelledby="completed-projects-title"
          >
            <h2 id="completed-projects-title">Completed Halo Works projects</h2>
            <ProjectFilter
              entries={publishedProjects.map((project) => ({
                slug: project.slug,
                category: project.category,
                card: <ProjectCard project={project} />,
              }))}
            />
          </section>
        )}
        {drafts.length > 0 && (
          <section
            className="project-records"
            aria-labelledby="project-drafts-title"
          >
            <h2 id="project-drafts-title">Case study layout previews</h2>
            <p className="project-preview-notice">
              Review layouts reserved for approved photographs and project
              facts.
            </p>
            <ul className="project-record-grid">
              {drafts.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </section>
        )}
        <nav
          className="community-directory"
          aria-labelledby="project-locations-title"
        >
          <h2 id="project-locations-title">Browse by community</h2>
          <div className="community-groups">
            {communityGroups.map((group, index) => (
              <section key={group} data-reveal="stagger" data-reveal-order={index}>
                <h3>{group}</h3>
                <ul>
                  {projectAreas
                    .filter(({ guide }) => guide?.propertyType === group)
                    .map((area) => (
                      <li key={area.slug}>
                        <Link
                          href={projectAreaPath(area.slug)}
                          prefetch={false}
                        >
                          <strong>
                            {area.name} <Icon name="diagonal" size={14} />
                          </strong>
                          <span>{area.guide?.focus}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </section>
            ))}
            {otherAreas.length > 0 && (
              <section>
                <h3>More locations</h3>
                <ul>
                  {otherAreas.map((area) => (
                    <li key={area.slug}>
                      <Link href={projectAreaPath(area.slug)} prefetch={false}>
                        <strong>
                          {area.name} <Icon name="diagonal" size={14} />
                        </strong>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </nav>
        <ProjectBudgetNote />
        <div className="service-index-outdoor" data-reveal>
          <div>
            <h2>Looking for ideas?</h2>
            <p>
              Explore finishes, joinery and layouts in the design gallery.
            </p>
          </div>
          <Link prefetch={false} className="text-link" href="/gallery/">
            Design gallery <Icon name="diagonal" size={16} />
          </Link>
        </div>
      </section>
      <ClosingCTA />
    </>
  );
}
