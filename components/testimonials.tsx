"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const TESTIMONIALS = [
  {
    quote:
      "Asim took my broken Bolt.new prototype and turned it into a production-ready SaaS in under a week. Clean Next.js architecture, Supabase integration, and Stripe billing — all working flawlessly on Vercel. Absolute legend.",
    author: "James Whitmore",
    role: "SaaS Founder",
    location: "United States",
    initials: "JW",
    service: "Full-Stack Dev",
    rating: 5,
  },
  {
    quote:
      "Our DeFi dashboard had broken wallet connections and failed RPC calls after every update. Mehfil fixed the entire codebase, added strict TypeScript across the board, and delivered clean Ethers.js integration. Trusted partner for any Web3 project.",
    author: "Lena Fischer",
    role: "Web3 Project Lead",
    location: "Germany",
    initials: "LF",
    service: "Web3 Dev",
    rating: 5,
  },
  {
    quote:
      "I was burning budget on ads with zero ROI. Mehfil audited my Meta campaigns, rebuilt the entire ad structure from scratch, and we hit 3.8x ROAS in the first month. I finally feel in control of my marketing spend.",
    author: "Ahmed Al-Rashidi",
    role: "E-Commerce Owner",
    location: "United Arab Emirates",
    initials: "AA",
    service: "Paid Ads",
    rating: 5,
  },
  {
    quote:
      "The AI chatbot they built now handles 80% of our customer queries automatically. Integrated with our CRM, trained on our product docs, deployed in days. Our support team is finally free to focus on complex cases only.",
    author: "Riya Sharma",
    role: "Product Manager",
    location: "India",
    initials: "RS",
    service: "AI Automation",
    rating: 5,
  },
  {
    quote:
      "Our site sat on page 5 for two years. Mehfil ran a full technical SEO audit, fixed all crawl errors, rebuilt the internal linking strategy, and rewrote our meta structure. We hit page 1 for our primary keyword in six weeks.",
    author: "David Okafor",
    role: "Marketing Director",
    location: "United Kingdom",
    initials: "DO",
    service: "SEO & Growth",
    rating: 5,
  },
  {
    quote:
      "Complete WooCommerce redesign — fast, mobile-first, and actually converting. Mehfil understood our business goals, not just the aesthetics. Revenue from the site tripled in the first quarter after launch. Couldn't recommend more.",
    author: "Sophie Martins",
    role: "Boutique Store Owner",
    location: "Canada",
    initials: "SM",
    service: "WordPress",
    rating: 5,
  },
];

const CARD_WIDTH_ACTIVE = 500;
const CARD_WIDTH_DEFAULT = 200;
const CARD_WIDTH_COMPRESSED = 175;

const StarIcon = () => (
  <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const QuoteIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 32 32">
    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
  </svg>
);

/* ─── Mobile card (always fully visible) ─── */
function MobileCard({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl border border-subtle/50 bg-surface/70 p-5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(225,29,72,0.07),transparent_70%)]" />

      {/* Top row */}
      <div className="mb-3 flex items-start justify-between gap-2">
        <QuoteIcon className="h-6 w-6 shrink-0 text-crimson/30" />
        {/* <span className="rounded-md border border-crimson/20 bg-crimson/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-crimson/70">
          {t.service}
        </span> */}
      </div>

      {/* Stars */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <span key={i} className="text-crimson">
            <StarIcon />
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="flex-1 text-sm leading-relaxed italic text-text-muted/90">
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author footer */}
      <div className="mt-4 flex items-center gap-3 border-t border-subtle/40 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-crimson/30 bg-crimson/10 text-[10px] font-bold text-crimson">
          {t.initials}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold leading-tight text-white">{t.author}</p>
          <p className="mt-0.5 font-mono text-[10px] text-text-muted/60">{t.role} · {t.location}</p>
        </div>
        {/* <div className="shrink-0 rounded-md border border-crimson/25 bg-crimson/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-crimson/80">
          ★ Verified
        </div> */}
      </div>
    </div>
  );
}

