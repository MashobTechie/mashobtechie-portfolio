import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

/**
 * The single dark surface on the site. Deep navy, white text, one restrained
 * blue accent. Deliberately the only place the palette inverts.
 */
export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-accent/15 blur-3xl"
      />

      <Container className="relative">
        <div className="flex flex-col items-center py-20 text-center sm:py-24 lg:py-28">
          <p className="text-eyebrow uppercase text-accent-line">
            Start a project
          </p>

          <h2 className="mt-5 max-w-3xl text-h1 text-white text-balance">
            Have something you want to build?
          </h2>

          <p className="mt-5 max-w-xl text-lead text-white/70 text-pretty">
            Tell me what you&apos;re trying to launch, improve or grow. If I can
            help, I&apos;ll tell you how. If I can&apos;t, I&apos;ll tell you
            that too.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="onDark" size="lg">
              Start a Project
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/work" variant="onDarkGhost" size="lg">
              View My Work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
