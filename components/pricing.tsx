"use client";

import { motion } from "framer-motion";
import { Check, Minus, ArrowRight, Zap, Rocket, Crown } from "lucide-react";

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    price: "$90",
    priceNote: "from",
    pricePKR: "from ₨25,000",
    bestFor: "Landing pages, small sites",
    delivery: "3-day delivery",
    cta: "Start My Project",
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    icon: Rocket,
    price: "$270",
    priceNote: "from",
    pricePKR: "from ₨75,000",
    bestFor: "Full websites, SaaS MVPs",
    delivery: "7–14 day delivery",
    cta: "Let's Talk Growth",
    featured: true,
  },
  {
    id: "scale",
    name: "Scale",
    icon: Crown,
    price: "Custom",
    priceNote: "quote",
    pricePKR: "Book a Call",
    bestFor: "SaaS, Web3, AI systems",
    delivery: "Scoped per project",
    cta: "Book a Free Call",
    featured: false,
  },
];

const FEATURES: { label: string; starter: boolean | string; growth: boolean | string; scale: boolean | string }[] = [
  { label: "Single-page or landing page",          starter: true,    growth: true,    scale: true    },
  { label: "Multi-page website or web app",         starter: false,   growth: true,    scale: true    },
  { label: "Mobile-responsive & SEO-ready",         starter: true,    growth: true,    scale: true    },
  { label: "Backend integration (DB, auth, pay)",   starter: false,   growth: true,    scale: true    },
  { label: "Digital marketing setup",               starter: false,   growth: true,    scale: true    },
  { label: "SEO foundation + analytics",            starter: false,   growth: true,    scale: true    },
  { label: "AI chatbot / automation workflow",      starter: false,   growth: false,   scale: true    },
  { label: "Web3 / blockchain integration",         starter: false,   growth: false,   scale: true    },
  { label: "CI/CD pipelines + cloud deployment",    starter: false,   growth: false,   scale: true    },
  { label: "Ongoing support & retainer",            starter: false,   growth: false,   scale: true    },
];

