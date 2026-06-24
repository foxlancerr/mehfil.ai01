import { BlogPost } from "@/lib/blog/types";
import { ArrowRight } from "lucide-react";

export function ArticleCta({ post }: { post: BlogPost }) {
  return (
    <div className="glass-panel-strong glow-border bracket-frame relative mt-16 overflow-hidden p-8 sm:p-10">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-crimson/10 blur-3xl" />
      <p className="coord-label relative">Next Step</p>
      <h2 className="relative mt-3 text-2xl font-black tracking-tight text-white sm:text-3xl">
        {post.ctaHeadline}
      </h2>
      <p className="relative mt-3 max-w-xl text-sm leading-relaxed text-text-muted">
        {post.ctaSubtext}
      </p>
      <a
        href={post.ctaButtonHref}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary relative mt-6 inline-flex text-sm"
      >
        {post.ctaButtonLabel}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}
