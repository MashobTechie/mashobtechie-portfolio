/**
 * Project + case-study content.
 *
 * IMAGES: every `src` here is optional. Where a screenshot has not been
 * supplied yet, the media components render a designed placeholder frame
 * instead of a broken image. To light one up, drop the file into
 * `public/work/` and add its path — nothing else needs to change.
 *
 * OUTCOMES: `impact` entries are qualitative by default. Add a `metric`,
 * or an entry under `numbers`, only when there is a real figure the client
 * has reported. Unmeasured work leaves `numbers` undefined and the section
 * is skipped rather than padded.
 */

export type ProjectImage = {
  /** Path under /public, e.g. "/work/respora-dashboard.png". Omit until supplied. */
  src?: string;
  alt: string;
  /** Short caption shown under the frame in the case-study gallery. */
  caption?: string;
  /** Layout hint for the interface-exploration grid. */
  span?: "full" | "wide" | "half";
};

export type ImpactPoint = {
  label: string;
  detail: string;
  /** Only populate with a verified figure. Left undefined = qualitative card. */
  metric?: string;
};

/**
 * A hard number for "05 — The Numbers".
 *
 * Only ever populated with a figure the client has actually reported. A
 * project with nothing measured leaves `numbers` undefined and the section
 * does not render — an absent section reads honestly, an invented one does
 * not survive first contact with a prospect who asks about it.
 */
