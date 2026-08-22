/**
 * Single source of truth for identity, contact routes and nav.
 */

/**
 * Canonical origin, resolved from the environment rather than hard-coded.
 *
 * It feeds metadataBase, the sitemap, robots.txt and every OG tag, so a wrong
 * value points every canonical URL and share preview at a domain that is not
 * ours. Resolving it means the deployment is correct with no edit required,
 * and buying a domain later is one environment variable rather than a code
 * change someone has to remember.
 *
 *   NEXT_PUBLIC_SITE_URL          set this once there is a custom domain
 *   VERCEL_PROJECT_PRODUCTION_URL supplied by Vercel; the stable production
 *                                 host, not the per-deploy preview URL
 *   localhost                     development fallback
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

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
  location: "Available worldwide — remote",

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
    { label: "X", href: "https://x.com/maashob_techie" },
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
