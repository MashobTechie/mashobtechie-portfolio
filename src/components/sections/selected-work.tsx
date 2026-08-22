import Link from "next/link";

import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/work/project-card";
import { featuredProjects } from "@/content/projects";
import { cn } from "@/lib/cn";

export function SelectedWork() {
  const [lead, ...rest] = featuredProjects;

  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Work that earns its keep."
            lead="A few products, websites and digital experiences I've helped bring to life."
          />

          <Link
            href="/work"
            className="group inline-flex shrink-0 items-center gap-2 text-[0.9375rem] font-medium text-accent transition-colors hover:text-accent-hover"
          >
            View all projects
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {lead ? (
            <Reveal>
              <ProjectCard project={lead} feature />
            </Reveal>
          ) : null}

          {rest.length > 0 ? (
            <div
              className={cn(
                "grid gap-6 lg:gap-8",
                // One follow-up card fills the row instead of stranding a gap.
                rest.length > 1 && "md:grid-cols-2",
              )}
            >
              {rest.map((project, index) => (
                <Reveal key={project.slug} delay={index * 90} className="h-full">
                  <ProjectCard project={project} className="flex h-full flex-col" />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
