"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "../shared/Marquee";
import { useTilt } from "@/hooks/useTilt";

const projects = [
  { name: "Luminary — SaaS Landing Page", tags: ["Next.js", "Tailwind CSS", "Framer Motion"], desc: "High-converting SaaS landing page with animated hero, scroll-triggered sections, and a 98 PageSpeed score.", align: "left", width: "65%" },
  { name: "TaskFlow — Project Management App", tags: ["React", "TypeScript", "Supabase"], desc: "Full-featured project management dashboard with real-time updates, drag-and-drop boards, and role-based access.", align: "right", width: "55%" },
  { name: "Meridian — Architecture Studio", tags: ["Next.js", "Sanity CMS", "Tailwind"], desc: "Award-worthy portfolio site for an architecture firm — custom cursor, parallax gallery, and CMS-powered case studies.", align: "left", width: "60%" },
  { name: "PulseMetrics — Analytics Dashboard", tags: ["React", "Framer Motion", "REST API"], desc: "Data visualization dashboard with animated charts, filterable tables, and a dark/light theme toggle.", align: "right", width: "45%" },
  { name: "Storefront — E-Commerce Frontend", tags: ["Next.js", "Tailwind CSS", "Stripe"], desc: "Headless e-commerce frontend with cart, wishlist, Stripe checkout, and blazing-fast static product pages.", align: "left", width: "100%" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Project card with 3D tilt effect
const ProjectCard = ({ project, variants, index, isMobile }: {
  project: typeof projects[0];
  variants: typeof fadeUp;
  index: number;
  isMobile?: boolean;
}): JSX.Element => {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt();
  const imageRef = useRef<HTMLDivElement>(null);

  // Parallax zoom effect
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ ...style, maxWidth: isMobile ? undefined : project.width }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      className={`relative w-full ${isMobile ? "snap-center shrink-0 w-[85vw]" : ""} ${project.align === "right" && !isMobile ? "ml-auto" : ""}`}
    >
      <div className="brutalist-card bg-surface border border-border overflow-hidden group relative">
        {/* Image placeholder with parallax */}
        <motion.div
          ref={imageRef}
          style={{ scale }}
          className="w-full aspect-video flex items-center justify-center overflow-hidden"
        >
          <div style={{ background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)" }} className="w-full h-full flex items-center justify-center">
            <span className="font-mono-label text-xs text-muted-foreground tracking-wider">[ PROJECT SCREENSHOT ]</span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="p-5 md:p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map(t => (
              <span key={t} className="font-mono-label text-[10px] px-2.5 py-1 border border-primary/30 text-primary tracking-wider uppercase">{t}</span>
            ))}
          </div>
          <h3 className="font-heading font-bold text-lg text-foreground mb-1">{project.name}</h3>
          <p className="font-body text-sm text-muted-foreground">{project.desc}</p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[rgba(0,20,5,0.9)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="font-heading font-bold text-primary text-sm tracking-wider">VIEW PROJECT →</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <Marquee text="SELECTED WORK · SELECTED WORK · SELECTED WORK ·" />

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        WORK
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <p className="font-mono-label text-sm text-muted-foreground mb-4 tracking-wider">
          <span className="text-primary">[ 03 ]</span> &nbsp;SITES I'VE SHIPPED
        </p>
        <p className="font-mono-label text-xs text-muted-foreground/60 mb-16 tracking-wider">
          React · Next.js · Tailwind CSS · TypeScript · Framer Motion
        </p>

        {/* Desktop: overlapping grid - HIDDEN TEMPORARILY */}
        {/* <div className="hidden md:block space-y-[-3rem]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} />
          ))}
        </div> */}

        {/* Mobile: horizontal scroll snap - HIDDEN TEMPORARILY */}
        {/* <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} isMobile />
          ))}
        </div> */}
      </div>
    </section>
  );
};

