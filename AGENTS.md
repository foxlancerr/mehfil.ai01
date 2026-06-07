<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:tailwind-v4-rules -->
# Tailwind CSS v4 — Not the Tailwind you know either

- Use `@import "tailwindcss"` in CSS — NOT `@tailwind base/components/utilities`
- Use `@config "./tailwind.config.ts"` to load the JS config file
- Do NOT add `autoprefixer` to PostCSS — v4 handles vendor prefixes natively
- Do NOT install `tailwindcss-animate` — not v4 compatible, not used in this project
- `tailwind-merge` is installed as a runtime dep — use `cn()` from `lib/utils.ts`
- Read `.cursor/rules/tailwind-v4.mdc` before touching any CSS or Tailwind config
<!-- END:tailwind-v4-rules -->

<!-- BEGIN:project-memory -->
# Project Memory

Read `memory/` folder before asking the user for context:
- `memory/project-brief.md` — brand, audience, CTAs
- `memory/design-tokens.md` — colors, fonts, CSS classes
- `memory/architecture.md` — file structure, components, deps
<!-- END:project-memory -->
