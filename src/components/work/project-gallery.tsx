"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ArrowRight } from "@/components/ui/button";
import { ProjectMedia } from "@/components/work/project-media";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

/**
 * Horizontal screenshot carousel for a case study.
 *
 * Built on native scroll-snap rather than a slider library: swipe, trackpad
 * and keyboard scrolling all work for free, and it still functions with
 * JavaScript disabled — the buttons and dots are progressive enhancement
 * over a scroll container that is usable on its own.
 */
export function ProjectGallery({
  images,
  label,
}: {
  images: ProjectImage[];
  label: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.children[index] as HTMLElement | undefined;
    if (!slide) return;

    track.scrollTo({
      left: slide.offsetLeft - track.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  }, []);

  // Derive the active slide from scroll position so swiping, the buttons and
  // the dots can never disagree about which one is showing.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;

    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const centre = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let shortest = Infinity;

        Array.from(track.children).forEach((child, index) => {
          const slide = child as HTMLElement;
          const slideCentre =
            slide.offsetLeft - track.offsetLeft + slide.clientWidth / 2;
          const distance = Math.abs(slideCentre - centre);
          if (distance < shortest) {
            shortest = distance;
            nearest = index;
          }
        });

        setActive(nearest);
      });
    };

    track.addEventListener("scroll", sync, { passive: true });
    return () => {
      track.removeEventListener("scroll", sync);
      cancelAnimationFrame(frame);
    };
  }, []);

  const many = images.length > 1;

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label={`${label} screenshots`}
      className="mt-12 lg:mt-14"
    >
      <ul
        ref={trackRef}
        className={cn(
          "flex snap-x snap-mandatory gap-5 overflow-x-auto pb-1 lg:gap-6",
          // Hide the native bar; the dots already communicate position.
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {images.map((image, index) => (
          <li
            key={image.alt}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
            className="w-full shrink-0 snap-start"
          >
            <figure className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
              <ProjectMedia
                image={image}
                label={label}
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="aspect-16/10"
              />
              {image.caption ? (
                <figcaption className="border-t border-line px-6 py-4 text-sm text-muted">
                  {image.caption}
                </figcaption>
              ) : null}
            </figure>
          </li>
        ))}
      </ul>

      {many ? (
        <div className="mt-6 flex items-center justify-between gap-6">
          <ul className="flex items-center gap-2">
            {images.map((image, index) => (
              <li key={image.alt}>
                <button
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to screenshot ${index + 1}`}
                  aria-current={index === active}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === active
                      ? "w-7 bg-accent"
                      : "w-3 bg-line hover:bg-muted-soft",
                  )}
                />
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <CarouselButton
              direction="previous"
              disabled={active === 0}
              onClick={() => scrollToIndex(active - 1)}
            />
            <CarouselButton
              direction="next"
              disabled={active === images.length - 1}
              onClick={() => scrollToIndex(active + 1)}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function CarouselButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "previous" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === "previous" ? "Previous" : "Next"} screenshot`}
      className={cn(
        "flex size-10 items-center justify-center rounded-btn border border-line bg-surface text-ink transition-colors",
        "hover:border-ink/20 hover:bg-canvas",
        "disabled:cursor-not-allowed disabled:text-muted-soft disabled:hover:border-line disabled:hover:bg-surface",
      )}
    >
      <ArrowRight
        className={cn(direction === "previous" && "rotate-180")}
      />
    </button>
  );
}
