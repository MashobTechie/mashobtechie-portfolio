import Link from "next/link";

import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <Container className="py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-semibold tracking-[-0.02em] text-ink"
            >
              {site.name}
            </Link>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted text-pretty">
              {site.tagline}.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-[0.9375rem] text-accent transition-colors hover:text-accent-hover"
            >
              {site.email}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-eyebrow uppercase text-muted-soft">Explore</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-eyebrow uppercase text-muted-soft">Connect</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {site.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-[0.9375rem] text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-soft">
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-soft">Built for business impact.</p>
        </div>
      </Container>
    </footer>
  );
}
