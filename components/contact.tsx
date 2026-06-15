"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

const CONTACT_OPTIONS = [
  {
    icon: Phone,
    label: "Book a Free 30-min Strategy Call",
    value: "Schedule via Calendly",
    href: "https://calendly.com/muhammadasim-code",
    accent: "matrix-green",
  },
  {
    icon: MessageCircle,
    label: "Message on WhatsApp",
    value: "+92 320 194 2001",
    href: "https://wa.me/923201942001?text=Hi%20Mehfil.ai%21%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20connect%3F",
    accent: "aquamarine",
  },
  {
    icon: Mail,
    label: "Send an Email",
    value: "muhammadasim.code@gmail.com",
    href: "mailto:muhammadasim.code@gmail.com",
    accent: "matrix-green",
  },
  {
    icon: ExternalLink,
    label: "Hire on Fiverr",
    value: "fiverr.com/foxlancerr",
    href: "https://www.fiverr.com/foxlancerr",
    accent: "aquamarine",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 lg:px-12 py-24 lg:py-32">
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-subtle/50 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-matrix-green/[0.04] blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-4xl relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="section-label mb-4 inline-flex">
            <span className="mr-1.5">{'//'}</span> Let&apos;s Build Something
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to Stop Leaving{" "}
            <span className="text-gradient-accent">Money on the Table?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-text-muted">
            Most businesses lose clients every day to competitors with better websites and smarter
            marketing. Let&apos;s fix that — starting this week.
          </p>
        </motion.div>

        {/* Contact Options Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 grid gap-4 sm:grid-cols-2"
        >
          {CONTACT_OPTIONS.map((option, index) => {
            const Icon = option.icon;
            const isCyan = option.accent === "aquamarine";
            return (
              <motion.a
                key={option.label}
                href={option.href}
                target={option.href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                className="glass-panel glow-border group flex items-center gap-4 rounded-xl p-5 transition-all duration-300 hover:scale-[1.015]"
              >
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                    isCyan
                      ? "border-aquamarine/20 bg-aquamarine/10 group-hover:border-aquamarine/40"
                      : "border-matrix-green/20 bg-matrix-green/10 group-hover:border-matrix-green/40"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isCyan ? "text-aquamarine" : "text-matrix-green"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-mono text-text-muted/60 uppercase tracking-widest mb-0.5">
                    {option.label}
                  </p>
                  <p className="text-sm font-semibold text-white truncate">{option.value}</p>
                </div>
                <ArrowRight className="h-4 w-4 shrink-0 text-text-muted/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Urgency Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-panel inline-flex items-center gap-2.5 rounded-full px-5 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-status-ping rounded-full bg-crimson opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-crimson" />
            </span>
            <span className="font-mono text-xs text-text-muted">
              Currently taking on <span className="text-white font-semibold">3 new clients</span> this month.
              Spots fill fast.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
