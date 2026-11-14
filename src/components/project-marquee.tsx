"use client";

import Link from "next/link";
import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./icons";

const reducedMotion = "(prefers-reduced-motion: reduce)";
const scrollSpeed = 0.028;

export default function ProjectMarquee({ children }: { children: ReactNode }) {
  const track = useRef<HTMLUListElement>(null);
  const direction = useRef<1 | -1>(1);
  const [scrollLimit, setScrollLimit] = useState(0);
  const [canPlay, setCanPlay] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);

  useEffect(() => {
    const element = track.current;
    if (!element) return;

    const motion = matchMedia(reducedMotion);
    let inView = false;
    const sync = () => setCanPlay(inView && !motion.matches && !document.hidden);
    const intersection = new IntersectionObserver(
      ([entry]) => {
        inView = entry.intersectionRatio >= 0.15;
        sync();
      },
      { threshold: 0.15 },
    );
    const measure = () => setScrollLimit(element.scrollWidth - element.clientWidth);
    const resize = new ResizeObserver(measure);

    measure();
    intersection.observe(element);
    resize.observe(element);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      intersection.disconnect();
      resize.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element || !canPlay || isPaused || isHovered || hasFocus || scrollLimit <= 1) {
      return;
    }

    // Keep subpixel progress between frames even when the browser rounds scrollLeft.
    let position = element.scrollLeft;
    let previousTime: number | undefined;
    const advance = (time: number) => {
      const elapsed = Math.min(time - (previousTime ?? time), 40);
      position += direction.current * elapsed * scrollSpeed;
      if (position <= 0 || position >= scrollLimit) {
        direction.current = position <= 0 ? 1 : -1;
        position = Math.max(0, Math.min(position, scrollLimit));
      }
      element.scrollLeft = position;
      previousTime = time;
      frame = requestAnimationFrame(advance);
    };

    let frame = requestAnimationFrame(advance);
    return () => cancelAnimationFrame(frame);
  }, [canPlay, hasFocus, isHovered, isPaused, scrollLimit]);

  function move(step: -1 | 1) {
    const element = track.current;
    if (!element) return;

    setIsPaused(true);
    const atEnd = step === 1 && element.scrollLeft >= scrollLimit - 1;
    const atStart = step === -1 && element.scrollLeft <= 1;
    const distance = element.clientWidth * 0.8 * step;
    element.scrollTo({
      left: atEnd ? 0 : atStart ? scrollLimit : element.scrollLeft + distance,
      behavior: matchMedia(reducedMotion).matches ? "instant" : "smooth",
    });
  }

  return (
    <section
      className="section-surface section-pad project-marquee"
      aria-labelledby="more-projects-title"
    >
      <div className="wrap">
        <div className="home-section-heading" data-reveal>
          <div>
            <p className="eyebrow">The portfolio</p>
            <h2 id="more-projects-title">More projects</h2>
          </div>
          <div className="project-marquee-controls" hidden={scrollLimit <= 1}>
            <button
              type="button"
              aria-label="Previous portfolio projects"
              aria-controls="project-marquee-track"
              onClick={() => move(-1)}
            >
              <Icon name="arrow" size={20} />
            </button>
            <button
              type="button"
              aria-label="Next portfolio projects"
              aria-controls="project-marquee-track"
              onClick={() => move(1)}
            >
              <Icon name="arrow" size={20} />
            </button>
            <button
              type="button"
              className="project-marquee-playback"
              aria-label={isPaused ? "Play portfolio scroll" : "Pause portfolio scroll"}
              aria-controls="project-marquee-track"
              onClick={() => setIsPaused((paused) => !paused)}
            >
              <Icon name={isPaused ? "play" : "pause"} size={20} />
            </button>
          </div>
        </div>
        <ul
          id="project-marquee-track"
          className="project-marquee-track"
          ref={track}
          aria-label="Portfolio projects"
          onPointerEnter={(event) => {
            if (event.pointerType === "mouse") setIsHovered(true);
          }}
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse") setIsHovered(false);
          }}
          onPointerDown={(event) => {
            if (event.pointerType !== "mouse") setIsPaused(true);
          }}
          onFocus={() => setHasFocus(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setHasFocus(false);
          }}
        >
          {Children.map(children, (card) => <li>{card}</li>)}
          <li className="project-marquee-archive">
            <Link prefetch={false} href="/projects/">
              <span className="eyebrow">Halo Works portfolio</span>
              <span>View all projects <Icon name="diagonal" size={25} /></span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
