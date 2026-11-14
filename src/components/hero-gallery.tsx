"use client";

import { imageDimensions } from "@/lib/images";
import { useSceneSelection } from "./scene-selection";

const scenes = [
  {
    name: "Living",
    image: "hero-courtyard",
    alt: "Living room with walnut joinery and sunlight across a limestone floor",
  },
  {
    name: "Workplaces",
    image: "workplace",
    alt: "Workplace with a curved stone reception desk and timber wall",
  },
  {
    name: "Joinery",
    image: "kitchen",
    alt: "Kitchen with bronze fittings and fitted walnut cabinetry",
  },
];

export default function HeroGallery({
  children,
}: {
  children: React.ReactNode;
}) {
  const selection = useSceneSelection(0);

  return (
    <section
      className="hero-stage"
      data-header-overlay="all"
      aria-labelledby="home-title"
    >
      <div className="hero-stage-media">
        {selection.mounted.map((index) => {
          const scene = scenes[index];
          const visible = selection.visible === index;
          return (
            <picture
              key={scene.image}
              className="scene-layer"
              data-visible={visible}
              data-opening={index === 0}
              aria-hidden={!visible}
              onLoadCapture={() => selection.load(index)}
              onErrorCapture={() => selection.fail(index)}
            >
              {index === 0 && (
                <source
                  media="(max-width: 600px)"
                  srcSet="/images/hero-courtyard-portrait.webp"
                />
              )}
              <img
                src={"/images/" + scene.image + ".webp"}
                srcSet={
                  index === 0
                    ? "/images/hero-courtyard-640.webp 640w, /images/hero-courtyard-1120.webp 1120w, /images/hero-courtyard.webp 1774w"
                    : `/images/${scene.image}-640.webp 640w, /images/${scene.image}.webp 1536w`
                }
                sizes="100vw"
                {...imageDimensions(scene.image)}
                alt={scene.alt}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            </picture>
          );
        })}
      </div>
      <div className="wrap hero-stage-inner">
        <div className="hero-stage-copy">{children}</div>
        <div className="hero-stage-controls">
          <div
            className="hero-scenes"
            role="group"
            aria-label="Choose an interior"
          >
            {scenes.map((item, i) => (
              <button
                type="button"
                key={item.name}
                aria-pressed={selection.requested === i}
                onClick={() => selection.select(i)}
              >
                {item.name}
              </button>
            ))}
          </div>
          <p className="hero-stage-caption" aria-live="polite">
            {scenes[selection.visible].name}
          </p>
        </div>
      </div>
    </section>
  );
}
