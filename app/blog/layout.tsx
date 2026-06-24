import AnimatedGrid from "@/components/animated-grid";
import CursorGlow from "@/components/cursor-glow";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen bg-base text-text-main">
      <AnimatedGrid />
      <CursorGlow />
      <SmoothScroll />
      <Navbar />
      <div className="relative z-10 pt-16">{children}</div>
      <Footer />
    </div>
  );
}
