import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  getCanonicalUrl,
  formatDate,
  SITE_URL,
} from "@/lib/utils";
import {
  buildArticleSchema,
  buildFaqSchema,
  buildBreadcrumbSchema,
} from "@/lib/blog/schema";
import { DiagnosticTicket } from "@/components/blog/diagnostic-ticket";
import { TableOfContents } from "@/components/blog/table-of-contents";
import { AuthorBio } from "@/components/blog/author-bio";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ArticleCta } from "@/components/blog/article-cta";
import { ShareBar } from "@/components/blog/share-bar";
import { ArticleFaq } from "@/components/blog/article-faq";
import { ArticleBody } from "@/components/blog/article-body";
import { ArticleCover } from "@/components/blog/article-cover";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = getCanonicalUrl(post.slug);

  return {
    title: `${post.metaTitle ?? post.title} | Mehfil.ai`,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: { canonical },
    authors: [{ name: post.author.name }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url: canonical,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: `${SITE_URL}${post.ogImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: [`${SITE_URL}${post.ogImage}`],
    },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const articleSchema = buildArticleSchema(post);
  const faqSchema = buildFaqSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema(post);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="relative overflow-hidden px-6 py-14 lg:px-12 lg:py-20">
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />

        <div className="relative mx-auto max-w-[1100px]">
          <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-text-muted/60">
            <Link href="/" className="transition-colors hover:text-crimson-light">
              Home
            </Link>
            <span className="mx-1.5 text-subtle">/</span>
            <Link href="/blog" className="transition-colors hover:text-crimson-light">
              Blog
            </Link>
            <span className="mx-1.5 text-subtle">/</span>
            <span className="text-text-muted/40">{post.category}</span>
          </nav>

          <div className="max-w-3xl">
            <p className="section-label w-fit">{post.category}</p>

            <h1 className="mt-5 text-[clamp(28px,4.5vw,44px)] font-black leading-[1.08] tracking-tight text-white">
              {post.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text-muted">{post.hook}</p>

            <ArticleCover src={post.ogImage} alt={post.title} />

            <div className="mt-8">
              <DiagnosticTicket post={post} />
            </div>

            <div className="mt-6">
              <ShareBar url={getCanonicalUrl(post.slug)} title={post.title} />
            </div>
          </div>

          {post.toc.length > 0 && (
            <div className="mt-8 lg:hidden">
              <TableOfContents items={post.toc} />
            </div>
          )}

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
            <ArticleBody markdown={post.bodyMarkdown} toc={post.toc} />
            {post.toc.length > 0 && (
              <aside className="hidden lg:block">
                <div className="sticky top-28">
                  <TableOfContents items={post.toc} />
                </div>
              </aside>
            )}
          </div>

          {post.faqs && post.faqs.length > 0 && <ArticleFaq faqs={post.faqs} />}

          <ArticleCta post={post} />

          <div className="mt-10">
            <AuthorBio author={post.author} />
          </div>

          <p className="mt-6 font-mono text-[11px] text-text-muted/50">
            Published {formatDate(post.publishedAt)}
            {post.updatedAt !== post.publishedAt &&
              ` · Updated ${formatDate(post.updatedAt)}`}
          </p>

          <RelatedPosts posts={related} />
        </div>
      </article>
    </>
  );
}
