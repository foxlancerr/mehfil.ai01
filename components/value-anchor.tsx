"use client";

import { motion } from "framer-motion";
import { Target, Layers, TrendingUp } from "lucide-react";

const VALUES = [
  {
    index: "01",
    icon: Target,
    title: "Strategy Before Design",
    description:
      "Every project starts with one question: what is this supposed to accomplish? Then we engineer the answer. Design without strategy is just decoration.",
  },
  {
    index: "02",
    icon: Layers,
    title: "Every Layer, One Team",
    description:
      "Web development, AI automation, SEO, digital marketing, Web3 — all under one roof. No coordination overhead. No misaligned freelancers. One point of contact.",
  },
  {
    index: "03",
    icon: TrendingUp,
    title: "Built to Convert",
    description:
      "We don't build websites — we build growth machines. Every element is engineered to capture attention, build trust, and move visitors toward action.",
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
      {/* Blueprint dot grid */}
      <div className="dot-grid-fade pointer-events-none absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-[1100px]">
        {/* Ghost watermark */}
        <span aria-hidden className="ghost-text top-36 right-0 text-[90px] md:text-[150px]">
          WHY US
        </span>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 max-w-2xl"
        >
          <p className="coord-label mb-4">§ 01 / THE PROBLEM WE SOLVE</p>
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
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
          className="relative grid gap-5 md:grid-cols-3"
        >
          {VALUES.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="bracket-frame scan-hover group relative border border-subtle/50 bg-surface/40 p-7 transition-colors duration-300 hover:border-crimson/30"
              >
                {/* Oversized index number bleeding off the top */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-4 top-2 select-none font-mono text-5xl font-bold text-white/[0.04] transition-colors duration-300 group-hover:text-crimson/10"
                >
                  {item.index}
                </span>

                <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-crimson/20 bg-crimson/10 transition-colors duration-300 group-hover:border-crimson/40 group-hover:bg-crimson/15">
                  <Icon className="h-5 w-5 text-crimson" />
                </div>
                <h3 className="relative mb-3 text-lg font-bold text-white">{item.title}</h3>
                <p className="relative text-sm leading-relaxed text-text-muted">
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
