import { Container, Section } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { processSteps } from "@/content/process";

export function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="Process"
          title="From idea to launch."
          lead="A structured, transparent approach — so you always know what's happening and what comes next."
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-card border border-line bg-line lg:mt-16 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal
              as="li"
              key={step.number}
              delay={index * 80}
              className="bg-canvas"
            >
              <div className="flex h-full flex-col p-7 lg:p-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-sm font-medium text-accent">
                    {step.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className="h-px flex-1 bg-line-strong"
                  />
                </div>

                <h3 className="mt-5 text-h3">{step.title}</h3>

                <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
