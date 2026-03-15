"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "../shared/Marquee";
import { useTilt } from "@/hooks/useTilt";

const legacyProjects = [
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
  project: typeof legacyProjects[0];
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
    <section id="projects" className="relative py-12 md:py-16 overflow-hidden">
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
          {legacyProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} />
          ))}
        </div> */}

        {/* Mobile: horizontal scroll snap - HIDDEN TEMPORARILY */}
        {/* <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
          {legacyProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} isMobile />
          ))}
        </div> */}
      </div>
    </section>
  );
};

// ===== CONCEPT 03: Vertical Sidebar Index =====
const projects = [
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
      className={`flex-1 flex items-center justify-center transition-all duration-150 border-b border-zinc-700 ${
        isActive 
          ? 'bg-primary text-primary-foreground border-primary' 
          : 'bg-green-950/30 text-primary/70 hover:bg-green-950/60 hover:text-primary'
      }`}
      onClick={() => onClick(index)}
    >
      <span
        className="font-heading font-bold text-[11px] tracking-widest uppercase"
        style={{
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
  project: typeof projects[0];
  isActive: boolean;
}) => {
  return (
    <div
      className={`flex gap-8 transition-opacity duration-150 ${
        isActive ? 'opacity-100 flex' : 'opacity-0 hidden'
      }`}
    >
      {/* Left Content */}
      <div className="flex-1">
        {/* Tag */}
        <div className="mb-6 font-mono-label text-[10px] px-2.5 py-1 border border-primary/30 text-primary tracking-wider uppercase w-fit">
          {project.category} // {project.year}
        </div>

        {/* Title */}
        <h3 className="mb-6 font-heading font-bold text-3xl md:text-4xl text-foreground">
          {project.title}
        </h3>

        {/* Rule - Brutalist divider */}
        <div className="mb-6 w-[60px] h-[2px] bg-primary" />

        {/* Description */}
        <p className="mb-8 max-w-[400px] font-body text-sm md:text-base text-muted-foreground">
          {project.description}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono-label text-[10px] px-2.5 py-1 border border-primary/30 text-primary tracking-wider uppercase"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="transition-all duration-150 font-heading font-bold text-sm tracking-wider uppercase border-2 border-primary text-primary px-6 py-3 bg-transparent hover:bg-primary hover:text-primary-foreground"
        >
          VIEW PROJECT →
        </button>
      </div>

      {/* Right Image */}
      <div className="flex-1 max-w-[500px]">
        <div className="aspect-video w-full flex items-center justify-center border border-border bg-gradient-to-br from-zinc-900 to-green-950/20">
          <span className="font-mono-label text-xs text-muted-foreground tracking-wider">[ PROJECT SCREENSHOT ]</span>
        </div>
      </div>
    </div>
  );
};

export const Concept03VerticalSidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="concept-03-work"
      className="bg-background pb-20 w-full"
    >      

      {/* Main layout */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="flex min-h-[480px]">
          {/* Left Sidebar */}
          <div className="flex flex-col w-[60px] border-r-2 border-primary">
            {projects.map((project, index) => (
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
            {projects.map((project, index) => (
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

export default ProjectsSection;
