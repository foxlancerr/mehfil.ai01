"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { BlogCategory } from "@/lib/blog/types";
import { cn } from "@/lib/utils";

export function CategoryFilter({
  categories,
  active,
}: {
  categories: BlogCategory[];
  active: BlogCategory | "All";
}) {
  const router = useRouter();
  const params = useSearchParams();

  function setCategory(cat: BlogCategory | "All") {
    const next = new URLSearchParams(params.toString());
    if (cat === "All") {
      next.delete("category");
    } else {
      next.set("category", cat);
    }
    router.push(`/blog${next.toString() ? `?${next.toString()}` : ""}`, {
      scroll: false,
    });
  }

  const all: (BlogCategory | "All")[] = ["All", ...categories];

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter posts by category">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => setCategory(cat)}
          aria-pressed={active === cat}
          className={cn(
            "rounded-full border px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-all duration-200",
            active === cat
              ? "border-crimson/50 bg-crimson/10 text-crimson-light shadow-[0_0_20px_rgba(225,29,72,0.15)]"
              : "glass-panel border-subtle/60 text-text-muted hover:border-crimson/30 hover:text-white"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
