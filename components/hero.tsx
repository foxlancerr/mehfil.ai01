"use client";

import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Zap, Shield, Clock } from "lucide-react";

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
      <div className="relative z-10 mx-auto text-center">
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
              SYSTEM GATEWAY: ACTIVE & SECURE FOR GLOBAL DISPATCH
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
          <span className="text-white">AI Code Has Limits.</span>
          <br />
          <span className="text-gradient-hero">Your Software Shouldn&apos;t.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Did your MVP break on deployment? Stop wasting AI credits on compilation
          loops. We take fragile, vibe-coded scripts from{" "}
          <span className="text-white font-medium">Bolt.new</span>,{" "}
          <span className="text-white font-medium">Lovable</span>,{" "}
          <span className="text-white font-medium">Cursor</span>, and{" "}
          <span className="text-white font-medium">Replit</span> and engineer them
          into ultra-fast, type-safe Next.js & Web3 production-grade applications
          built to handle real market traffic.
        </motion.p>

        {/* Panic Offer Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="glass-panel glow-border mx-auto mb-10 max-w-2xl rounded-2xl p-6 text-left"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-matrix-green/10 border border-matrix-green/20">
              <Zap className="h-5 w-5 text-matrix-green" />
            </div>
            <div>
              <div className="mb-1.5 flex items-center gap-2">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-matrix-green">
                  24-Hour Panic Offer
                </span>
                <Clock className="h-3.5 w-3.5 text-matrix-green/60" />
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                Got an application trapped in an infinite loop or a Vercel
                deployment crash right now? Book an immediate{" "}
                <span className="text-white font-medium">
                  Baseline Diagnostic Audit
                </span>{" "}
                today, and if we can&apos;t isolate the exact structural
                architectural failure within 12 hours, your audit is completely{" "}
                <span className="text-matrix-green font-semibold">free</span>.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row "
        >
          <a
            href="https://www.fiverr.com/foxlancerr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary animate-pulse-glow text-sm px-8 py-4"
          >
            Resolve Your Bug via Fiverr
            <ArrowRight className="h-4 w-4" />
          </a>
        
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