import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL = "https://mehfils.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mehfil.ai — Web Development, AI Automation & Digital Marketing Agency",
    template: "%s | Mehfil.ai",
  },
  description:
    "Mehfil.ai by Muhammad Asim — a full-service digital agency offering web development, AI automation, SEO, paid ads, Web3 & blockchain, WordPress, graphic design, and deployment services. One agency. Every skill you need.",
  keywords: [
    "digital agency Pakistan",
    "full stack web development agency",
    "AI automation service",
    "Next.js development agency",
    "Web3 development Pakistan",
    "AI chatbot integration",
    "SEO agency Pakistan",
    "digital marketing agency Pakistan",
    "website development Pakistan",
    "SaaS development agency",
    "Muhammad Asim developer",
    "Mehfil.ai",

    "hire web developer Pakistan",
    "affordable web development",
    "n8n workflow automation",
    "LangChain RAG pipeline",
    "WordPress development agency",
    "blockchain smart contract development",
    "Fiverr top rated web developer",
    "fix broken AI generated website",
    "production grade Next.js development",
    "Google Ads Meta Ads management",
    "convert AI prototype to production",
    "graphic design branding agency",
  ],
  authors: [{ name: "Muhammad Asim", url: "https://www.linkedin.com/in/foxlancerr/" }],
  creator: "Muhammad Asim",
  publisher: "Mehfil.ai",
  category: "Technology",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Mehfil.ai",
    title: "Mehfil.ai — Web Development, AI Automation & Digital Marketing Agency",
    description:
      "One agency. Every layer. Web development, AI automation, SEO, digital marketing, Web3 — all under one roof. Serving clients globally from Pakistan.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mehfil.ai — Full-Service Digital Agency by Muhammad Asim",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mehfil.ai — Web Development, AI Automation & Digital Marketing Agency",
    description:
      "One agency. Every layer. Web development, AI automation, SEO, digital marketing, Web3 — all under one roof.",
    images: ["/opengraph-image"],
    creator: "@foxlancerr",
    site: "@foxlancerr",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Mehfil.ai",
  legalName: "Mehfil.ai",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
  },
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Mehfil.ai is a full-service digital agency offering web development, AI automation, SEO, paid advertising, Web3 & blockchain, WordPress, graphic design, and deployment services.",
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#founder`,
    name: "Muhammad Asim",
    jobTitle: "Founder & Lead Engineer",
    url: "https://www.linkedin.com/in/foxlancerr/",
    sameAs: [
      "https://www.linkedin.com/in/foxlancerr/",
      "https://github.com/foxlancerr",
      "https://www.fiverr.com/foxlancerr",
    ],
  },
  foundingDate: "2023",
  foundingLocation: {
    "@type": "Place",
    name: "Pakistan",
    addressCountry: "PK",
  },
  areaServed: "Worldwide",
  email: "muhammadasim.code@gmail.com",
  telephone: "+92-320-194-2001",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-320-194-2001",
    contactType: "customer service",
    email: "muhammadasim.code@gmail.com",
    availableLanguage: ["English", "Urdu"],
    contactOption: "TollFree",
    areaServed: "Worldwide",
  },
  sameAs: [
    "https://www.fiverr.com/foxlancerr",
    "https://www.linkedin.com/in/foxlancerr/",
    "https://github.com/foxlancerr",
    "https://www.instagram.com/foxlancerr/",
    "https://www.facebook.com/profile.php?id=100091461979708",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Mehfil.ai",
  description:
    "Full-service digital agency — web development, AI automation, SEO, digital marketing, Web3",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-US",
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: "Mehfil.ai",
  image: `${SITE_URL}/opengraph-image`,
  url: SITE_URL,
  telephone: "+92-320-194-2001",
  email: "muhammadasim.code@gmail.com",
  priceRange: "$$",
  currenciesAccepted: "USD, PKR",
  paymentAccepted: "Bank Transfer, Fiverr, Direct",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressRegion: "Punjab",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "23:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "10",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Agency Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full-Stack Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Automation & Chatbot Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Paid Ads & Digital Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & Organic Growth" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web3 & Blockchain Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "WordPress Design & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design & Brand Identity" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Deployment, DevOps & Hosting" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you work with international clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We've delivered projects for clients in the US, UK, Germany, and across the Gulf. Time zones are not a problem — we work async and keep you updated at every milestone.",
      },
    },
    {
      "@type": "Question",
      name: "I have an existing website. Can you improve it instead of rebuilding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer audits, speed optimization, redesigns, and feature additions. Send us your URL and we'll tell you exactly what's holding it back.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Landing pages: 3–5 days. Full websites: 7–14 days. SaaS or Web3 apps: 3–6 weeks. AI automation systems: 1–3 weeks depending on complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing maintenance and support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer monthly retainer packages that cover updates, performance monitoring, ad optimization, and priority support.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle both the website and the marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "That's exactly what we're designed for. Most agencies do one or the other. We build the asset and then drive traffic to it.",
      },
    },
  ],
};

const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Mehfil.ai Services",
  description: "Complete digital agency services offered by Mehfil.ai",
  numberOfItems: 8,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Full-Stack Web Development",
        description:
          "Next.js, React, TypeScript production-grade web applications and SaaS platforms built for speed and scalability.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "AI Automation & Chatbot Integration",
        description:
          "OpenAI, n8n, LangChain, and RAG pipelines to automate business workflows and embed intelligent chatbots.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Paid Ads & Digital Marketing",
        description:
          "Meta Ads and Google Ads campaign management with conversion tracking, A/B testing, and full-funnel optimization.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "SEO & Organic Growth",
        description:
          "Technical SEO audits, on-page optimization, content strategy, and link building to rank higher on Google.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Service",
        name: "Web3 & Blockchain Development",
        description:
          "Solidity smart contracts, Ethers.js integrations, DeFi platforms, NFT marketplaces, and cross-chain dApps.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Service",
        name: "WordPress Design & Development",
        description:
          "Custom WordPress themes, WooCommerce stores, plugin development, and performance optimization.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Service",
        name: "Graphic Design & Brand Identity",
        description:
          "Logo design, brand kits, social media creatives, pitch decks, and full visual identity systems.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Service",
        name: "Deployment, DevOps & Hosting",
        description:
          "Vercel, Cloudflare, AWS, and Docker deployments with CI/CD pipelines, SSL, CDN, and 99.9% uptime SLAs.",
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("relative", "dark", inter.variable, jetbrainsMono.variable, "font-sans", geist.variable)} prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.fiverr.com" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.country" content="Pakistan" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceItemListSchema) }}
        />
      </head>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}