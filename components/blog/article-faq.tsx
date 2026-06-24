"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { FAQItem } from "@/lib/blog/types";

export function ArticleFaq({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs.length) return null;

  return (
    <section className="mt-16">
      <p className="coord-label mb-4">§ COMMON QUESTIONS</p>
      <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl">
        Common Questions
      </h2>

      <Accordion.Root
        type="single"
        collapsible
        className="mt-8 divide-y divide-subtle/30 border-t border-subtle/30"
      >
        {faqs.map((faq, index) => (
          <Accordion.Item key={faq.question} value={`faq-${index}`} className="group">
            <Accordion.Trigger className="accordion-trigger flex w-full items-center justify-between gap-6 py-5 text-left transition-all duration-200 hover:pl-1.5">
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
              <p className="pb-5 pl-10 text-sm leading-relaxed text-text-muted">
                {faq.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  );
}
