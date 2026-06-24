import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import { posts } from "@/constants/blog-posts";
import { BlogPost, BlogCategory } from "@/lib/blog/types";

export const SITE_URL = "https://mehfils.org";

export function getAllPosts(): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getAllCategories(): BlogCategory[] {
  return Array.from(new Set(posts.map((p) => p.category)));
}

export function getPostsByCategory(category: BlogCategory | "All"): BlogPost[] {
  const all = getAllPosts();
  if (category === "All") return all;
  return all.filter((p) => p.category === category);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}

export function getCanonicalUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}