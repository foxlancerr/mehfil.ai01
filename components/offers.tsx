"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Data ────────────────────────────────────────────────────────────────────

type Bullet = string;

type OfferCard = {
  id: string;
  badge: string;
  badgeVariant: "crimson" | "crimson-muted" | "neutral";
  featured?: boolean;
  title: string;
  desc: string;
  bullets: Bullet[];
  price?: string;
  priceWas?: string;
  urgency?: string;
  cta: string;
  href: string;
  external?: boolean;
};

const OFFERS: OfferCard[] = [
  {
    id: "audit",
    badge: "Free — worth $50",
    badgeVariant: "crimson-muted",
    title: "Free Website & Ads Audit",
    desc: "We review your site and ad account, find what's costing you clients, and hand you a written plan. No pitch. No strings.",
    bullets: [
      "Website speed & Core Web Vitals check",
      "SEO gap analysis vs. top 3 competitors",
      "Ads account review (if you're running any)",
      "Actionable PDF report — yours to keep",
    ],
    urgency: "Only 5 free audits / month",
    cta: "Claim free audit",
    href: "#contact",
  },
  {
    id: "bundle",
    badge: "Most popular",
    badgeVariant: "crimson",
    featured: true,
    title: "Website + First Month Ads — Bundled",
    desc: "Buy the website, get your first month of ad management free. One team, one brief, zero coordination overhead.",
    bullets: [
      "Custom 5-page Next.js website",
      "Ad creatives & copy written for you",
      "Meta / Google campaign setup & launch",
      "SEO foundations baked in on day one",
    ],
    price: "$310",
    priceWas: "$420",
    cta: "Get the bundle",
    href: "https://www.fiverr.com/foxlancerr",
    external: true,
  },
  {
    id: "starter",
    badge: "Live in 3 days",
    badgeVariant: "crimson-muted",
    title: "Starter Landing Page",
    desc: "A clean, fast, mobile-first landing page that actually converts — for the price of a business dinner.",
    bullets: [
      "Single-page Next.js build",
      "Contact form + WhatsApp button",
      "Mobile-first, 95+ Lighthouse score",
      "Deployed & live within 72 hours",
    ],
    price: "$55",
    priceWas: "$90",
    cta: "Start for $55",
    href: "https://www.fiverr.com/foxlancerr",
    external: true,
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

const BADGE_STYLES: Record<OfferCard["badgeVariant"], string> = {
  crimson:
    "border-crimson/40 bg-crimson/[0.12] text-crimson-light",
  "crimson-muted":
    "border-crimson/20 bg-crimson-muted/40 text-crimson-light/80",
  neutral:
    "border-white/10 bg-white/[0.04] text-white/60",
};

function CardBadge({ label, variant }: { label: string; variant: OfferCard["badgeVariant"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest",
        BADGE_STYLES[variant]
      )}
    >
      {label}
    </span>
  );
}

function BulletList({ items, featured }: { items: Bullet[]; featured?: boolean }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span
            className={cn(
              "mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
              featured ? "bg-crimson/15" : "bg-white/[0.06]"
            )}
          >
            <Check
              className={cn(
                "h-2.5 w-2.5",
                featured ? "text-crimson-light" : "text-white/50"
              )}
              strokeWidth={2.5}
            />
          </span>
          <span className="text-sm leading-snug text-[#888]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PriceRow({ price, priceWas }: { price: string; priceWas?: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-[22px] font-semibold text-white">{price}</span>
      {priceWas && (
        <span className="font-mono text-sm text-white/25 line-through">{priceWas}</span>
      )}
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────

const sectionVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const cardStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Offers() {
  return (
    <section id="offers" className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      {/* top rule */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-[1100px]">
        <div className="lg:grid lg:grid-cols-[40%_60%] lg:gap-20">

          {/* ── Left editorial column ── */}
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-28 lg:self-start pb-12 lg:pb-0"
          >
            {/* Eyebrow */}
            <p className="mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/30">
              // Current Offers
            </p>

            {/* Headline */}
            <h2
              className="mb-5 text-[42px] font-medium leading-[1.08] tracking-[-0.03em] text-white md:text-[52px]"
              style={{ letterSpacing: "-0.03em" }}
            >
              Deals that make
              <br />
              the decision{" "}
              <span
                className="font-medium"
                style={{
                  background: "linear-gradient(135deg, #ffffff 20%, #fb7185 70%, #e11d48 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                easy.
              </span>
            </h2>

            {/* Subtext */}
            <p className="mb-10 max-w-[380px] text-[16px] leading-relaxed text-white/40">
              Every offer below removes a specific objection. Pick the one that fits where you are
              right now.
            </p>

            {/* Footnote */}
            <p className="max-w-[340px] font-mono text-[11px] leading-relaxed text-white/20">
              No contracts. No lock-in.
              <br />
              Scope + price agreed in writing before we start.
            </p>
          </motion.div>

          {/* ── Right cards column ── */}
          <motion.div
            variants={cardStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
          >
            {OFFERS.map((offer) => (
              <motion.div
                key={offer.id}
                variants={cardVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                className={cn(
                  "group relative overflow-hidden rounded-xl border p-6 transition-colors duration-300",
                  offer.featured
                    ? "border-[#1a1a1a] bg-[#111] hover:border-crimson/40"
                    : "border-[#1a1a1a] bg-[#111] hover:border-crimson/30"
                )}
              >
                {/* Crimson top accent — featured only */}
                {offer.featured && (
                  <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-crimson via-rose to-crimson-light" />
                )}

                {/* Card header */}
                <div className="mb-4 flex flex-wrap items-center gap-2.5">
                  <CardBadge label={offer.badge} variant={offer.badgeVariant} />
                  {offer.urgency && (
                    <span className="inline-flex items-center rounded-full border border-crimson/20 bg-crimson-muted/50 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-widest text-crimson-light/80">
                      {offer.urgency}
                    </span>
                  )}
                </div>

                {/* Title + desc */}
                <h3 className="mb-1.5 text-[18px] font-medium leading-snug text-white">
                  {offer.title}
                </h3>
                <p className="mb-5 text-[14px] leading-relaxed text-[#888]">{offer.desc}</p>

                {/* Bullets */}
                <div className="mb-6">
                  <BulletList items={offer.bullets} featured={offer.featured} />
                </div>

                {/* Price + CTA row */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    {offer.price ? (
                      <PriceRow price={offer.price} priceWas={offer.priceWas} />
                    ) : (
                      <span className="font-mono text-[22px] font-semibold text-white">Free</span>
                    )}
                  </div>

                  <a
                    href={offer.href}
                    {...(offer.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={cn(
                      "group/btn inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200",
                      offer.featured
                        ? "bg-crimson text-white hover:bg-crimson-light hover:text-black shadow-[0_0_18px_rgba(225,29,72,0.3)] hover:shadow-[0_0_32px_rgba(225,29,72,0.55)]"
                        : "border border-white/10 bg-white/[0.04] text-white/80 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
                    )}
                  >
                    {offer.cta}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Bottom footnote */}
            <p className="mt-1 px-1 font-mono text-[11px] text-white/20">
              No contracts. No lock-in. Scope + price in writing before we start.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
