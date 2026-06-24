import { BlogPost } from "@/lib/blog/types";
import { SITE_URL, getCanonicalUrl } from "@/lib/utils";

export function buildArticleSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE_URL}${post.ogImage}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      url: post.author.sameAs[0],
      sameAs: post.author.sameAs,
    },
    publisher: {
      "@type": "Organization",
      name: "Mehfil.ai",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-placeholder.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": getCanonicalUrl(post.slug),
    },
    keywords: [post.primaryKeyword, ...post.secondaryKeywords].join(", "),
    articleSection: post.category,
  };
}

export function buildFaqSchema(post: BlogPost) {
  if (!post.faqs || post.faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: getCanonicalUrl(post.slug),
      },
    ],
  };
}