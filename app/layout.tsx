import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Mehfil.ai — AI Automation & Production Engineering",
  description:
    "Muhammad Asim — Software Engineer specializing in scalable web architectures, AI automation, Next.js, TypeScript, n8n, and RAG pipelines. Transforming fragile prototypes into production-grade applications.",
  keywords: [
    "Next.js developer",
    "AI automation",
    "Web3 development",
    "SaaS engineering",
    "n8n workflows",
    "RAG pipelines",
    "Muhammad Asim",
    "Fiverr developer",
    "production-grade applications",
  ],
  openGraph: {
    title: "Mehfil.ai — AI Automation & Production Engineering",
    description:
      "Muhammad Asim — Software Engineer building scalable web architectures and advanced AI automation systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-black font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}