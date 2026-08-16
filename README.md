# MashobTechie — Portfolio

Premium personal portfolio for a full-stack engineer and SaaS builder.
Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Design system

Tokens live in [`src/app/globals.css`](src/app/globals.css) under `@theme`.
Change them there and the whole site follows.

| Token | Value | Used for |
| --- | --- | --- |
| `canvas` | `#FAFAF7` | Page background |
| `surface` | `#FFFFFF` | Cards, alternating sections |
| `ink` | `#0B1F3A` | Primary text, the one dark section |
| `muted` | `#64748B` | Secondary text |
| `accent` | `#2563EB` | CTAs, links, active nav, small highlights |
| `line` | `#E5E7EB` | 1px borders |

Type is Geist (via the `geist` package) with a fluid `clamp()` scale — the
display sizes shrink on small screens rather than being squeezed.

**Rules the design holds to:** the site is light except for the single navy
CTA band; blue is an accent, never a background; radii are moderate (8–14px,
no pills); shadows are barely-there.

## Where the content lives

All copy and data is in [`src/content/`](src/content/) — no editing components
to change words.

| File | Contains |
| --- | --- |
| `site.ts` | Name, email, social links, nav |
| `projects.ts` | All four projects + full case-study content |
| `services.ts` | The five service cards |
| `process.ts` | The four process steps |
| `tech.ts` | Technology labels |
| `testimonials.ts` | Client quotes (currently empty by design) |

## Before launch

1. **Contact details** — `src/content/site.ts` ships with placeholders
   (`hello@mashobtechie.com`, `github.com/mashobtechie`, etc.). Replace them.
2. **Project screenshots** — see below.
3. **Inquiry delivery** — `src/app/api/inquiry/route.ts` validates submissions
   and logs them. Replace the body of `deliverInquiry()` with Resend, Supabase
   or a webhook. Everything else stays as-is.
4. **Domain** — set `site.url` for correct metadata, sitemap and robots.

## Adding project screenshots

Every image in `projects.ts` has an optional `src`. Where it's missing, a
designed placeholder frame renders instead of a broken image, so the layout is
complete either way.

To add one: drop the file in `public/work/`, then set the path.

```ts
cover: {
  src: "/work/respora-cover.png",   // ← add this line
  alt: "RespOra research dashboard shown on a laptop",
},
```

Recommended sizes: covers `1600×1000` (16:10), wide gallery `1600×900` (16:9),
half gallery `1200×900` (4:3).

## Testimonials

`src/content/testimonials.ts` is intentionally an empty array. The section
renders a considered empty state until real quotes exist, then switches to the
grid automatically. Add entries only once a client has actually given the quote
and agreed to the attribution — no placeholder names.

## Notes

- Case studies are statically generated from `projects.ts` via
  `generateStaticParams`, so adding a project creates its page automatically.
- `sitemap.ts` and `robots.ts` derive from the same content — nothing to
  maintain by hand.
- Scroll reveals and all transitions no-op under `prefers-reduced-motion`.
