// lib/blog/types.ts
// Single source of truth for blog post shape.
// Every field here either feeds the UI or feeds an SEO tag (meta, JSON-LD, sitemap).
// If you add a field, ask "does this help a reader, a crawler, or both?"

export type BlogCategory =
  | "Rescue Stories"
  | "Pricing & Process"
  | "Web3 & Blockchain"
  | "AI & Automation"
  | "Hiring Right";

export type Severity = "Critical" | "High" | "Moderate";

export interface Author {
  name: string;
  role: string;
  avatarUrl: string; // placeholder path for now, e.g. /authors/asim.jpg
  bio: string;
  sameAs: string[]; // LinkedIn, GitHub, etc — feeds Person schema
}

export interface FAQItem {
  question: string;
  answer: string; // plain text, no JSX — gets reused in FAQPage schema
}

export interface TocItem {
  id: string; // must match a heading id in body
  label: string;
  depth: 2 | 3;
}

export interface BlogPost {
  // --- identity & routing ---
  slug: string; // url-safe, matches /blog/[slug]
  title: string; // H1 + <title> base
  metaTitle?: string; // override <title> if it needs to differ from H1 (rare, keep <60 chars)
  metaDescription: string; // 150-160 chars, the actual SERP snippet copy
  ogImage: string; // 1200x630, absolute or root-relative path

  // --- classification (drives filtering + internal linking + topical clusters) ---
  category: BlogCategory;
  tags: string[];
  primaryKeyword: string; // the one keyword this post is built to win
  secondaryKeywords: string[];

  // --- dates (freshness signal, shown in UI + schema) ---
  publishedAt: string; // ISO 8601, e.g. "2026-06-10"
  updatedAt: string; // ISO 8601 — always >= publishedAt

  // --- editorial metadata ---
  author: Author;
  readingTimeMinutes: number;
  severity: Severity; // the "diagnostic ticket" signature element
  status: "Resolved" | "Ongoing Pattern"; // editorial framing, not a real ticket status

  // --- content ---
  excerpt: string; // shown on /blog list cards — should hook, not summarize
  hook: string; // the first 2-3 sentences, rendered large above the fold of the article
  bodyMarkdown: string; // markdown source (h2/h3 text must match toc labels for anchor ids)
  toc: TocItem[];
  faqs?: FAQItem[]; // optional — only include if genuinely useful, feeds FAQPage schema

  // --- internal linking (you control the SEO graph explicitly, not by accident) ---
  relatedSlugs: string[]; // 2-4 other post slugs
  linkedServiceSlug?: string; // e.g. "web-development" -> /services/web-development

  // --- conversion ---
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonLabel: string;
  ctaButtonHref: string;
}