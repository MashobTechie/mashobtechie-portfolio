/**
 * Project + case-study content.
 *
 * IMAGES: every `src` here is optional. Where a screenshot has not been
 * supplied yet, the media components render a designed placeholder frame
 * instead of a broken image. To light one up, drop the file into
 * `public/work/` and add its path — nothing else needs to change.
 *
 * OUTCOMES: `impact` entries are qualitative on purpose. Add a `metric`
 * only when there is a real, verified number to stand behind.
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
  challenge: string[];
  solution: string[];
  features: { title: string; detail: string }[];
  gallery: ProjectImage[];
  impact: ImpactPoint[];
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
    name: "Deniyi's Interiors",
    category: "E-Commerce",
    summary:
      "A full storefront for a bespoke interior décor business — browsing, checkout, payments and a complete admin back office.",
    intro:
      "An Ibadan-based interior décor brand selling bespoke furniture needed to sell online properly: real product variants, working payments, and a back office the owner could run without calling a developer.",
    featured: true,
    cover: {
      alt: "Deniyi's Interiors storefront shown on a tablet",
    },
    role: "End-to-end product design and full-stack development",
    services: [
      "E-commerce design",
      "Full-stack development",
      "Payment integration",
      "Admin tooling",
    ],
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Paystack", "Auth.js"],
    challenge: [
      "Bespoke furniture does not fit a simple product model. Pieces vary by material, finish, dimension and lead time, and the wrong combination is an expensive mistake for both sides.",
      "The business also needed to run itself. A storefront that required developer involvement to add a product or check an order would have been a liability rather than an asset.",
    ],
    solution: [
      "A storefront built around a real variant system, so every purchasable combination carries its own pricing, imagery and stock position. Customers see accurate availability before they commit, not after.",
      "Checkout integrates Paystack for local payment methods, with order state tracked end to end so both the customer and the business always know where an order stands.",
      "A complete admin area covers products, variants, media, orders and customers — the owner manages the catalogue directly, and the editorial product presentation holds up as the range grows.",
    ],
    features: [
      {
        title: "Full variant catalogue",
        detail:
          "Material, finish and dimension combinations with independent pricing, imagery and stock.",
      },
      {
        title: "Checkout and payments",
        detail:
          "Paystack integration covering the payment methods customers in the market actually use.",
      },
      {
        title: "Order management",
        detail:
          "End-to-end order state, visible to the business and communicated to the customer.",
      },
      {
        title: "Self-serve admin",
        detail:
          "Products, media, orders and customers managed by the owner without developer involvement.",
      },
      {
        title: "Editorial product pages",
        detail:
          "Premium presentation that suits bespoke pieces rather than a generic commodity grid.",
      },
      {
        title: "Built for mobile",
        detail:
          "The full browse-to-checkout path designed for phones, where most of the traffic arrives.",
      },
    ],
    gallery: [
      {
        alt: "Deniyi's Interiors home page",
        caption: "Editorial storefront",
        span: "wide",
      },
      {
        alt: "Deniyi's Interiors product detail page with variants",
        caption: "Product detail with variant selection",
        span: "half",
      },
      {
        alt: "Deniyi's Interiors checkout flow",
        caption: "Checkout and payment",
        span: "half",
      },
      {
        alt: "Deniyi's Interiors admin dashboard",
        caption: "Admin back office",
        span: "wide",
      },
    ],
    impact: [
      {
        label: "Selling online, properly",
        detail:
          "The business moved from informal enquiry-led selling to a real storefront with working checkout.",
      },
      {
        label: "Owner-operated catalogue",
        detail:
          "Products, pricing and stock are managed in-house — no developer in the loop for day-to-day changes.",
      },
      {
        label: "Presentation that matches the product",
        detail:
          "Bespoke pieces are presented editorially, consistent with how the brand sells in person.",
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
