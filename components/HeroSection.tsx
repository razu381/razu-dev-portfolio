"use client";

import { motion } from "framer-motion";
import Marquee from "./Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden noise-overlay clip-diagonal-bottom">
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left content — 55% */}
        <div className="relative w-full lg:w-[55%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-24 lg:py-0">
          {/* Ghost outline RAZU */}
          <div
            className="absolute top-10 left-0 font-display font-extrabold text-stroke-accent select-none"
            style={{ fontSize: "clamp(8rem, 15vw, 20rem)", lineHeight: 0.85 }}>
            RAZU
          </div>

          {/* Vertical spine */}
          <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <span className="font-mono-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              Frontend Developer · React · Next.js · Tailwind
            </span>
            <div className="w-px h-8 bg-muted-foreground/30 mt-4" />
            <span className="font-mono-label text-xs text-muted-foreground">01/05</span>
          </div>

          {/* Main content */}
          <motion.div className="relative z-10 lg:ml-14" initial="hidden" animate="visible">
            {/* Badge */}
            <motion.div custom={0} variants={fadeUp}
              className="inline-block font-mono-label text-xs text-primary border border-primary px-3 py-1 mb-6 tracking-wider">
              [ AVAILABLE · $30/HR ]
            </motion.div>

            {/* Headline */}
            <motion.div custom={1} variants={fadeUp}>
              <h1 className="font-display font-extrabold leading-[0.9] tracking-tight">
                <span className="block text-3xl md:text-4xl text-foreground">HI, I AM</span>
                <span className="block text-foreground" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>SHOHIDUL</span>
                <span className="block text-foreground" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>ISLAM</span>
                <span className="block text-primary" style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}>RAZU.</span>
              </h1>
            </motion.div>

            {/* Role tags */}
            <motion.p custom={2} variants={fadeUp}
              className="font-mono-label text-xs md:text-sm text-muted-foreground tracking-wider mt-6">
              React Dev &nbsp;· &nbsp;Next.js &nbsp;· &nbsp;Tailwind CSS &nbsp;· &nbsp;TypeScript &nbsp;· &nbsp;UI/UX
            </motion.p>

            {/* Stats */}
            <motion.div custom={3} variants={fadeUp}
              className="flex items-center gap-6 md:gap-10 mt-8">
              {[
                { num: "50+", label: "Projects Shipped" },
                { num: "19", label: "Countries" },
                { num: "4+", label: "Years Exp" },
              ].map((s, i) => (
                <div key={i} className={`${i > 0 ? "border-l border-border pl-6 md:pl-10" : ""}`}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-primary">{s.num}</div>
                  <div className="font-mono-label text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <a href="#projects"
                className="font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all inline-block">
                VIEW MY WORK
              </a>
              <a href="#contact"
                className="font-heading font-bold text-sm border border-primary text-primary px-8 py-3.5 hover:bg-primary/10 transition-all inline-block">
                BOOK A ZOOM →
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Right photo — 45% */}
        <div className="relative w-full lg:w-[45%] min-h-[50vh] lg:min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)" }}>
            <span className="font-mono-label text-sm text-muted-foreground tracking-wider">[ ADD YOUR PHOTO HERE ]</span>
          </div>
          {/* Left gradient overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="relative z-10">
        <Marquee
          text="REACT · NEXT.JS · TAILWIND CSS · TYPESCRIPT · HTML · CSS · FRAMER MOTION · REST API · FIGMA TO CODE · 50+ PROJECTS · 19 COUNTRIES · 4 YEARS ·"
          highlightWords={["REACT", "NEXT.JS", "50+"]}
        />
      </div>
    </section>
  );
};

export default HeroSection;
