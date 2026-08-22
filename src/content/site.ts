/**
 * Single source of truth for identity, contact routes and nav.
 *
 * `url` is still the intended domain rather than a live one — it drives
 * metadataBase, the sitemap, robots and every OG tag, so it must be set to
 * the real deployment URL before launch.
 */

export const site = {
  name: "MashobTechie",
  tagline: "I build websites & SaaS that grow businesses",
  positioning: "Helping businesses launch, grow & sell online.",
  description:
    "Full-stack software engineer and SaaS builder. I help businesses launch, grow and sell online with modern websites and web applications built for real customers.",
  url: "https://mashobtechie.com",

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
