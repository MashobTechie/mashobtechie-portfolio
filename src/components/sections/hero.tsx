import Image from "next/image";

import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const credibility = ["Websites", "SaaS", "E-commerce", "Web Apps"];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Very soft accent wash behind the portrait side, no gradient theatre */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 hidden h-[560px] w-1/2 bg-linear-to-bl from-accent-soft to-transparent opacity-70 lg:block"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
          <div className="lg:col-span-7">
            <h1 className="text-display text-balance">
              I build websites &amp; SaaS that grow businesses.
            </h1>

            <p className="mt-7 max-w-xl text-lead text-muted text-pretty">
              Helping businesses launch, grow &amp; sell online with modern
              websites and web applications built for real customers, not just
              good-looking demos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" size="lg">
                Start a Project
                <ArrowRight />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary" size="lg">
                View My Work
              </ButtonLink>
            </div>

            <ul className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
              {credibility.map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  {index > 0 ? (
                    <span aria-hidden="true" className="text-muted-soft">
                      •
                    </span>
                  ) : null}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* Thin offset frame gives the portrait an editorial mount */}
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-media border border-accent-line sm:block"
              />
              <div className="relative overflow-hidden rounded-media border border-line bg-surface shadow-media">
                <Image
                  src="/mashobtechie.webp"
                  alt="MashobTechie, full-stack software engineer and SaaS builder"
                  width={896}
                  height={1088}
                  priority
                  sizes="(max-width: 1024px) 384px, 460px"
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
