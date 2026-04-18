"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Marquee from "../shared/Marquee";
import type { HeroData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const TextScramble = ({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) => {
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

  return <span className={className} style={style}>{displayedText}</span>;
};

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

const HeroSection = ({ data }: { data: HeroData }) => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden noise-overlay clip-diagonal-bottom">
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        <div className="relative w-full lg:w-[60%] flex flex-col justify-center px-6 md:px-16 lg:px-20 py-24 lg:py-0">

          <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
            <span className="font-mono-label text-[10px] tracking-[0.2em] text-muted-foreground uppercase"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
              {data.spineLabel}
            </span>
            <div className="w-px h-8 bg-muted-foreground/30 mt-4" />
            <span className="font-mono-label text-xs text-muted-foreground">{data.spineNum}</span>
          </div>

          <motion.div className="relative z-10 lg:ml-14" initial="hidden" animate="visible">
            <motion.div custom={0} variants={fadeUp}
              className="inline-block font-mono-label text-xs text-primary border border-primary px-3 py-1 mb-6 tracking-wider">
              {data.badge}
            </motion.div>

            <motion.div custom={1} variants={fadeUp}>
              <h1 className="font-display font-extrabold leading-[0.95] tracking-tight">
                <span className="block text-3xl md:text-4xl text-foreground">{data.greeting}</span>
                <span className="block w-full text-primary" style={data.nameHighlightStyle ?? { fontSize: "clamp(3rem, 8vw, 6rem)" }}>{data.nameHighlight}</span>
                <TextScramble
                  text={data.scrambleText}
                  className="block text-foreground"
                  style={data.scrambleStyle}
                />
              </h1>
            </motion.div>

            <motion.p custom={2} variants={fadeUp}
              className="font-mono-label text-xs md:text-sm text-muted-foreground tracking-wider mt-6">
              {data.roleTags}
            </motion.p>

            <motion.div custom={3} variants={fadeUp}
              className="flex items-center gap-6 md:gap-10 mt-8">
              {data.stats.map((s, i) => (
                <div key={i} className={`${i > 0 ? "border-l border-border pl-6 md:pl-10" : ""}`}>
                  <div className="font-display font-bold text-2xl md:text-3xl text-primary">{s.num}</div>
                  <div className="font-mono-label text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div custom={4} variants={fadeUp} className="flex flex-wrap gap-4 mt-10">
              <MagneticButton
                href={data.primaryCta.href}
                className="font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all inline-block"
              >
                {data.primaryCta.label}
              </MagneticButton>
              <MagneticButton
                href={data.secondaryCta.href}
                className="font-heading font-bold text-sm border border-primary text-primary px-8 py-3.5 hover:bg-primary/10 transition-all inline-block"
              >
                {data.secondaryCta.label}
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        <div className="relative w-full lg:w-[40%] min-h-[50vh] lg:min-h-screen overflow-hidden" style={{ zIndex: 50 }}>
          <div className="absolute inset-0 flex items-start justify-center">
            <picture>
              <source
                srcSet={data.image.srcSet}
                sizes={data.image.sizes}
              />
              <img
                src={data.image.src}
                alt={data.image.alt}
                className="w-full h-auto object-contain mt-0"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 30% 50%, rgba(0, 255, 0, 0.03) 0%, transparent 50%)" }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
        </div>
      </div>

      <div className="relative z-10">
        <Marquee
          text={data.marquee.text}
          highlightWords={data.marquee.highlightWords}
        />
      </div>
    </section>
  );
};

export default HeroSection;
