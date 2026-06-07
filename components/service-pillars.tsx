"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Globe } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    icon: Code2,
    title: "AI Prototype Hardening & Refactoring",
    description:
      "Tracing and clearing Next.js hydration errors, compilation failures, layout shifts, and script-sync loops. We take your AI-generated mess and turn it into stable, production-quality code.",
    tags: ["Next.js Hydration", "Build Fixes", "Layout Shifts", "Error Tracing"],
    accent: "matrix-green",
  },
  {
    number: "02",
    icon: Layers,
    title: "Full-Stack SaaS Infrastructure",
    description:
      "Porting frontend layouts to clean Next.js App Router & Tailwind CSS architecture with highly responsive global memory states (Zustand), database integration, and secure auth rails.",
    tags: ["App Router", "Zustand", "Tailwind CSS", "Supabase"],
    accent: "aquamarine",
  },
  {
    number: "03",
    icon: Globe,
    title: "Web3 & Decentralized Engineering",
    description:
      "Refactoring fragile dApp codebases, deploying decentralized launchpads, and implementing type-safe smart contract and wallet connection triggers across multiple chains.",
    tags: ["dApps", "Smart Contracts", "Wallet Connect", "Launchpads"],
    accent: "matrix-green",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicePillars() {
  return (
    <section id="services" className="relative px-6 lg:px-8 py-24 lg:py-32">
      {/* Subtle divider line */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Specialized Service Pillars
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Clear, modular engineering{" "}
            <span className="text-gradient-accent">at every layer</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            We dominate the most technical layers of the modern web stack.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-5"
        >
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            const isCyan = pillar.accent === "aquamarine";
            return (
              <motion.div
                key={pillar.number}
                variants={cardVariants}
                className="glass-panel glow-border group flex flex-col gap-6 rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.008] md:flex-row md:items-start"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 md:min-w-[180px]">
                  <span
                    className={`font-mono text-3xl font-bold ${
                      isCyan ? "text-aquamarine/30" : "text-matrix-green/30"
                    }`}
                  >
                    {pillar.number}
                  </span>
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isCyan
                        ? "border-aquamarine/20 bg-aquamarine/10 group-hover:border-aquamarine/40"
                        : "border-matrix-green/20 bg-matrix-green/10 group-hover:border-matrix-green/40"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isCyan ? "text-aquamarine" : "text-matrix-green"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">
                    {pillar.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-md border px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide ${
                          isCyan
                            ? "border-aquamarine/15 bg-aquamarine/5 text-aquamarine/80"
                            : "border-matrix-green/15 bg-matrix-green/5 text-matrix-green/80"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}