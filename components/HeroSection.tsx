"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Marquee from "./Marquee";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

// Text scramble component for premium effect
const TextScramble = ({ text, className }: { text: string; className?: string }) => {
  const [displayedText, setDisplayedText] = useState(text);

  useEffect(() => {
    let iterations = 0;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const interval = setInterval(() => {
      setDisplayedText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iterations / 3) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      iterations += 1 / 3;

      if (iterations >= text.length * 3) {
        clearInterval(interval);
        setDisplayedText(text);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className={className}>{displayedText}</span>;
};

// Magnetic button component for premium feel
const MagneticButton = ({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.a>
  );
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
                <TextScramble
                  text="RAZU"
                  className="block text-primary"
                  style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
                />
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
              <MagneticButton
                href="#projects"
                className="font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all inline-block"
              >
                VIEW MY WORK
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="font-heading font-bold text-sm border border-primary text-primary px-8 py-3.5 hover:bg-primary/10 transition-all inline-block"
              >
                BOOK A ZOOM →
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Right photo — 45% */}
        <div className="relative w-full lg:w-[45%] min-h-[50vh] lg:min-h-screen overflow-hidden">
          {/* Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <picture>
              <source
                srcSet="/shohidul-islam-razu.jpg?w=600&h=750 600w,
                        /shohidul-islam-razu.jpg?w=800&h=1000 800w,
                        /shohidul-islam-razu.jpg?w=1200&h=1500 1200w"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
              />
              <img
                src="/shohidul-islam-razu.jpg"
                alt="Shohidul Islam Razu - Frontend Developer"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85) contrast(1.15) saturate(0.85)" }}
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>
          {/* Green tint overlay */}
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 30% 50%, rgba(0, 255, 0, 0.03) 0%, transparent 50%)" }}
          />
          {/* Left gradient overlay */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
          {/* Bottom gradient overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
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
