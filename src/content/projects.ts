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
    slug: "respora",
    name: "RespOra",
    category: "SaaS Platform",
    summary:
      "An AI-powered research platform that turns scattered data into answers teams can act on.",
    intro:
      "Research teams were losing days to manual data wrangling. RespOra pulls fragmented sources into one intelligent workspace, so analysts spend their time on findings instead of spreadsheets.",
    featured: true,
    cover: {
      alt: "RespOra research intelligence dashboard shown on a laptop",
    },
    role: "Full-stack engineering, product design, AI integration",
    services: ["Product design", "Full-stack development", "AI integration"],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Python", "Vercel"],
    challenge: [
      "Research and analysis work was spread across spreadsheets, documents and disconnected tools. Every question meant re-gathering the same data by hand, and the answer was only as current as the last manual export.",
      "The teams doing this work are not engineers. Any solution had to hide the complexity of ingesting messy, inconsistent source data behind an interface that felt obvious on first use.",
    ],
    solution: [
      "RespOra unifies data collection, processing and analysis in one place. Sources are ingested and normalised automatically, then surfaced through a dashboard built around the questions people actually ask.",
      "AI handles the heavy lifting on unstructured material — summarising, extracting and classifying — while keeping a clear trail back to the underlying source, so the output stays trustworthy rather than opaque.",
      "The interface uses a strict grid and low-contrast elevation so attention stays on the data. Filtering is context-aware: options adapt to the dataset in view instead of presenting every possible control at once.",
    ],
    features: [
      {
        title: "Unified data view",
        detail:
          "A single workspace across previously disconnected sources, with live status on everything in flight.",
      },
      {
        title: "AI-assisted analysis",
        detail:
          "Summarisation and extraction over unstructured material, traceable back to the original source.",
      },
      {
        title: "Context-aware filtering",
        detail:
          "Filters adapt to the selected dataset, so the controls on screen are always the relevant ones.",
      },
      {
        title: "Automated reporting",
        detail:
          "One-click generation of shareable summaries, replacing manual report assembly.",
      },
    ],
    gallery: [
      {
        alt: "RespOra unified data dashboard",
        caption: "Unified data view across active research",
        span: "wide",
      },
      {
        alt: "RespOra filtering interface",
        caption: "Context-aware filters",
        span: "half",
      },
      {
        alt: "RespOra detail drill-down view",
        caption: "Drill-down into individual records",
        span: "half",
      },
      {
        alt: "RespOra automated reporting screen",
        caption: "Automated report generation",
        span: "wide",
      },
    ],
    impact: [
      {
        label: "Less manual aggregation",
        detail:
          "Work that previously meant rebuilding spreadsheets by hand now happens on ingest, freeing analysts for actual analysis.",
      },
      {
        label: "One source of truth",
        detail:
          "Teams stopped reconciling competing exports and started working from the same live view.",
      },
      {
        label: "Faster to an answer",
        detail:
          "Questions that used to require a new data pull are answered directly in the interface.",
      },
    ],
  },

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
        label: "From DMs to a system of record",
        detail:
          "Selling moved off informal chat threads onto a system that records every order end to end and lets customers track their own.",
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
    slug: "toyosi-insurance",
    name: "Toyosi Insurance",
    category: "FinTech MVP",
    summary:
      "An insurance MVP that took policy management and claims from paperwork to a product customers can use on their phone.",
    intro:
      "Insurance runs on processes that were never designed for a screen. This MVP took the core of that — policies and claims — and made it something a customer can complete without a phone call.",
    featured: true,
    cover: {
      alt: "Toyosi Insurance policy management interface on a mobile device",
    },
    role: "Product design and full-stack MVP development",
    services: ["MVP development", "Product design", "Workflow design"],
    tech: ["React Native", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    challenge: [
      "Policy administration and claims were manual, document-heavy and slow. Every step depended on someone being available, and customers had no way to see where their claim stood.",
      "As an MVP, the build had to prove the model worked without attempting to digitise the entire business at once. Choosing what to leave out mattered as much as what went in.",
    ],
    solution: [
      "We scoped to the two workflows that carried the most friction — managing a policy and filing a claim — and built those properly rather than building everything shallowly.",
      "Customers get a mobile-first experience covering policy details, documents and claim submission, with clear status at every stage so the common 'where is my claim' call disappears.",
      "Behind it, an operations view lets the team process submissions in one place, with the structure ready to extend as more of the business moves onto the platform.",
    ],
    features: [
      {
        title: "Policy management",
        detail:
          "Coverage, documents and renewal detail available to the customer without a phone call.",
      },
      {
        title: "Digital claims submission",
        detail:
          "Guided claim filing with document upload, replacing the paper-and-email round trip.",
      },
      {
        title: "Transparent claim status",
        detail:
          "Customers can see exactly where a claim is, which removes the most common support request.",
      },
      {
        title: "Operations dashboard",
        detail:
          "A single queue for the team to review, progress and resolve submissions.",
      },
    ],
    gallery: [
      {
        alt: "Toyosi Insurance mobile policy screen",
        caption: "Policy overview on mobile",
        span: "half",
      },
      {
        alt: "Toyosi Insurance claims submission flow",
        caption: "Guided claims submission",
        span: "half",
      },
      {
        alt: "Toyosi Insurance operations dashboard",
        caption: "Operations queue",
        span: "wide",
      },
    ],
    impact: [
      {
        label: "A working product, not a deck",
        detail:
          "The MVP put a real, usable service in front of customers to validate the model.",
      },
      {
        label: "Fewer status enquiries",
        detail:
          "Visible claim status addresses the support request the team fielded most often.",
      },
      {
        label: "Room to grow",
        detail:
          "Scoped deliberately, with the architecture ready for the next set of workflows.",
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
