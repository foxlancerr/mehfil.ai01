# Mehfil.ai.DEV — Design Tokens & Component Classes

## Color Palette

> Theme: **Crimson / rose-red on pure black** (Mehfil.ai AI aesthetic — `https://Mehfil.aiai.framer.website`).
> NOTE: the legacy `matrix-green*` / `aquamarine` / `text-neon` token keys are retained as
> **aliases that now resolve to crimson values**, so existing components reskin without renaming.
> Prefer the new `crimson*` / `rose` tokens in new code.

| Token | Hex | Tailwind Class | Usage |
|-------|-----|---------------|-------|
| `base` | `#000000` | `bg-base` | Page background |
| `surface` | `#0C0C0F` | `bg-surface` | Card/panel fill (neutral near-black) |
| `subtle` | `#232328` | `border-subtle` | Borders, dividers |
| `crimson` | `#E11D48` | `text-crimson` / `bg-crimson` | Primary accent, CTAs |
| `crimson-light` | `#FB7185` | `text-crimson-light` | Hover states, neon labels |
| `crimson-muted` | `#4C0519` | `bg-crimson-muted` | Muted fills |
| `rose` | `#F43F5E` | `text-rose` | Secondary accent |
| `error-red` | `#EF4444` | `bg-error-red` | Browser dots (decoration) |
| `text-main` | `#FFFFFF` | `text-text-main` | Primary text |
| `text-muted` | `#9CA3AF` | `text-text-muted` | Secondary/body text |
| `text-neon` | `#FB7185` | `text-text-neon` | Labels, badges |

### Legacy aliases (resolve to crimson — do not use in new code)

| Alias | Now resolves to |
|-------|-----------------|
| `matrix-green` | `#E11D48` (crimson) |
| `matrix-green-light` | `#FB7185` (crimson-light) |
| `matrix-green-muted` | `#4C0519` (crimson-muted) |
| `aquamarine` | `#9F1239` (deep rose) |

## Typography

| Use | Font | Tailwind |
|-----|------|---------|
| Headings | Inter | `font-sans font-bold` or `font-extrabold` |
| Body | Inter | `font-sans font-normal` |
| Labels/badges | JetBrains Mono | `font-mono text-xs uppercase tracking-widest` |
| Code | JetBrains Mono | `font-mono text-matrix-green` |

## Custom Animations

| Name | Duration | Use |
|------|----------|-----|
| `pulse-glow` | 2s infinite | Primary CTA glow |
| `border-trace` | 3s linear | Animated gradient borders |
| `float` | 6s ease-in-out | Floating elements |
| `grid-drift` | 20s linear | AnimatedGrid background |
| `shimmer` | 2.5s | Loading shimmer |
| `fade-up` | 0.6s forwards | One-shot entrance |
| `status-ping` | 1.5s cubic-bezier | Status dot ping |

## Background Gradients (backgroundImage tokens)

| Token | Use |
|-------|-----|
| `hero-aura` | Small radial glow centered |
| `hero-aura-lg` | Wide ellipse aura at top |
| `card-glow` | Crimson→rose horizontal gradient |
| `text-gradient` | White→soft-rose→crimson (for text-clip) |
| `text-gradient-green` | Rose→crimson (for text-clip; legacy name) |

## CSS Component Classes (globals.css)

### Panels
- `.glass-panel` — standard frosted card (`rgba(18,22,26,0.6)`, `blur(16px)`)
- `.glass-panel-strong` — featured/hero card (`rgba(18,22,26,0.85)`, `blur(24px)`)

### Borders & Effects
- `.glow-border` — green→cyan gradient border that appears on hover
- `.dot-grid-bg` — radial dot pattern background
- `.line-grid-bg` — horizontal+vertical line grid background

### Text
- `.text-gradient-hero` — white→mint→cyan gradient clipped to text
- `.text-gradient-accent` — green→cyan gradient clipped to text

### Buttons
- `.btn-primary` — green filled, glow shadow, black text
- `.btn-glass` — glass dark, border, white text

### Section Labels
- `.section-label` — mono pill badge, `text-text-neon`, `bg-surface/50`, `border-subtle`

### Browser Mockups
- `.browser-frame` — dark container with rounded corners
- `.browser-chrome` — top bar with colored dots
- `.browser-dot` — 10px circle (red=`#EF4444`, yellow=`#F59E0B`, green=`#10B981`)

### Animation Delays
- `.stagger-1` through `.stagger-5` — 0.1s to 0.5s `animation-delay`

## Spacing Scale

| Context | Value |
|---------|-------|
| Section vertical | `py-24 sm:py-32` |
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Card padding standard | `p-6` |
| Card padding featured | `p-8` |
| Grid gap standard | `gap-6` |
| Grid gap featured | `gap-8` |
