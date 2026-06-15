"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { useUIStore } from "@/store/use-store";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#offers", label: "// Offers" },
  { href: "#services", label: "// Services" },
  { href: "#case-studies", label: "// Work" },
  { href: "#about", label: "// About" },
  { href: "#testimonials", label: "// Reviews" },
  { href: "#pricing", label: "// Pricing" },
  { href: "#contact", label: "// Contact" },
];

export default function Navbar() {
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "glass-panel-strong border-b border-subtle/50"
            : "bg-transparent"
        )}
      >
          <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-matrix-green/10 border border-matrix-green/20 group-hover:bg-matrix-green/20 transition-colors">
              <Terminal className="h-4 w-4 text-matrix-green" />
            </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white">
                Mehfil<span className="text-matrix-green">.ai</span>
              </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 font-mono text-xs font-medium tracking-wide text-text-muted transition-colors duration-200 hover:bg-surface/60 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.fiverr.com/foxlancerr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden text-xs lg:inline-flex"
            >
              Get a Free Audit
            </a>
            <button
              onClick={toggleMobileMenu}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-subtle text-text-muted transition-colors hover:border-matrix-green/40 hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 z-40 glass-panel-strong border-b border-subtle/50 p-4 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={toggleMobileMenu}
                  className="rounded-lg px-3.5 py-2.5 font-mono text-xs font-medium tracking-wide text-text-muted transition-colors duration-200 hover:bg-surface/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.fiverr.com/foxlancerr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3 text-sm justify-center"
              >
                Get a Free Audit
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}