"use client";

import { Linkedin, Twitter, Link2, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const iconClass =
    "flex h-8 w-8 items-center justify-center rounded-lg text-text-muted transition-all duration-200 hover:bg-surface/80 hover:text-crimson-light";

  return (
    <div className="flex items-center gap-3 border-y border-subtle/40 py-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted/60">
        Share
      </span>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className={iconClass}
      >
        <Linkedin size={16} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className={iconClass}
      >
        <Twitter size={16} />
      </a>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className={cn(iconClass, copied && "text-crimson-light")}
      >
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
    </div>
  );
}
