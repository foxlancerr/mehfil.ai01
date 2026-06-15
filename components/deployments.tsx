"use client";

import { motion } from "framer-motion";
import { ExternalLink, Calendar, DollarSign, Clock } from "lucide-react";

const PROJECTS = [
  {
    date: "May 2026",
    title: "Zafora SaaS Platform",
    summary:
      "Overhauled a disorganized, unsecured React prototype on Replit into a secure, production-ready SaaS for Zafora Holdings — with a custom Admin Panel CMS, CI/CD pipeline, and full security overhaul.",
    highlights: [
      "Next.js 14 + TypeScript on Vercel Edge",
      "Node.js/Express API on Railway + Neon PostgreSQL",
      "AWS S3, Resend emails, bcrypt + env vaults",
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS S3", "CI/CD"],
    price: "$100–$200",
    duration: "1–7 days",
    url: null,
    accent: "matrix-green",
  },
  {
    date: "May 2024",
    title: "Web3 IDO Launchpad — ChainGPT Pad",
    summary:
      "Scaled and optimized ChainGPT Pad, a premier high-traffic decentralized IDO launchpad, architecting seamless blockchain integrations for a bulletproof user onboarding and token investment lifecycle.",
    highlights: [
      "EVM smart contract pipelines with Ethers.js / Web3.js",
      "Universal wallet flows: MetaMask, WalletConnect, AppKit",
      "Real-time token staking & tier-pool validation logic",
    ],
    tags: ["Web3", "Ethers.js", "TypeScript", "Smart Contracts", "WalletConnect"],
    price: "$2,500–$5,000",
    duration: "6+ months",
    url: "https://pad.chaingpt.org",
    accent: "aquamarine",
  },
  {
    date: "Feb 2025",
    title: "DigitX — Digital & AI Services Agency",
    summary:
      "Premium high-converting digital agency platform featuring an interactive services matrix, dynamic portfolios, and a job board — engineered for SEO performance and 0.52s instant frame load velocity.",
    highlights: [
      "Next.js App Router with optimized SEO metadata pipelines",
      "Zustand global state for zero-overhead service filtering",
      "Vercel Edge via git automation — 0.52s load velocity",
    ],
    tags: ["Next.js", "Tailwind CSS", "Zustand", "TypeScript", "Vercel"],
    price: "$400–$600",
    duration: "7–30 days",
    url: "https://digitx-agency.vercel.app/",
    accent: "matrix-green",
  },
  {
    date: "April 2026",
    title: "sift.ai — Autonomous B2B Lead Engine",
    summary:
      "Production-ready autonomous lead generation and outreach engine for solo agencies. A sequential 5-agent AI pipeline discovers local businesses, audits their digital footprint, and drafts hyper-personalized outreach campaigns.",
    highlights: [
      "5-agent AI pipeline running fully asynchronously",
      "Google Maps discovery + digital footprint crawler",
      "180-word personalized outreach + immutable audit trail",
    ],
    tags: ["AI Agents", "n8n", "RAG", "Automation", "B2B"],
    price: "$800–$1,000",
    duration: "7–30 days",
    url: null,
    accent: "aquamarine",
  },
  {
    date: "July 2024",
    title: "AI NFT Generator & Cross-Chain Minting Engine",
    summary:
      "Architected end-to-end decentralized infrastructure for ChainGPT AI NFT Platform — transforming a no-code AI generation engine into a high-performance cross-chain minting and asset-distribution system.",
    highlights: [
      "Multi-chain minting: ETH, BNB, Polygon, Avalanche, Solana",
      "ERC-721, ERC-1155 & Metaplex metadata schemas",
      "Gas-efficient bulk minting with concurrent signature requests",
    ],
    tags: ["Web3", "Solidity", "NFT", "Cross-Chain", "Ethers.js"],
    price: "$2,500–$5,000",
    duration: "6+ months",
    url: "https://nft.chaingpt.org",
    accent: "matrix-green",
  },
  {
    date: "June 2025",
    title: "AI-Powered Web3 Hub & Smart Contract Auditor",
    summary:
      "Core Web3 Engineer on the ChainGPT Ecosystem hub — implementing secure multi-chain wallet connections, a Solidity smart contract auditing pipeline, and automated PDF cryptographic audit report generation.",
    highlights: [
      "Solidity LLM pipeline returning vulnerability diagnostics in <30s",
      "Server-side PDF engine for cryptographic audit reports",
      "Multi-chain wallet routing: ETH, BNB, Arbitrum",
    ],
    tags: ["AI", "Web3", "Solidity", "LLM", "TypeScript"],
    price: "$2,500–$5,000",
    duration: "6+ months",
    url: "https://app.chaingpt.org",
    accent: "aquamarine",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Deployments() {
  return (
    <section id="deployments" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{"//"}</span> Project Catalog
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Live deployments,{" "}
            <span className="text-gradient-accent">real outcomes</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Production-grade engineering across SaaS, Web3, and AI automation —
            with verifiable live previews.
          </p>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {PROJECTS.map((project) => {
            const isCyan = project.accent === "aquamarine";
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className="glass-panel glow-border group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:scale-[1.015]"
              >
                {/* Date */}
                <div className="mb-4 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-text-muted/50" />
                    <span className="font-mono text-[11px] tracking-wide text-text-muted/60">
                      {project.date}
                    </span>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-1 rounded-md border px-2.5 py-1 font-mono text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                        isCyan
                          ? "border-aquamarine/20 text-aquamarine/70 hover:border-aquamarine/50 hover:text-aquamarine"
                          : "border-matrix-green/20 text-matrix-green/70 hover:border-matrix-green/50 hover:text-matrix-green"
                      }`}
                    >
                      <ExternalLink className="h-2.5 w-2.5" />
                      Live
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3 className="mb-3 text-base font-bold leading-snug text-white">
                  {project.title}
                </h3>

                {/* Summary */}
                <p className="mb-4 text-sm leading-relaxed text-text-muted">
                  {project.summary}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          isCyan ? "bg-aquamarine/60" : "bg-matrix-green/60"
                        }`}
                      />
                      <span className="text-xs leading-relaxed text-text-muted/80">
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-md border px-2 py-0.5 font-mono text-[10px] tracking-wide ${
                        isCyan
                          ? "border-aquamarine/15 bg-aquamarine/5 text-aquamarine/70"
                          : "border-matrix-green/15 bg-matrix-green/5 text-matrix-green/70"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price + Duration */}
                <div className="mt-auto flex items-center gap-3 border-t border-subtle/40 pt-4">
                  <div className="flex items-center gap-1.5">
                    <DollarSign className="h-3.5 w-3.5 text-text-muted/40" />
                    <span className="font-mono text-xs text-text-muted/70">
                      {project.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-text-muted/40" />
                    <span className="font-mono text-xs text-text-muted/70">
                      {project.duration}
                    </span>
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
