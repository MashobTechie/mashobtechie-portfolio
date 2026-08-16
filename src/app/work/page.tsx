import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { Container, Section } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/work/project-card";
import { CallToAction } from "@/components/sections/cta";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected products, websites and digital experiences — SaaS platforms, e-commerce storefronts and custom web applications built for real businesses.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected Work"
        title="Products, storefronts and platforms built to do a job."
        lead="A few of the products, websites and digital experiences I've helped bring to life — and what each one had to solve."
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {projects.map((project, index) => (
              <Reveal
                key={project.slug}
                delay={index * 80}
                className={
                  // Lead project gets the full-width feature treatment
                  index === 0 ? "md:col-span-2" : "h-full"
                }
              >
                <ProjectCard
                  project={project}
                  feature={index === 0}
                  className={index === 0 ? undefined : "flex h-full flex-col"}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CallToAction />
    </>
  );
}
