"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import { Icon } from "./icons";

const expandedRail = "(min-width: 992px), (min-width: 600px) and (hover: hover)";
const reducedMotion = "(prefers-reduced-motion: reduce)";
const rotationDelay = 5000;

export default function ProjectRail({ children }: { children: ReactNode }) {
  const cards = Children.toArray(children);
  const track = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const [canRotate, setCanRotate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasKeyboardFocus, setHasKeyboardFocus] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const cardCount = cards.length;

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const expanded = matchMedia(expandedRail);
    const sync = () => {
      if (expanded.matches) return;
      const max = element.scrollWidth - element.clientWidth;
      if (max <= 2 || element.scrollLeft < 2) {
        setActive(0);
        return;
      }
      if (element.scrollLeft >= max - 2) {
        setActive(element.children.length - 1);
        return;
      }
      const left = element.getBoundingClientRect().left;
      let closest = 0;
      let distance = Infinity;
      Array.from(element.children).forEach((card, index) => {
        const gap = Math.abs(card.getBoundingClientRect().left - left);
        if (gap < distance) {
          distance = gap;
          closest = index;
        }
      });
      setActive(closest);
    };
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(element);
    expanded.addEventListener("change", sync);
    element.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      expanded.removeEventListener("change", sync);
      element.removeEventListener("scroll", sync);
    };
  }, []);

  useEffect(() => {
    const element = track.current;
    if (!element || cardCount < 2) return;

    const expanded = matchMedia(expandedRail);
    const motion = matchMedia(reducedMotion);
    let inView = false;
    const sync = () => {
      setCanRotate(
        inView && expanded.matches && !motion.matches && !document.hidden,
      );
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.intersectionRatio >= 0.25;
        sync();
      },
      { threshold: 0.25 },
    );

    observer.observe(element);
    expanded.addEventListener("change", sync);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      expanded.removeEventListener("change", sync);
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [cardCount]);

  useEffect(() => {
    if (!canRotate || isHovered || hasKeyboardFocus || isPaused) return;
    const timer = window.setTimeout(() => {
      setActive((index) => (index + 1) % cardCount);
    }, rotationDelay);
    return () => window.clearTimeout(timer);
  }, [active, canRotate, cardCount, hasKeyboardFocus, isHovered, isPaused]);

  function move(direction: -1 | 1) {
    const next = active + direction;
    if (next < 0 || next >= cardCount) return;
    if (matchMedia(expandedRail).matches) {
      setActive(next);
      return;
    }
    const element = track.current;
    const card = element?.children[next];
    if (!element || !card) return;
    element.scrollTo({
      left:
        element.scrollLeft +
        card.getBoundingClientRect().left -
        element.getBoundingClientRect().left,
      behavior: matchMedia(reducedMotion).matches ? "auto" : "smooth",
    });
  }

  return (
    <div
      className="project-rail"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsHovered(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsHovered(false);
      }}
      onFocus={(event) =>
        setHasKeyboardFocus(event.target.matches(":focus-visible"))
      }
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHasKeyboardFocus(false);
        }
      }}
    >
      <ul
        className="project-rail-track"
        id="project-showcase-track"
        ref={track}
        aria-label="Featured projects"
      >
        {Children.map(cards, (card, index) => (
          <li
            data-active={index === active}
            data-next={index === (active + 1) % cardCount}
            aria-current={index === active ? "true" : undefined}
            onPointerEnter={(event) => {
              if (
                event.pointerType === "mouse" &&
                matchMedia(expandedRail).matches
              ) {
                setActive(index);
              }
            }}
            onClickCapture={(event) => {
              if (index === active || !matchMedia(expandedRail).matches) return;
              if (
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
              )
                return;
              event.preventDefault();
              setActive(index);
            }}
            onFocus={(event) => {
              if (
                matchMedia(expandedRail).matches &&
                event.target.matches(":focus-visible")
              )
                setActive(index);
            }}
          >
            {card}
          </li>
        ))}
      </ul>
      {cardCount > 1 && (
        <div className="project-rail-controls">
          <button
            type="button"
            aria-label="Previous projects"
            aria-controls="project-showcase-track"
            aria-disabled={active === 0}
            onClick={() => move(-1)}
          >
            <Icon name="arrow" size={20} />
          </button>
          <button
            type="button"
            aria-label="Next projects"
            aria-controls="project-showcase-track"
            aria-disabled={active === cardCount - 1}
            onClick={() => move(1)}
          >
            <Icon name="arrow" size={20} />
          </button>
          <button
            type="button"
            className="project-rail-rotation"
            aria-label={
              isPaused ? "Play project rotation" : "Pause project rotation"
            }
            aria-controls="project-showcase-track"
            onClick={() => setIsPaused((paused) => !paused)}
          >
            <Icon name={isPaused ? "play" : "pause"} size={20} />
          </button>
        </div>
      )}
    </div>
  );
}
