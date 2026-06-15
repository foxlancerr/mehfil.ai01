"use client";

import { motion } from "framer-motion";
import { Search, LayoutTemplate, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: Search,
    title: "Codebase Audit",
    description:
      "Deep-scan your AI-generated codebase for hydration errors, type drift, broken state sync, and architectural debt.",
    tags: ["Error Tracing", "Type Analysis", "Debt Mapping"],
  },
  {
    number: "02",
    icon: LayoutTemplate,
    title: "Architecture Redesign",
    description:
      "Rebuild from the foundation — clean App Router structure, strict TypeScript, and modular state management.",
    tags: ["App Router", "TypeScript", "Zustand"],
  },
  {
    number: "03",
    icon: Code2,
    title: "Production Build",
    description:
      "Implement features with enterprise-grade patterns, security hardening, and full performance optimization.",
    tags: ["Performance", "Security", "Optimization"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deploy & Monitor",
    description:
      "Vercel edge deployment with CI/CD pipelines, error monitoring, and cost-optimized serverless configuration.",
    tags: ["Vercel Edge", "CI/CD", "Monitoring"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function RescueProcess() {
  return (
    <section className="relative px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{"//"}</span> The Rescue Process
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            From broken prototype{" "}
            <span className="text-gradient-accent">to production-ready</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            A precise 4-step engineering process that transforms any AI-generated codebase into a
            scalable, maintainable product.
          </p>
        </motion.div>

        {/* Step Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === STEPS.length - 1;
            return (
              <motion.div
                key={step.number}
                variants={cardVariants}
                className="glass-panel glow-border group relative flex flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-crimson/30"
              >
                {/* Connector line — desktop only */}
                {!isLast && (
                  <div className="absolute -right-[11px] top-[52px] z-10 hidden lg:block">
                    <div className="h-px w-[22px] bg-gradient-to-r from-crimson/40 to-crimson/10" />
                    <div className="absolute -right-1 -top-[3px] h-[7px] w-[7px] rotate-45 border-r border-t border-crimson/30" />
                  </div>
                )}

                {/* Step number — large watermark */}
                <span className="mb-3 select-none font-mono text-5xl font-extrabold leading-none text-crimson/10 transition-colors duration-300 group-hover:text-crimson/20">
                  {step.number}
                </span>

                {/* Icon */}
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/10 transition-all duration-300 group-hover:border-crimson/40 group-hover:bg-crimson/15">
                  <Icon className="h-5 w-5 text-crimson" />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-base font-bold text-white">{step.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
                  {step.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-crimson/15 bg-crimson/5 px-2 py-0.5 font-mono text-[10px] tracking-wide text-crimson/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
