import Link from "next/link";
import type { LocationCaseStudy } from "@/lib/location-case-studies";
import { projectCommunities } from "@/lib/project-communities";
import { projectPath } from "@/lib/project-paths";
import type { ProjectReference } from "@/lib/project-references";
import { Icon } from "./icons";
import { ReferenceImage, referencePhotoPreview } from "./project-reference-card";
import ProjectReferencePhotos from "./project-reference-photos";

export default function LocationCaseStudies({
  studies,
  comparable = false,
}: {
  studies: (LocationCaseStudy | ProjectReference)[];
  comparable?: boolean;
}) {
  return (
    <section className="project-records" aria-labelledby="location-case-studies">
      <h2 id="location-case-studies">
        {comparable ? "Comparable project case study" : "Completed project case studies"}
      </h2>
      <p className="project-section-intro">
        {comparable
          ? "A completed Halo Interiors project with a similar scope, at the location shown below."
          : "Project photography and completed work from the Halo Interiors portfolio."}
      </p>
      {studies.map((study) => <CaseStudyArticle key={study.slug} study={study} />)}
    </section>
  );
}

function CaseStudyArticle({ study }: { study: LocationCaseStudy | ProjectReference }) {
  const fullCase = "property" in study;
  const location = study.location ?? projectCommunities.find(({ slug }) => slug === study.area)?.name;
  const clientName = study.clientName || (fullCase ? "Private residential client" : "Name undisclosed");
  const projectHref = fullCase ? undefined : projectPath(study.slug);
  const sourceHref = `https://halo.ae${study.sourcePath}`;
  const photos = fullCase
    ? study.photos.map(({ file, alt, room }) => {
        const src = `/images/location-case-studies/${file}`;
        return {
          id: file,
          image: (
            <img
              src={src}
              alt={alt}
              width={1600}
              height={1200}
              loading={room ? "eager" : "lazy"}
            />
          ),
          preview: {
            label: alt,
            thumbnail: src.replace(/\.webp$/, "-320.webp"),
            fullSize: src,
            caption: room || "Project overview",
          },
        };
      })
    : study.photos.map((photo, index) => ({
        id: photo.name,
        image: (
          <ReferenceImage
            photo={photo}
            sizes="(max-width: 767px) 92vw, (max-width: 1440px) 53vw, 740px"
            eager={index > 0}
          />
        ),
        preview: { ...referencePhotoPreview(photo), caption: "Project detail" },
      }));

  return (
    <article className="location-case-study" aria-labelledby={study.slug}>
      <div className="location-case-copy">
        <p className="eyebrow">{fullCase ? study.scope : study.category}</p>
        <h3 id={study.slug}>{study.title}</h3>
        <p>{study.description}</p>
        <dl className="location-case-facts">
          <div>
            <dt>Client</dt>
            <dd>{clientName}</dd>
          </div>
          {location && (
            <div>
              <dt>Location</dt>
              <dd>{location}</dd>
            </div>
          )}
          {fullCase && study.property !== location && (
            <div>
              <dt>Property</dt>
              <dd>{study.property}</dd>
            </div>
          )}
          <div>
            <dt>Delivered by</dt>
            <dd>Halo Interiors</dd>
          </div>
        </dl>
        <div className="location-case-links">
          {projectHref && (
            <Link className="text-link" href={projectHref} prefetch={false}>
              View project details <Icon name="diagonal" size={15} />
            </Link>
          )}
          <a className="text-link" href={sourceHref}>
            View on halo.ae <Icon name="diagonal" size={15} />
          </a>
        </div>
      </div>
      <ProjectReferencePhotos
        title={study.title}
        photos={photos}
        details={{
          description: study.description,
          clientName,
          location,
          projectHref,
          sourceHref,
        }}
      />
    </article>
  );
}
