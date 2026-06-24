import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Offers from "@/components/offers";
import ValueAnchor from "@/components/value-anchor";
import ServicePillars from "@/components/service-pillars";
import Testimonials from "@/components/testimonials";
import Pricing from "@/components/pricing";
import FAQ from "@/components/faq";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CursorGlow from "@/components/cursor-glow";
import AnimatedGrid from "@/components/animated-grid";
import SmoothScroll from "@/components/smooth-scroll";
import Deployments from "@/components/deployments";
import Chatbot from "@/components/chatbot";
import { posts } from "@/constants/blog-posts";
import { BlogCard } from "@/components/blog/blog-card";

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

      <section className="relative overflow-hidden px-6 lg:px-12">

        <div className="mx-auto max-w-[1100px]">
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {posts.map((post, index) => (

              <BlogCard key={post.slug} post={post} index={index} />

            ))}

          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />

      {/* Floating Chatbot */}
      <Chatbot />
    </main>
  );
}
