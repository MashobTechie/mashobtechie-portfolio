import Image from "next/image";

import { Icon } from "@/components/ui/icons";
import type { ProjectImage } from "@/content/projects";
import { cn } from "@/lib/cn";

/**
 * Renders a project screenshot, or a designed placeholder frame when one has
 * not been supplied yet. Keeps the layout honest and complete either way.
 * Adding `src` to the image in `content/projects.ts` is the only change needed.
 */
export function ProjectMedia({
  image,
  label,
  className,
  imageClassName,
  sizes = "(max-width: 768px) 100vw, 60vw",
  priority = false,
}: {
  image: ProjectImage;
  /** Shown inside the placeholder so an empty frame still reads as intentional. */
  label: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (image.src) {
    return (
      <div className={cn("relative overflow-hidden bg-canvas", className)}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imageClassName)}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${image.alt}, screenshot pending`}
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-canvas",
        className,
      )}
    >
      {/* Subtle blueprint grid so the empty frame still feels considered */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-linear-to-b from-transparent via-canvas/60 to-canvas"
      />

      <div className="relative flex flex-col items-center gap-2.5 px-6 text-center">
        <span className="flex size-10 items-center justify-center rounded-lg border border-line bg-surface text-muted-soft shadow-card">
          <Icon name="image" />
        </span>
        <span className="text-sm font-medium text-ink/70">{label}</span>
        <span className="text-xs text-muted-soft">Screenshot coming soon</span>
      </div>
    </div>
  );
}
