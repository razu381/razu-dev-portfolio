import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectsSection, { Concept01BrutalistScroll, Concept02BentoGrid, Concept03VerticalSidebar, Concept04Accordion } from "@/components/projects/ProjectsSection";
import BlogPreviewSection from "@/components/blog/BlogPreviewSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";
import QuoteBanner from "@/components/shared/QuoteBanner";
import DiagonalDivider from "@/components/shared/DiagonalDivider";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <QuoteBanner
        text="I DON'T JUST BUILD SITES. I BUILD "
        highlight="BUSINESSES."
      />
      <ServicesSection />
      <ProjectsSection />
      {/* Concept 01: Brutalist Horizontal Scroll */}
      <Concept01BrutalistScroll />
      {/* Concept 02: Asymmetric Bento Grid */}
      <Concept02BentoGrid />
      {/* Concept 03: Vertical Sidebar Index */}
      <Concept03VerticalSidebar />
      {/* Concept 04: Hover-Expand Accordion */}
      <Concept04Accordion />
      <BlogPreviewSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
