import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectsSection, { ProjectSidebar } from "@/components/projects/ProjectsSection";
import BlogPreviewSection from "@/components/blog/BlogPreviewSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";
import QuoteBanner from "@/components/shared/QuoteBanner";
import DiagonalDivider from "@/components/shared/DiagonalDivider";
import { homepageData } from "@/data/pages/homepage";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection data={homepageData.hero} />
      <AboutSection data={homepageData.about} />
      <QuoteBanner
        text={homepageData.quoteBanner.text}
        highlight={homepageData.quoteBanner.highlight}
      />
      <ServicesSection data={homepageData.services} />
      <ProjectsSection data={homepageData.projects} />
      <ProjectSidebar data={homepageData.projects.projects} />
      <BlogPreviewSection />
      <ReviewsSection data={homepageData.reviews} />
      <ContactSection data={homepageData.contact} />
      <Footer />
    </>
  );
}
