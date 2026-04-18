"use client";

import { useState, useEffect } from "react";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AboutSection from "@/components/about/AboutSection";
import QuoteBanner from "@/components/shared/QuoteBanner";
import ServicesSection from "@/components/services/ServicesSection";
import ValueStackSection from "@/components/value-stack/ValueStackSection";
import ProjectsSection, { ProjectSidebar } from "@/components/projects/ProjectsSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import ContactSection from "@/components/contact/ContactSection";
import Footer from "@/components/shared/Footer";
import { wordpressData } from "@/data/pages/wordpress-development";

const checklistStyles = [
  { id: "A", label: "01 / SPEC TABLE" },
  { id: "B", label: "02 / NUMBERED CARDS" },
  { id: "C", label: "03 / ACCENT BAR LIST" },
];

export default function WordPressDevelopment() {
  const [activeStyle, setActiveStyle] = useState<"A" | "B" | "C">("A");

  useEffect(() => {
    ["value-stack-style-A", "value-stack-style-B", "value-stack-style-C"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.style.display = id === `value-stack-style-${activeStyle}` ? "block" : "none";
        el.style.opacity = id === `value-stack-style-${activeStyle}` ? "1" : "0";
      }
    });
  }, [activeStyle]);

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

      {/* CHECKLIST STYLE SWITCHER — REMOVE BEFORE LAUNCH */}
      <div
        className="sticky top-0 z-[100] flex items-center md:px-20 px-6 py-0"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}
      >
        <span className="font-mono-label text-[11px] text-muted-foreground uppercase tracking-wider mr-8 shrink-0 hidden md:block">
          CHECKLIST STYLE →
        </span>
        {checklistStyles.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveStyle(tab.id as "A" | "B" | "C")}
            className="font-mono-label font-bold text-xs uppercase tracking-[0.1em] px-6 py-3.5 border-none cursor-pointer transition-colors duration-150"
            style={{
              background: "transparent",
              color: activeStyle === tab.id ? "#00EB1C" : "#666666",
              borderBottom: activeStyle === tab.id ? "2px solid #00EB1C" : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (activeStyle !== tab.id) e.currentTarget.style.color = "#F0F0F0";
            }}
            onMouseLeave={(e) => {
              if (activeStyle !== tab.id) e.currentTarget.style.color = "#666666";
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {wordpressData.valueStack && (
        <>
          <div id="value-stack-style-A" style={{ display: "block", opacity: 1, transition: "opacity 300ms ease" }}>
            <ValueStackSection data={wordpressData.valueStack} checklistStyle="A" />
          </div>
          <div id="value-stack-style-B" style={{ display: "none", opacity: 0, transition: "opacity 300ms ease" }}>
            <ValueStackSection data={wordpressData.valueStack} checklistStyle="B" />
          </div>
          <div id="value-stack-style-C" style={{ display: "none", opacity: 0, transition: "opacity 300ms ease" }}>
            <ValueStackSection data={wordpressData.valueStack} checklistStyle="C" />
          </div>
        </>
      )}

      <ProjectsSection data={wordpressData.projects} />
      <ProjectSidebar data={wordpressData.projects.projects} />
      <ReviewsSection data={wordpressData.reviews} />
      <ContactSection data={wordpressData.contact} />
      <Footer />
    </>
  );
}
