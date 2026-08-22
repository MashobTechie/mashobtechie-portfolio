import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icons";

const focusAreas = [
  "Full-stack web development",
  "SaaS products",
  "E-commerce & payments",
  "APIs & integrations",
  "Dashboards & internal tools",
  "AI-powered products",
];

export function AboutPreview() {
  return (
    <Section id="about">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 text-h2 text-balance">
              I care about what the software does for the business.
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-lead text-muted text-pretty">
              <p>
                I&apos;m a software engineer and SaaS builder. Most of my work
                starts the same way. Someone has an idea, a business, or a
                problem that has outgrown spreadsheets and WhatsApp, and they
                need it to become something real.
              </p>
              <p>
                The part I enjoy is the translation: taking a business
                requirement, understanding why it matters, and turning it into
                a product people actually use. Clean code matters, but it
                isn&apos;t the point. Whether the thing works for your
                customers is the point.
              </p>
              <p>
                I&apos;ve built in startup environments where scope changes
                weekly, and for established businesses where reliability is
                everything. Both taught me the same lesson: ship something
                useful, then make it better.
              </p>
            </div>

            <ButtonLink href="/about" variant="secondary" className="mt-8">
              More about me
              <ArrowRight />
            </ButtonLink>
          </div>

          <div className="lg:col-span-6 lg:pt-14">
            <div className="rounded-card border border-line bg-surface p-8 shadow-card sm:p-10">
              <h3 className="text-eyebrow uppercase text-muted-soft">
                Where I spend my time
              </h3>

              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex items-start gap-3 text-[0.9375rem] text-ink"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 size-4 shrink-0 text-accent"
                    />
                    {area}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                If you&apos;re weighing up whether an idea is worth building,
                that&apos;s a conversation worth having before any code gets
                written. I&apos;m happy to have it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
