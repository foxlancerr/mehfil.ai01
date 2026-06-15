import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import ValueAnchor from "@/components/value-anchor";
import ServicePillars from "@/components/service-pillars";
import StatsBar from "@/components/stats-bar";
import CaseStudies from "@/components/case-studies";
import RescueProcess from "@/components/rescue-process";
import Deployments from "@/components/deployments";
import Testimonials from "@/components/testimonials";
import TechShowcase from "@/components/tech-showcase";
import FAQ from "@/components/faq";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor-glow";
import AnimatedGrid from "@/components/animated-grid";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <main className="relative">
      {/* Ambient Background Layers */}
      <AnimatedGrid />
      <CursorGlow />
      <SmoothScroll />

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <ValueAnchor />
      <ServicePillars />



      {/* Rescue process — 4 step cards */}
      <RescueProcess />

      <Deployments />
      <Testimonials />

      {/* Tech stack showcase — horizontal card strip */}
      <TechShowcase />

      <FAQ />
      <Pricing />
      <About />

      {/* Footer */}
      <Footer />
    </main>
  );
}
