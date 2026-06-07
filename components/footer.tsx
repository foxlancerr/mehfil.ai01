"use client";

import { Terminal, Github, Linkedin, Twitter } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Deployments", href: "#deployments" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Fiverr Profile", href: "https://www.fiverr.com/foxlancerr" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
    ],
  },
  {
    title: "Stack",
    links: [
      { label: "Next.js", href: "#" },
      { label: "TypeScript", href: "#" },
      { label: "Tailwind CSS", href: "#" },
      { label: "Supabase", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-subtle/40 px-6 lg:px-8 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-matrix-green/10 border border-matrix-green/20">
                <Terminal className="h-4 w-4 text-matrix-green" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Mehfil<span className="text-matrix-green">.ai</span>
              </span>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-text-muted/60">
              The productized engineering agency that transforms fragile AI
              prototypes into production-grade applications.
            </p>
            <div className="flex gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle/50 text-text-muted/50 transition-colors hover:border-matrix-green/30 hover:text-matrix-green"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-text-muted/60">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted/60 transition-colors hover:text-white"
                      {...(link.href.startsWith("http")
                        ? {
                            target: "_blank",
                            rel: "noopener noreferrer",
                          }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-subtle/30 pt-8 sm:flex-row">
          <p className="font-mono text-xs text-text-muted/40">
            &copy; {new Date().getFullYear()} Mehfil.ai — All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-muted/30">
            Engineered with precision. Deployed with confidence.
          </p>
        </div>
      </div>
    </footer>
  );
}