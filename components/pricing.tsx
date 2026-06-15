"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Zap, Rocket, Crown } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    tier: "Starter",
    icon: Zap,
    bestFor: "Landing pages, small sites, single features",
    price: "From $90",
    priceUSD: "",
    deliverable: "Single-page website or landing page — mobile-responsive, SEO-ready, and deployed live.",
    features: [
      "Single-page website or landing page",
      "Mobile-responsive, SEO-ready",
      "Deployed and live",
      "3-day delivery",
    ],
    cta: "Start My Project",
    accent: "matrix-green",
    popular: false,
  },
  {
    name: "Growth",
    tier: "Growth",
    icon: Rocket,
    bestFor: "Full websites, SaaS MVPs, ad campaigns",
    price: "From $270",
    priceUSD: "",
    deliverable: "Multi-page website or web app with backend, digital marketing setup, and SEO foundation.",
    features: [
      "Multi-page website or web app",
      "Backend integration (database, auth, payments)",
      "Digital marketing setup (Meta/Google Ads)",
      "SEO foundation + analytics",
      "7–14 day delivery",
    ],
    cta: "Let's Talk Growth",
    accent: "aquamarine",
    popular: true,
  },
  {
    name: "Scale",
    tier: "Scale",
    icon: Crown,
    bestFor: "Full-stack SaaS, Web3 apps, AI automation systems",
    price: "Custom Quote",
    priceUSD: "Book a Call",
    deliverable: "Everything in Growth, plus AI workflows, Web3 integration, CI/CD pipelines, and ongoing support.",
    features: [
      "Everything in Growth, plus:",
      "AI chatbot or automation workflow",
      "Web3 / blockchain integration",
      "CI/CD pipelines + cloud deployment",
      "Ongoing support & optimization",
    ],
    cta: "Book My Free Call",
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
    <section id="pricing" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="absolute left-1/2 top-1/2 h-[500px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix-green/[0.03] blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-[1100px] relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            No Hidden Fees. No Surprises.{" "}
            <span className="text-gradient-accent">Just Results.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Choose your tier and get started. Every package links directly to our secure Fiverr
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
                      <h3 className="text-base font-bold text-white">{tier.name}</h3>
                    </div>
                  </div>

                  {/* Best For */}
                  <p className="mb-3 font-mono text-[11px] text-text-muted/60">
                    Best for: {tier.bestFor}
                  </p>

                  {/* Price */}
                  <div className="mb-5 flex items-baseline gap-2">
                    <span className={`text-2xl font-extrabold ${isCyan ? "text-aquamarine" : "text-matrix-green"}`}>
                      {tier.price}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="mb-5 h-px bg-gradient-to-r from-transparent via-subtle/60 to-transparent" />

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
