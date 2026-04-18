import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import ServicesSection from "@/components/services/ServicesSection";
import ProjectsSection, { ProjectSidebar } from "@/components/projects/ProjectsSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";
import QuoteBanner from "@/components/shared/QuoteBanner";
import { wordpressData } from "@/data/pages/wordpress-development";

export const metadata = {
  title: "WordPress Development Services — Razu.dev",
  description:
    "Custom WordPress themes, WooCommerce stores, and SEO-optimized WordPress sites. 50+ sites launched for clients across 19 countries.",
  openGraph: {
    title: "WordPress Development Services — Razu.dev",
    description:
      "Custom WordPress themes, WooCommerce stores, and SEO-optimized WordPress sites.",
    url: "https://razu.dev/wordpress-development",
  },
};

export default function WordPressDevelopment() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection data={wordpressData.hero} />
      <AboutSection data={wordpressData.about} />
      <QuoteBanner
        text={wordpressData.quoteBanner.text}
        highlight={wordpressData.quoteBanner.highlight}
      />
      <ServicesSection data={wordpressData.services} />
      <ProjectsSection data={wordpressData.projects} />
      <ProjectSidebar data={wordpressData.projects.projects} />
      <ReviewsSection data={wordpressData.reviews} />
      <ContactSection data={wordpressData.contact} />
      <Footer />
    </>
  );
}
