"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We've delivered projects for clients in the US, UK, Germany, and across the Gulf. Time zones are not a problem — we work async and keep you updated at every milestone.",
  },
  {
    question: "I have an existing website. Can you improve it instead of rebuilding?",
    answer:
      "Absolutely. We offer audits, speed optimization, redesigns, and feature additions. Send us your URL and we'll tell you exactly what's holding it back.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Landing pages: 3–5 days. Full websites: 7–14 days. SaaS or Web3 apps: 3–6 weeks. AI automation systems: 1–3 weeks depending on complexity.",
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Yes. We offer monthly retainer packages that cover updates, performance monitoring, ad optimization, and priority support.",
  },
  {
    question: "Can you handle both the website and the marketing?",
    answer:
      "That's exactly what we're designed for. Most agencies do one or the other. We build the asset and then drive traffic to it.",
  },
];

const SIDEBAR_STATS = [
  { value: "3–5d", label: "Landing pages" },
  { value: "2wks", label: "Full websites" },
  { value: "6+", label: "Countries" },
  { value: "5 ★", label: "Fiverr rating" },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="grid gap-16 lg:grid-cols-[320px_1fr] lg:items-start">

          {/* ── Left: sticky section header ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="lg:sticky lg:top-28"
          >
            <p className="coord-label mb-6">§ 07 / COMMON QUESTIONS</p>

            <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl lg:text-[38px] lg:leading-[1.1]">
              Questions We<br />
              Hear{" "}
              <span className="text-gradient-accent">Every Day</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Can&apos;t find your answer? We respond to every inquiry within 24 hours.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-crimson/60 transition-colors hover:text-crimson"
            >
              Ask a question →
            </a>

            {/* Quick stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-2">
              {SIDEBAR_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="border border-subtle/30 p-3.5 transition-colors duration-200 hover:border-crimson/20"
                >
                  <p className="text-xl font-black text-white leading-none">{stat.value}</p>
                  <p className="mt-1.5 font-mono text-[9px] uppercase tracking-widest text-text-muted/45 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <Accordion.Root
              type="single"
              collapsible
              className="divide-y divide-subtle/30 border-t border-subtle/30"
            >
              {FAQS.map((faq, index) => (
                <Accordion.Item key={index} value={`item-${index}`} className="group">
                  <Accordion.Trigger className="accordion-trigger flex w-full items-center justify-between gap-6 py-6 text-left transition-all duration-200 hover:pl-1.5">
                    <span className="flex items-baseline gap-4">
                      <span className="shrink-0 font-mono text-xs tabular-nums text-crimson/35">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[15px] font-semibold leading-relaxed text-white">
                        {faq.question}
                      </span>
                    </span>
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-subtle/60 bg-surface/50 transition-all duration-300 group-data-[state=open]:border-crimson/35 group-data-[state=open]:bg-crimson/10">
                      <Plus className="accordion-icon h-3.5 w-3.5 text-text-muted/60 transition-transform duration-300 group-data-[state=open]:text-crimson" />
                    </div>
                  </Accordion.Trigger>

                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_300ms_ease-out] data-[state=closed]:animate-[slideUp_300ms_ease-out]">
                    <p className="pb-6 pl-10 text-[14px] leading-relaxed text-text-muted">
                      {faq.answer}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
