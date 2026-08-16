import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { ArrowRight, ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container>
      <div className="flex flex-col items-center py-28 text-center sm:py-36">
        <Eyebrow>404</Eyebrow>
        <h1 className="mt-5 max-w-2xl text-h1 text-balance">
          That page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-md text-lead text-muted text-pretty">
          The link may be out of date, or the page may have moved. The work is
          all still here.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/">
            Back home
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            View my work
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