/* ─── Desktop accordion card ─── */
function DesktopCard({
  t,
  isActive,
  isCompressed,
  onMouseEnter,
  onMouseLeave,
}: {
  t: (typeof TESTIMONIALS)[number];
  isActive: boolean;
  isCompressed: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <motion.div
      animate={{
        width: isActive ? CARD_WIDTH_ACTIVE : isCompressed ? CARD_WIDTH_COMPRESSED : CARD_WIDTH_DEFAULT,
      }}
      transition={{ type: "spring", stiffness: 320, damping: 32 }}
      className={cn(
        "relative flex h-[280px] shrink-0 flex-col overflow-hidden rounded-2xl border p-6",
        "cursor-pointer select-none",
        isActive
          ? "z-10 border-crimson/50 bg-surface"
          : "border-subtle/50 bg-surface/70 hover:border-crimson/25"
      )}
      style={{
        boxShadow: isActive
          ? "0 0 50px rgba(225,29,72,0.15), 0 0 0 1px rgba(225,29,72,0.10)"
          : undefined,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Radial glow overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(225,29,72,0.14),transparent_70%)]"
          />
        )}
      </AnimatePresence>

      {/* Top row: quote mark + service badge */}
      <div className="mb-4 flex items-start justify-between gap-2">
        <QuoteIcon
          className={cn(
            "h-8 w-8 shrink-0 transition-colors duration-300",
            isActive ? "text-crimson/50" : "text-crimson/15"
          )}
        />
        {/* <AnimatePresence>
          {isActive && (
            <motion.span
              key="service"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 rounded-md border border-crimson/25 bg-crimson/10 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-crimson/80"
            >
              {t.service}
            </motion.span>
          )}
        </AnimatePresence> */}
      </div>

      {/* Stars — only when active */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mb-3 flex gap-0.5"
          >
            {Array.from({ length: t.rating }).map((_, i) => (
              <span key={i} className="text-crimson">
                <StarIcon />
              </span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote text */}
      <p
        className={cn(
          "flex-1 text-sm leading-relaxed italic transition-colors duration-300",
          isActive ? "text-white/90" : "text-text-muted/80"
        )}
      >
        &ldquo;{t.quote}&rdquo;
      </p>

      {/* Author footer */}
      <div
        className={cn(
          "mt-4 flex items-center gap-3 border-t pt-4 transition-colors duration-300",
          isActive ? "border-crimson/20" : "border-subtle/40"
        )}
      >
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-all duration-300",
            isActive
              ? "border-crimson/40 bg-crimson/15 text-crimson"
              : "border-subtle/60 bg-black/40 text-text-muted/60"
          )}
        >
          {t.initials}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className={cn(
              "truncate text-sm font-semibold leading-tight transition-colors duration-200",
              isActive ? "text-white" : "text-white/75"
            )}
          >
            {t.author}
          </p>
          <p
            className={cn(
              "mt-0.5 truncate font-mono text-[10px] text-text-muted/50 transition-opacity duration-200",
              isCompressed ? "opacity-0" : "opacity-100"
            )}
          >
            {t.role} · {t.location}
          </p>
        </div>

        {/* <AnimatePresence>
          {isActive && (
            <motion.div
              key="badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.08 }}
              className="shrink-0 rounded-md border border-crimson/25 bg-crimson/10 px-2 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-crimson/80"
            >
              ★ Verified
            </motion.div>
          )}
        </AnimatePresence> */}
      </div>
    </motion.div>
  );
}

/* ─── Section ─── */
export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-24 lg:px-12 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/4 blur-3xl" />

      {/* Blueprint grid */}
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />

      <div className="relative mx-auto max-w-[1100px]">
        {/* Giant ghost quote glyph */}
        <span
          aria-hidden
          className="ghost-text left-1/2 top-0 -translate-x-1/2 text-[180px] md:text-[280px]"
          style={{ lineHeight: 0.6 }}
        >
          &ldquo;
        </span>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-14 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{"//"}</span> What Clients Say
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Real Feedback.{" "}
            <span className="text-gradient-accent">Zero Filtering.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
            Verified 5-star reviews from clients across six countries. Hover any card on desktop to expand.
          </p>
        </motion.div>

        {/* ── Mobile grid (hidden on lg+) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden"
        >
          {TESTIMONIALS.map((t, i) => (
            <MobileCard key={i} t={t} />
          ))}
        </motion.div>

        {/* ── Desktop accordion strip (hidden below lg) ── */}
        <div className="relative hidden lg:block">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center gap-3 overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {TESTIMONIALS.map((t, index) => {
              const isActive = activeIndex === index;
              const isCompressed = activeIndex !== null && !isActive;
              return (
                <DesktopCard
                  key={index}
                  t={t}
                  isActive={isActive}
                  isCompressed={isCompressed}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
