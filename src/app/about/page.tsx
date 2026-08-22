import type { Metadata } from "next";
import Image from "next/image";

import { Container, Section } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icons";
import { ArrowRight, ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Process } from "@/components/sections/process";
import { TechStack } from "@/components/sections/tech-stack";
import { CallToAction } from "@/components/sections/cta";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Software engineer and SaaS builder focused on turning business ideas into useful digital products, covering full-stack development, e-commerce, payments, dashboards and AI-powered products.",
};

const experience = [
  {
    title: "Full-stack web development",
    detail:
      "Front to back on the same product: interface, data model, APIs and deployment.",
  },
  {
    title: "SaaS products",
    detail:
      "Accounts, permissions, billing and the multi-tenant plumbing that comes with them.",
  },
  {
    title: "E-commerce & payments",
    detail:
      "Catalogues, variants, checkout and live payment integrations including Paystack and Stripe.",
  },
  {
    title: "APIs & integrations",
    detail:
      "Connecting products to the systems and services a business already depends on.",
  },
  {
    title: "Dashboards & internal tools",
    detail:
      "The unglamorous software that decides whether a team's day goes well or badly.",
  },
  {
    title: "AI-powered products",
    detail:
      "Using models where they genuinely help, and leaving them out where they don't.",
  },
];

const principles = [
  {
    title: "Understand before building",
    detail:
      "Most failed software was built correctly to the wrong specification. I'd rather ask uncomfortable questions early than deliver something precise and useless.",
  },
  {
    title: "Ship, then improve",
    detail:
      "A working product in front of real customers teaches you more in a week than another month of planning. Scope tightly, launch, learn.",
  },
  {
    title: "Leave you in control",
    detail:
      "You should be able to run your own product, managing content, seeing your data and understanding your costs, without calling me for routine changes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="border-b border-line">
        <Container>
          <div className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
            <div className="lg:col-span-7">
              <Eyebrow>About</Eyebrow>
              <h1 className="mt-5 text-h1 text-balance">
                I care about what the software does for the business.
              </h1>

              <div className="mt-7 flex flex-col gap-4 text-lead text-muted text-pretty">
                <p>
                  I&apos;m {site.name}, a software engineer and SaaS builder.
                  My work usually starts with someone who has an idea, a
                  business, or a problem that has outgrown spreadsheets and
                  group chats, and needs it to become something real.
                </p>
                <p>
                  The part I actually enjoy is the translation. Taking a
                  business requirement, working out why it matters and who it
                  affects, then turning it into a product people use without
                  thinking about it. The engineering is how that happens, not
                  the reason it happens.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-xs lg:max-w-none">
                <div className="overflow-hidden rounded-media border border-line bg-surface shadow-media">
                  <Image
                    src="/mashobtechie.webp"
                    alt={`${site.name}, software engineer and SaaS builder`}
                    width={896}
                    height={1088}
                    priority
                    sizes="(max-width: 1024px) 320px, 420px"
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* ---------- Story ---------- */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Eyebrow>How I work</Eyebrow>
              <h2 className="mt-4 text-h2 text-balance">
                Clean code matters. It just isn&apos;t the point.
              </h2>
            </div>

            <div className="lg:col-span-7">
              <div className="flex flex-col gap-5 text-[1.0625rem] leading-relaxed text-muted text-pretty">
                <p>
                  I&apos;ve worked in startup environments where the scope
                  changes weekly and the priority is finding out whether anyone
                  wants the thing at all. I&apos;ve also built for established
                  businesses where reliability is the whole job and a broken
                  checkout is a very bad afternoon.
                </p>
                <p>
                  Both taught me the same lesson from opposite directions: ship
                  something genuinely useful, then make it better. Products that
                  wait for perfection tend not to arrive, and products that
                  launch without care tend not to stay.
                </p>
                <p>
                  In practice that means I&apos;ll push back on scope that
                  won&apos;t earn its cost, and I&apos;ll tell you when
                  something you&apos;ve asked for is a bad idea. That&apos;s
                  usually the most valuable thing I do before writing any code.
                </p>
              </div>

              <ul className="mt-10 flex flex-col gap-px overflow-hidden rounded-card border border-line bg-line">
                {principles.map((principle) => (
                  <li key={principle.title} className="bg-surface p-7">
                    <h3 className="text-[1.0625rem] font-semibold text-ink">
                      {principle.title}
                    </h3>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                      {principle.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* ---------- Experience ---------- */}
      <Section className="border-y border-line bg-surface">
        <Container>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="mt-4 max-w-2xl text-h2 text-balance">
            What I&apos;ve spent my time building.
          </h2>

          <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
            {experience.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={index * 60}
                className="border-t border-line pt-6"
              >
                <div className="flex items-start gap-3">
                  <Icon
                    name="check"
                    className="mt-1 size-4 shrink-0 text-accent"
                  />
                  <div>
                    <h3 className="text-[1.0625rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted text-pretty">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/work">
              See the work
              <ArrowRight />
            </ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Start a conversation
            </ButtonLink>
          </div>
        </Container>
      </Section>

      <Process />
      <TechStack className="border-t border-line" />
      <CallToAction />
    </>
  );
}