export type Metric = {
  /** The figure itself, pre-formatted, e.g. "₦1M+". */
  value: string;
  label: string;
  /** Qualifier — window, source, or what the baseline was. */
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** One line for cards — business outcome, not stack. */
  summary: string;
  /** Longer positioning line for the case-study header. */
  intro: string;
  featured: boolean;
  /** Card hero image. */
  cover: ProjectImage;
  role: string;
  timeline?: string;
  client?: string;
  services: string[];
  tech: string[];
  /** 01 — The Problem. What was broken or missing. */
  challenge: string[];
  /** 02 — The Goal. What the business needed to happen. */
  goal?: string[];
  /** 03 — My Role. What was actually done, beyond the one-line `role`. */
  roleDetail?: string[];
  /** 04 — The Solution. */
  solution: string[];
  features: { title: string; detail: string }[];
  /** 05 — The Numbers. Verified figures only; omit for unmeasured work. */
  numbers?: Metric[];
  /** 06 — The Product. */
  gallery: ProjectImage[];
  /** 07 — The Technical Build. Architecture, integrations, decisions. */
  technicalBuild?: { title: string; detail: string }[];
  /** 08 — The Outcome. */
  impact: ImpactPoint[];
  /** 09 — Lessons. */
  lessons?: string[];
  /** Live URL, when the project is public and shareable. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "deniyis-interior",
    name: "Deniyi's Interiors & More",
    category: "E-Commerce",
    client: "Deniyi's Interiors & More",
    liveUrl: "https://deniyisinterior.com.ng",
    summary:
      "A décor and furniture store for an Ibadan brand — twelve product categories, Paystack checkout, a priced styling service and an admin panel the owner runs herself.",
    intro:
      "Deniyi's Interiors & More sells quality home décor at accessible prices in Ibadan, delivering citywide and nationwide. It went from taking orders in DMs to a full storefront with working payments, a services arm and a Google presence — and processed over ₦1,000,000 in its first month live.",
    featured: true,
    cover: {
      src: "/work/deniyis-home.webp",
      alt: "Deniyi's Interiors & More storefront home page",
    },
    role: "End-to-end design, full-stack development, deployment and training",
    services: [
      "E-commerce design",
      "Full-stack development",
      "Payment integration",
      "Admin tooling",
      "SEO & Google Business",
      "Deployment & training",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Paystack",
      "Vercel",
    ],
    challenge: [
      "The business had no way to sell online. Orders arrived through DMs, every price and stock question was answered by hand, and there was no record of an order beyond a chat thread.",
      "It was also invisible to search. Someone in Ibadan looking for a centre rug or a wall mirror had no way to find the brand on Google, so the only demand was demand that already knew the name.",
      "And there were really two businesses to serve. Stock — rugs, mirrors, chandeliers, kitchen electronics — sells from a cart. Interior styling sells from a conversation, at a very different price point. One site had to do both without either feeling bolted on.",
    ],
    goal: [
      "Sell the stock online properly: let a customer browse the real catalogue, pay, and track the order — without a conversation having to happen first.",
      "Get found. The brand needed to appear when someone nearby searched for what it sells, rather than relying entirely on word of mouth.",
      "Give the styling work a credible route in. Published prices qualify an enquiry before it arrives, so the higher-value conversations start further along.",
      "Take the DMs off the owner. Leads arriving from TikTok and Instagram had to be able to buy on their own, instead of every sale costing a back-and-forth conversation.",
      "Run without a developer. The owner had to add products, change prices and check orders herself, or the site would be a recurring cost instead of an asset.",
    ],
    roleDetail: [
      "Sole designer and developer, end to end. I designed the interface around the brand's white, gold and black identity, then built the storefront, checkout, services pages, project gallery and admin panel.",
      "Beyond the build: domain and SSL configuration, deployment to Vercel, technical SEO, and setting up Google Business Profile and Search Console so the brand could be found locally.",
      "I also ran the handover training — uploading and editing products, managing categories, working through orders — so daily operation sits with the owner rather than with me.",
    ],
    solution: [
      "A storefront spanning twelve categories, from Turkish centre rugs and mirrors to chandeliers, figurines and kitchen electronics. Search, category filtering, sale pricing, customer accounts and order tracking all ship as part of it.",
      "Checkout runs on Paystack in Naira, covering the payment methods customers in the market actually use, with order state tracked end to end so both sides know where an order stands.",
      "The styling service is published with real starting prices — consultation, spatial planning and sourcing, then on-site styling and installation — so a prospect self-qualifies before making contact instead of opening with \"how much?\".",
      "A gallery of completed residential, commercial and studio projects does the persuading for that service, and an admin area covers products, categories, media and orders for the owner.",
    ],
    features: [
      {
        title: "Twelve-category catalogue",
        detail:
          "Rugs, mirrors, furniture, chandeliers, wall art, figurines, artificial plants and kitchen electronics, with search, filtering and sale pricing.",
      },
      {
        title: "Paystack checkout",
        detail:
          "Payment in Naira through the methods customers in the market actually use.",
      },
      {
        title: "Accounts and order tracking",
        detail:
          "Customers can create an account and follow an order, instead of asking for a status update in DMs.",
      },
      {
        title: "Services with published pricing",
        detail:
          "Consultation, spatial planning and installation listed with starting prices, so enquiries arrive already qualified.",
      },
      {
        title: "Completed-project gallery",
        detail:
          "Residential, commercial and studio work, filterable — the proof behind the styling service.",
      },
      {
        title: "Self-serve admin",
        detail:
          "Products, categories, media and orders managed by the owner without developer involvement.",
      },
    ],
    numbers: [
      {
        value: "₦1M+",
        label: "Processed through the store",
        note: "In the first month after launch.",
      },
      {
        value: "63",
        label: "Visits from Google search",
        note: "First month, from no prior web presence or search listing.",
      },
    ],
    gallery: [
      {
        src: "/work/deniyis-home.webp",
        alt: "Deniyi's Interiors & More home page with hero carousel",
        caption: "Storefront home page",
        span: "wide",
      },
      {
        src: "/work/deniyis-collections.webp",
        alt: "Deniyi's Interiors & More catalogue page showing category filters and product pricing",
        caption: "Catalogue with category filtering and sale pricing",
        span: "wide",
      },
      {
        src: "/work/deniyis-gallery.webp",
        alt: "Deniyi's Interiors & More completed-project gallery",
        caption: "Completed-project gallery behind the styling service",
        span: "wide",
      },
    ],
    technicalBuild: [
      {
        title: "Two sales models, one system",
        detail:
          "Stock sells through a cart and checkout; styling sells through a priced enquiry. Both run off the same catalogue, admin and design language rather than as two disconnected sites.",
      },
      {
        title: "Prerendered catalogue",
        detail:
          "Collection and product pages are rendered ahead of time and served from Vercel's edge, so the first view is fast on the mobile connections most of the traffic arrives on.",
      },
      {
        title: "Optimised product imagery",
        detail:
          "A décor catalogue is almost entirely photographs. Images are resized and served in modern formats per device rather than shipping full-size originals.",
      },
      {
        title: "Crawl rules that match the site",
        detail:
          "A generated sitemap covers the pages worth indexing, while robots.txt keeps admin, accounts, checkout, payment, tracking and API routes out of search results entirely.",
      },
      {
        title: "Installable on a phone",
        detail:
          "A web manifest lets returning customers install the store to their home screen and open it like an app.",
      },
      {
        title: "Owner-facing admin",
        detail:
          "A role-gated back office for products, categories, media and orders — the reason the site does not generate developer invoices for routine changes.",
      },
    ],
    impact: [
      {
        metric: "₦1M+",
        label: "Revenue processed in month one",
        detail:
          "The store moved real money in its first month live, through a checkout that had not existed before.",
      },
      {
        metric: "63",
        label: "Organic visits in month one",
        detail:
          "Customers arriving from Google search, where the brand previously had no listing at all.",
      },
      {
        label: "Social leads that convert themselves",
        detail:
          "Traffic arriving from TikTok and Instagram now browses, pays and tracks its own orders. The owner is no longer answering a WhatsApp DM to close every individual sale.",
      },
      {
        label: "From DMs to a system of record",
        detail:
          "Selling moved off informal chat threads onto a system that records every order end to end.",
      },
      {
        label: "A route in for higher-value work",
        detail:
          "Styling services are presented with prices and a portfolio, so the business can sell engagements worth many times an average basket.",
      },
      {
        label: "Owner-operated catalogue",
        detail:
          "Products, pricing and stock are managed in-house after handover training — no developer in the loop for day-to-day changes.",
      },
    ],
  },

  {
    slug: "cutiez-couture",
    name: "Cutiez Couture",
    category: "Fashion E-Commerce",
    client: "Cutiez Couture",
    liveUrl: "https://www.cutiezcouture.com.ng",
    summary:
      "A custom unisex fashion brand selling from Instagram and TikTok — given a landing page that converts social traffic and a shop that takes the order without a DM.",
    intro:
      "Cutiez Couture had an audience on Instagram and TikTok and no way to serve it except by hand. Every order arrived as a WhatsApp message the team had to answer, size and price individually. Now a landing page catches the social traffic and hands it to a storefront that sizes, quotes and takes the order on its own.",
    featured: true,
    cover: {
      src: "/work/cutiez-landing.webp",
      alt: "Cutiez Couture landing page with the headline Redefining Decency in Fashion",
    },
    role: "Design and front-end development across both properties",
    services: [
      "Landing page design",
      "E-commerce build",
      "Conversion funnel",
      "Deployment",
    ],
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vercel"],
    challenge: [
      "The brand's demand was already there — Instagram and TikTok were producing leads steadily. Converting them was the bottleneck. Every single order ran through a WhatsApp conversation: what sizes exist, what it costs, what is in stock, how to pay.",
      "That does not scale, and it caps the business at the number of messages one person can answer in a day. Interest arriving overnight or during a shoot simply waited.",
      "Custom sizing made it harder still. Cutiez sells made-to-fit unisex pieces, so \"what size are you?\" is a real conversation rather than a dropdown — which is exactly why it had stayed a manual process.",
    ],
    goal: [
      "Give social traffic somewhere to land that sells the brand, rather than dropping a shop link into a bio and hoping.",
      "Let a customer choose a size, see a price and place an order without anyone answering a message.",
      "Keep custom sizing available, since it is the brand's differentiator, without forcing every order back into a DM.",
      "Be findable outside social — the brand had no presence in search at all.",
    ],
    roleDetail: [
      "Designed and built both properties: the marketing landing page at the brand's own domain, and the storefront it feeds.",
      "The split is deliberate. The landing page exists to convert social traffic — story, proof, best sellers, a single obvious call to action. The shop exists to take the order. Keeping them separate means the pitch can change as fast as the brand's campaigns do, without touching the store.",
      "Also handled deployment for both, and set up the Google Business Profile that gives the brand a presence in search alongside the social channels.",
    ],
    solution: [
      "The landing page opens on the brand's positioning — custom unisex fashion, \"Redefining Decency in Fashion\" — then runs the story, the four things that make the label different, and a row of best sellers with prices. Every route through it ends at the same place: shop your style.",
      "The storefront carries the full catalogue with featured pieces, quick view, search, customer accounts and an order history, so a returning customer picks up where they left off.",
      "Product pages solve the sizing conversation directly: standard sizes from XS to XXL, a size guide, and a \"Need custom size?\" route for the made-to-measure work. The common case self-serves and only genuine custom orders start a conversation.",
      "Payment currently completes by bank transfer, which is how the brand's customers already pay. The store captures the order and its details; a gateway integration is the natural next step rather than a blocker to launching.",
    ],
    features: [
      {
        title: "Conversion-first landing page",
        detail:
          "Brand story, differentiators and best sellers, all funnelling to one call to action for social traffic.",
      },
      {
        title: "Full catalogue storefront",
        detail:
          "Featured pieces, quick view, search and a complete product listing in the brand's black, white and red.",
      },
      {
        title: "Sizes without the DM",
        detail:
          "XS to XXL with a size guide on every product page, so the routine question answers itself.",
      },
      {
        title: "Custom sizing kept",
        detail:
          "A dedicated route for made-to-measure orders — the brand's differentiator survives the automation.",
      },
      {
        title: "Accounts and order history",
        detail:
          "Customers can sign in and see their own orders instead of asking for a status update.",
      },
      {
        title: "Found beyond social",
        detail:
          "A Google Business Profile giving the brand a search presence it did not previously have.",
      },
    ],
    numbers: [
      {
        value: "~70",
        label: "Visits a month from Google Business Profile",
        note: "Monthly average, from a brand that previously existed only on social.",
      },
    ],
    gallery: [
      {
        src: "/work/cutiez-landing.webp",
        alt: "Cutiez Couture landing page hero",
        caption: "Landing page — built to convert Instagram and TikTok traffic",
        span: "wide",
      },
      {
        src: "/work/cutiez-shop.webp",
        alt: "Cutiez Couture storefront showing the full product listing",
        caption: "Storefront catalogue",
        span: "wide",
      },
      {
        src: "/work/cutiez-product.webp",
        alt: "Cutiez Couture product page with size selection and add to bag",
        caption: "Product page — sizes, size guide and a custom-size route",
        span: "wide",
      },
    ],
    technicalBuild: [
      {
        title: "Two properties, one funnel",
        detail:
          "A marketing site and a storefront deployed separately. Campaign copy and the shop can change independently, and a broken deploy on one cannot take down the other.",
      },
      {
        title: "Sizing modelled as a decision",
        detail:
          "Standard sizes handle the majority of orders in the interface; custom measurements branch out to a separate flow. The manual work now only happens where it genuinely adds value.",
      },
      {
        title: "Payment by transfer, deliberately",
        detail:
          "The brand's customers already pay by bank transfer, so the store captures the order and the transfer confirms it. Shipping without a gateway got the funnel working months earlier; adding one later changes checkout, not the catalogue.",
      },
      {
        title: "Client-rendered storefront",
        detail:
          "A single-page React build keeps browsing, filtering and the bag instant once loaded, which suits a catalogue customers scroll through repeatedly.",
      },
      {
        title: "Search presence without a blog",
        detail:
          "For a brand whose discovery happens on social, a Google Business Profile does more per hour invested than content marketing would.",
      },
    ],
    impact: [
      {
        metric: "~70",
        label: "Monthly visits from Google search",
        detail:
          "A discovery channel the brand did not have before, running alongside Instagram and TikTok rather than depending on them.",
      },
      {
        label: "Orders without a conversation",
        detail:
          "Social leads pick a size, see the price and place the order themselves. The team answers messages about genuinely custom work, not about what a tracksuit costs.",
      },
      {
        label: "Open outside working hours",
        detail:
          "Interest arriving overnight or mid-shoot now converts instead of queueing behind whoever is free to reply.",
      },
      {
        label: "A funnel that can be tuned",
        detail:
          "With the pitch separated from the shop, the landing page can be rewritten for a campaign without anyone touching the catalogue.",
      },
    ],
  },

  {
    slug: "edugear",
    name: "EduGear",
    category: "Education SaaS",
    summary:
      "A school management platform bringing students, staff, academics and fees into one system.",
    intro:
      "Schools run on a patchwork of registers, spreadsheets and message groups. EduGear consolidates the day-to-day administration into one platform that administrators, teachers and parents each see their own slice of.",
    featured: false,
    cover: {
      alt: "EduGear school management dashboard",
    },
    role: "Product design and full-stack development",
    services: ["SaaS development", "Product design", "Dashboard design"],
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
    challenge: [
      "School administration is a set of overlapping jobs — enrolment, attendance, results, fees, communication — usually handled by separate tools that do not talk to each other. The same student data gets re-entered repeatedly.",
      "Three very different groups need access to the same underlying records: administrators need everything, teachers need their classes, parents need their own children. Getting those boundaries right is the product.",
    ],
    solution: [
      "One record per student, shared across every module, so enrolment, attendance, results and fees all read from the same source instead of drifting apart.",
      "Role-based access shapes the interface around each user: administrators get the full system, teachers get their classes and marking, parents get progress and payments for their children only.",
      "Modules are built to be adopted incrementally — a school can start with the records and attendance it needs most and switch on fees or results later, rather than migrating everything at once.",
    ],
    features: [
      {
        title: "Student records",
        detail:
          "A single profile per student that every other module reads from.",
      },
      {
        title: "Attendance and academics",
        detail:
          "Registers, assessment and results captured by teachers in the same system.",
      },
      {
        title: "Fees and payments",
        detail:
          "Invoicing and payment tracking tied directly to student records.",
      },
      {
        title: "Role-based portals",
        detail:
          "Administrator, teacher and parent each see an interface scoped to what they need.",
      },
    ],
    gallery: [
      {
        alt: "EduGear administrator dashboard",
        caption: "Administrator overview",
        span: "wide",
      },
      {
        alt: "EduGear student records module",
        caption: "Student records",
        span: "half",
      },
      {
        alt: "EduGear fees and payments module",
        caption: "Fees and payments",
        span: "half",
      },
    ],
    impact: [
      {
        label: "One system, one record",
        detail:
          "Consolidating separate tools removes the duplicate data entry that caused most errors.",
      },
      {
        label: "The right view per role",
        detail:
          "Administrators, teachers and parents each get a focused interface rather than a shared everything-screen.",
      },
      {
        label: "Adoptable in stages",
        detail:
          "Modules can be switched on progressively, which makes rollout realistic for a working school.",
      },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function adjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { previous: undefined, next: undefined };

  return {
    previous: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
