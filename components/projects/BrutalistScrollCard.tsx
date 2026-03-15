"use client";

import { useRef, useState, MouseEvent, TouchEvent } from "react";

const projects = [
  {
    id: 1,
    title: "Luminary SaaS",
    description: "High-converting landing page with animated hero, scroll sections, and 98 PageSpeed.",
    category: "E-COMMERCE",
    year: "2024",
    techStack: ["Next.js", "Tailwind", "Framer"],
  },
  {
    id: 2,
    title: "TaskFlow App",
    description: "Project management dashboard with real-time updates, drag-and-drop boards, role access.",
    category: "SaaS",
    year: "2024",
    techStack: ["React", "TypeScript", "Supabase"],
  },
  {
    id: 3,
    title: "Meridian Studio",
    description: "Architecture firm portfolio with custom cursor, parallax gallery, and CMS case studies.",
    category: "PORTFOLIO",
    year: "2023",
    techStack: ["Next.js", "Sanity", "Tailwind"],
  },
  {
    id: 4,
    title: "PulseMetrics",
    description: "Analytics dashboard with animated charts, filterable tables, and dark/light theme toggle.",
    category: "DASHBOARD",
    year: "2024",
    techStack: ["React", "Framer", "API"],
  },
  {
    id: 5,
    title: "Storefront",
    description: "Headless e-commerce frontend with cart, wishlist, Stripe checkout, and static pages.",
    category: "E-COMMERCE",
    year: "2024",
    techStack: ["Next.js", "Tailwind", "Stripe"],
  },
  {
    id: 6,
    title: "Nexus Platform",
    description: "Multi-tenant platform with role-based access, real-time notifications, and admin dashboard.",
    category: "PLATFORM",
    year: "2024",
    techStack: ["Next.js", "PostgreSQL", "Prisma"],
  },
];

type Project = typeof projects[0];

// Individual Project Card
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <div
      className="relative shrink-0 w-[280px] group transition-all duration-300"
      style={{
        padding: "20px 24px",
        borderLeft: "2px solid #1aff6b",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#111111";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
      }}
    >
      {/* Ghost number overlay */}
      <div
        className="absolute top-0 left-4 pointer-events-none"
        style={{
          fontSize: "60px",
          fontWeight: "900",
          color: "rgba(255, 255, 255, 0.03)",
          lineHeight: "1",
          marginBottom: "-20px",
          zIndex: 0,
        }}
      >
        {number}
      </div>

      {/* Arrow CTA */}
      <div
        className="absolute top-4 right-4 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          color: "#1aff6b",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        ↗
      </div>

      <div className="relative z-10">
        {/* Tag line */}
        <div
          className="mb-3"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px",
            fontWeight: "normal",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#1aff6b",
          }}
        >
          {project.category} // {project.year}
        </div>

        {/* Project title */}
        <h3
          className="mb-3"
          style={{
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: "18px",
            fontWeight: "900",
            textTransform: "uppercase",
            lineHeight: "1.1",
            color: "#f0f0f0",
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className="mb-4"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            lineHeight: "1.6",
            color: "#666666",
          }}
        >
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "9px",
                textTransform: "uppercase",
                padding: "3px 8px",
                border: "1px solid #333",
                color: "#555",
                letterSpacing: "0.05em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Section Component
const BrutalistScrollCard = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
    containerRef.current?.style.setProperty("cursor", "grabbing");
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    containerRef.current?.style.setProperty("cursor", "grab");
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    containerRef.current?.style.setProperty("cursor", "grab");
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    containerRef.current?.scrollTo({ left: scrollLeft - walk, behavior: "auto" });
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    containerRef.current?.scrollTo({ left: scrollLeft - walk, behavior: "auto" });
  };

  return (
    <section
      id="brutalist-scroll-work"
      style={{
        backgroundColor: "#0a0a0a",
        padding: "80px 0",
        width: "100%",
      }}
    >
      {/* Section heading */}
      <div className="px-6 md:px-12 lg:px-20 mb-8">
        <p
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            color: "#1aff6b",
            marginBottom: "4px",
          }}
        >
          SELECTED WORK //
        </p>
      </div>

      {/* Horizontal scrollable row */}
      <div className="px-6 md:px-12 lg:px-20">
        <div
          ref={containerRef}
          className="flex gap-0 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            cursor: "grab",
            WebkitOverflowScrolling: "touch",
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Hint line */}
        <div className="mt-6">
          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#333",
            }}
          >
            ← swipe / drag to browse all projects
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrutalistScrollCard;
