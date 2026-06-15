"use client";

import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "Web3 IDO Launchpad — ChainGPT Pad",
    live: "pad.chaingpt.org",
    liveHref: "https://pad.chaingpt.org",
    description:
      "Scaled a high-traffic decentralized IDO launchpad with EVM smart contracts, multi-wallet onboarding (MetaMask, WalletConnect), and real-time token staking — serving thousands of users across multiple blockchains.",
    tags: ["Web3", "Ethers.js", "TypeScript", "Smart Contracts"],
    accent: "matrix-green",
  },
  {
    number: "02",
    title: "Zafora SaaS Platform",
    live: null,
    liveHref: null,
    description:
      "Transformed a messy Replit prototype into a production-ready SaaS with a custom Admin CMS, full CI/CD pipeline, PostgreSQL backend, AWS S3 storage, and airtight security.",
    tags: ["Next.js 14", "PostgreSQL", "Railway", "AWS S3", "Vercel Edge"],
    accent: "aquamarine",
  },
  {
    number: "03",
    title: "sift.ai — Autonomous B2B Lead Engine",
    live: null,
    liveHref: null,
    description:
      "Built a 5-agent AI pipeline that autonomously discovers local businesses, audits their digital footprint, and drafts hyper-personalized outreach — fully async, zero human input required.",
    tags: ["AI Agents", "n8n", "RAG", "Automation"],
    accent: "matrix-green",
  },
  {
    number: "04",
    title: "DigitX Agency Website",
    live: "digitx-agency.vercel.app",
    liveHref: "https://digitx-agency.vercel.app",
    description:
      "High-converting digital agency website with 0.52s load time, interactive services matrix, SEO-optimized metadata pipelines, and Vercel Edge deployment.",
    tags: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript"],
    accent: "aquamarine",
  },
  {
    number: "05",
    title: "AI NFT Generator & Minting Engine — ChainGPT",
    live: "nft.chaingpt.org",
    liveHref: "https://nft.chaingpt.org",
    description:
      "End-to-end decentralized AI NFT platform with cross-chain minting (ETH, BNB, Polygon, Avalanche, Solana), ERC-721/1155 support, and gas-efficient bulk minting.",
    tags: ["Web3", "Solidity", "Ethers.js", "Cross-Chain"],
    accent: "matrix-green",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative px-6 lg:px-12 py-24 lg:py-32">
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
            <span className="mr-1.5">{'//'}</span> Real Work. Real Results.
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Projects That Ship.{" "}
            <span className="text-gradient-accent">Metrics That Move.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Live in production. Used by real users. Built to last.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-5 lg:grid-cols-2">
          {PROJECTS.map((project, index) => {
            const isCyan = project.accent === "aquamarine";
            const isLast = index === PROJECTS.length - 1;
            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                className={`glass-panel glow-border group rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.01] ${isLast ? "lg:col-span-2" : ""}`}
              >
                {/* Header row */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-2xl font-bold ${
                        isCyan ? "text-aquamarine/30" : "text-matrix-green/30"
                      }`}
                    >
                      {project.number}
                    </span>
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  </div>
                  {project.live && (
                    <a
                      href={project.liveHref ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] font-medium transition-colors ${
                        isCyan
                          ? "border-aquamarine/20 bg-aquamarine/5 text-aquamarine/80 hover:border-aquamarine/40"
                          : "border-matrix-green/20 bg-matrix-green/5 text-matrix-green/80 hover:border-matrix-green/40"
                      }`}
                    >
                      <Globe className="h-3 w-3" />
                      {project.live}
                      <ExternalLink className="h-3 w-3 opacity-60" />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
