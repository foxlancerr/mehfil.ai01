# mehfil.DEV — Architecture & Dependency Map

## File Structure

```
agency/
├── app/
│   ├── favicon.ico
│   ├── globals.css            ← Tailwind v4 entry: @import "tailwindcss" + @config
│   ├── layout.tsx             ← Root layout, full SEO metadata, 5× JSON-LD schemas, dark theme
│   ├── sitemap.ts             ← XML sitemap (Next.js MetadataRoute)
│   ├── robots.ts              ← robots.txt (Next.js MetadataRoute)
│   ├── manifest.ts            ← Web app manifest (PWA metadata)
│   ├── opengraph-image.tsx    ← Auto-generated OG image via next/og ImageResponse
│   ├── page.tsx               ← Single page composition (15 sections)
│   └── blog/
│       ├── layout.tsx         ← Blog shell: AnimatedGrid, CursorGlow, SmoothScroll, Navbar, Footer
│       ├── page.tsx           ← Blog index with category filter
│       └── [slug]/page.tsx    ← Article page with JSON-LD
├── components/
│   ├── animated-grid.tsx    ← Fixed background: drifting grid + corner glows
│   ├── about.tsx            ← #about: bio, metric cards, tech stack
│   ├── case-studies.tsx     ← #case-studies: 5 real projects with live links
│   ├── contact.tsx          ← #contact: CTA section with 4 contact options + urgency line
│   ├── cursor-glow.tsx      ← Mouse-following radial glow (desktop only)
│   ├── faq.tsx              ← #faq: Radix Accordion with 5 questions
│   ├── footer.tsx           ← 4-column footer (mehfil branding)
│   ├── hero.tsx             ← Full-viewport hero: badge, headline, dual CTAs, trust bar
│   ├── navbar.tsx           ← Fixed navbar: logo, anchors, mobile menu (Zustand)
│   ├── offers.tsx           ← #offers: June promo — 2 featured + 4 standard offer cards (bento)
│   ├── pricing.tsx          ← #pricing: 3 tiers (Starter/Growth/Scale) with PKR+USD prices
│   ├── service-pillars.tsx  ← #services: 8 numbered service cards
│   ├── stats-bar.tsx        ← Credibility stats strip (10+ projects, 5★, 4th/600, 5+ countries)
│   ├── testimonials.tsx     ← #testimonials: 3 client quotes
│   ├── chatbot.tsx          ← Floating chatbot widget (FAB + animated chat window, static responses)
│   ├── blog/                ← Blog UI components (cards, TOC, diagnostic ticket, FAQ accordion)
│   └── value-anchor.tsx     ← 3 value prop cards: strategy, one-team, conversion
├── constants/
│   └── chatbot-config.ts    ← Static chatbot responses, quick replies, bot config (swap for live API later)
├── lib/
│   └── utils.ts             ← cn() = clsx + tailwind-merge
├── memory/                  ← Cursor AI context files (this folder)
│   ├── architecture.md
│   ├── design-tokens.md
│   └── project-brief.md
├── store/
│   └── use-store.ts         ← Zustand: mobileMenuOpen, activeSection, cursorPosition
├── .cursor/rules/           ← Cursor AI persistent rules
│   ├── project.mdc          ← Always apply: stack overview
│   ├── tailwind-v4.mdc      ← Tailwind v4 rules
│   ├── nextjs-patterns.mdc  ← Next.js 16 + React 19 patterns
│   ├── design-system.mdc    ← Design tokens + component patterns
│   ├── design-reference.mdc ← mehfil AI UX/layout reference
│   ├── self-improve.mdc     ← Token efficiency + memory hygiene
│   └── memory.mdc           ← When/how to read memory/ files
├── AGENTS.md                ← Next.js 16 breaking changes warning
├── tailwind.config.ts       ← Custom colors, fonts, animations (loaded via @config)
├── postcss.config.mjs       ← @tailwindcss/postcss only (no autoprefixer in v4)
├── next.config.ts
└── tsconfig.json
```

## Dependency Map

### Runtime

| Package | Version | Used In |
|---------|---------|---------|
| `next` | 16.2.7 | All |
| `react` / `react-dom` | 19.2.4 | All |
| `framer-motion` | ^11.15.0 | Homepage + blog components (scroll animations) |
| `@radix-ui/react-accordion` | ^1.2.0 | `faq.tsx`, `article-faq.tsx` |
| `lenis` | ^1.3.23 | `smooth-scroll.tsx`, `app/blog/layout.tsx` |
| `@radix-ui/react-slot` | ^1.1.0 | Installed, currently unused |
| `lucide-react` | ^0.468.0 | `navbar`, `hero`, `value-anchor`, `pricing`, `footer` |
| `zustand` | ^5.0.0 | `navbar.tsx`, `cursor-glow.tsx` |
| `react-markdown` | latest | `components/blog/article-body.tsx` |
| `remark-gfm` | latest | GFM tables/task lists in blog markdown |
| `clsx` | ^2.1.0 | `lib/utils.ts` |
| `tailwind-merge` | latest | `lib/utils.ts` |
| `axios` | ^1.7.0 | Installed, currently unused |

### Dev

| Package | Version | Purpose |
|---------|---------|---------|
| `tailwindcss` | ^4 | CSS framework |
| `@tailwindcss/postcss` | ^4 | PostCSS integration (replaces `tailwindcss` postcss plugin) |
| `typescript` | ^5 | Type safety |
| `eslint` + `eslint-config-next` | ^9 / 16.2.7 | Linting |

### Removed / Not Used

- `autoprefixer` — v4 handles vendor prefixes natively
- `tailwindcss-animate` — not used in codebase; v4 incompatible

## State Management

Zustand store (`store/use-store.ts`):

| State | Type | Used by |
|-------|------|---------|
| `mobileMenuOpen` | `boolean` | `navbar.tsx` |
| `setMobileMenuOpen` | `(v: boolean) => void` | `navbar.tsx` |
| `activeSection` | `string` | Defined but unused |
| `cursorPosition` | `{x, y}` | `cursor-glow.tsx` |

## Known Issues / Tech Debt

- `activeSection` in store is set but never read
- `axios` and `@radix-ui/react-slot` are installed but unused (safe to remove)
- Footer links to `#faq` but `faq.tsx` may be missing `id="faq"` attribute — verify
- No error boundary in `app/page.tsx`
- No `loading.tsx` or `error.tsx` in `app/`
