import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteBanner from "@/components/QuoteBanner";
import DiagonalDivider from "@/components/DiagonalDivider";

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
      <BlogPreviewSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
