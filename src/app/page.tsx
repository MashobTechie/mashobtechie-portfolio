import { SectionStack } from "@/components/layout/section-stack";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Process } from "@/components/sections/process";
import { AboutPreview } from "@/components/sections/about-preview";
import { TechStack } from "@/components/sections/tech-stack";
import { Testimonials } from "@/components/sections/testimonials";
import { CallToAction } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />

      {/* Everything from here to the footer stacks — each panel pins and the
          next scrolls over it. The hero and trust strip stay in normal flow;
          pinning a thin strip reads as a bug rather than an effect. */}
      <SectionStack>
        <SelectedWork />
        <ServicesGrid />
        <Process />
        <AboutPreview />
        <TechStack />
        <Testimonials className="border-t border-line" />
        <CallToAction />
      </SectionStack>
    </>
  );
}
