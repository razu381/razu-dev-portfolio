import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import QuoteBanner from "@/components/shared/QuoteBanner";
import ServicesSection from "@/components/services/ServicesSection";
import ValueStackOption1 from "@/components/value-stack/ValueStackOption1";
import ValueStackOption2 from "@/components/value-stack/ValueStackOption2";
import ValueStackOption3 from "@/components/value-stack/ValueStackOption3";
import ProcessSection from "@/components/process/ProcessSection";
import ProjectsSection, { ProjectSidebar } from "@/components/projects/ProjectsSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";
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

function OptionLabel({ number, name }: { number: number; name: string }) {
  return (
    <div
      className="w-full py-4 px-6 md:px-10 lg:px-20 text-center"
      style={{ background: "#111111", borderBottom: "2px solid #00EB1C" }}
    >
      <span className="font-mono-label font-bold text-sm text-primary tracking-[0.15em] uppercase">
        OPTION {number} — {name}
      </span>
    </div>
  );
}

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
      {!wordpressData.valueStack ? null : (
        <>
          <OptionLabel number={1} name="Terminal / Spec Sheet" />
          <ValueStackOption1 data={wordpressData.valueStack} />
          <OptionLabel number={2} name="Two-Column Split" />
          <ValueStackOption2 data={wordpressData.valueStack} />
          <OptionLabel number={3} name="Numbered Rows with Badges" />
          <ValueStackOption3 data={wordpressData.valueStack} />
        </>
      )}
      <ProcessSection data={wordpressData.process} />
      <ProjectsSection data={wordpressData.projects} />
      <ProjectSidebar data={wordpressData.projects.projects} />
      <ReviewsSection data={wordpressData.reviews} />
      <ContactSection data={wordpressData.contact} />
      <Footer />
    </>
  );
}
