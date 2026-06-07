"use client";

import { motion } from "framer-motion";
import { Shield, Database, DollarSign } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Zero AI Token Bleed",
    description:
      "AI builders don't have long-term architectural foresight. They generate massive technical debt, duplicate code, and hidden API leaks. We clean up the chaos and protect your infrastructure.",
    accent: "matrix-green",
  },
  {
    icon: Database,
    title: "Enterprise Plumbing",
    description:
      "We don't just build beautiful interfaces; we wire up heavy-duty database backends (PostgreSQL / Supabase), implement bulletproof authentication rails, and configure secure Stripe billing engines.",
    accent: "aquamarine",
  },
  {
    icon: DollarSign,
    title: "Vercel Cost Optimization ($0/mo)",
    description:
      "Messy AI queries can trigger unexpected cloud hosting bills. We fine-tune serverless function execution states so your live SaaS operates comfortably inside free tiers wherever possible.",
    accent: "matrix-green",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ValueAnchor() {
  return (
    <section className="relative px-6 lg:px-8 py-24 lg:py-32">
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
            <span className="mr-1.5">{'//'}</span> Why Partner With Us
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Most freelancers sell &ldquo;clean code.&rdquo;{" "}
            <span className="text-gradient-accent">We sell risk mitigation.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            We don&apos;t just write code. We eliminate the hidden costs, silent
            failures, and architectural landmines that AI-generated prototypes
            leave behind.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {VALUES.map((item) => {
            const Icon = item.icon;
            const isCyan = item.accent === "aquamarine";
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glass-panel glow-border group rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.015]"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${
                    isCyan
                      ? "border-aquamarine/20 bg-aquamarine/10 group-hover:border-aquamarine/40 group-hover:bg-aquamarine/15"
                      : "border-matrix-green/20 bg-matrix-green/10 group-hover:border-matrix-green/40 group-hover:bg-matrix-green/15"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 ${
                      isCyan ? "text-aquamarine" : "text-matrix-green"
                    }`}
                  />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}