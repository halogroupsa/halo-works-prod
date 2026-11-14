import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Icon } from "./icons";
import "./project-photo-lightbox.css";

export type ProjectPhoto = {
  label: string;
  thumbnail: string;
  fullSize: string;
  caption?: string;
};

export type ProjectPhotoDetails = {
  description: string;
  clientName?: string;
  location?: string;
  projectHref?: string;
  sourceHref: string;
};

export default function ProjectPhotoLightbox({
  title,
  photos,
  details,
  initialIndex,
  onClose,
}: {
  title: string;
  photos: ProjectPhoto[];
  details: ProjectPhotoDetails;
  initialIndex: number;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(initialIndex);
  const photo = photos[index];
  const hasMultiple = photos.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.showModal();
    return () => dialog?.close();
  }, []);

  useEffect(() => {
    const strip = thumbnailsRef.current;
    const active = strip?.querySelector('[aria-current="true"]');
    if (!strip || !active) return;
    const track = strip.getBoundingClientRect();
    const thumb = active.getBoundingClientRect();
    if (thumb.left < track.left) strip.scrollLeft += thumb.left - track.left;
    if (thumb.right > track.right) strip.scrollLeft += thumb.right - track.right;
  }, [index]);

  function move(direction: -1 | 1) {
    setIndex((current) => (current + direction + photos.length) % photos.length);
  }

  return (
    <dialog
      ref={dialogRef}
      className="project-photo-lightbox"
      aria-label={`${title} photo viewer`}
      onClose={(event) => {
        if (!event.currentTarget.open) onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close();
      }}
      onKeyDown={(event) => {
        if (hasMultiple && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <div className="project-photo-panel">
        <header className="project-photo-header">
          <div>
            <p className="eyebrow">Project photography</p>
            <h2>{title}</h2>
          </div>
          <button
            className="project-photo-control"
            type="button"
            aria-label="Close photo viewer"
            onClick={() => dialogRef.current?.close()}
          >
            <Icon name="close" size={24} />
          </button>
        </header>
        <div className="project-photo-stage">
          <div className="project-photo-image">
            <img src={photo.fullSize} alt={photo.label} />
          </div>
          <div className="project-photo-story">
            <div aria-live="polite">
              <h3>{photo.caption ?? "Project photo"}</h3>
              <p>{photo.label}</p>
            </div>
            <p>{details.description}</p>
            {(details.clientName || details.location) && (
              <dl className="project-photo-facts">
                {details.clientName && (
                  <div><dt>Client</dt><dd>{details.clientName}</dd></div>
                )}
                {details.location && (
                  <div><dt>Location</dt><dd>{details.location}</dd></div>
                )}
              </dl>
            )}
            <div className="project-photo-links">
              {details.projectHref && (
                <Link
                  className="text-link"
                  href={details.projectHref}
                  prefetch={false}
                  onNavigate={() => dialogRef.current?.close()}
                >
                  View project details <Icon name="diagonal" size={15} />
                </Link>
              )}
              <a className="text-link" href={details.sourceHref}>
                View on halo.ae <Icon name="diagonal" size={15} />
              </a>
            </div>
          </div>
        </div>
        {hasMultiple && (
          <footer className="project-photo-footer">
            <button
              className="project-photo-control project-photo-prev"
              type="button"
              aria-label="Previous photo in viewer"
              onClick={() => move(-1)}
            >
              <Icon name="arrow" />
            </button>
            <span className="project-photo-counter" aria-label={`Photo ${index + 1} of ${photos.length}`}>
              {index + 1} / {photos.length}
            </span>
            <div ref={thumbnailsRef} className="project-photo-thumbnails" role="group" aria-label="Photo thumbnails">
              {photos.map((item, photoIndex) => (
                <button
                  key={photoIndex}
                  type="button"
                  aria-label={`View photo ${photoIndex + 1}. ${item.label}`}
                  aria-current={photoIndex === index ? "true" : undefined}
                  onClick={() => setIndex(photoIndex)}
                >
                  <img src={item.thumbnail} alt="" width={76} height={58} loading="lazy" />
                </button>
              ))}
            </div>
            <button
              className="project-photo-control"
              type="button"
              aria-label="Next photo in viewer"
              onClick={() => move(1)}
            >
              <Icon name="arrow" />
            </button>
          </footer>
        )}
      </div>
    </dialog>
  );
}
