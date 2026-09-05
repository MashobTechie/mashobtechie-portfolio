/**
 * Project + case-study content.
 *
 * IMAGES: every `src` here is optional. Where a screenshot has not been
 * supplied yet, the media components render a designed placeholder frame
 * instead of a broken image. To light one up, drop the file into
 * `public/work/` and add its path. Nothing else needs to change.
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
 * A hard number for section 05, The Numbers.
 *
 * Only ever populated with a figure the client has actually reported. A
 * project with nothing measured leaves `numbers` undefined and the section
 * does not render. An absent section reads honestly, an invented one does
 * not survive first contact with a prospect who asks about it.
 */
export type Metric = {
  /** The figure itself, pre-formatted, e.g. "₦1M+". */
  value: string;
  label: string;
  /** Qualifier: window, source, or what the baseline was. */
  note?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  /** One line for cards: business outcome, not stack. */
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
  /** 01. The Problem. What was broken or missing. */
  challenge: string[];
  /** 02. The Goal. What the business needed to happen. */
  goal?: string[];
  /** 03. My Role. What was done, beyond the one-line `role`. */
  roleDetail?: string[];
  /** 04. The Solution. */
  solution: string[];
  features: { title: string; detail: string }[];
  /** 05. The Numbers. Verified figures only. Omit for unmeasured work. */
  numbers?: Metric[];
  /** 06. The Product. */
  gallery: ProjectImage[];
  /** 07. The Technical Build. Architecture, integrations, decisions. */
  technicalBuild?: { title: string; detail: string }[];
  /** 08. The Outcome. */
  impact: ImpactPoint[];
  /** 09. Lessons. */
  lessons?: string[];
  /** Live URL, when the project is public and shareable. */
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "respora",
    name: "Respora",
    category: "SaaS Platform",
    liveUrl: "https://respora.app",
    timeline: "March 2026 to now",
    summary:
      "My own product: a two-sided research platform giving Nigerian institutions verified respondents, and respondents airtime and data for their time.",
    intro:
      "Nigerian researchers run surveys on Google Forms and hope strangers answer them. Respondents give up their time and data allowance for nothing. Respora is the platform I built to fix both halves at once: a verified respondent panel with an incentive layer, and the tooling researchers need to run a study against it.",
    featured: true,
    cover: {
      src: "/work/respora-home.webp",
      alt: "Respora home page, showing its positioning as an AI-powered research and data intelligence platform for Nigeria",
    },
    role: "Founder. Product, full-stack engineering and operations",
    services: [
      "Product design",
      "Full-stack development",
      "Payments & rewards",
      "Platform operations",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Supabase",
      "Vercel",
    ],
    challenge: [
      "Research in Nigeria runs on Google Forms. It costs nothing, which is why everyone uses it, and it gives a researcher no way to reach anyone outside their own contacts. Response quality is whatever your WhatsApp groups happen to produce.",
      "The other side of that trade is worse. A respondent spends their own data allowance answering a stranger's thesis survey and receives nothing for it, so completion rates collapse and the responses that do arrive skew toward whoever felt obliged.",
      "Neither side can fix this alone. A panel with no studies to answer goes dormant; a study with no panel has nobody to answer it. Building one without the other produces something useless.",
    ],
    goal: [
      "Give researchers access to verified Nigerian respondents they have no personal connection to, with demographic targeting Google Forms cannot offer.",
      "Make answering a survey worth a respondent's time in a currency that is useful to them locally: airtime and data, not a promise of a prize draw.",
      "Keep both sides moving. The platform has to sequence supply and demand so neither half sits idle waiting for the other.",
      "Run at a cost that Nigerian academic budgets can absorb, which rules out most of the international panel providers outright.",
    ],
    roleDetail: [
      "This one is mine end to end. I designed the product, built the platform, and run the operations behind it. I am the founder, not a contractor who shipped and left.",
      "That means the engineering decisions and the business ones are the same decisions: what a coin is worth, how a respondent is verified, when a study closes, what a researcher is allowed to target.",
      "It is also the project where I learned what a two-sided market actually demands, which is a different discipline from building a site for a client with a known audience.",
    ],
    solution: [
      "Two distinct products in one platform. Respondents get a mobile-first flow: browse available studies, complete them, and redeem earned coins for airtime or data. Researchers get study creation, demographic targeting, live response monitoring and structured reporting.",
      "The incentive layer is the mechanism, not a marketing gimmick. Coins are earned per completed study and redeemed against airtime and data, a reward with real local value. That is what separates a completion rate that works from one that does not.",
      "Verification sits underneath both sides. A researcher paying for responses needs to know a respondent is a real, distinct Nigerian person, so the panel is verified rather than open signup.",
      "Analytics and export turn raw responses into something a researcher can put in front of a supervisor or a board without rebuilding it in a spreadsheet first.",
    ],
    features: [
      {
        title: "Verified respondent panel",
        detail:
          "Real, distinct Nigerian respondents rather than an open form anyone can flood.",
      },
      {
        title: "Airtime and data rewards",
        detail:
          "Coins earned per completed study, redeemed for something with genuine local value.",
      },
      {
        title: "Demographic targeting",
        detail:
          "Researchers reach a specific audience instead of whoever happens to see the link.",
      },
      {
        title: "Study creation and monitoring",
        detail:
          "Build a study, publish it to the panel and watch responses arrive live.",
      },
      {
        title: "Analytics and export",
        detail:
          "Structured reporting, so results leave the platform decision-ready.",
      },
      {
        title: "Mobile-first throughout",
        detail:
          "Built for the phones respondents actually use, on the connections they actually have.",
      },
    ],
    numbers: [
      {
        value: "25K+",
        label: "Responses collected",
        note: "Across the panel since launch.",
      },
      {
        value: "500+",
        label: "Studies run on the platform",
        note: "By researchers with no prior connection to their respondents.",
      },
      {
        value: "48 hrs",
        label: "Average study turnaround",
        note: "From publishing a study to a usable response set.",
      },
    ],
    gallery: [
      {
        src: "/work/respora-home.webp",
        alt: "Respora home page with headline and platform statistics",
        caption: "The platform's positioning and live numbers",
        span: "wide",
      },
      {
        src: "/work/respora-two-sides.webp",
        alt: "Respora section explaining the respondent and researcher sides of the platform",
        caption: "Two products in one platform, respondent and researcher",
        span: "wide",
      },
      {
        src: "/work/respora-how-it-works.webp",
        alt: "Respora how it works section showing the three-step respondent flow",
        caption: "The respondent flow, from free account to redeemed reward",
        span: "wide",
      },
    ],
    technicalBuild: [
      {
        title: "Supply before demand, deliberately",
        detail:
          "A two-sided market cannot launch both sides at once. Building the respondent panel first meant the first researcher to arrive found an audience waiting, rather than an empty platform. The opposite order produces something with nothing to sell.",
      },
      {
        title: "Coins as an internal ledger",
        detail:
          "Rewards are held as platform coins and redeemed for airtime or data, which keeps earning decoupled from payout. A respondent's balance is a record inside the system rather than a pending transfer to a mobile network.",
      },
      {
        title: "Verification as the product",
        detail:
          "The thing a researcher is actually paying for is confidence that a response came from a real, distinct person in the demographic they asked for. Verification is not a signup hurdle here, it is the value.",
      },
      {
        title: "Mobile-first as a constraint",
        detail:
          "Respondents arrive on phones over metered data. Every design decision (payload size, form length, session handling) is bounded by that rather than by what looks good on a laptop.",
      },
      {
        title: "Two interfaces, one data model",
        detail:
          "The respondent app and the researcher console read and write the same studies and responses, so a published study appears to the panel without a synchronisation step between two systems.",
      },
    ],
    impact: [
      {
        metric: "25K+",
        label: "Responses collected",
        detail:
          "Research data gathered from a verified panel that did not exist before the platform did.",
      },
      {
        label: "Research that reaches beyond a contact list",
        detail:
          "Researchers can survey a targeted Nigerian audience they have no personal relationship with. Google Forms structurally cannot do that.",
      },
      {
        label: "Respondents paid in something useful",
        detail:
          "Time spent answering a survey converts to airtime and data rather than nothing, which is what makes completion rates hold up.",
      },
      {
        label: "A product I run, not just built",
        detail:
          "Respora is my own platform. The decisions about pricing, verification and rewards are mine to get right and mine to live with.",
      },
    ],
  },

  {
    slug: "deniyis-interior",
    name: "Deniyi's Interiors & More",
    category: "E-Commerce",
    client: "Deniyi's Interiors & More",
    timeline: "July 2026",
    liveUrl: "https://deniyisinterior.com.ng",
    summary:
      "A décor and furniture store for an Ibadan brand, with twelve product categories, Paystack checkout, a priced styling service and an admin panel the owner runs herself.",
    intro:
      "Deniyi's Interiors & More sells quality home décor at accessible prices in Ibadan, delivering citywide and nationwide. It went from taking orders in DMs to a full storefront with working payments, a services arm and a Google presence, and it processed over ₦1,000,000 in its first month live.",
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
      "And there were really two businesses to serve. Stock, meaning rugs, mirrors, chandeliers and kitchen electronics, sells from a cart. Interior styling sells from a conversation, at a very different price point. One site had to do both without either feeling bolted on.",
    ],
    goal: [
      "Sell the stock online properly: let a customer browse the real catalogue, pay, and track the order, without a conversation having to happen first.",
      "Get found. The brand needed to appear when someone nearby searched for what it sells, rather than relying entirely on word of mouth.",
      "Give the styling work a credible route in. Published prices qualify an enquiry before it arrives, so the higher-value conversations start further along.",
      "Take the DMs off the owner. Leads arriving from TikTok and Instagram had to be able to buy on their own, instead of every sale costing a back-and-forth conversation.",
      "Run without a developer. The owner had to add products, change prices and check orders herself, or the site would be a recurring cost instead of an asset.",
    ],
    roleDetail: [
      "Sole designer and developer, end to end. I designed the interface around the brand's white, gold and black identity, then built the storefront, checkout, services pages, project gallery and admin panel.",
      "Beyond the build: domain and SSL configuration, deployment to Vercel, technical SEO, and setting up Google Business Profile and Search Console so the brand could be found locally.",
      "I also ran the handover training, covering uploading and editing products, managing categories and working through orders, so daily operation sits with the owner rather than with me.",
    ],
    solution: [
      "A storefront spanning twelve categories, from Turkish centre rugs and mirrors to chandeliers, figurines and kitchen electronics. Search, category filtering, sale pricing, customer accounts and order tracking all ship as part of it.",
      "Checkout runs on Paystack in Naira, covering the payment methods customers in the market actually use, with order state tracked end to end so both sides know where an order stands.",
      "The styling service is published with real starting prices for consultation, spatial planning and sourcing, then on-site styling and installation. A prospect self-qualifies before making contact instead of opening with \"how much?\".",
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
          "Residential, commercial and studio work, filterable. The proof behind the styling service.",
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
          "A role-gated back office for products, categories, media and orders. It is the reason the site does not generate developer invoices for routine changes.",
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
          "Products, pricing and stock are managed in-house after handover training, with no developer in the loop for day-to-day changes.",
      },
    ],
  },

  {
    slug: "hairbybash",
    name: "HairbyBash",
    category: "Booking Platform",
    client: "HairbyBash, Calgary",
    timeline: "February to August 2026",
    liveUrl: "https://www.hairbybash.ca",
    summary:
      "A booking platform for a Calgary braiding and locs studio. Clients pick a service, take a real slot and pay a deposit, and the owner runs the whole business from an admin panel.",
    intro:
      "HairbyBash is a private braiding and natural hair studio in Calgary. Appointments are the only thing the business sells, and every one of them used to start as a direct message. The studio now runs on a booking system that takes the slot, charges a deposit through Stripe, emails everyone involved and reminds the client a day before, with an admin panel behind it that Bash operates herself.",
    featured: true,
    cover: {
      src: "/work/hairbybash-home.webp",
      alt: "HairbyBash home page, a Calgary luxury braiding and locs studio",
    },
    role: "Lead developer, full-stack",
    services: [
      "Product and UX design",
      "Full-stack development",
      "Payments integration",
      "Admin tooling",
      "Deployment and handover",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Stripe",
      "Resend",
      "GitHub Actions",
      "Vercel",
    ],
    challenge: [
      "A booked chair is the only thing this studio sells, and every booking ran through a conversation. What is offered, what it costs, what is free on Thursday, how to pay: the same handful of questions, answered by hand, in an inbox, while working.",
      "Manual booking has no way to hold a slot. Two clients could be told the same time, and nothing collected up front meant a no-show cost the studio a whole afternoon it had turned other work away for.",
      "The pricing is genuinely complex. Braiding and locs run from a short set to a full installation, deposits are a percentage of a service that varies by style, Alberta GST applies, and the balance is settled in person. That is not something a generic booking widget models.",
      "The studio is private, with the address released on booking, so the site has to carry all of the trust that a walk-past storefront would otherwise carry for free.",
    ],
    goal: [
      "Let a client book and pay without a conversation, at any hour, including the ones where the studio is working.",
      "Make a slot genuinely held once it is taken, and make a no-show cost the client something rather than the studio.",
      "Hand the owner the controls. Services, prices, calendar and time off had to be hers to change without a developer.",
      "Look like the tier of service being sold, because in a craft business the aesthetic is part of the argument.",
    ],
    roleDetail: [
      "Lead developer on the project, delivered through A4 Digital Hub with a small team. I wrote the large majority of the codebase across roughly a hundred commits: the booking flow, the payment integration, the database schema, the admin panel and the scheduled jobs.",
      "The work came in two phases. The first shipped the studio a working site and booking system in a few weeks, along with a written handover so Bash could run it. The second, months later and with real bookings going through it, went back over the parts that only fail under real usage: concurrency, abuse, access control and time.",
      "I also wrote the client handover guide the studio still runs from, covering the admin panel, service management and going-live checklist in plain language rather than developer instructions.",
    ],
    solution: [
      "A booking flow that runs start to finish without anyone replying to anything. The client picks a service, sees only the slots that are genuinely free, enters their details and pays a deposit through Stripe Checkout. Payment confirms the booking, and the confirmation and studio alert go out in the same moment.",
      "Deposits are modelled properly rather than fixed. Each service carries its own deposit percentage, Alberta GST is applied to the deposit, and the balance is recorded as due in person. Services priced too low for Stripe's minimum charge are flagged in the admin panel as unbookable online instead of failing silently at checkout.",
      "An admin panel with live revenue, client and appointment figures, a filterable bookings table, a month calendar, full service and category management with image upload, and date blocking for holidays and time off. Every status change the owner makes emails the client automatically.",
      "Scheduled jobs handle the things nobody should have to remember: a reminder to every client twenty four hours before their appointment, and a sweeper that releases slots held by checkouts that were never completed.",
    ],
    features: [
      {
        title: "Deposit-backed booking",
        detail:
          "Stripe Checkout takes a per-service deposit with GST, the balance is settled in the chair, and the slot is only held once payment lands.",
      },
      {
        title: "Real availability",
        detail:
          "Slots are generated from studio hours and service duration, so a three hour style is only offered when three hours actually remain.",
      },
      {
        title: "Owner-run admin panel",
        detail:
          "Bookings, calendar, services, categories, imagery and blocked dates, all editable without a developer in the loop.",
      },
      {
        title: "Five automated emails",
        detail:
          "Confirmation, studio alert, twenty four hour reminder, status change and slot released, all sent without anyone pressing send.",
      },
      {
        title: "Abandoned slots released",
        detail:
          "A checkout left unpaid expires, the slot returns to the calendar, and the client is told rather than left waiting.",
      },
      {
        title: "Policies built into the data",
        detail:
          "One reschedule at over forty eight hours notice, and blow-dry preference captured at booking, recorded the way the studio actually charges for it.",
      },
    ],
    gallery: [
      {
        src: "/work/hairbybash-home.webp",
        alt: "HairbyBash home page with the Calgary Braider and Loctician headline",
        caption: "Home page, opening on positioning and a booking call to action",
        span: "wide",
      },
      {
        src: "/work/hairbybash-services.webp",
        alt: "HairbyBash services menu showing categories with starting prices",
        caption: "The services menu, with a starting price on every category",
        span: "wide",
      },
      {
        src: "/work/hairbybash-about.webp",
        alt: "HairbyBash about page introducing the founder and the studio",
        caption: "The founder story, doing the trust work a private studio cannot",
        span: "wide",
      },
    ],
    technicalBuild: [
      {
        title: "Double booking prevented in the database",
        detail:
          "Checking availability before inserting narrows the race but cannot close it: it is a read then a write, and two requests milliseconds apart both see the slot free. A Postgres exclusion constraint over the date and a time range moves the rule to the only place that can enforce it under concurrency. The second insert fails, and the route turns that failure into the same \"pick another time\" the flow already handled.",
      },
      {
        title: "Payment confirmed by webhook, not by redirect",
        detail:
          "The Stripe webhook decides whether a booking is paid. A client who closes the tab after paying cannot leave the studio with an order in the wrong state, and the confirmation page resolves the booking even when the webhook is slower than the redirect.",
      },
      {
        title: "Rate limiting that survives serverless",
        detail:
          "The public checkout endpoint creates a row and a Stripe session on every call, so an unthrottled script could hold the whole calendar. The counter lives in Postgres rather than process memory, because serverless instances come and go and an in-memory limit would reset on every cold start. That is protection that only looks like protection.",
      },
      {
        title: "Scheduled jobs built for unreliable schedulers",
        detail:
          "Reminders and the stale-slot sweeper run hourly on GitHub Actions, which treats schedules as best effort and will delay or skip runs. So the reminder job has no lower time bound and picks up whatever an earlier run missed, it claims each booking in the database before sending so overlapping runs cannot double-send, and the sweeper is idempotent by construction.",
      },
      {
        title: "Time anchored to the studio",
        detail:
          "Every date and clock read resolves in the studio's own timezone rather than the server's or the visitor's. A booking system that is right in one timezone and wrong in another is a booking system that is wrong.",
      },
      {
        title: "Access by role, not by session",
        detail:
          "Reaching the admin area requires an admin role, not merely a signed-in session, with row level security on the tables underneath rather than trust in the application layer alone.",
      },
    ],
    impact: [
      {
        label: "Booking without a conversation",
        detail:
          "A client picks a service, takes a slot and pays, at any hour, with nobody replying to anything. The studio stopped quoting in DMs and started taking bookings while it works.",
      },
      {
        label: "No-shows cost the client, not the studio",
        detail:
          "A deposit is taken before a slot is held, so an afternoon the studio turned other work away for is no longer given away for free.",
      },
      {
        label: "The calendar cannot be double sold",
        detail:
          "Slot exclusivity is enforced in the database, so two clients cannot be sold the same hour no matter how closely together they book.",
      },
      {
        label: "The owner runs her own business",
        detail:
          "Services, prices, imagery, categories, the calendar and time off are all hers to change, with a written handover guide rather than a dependency on a developer.",
      },
    ],
    lessons: [
      "A check before a write is not a constraint. If two requests running at the same time can both pass it, the rule belongs in the database, where it can be enforced rather than merely hoped for.",
      "Serverless has no memory between requests. Anything that has to count, hold or remember across calls needs to live somewhere state actually persists, or it is a safeguard that quietly does nothing.",
      "Scheduled jobs are best effort. Assume a run will be late, skipped, or overlapping with another, and write handlers that catch up, claim their work and can run twice without harm.",
      "Shipping in weeks and hardening in months turned out to be the right order. Real bookings surfaced the problems worth fixing, and none of them were the ones I would have guessed at up front.",
    ],
  },

  {
    slug: "cutiez-couture",
    name: "Cutiez Couture",
    category: "Fashion E-Commerce",
    client: "Cutiez Couture",
    timeline: "December 2025, launched January 2026",
    liveUrl: "https://www.cutiezcouture.com.ng",
    summary:
      "A custom unisex fashion brand selling from Instagram and TikTok, given a landing page that converts social traffic and a shop that takes the order without a DM.",
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
      "The brand's demand was already there. Instagram and TikTok were producing leads steadily. Converting them was the bottleneck. Every single order ran through a WhatsApp conversation: what sizes exist, what it costs, what is in stock, how to pay.",
      "That does not scale, and it caps the business at the number of messages one person can answer in a day. Interest arriving overnight or during a shoot simply waited.",
      "Custom sizing made it harder still. Cutiez sells made-to-fit unisex pieces, so \"what size are you?\" is a real conversation rather than a dropdown. That is exactly why it had stayed a manual process.",
    ],
    goal: [
      "Give social traffic somewhere to land that sells the brand, rather than dropping a shop link into a bio and hoping.",
      "Let a customer choose a size, see a price and place an order without anyone answering a message.",
      "Keep custom sizing available, since it is the brand's differentiator, without forcing every order back into a DM.",
      "Be findable outside social, since the brand had no presence in search at all.",
    ],
    roleDetail: [
      "Designed and built both properties: the marketing landing page at the brand's own domain, and the storefront it feeds.",
      "The split is deliberate. The landing page exists to convert social traffic through story, proof, best sellers and a single obvious call to action. The shop exists to take the order. Keeping them separate means the pitch can change as fast as the brand's campaigns do, without touching the store.",
      "Also handled deployment for both, and set up the Google Business Profile that gives the brand a presence in search alongside the social channels.",
    ],
    solution: [
      "The landing page opens on the brand's positioning as custom unisex fashion, \"Redefining Decency in Fashion\", then runs the story, the four things that make the label different, and a row of best sellers with prices. Every route through it ends at the same place: shop your style.",
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
          "A dedicated route for made-to-measure orders, so the brand's differentiator survives the automation.",
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
        caption: "Landing page, built to convert Instagram and TikTok traffic",
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
        caption: "Product page, with sizes, size guide and a custom-size route",
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
