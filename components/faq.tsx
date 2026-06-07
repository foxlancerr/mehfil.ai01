"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    question: "Can you preserve my existing design layer while fixing the underlying code?",
    answer:
      "Yes. We keep your exact layout, visual branding, and styling completely intact while swapping out the messy, buggy AI script underneath for type-safe, production-grade architecture. Your users won't notice a visual difference — they'll just notice everything works.",
  },
  {
    question: "How do you handle project handovers?",
    answer:
      "You receive full repository ownership via GitHub. We handle the entire deployment process to your own Vercel and Supabase accounts, ensuring everything is fully optimized and running smoothly before sign-off. You get complete documentation of all architectural decisions made.",
  },
  {
    question: "Can I consult with you before initiating an official order?",
    answer:
      "Absolutely. In fact, we encourage it. Click any checkout button to land on our secure Fiverr profile where you can send over your current project link for a preliminary assessment. We'll review your codebase and give you a clear breakdown of what needs fixing before you commit.",
  },
  {
    question: "What technologies and frameworks do you specialize in?",
    answer:
      "Our core stack is Next.js (App Router), TypeScript, Tailwind CSS, Zustand for state management, Supabase/PostgreSQL for databases, and ethers.js/wagmi for Web3 integrations. We also work extensively with Stripe, Clerk/Auth.js for authentication, and various cloud storage providers.",
  },
  {
    question: "How fast can you turn around an emergency fix?",
    answer:
      "For our 24-Hour Panic Offer, we begin diagnostics immediately upon order confirmation. Most critical deployment failures, hydration errors, and build breaks are isolated within 4-8 hours. Full fixes for moderate-complexity issues typically complete within 24-48 hours.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative px-6 lg:px-8 py-24 lg:py-32">
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
            <span className="mr-1.5">{'//'}</span> Engineering FAQs
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Every question answered,{" "}
            <span className="text-gradient-accent">zero hesitation</span>
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