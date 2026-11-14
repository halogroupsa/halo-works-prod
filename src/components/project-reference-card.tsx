import Link from "next/link";
import type { ProjectReference } from "@/lib/project-references";
import { projectPath } from "@/lib/project-paths";
import { projectCommunities } from "@/lib/project-communities";
import { Icon } from "./icons";
import ProjectReferencePhotos from "./project-reference-photos";

const cardPhotoSizes = "(max-width: 767px) 85vw, (max-width: 1024px) 45vw, 33vw";

export function referencePhotoPreview(photo: ProjectReference["photos"][number]) {
  const src = "/images/project-references/" + photo.name;
  return { label: photo.alt, thumbnail: src + "-640.webp", fullSize: src + ".webp" };
}

export function ReferenceImage({
  photo,
  sizes,
  eager = false,
}: {
  photo: ProjectReference["photos"][number];
  sizes: string;
  eager?: boolean;
}) {
  const src = "/images/project-references/" + photo.name;
  const [width, height] =
    photo.dimensions ?? (photo.portrait ? [1152, 1536] : [1536, 1152]);
  return (
    <img
      src={src + ".webp"}
      srcSet={src + "-640.webp 640w, " + src + ".webp " + width + "w"}
      sizes={sizes}
      alt={photo.alt}
      width={width}
      height={height}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}

export default function ProjectReferenceCard({
  project,
  showPhotos = false,
  showSummary = false,
  sizes = cardPhotoSizes,
}: {
  project: ProjectReference;
  showPhotos?: boolean;
  showSummary?: boolean;
  sizes?: string;
}) {
  const community = projectCommunities.find(
    ({ slug }) => slug === project.area,
  );
  const location = project.location ?? community?.name;
  const href = projectPath(project.slug);
  const caption = (
    <div className="card-heading">
      <p className="eyebrow">
        {[location, project.category].filter(Boolean).join(" · ")}
      </p>
      <h3>{project.title}</h3>
      {showSummary && (
        <>
          {project.clientName && <p>Client · {project.clientName}</p>}
          <p>{project.description}</p>
        </>
      )}
      <span>View project <Icon name="diagonal" size={15} /></span>
    </div>
  );

  if (showPhotos) {
    return (
      <article className="project-card project-card--service">
        <ProjectReferencePhotos
          title={project.title}
          compact
          details={{
            description: project.description,
            clientName: project.clientName,
            location,
            projectHref: href,
            sourceHref: `https://halo.ae${project.sourcePath}`,
          }}
          photos={project.photos.map((photo) => ({
            id: photo.name,
            image: <ReferenceImage photo={photo} sizes={sizes} />,
            preview: referencePhotoPreview(photo),
          }))}
        />
        <Link className="service-project-link" href={href} prefetch={false}>
          {caption}
        </Link>
      </article>
    );
  }

  return (
    <Link className="project-card" href={href} prefetch={false}>
      <ReferenceImage photo={project.photos[0]} sizes={sizes} />
      {caption}
    </Link>
  );
}
