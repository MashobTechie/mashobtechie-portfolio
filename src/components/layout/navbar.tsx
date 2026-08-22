"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  // The sheet stores the route it was opened on, so navigating anywhere
  // closes it by derivation, with no effect syncing state to the pathname.
  const [openedOn, setOpenedOn] = useState<string | null>(null);
  const open = openedOn === pathname;
  const setOpen = (next: boolean) => setOpenedOn(next ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setOpenedOn(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-200",
        scrolled || open
          ? "border-b border-line bg-canvas/85 backdrop-blur-md"
          : "border-b border-transparent bg-canvas",
      )}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-16 items-center justify-between gap-6 lg:h-18"
        >
          <Link
            href="/"
            className="text-lg font-semibold tracking-[-0.02em] text-ink"
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-[0.9375rem] transition-colors duration-200",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent" />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ButtonLink href="/contact" className="hidden sm:inline-flex">
              Start a Project
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="-mr-2 inline-flex size-11 items-center justify-center rounded-btn text-ink transition-colors hover:bg-ink/5 md:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-6" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile sheet: full-width, large touch targets, not a squeezed desktop nav */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <Container className="py-6">
          <ul className="flex flex-col">
            {site.nav.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center justify-between py-4 text-xl font-medium tracking-[-0.02em]",
                    isActive(item.href) ? "text-accent" : "text-ink",
                  )}
                >
                  {item.label}
                  <Icon name="arrowUpRight" className="size-5 text-muted-soft" />
                </Link>
              </li>
            ))}
          </ul>

          <ButtonLink href="/contact" size="lg" className="mt-6 w-full">
            Start a Project
          </ButtonLink>

          <p className="mt-6 text-sm text-muted">{site.positioning}</p>
        </Container>
      </div>
    </header>
  );
}
