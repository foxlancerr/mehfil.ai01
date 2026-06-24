"use client";

import { motion, useReducedMotion } from "framer-motion";

export function BlogHero() {
  const reduceMotion = useReducedMotion();

  return (
    <header className="relative overflow-hidden border-b border-subtle/40 px-6 py-24 sm:py-32 lg:px-12">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-50" />
      <div
        aria-hidden
        className="ghost-text pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 text-[clamp(80px,20vw,200px)]"
      >
        NOTES
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto max-w-[1100px]"
      >
        <p className="section-label">Field Notes</p>
        <h1 className="mt-6 max-w-3xl text-[clamp(32px,5vw,56px)] font-black leading-[1.05] tracking-tight text-white">
          What actually breaks, what it actually costs, and what we&apos;d tell a{" "}
          <span className="text-gradient-hero">friend.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted">
          No &quot;Top 10 Tips&quot; filler. These are write-ups from real projects —
          rescues, pricing breakdowns, and the questions clients ask before they hire us.
        </p>
      </motion.div>
    </header>
  );
}
