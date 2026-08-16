export const techGroups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"],
  },
  {
    label: "Backend",
    items: ["Node.js", "PostgreSQL", "Supabase", "Prisma", "REST & APIs"],
  },
  {
    label: "Platform",
    items: ["Vercel", "Paystack", "Stripe", "Auth & permissions"],
  },
] as const;

export const allTech = techGroups.flatMap((group) => group.items);
