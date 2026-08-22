import Link from "next/link";

import { Tag } from "@/components/ui/card";
import { ArrowRight } from "@/components/ui/button";
import { ProjectMedia } from "@/components/work/project-media";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

/**
 * `feature` lays the card out side-by-side with a tall media panel, used for
 * the lead project. The default is a stacked card for the grid.
 */
export function ProjectCard({
  project,
  feature = false,
  className,
}: {
  project: Project;
  feature?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-card border border-line bg-surface shadow-card",
        "transition-[box-shadow,border-color] duration-300 hover:border-line-strong hover:shadow-lift",
        feature && "lg:grid lg:grid-cols-12 lg:items-stretch",
        className,
      )}
    >
      <ProjectMedia
        image={project.cover}
        label={project.name}
        sizes={
          feature
            ? "(max-width: 1024px) 100vw, 58vw"
            : "(max-width: 768px) 100vw, 45vw"
        }
        imageClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        className={cn(
          "border-b border-line",
          feature
            ? "aspect-16/10 lg:col-span-7 lg:aspect-auto lg:border-b-0 lg:border-r"
            : "aspect-16/10",
        )}
      />

      <div
        className={cn(
          "flex flex-col p-7 sm:p-8",
          feature && "lg:col-span-5 lg:justify-center lg:p-10",
        )}
      >
        <Tag tone="accent" className="w-fit">
          {project.category}
        </Tag>

        <h3
          className={cn(
            "mt-5 text-h3 text-ink",
            feature && "lg:text-h2 lg:tracking-[-0.028em]",
          )}
        >
          {project.name}
        </h3>

        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.slice(0, feature ? 4 : 3).map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>

        <span className="mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-accent">
          View Case Study
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>

      {/* Whole-card affordance without nesting interactive elements */}
      <Link
        href={`/work/${project.slug}`}
        className="absolute inset-0 rounded-card"
      >
        <span className="sr-only">
          View the {project.name} case study
        </span>
      </Link>
    </article>
  );
}
