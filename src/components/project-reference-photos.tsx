"use client";

import { useState, type MouseEvent, type ReactNode } from "react";
import { Icon } from "./icons";
import ProjectPhotoLightbox, { type ProjectPhoto, type ProjectPhotoDetails } from "./project-photo-lightbox";
import { useSceneSelection } from "./scene-selection";

type GalleryPhoto = {
  id: string;
  image: ReactNode;
  preview: ProjectPhoto;
};

export default function ProjectReferencePhotos({
  title,
  photos,
  details,
  compact = false,
}: {
  title: string;
  photos: GalleryPhoto[];
  details: ProjectPhotoDetails;
  compact?: boolean;
}) {
  const selection = useSceneSelection(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const count = photos.length;
  const preview = photos[selection.visible].preview;

  function move(direction: -1 | 1) {
    selection.select((selection.requested + direction + count) % count);
  }

  function openLightbox(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    event.currentTarget.focus({ preventScroll: true });
    setLightboxIndex(selection.visible);
  }

  return (
    <div role="group" aria-label={`${title} photos`}>
      <div className="project-reference-photos">
        {selection.mounted.map((index) => {
          const photo = photos[index];
          const visible = selection.visible === index;
          return (
            <div
              key={photo.id}
              className="scene-layer"
              data-visible={visible}
              data-opening={index === 0}
              aria-hidden={!visible}
              onLoadCapture={() => selection.load(index)}
              onErrorCapture={() => selection.fail(index)}
            >
              {photo.image}
            </div>
          );
        })}
        <a
          className="project-reference-photo-open"
          href={preview.fullSize}
          target="_blank"
          rel="noopener noreferrer"
          aria-haspopup="dialog"
          aria-label={`Enlarge photo: ${preview.label}`}
          onClick={openLightbox}
        >
          <span aria-hidden="true"><Icon name="expand" size={19} /></span>
        </a>
        <span className="project-reference-photo-count" aria-live="polite">
          <span className="sr-only">Photo {selection.visible + 1} of {count}</span>
          <span aria-hidden="true">{selection.visible + 1} / {count}</span>
        </span>
        {count > 1 && (
          <div className="project-reference-photo-controls">
            <button type="button" aria-label="Previous project photo" onClick={() => move(-1)}>
              <Icon name="arrow" size={18} />
            </button>
            <button type="button" aria-label="Next project photo" onClick={() => move(1)}>
              <Icon name="arrow" size={18} />
            </button>
          </div>
        )}
      </div>
      {!compact && preview.caption && (
        <p className="project-reference-photo-caption" aria-live="polite">
          <strong>{preview.caption}</strong> · {preview.label}
        </p>
      )}
      {!compact && (
        <div className="reference-gallery-tools">
          {count > 1 && (
            <div className="reference-gallery-thumbnails" role="group" aria-label="Choose a project photo">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  type="button"
                  aria-label={`Photo ${index + 1}. ${photo.preview.label}`}
                  aria-pressed={index === selection.requested}
                  onClick={() => selection.select(index)}
                >
                  <img src={photo.preview.thumbnail} alt="" width={76} height={58} loading="lazy" />
                </button>
              ))}
            </div>
          )}
          <a
            className="text-link"
            href={preview.fullSize}
            target="_blank"
            rel="noopener noreferrer"
            aria-haspopup="dialog"
            onClick={openLightbox}
          >
            Full-size photo <Icon name="expand" size={15} />
          </a>
        </div>
      )}
      {lightboxIndex !== null && (
        <ProjectPhotoLightbox
          title={title}
          photos={photos.map((photo) => photo.preview)}
          details={details}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
