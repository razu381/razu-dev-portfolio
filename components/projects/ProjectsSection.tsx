"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "../shared/Marquee";
import { useTilt } from "@/hooks/useTilt";
import { ProjectsData, LegacyProject, Project } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Project card with 3D tilt effect
const ProjectCard = ({ project, variants, index, isMobile }: {
  project: LegacyProject;
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

const ProjectsSection = ({ data }: { data: ProjectsData }) => {

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Vertical label */}
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.sectionLabel}
      </div>

      <Marquee text={data.marqueeText} />

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        {data.ghostText}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <p className="font-mono-label text-sm text-muted-foreground mb-4 tracking-wider">
          {data.sublabel}
        </p>
        <p className="font-mono-label text-xs text-muted-foreground/60 mb-16 tracking-wider">
          {data.sublabelDetail}
        </p>

        {/* Desktop: overlapping grid - HIDDEN TEMPORARILY */}
        {/* <div className="hidden md:block space-y-[-3rem]">
          {data.legacyProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} />
          ))}
        </div> */}

        {/* Mobile: horizontal scroll snap - HIDDEN TEMPORARILY */}
        {/* <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
          {data.legacyProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} isMobile />
          ))}
        </div> */}
      </div>
    </section>
  );
};

// ===== CONCEPT 03: Vertical Sidebar Index =====

const ProjectButton = ({ number, index, activeIndex, onClick }: {
  number: number;
  index: number;
  activeIndex: number;
  onClick: (index: number) => void;
}) => {
  const isActive = activeIndex === index;
  const displayNumber = (index + 1).toString().padStart(2, "0");

  return (
    <button
      className={`flex-1 flex items-center justify-center transition-all duration-150 border-b border-zinc-700 ${isActive
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

const ProjectPanel = ({ project, isActive }: {
  project: Project;
  isActive: boolean;
}) => {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt();

  return (
    <div
      className={`flex-1 gap-12 lg:gap-16 transition-opacity duration-300 ${isActive ? 'opacity-100 flex flex-col md:flex-row md:items-center' : 'opacity-0 hidden'
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

      {/* Right Image (3D Floating Glass Plate) */}
      <div className="flex-1 flex justify-center items-center relative min-h-[400px]">
        {/* Ambient Blurred Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[80%] h-[80%] bg-primary/20 rounded-full blur-[100px]" />
        </div>

        {/* 3D Tilt Container */}
        <motion.div
          ref={ref}
          style={{ ...style }}
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
          className="relative w-full max-w-[550px] aspect-square border border-white/10 bg-white/[0.02] backdrop-blur-xl rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,234,28,0.1)] z-10 flex flex-col cursor-crosshair"
        >
          {/* Subtle Browser Header */}
          <div className="h-10 border-b border-white/10 bg-black/40 flex items-center px-4 gap-2.5 shrink-0 backdrop-blur-md">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          
          {/* Scrolling Image via Hardware-Accelerated CSS Transform */}
          <div 
            className="w-full flex-1 relative overflow-hidden bg-black" 
            style={{ containerType: "size" }}
          >
            <img
              src="/home-cannaware-shop.png"
              alt="Project Screenshot"
              className="w-full h-auto absolute top-0 left-0 animate-scroll-yoyo"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProjectSidebar = ({ data }: { data: Project[] }) => {
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
            {data.map((project, index) => (
              <ProjectButton
                key={project.id}
                number={index + 1}
                index={index}
                activeIndex={activeIndex}
                onClick={setActiveIndex}
              />
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 pl-8 md:pl-12 relative flex flex-col">
            {data.map((project, index) => (
              <ProjectPanel
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
