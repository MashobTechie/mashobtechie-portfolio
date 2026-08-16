import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/content/services";
import { cn } from "@/lib/cn";

export function ServicesGrid({
  showIncludes = false,
  className,
}: {
  /** Case-study-depth detail — used on the Services page, not the homepage. */
  showIncludes?: boolean;
  className?: string;
}) {
  return (
    <Section id="services" className={cn("bg-surface", className)}>
      <Container>
        <SectionHeading
          eyebrow="What I Build"
          title="From a first website to a working SaaS product."
          lead="Whatever stage you're at, the goal is the same: software that does something useful for the business."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              as="li"
              key={service.slug}
              delay={index * 70}
              className={cn(
                // Five cards never leave a ragged trailing row:
                // 2-col → the last card spans full width;
                // 3-col → the fourth card spans two, the fifth closes the row.
                index === 3 && "lg:col-span-2",
                index === 4 && "sm:col-span-2 lg:col-span-1",
              )}
            >
              <Card className="flex h-full flex-col p-7" interactive>
                <span className="flex size-11 items-center justify-center rounded-lg border border-accent-line bg-accent-soft text-accent">
                  <Icon name={service.icon} />
                </span>

                <h3 className="mt-5 text-h3">{service.title}</h3>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                  {service.summary}
                </p>

                {showIncludes ? (
                  <ul className="mt-6 flex flex-col gap-2.5 border-t border-line pt-6">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted"
                      >
                        <Icon
                          name="check"
                          className="mt-0.5 size-4 shrink-0 text-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