function CheckCell({ has, featured }: { has: boolean | string; featured: boolean }) {
  if (has === true) {
    return (
      <div className="flex items-center justify-center">
        <Check
          className={`h-4 w-4 ${featured ? "text-crimson" : "text-text-muted/60"}`}
          strokeWidth={2.5}
        />
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <Minus className="h-4 w-4 text-subtle/60" strokeWidth={1.5} />
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="coord-label mb-6">§ 05 / TRANSPARENT PRICING</p>
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-[44px] lg:leading-[1.05]">
              No Hidden Fees.<br />No Surprises.
            </h2>
            <p className="text-sm leading-relaxed text-text-muted lg:max-w-sm lg:ml-auto">
              Pick your tier and get started. Every package links to our secure Fiverr
              checkout. Scale as your business grows — not when your agency upsells you.
            </p>
          </div>
        </motion.div>

        {/* ── Desktop comparison table ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="hidden overflow-x-auto md:block"
        >
          <div className="min-w-[680px]">
            {/* Tier header row */}
            <div className="grid grid-cols-[1fr_160px_160px_160px] border border-subtle/40 bg-surface/20">
              <div className="border-r border-subtle/30 p-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-text-muted/35">
                  Features / Plans
                </span>
              </div>
              {TIERS.map((tier) => {
                const Icon = tier.icon;
                return (
                  <div
                    key={tier.id}
                    className={`relative border-r border-subtle/30 p-5 text-center last:border-r-0 ${
                      tier.featured ? "bg-crimson/[0.06]" : ""
                    }`}
                  >
                    {tier.featured && (
                      <div className="absolute -top-px left-0 right-0 h-px bg-crimson/50" />
                    )}
                    <div className="mb-2 flex items-center justify-center">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                          tier.featured
                            ? "border-crimson/30 bg-crimson/15"
                            : "border-subtle/50 bg-surface/60"
                        }`}
                      >
                        <Icon className={`h-4 w-4 ${tier.featured ? "text-crimson" : "text-text-muted/50"}`} />
                      </div>
                    </div>
                    {tier.featured && (
                      <span className="mb-1.5 block font-mono text-[9px] uppercase tracking-widest text-crimson">
                        Most Popular
                      </span>
                    )}
                    <p className={`font-mono text-[10px] uppercase tracking-widest ${tier.featured ? "text-crimson/70" : "text-text-muted/40"}`}>
                      {tier.name}
                    </p>
                    <p className="mt-1 text-2xl font-black text-white">{tier.price}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted/35">{tier.priceNote}</p>
                    <p className="mt-1 font-mono text-[9px] text-text-muted/30">{tier.pricePKR}</p>
                  </div>
                );
              })}
            </div>

            {/* Feature rows */}
            {FEATURES.map((feature, i) => (
              <div
                key={feature.label}
                className="grid grid-cols-[1fr_160px_160px_160px] border-b border-l border-r border-subtle/30 transition-colors duration-200 hover:bg-surface/15"
              >
                <div className="border-r border-subtle/25 px-6 py-3.5">
                  <span className="text-sm text-text-muted">{feature.label}</span>
                </div>
                {(["starter", "growth", "scale"] as const).map((key) => (
                  <div
                    key={key}
                    className={`border-r border-subtle/25 py-3.5 last:border-r-0 ${
                      key === "growth" ? "bg-crimson/[0.025]" : ""
                    }`}
                  >
                    <CheckCell has={feature[key]} featured={key === "growth"} />
                  </div>
                ))}
              </div>
            ))}

            {/* CTA row */}
            <div className="grid grid-cols-[1fr_160px_160px_160px] border-b border-l border-r border-subtle/30 bg-surface/10">
              <div className="border-r border-subtle/25 px-6 py-5">
                <p className="font-mono text-[10px] uppercase tracking-widest text-text-muted/30">
                  Ready to start?
                </p>
              </div>
              {TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`border-r border-subtle/25 p-4 last:border-r-0 ${
                    tier.featured ? "bg-crimson/[0.06]" : ""
                  }`}
                >
                  <a
                    href="https://www.fiverr.com/foxlancerr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex w-full items-center justify-center gap-1.5 rounded px-3 py-2.5 text-xs font-semibold transition-all duration-300 ${
                      tier.featured
                        ? "bg-crimson text-white hover:bg-crimson-light shadow-[0_0_20px_rgba(225,29,72,0.3)]"
                        : "border border-subtle/60 bg-surface/40 text-text-muted hover:border-crimson/30 hover:text-white"
                    }`}
                  >
                    {tier.cta}
                    <ArrowRight className="h-3 w-3" />
                  </a>
                  <p className="mt-2 text-center font-mono text-[9px] uppercase tracking-widest text-text-muted/30">
                    {tier.delivery}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Mobile: stacked cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-4 md:hidden"
        >
          {TIERS.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative overflow-hidden border p-6 ${
                  tier.featured
                    ? "bracket-frame border-crimson/30 bg-crimson/[0.04]"
                    : "border-subtle/40 bg-surface/30"
                }`}
              >
                {tier.featured && (
                  <div className="absolute left-0 top-0 right-0 h-px bg-crimson/50" />
                )}

                {/* Header */}
                <div className="mb-5 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                        tier.featured ? "border-crimson/30 bg-crimson/15" : "border-subtle/50 bg-surface/60"
                      }`}
                    >
                      <Icon className={`h-5 w-5 ${tier.featured ? "text-crimson" : "text-text-muted/60"}`} />
                    </div>
                    <div>
                      <p className={`font-mono text-[10px] uppercase tracking-widest ${tier.featured ? "text-crimson" : "text-text-muted/40"}`}>
                        {tier.featured ? "Most Popular" : tier.name}
                      </p>
                      {tier.featured && (
                        <p className="text-sm font-bold text-white">{tier.name}</p>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-black text-white">{tier.price}</p>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-text-muted/40">{tier.priceNote}</p>
                  </div>
                </div>

                <p className="mb-4 font-mono text-[11px] text-text-muted/50">{tier.bestFor}</p>

                {/* Features */}
                <ul className="mb-5 space-y-2">
                  {FEATURES.filter((f) => f[tier.id as "starter" | "growth" | "scale"]).map((f) => (
                    <li key={f.label} className="flex items-center gap-2.5">
                      <Check className={`h-3.5 w-3.5 shrink-0 ${tier.featured ? "text-crimson" : "text-text-muted/50"}`} strokeWidth={2.5} />
                      <span className="text-sm text-text-muted">{f.label}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://www.fiverr.com/foxlancerr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex w-full items-center justify-center gap-2 rounded px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    tier.featured
                      ? "bg-crimson text-white hover:bg-crimson-light shadow-[0_0_20px_rgba(225,29,72,0.3)]"
                      : "border border-subtle/60 bg-surface/40 text-white hover:border-crimson/30"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center font-mono text-xs text-text-muted/35"
        >
          All packages link to Fiverr for secure checkout · Need something custom?{" "}
          <a href="#contact" className="text-crimson/55 transition-colors hover:text-crimson">
            Contact us directly →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
