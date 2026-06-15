"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 lg:px-8 pt-16"
    >
      {/* Hero Aura */}
      <div className="absolute inset-0 bg-hero-aura-lg" />
      <div className="absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-hero-aura opacity-80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl w-full text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="glass-panel mb-8 inline-flex items-center gap-3 rounded-full px-5 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-matrix-green opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-matrix-green" />
            </span>
            <span className="font-mono text-xs font-medium tracking-widest text-text-neon">
              NOW TAKING ON NEW CLIENTS — 3 SPOTS LEFT THIS MONTH
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          <span className="text-white">Your Business Deserves</span>
          <br />
          <span className="text-gradient-hero">More Than a Pretty Website.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-4 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          We build fast, conversion-focused digital systems — from AI-powered web apps to full
          marketing funnels — that actually bring clients through the door.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-text-muted/70"
        >
          One agency. Every layer.{" "}
          <span className="text-white font-medium">Web development</span>,{" "}
          <span className="text-white font-medium">AI automation</span>,{" "}
          <span className="text-white font-medium">SEO</span>,{" "}
          <span className="text-white font-medium">digital marketing</span>,{" "}
          <span className="text-white font-medium">Web3</span>, and more — all under one roof so
          you never chase five freelancers again.
        </motion.p>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="btn-primary animate-pulse-glow text-sm px-8 py-4"
          >
            Get a Free Audit
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#case-studies"
            className="btn-glass text-sm px-8 py-4"
          >
            See Our Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="mt-10 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6"
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-matrix-green text-matrix-green" />
            ))}
            <span className="ml-1 font-mono text-xs text-text-muted">
              Verified 5-star reviews on Fiverr
            </span>
          </div>
          <span className="hidden h-3 w-px bg-subtle/60 sm:block" />
          <span className="font-mono text-xs text-text-muted">
            10+ Live Deployments
          </span>
          <span className="hidden h-3 w-px bg-subtle/60 sm:block" />
          <span className="font-mono text-xs text-text-muted">
            Clients in US, UK, Germany &amp; beyond
          </span>
        </motion.div>
      </div>

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
          <div className="h-1.5 w-1 rounded-full bg-matrix-green/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
