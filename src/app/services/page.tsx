import type { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/cta";
import { ArrowRight, ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business websites, e-commerce, SaaS and MVP development, custom web applications, and improvements to products you already have.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="I care about what the software does for the business."
        lead="Bridging robust technical architecture and strategic business outcomes. I build solutions that drive measurable growth, not just code that compiles."
      >
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <ButtonLink href="/contact">
            Start a Project
            <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            View case studies
          </ButtonLink>
        </div>
      </PageHeader>

      <ServicesGrid showIncludes className="bg-canvas" />
      <Process />
      <TechStack className="border-t border-line" />
      <Testimonials className="border-t border-line bg-canvas" />
      <CallToAction />
    </>
  );
}
