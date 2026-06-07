"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Rocket, Crown } from "lucide-react";

const TIERS = [
  {
    name: "AI Code Baseline Audit",
    tier: "Basic",
    icon: Zap,
    deliverable:
      "Isolation and rapid troubleshooting of live compilation loops, hydration failures, layout shifts, and exposed API keys.",
    features: [
      "Full error trace & diagnostic report",
      "Hydration error resolution",
      "Build failure isolation",
      "API key exposure audit",
      "Performance bottleneck mapping",
      "Written remediation roadmap",
    ],
    cta: "Book Code Audit",
    accent: "matrix-green",
    popular: false,
  },
  {
    name: "Core App Migration",
    tier: "Standard",
    icon: Rocket,
    deliverable:
      "Full structural migration of up to 5 prototype pages into an organized, type-safe Next.js App Router and responsive Tailwind CSS codebase.",
    features: [
      "Everything in Basic, plus:",
      "Up to 5 pages migrated to App Router",
      "Full TypeScript type safety",
      "Tailwind CSS responsive refactor",
      "Zustand state management setup",
      "Component architecture optimization",
      "Vercel deployment configuration",
    ],
    cta: "Initialize Application Migration",
    accent: "aquamarine",
    popular: true,
  },
  {
    name: "Full-Stack SaaS Structural Shift",
    tier: "Premium",
    icon: Crown,
    deliverable:
      "Complete transformation of an AI script into a market-ready SaaS: Next.js frontend, database systems (Supabase/PostgreSQL), secure user authentication, and Stripe payment gateways.",
    features: [
      "Everything in Standard, plus:",
      "Complete SaaS architecture build",
      "Supabase/PostgreSQL database design",
      "Secure auth system (Clerk/Auth.js)",
      "Stripe payment integration",
      "Role-based access control",
      "Production optimization & monitoring",
      "Full documentation & handover",
    ],
    cta: "Deploy Production SaaS",
    accent: "matrix-green",
    popular: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 lg:px-8 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      {/* Background glow for popular tier */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix-green/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Transparent Checkout Portals
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Three clear packages,{" "}
            <span className="text-gradient-accent">zero friction</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Choose your tier. Every package routes directly to our secure Fiverr
            checkout for instant engagement.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 lg:grid-cols-3 items-start"
        >
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const isCyan = tier.accent === "aquamarine";
            return (
              <motion.div
                key={tier.tier}
                variants={cardVariants}
                className={`relative rounded-2xl transition-transform duration-300 hover:scale-[1.015] ${
                  tier.popular
                    ? "glass-panel-strong border border-matrix-green/30 lg:-mt-4 lg:mb-[-16px]"
                    : "glass-panel glow-border"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-matrix-green px-4 py-1.5 font-mono text-[11px] font-bold uppercase tracking-wider text-black">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-7">
                  {/* Icon + Tier */}
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        tier.popular
                          ? "border-matrix-green/30 bg-matrix-green/15"
                          : isCyan
                          ? "border-aquamarine/20 bg-aquamarine/10"
                          : "border-matrix-green/20 bg-matrix-green/10"
                      }`}
                    >
                      <Icon
                        className={`h-5 w-5 ${
                          tier.popular
                            ? "text-matrix-green"
                            : isCyan
                            ? "text-aquamarine"
                            : "text-matrix-green"
                        }`}
                      />
                    </div>
                    <div>
                      <span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-text-muted/60">
                        {tier.tier} Tier
                      </span>
                      <h3 className="text-base font-bold text-white">
                        {tier.name}
                      </h3>
                    </div>
                  </div>

                  {/* Deliverable */}
                  <p className="mb-6 text-sm leading-relaxed text-text-muted">
                    {tier.deliverable}
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px bg-gradient-to-r from-transparent via-subtle/60 to-transparent" />

                  {/* Features */}
                  <ul className="mb-8 space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                            tier.popular
                              ? "bg-matrix-green/15"
                              : isCyan
                              ? "bg-aquamarine/10"
                              : "bg-matrix-green/10"
                          }`}
                        >
                          <Check
                            className={`h-3 w-3 ${
                              tier.popular
                                ? "text-matrix-green"
                                : isCyan
                                ? "text-aquamarine"
                                : "text-matrix-green"
                            }`}
                          />
                        </div>
                        <span className="text-sm text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="https://www.fiverr.com/foxlancerr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-300 ${
                      tier.popular
                        ? "bg-matrix-green text-white hover:bg-matrix-green-light hover:text-black shadow-[0_0_20px_rgba(225,29,72,0.35)] hover:shadow-[0_0_40px_rgba(225,29,72,0.55)]"
                        : "border border-subtle bg-surface/40 text-white backdrop-blur-md hover:border-matrix-green/40 hover:bg-surface/60"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}