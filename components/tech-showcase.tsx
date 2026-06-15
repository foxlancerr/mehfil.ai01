"use client";

import { motion } from "framer-motion";
import { Zap, RefreshCcw, ShieldCheck, Globe, Cpu, Server, Database } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH = [
  {
    icon: Zap,
    title: "Next.js 16",
    subtitle: "App Router · Edge Runtime",
    detail: "Server-first architecture with React 19 streaming and partial pre-rendering.",
    featured: false,
  },
  {
    icon: RefreshCcw,
    title: "React 19",
    subtitle: "Server Components · Streaming",
    detail: "Concurrent rendering with useOptimistic, Actions, and the new compiler.",
    featured: false,
  },
  {
    icon: ShieldCheck,
    title: "TypeScript",
    subtitle: "Strict Mode · Full Type Safety",
    detail: "End-to-end type coverage from database schema to UI component props.",
    featured: true,
  },
  {
    icon: Globe,
    title: "Web3 / Ethers",
    subtitle: "Smart Contracts · Wallets",
    detail: "Type-safe dApp frontends with multi-chain wallet connections and contract ABIs.",
    featured: false,
  },
  {
    icon: Cpu,
    title: "AI Pipelines",
    subtitle: "RAG · OpenAI · n8n",
    detail: "Retrieval-augmented generation pipelines and automated AI workflows via n8n.",
    featured: false,
  },
  {
    icon: Server,
    title: "Vercel Edge",
    subtitle: "Serverless · Cost-Optimized",
    detail: "Edge-deployed functions with optimized cold starts and minimal compute spend.",
    featured: false,
  },
  {
    icon: Database,
    title: "Supabase",
    subtitle: "Postgres · Auth · Realtime",
    detail: "Row-level security, realtime subscriptions, and type-safe Postgres queries.",
    featured: false,
  },
];

export default function TechShowcase() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-8 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/5 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{"//"}</span> Production Stack
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            <span className="relative inline-block mr-3">
              <span className="text-text-muted/40 line-through decoration-crimson/60">One</span>
            </span>
            a few more things.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            The exact technologies that power every rescue, build, and deployment.
          </p>
        </motion.div>

        {/* Cards strip — horizontal scroll on mobile, centered row on desktop */}
        <div className="relative">
          {/* Fade edges (desktop only) */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-r from-black to-transparent lg:block" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-l from-black to-transparent lg:block" />

          <div
            className="flex gap-3 overflow-x-auto lg:overflow-visible lg:justify-center lg:gap-4"
            style={{ scrollbarWidth: "none" }}
          >
            {TECH.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: item.featured ? 0 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.07 }}
                  className={cn(
                    "group relative flex shrink-0 flex-col rounded-2xl border transition-all duration-300",
                    "w-[152px] lg:w-[148px]",
                    item.featured
                      ? [
                          "border-crimson/50 bg-surface",
                          "shadow-[0_0_50px_rgba(225,29,72,0.18),0_0_0_1px_rgba(225,29,72,0.15)]",
                          "lg:-translate-y-4 lg:scale-[1.04] z-10",
                          "p-5",
                        ]
                      : [
                          "border-subtle/50 bg-surface/70",
                          "hover:border-crimson/25 hover:-translate-y-1",
                          "p-5",
                        ]
                  )}
                >
                  {/* Radial glow inside featured card */}
                  {item.featured && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_50%_0%,rgba(225,29,72,0.14),transparent_65%)]" />
                  )}

                  {/* Top section — icon */}
                  <div
                    className={cn(
                      "mb-8 flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-300",
                      item.featured
                        ? "border-crimson/40 bg-crimson/15"
                        : "border-subtle/60 bg-black/30 group-hover:border-crimson/30 group-hover:bg-crimson/8"
                    )}
                  >
                    <Icon
                      className={cn(
                        "h-4 w-4 transition-colors duration-300",
                        item.featured
                          ? "text-crimson"
                          : "text-text-muted/60 group-hover:text-crimson/80"
                      )}
                    />
                  </div>

                  {/* Detail text — only on featured */}
                  {item.featured && (
                    <p className="mb-6 flex-1 text-[11px] leading-relaxed text-text-muted/70">
                      {item.detail}
                    </p>
                  )}

                  {!item.featured && <div className="flex-1" />}

                  {/* Bottom section */}
                  <div className="mt-auto">
                    <p
                      className={cn(
                        "text-sm font-bold leading-tight",
                        item.featured ? "text-white" : "text-white/75 group-hover:text-white"
                      )}
                    >
                      {item.title}
                    </p>
                    <p className="mt-1 font-mono text-[10px] leading-tight text-text-muted/50">
                      {item.subtitle}
                    </p>

                    {/* Small icon badge at bottom */}
                    <div
                      className={cn(
                        "mt-4 flex h-7 w-7 items-center justify-center rounded-lg border",
                        item.featured
                          ? "border-crimson/30 bg-crimson/10"
                          : "border-subtle/40 bg-black/20"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-3 w-3",
                          item.featured ? "text-crimson/60" : "text-text-muted/30"
                        )}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
