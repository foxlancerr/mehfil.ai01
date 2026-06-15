// ─────────────────────────────────────────────────────────────────────────────
// Chatbot Configuration — Mehfil.ai.DEV / Mehfil.ai
// All static content lives here. Swap resolveResponse() for a live API call
// when ready — the UI component requires no changes.
// ─────────────────────────────────────────────────────────────────────────────

export const CHATBOT_CONFIG = {
  botName: "Mehfil.ai",
  botTitle: "Mehfil.ai Assistant",
  botStatus: "Online · Replies instantly",
  avatarInitials: "NX",

  welcomeMessage:
    "Hello! I'm Mehfil.ai, Mehfil.ai's virtual assistant.\n\nI can answer questions about our services, pricing, timelines, and tech stack — or connect you directly with the team.\n\nWhat would you like to know?",

  typingDelayMs: 900,
  fiverr: "https://www.fiverr.com/foxlancerr",
  whatsapp: "https://wa.me/923201942001",
  email: "mailto:muhammadasim.code@gmail.com",
};

export interface QuickReply {
  id: string;
  label: string;
  trigger: string;
}

export const QUICK_REPLIES: QuickReply[] = [
  { id: "services",  label: "Services overview",      trigger: "services"  },
  { id: "pricing",   label: "Pricing & packages",     trigger: "pricing"   },
  { id: "timeline",  label: "Delivery timelines",     trigger: "timeline"  },
  { id: "ai",        label: "AI & automation",        trigger: "ai"        },
  { id: "contact",   label: "Get started",            trigger: "contact"   },
];

export interface BotResponse {
  id: string;
  keywords: string[];
  message: string;
  followUp?: QuickReply[];
}