// ===== CONCEPT 01: Brutalist Horizontal Scroll Strip =====
const concept01Projects = [
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

const Concept01Card = ({ project, index }: { project: typeof concept01Projects[0]; index: number }) => {
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

export const Concept01BrutalistScroll = () => {
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
    const walk = (x - startX) * 2;
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
      id="concept-01-work"
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
          CONCEPT 01: BRUTALIST SCROLL //
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
          {concept01Projects.map((project, index) => (
            <Concept01Card key={project.id} project={project} index={index} />
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

// ===== CONCEPT 02: Asymmetric Bento Grid =====
const concept02Projects = [
  {
    id: 1,
    title: "Luminary SaaS Platform",
    description: "Full-scale SaaS landing page with animated hero, scroll-triggered sections, and 98 PageSpeed score. Features pricing calculator, testimonials, and integration showcases.",
    category: "E-COMMERCE",
    techStack: "Next.js, Tailwind CSS, Framer Motion, Stripe",
    featured: true,
  },
  {
    id: 2,
    title: "TaskFlow Dashboard",
    description: "Project management with real-time updates and role-based access.",
    category: "SaaS",
    techStack: "React, TypeScript, Supabase",
    featured: false,
  },
  {
    id: 3,
    title: "Meridian Studio",
    description: "Architecture firm portfolio with custom cursor and parallax gallery.",
    category: "PORTFOLIO",
    techStack: "Next.js, Sanity CMS, Tailwind",
    featured: false,
  },
  {
    id: 4,
    title: "PulseMetrics",
    description: "Analytics dashboard with animated charts and dark/light theme.",
    category: "DASHBOARD",
    techStack: "React, Framer Motion, REST API",
    featured: false,
  },
  {
    id: 5,
    title: "Storefront",
    description: "Headless e-commerce with cart, wishlist, and Stripe checkout.",
    category: "E-COMMERCE",
    techStack: "Next.js, Tailwind CSS, Stripe",
    featured: false,
  },
  {
    id: 6,
    title: "Nexus Platform",
    description: "Multi-tenant platform with role-based access and notifications.",
    category: "PLATFORM",
    techStack: "Next.js, PostgreSQL, Prisma",
    featured: false,
  },
];

const Concept02FeaturedCard = ({ project }: { project: typeof concept02Projects[0] }) => {
  return (
    <div
      className="relative group transition-colors duration-150 overflow-hidden"
      style={{
        backgroundColor: "#0d1f12",
        border: "1px solid rgba(26, 255, 107, 0.13)",
        minHeight: "180px",
        gridColumn: "span 2",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#111";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#0d1f12";
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "3px",
          backgroundColor: "#1aff6b",
        }}
      />

      {/* Ghost number */}
      <div
        className="absolute top-0 right-6 pointer-events-none"
        style={{
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontSize: "80px",
          fontWeight: "900",
          color: "rgba(255, 255, 255, 0.05)",
          lineHeight: "1",
          zIndex: 0,
        }}
      >
        01
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 md:p-10">
        {/* Tag */}
        <div
          className="mb-3"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#1aff6b",
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          className="mb-4"
          style={{
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: "32px",
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
          className="mb-6 max-w-[500px]"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            lineHeight: "1.6",
            color: "#666666",
          }}
        >
          {project.description}
        </p>

        {/* Meta footer */}
        <div
          className="flex items-center justify-between"
          style={{
            marginTop: "16px",
          }}
        >
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#444",
            }}
          >
            {project.techStack}
          </div>

          {/* Arrow CTA */}
          <div
            className="transition-all duration-300"
            style={{
              color: "#1aff6b",
              fontSize: "24px",
              fontWeight: "bold",
              opacity: 0,
              transform: "translateX(0)",
            }}
          >
            →
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style jsx>{`
        .group:hover div:last-child {
          opacity: 1 !important;
          transform: translateX(4px) !important;
        }
      `}</style>
    </div>
  );
};

const Concept02RegularCard = ({ project, index }: { project: typeof concept02Projects[0]; index: number }) => {
  const number = (index + 1).toString().padStart(2, "0");

  return (
    <div
      className="relative group transition-colors duration-150 overflow-hidden"
      style={{
        backgroundColor: "#0f0f0f",
        minHeight: "160px",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#111";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#0f0f0f";
      }}
    >
      {/* Short accent line */}
      <div
        className="absolute top-0 left-6"
        style={{
          height: "3px",
          width: "40px",
          backgroundColor: "#1aff6b",
        }}
      />

      {/* Ghost number */}
      <div
        className="absolute top-0 right-4 pointer-events-none"
        style={{
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontSize: "80px",
          fontWeight: "900",
          color: "rgba(255, 255, 255, 0.05)",
          lineHeight: "1",
          zIndex: 0,
        }}
      >
        {number}
      </div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {/* Tag */}
        <div
          className="mb-3"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "9px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#1aff6b",
          }}
        >
          {project.category}
        </div>

        {/* Title */}
        <h3
          className="mb-4"
          style={{
            fontFamily: "'Arial Black', Impact, sans-serif",
            fontSize: "22px",
            fontWeight: "900",
            textTransform: "uppercase",
            lineHeight: "1.1",
            color: "#f0f0f0",
          }}
        >
          {project.title}
        </h3>

        {/* Description - hidden on mobile */}
        <p
          className="hidden md:block mb-4"
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "11px",
            lineHeight: "1.6",
            color: "#666666",
          }}
        >
          {project.description}
        </p>

        {/* Meta footer */}
        <div
          className="flex items-center justify-between"
          style={{
            marginTop: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#444",
            }}
          >
            {project.techStack}
          </div>

          {/* Arrow CTA */}
          <div
            className="transition-all duration-300"
            style={{
              color: "#1aff6b",
              fontSize: "20px",
              fontWeight: "bold",
              opacity: 0,
              transform: "translateX(0)",
            }}
          >
            →
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style jsx>{`
        .group:hover div:last-child {
          opacity: 1 !important;
          transform: translateX(4px) !important;
        }
      `}</style>
    </div>
  );
};

