"use client";

import { useEffect, useState } from "react";
import { TocItem } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items.length) return;

    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  }

  if (!items.length) return null;

  return (
    <nav aria-label="Table of contents" className="glass-panel p-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/60">
        On This Page
      </p>
      <ul className="mt-4 space-y-1.5 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.depth === 3 ? "ml-3" : ""}>
            <button
              type="button"
              onClick={() => scrollToId(item.id)}
              className={cn(
                "w-full text-left transition-colors duration-200",
                activeId === item.id
                  ? "text-crimson-light"
                  : "text-text-muted hover:text-white"
              )}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