export const STATIC_RESPONSES: BotResponse[] = [
  {
    id: "services",
    keywords: ["service", "services", "offer", "what do you do", "help", "work"],
    message:
      "Mehfil.ai covers every layer of your digital presence under one roof:\n\n— Full-Stack Web Development (Next.js, React, TypeScript)\n— AI Automation & Chatbot Integration\n— Paid Ads & Performance Marketing\n— SEO & Organic Growth\n— Web3 & Blockchain Engineering\n— WordPress & WooCommerce\n— Brand Identity & Graphic Design\n— DevOps, Hosting & Deployment\n\nNo coordination overhead, no handoffs between freelancers. Which area is most relevant to your project?",
    followUp: [
      { id: "ai",      label: "AI & automation",    trigger: "ai"      },
      { id: "web3",    label: "Web3 / blockchain",  trigger: "web3"    },
      { id: "pricing", label: "View pricing",       trigger: "pricing" },
    ],
  },
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "rate", "fee", "charge", "budget", "pkr", "usd", "dollar"],
    message:
      "Our pricing is structured around project scope:\n\nStarter — from PKR 25,000 / $90\nLanding pages, brochure sites, quick-turnaround builds.\n\nGrowth (most popular) — from PKR 75,000 / $270\nFull websites, SaaS MVPs, AI integrations, marketing funnels.\n\nScale — custom quote\nEnterprise systems, Web3 platforms, AI pipelines at scale.\n\nAll engagements begin with a free audit so we scope accurately before quoting. Want to book one?",
    followUp: [
      { id: "contact", label: "Book a free audit", trigger: "contact" },
      { id: "fiverr",  label: "Browse Fiverr packages", trigger: "fiverr" },
    ],
  },
  {
    id: "timeline",
    keywords: ["timeline", "how long", "when", "delivery", "fast", "quickly", "turnaround", "deadline", "days", "weeks"],
    message:
      "Typical delivery windows by project type:\n\n— Landing page: 3–5 business days\n— Full website: 7–14 days\n— SaaS MVP: 3–6 weeks\n— AI or Web3 system: scoped per project\n\nRush delivery is available for time-sensitive builds. Our June promotion includes a PKR 15,000 single-page site delivered in 3 days.\n\nNeed an estimate for a specific project?",
    followUp: [
      { id: "contact", label: "Discuss my project",  trigger: "contact" },
      { id: "pricing", label: "See pricing tiers",   trigger: "pricing" },
    ],
  },
  {
    id: "ai",
    keywords: ["ai", "chatbot", "automation", "openai", "langchain", "n8n", "rag", "bot", "machine learning", "gpt"],
    message:
      "Our AI & Automation practice covers:\n\n— Custom AI chatbots trained on your business data\n— OpenAI / GPT integrations\n— Retrieval-Augmented Generation (RAG) pipelines\n— n8n workflow automation\n— LangChain agent systems\n— AI-powered customer support & lead qualification\n\nThis assistant is a lightweight example of what we build. A production version would be connected to your CRM, product catalogue, or knowledge base — answering customer queries around the clock.\n\nSpecial offer this June: free AI chatbot add-on with any website project.",
    followUp: [
      { id: "contact", label: "Claim the chatbot offer", trigger: "contact" },
      { id: "pricing", label: "See pricing",            trigger: "pricing"  },
    ],
  },
  {
    id: "web3",
    keywords: ["web3", "blockchain", "solidity", "ethereum", "nft", "defi", "smart contract", "crypto", "token", "chain"],
    message:
      "Our Web3 & Blockchain engineering services:\n\n— Smart contract development (Solidity, Hardhat)\n— DeFi protocols, tokenomics, staking systems\n— NFT platforms & marketplaces\n— Cross-chain bridge integrations\n— dApp frontends (ethers.js, wagmi, viem)\n— Audit-ready contract architecture\n\nShipped products include ChainGPT Pad and ChainGPT NFT Marketplace — both production-grade, live platforms.",
    followUp: [
      { id: "case-studies", label: "See case studies",        trigger: "case-studies" },
      { id: "contact",      label: "Discuss a Web3 project",  trigger: "contact"      },
    ],
  },
  {
    id: "contact",
    keywords: ["contact", "get started", "hire", "start", "work together", "book", "call", "reach", "connect", "free audit", "audit"],
    message:
      "The fastest ways to reach us:\n\nWhatsApp — typically respond within 30 minutes\n+92 320 194 2001\n\nEmail\nmuhammadasim.code@gmail.com\n\nFiverr — browse packages and place an order directly\nfiverr.com/foxlancerr\n\nYou can also use the contact form further down this page to request a free audit. We respond within 2 hours during business hours (09:00–22:00 PKT).",
    followUp: [
      { id: "fiverr",    label: "Visit Fiverr",    trigger: "fiverr"    },
      { id: "whatsapp",  label: "WhatsApp us",     trigger: "whatsapp"  },
    ],
  },
  {
    id: "fiverr",
    keywords: ["fiverr", "order", "package", "buy"],
    message:
      "All our service packages are listed on Fiverr:\n\nfiverr.com/foxlancerr\n\nWe are a Top-Rated seller with a consistent 5-star rating. Every package includes revision rounds and a satisfaction guarantee. You can message us there before ordering if you'd like to discuss scope first.",
    followUp: [
      { id: "contact", label: "Talk to us first", trigger: "contact" },
    ],
  },
  {
    id: "whatsapp",
    keywords: ["whatsapp", "wa", "phone", "call me", "message"],
    message:
      "You can reach Muhammad Asim directly on WhatsApp:\n\n+92 320 194 2001\n\nWe respond within 30 minutes during business hours (09:00–22:00 PKT). For after-hours queries, leave a message and we will follow up first thing the next morning.",
    followUp: [
      { id: "fiverr", label: "Browse Fiverr instead", trigger: "fiverr" },
    ],
  },
  {
    id: "case-studies",
    keywords: ["case study", "portfolio", "work", "projects", "examples", "clients", "chaingpt", "zafora", "sift", "digitx"],
    message:
      "A selection of shipped projects:\n\n— ChainGPT Pad — Web3 token launchpad platform\n— Zafora — E-commerce solution\n— sift.ai — AI-powered analytics tool\n— DigitX — Digital finance platform\n— ChainGPT NFT — NFT marketplace\n\nAll are live, production-grade applications. You can find links to each in the Case Studies section on this page.",
  },
  {
    id: "seo",
    keywords: ["seo", "google", "rank", "organic", "search", "content", "keywords", "ranking"],
    message:
      "Our SEO & Organic Growth services:\n\n— Technical SEO audits and remediation\n— On-page optimisation\n— Content strategy and production\n— Keyword research and rank tracking\n— Core Web Vitals performance tuning\n— Link acquisition campaigns\n\nWe have helped clients reach page one of Google within 90 days. We offer a free SEO audit for existing sites — interested?",
    followUp: [
      { id: "contact", label: "Request a free SEO audit", trigger: "contact" },
    ],
  },
  {
    id: "stack",
    keywords: ["stack", "technology", "tech", "framework", "next.js", "react", "typescript", "tools", "what do you use"],
    message:
      "Our core technology stack:\n\n— Frontend: Next.js 16, React 19, TypeScript, Tailwind CSS\n— Backend: Node.js, tRPC, REST, GraphQL\n— AI: OpenAI, LangChain, n8n, Pinecone (RAG)\n— Web3: Solidity, Hardhat, ethers.js, wagmi\n— Infra: Vercel, Cloudflare, Docker, GitHub Actions\n— CMS: Sanity, Contentful, custom headless setups\n\nEvery project is built on modern, maintainable foundations — not templates.",
    followUp: [
      { id: "services", label: "See all services", trigger: "services" },
      { id: "contact",  label: "Start a project",  trigger: "contact"  },
    ],
  },
];

export const FALLBACK_RESPONSE =
  "I don't have a specific answer to that in my knowledge base yet, but the team can help directly.\n\nWhatsApp: +92 320 194 2001\nEmail: muhammadasim.code@gmail.com\nFiverr: fiverr.com/foxlancerr\n\nFeel free to ask about our services, pricing, timelines, or tech stack — I can answer those in detail.";
