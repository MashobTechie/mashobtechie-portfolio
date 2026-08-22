import Image from "next/image";

import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { testimonials } from "@/content/testimonials";
import { cn } from "@/lib/cn";

/**
 * Renders the testimonial grid when real quotes exist in `content/testimonials`,
 * and a considered empty state until then. No placeholder quotes, no invented
 * names. An honest empty state reads better than fiction a client can spot.
 */
export function Testimonials({ className }: { className?: string }) {
  const hasTestimonials = testimonials.length > 0;

  return (
    <Section className={cn("bg-surface", className)}>
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say"
          lead={
            hasTestimonials
              ? "In the words of the people I've built for."
              : undefined
          }
          align="center"
          className="mx-auto"
        />

        {hasTestimonials ? (
          <ul className="mt-12 grid gap-6 lg:mt-16 lg:grid-cols-2">
            {testimonials.map((testimonial) => (
              <li key={`${testimonial.name}-${testimonial.company}`}>
                <Card className="flex h-full flex-col p-8">
                  <Icon name="quote" className="size-6 text-accent/40" />

                  <blockquote className="mt-5 flex-1 text-lead text-ink text-pretty">
                    {testimonial.quote}
                  </blockquote>

                  <figcaption className="mt-7 flex items-center gap-3 border-t border-line pt-6">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 rounded-full object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex size-10 items-center justify-center rounded-full border border-line bg-canvas text-sm font-medium text-muted"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((part) => part[0])
                          .slice(0, 2)
                          .join("")}
                      </span>
                    )}
                    <span className="text-sm">
                      <span className="block font-medium text-ink">
                        {testimonial.name}
                      </span>
                      <span className="block text-muted">
                        {testimonial.role}, {testimonial.company}
                      </span>
                    </span>
                  </figcaption>
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl lg:mt-14">
            <Card className="flex flex-col items-center px-8 py-12 text-center sm:px-12">
              <span className="flex size-12 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                <Icon name="quote" className="size-6" />
              </span>

              <p className="mt-6 text-lead text-ink text-balance">
                I&apos;d rather show you the work than a wall of quotes.
              </p>

              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                Client feedback goes here as projects wrap up. Real words from
                real people, not stock praise. In the meantime, the case studies
                are the honest version of what it&apos;s like to work with me.
              </p>

              <ButtonLink href="/work" variant="secondary" className="mt-8">
                See the work
                <ArrowRight />
              </ButtonLink>
            </Card>
          </div>
        )}
      </Container>
    </Section>
  );
}
