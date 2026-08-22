import { Container } from "@/components/ui/container";

/**
 * Qualitative proof only, with no invented statistics. Each point is a statement
 * about the kind of work delivered, not a number.
 */
const proofPoints = [
  "SaaS products shipped",
  "E-commerce experiences",
  "Real client projects",
  "Startup experience",
  "Full-stack development",
];

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface">
      <Container>
        <div className="flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:py-7">
          <p className="shrink-0 text-[0.9375rem] font-medium text-ink">
            Built for businesses, startups &amp; ambitious founders.
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2.5 lg:justify-end">
            {proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2.5 text-sm text-muted"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-accent/45"
                />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
