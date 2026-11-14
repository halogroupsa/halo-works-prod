"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealEase = "cubic-bezier(.2,.65,.25,1)";
const caseEase = "cubic-bezier(.215,.61,.355,1)";
const frameEase = "cubic-bezier(.19,1,.22,1)";

const lift = (distance: number): Keyframe[] => [
  { opacity: 0, translate: `0 ${distance}px` },
  { opacity: 1, translate: "0 0" },
];

const tracks = {
  rise: [{ frames: lift(32), duration: 1000, easing: revealEase }],
  case: [{ frames: lift(36), duration: 1100, easing: caseEase }],
  zoom: [
    {
      frames: [{ scale: 1.1 }, { scale: 1 }],
      duration: 2600,
      easing: revealEase,
    },
  ],
  frame: [
    {
      frames: [{ clipPath: "inset(0 0 100%)" }, { clipPath: "inset(0)" }],
      duration: 1050,
      easing: frameEase,
    },
    {
      frames: [{ scale: 1.15 }, { scale: 1 }],
      duration: 1400,
      easing: frameEase,
    },
  ],
};

/** Set the start state below the fold so an item never flashes before its reveal. */
export default function Motion() {
  const path = usePathname();

  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      !("animate" in Element.prototype)
    )
      return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    const pending = new Set<HTMLElement>();
    const running = new Map<Animation, HTMLElement>();

    function unstage(target: HTMLElement) {
      pending.delete(target);
      delete target.dataset.revealPending;
      observer.unobserve(target);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || entry.intersectionRatio < 0.08) continue;
          const target = entry.target as HTMLElement;
          if (!pending.has(target)) continue;
          unstage(target);
          if (target.contains(document.activeElement)) continue;

          const { reveal, revealOrder } = target.dataset;
          const mode =
            reveal === "case" || reveal === "zoom" || reveal === "frame"
              ? reveal
              : "rise";
          const delay =
            Number(revealOrder ?? 0) * (mode === "case" ? 100 : 130);
          for (const { frames, duration, easing } of tracks[mode]) {
            const animation = target.animate(frames, {
              duration,
              delay,
              easing,
              fill: "backwards",
            });
            running.set(animation, target);
            animation.finished.then(
              () => running.delete(animation),
              () => running.delete(animation),
            );
          }
        }
      },
      { threshold: 0.08 },
    );

    const frame = requestAnimationFrame(() => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((target) => {
          // Leave content already visible on load or a restored scroll position in place.
          if (target.getBoundingClientRect().top < window.innerHeight) return;
          target.dataset.revealPending = "";
          pending.add(target);
          observer.observe(target);
        });
    });

    function stop() {
      cancelAnimationFrame(frame);
      observer.disconnect();
      for (const target of pending) delete target.dataset.revealPending;
      pending.clear();
      for (const animation of running.keys()) animation.cancel();
    }

    function showFocused(event: FocusEvent) {
      if (!(event.target instanceof Element)) return;
      const focus = event.target;
      for (const target of pending) {
        if (target.contains(focus)) unstage(target);
      }
      for (const [animation, target] of running) {
        if (target.contains(focus)) animation.cancel();
      }
    }

    document.addEventListener("focusin", showFocused);
    preference.addEventListener("change", stop);
    return () => {
      stop();
      document.removeEventListener("focusin", showFocused);
      preference.removeEventListener("change", stop);
    };
  }, [path]);

  return null;
}
