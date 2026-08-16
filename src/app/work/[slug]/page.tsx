import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/card";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { ProjectMedia } from "@/components/work/project-media";
import { CallToAction } from "@/components/sections/cta";
import { adjacentProjects, getProject, projects } from "@/content/projects";
import { cn } from "@/lib/cn";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Case study not found" };

  return {
    title: `${project.name} — ${project.category}`,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const { previous, next } = adjacentProjects(project.slug);

  const meta = [
    project.client ? { label: "Client", value: project.client } : null,
    project.timeline ? { label: "Timeline", value: project.timeline } : null,
    { label: "Role", value: project.role },
    { label: "Category", value: project.category },
  ].filter((item): item is { label: string; value: string } => item !== null);

  return (
    <>
      {/* ---------- Overview ---------- */}
      <Container>
        <div className="pt-10 sm:pt-12">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-ink"
          >
            <ArrowRight className="rotate-180" />
            All work
          </Link>
        </div>

        <div className="max-w-4xl py-10 sm:py-14">
          <Tag tone="accent">{project.category}</Tag>
          <h1 className="mt-6 text-h1 text-balance">{project.name}</h1>
          <p className="mt-6 max-w-2xl text-lead text-muted text-pretty">
            {project.intro}
          </p>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-7 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Visit live site
              <Icon name="arrowUpRight" className="size-4" />
            </a>
          ) : null}
        </div>

        <ProjectMedia
          image={project.cover}
          label={project.name}
          priority
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="aspect-16/9 rounded-media border border-line shadow-media"
        />

        {/* ---------- Project meta ---------- */}
        <dl className="grid gap-8 border-b border-line py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
          {meta.map((item) => (
            <div key={item.label}>
              <dt className="text-eyebrow uppercase text-muted-soft">
                {item.label}
              </dt>
              <dd className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* ---------- Challenge & solution ---------- */}
      <Section className="pt-16 sm:pt-20 lg:pt-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 text-h2">What needed solving</h2>
              <div className="mt-6 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-muted text-pretty">
                {project.challenge.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <Eyebrow>The Solution</Eyebrow>
              <h2 className="mt-4 text-h2">What we built</h2>
              <div className="mt-6 flex flex-col gap-4 text-[1.0625rem] leading-relaxed text-muted text-pretty">
                {project.solution.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Key features ---------- */}
      <Section className="border-y border-line bg-surface">
        <Container>
          <Eyebrow>Key Features</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-h2 text-balance">
            What it actually does
          </h2>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <Reveal
                as="li"
                key={feature.title}
                delay={index * 60}
                className="border-t border-line pt-6"
              >
                <h3 className="text-[1.0625rem] font-semibold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                  {feature.detail}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---------- Interface gallery ---------- */}
      {project.gallery.length > 0 ? (
        <Section>
          <Container>
            <Eyebrow>Interface</Eyebrow>
            <h2 className="mt-4 max-w-2xl text-h2 text-balance">
              A look at the product
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:gap-6">
              {project.gallery.map((image, index) => (
                <Reveal
                  key={image.alt}
                  delay={index * 70}
                  className={cn(
                    (image.span === "wide" || image.span === "full") &&
                      "sm:col-span-2",
                  )}
                >
                  <figure className="overflow-hidden rounded-card border border-line bg-surface shadow-card">
                    <ProjectMedia
                      image={image}
                      label={project.name}
                      sizes={
                        image.span === "half"
                          ? "(max-width: 640px) 100vw, 45vw"
                          : "(max-width: 640px) 100vw, 90vw"
                      }
                      className={
                        image.span === "half" ? "aspect-4/3" : "aspect-16/9"
                      }
                    />
                    {image.caption ? (
                      <figcaption className="border-t border-line px-6 py-4 text-sm text-muted">
                        {image.caption}
                      </figcaption>
                    ) : null}
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      ) : null}

      {/* ---------- Outcome ---------- */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>Outcome</Eyebrow>
              <h2 className="mt-4 text-h2 text-balance">
                What changed for the business
              </h2>
              <p className="mt-6 text-lead text-muted text-pretty">
                The measures that matter here are qualitative — what the team
                stopped doing, and what became possible.
              </p>
            </div>

            <ul className="flex flex-col gap-px overflow-hidden rounded-card border border-line bg-line lg:col-span-7">
              {project.impact.map((point) => (
                <li key={point.label} className="bg-surface p-7 sm:p-8">
                  {point.metric ? (
                    <p className="text-h2 text-accent">{point.metric}</p>
                  ) : null}
                  <h3
                    className={cn(
                      "text-[1.0625rem] font-semibold text-ink",
                      point.metric && "mt-2",
                    )}
                  >
                    {point.label}
                  </h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                    {point.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ---------- Technology ---------- */}
      <Section className="border-t border-line">
        <Container>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between sm:gap-16">
            <div className="max-w-sm">
              <Eyebrow>Technology</Eyebrow>
              <h2 className="mt-4 text-h3">Built with</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                Chosen to fit the problem and the budget — not to pad a stack
                list.
              </p>
            </div>

            <ul className="flex flex-wrap gap-2 sm:justify-end">
              {project.tech.map((item) => (
                <li key={item}>
                  <Tag className="px-3 py-1.5 text-[0.8125rem] text-ink">
                    {item}
                  </Tag>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ---------- Prev / next ---------- */}
      {previous && next ? (
        <Container>
          <nav
            aria-label="More case studies"
            className="grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-2"
          >
            <Link
              href={`/work/${previous.slug}`}
              className="group bg-surface p-7 transition-colors hover:bg-canvas sm:p-8"
            >
              <span className="text-eyebrow uppercase text-muted-soft">
                Previous
              </span>
              <span className="mt-3 flex items-center gap-2 text-h3 text-ink">
                <ArrowRight className="size-4 rotate-180 text-muted transition-transform duration-300 group-hover:-translate-x-1" />
                {previous.name}
              </span>
            </Link>

            <Link
              href={`/work/${next.slug}`}
              className="group bg-surface p-7 transition-colors hover:bg-canvas sm:p-8 sm:text-right"
            >
              <span className="text-eyebrow uppercase text-muted-soft">
                Next
              </span>
              <span className="mt-3 flex items-center gap-2 text-h3 text-ink sm:justify-end">
                {next.name}
                <ArrowRight className="size-4 text-muted transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </nav>

          <div className="flex justify-center py-16">
            <ButtonLink href="/work" variant="secondary">
              View all work
            </ButtonLink>
          </div>
        </Container>
      ) : null}

      <CallToAction />
    </>
  );
}
