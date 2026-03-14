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

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogPreviewSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
