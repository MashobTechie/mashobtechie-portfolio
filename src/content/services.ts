export type Service = {
  slug: string;
  title: string;
  summary: string;
  /** Concrete deliverables — what the client actually receives. */
  includes: string[];
  icon: "globe" | "cart" | "layers" | "grid" | "wrench";
};

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    summary:
      "Modern websites designed to turn visitors into customers — fast, findable, and built to convert rather than just to look good.",
    includes: [
      "Conversion-focused design",
      "Content management you control",
      "Search and performance groundwork",
      "Analytics and lead capture",
    ],
    icon: "globe",
  },
  {
    slug: "ecommerce",
    title: "E-Commerce",
    summary:
      "Online stores with real product management, working checkout and payment integrations that suit the market you sell in.",
    includes: [
      "Product and variant catalogue",
      "Checkout and payment integration",
      "Order and inventory management",
      "Admin back office",
    ],
    icon: "cart",
  },
  {
    slug: "saas-mvps",
    title: "SaaS & MVPs",
    summary:
      "Turn an idea into a functional product customers can actually use — scoped so you learn something real, quickly.",
    includes: [
      "Scope definition and product shaping",
      "Core workflows built properly",
      "Accounts, billing and permissions",
      "A foundation that survives version two",
    ],
    icon: "layers",
  },
  {
    slug: "web-applications",
    title: "Web Applications",
    summary:
      "Dashboards, portals, internal tools and custom business applications that fit how your team actually works.",
    includes: [
      "Custom workflows and data models",
      "Dashboards and reporting",
      "Role-based access",
      "Integrations with existing systems",
    ],
    icon: "grid",
  },
  {
    slug: "product-improvements",
    title: "Product Improvements",
    summary:
      "Fix, redesign, optimize and improve the website or application you already have — without starting over.",
    includes: [
      "Performance and reliability work",
      "Interface and conversion redesign",
      "Technical debt reduction",
      "New features on existing products",
    ],
    icon: "wrench",
  },
];
