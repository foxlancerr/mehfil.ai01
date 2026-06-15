"use client";

import { motion } from "framer-motion";
import { Code2, Bot, BarChart2, Search, Globe, FileCode, Palette, Cloud } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Code2,
    title: "Full-Stack Web Development",
    hook: "Pixel-perfect. Lightning-fast. Built to last.",
    description:
      "Custom websites and web apps built with Next.js, React, and TypeScript. We don't use templates — every line of code is written for your business. 95+ Lighthouse scores. Mobile-first. SEO-ready on day one.",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    accent: "matrix-green",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Automation & Chatbot Integration",
    hook: "Stop doing manually what a machine can do 24/7.",
    description:
      "We build custom AI workflows, chatbots, and automation pipelines that handle lead capture, customer support, content generation, and repetitive tasks — so you focus on growing, not grinding.",
    tags: ["OpenAI", "Claude API", "n8n", "LangChain", "RAG Pipelines", "WhatsApp Bots"],
    accent: "aquamarine",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Paid Ads & Digital Marketing",
    hook: "Every rupee you spend should bring two back.",
    description:
      "Data-driven Facebook, Instagram, and Google ad campaigns built around your audience, not guesswork. We handle strategy, creative, targeting, and optimization — while you watch the leads roll in.",
    tags: ["Meta Ads", "Google Ads", "Campaign Strategy", "A/B Testing", "Analytics"],
    accent: "matrix-green",
  },
  {
    number: "04",
    icon: Search,
    title: "SEO & Organic Growth",
    hook: "Rank higher. Get found. Own your niche.",
    description:
      "From on-page technical SEO to keyword strategy and content pipelines — we build the kind of digital presence that keeps bringing traffic long after you stop paying for ads.",
    tags: ["Technical SEO", "Keyword Research", "On-Page Optimization", "Content Strategy", "Local SEO"],
    accent: "aquamarine",
  },
  {
    number: "05",
    icon: Globe,
    title: "Web3 & Blockchain Development",
    hook: "Your decentralized idea deserves production-grade execution.",
    description:
      "We build dApps, NFT platforms, IDO launchpads, and smart contract integrations across ETH, BNB, Polygon, Solana, and Avalanche. Wallet connections, token staking, cross-chain bridges — done right.",
    tags: ["Solidity", "Ethers.js", "MetaMask", "WalletConnect", "ERC-721/1155", "Cross-Chain"],
    accent: "matrix-green",
  },
  {
    number: "06",
    icon: FileCode,
    title: "WordPress Design & Development",
    hook: "Fast, secure WordPress sites that you can actually manage.",
    description:
      "Custom WordPress builds, WooCommerce stores, membership platforms, and booking systems. We build clean, optimized sites — not bloated theme nightmares.",
    tags: ["WordPress", "WooCommerce", "Custom Themes", "Elementor", "Speed Optimization"],
    accent: "aquamarine",
  },
  {
    number: "07",
    icon: Palette,
    title: "Graphic Design & Brand Identity",
    hook: "First impressions close deals before you say a word.",
    description:
      "Logos, brand kits, social media creatives, ad banners, and pitch decks that look like they came from a global agency. Because your brand should match the quality of your product.",
    tags: ["Logo Design", "Brand Identity", "Social Creatives", "Ad Banners", "Pitch Decks"],
    accent: "matrix-green",
  },
  {
    number: "08",
    icon: Cloud,
    title: "Deployment, DevOps & Hosting",
    hook: "Your code should be live, fast, and never go down.",
    description:
      "We handle CI/CD pipelines, Vercel/Cloudflare deployments, Docker, and server configuration so your product ships reliably and scales without panic.",
    tags: ["Vercel", "Cloudflare", "GitHub Actions", "Docker", "CI/CD", "Railway", "AWS S3"],
    accent: "aquamarine",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicePillars() {
  return (
    <section id="services" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
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
            <span className="mr-1.5">{'//'}</span> What We Build For You
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            One Team.{" "}
            <span className="text-gradient-accent">Every Skill You Need to Compete Online.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            From your first landing page to a full AI-powered sales machine — we handle every layer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 xl:grid-cols-2"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            const isCyan = service.accent === "aquamarine";
            return (
              <motion.div
                key={service.number}
                variants={cardVariants}
                className="glass-panel glow-border group flex flex-col gap-6 rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.005] md:flex-row md:items-start"
              >
                {/* Number + Icon */}
                <div className="flex items-center gap-4 md:min-w-[180px]">
                  <span
                    className={`font-mono text-3xl font-bold ${
                      isCyan ? "text-aquamarine/30" : "text-matrix-green/30"
                    }`}
                  >
                    {service.number}
                  </span>
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isCyan
                        ? "border-aquamarine/20 bg-aquamarine/10 group-hover:border-aquamarine/40"
                        : "border-matrix-green/20 bg-matrix-green/10 group-hover:border-matrix-green/40"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        isCyan ? "text-aquamarine" : "text-matrix-green"
                      }`}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-bold text-white">{service.title}</h3>
                  <p className={`mb-2 text-sm font-semibold ${isCyan ? "text-aquamarine/80" : "text-matrix-green/80"}`}>
                    {service.hook}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
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
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
