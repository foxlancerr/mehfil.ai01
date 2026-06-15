import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import ValueAnchor from "@/components/value-anchor";
import ServicePillars from "@/components/service-pillars";
import StatsBar from "@/components/stats-bar";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import TechShowcase from "@/components/tech-showcase";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor-glow";
import AnimatedGrid from "@/components/animated-grid";
import SmoothScroll from "@/components/smooth-scroll";
import Deployments from "@/components/deployments";

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
      <Offers />
      <ValueAnchor />
      <ServicePillars />

      <Deployments></Deployments>
      <Testimonials />



      <Pricing />
      <FAQ />
      <About />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}
