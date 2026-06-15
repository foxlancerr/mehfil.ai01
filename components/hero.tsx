"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";

const METRICS = [
  { value: "10+", label: "Live Deployments" },
  { value: "5 ★", label: "Fiverr Rating" },
 
];

const SERVICE_TAGS = [
  "Web Dev", "AI Automation", "SEO", "Paid Ads",
  "Web3", "WordPress", "DevOps", "Branding",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, reduceMotion ? 1 : 0]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 70]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 pb-16 lg:px-12"
    >
      {/* Blueprint grid — parallax layer */}
      <motion.div
        style={{ y: gridY }}
        className="blueprint-grid pointer-events-none absolute inset-0 opacity-60"
      />

  

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, willChange: "transform, opacity" }}
        className="relative z-10 mx-auto w-full max-w-[1100px]"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_360px] lg:gap-20">

          {/* ── Left: editorial headline block ── */}
          <div>
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 flex items-center gap-2.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-crimson opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted">
                Now Taking on New Clients — 3 Spots Left
              </span>
            </motion.div>

            {/* Headline — massive, left-aligned, tight */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6 text-[clamp(40px,8vw,88px)] font-black leading-[0.92] tracking-[-0.03em] text-white"
            >
              Your Business<br />
              Deserves More<br />
              Than a Pretty<br />
              <span className="text-crimson">Website.</span>
            </motion.h1>

            {/* Thin accent rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
              style={{ originX: 0 }}
              className="mb-7 h-px bg-gradient-to-r from-crimson/50 via-subtle/40 to-transparent"
            />

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.72 }}
              className="mb-8 max-w-[500px] text-base leading-relaxed text-text-muted md:text-[17px]"
            >
              We build fast, conversion-focused digital systems — from AI-powered web apps
              to full marketing funnels — that actually bring clients through the door.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.82 }}
              className="flex flex-wrap gap-3"
            >
              <a href="#contact" className="btn-primary animate-pulse-glow text-sm">
                Get a Free Audit
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#case-studies" className="btn-glass text-sm">
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="mt-8 flex items-center gap-2"
            >
              <MapPin className="h-3.5 w-3.5 text-text-muted/35" />
              <span className="font-mono text-xs text-text-muted/40">
                Pakistan 🇵🇰 — Serving clients globally
              </span>
            </motion.div>
          </div>

          {/* ── Right: metrics cluster (desktop only) ── */}
          <div className="hidden lg:flex lg:flex-col lg:gap-3">
            {/* 2×2 metrics grid */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-2"
            >
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.07 }}
                  className="bracket-frame glass-panel p-4"
                >
                  <p className="text-xl font-black text-white leading-tight">{m.value}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-text-muted/55 leading-snug">
                    {m.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Services tags card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel p-5"
            >
              <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-text-muted/45">
                What We Do
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_TAGS.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-subtle/60 px-2.5 py-1 font-mono text-[10px] text-text-muted/65 tracking-wide"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Fiverr trust line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.95 }}
              className="font-mono text-[10px] text-text-muted/30 text-center"
            >
              Verified 5-star reviews on Fiverr · Clients in US, UK, Germany &amp; beyond
            </motion.p>
          </div>
        </div>

        {/* Mobile bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-14 grid grid-cols-4 divide-x divide-subtle/30 overflow-hidden border border-subtle/30 lg:hidden"
        >
          {METRICS.map((m) => (
            <div key={m.label} className="px-3 py-4 text-center">
              <p className="text-sm font-black text-white">{m.value}</p>
              <p className="mt-0.5 font-mono text-[8px] uppercase tracking-widest text-text-muted/45 leading-tight">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-8 w-5 items-start justify-center rounded-full border border-subtle/60 p-1.5"
        >
          <div className="h-1.5 w-1 rounded-full bg-crimson/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
