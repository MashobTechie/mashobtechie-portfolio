/**
 * Single source of truth for identity, contact details and nav.
 *
 * Contact handles are placeholders — replace the values in `site.social`
 * and `site.email` with real ones before launch. Nothing else needs to change.
 */

export const site = {
  name: "MashobTechie",
  tagline: "I build websites & SaaS that grow businesses",
  positioning: "Helping businesses launch, grow & sell online.",
  description:
    "Full-stack software engineer and SaaS builder. I help businesses launch, grow and sell online with modern websites and web applications built for real customers.",
  url: "https://mashobtechie.com",

  // TODO: replace with real contact details before launch.
  email: "hello@mashobtechie.com",
  location: "Available worldwide — remote",

  social: [
    { label: "GitHub", href: "https://github.com/mashobtechie" },
    { label: "LinkedIn", href: "https://linkedin.com/in/mashobtechie" },
    { label: "Instagram", href: "https://instagram.com/mashobtechie" },
    { label: "TikTok", href: "https://tiktok.com/@mashobtechie" },
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SocialLink = (typeof site.social)[number];
