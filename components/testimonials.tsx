"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Absolutely rescued my launch. My prototype was throwing endless errors on deployment. He refactored the entire system into clean Next.js and had it live on Vercel in no time. Absolute lifesaver.",
    author: "SaaS Founder",
    location: "United States",
    rating: 5,
  },
  {
    quote:
      "Elite technical expertise. He took our complex Web3 frontend, added strict type safety, and fixed our broken wallet connections. Highly recommended for any serious startup.",
    author: "Web3 Project Lead",
    location: "Germany",
    rating: 5,
  },
  {
    quote:
      "Outstanding attention to detail. Complete SaaS migration from a fragile AI prototype into a clean, maintainable codebase. The state management and database integration were flawless.",
    author: "CTO",
    location: "United Kingdom",
    rating: 5,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 lg:px-8 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> What Clients Say
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Real Feedback.{" "}
            <span className="text-gradient-accent">Zero Filtering.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
            Pulled straight from verified 5-star reviews on Fiverr.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="glass-panel glow-border group flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:scale-[1.015]"
            >
              {/* Quote Icon */}
              <Quote className="mb-4 h-8 w-8 text-matrix-green/20" />

              {/* Stars */}
              <div className="mb-4 flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-matrix-green"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote Text */}
              <p className="mb-6 flex-1 text-sm leading-relaxed text-text-muted italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-subtle/50 pt-4">
                <p className="text-sm font-semibold text-white">
                  {testimonial.author}
                </p>
                <p className="mt-0.5 font-mono text-xs text-text-muted/60">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}