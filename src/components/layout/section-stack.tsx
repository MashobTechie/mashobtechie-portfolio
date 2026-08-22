"use client";

import { Children, useEffect, useRef } from "react";

/** Vertical offset between pinned panels — the visible edge of each layer. */
const LAYER_STEP = 12;

/**
 * Stacked-scroll wrapper: each section pins at its own place in a deck and the
 * next scrolls up over it, the covered panel receding as it goes.
 *
 * The hard part is content taller than the pinned frame. Bottom-aligning those
 * panels — the obvious fix — puts their top edge off-screen, so they can never
 * show a deck edge, and the deck breaks at exactly the panels that matter most.
 *
 * So no panel is ever bottom-aligned. Every panel pins at its deck position,
 * and a panel whose content overflows the frame translates that content upward
 * at exactly page-scroll speed while pinned. The content therefore moves the
 * way it would if nothing were pinned — same direction, same rate, no hijack —
 * while the frame's edge and curve stay put in the deck.
 *
 * The arithmetic works out exactly: scrubbing finishes at the scroll position
 * where the next panel's top edge reaches the bottom of the viewport, so the
 * last of a panel's content is read precisely as the next begins to cover it.
 *
 * Under prefers-reduced-motion none of this runs. Nothing here is load-bearing:
 * with JavaScript off the panels are plain blocks in document order.
 */
export function SectionStack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const panels = Array.from(root.children) as HTMLElement[];
    const inners = panels.map((panel) =>
      panel.querySelector<HTMLElement>(".section-stack-inner"),
    );
    if (inners.some((inner) => inner === null)) return;
    const contents = inners as HTMLElement[];

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const count = panels.length;
    const deckTops = new Array<number>(count).fill(0);
    const docTops = new Array<number>(count).fill(0);
    const maxScrubs = new Array<number>(count).fill(0);
    const scrubs = new Array<number>(count).fill(0);

    let frame = 0;
    let enabled = false;

    const measure = () => {
      if (reduced.matches) {
        enabled = false;
        root.dataset.stacked = "false";
        panels.forEach((panel, index) => {
          panel.style.top = "";
          panel.style.removeProperty("--stack-progress");
          contents[index].style.transform = "";
          scrubs[index] = 0;
        });
        return;
      }

      enabled = true;
      root.dataset.stacked = "true";

      const viewport = window.innerHeight;
      const nav = document.querySelector("header");
      const navHeight = nav ? nav.offsetHeight : 0;
      const scrollY = window.scrollY;

      panels.forEach((panel, index) => {
        // Each panel pins a little lower than the one before it, so every
        // earlier edge stays visible above the current panel.
        const deckTop = navHeight + index * LAYER_STEP;
        deckTops[index] = deckTop;
        panel.style.top = `${deckTop}px`;

        // Document position of the panel. It may already be pinned when this
        // runs, so back the applied scrub out rather than compounding it.
        const rect = panel.getBoundingClientRect();
        const pinned = Math.abs(rect.top - deckTop) < 0.5;
        docTops[index] = pinned
          ? scrollY + deckTop - scrubs[index]
          : rect.top + scrollY;

        // How far this panel's content must travel to be read in its frame.
        const frameHeight = viewport - deckTop;
        maxScrubs[index] = Math.max(0, contents[index].offsetHeight - frameHeight);
      });
    };

    const paint = () => {
      const viewport = window.innerHeight;
      const scrollY = window.scrollY;

      panels.forEach((panel, index) => {
        // Content rides upward at exactly scroll speed once the frame pins,
        // and stops once its last line has been read.
        const overshoot = scrollY + deckTops[index] - docTops[index];
        const scrub = Math.min(Math.max(overshoot, 0), maxScrubs[index]);
        scrubs[index] = scrub;
        contents[index].style.transform = `translate3d(0, ${-scrub}px, 0)`;

        const next = panels[index + 1];
        if (!next) {
          panel.style.setProperty("--stack-progress", "0");
          return;
        }

        // Progress is how far the *next* panel has come along its own travel
        // to rest. Measuring against this panel's pin would never reach 1,
        // because the next panel stops at its own deck position first.
        const span = viewport - deckTops[index + 1];
        if (span <= 0) {
          panel.style.setProperty("--stack-progress", "0");
          return;
        }

        const travelled = viewport - next.getBoundingClientRect().top;
        const progress = Math.min(1, Math.max(0, travelled / span));
        panel.style.setProperty("--stack-progress", progress.toFixed(3));
      });
    };

    const onScroll = () => {
      if (!enabled) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(paint);
    };

    const onResize = () => {
      measure();
      paint();
    };

    measure();
    paint();

    // Content heights move with viewport width, font loading and image decode,
    // so remeasure rather than trusting a single pass on mount.
    const observer = new ResizeObserver(onResize);
    contents.forEach((content) => observer.observe(content));
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    reduced.addEventListener("change", onResize);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduced.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <div ref={ref} className="section-stack">
      {Children.map(children, (child) => (
        <div className="section-stack-panel">
          <div className="section-stack-inner">{child}</div>
          {/* Scrim rather than a filter: cheaper to composite, and it dims the
              receding panel without touching the incoming one. */}
          <div aria-hidden="true" className="section-stack-scrim" />
        </div>
      ))}
    </div>
  );
}
