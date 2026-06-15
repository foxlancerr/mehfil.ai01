"use client";

import { motion } from "framer-motion";
import { Target, Layers, TrendingUp } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "Strategy Before Design",
    description:
      "Every project starts with one question: what is this supposed to accomplish? Then we engineer the answer. Design without strategy is just decoration.",
    accent: "matrix-green",
  },
  {
    icon: Layers,
    title: "Every Layer, One Team",
    description:
      "Web development, AI automation, SEO, digital marketing, Web3 — all under one roof. No coordination overhead. No misaligned freelancers. One point of contact.",
    accent: "aquamarine",
  },
  {
    icon: TrendingUp,
    title: "Built to Convert",
    description:
      "We don't build websites — we build growth machines. Every element is engineered to capture attention, build trust, and move visitors toward action.",
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
    <section className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> The Problem We Solve
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Most Agencies Give You a Website.{" "}
            <span className="text-gradient-accent">We Give You a Growth Machine.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            You&apos;ve probably hired someone who delivered a beautiful design — and then nothing
            happened. No traffic. No leads. No revenue. That&apos;s because design without strategy
            is just decoration. At mehfil, we engineer the answer.
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
