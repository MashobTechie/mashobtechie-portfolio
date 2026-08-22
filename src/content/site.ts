/**
 * Single source of truth for identity, contact routes and nav.
 */

/**
 * Canonical origin.
 *
 * Feeds metadataBase, the sitemap, robots.txt and every OG tag, so a wrong
 * value points every canonical URL and share preview somewhere that is not
 * this site.
 *
 * Set NEXT_PUBLIC_SITE_URL in the Pxxl project's environment variables to the
 * project's URL: the free `<prefix>.pxxl.pro` subdomain assigned at deploy,
 * or a custom domain once one is connected. Pxxl injects no URL variable of
 * its own, so nothing can infer this; unset, it falls back to localhost, which
 * is right in development and wrong in production.
 */
function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");

  return "http://localhost:3000";
}

export const site = {
  name: "MashobTechie",
  tagline: "I build websites & SaaS that grow businesses",
  positioning: "Helping businesses launch, grow & sell online.",
  description:
    "Full-stack software engineer and SaaS builder. I help businesses launch, grow and sell online with modern websites and web applications built for real customers.",
  url: resolveSiteUrl(),

  email: "mashobtechie@gmail.com",
  location: "Available worldwide, remote",

  /**
   * WhatsApp is the channel clients in this market actually use, so it is a
   * first-class contact route rather than a footer afterthought. `wa.me`
   * wants the number in full international form with no plus or spaces.
   */
  whatsapp: {
    display: "+234 907 116 2911",
    href: "https://wa.me/2349071162911",
  },

  social: [
    { label: "GitHub", href: "https://github.com/MashobTechie" },
    { label: "X", href: "https://x.com/mashob_techie" },
    { label: "Instagram", href: "https://instagram.com/mashobtechie" },
    { label: "TikTok", href: "https://tiktok.com/@mashob_techie" },
  ],

  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type SocialLink = (typeof site.social)[number];
