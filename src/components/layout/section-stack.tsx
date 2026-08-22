"use client";

import { Children, useEffect, useRef } from "react";

/**
 * Stacked-scroll wrapper: each section pins and the next one scrolls up over
 * it, rather than the page scrolling as one continuous column.
 *
 * The offset is measured rather than fixed at `top: 0`. A panel taller than
 * the viewport would otherwise pin the moment its top edge hit zero and strand
 * everything below the fold — so tall panels get a negative offset and scroll
 * all the way through before they pin. Panels shorter than the viewport pin at
 * the top as usual.
 *
 * Under prefers-reduced-motion the whole effect is dropped and sections scroll
 * normally. Nothing here is required for the content to be readable — with
 * JavaScript off, the panels are plain blocks in document order.
 */
export function SectionStack({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const panels = Array.from(root.children) as HTMLElement[];
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      if (reduced.matches) {
        root.dataset.stacked = "false";
        panels.forEach((panel) => {
          panel.style.top = "";
        });
        return;
      }

      root.dataset.stacked = "true";
      const viewport = window.innerHeight;
      // The navbar is sticky and opaque, so a panel pinned at 0 hides its own
      // first rows behind it. Pin below the bar instead.
      const nav = document.querySelector("header");
      const navHeight = nav ? nav.offsetHeight : 0;

      panels.forEach((panel) => {
        // Short panels pin under the navbar; panels taller than the viewport
        // take a negative offset so they scroll through fully before pinning.
        panel.style.top = `${Math.min(navHeight, viewport - panel.offsetHeight)}px`;
      });
    };

    apply();

    // Panel heights move with viewport width, font loading and image decode,
    // so recompute rather than measuring once on mount.
    const observer = new ResizeObserver(apply);
    panels.forEach((panel) => observer.observe(panel));
    window.addEventListener("resize", apply);
    reduced.addEventListener("change", apply);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", apply);
      reduced.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div ref={ref} className="section-stack">
      {Children.map(children, (child) => (
        <div className="section-stack-panel">{child}</div>
      ))}
    </div>
  );
}
