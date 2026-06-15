"use client";

import { motion } from "framer-motion";

const VALUES = [
  {
    index: "01",
    title: "Strategy Before Design",
    description:
      "Every project starts with one question: what is this supposed to accomplish? Then we engineer the answer. Design without strategy is just decoration.",
  },
  {
    index: "02",
    title: "Every Layer, One Team",
    description:
      "Web development, AI automation, SEO, digital marketing, Web3 — all under one roof. No coordination overhead. No misaligned freelancers. One point of contact.",
  },
  {
    index: "03",
    title: "Built to Convert",
    description:
      "We don't build websites — we build growth machines. Every element is engineered to capture attention, build trust, and move visitors toward action.",
  },
];

export default function ValueAnchor() {
  return (
    <section className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      {/* Subtle dot texture */}
      <div className="dot-grid-fade pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative mx-auto max-w-[1100px]">

        {/* Section header — two-column asymmetric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="coord-label mb-8">§ 01 / THE PROBLEM WE SOLVE</p>

          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20 lg:items-end">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-[44px] lg:leading-[1.05]">
              Most Agencies Give You a Website.
            </h2>
            <div>
              <p className="mb-3 text-lg font-bold text-crimson/80 leading-tight">
                We Give You a Growth Machine.
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                You&apos;ve probably hired someone who delivered a beautiful design — and then
                nothing happened. No traffic. No leads. No revenue. Design without strategy
                is just decoration. At mehfil, we engineer the answer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Accent rule */}
        <div className="mb-0 h-px bg-gradient-to-r from-crimson/25 via-subtle/50 to-transparent" />

        {/* Values list — numbered editorial format */}
        <div className="divide-y divide-subtle/30">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group -mx-4 grid grid-cols-1 gap-4 px-4 py-10 transition-colors duration-300 hover:bg-surface/30 lg:grid-cols-[88px_1fr_2fr] lg:items-start lg:gap-10"
            >
              {/* Oversized index number */}
              <span
                aria-hidden
                className="font-mono text-5xl font-black leading-none text-text-muted/[0.12] transition-colors duration-300 group-hover:text-crimson/15 lg:pt-1 lg:text-right"
              >
                {item.index}
              </span>

              {/* Title */}
              <div className="lg:pt-1">
                <h3 className="text-lg font-bold leading-snug text-white md:text-xl">
                  {item.title}
                </h3>
                {/* Accent underline on hover */}
                <div className="mt-2 h-px w-0 bg-crimson/40 transition-all duration-500 group-hover:w-full" />
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="h-px bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      </div>
    </section>
  );
}