export const Concept02BentoGrid = () => {
  const featuredProject = concept02Projects.find(p => p.featured);
  const regularProjects = concept02Projects.filter(p => !p.featured);

  return (
    <section
      id="concept-02-work"
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
          CONCEPT 02: ASYMMETRIC BENTO GRID //
        </p>
      </div>

      {/* Bento Grid */}
      <div className="px-6 md:px-12 lg:px-20">
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gap: "3px",
          }}
        >
          {/* Featured card - full width */}
          {featuredProject && (
            <Concept02FeaturedCard key={featuredProject.id} project={featuredProject} />
          )}

          {/* Regular cards - 2 per row */}
          {regularProjects.map((project, index) => (
            <Concept02RegularCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== CONCEPT 03: Vertical Sidebar Index =====
const concept03Projects = [
  {
    id: 1,
    title: "Luminary SaaS Platform",
    description: "Full-scale SaaS landing page with animated hero, scroll-triggered sections, and 98 PageSpeed score. Features pricing calculator, testimonials, and integration showcases.",
    category: "E-COMMERCE",
    year: "2024",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
  },
  {
    id: 2,
    title: "TaskFlow Dashboard",
    description: "Project management with real-time updates, drag-and-drop boards, and role-based access control for teams.",
    category: "SaaS",
    year: "2024",
    techStack: ["React", "TypeScript", "Supabase"],
  },
  {
    id: 3,
    title: "Meridian Studio",
    description: "Architecture firm portfolio with custom cursor, parallax gallery, and CMS-powered case studies.",
    category: "PORTFOLIO",
    year: "2023",
    techStack: ["Next.js", "Sanity CMS", "Tailwind"],
  },
  {
    id: 4,
    title: "PulseMetrics",
    description: "Analytics dashboard with animated charts, filterable tables, and dark/light theme toggle.",
    category: "DASHBOARD",
    year: "2024",
    techStack: ["React", "Framer Motion", "REST API"],
  },
];

const Concept03SidebarButton = ({ number, index, activeIndex, onClick }: {
  number: number;
  index: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  const isActive = activeIndex === index;
  const displayNumber = (index + 1).toString().padStart(2, "0");

  return (
    <button
      className="flex-1 flex items-center justify-center transition-all duration-150"
      style={{
        borderRight: "none",
        borderBottom: "1px solid #111",
        backgroundColor: isActive ? "#1aff6b" : "transparent",
        color: isActive ? "#000000" : "#333333",
      }}
      onMouseEnter={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "#0d1a0d";
          e.currentTarget.style.color = "#1aff6b";
        }
      }}
      onMouseLeave={(e) => {
        if (!isActive) {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#333333";
        }
      }}
      onClick={() => onClick(index)}
    >
      <span
        style={{
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontSize: "11px",
          fontWeight: "900",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          writingMode: "vertical-lr",
          transform: "rotate(180deg)",
        }}
      >
        {displayNumber}
      </span>
    </button>
  );
};

const Concept03ContentPanel = ({ project, isActive }: {
  project: typeof concept03Projects[0];
  isActive: boolean;
}) => {
  return (
    <div
      className="transition-opacity duration-150"
      style={{
        opacity: isActive ? 1 : 0,
        display: isActive ? "block" : "none",
      }}
    >
      {/* Tag */}
      <div
        className="mb-4"
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "9px",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "#1aff6b",
        }}
      >
        {project.category} // {project.year}
      </div>

      {/* Title */}
      <h3
        className="mb-4"
        style={{
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontSize: "36px",
          fontWeight: "900",
          textTransform: "uppercase",
          lineHeight: "1",
          color: "#f0f0f0",
        }}
      >
        {project.title}
      </h3>

      {/* Rule - Brutalist divider */}
      <div
        className="mb-4"
        style={{
          width: "60px",
          height: "2px",
          backgroundColor: "#1aff6b",
        }}
      />

      {/* Description */}
      <p
        className="mb-6 max-w-[340px]"
        style={{
          fontFamily: "'Courier New', monospace",
          fontSize: "12px",
          lineHeight: "1.7",
          color: "#666666",
        }}
      >
        {project.description}
      </p>

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "9px",
              textTransform: "uppercase",
              padding: "3px 8px",
              border: "1px solid #222",
              color: "#555",
              letterSpacing: "0.05em",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="transition-all duration-150"
        style={{
          border: "2px solid #1aff6b",
          color: "#1aff6b",
          fontFamily: "'Arial Black', Impact, sans-serif",
          fontSize: "12px",
          fontWeight: "900",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          padding: "12px 24px",
          backgroundColor: "transparent",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#1aff6b";
          e.currentTarget.style.color = "#000000";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "#1aff6b";
        }}
      >
        VIEW PROJECT →
      </button>
    </div>
  );
};

