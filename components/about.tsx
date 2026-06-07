"use client";

import { motion } from "framer-motion";
import { Terminal, ArrowRight, Cpu, Globe } from "lucide-react";

const TECH = [
  "Next.js", "TypeScript", "React", "n8n",
  "RAG Pipelines", "OpenAI", "Web3", "Ethers.js",
  "Supabase", "PostgreSQL", "Vercel", "Tailwind CSS",
];

const STATS = [
  { label: "Specialty", value: "AI Automation + Web Engineering" },
  { label: "Stack", value: "Next.js · TypeScript · n8n · Web3" },
  { label: "Focus", value: "Performance · Security · Scalability" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 lg:px-8 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* ── Left — Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="section-label mb-6 inline-flex">
              <span className="mr-1.5">{"//"}</span> About the Engineer
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Muhammad Asim
            </h2>
            <p className="mt-1 text-lg font-semibold text-gradient-accent">
              Software Engineer &amp; AI Automation Specialist
            </p>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Greetings, I&apos;m{" "}
                <span className="text-white font-medium">Muhammad Asim</span>, a
                dedicated Software Engineer specializing in scalable web
                architectures and AI automation. I don&apos;t just write code; I
                build tools that make businesses highly efficient.
              </p>
              <p>
                Working extensively with{" "}
                <span className="text-white font-medium">
                  Next.js, TypeScript, n8n, and RAG pipelines
                </span>
                , I focus on resolving complex performance bottlenecks, cutting
                application latency, and securing serverless data flows.
              </p>
              <p>
                Whether you need a complete codebase optimization, a modern
                framework migration, or advanced AI workflows, I ensure clean,
                maintainable architecture.{" "}
                <span className="text-white font-medium">
                  Let&apos;s connect to build.
                </span>
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.fiverr.com/foxlancerr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
              >
                Hire on Fiverr
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass text-sm"
              >
                <Globe className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right — Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            className="space-y-4"
          >
            {/* Status card */}
            <div className="glass-panel rounded-2xl p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-matrix-green/20 bg-matrix-green/10">
                  <Terminal className="h-5 w-5 text-matrix-green" />
                </div>
                <div>
                  <span className="block font-mono text-[10px] font-semibold uppercase tracking-widest text-text-muted/60">
                    Current Status
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Available for Projects
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-matrix-green opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-matrix-green" />
                  </span>
                  <span className="font-mono text-xs text-matrix-green">
                    ACTIVE
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-start justify-between gap-4 rounded-lg border border-subtle/40 bg-black/20 px-4 py-2.5"
                  >
                    <span className="shrink-0 font-mono text-xs text-text-muted/60">
                      {s.label}
                    </span>
                    <span className="text-right text-xs text-white">
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="glass-panel rounded-2xl p-5">
              <div className="mb-3 flex items-center gap-2">
                <Cpu className="h-4 w-4 text-matrix-green/60" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-text-muted/60">
                  Core Technologies
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECH.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-matrix-green/15 bg-matrix-green/5 px-3 py-1.5 font-mono text-[11px] font-medium tracking-wide text-matrix-green/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
