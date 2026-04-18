"use client";

import { useState, useEffect } from "react";
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
import CustomCursor from "@/components/shared/CustomCursor";
import { wordpressData } from "@/data/pages/wordpress-development";

const tabs = [
  { id: "value-stack-option-1", label: "01 / SPEC SHEET" },
  { id: "value-stack-option-2", label: "02 / SPLIT LAYOUT" },
  { id: "value-stack-option-3", label: "03 / NUMBERED ROWS" },
];

export default function WordPressDevelopment() {
  const [activeTab, setActiveTab] = useState("value-stack-option-3");

  useEffect(() => {
    tabs.forEach((tab) => {
      const el = document.getElementById(tab.id);
      if (el) {
        el.style.display = tab.id === activeTab ? "block" : "none";
        el.style.opacity = tab.id === activeTab ? "1" : "0";
      }
    });
  }, [activeTab]);

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

      {/* VALUE STACK PREVIEW SWITCHER — REMOVE BEFORE LAUNCH */}
      {/* Delete this switcher bar and the inactive options, keep only the chosen one */}
      <div
        className="sticky top-0 z-[100] flex items-center md:px-20 px-6 py-0"
        style={{ background: "#0A0A0A", borderBottom: "1px solid #1A1A1A" }}
      >
        <span className="font-mono-label text-[11px] text-muted-foreground uppercase tracking-wider mr-8 shrink-0 hidden md:block">
          PREVIEW OPTIONS →
        </span>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="font-mono-label font-bold text-xs uppercase tracking-[0.1em] px-6 py-3.5 border-none cursor-pointer transition-colors duration-150"
            style={{
              background: "transparent",
              color: activeTab === tab.id ? "#00EB1C" : "#666666",
              borderBottom: activeTab === tab.id ? "2px solid #00EB1C" : "2px solid transparent",
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.color = "#F0F0F0";
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) e.currentTarget.style.color = "#666666";
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {wordpressData.valueStack && (
        <>
          <div id="value-stack-option-1" style={{ display: "none", opacity: 0, transition: "opacity 300ms ease" }}>
            <ValueStackOption1 data={wordpressData.valueStack} />
          </div>
          <div id="value-stack-option-2" style={{ display: "none", opacity: 0, transition: "opacity 300ms ease" }}>
            <ValueStackOption2 data={wordpressData.valueStack} />
          </div>
          <div id="value-stack-option-3" style={{ display: "block", opacity: 1, transition: "opacity 300ms ease" }}>
            <ValueStackOption3 data={wordpressData.valueStack} />
          </div>
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
