import Link from "next/link";
import { notFound } from "next/navigation";
import LocationCaseStudies from "@/components/location-case-studies";
import { Breadcrumbs } from "@/components/seo";
import { ClosingCTA, ProjectCard } from "@/components/site-sections";
import ProjectBudgetNote from "@/components/project-budget-note";
import ProjectEnquiryActions from "@/components/project-enquiry-actions";
import ProjectReferenceCard from "@/components/project-reference-card";
import { Icon } from "@/components/icons";
import { PageIntro } from "@/components/ui";
import { locationCaseStudies } from "@/lib/location-case-studies";
import { haloWorksBudgetBand } from "@/lib/project-budget";
import { projectReferences } from "@/lib/project-references";
import { projectAreas } from "@/lib/project-visibility";
import { projectAreaPath } from "@/lib/project-paths";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projectAreas.map(({ slug }) => ({ area: slug }));
}

export const dynamicParams = false;

type Props = { params: Promise<{ area: string }> };

export async function generateMetadata({ params }: Props) {
  const { area } = await params;
  const location = projectAreas.find(({ slug }) => slug === area);
  if (!location) return {};
  const { guide, name } = location;
  return pageMetadata(
    "Renovation & fit-out projects in " + name,
    guide
      ? `Plan a Halo Works project in ${name}. Explore ${guide.focus.toLowerCase()}, site access and what to include in your brief.`
      : `Explore completed Halo Works projects in ${name}, with scope, photographs and delivery details.`,
    projectAreaPath(location.slug),
  );
}

export default async function ProjectLocation({ params }: Props) {
  const { area } = await params;
  const location = projectAreas.find(({ slug }) => slug === area);
  if (!location) notFound();

  const { guide, name, projects } = location;
  const caseStudies = locationCaseStudies.filter((study) => study.area === area);
  const localReferences = projectReferences.filter(
    (project) => project.area === area || project.parentArea === area,
  );
  const featuredStudies = caseStudies.length > 0 ? caseStudies : localReferences;
  const comparable = guide?.comparableCaseStudy;
  const comparableStudy = comparable && (
    locationCaseStudies.find((study) => study.slug === comparable) ??
    projectReferences.find((project) => project.slug === comparable)
  );
  const relatedReference = projectReferences.find(
    (project) => project.slug === guide?.relatedReference && project.area !== area,
  );

  return (
    <>
      <section className="wrap project-index project-browse">
        <Breadcrumbs
          items={[
            { name: "Projects", href: "/projects/" },
            { name, href: projectAreaPath(area) },
          ]}
        />
        <PageIntro
          label={
            guide
              ? `${guide.propertyType} · ${haloWorksBudgetBand}`
              : "Browse by location"
          }
          title={"Projects in " + name}
          description={
            guide
              ? `${guide.focus}. See what to prioritise, what to check on site and what to send for an assessment.`
              : "Explore completed projects, with scope, duration and Halo Works’ delivery role."
          }
        />
        <ProjectEnquiryActions />
        {featuredStudies.length > 0 ? (
          <LocationCaseStudies studies={featuredStudies} />
        ) : comparableStudy && projects.length === 0 ? (
          <LocationCaseStudies studies={[comparableStudy]} comparable />
        ) : null}
        {projects.length > 0 && (
          <section
            className="project-records"
            aria-labelledby="area-projects-title"
          >
            <h2 id="area-projects-title">Halo Works case studies</h2>
            <ul className="project-record-grid">
              {projects.map((project, index) => (
                <li
                  key={project.slug}
                  data-reveal="stagger"
                  data-reveal-order={index % 3}
                >
                  <ProjectCard project={project} showSummary />
                </li>
              ))}
            </ul>
          </section>
        )}
        {caseStudies.length > 0 && localReferences.length > 0 && (
          <section
            className="project-records"
            aria-labelledby="area-references-title"
          >
            <h2 id="area-references-title">
              More projects in {name}
            </h2>
            <p className="project-section-intro">
              Selected work from the Halo Interiors portfolio.
            </p>
            <ul className="project-record-grid">
              {localReferences.map((project, index) => (
                <li
                  key={project.slug}
                  data-reveal="stagger"
                  data-reveal-order={index % 3}
                >
                  <ProjectReferenceCard project={project} showSummary />
                </li>
              ))}
            </ul>
          </section>
        )}
        {guide && (
          <section
            className="project-records community-guide"
            aria-labelledby="area-guide-title"
          >
            <h2 id="area-guide-title">Plan your scope</h2>
            <ul className="document-grid">
              <li data-reveal="stagger">
                <h3>What to prioritise</h3>
                <p>{guide.scope}</p>
              </li>
              <li data-reveal="stagger" data-reveal-order={1}>
                <h3>Access and approvals</h3>
                <p>{guide.access}</p>
              </li>
              <li data-reveal="stagger" data-reveal-order={2}>
                <h3>What to send us</h3>
                <p>{guide.brief}</p>
              </li>
            </ul>
          </section>
        )}
        {relatedReference && (
          <section
            className="project-records"
            aria-labelledby="area-comparable-title"
          >
            <h2 id="area-comparable-title">Comparable project scope</h2>
            <ul className="project-record-grid">
              <li data-reveal>
                <ProjectReferenceCard project={relatedReference} showSummary />
              </li>
            </ul>
          </section>
        )}
        <nav className="reference-links" aria-label="Related project pages" data-reveal>
          <Link href="/projects/" prefetch={false} className="text-link">
            Browse all projects <Icon name="diagonal" size={16} />
          </Link>
          <Link href="/approvals/" prefetch={false} className="text-link">
            Approvals guide <Icon name="diagonal" size={16} />
          </Link>
        </nav>
        <ProjectBudgetNote />
      </section>
      <ClosingCTA />
    </>
  );
}
