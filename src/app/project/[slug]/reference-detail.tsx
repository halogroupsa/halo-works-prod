import Link from "next/link";
import { Icon } from "@/components/icons";
import ProjectBudgetNote from "@/components/project-budget-note";
import ProjectEnquiryActions from "@/components/project-enquiry-actions";
import { ReferenceImage, referencePhotoPreview } from "@/components/project-reference-card";
import ProjectReferencePhotos from "@/components/project-reference-photos";
import { Breadcrumbs } from "@/components/seo";
import { PageIntro } from "@/components/ui";
import { haloWorksBudgetBand } from "@/lib/project-budget";
import { projectCommunities } from "@/lib/project-communities";
import type { ProjectReference } from "@/lib/project-references";
import { projectAreaPath, projectPath } from "@/lib/project-paths";
import { absoluteUrl, pageMetadata } from "@/lib/seo";

export function referenceMetadata(project: ProjectReference) {
  const community = projectCommunities.find(
    (item) => item.slug === project.area,
  );
  const location = project.location ?? community?.name;
  const meta = pageMetadata(
    location ? project.title + " in " + location : project.title,
    project.description,
    projectPath(project.slug),
  );
  const photo = project.photos[0];
  const images = [
    {
      url: absoluteUrl("/images/project-references/" + photo.name + ".webp"),
      alt: photo.alt,
    },
  ];
  return {
    ...meta,
    openGraph: { ...meta.openGraph, images },
    twitter: { ...meta.twitter, images },
  };
}

export default function ReferenceDetail({ project }: { project: ProjectReference }) {
  const community = projectCommunities.find(
    (item) => item.slug === project.area,
  );
  const location = project.location ?? community?.name;
  const sourceHref = `https://halo.ae${project.sourcePath}`;

  return (
    <article className="wrap project-index project-reference-page">
      <Breadcrumbs
        items={[
          { name: "Projects", href: "/projects/" },
          ...(community
            ? [{ name: community.name, href: projectAreaPath(community.slug) }]
            : []),
          { name: project.title, href: projectPath(project.slug) },
        ]}
      />
      <PageIntro
        label={location ? location + " · " + project.category : project.category}
        title={project.title}
        description={project.description}
      />
      {project.clientName && (
        <p className="reference-client">
          Client · <strong>{project.clientName}</strong>
        </p>
      )}
      <div className="reference-layout">
        <figure className="reference-gallery" data-reveal>
          <ProjectReferencePhotos
            title={project.title}
            details={{
              description: project.description,
              clientName: project.clientName,
              location,
              sourceHref,
            }}
            photos={project.photos.map((photo, index) => ({
              id: photo.name,
              image: (
                <ReferenceImage
                  photo={photo}
                  sizes="(max-width: 767px) 92vw, (max-width: 1280px) 55vw, 700px"
                  eager={index === 0}
                />
              ),
              preview: referencePhotoPreview(photo),
            }))}
          />
          <figcaption>Photography from the Halo Interiors portfolio.</figcaption>
        </figure>
        <section className="reference-scope" aria-labelledby="reference-scope-title" data-reveal>
          <p className="eyebrow">Planning your project</p>
          <h2 id="reference-scope-title">Plan a similar scope</h2>
          <ul>
            {project.scope.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            The final scope and cost depend on the property, the selected
            finishes and the site assessment.
          </p>
          <p className="reference-budget">
            <span>Halo Works project budget</span>
            <strong>{haloWorksBudgetBand}</strong>
          </p>
          <ProjectEnquiryActions />
        </section>
      </div>
      <nav className="reference-links" aria-label="Related project pages" data-reveal>
        <a className="text-link" href={sourceHref}>
          View source on halo.ae <Icon name="diagonal" size={15} />
        </a>
        <Link className="text-link" prefetch={false} href="/projects/">
          All projects <Icon name="diagonal" size={15} />
        </Link>
        {community && (
          <Link
            className="text-link"
            prefetch={false}
            href={projectAreaPath(community.slug)}
          >
            {community.name} project guide <Icon name="diagonal" size={15} />
          </Link>
        )}
        <Link className="text-link" prefetch={false} href="/cost-guide/">
          Renovation cost guide <Icon name="diagonal" size={15} />
        </Link>
      </nav>
      <ProjectBudgetNote />
    </article>
  );
}
