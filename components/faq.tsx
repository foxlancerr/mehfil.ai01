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

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Common Questions
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Questions We Hear{" "}
            <span className="text-gradient-accent">Every Day</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="glass-panel group rounded-xl overflow-hidden transition-colors duration-300 data-[state=open]:border-matrix-green/20"
              >
                <Accordion.Trigger className="accordion-trigger flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-all duration-200 hover:bg-surface/30">
                  <span className="text-sm font-semibold text-white leading-relaxed">
                    {faq.question}
                  </span>
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-subtle bg-surface/50 transition-colors duration-300 group-data-[state=open]:border-matrix-green/30 group-data-[state=open]:bg-matrix-green/10">
                    <Plus className="accordion-icon h-3.5 w-3.5 text-text-muted transition-transform duration-300 group-data-[state=open]:text-matrix-green" />
                  </div>
                </Accordion.Trigger>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-[slideDown_300ms_ease-out] data-[state=closed]:animate-[slideUp_300ms_ease-out]">
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-sm leading-relaxed text-text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}