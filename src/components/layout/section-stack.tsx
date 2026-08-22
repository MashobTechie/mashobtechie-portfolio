"use client";

import { Children, useEffect, useRef } from "react";

/** Vertical offset between pinned panels — the visible edge of each layer. */
const LAYER_STEP = 12;

/**
 * Stacked-scroll wrapper: each section pins and the next one scrolls up over
 * it, the outgoing panel receding as it is covered.
 *
 * Two things are measured rather than hard-coded.
 *
 * The pin offset: a panel taller than the viewport pinned at `top: 0` would
 * lock the moment its top edge hit zero and strand everything below the fold,
 * so tall panels take a negative offset and scroll through fully first. Short
 * panels pin just below the navbar, which is sticky and would otherwise cover
 * their first rows.
 *
 * The cover progress: how far the *next* panel has travelled across this one,
 * published as `--stack-progress` (0 → 1) for CSS to scale and dim against.
 * Driving it from the next panel's position rather than this one's own is what
 * makes it correct for both tall and short panels.
 *
 * Under prefers-reduced-motion the whole thing is inert and sections scroll
 * normally. None of it is load-bearing: with JavaScript off the panels are
 * plain blocks in document order.
 */
export function SectionStack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const panels = Array.from(root.children) as HTMLElement[];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pinnedTops = new Array<number>(panels.length).fill(0);

    let frame = 0;
    let enabled = false;

    const clearProgress = () => {
      panels.forEach((panel) => {
        panel.style.removeProperty("--stack-progress");
      });
    };

    const measure = () => {
      if (reduced.matches) {
        enabled = false;
        root.dataset.stacked = "false";
        panels.forEach((panel) => {
          panel.style.top = "";
        });
        clearProgress();
        return;
      }

      enabled = true;
      root.dataset.stacked = "true";

      const viewport = window.innerHeight;
      const nav = document.querySelector("header");
      const navHeight = nav ? nav.offsetHeight : 0;

      panels.forEach((panel, index) => {
        // Each panel pins a little lower than the one before it, so the
        // earlier panels stay visible as a stack of edges above the current
        // one rather than being covered completely. A panel taller than the
        // viewport cannot do that and still show its own bottom, so it
        // bottom-aligns instead.
        const stacked = navHeight + index * LAYER_STEP;
        const top = Math.min(stacked, viewport - panel.offsetHeight);
        pinnedTops[index] = top;
        panel.style.top = `${top}px`;
      });
    };

    const paint = () => {
      const viewport = window.innerHeight;

      panels.forEach((panel, index) => {
        const next = panels[index + 1];

        // The last panel is never covered, so it never recedes.
        if (!next) {
          panel.style.setProperty("--stack-progress", "0");
          return;
        }

        const span = viewport - pinnedTops[index];
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
      onScroll();
    };

    measure();
    paint();

    // Panel heights move with viewport width, font loading and image decode,
    // so remeasure rather than trusting a single pass on mount.
    const observer = new ResizeObserver(onResize);
    panels.forEach((panel) => observer.observe(panel));
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
          {child}
          {/* Scrim rather than a filter: cheaper to composite, and it dims the
              receding panel without touching the incoming one. */}
          <div aria-hidden="true" className="section-stack-scrim" />
        </div>
      ))}
    </div>
  );
}
