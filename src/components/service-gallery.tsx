"use client";

import { Picture } from "./ui";
import { useSceneSelection } from "./scene-selection";

export type Scene = { image: string; label: string; alt: string };

export default function ServiceGallery({ scenes }: { scenes: Scene[] }) {
  const selection = useSceneSelection(scenes.length > 1 ? 1 : 0);

  return (
    <div className="service-gallery">
      <figure className="service-gallery-main">
        {selection.mounted.map((index) => {
          const scene = scenes[index];
          const visible = selection.visible === index;
          return (
            <div
              key={scene.image}
              className="scene-layer"
              data-visible={visible}
              aria-hidden={!visible}
              onLoadCapture={() => selection.load(index)}
              onErrorCapture={() => selection.fail(index)}
            >
              <Picture
                name={scene.image}
                alt={scene.alt}
                sizes="(max-width: 760px) 100vw, 50vw"
              />
            </div>
          );
        })}
        <figcaption aria-live="polite">
          {scenes[selection.visible].label}
        </figcaption>
      </figure>
      <div
        className="service-gallery-thumbs"
        role="group"
        aria-label="Service images"
      >
        {scenes.map((item, i) => (
          <button
            type="button"
            key={item.image}
            aria-pressed={i === selection.requested}
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") selection.select(i);
            }}
            onClick={() => selection.select(i)}
          >
            <Picture
              name={item.image}
              alt=""
              sizes="(max-width: 760px) 33vw, 16vw"
            />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
