"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

/**
 * Restrained fade-and-rise on first scroll into view.
 * Elements start visible if IntersectionObserver is unavailable, and the
 * `reveal` utility no-ops entirely under prefers-reduced-motion.
 */
export function Reveal({
  className,
  delay = 0,
  as: Tag = "div",
  children,
}: {
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // No IntersectionObserver (old browser, some test envs): show immediately.
    // Written straight to the DOM rather than through state, since this is an
    // external-system update, and setState here would cascade a render.
    if (typeof IntersectionObserver === "undefined") {
      node.dataset.visible = "true";
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      data-visible={visible}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}
