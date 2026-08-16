import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

/** Shared header for the secondary pages, so they open consistently. */
export function PageHeader({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b border-line">
      <Container>
        <div className="py-16 sm:py-20 lg:py-24">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-4xl text-h1 text-balance">{title}</h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-lead text-muted text-pretty">
              {lead}
            </p>
          ) : null}
          {children}
        </div>
      </Container>
    </div>
  );
}
