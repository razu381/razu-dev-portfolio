"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Marquee from "./Marquee";
import { useTilt } from "@/hooks/useTilt";
import { useRef } from "react";

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
  variants: any;
  index: number;
  isMobile?: boolean;
}) => {
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

        {/* Desktop: overlapping grid */}
        <div className="hidden md:block space-y-[-3rem]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} />
          ))}
        </div>

        {/* Mobile: horizontal scroll snap */}
        <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 scrollbar-hide">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} variants={fadeUp} index={i} isMobile />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
