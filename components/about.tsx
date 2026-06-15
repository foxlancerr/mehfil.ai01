"use client";

import { motion } from "framer-motion";
import {
  Terminal, ArrowRight, Cpu, Globe,
  Linkedin, Github, Instagram, Facebook, MessageCircle,
} from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Linkedin,    label: "LinkedIn",  href: "https://www.linkedin.com/in/foxlancerr/" },
  { icon: Github,      label: "GitHub",    href: "https://github.com/foxlancerr" },
  { icon: Instagram,   label: "Instagram", href: "https://www.instagram.com/foxlancerr/" },
  { icon: Facebook,    label: "Facebook",  href: "https://www.facebook.com/profile.php?id=100091461979708" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923201942001?text=Hi%20mehfil%21%20I%27d%20like%20to%20discuss%20a%20project.%20Can%20we%20connect%3F" },
];

const TECH = [
  "Next.js", "TypeScript", "React", "n8n",
  "RAG Pipelines", "OpenAI", "Web3", "Ethers.js",
  "PostgreSQL", "Vercel", "Tailwind CSS", "Docker",
];

const STATS = [
  { label: "Experience", value: "Funavry Technologies · AAK Tele-Science" },
  { label: "Stack", value: "Next.js · TypeScript · n8n · Web3 · AI" },
  { label: "Process", value: "Problem · Research · Solution · Outcome" },
];

const METRIC_CARDS = [
  { value: "10+", label: "Live deployed projects" },
  { value: "5 ★", label: "Verified Fiverr rating" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      {/* Blueprint grid */}
      <div className="dot-grid-fade pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">

          {/* ── Left — Bio (sticky) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <span className="section-label mb-6 inline-flex">
              <span className="mr-1.5">{"//"}</span> Who&apos;s Behind This
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
              Built by an Engineer.{" "}
              <span className="text-gradient-accent">Run Like an Agency.</span>
            </h2>

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

            {/* Social links row */}
            <div className="mt-7 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle/50 text-text-muted/50 transition-all duration-200 hover:border-crimson/40 hover:bg-crimson/8 hover:text-crimson"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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
                href="https://www.linkedin.com/in/foxlancerr/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass text-sm"
              >
                <Globe className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* ── Right — Cards (scroll + reveal sequentially) ── */}
          <div className="space-y-4">
            {/* Metric cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3"
            >
              {METRIC_CARDS.map((m) => (
                <div key={m.label} className="glass-panel rounded-xl p-4 text-center">
                  <p className="text-lg font-extrabold text-white tabular-nums leading-tight">{m.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-muted/60 leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Status card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
              className="bracket-frame glass-panel relative rounded-2xl p-6 rounded-tr-none rounded-bl-none"
            >
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
                  <span className="font-mono text-xs text-matrix-green">ACTIVE</span>
                </div>
              </div>

              <div className="space-y-2">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="flex items-start justify-between gap-4 rounded-lg border border-subtle/40 bg-black/20 px-4 py-2.5"
                  >
                    <span className="shrink-0 font-mono text-xs text-text-muted/60">{s.label}</span>
                    <span className="text-right text-xs text-white">{s.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="glass-panel rounded-2xl p-5"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
