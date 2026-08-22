import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icons";
import { InquiryForm } from "@/components/contact/inquiry-form";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you're trying to launch, improve or grow. Send a project inquiry and I'll get back to you within a couple of working days.",
};

export default function ContactPage() {
  return (
    <Container>
      <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
        {/* ---------- Intro ---------- */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <div className="max-w-[280px] overflow-hidden rounded-media border border-line bg-surface shadow-media">
              <Image
                src="/mashobtechie.webp"
                alt={`${site.name}, software engineer and SaaS builder`}
                width={896}
                height={1088}
                priority
                sizes="280px"
                className="h-auto w-full object-cover"
              />
            </div>

            <Eyebrow className="mt-8">Contact</Eyebrow>
            <h1 className="mt-4 text-h1 text-balance">
              Let&apos;s build something useful.
            </h1>

            <p className="mt-5 max-w-md text-lead text-muted text-pretty">
              Every good project starts with a conversation. Tell me what
              you&apos;re trying to launch, improve or grow — and I&apos;ll tell
              you honestly whether I&apos;m the right person for it.
            </p>

            <div className="mt-8 border-t border-line pt-8">
              <h2 className="text-eyebrow uppercase text-muted-soft">
                Rather skip the form
              </h2>
              <ul className="mt-3 flex flex-col gap-3">
                <li>
                  <a
                    href={site.whatsapp.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <Icon name="arrowUpRight" className="size-4" />
                    WhatsApp {site.whatsapp.display}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex items-center gap-2.5 text-[0.9375rem] font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    <Icon name="mail" className="size-4" />
                    {site.email}
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-sm text-muted">{site.location}</p>
            </div>

            <div className="mt-8 border-t border-line pt-8">
              <h2 className="text-eyebrow uppercase text-muted-soft">Connect</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                      <Icon
                        name="arrowUpRight"
                        className="size-4 text-muted-soft transition-colors group-hover:text-accent"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ---------- Form ---------- */}
        <div className="lg:col-span-7">
          <InquiryForm />
        </div>
      </div>
    </Container>
  );
}
