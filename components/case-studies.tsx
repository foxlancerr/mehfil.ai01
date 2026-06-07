"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingDown, ShieldCheck } from "lucide-react";

const CASE_STUDIES = [
  {
    icon: TrendingDown,
    title: "The AI Content Engine Transformation",
    blueprint:
      "Re-engineered a full-stack automated generation tool that suffered from broken state-sync routines and inconsistent data pipeline handling.",
    metric: "100%",
    metricLabel: "Reduction in Background Computation Lag",
    metricDescription:
      "Cut background computation lag entirely and achieved seamless automated execution pipelines with zero state desync.",
    accent: "matrix-green",
    tags: ["React", "Zustand", "API Integration", "Pipeline Optimization"],
  },
  {
    icon: ShieldCheck,
    title: "Web3 IDO Launchpad Infrastructure",
    blueprint:
      "Migrated an un-typed, fragile decentralized application frontend into a pristine production-ready setup with comprehensive type safety.",
    metric: "100%",
    metricLabel: "Type-Safe Security Across Multi-Wallet Triggers",
    metricDescription:
      "Achieved absolute, type-safe security across complex multi-wallet validation triggers and smart contract interactions.",
    accent: "aquamarine",
    tags: ["Web3", "TypeScript", "Wallet Connect", "Smart Contracts"],
  },
];

function AnimatedCounter({ target }: { target: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target);
    const duration = 1500;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);
      setDisplay(current + "%");
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target]);

  return <span ref={ref}>{display}</span>;
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-6 lg:px-8 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Strategic Case Studies
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Proven outcomes,{" "}
            <span className="text-gradient-accent">not just promises</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Backed by engineering tenure at Funavry Technologies and AAK
            Tele-Science — here are the hard technical metrics.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid gap-5 lg:grid-cols-2">
          {CASE_STUDIES.map((study, index) => {
            const Icon = study.icon;
            const isCyan = study.accent === "aquamarine";
            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-panel glow-border group rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.01]"
              >
                {/* Icon + Title */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl border ${
                      isCyan
                        ? "border-aquamarine/20 bg-aquamarine/10"
                        : "border-matrix-green/20 bg-matrix-green/10"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isCyan ? "text-aquamarine" : "text-matrix-green"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white">{study.title}</h3>
                </div>

                {/* Blueprint */}
                <div className="mb-6 rounded-xl border border-subtle/60 bg-black/30 p-4">
                  <span className="mb-2 block font-mono text-[10px] font-semibold uppercase tracking-widest text-text-muted/60">
                    Technical Blueprint
                  </span>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {study.blueprint}
                  </p>
                </div>

                {/* Metric */}
                <div className="mb-5 rounded-xl border border-subtle/60 bg-black/30 p-5">
                  <div className="flex items-end gap-3">
                    <span
                      className={`text-4xl font-extrabold tabular-nums ${
                        isCyan ? "text-aquamarine" : "text-matrix-green"
                      }`}
                    >
                      <AnimatedCounter target={study.metric} />
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {study.metricLabel}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    {study.metricDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-subtle/50 bg-surface/40 px-2.5 py-1 font-mono text-[11px] text-text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}