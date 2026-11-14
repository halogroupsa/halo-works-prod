"use client";

import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Icon } from "./icons";

const reducedMotion = "(prefers-reduced-motion: reduce)";
const autoplay = { enabled: false, delay: 3000, disableOnInteraction: false };
const breakpoints = { 768: { slidesPerView: 4 }, 991: { slidesPerView: 5 } };

export default function PartnerCarousel({
  partners,
}: {
  partners: readonly (readonly [name: string, file: string])[];
}) {
  const carousel = useRef<HTMLDivElement>(null);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const element = carousel.current;
    if (!element || !swiper || swiper.destroyed) return;

    const motion = matchMedia(reducedMotion);
    let inView = false;
    let hovered = element.matches(":hover");
    let focused = element.contains(document.activeElement);

    const sync = () => {
      if (swiper.destroyed) return;
      const play = inView && !paused && !hovered && !focused && !motion.matches && !document.hidden;
      if (play && !swiper.autoplay.running) swiper.autoplay.start();
      if (!play && swiper.autoplay.running) swiper.autoplay.stop();
    };
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    const enter = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = true;
      sync();
    };
    const leave = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      hovered = false;
      sync();
    };
    const focus = () => {
      focused = true;
      sync();
    };
    const blur = (event: FocusEvent) => {
      if (element.contains(event.relatedTarget as Node | null)) return;
      focused = false;
      sync();
    };

    observer.observe(element);
    motion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    element.addEventListener("pointerenter", enter);
    element.addEventListener("pointerleave", leave);
    element.addEventListener("focusin", focus);
    element.addEventListener("focusout", blur);

    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
      element.removeEventListener("pointerenter", enter);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("focusin", focus);
      element.removeEventListener("focusout", blur);
      if (!swiper.destroyed && swiper.autoplay.running) swiper.autoplay.stop();
    };
  }, [paused, swiper]);

  return (
    <div ref={carousel} role="group" aria-label="Partner logo carousel">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={2}
        spaceBetween={30}
        loop
        speed={2000}
        autoplay={autoplay}
        breakpoints={breakpoints}
        onSwiper={setSwiper}
      >
        {partners.map(([name, file]) => (
          <SwiperSlide key={file}>
            <div className="partner-logo">
              <img
                src={`/partners/partner_${file}.webp`}
                alt={name}
                width={180}
                height={80}
                loading="lazy"
                decoding="async"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="partner-carousel-controls" data-ready={swiper !== null}>
        <button
          type="button"
          aria-label="Previous partner logo"
          onClick={() => swiper?.slidePrev(matchMedia(reducedMotion).matches ? 0 : 400)}
        >
          <Icon name="arrow" size={18} />
        </button>
        <button
          type="button"
          className="partner-carousel-playback"
          aria-label={paused ? "Play partner carousel" : "Pause partner carousel"}
          onClick={() => setPaused((value) => !value)}
        >
          <Icon name={paused ? "play" : "pause"} size={18} />
        </button>
        <button
          type="button"
          aria-label="Next partner logo"
          onClick={() => swiper?.slideNext(matchMedia(reducedMotion).matches ? 0 : 400)}
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>
    </div>
  );
}
