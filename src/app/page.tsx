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
      <SelectedWork />
      <ServicesGrid />
      <Process />
      <AboutPreview />
      <TechStack />
      <Testimonials className="border-t border-line" />
      <CallToAction />
    </>
  );
}