export const Concept03VerticalSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="concept-03-work"
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
          CONCEPT 03: VERTICAL SIDEBAR INDEX //
        </p>
      </div>

      {/* Main layout */}
      <div className="px-6 md:px-12 lg:px-20">
        <div
          className="flex"
          style={{
            minHeight: "480px",
          }}
        >
          {/* Left Sidebar */}
          <div
            className="flex flex-col"
            style={{
              width: "60px",
              borderRight: "2px solid #1aff6b",
            }}
          >
            {concept03Projects.map((project, index) => (
              <Concept03SidebarButton
                key={project.id}
                number={index + 1}
                index={index}
                activeIndex={activeIndex}
                onClick={setActiveIndex}
              />
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-8 md:p-12 relative">
            {concept03Projects.map((project, index) => (
              <Concept03ContentPanel
                key={project.id}
                project={project}
                isActive={activeIndex === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ===== CONCEPT 04: Hover-Expand Accordion =====
const concept04Projects = [
  {
    id: 1,
    title: "Luminary SaaS Platform",
    description: "Full-scale SaaS landing page with animated hero, scroll-triggered sections, and 98 PageSpeed score. Features pricing calculator, testimonials, and integration showcases.",
    category: "E-COMMERCE",
    year: "2024",
    techStack: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
  },
  {
    id: 2,
    title: "TaskFlow Dashboard",
    description: "Project management with real-time updates, drag-and-drop boards, and role-based access control for teams.",
    category: "SaaS",
    year: "2024",
    techStack: ["React", "TypeScript", "Supabase"],
  },
  {
    id: 3,
    title: "Meridian Studio",
    description: "Architecture firm portfolio with custom cursor, parallax gallery, and CMS-powered case studies.",
    category: "PORTFOLIO",
    year: "2023",
    techStack: ["Next.js", "Sanity CMS", "Tailwind"],
  },
  {
    id: 4,
    title: "PulseMetrics",
    description: "Analytics dashboard with animated charts, filterable tables, and dark/light theme toggle.",
    category: "DASHBOARD",
    year: "2024",
    techStack: ["React", "Framer Motion", "REST API"],
  },
  {
    id: 5,
    title: "Storefront",
    description: "Headless e-commerce frontend with cart, wishlist, Stripe checkout, and blazing-fast static product pages.",
    category: "E-COMMERCE",
    year: "2024",
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
  },
];

const Concept04AccordionRow = ({ project, index, isHovered, onMouseEnter, onMouseLeave }: {
  project: typeof concept04Projects[0];
  index: number;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  const number = (index + 1).toString().padStart(2, "0");
  const isLast = index === concept04Projects.length - 1;

  return (
    <div
      className="flex flex-col"
      style={{
        borderTop: "1px solid #1a1a1a",
        borderBottom: isLast ? "1px solid #1a1a1a" : "none",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className="flex items-stretch transition-colors duration-150"
        style={{
          backgroundColor: isHovered ? "#0d0d0d" : "transparent",
        }}
      >
        {/* Left column - Index number */}
        <div
          className="flex items-center justify-center"
          style={{
            width: "60px",
            paddingTop: "18px",
            paddingBottom: isHovered ? "20px" : "18px",
          }}
        >
          <span
            style={{
              fontFamily: "'Arial Black', Impact, sans-serif",
              fontSize: "10px",
              fontWeight: "900",
              color: "#333",
              textTransform: "uppercase",
            }}
          >
            {number}
          </span>
        </div>

        {/* Middle column - Title and expanded content */}
        <div className="flex-1">
          <div
            className="flex items-center"
            style={{
              paddingTop: "18px",
              paddingBottom: isHovered ? "20px" : "18px",
            }}
          >
            {/* Title */}
            <h3
              style={{
                fontFamily: "'Arial Black', Impact, sans-serif",
                fontSize: "20px",
                fontWeight: "900",
                textTransform: "uppercase",
                lineHeight: "1",
                color: "#f0f0f0",
                marginRight: "16px",
              }}
            >
              {project.title}
            </h3>

            {/* Tag */}
            <span
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                color: "#1aff6b",
              }}
            >
              {project.category} // {project.year}
            </span>
          </div>

          {/* Expanded content */}
          <div
            style={{
              maxHeight: isHovered ? "200px" : "0",
              opacity: isHovered ? 1 : 0,
              transition: "max-height 300ms ease, opacity 300ms ease",
            }}
          >
            {/* Description */}
            <p
              className="mb-4"
              style={{
                fontFamily: "'Courier New', monospace",
                fontSize: "11px",
                lineHeight: "1.7",
                color: "#666666",
                maxWidth: "460px",
              }}
            >
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: "9px",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    border: "1px solid #222",
                    color: "#444",
                    letterSpacing: "0.05em",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Arrow */}
        <div
          className="flex items-center"
          style={{
            padding: "18px 16px",
          }}
        >
          <div
            className="transition-transform duration-250"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: isHovered ? "#1aff6b" : "#333",
              transform: isHovered ? "rotate(90deg)" : "rotate(0deg)",
            }}
          >
            ›
          </div>
        </div>
      </div>
    </div>
  );
};

export const Concept04Accordion = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="concept-04-work"
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
          CONCEPT 04: HOVER-EXPAND ACCORDION //
        </p>
      </div>

      {/* Accordion list */}
      <div className="px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <div className="mb-6">
          <p
            style={{
              fontFamily: "'Courier New', monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: "#1aff6b",
              marginBottom: "24px",
            }}
          >
            WORK // {concept04Projects.length} PROJECTS // HOVER TO EXPAND
          </p>
        </div>

        {/* Project rows */}
        {concept04Projects.map((project, index) => (
          <Concept04AccordionRow
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
