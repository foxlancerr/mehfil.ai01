"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { BlogPost } from "@/lib/blog/types";
import { formatDate, cn } from "@/lib/utils";
import { BlogImage } from "./blog-image";

export function BlogCard({
  post,
  index = 0,
}: {
  post: BlogPost;
  index?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08 }}
    >
      <Link
        href={`/blog/${post.slug}`}
        className={cn(
          "group relative block overflow-hidden",
          "glass-panel glow-border scan-hover bracket-frame",
          "transition-all duration-300 hover:-translate-y-1"
        )}
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-subtle/50 bg-surface">
          <BlogImage
            src={post.ogImage}
            alt={post.title}
            fill
            placeholderLabel={post.category}
            className="object-cover opacity-80 transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/20 to-transparent" />
          <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-crimson-light/80">
            {post.category}
          </span>
        </div>

        <div className="p-5">
          <div className="mb-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-wide text-text-muted/70">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span aria-hidden>·</span>
            <span>{post.readingTimeMinutes} min read</span>
            <span aria-hidden>·</span>
            <span className="text-crimson/60">{post.severity}</span>
          </div>

          <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-crimson-light">
            {post.title}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-text-muted">
            {post.excerpt}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-subtle/60 bg-surface/60 px-2 py-0.5 font-mono text-[10px] text-text-muted/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
