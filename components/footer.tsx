"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Github, Linkedin, Instagram, Facebook, MessageCircle, ArrowRight } from "lucide-react";

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
      { label: "Blog", href: "/blog", absolute: true },
      { label: "FAQ", href: "#faq" },
      { label: "Fiverr Profile", href: "https://www.fiverr.com/foxlancerr" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/foxlancerr/" },
      { label: "GitHub", href: "https://github.com/foxlancerr" },
      { label: "Instagram", href: "https://www.instagram.com/foxlancerr/" },
      {
        label: "WhatsApp",
        href: "https://wa.me/923201942001?text=Hi%20mehfil%21%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20connect%3F",
      },
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
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/foxlancerr/" },
  { icon: Github, label: "GitHub", href: "https://github.com/foxlancerr" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/foxlancerr/" },
  { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=100091461979708" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/923201942001?text=Hi%20mehfil%21%20I%27m%20interested%20in%20your%20digital%20services.%20Can%20we%20connect%3F",
  },
];

function resolveHref(href: string, isHome: boolean, absolute?: boolean) {
  if (absolute || href.startsWith("http") || href.startsWith("/")) return href;
  return isHome ? href : `/${href}`;
}

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="relative border-t border-subtle/40 px-6 pb-12 pt-0 lg:px-12">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-crimson/25 to-transparent" />

      <div className="relative overflow-hidden border-b border-subtle/30 py-12 lg:py-16">
        <p
          aria-hidden
          className="select-none text-center font-black leading-none tracking-[-0.04em] text-white/[0.03]"
          style={{ fontSize: "clamp(80px, 18vw, 200px)" }}
        >
          mehfil.
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-text-muted/40">
              One agency. Every skill you need to compete online.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4">
              <a href={resolveHref("#contact", isHome)} className="btn-primary text-sm">
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1100px] pt-12">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-matrix-green/20 bg-matrix-green/10">
                <Terminal className="h-4 w-4 text-matrix-green" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Mehfil<span className="text-matrix-green"></span>
              </span>
            </Link>
            <p className="mb-2 text-sm leading-relaxed text-text-muted/60">
              Full-Stack Web Development · AI Automation · Digital Marketing · SEO · Web3 ·
              WordPress · Graphic Design · Deployment
            </p>
            <p className="mb-6 text-sm text-text-muted/40">
              Serving clients globally from Pakistan 🇵🇰
            </p>

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

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-text-muted/60">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => {
                  const href = resolveHref(
                    link.href,
                    isHome,
                    "absolute" in link ? link.absolute : false
                  );
                  const isExternal = href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal || link.href.startsWith("/") ? (
                        <a
                          href={href}
                          className="text-sm text-text-muted/60 transition-colors hover:text-white"
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <a
                          href={href}
                          className="text-sm text-text-muted/60 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

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
