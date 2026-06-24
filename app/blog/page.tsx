import { Metadata } from "next";

import { Suspense } from "react";

import { BlogCard } from "@/components/blog/blog-card";

import { BlogHero } from "@/components/blog/blog-hero";

import { CategoryFilter } from "@/components/blog/category-filter";

import { getAllCategories, getPostsByCategory, SITE_URL } from "@/lib/utils";

import { BlogCategory } from "@/lib/blog/types";



export const metadata: Metadata = {

  title: "Blog — Real Fixes, Honest Pricing, No Filler | Mehfil.ai",

  description:

    "Field notes from web development, AI automation, and Web3 projects — what actually breaks, what it costs to fix, and how to avoid it next time.",

  alternates: { canonical: `${SITE_URL}/blog` },

  openGraph: {

    title: "Mehfil.ai Blog",

    description:

      "Real fixes, honest pricing, no filler. Field notes from real projects.",

    url: `${SITE_URL}/blog`,

    type: "website",

    images: [{ url: `${SITE_URL}/og/blog-index.jpg`, width: 1200, height: 630 }],

  },

  twitter: {

    card: "summary_large_image",

    title: "Mehfil.ai Blog",

    description: "Real fixes, honest pricing, no filler.",

  },

};



export default async function BlogIndexPage({

  searchParams,

}: {

  searchParams: Promise<{ category?: string }>;

}) {

  const { category } = await searchParams;

  const categories = getAllCategories();

  const active = (category as BlogCategory) || "All";

  const posts = getPostsByCategory(active);



  return (

    <>

      <BlogHero />



      <section className="px-6 py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-[1100px]">

          <Suspense fallback={null}>

            <CategoryFilter categories={categories} active={active} />

          </Suspense>



          {posts.length === 0 ? (

            <p className="mt-12 text-text-muted">No posts in this category yet.</p>

          ) : (

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {posts.map((post, index) => (

                <BlogCard key={post.slug} post={post} index={index} />

              ))}

            </div>

          )}

        </div>

      </section>

    </>

  );

}

