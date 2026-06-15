"use client";

import { Terminal, Github, Linkedin, Instagram, Facebook, MessageCircle } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Work", href: "#case-studies" },
      { label: "About", href: "#about" },
      { label: "Pricing", href: "#pricing" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Fiverr Profile", href: "https://www.fiverr.com/foxlancerr" },
      { label: "LinkedIn",  href: "https://www.linkedin.com/in/foxlancerr/" },
      { label: "GitHub",    href: "https://github.com/foxlancerr" },
      { label: "Instagram", href: "https://www.instagram.com/foxlancerr/" },
      { label: "WhatsApp",  href: "https://wa.me/923201942001?text=Hi%20mehfil%21%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20connect%3F" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "AI Automation", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "SEO & Growth", href: "#services" },
      { label: "Web3 & Blockchain", href: "#services" },
    ],
  },
];

const SOCIAL_LINKS = [
  { icon: Linkedin,    label: "LinkedIn",  href: "https://www.linkedin.com/in/foxlancerr/" },
  { icon: Github,      label: "GitHub",    href: "https://github.com/foxlancerr" },
  { icon: Instagram,   label: "Instagram", href: "https://www.instagram.com/foxlancerr/" },
  { icon: Facebook,    label: "Facebook",  href: "https://www.facebook.com/profile.php?id=100091461979708" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/923201942001?text=Hi%20mehfil%21%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20connect%3F" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-subtle/40 px-6 lg:px-12 py-16">
      {/* Top ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

   

      <div className="mx-auto max-w-[1100px]">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-matrix-green/10 border border-matrix-green/20">
                <Terminal className="h-4 w-4 text-matrix-green" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Mehfil<span className="text-matrix-green"></span>
              </span>
            </a>
            <p className="mb-2 text-sm leading-relaxed text-text-muted/60">
              Full-Stack Web Development · AI Automation · Digital Marketing · SEO · Web3 ·
              WordPress · Graphic Design · Deployment
            </p>
            <p className="mb-6 text-sm text-text-muted/40">
              Serving clients globally from Pakistan 🇵🇰
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-2">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle/50 text-text-muted/50 transition-all duration-200 hover:border-crimson/40 hover:bg-crimson/8 hover:text-crimson"
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
                        ? { target: "_blank", rel: "noopener noreferrer" }
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
            &copy; {new Date().getFullYear()} mehfil · Built by Muhammad Asim
          </p>
          <p className="font-mono text-xs text-text-muted/30">
            mehfil — One agency. Every skill you need.
          </p>
        </div>
      </div>
    </footer>
  );
}
