"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import Marquee from "../shared/Marquee";
import type { ValueStackData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.3 + i * 0.12, duration: 0.6 },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const GlowingCard = ({ item, i, totalCards }: { item: any; i: number; totalCards: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const num = String(i + 1).padStart(2, "0");

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 80%", "end 20%"],
  });

  const activeGlowOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const activeBorderColor = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [
      "hsla(0, 0%, 94.1%, 0.04)", // base border
      "hsla(128, 100%, 46%, 0.4)", // primary/40
      "hsla(128, 100%, 46%, 0.4)",
      "hsla(0, 0%, 94.1%, 0.04)"
    ]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      custom={i}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="brutalist-card bg-surface border p-6 relative group overflow-hidden"
      style={{
        position: "sticky",
        top: `calc(8rem + ${i * 4.5}rem)`,
        zIndex: i,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.4)",
        borderColor: activeBorderColor,
      }}
    >
      {/* Scroll Active Glow Effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: activeGlowOpacity,
          background: `radial-gradient(600px circle at 50% 50%, hsla(128, 100%, 46%, 0.08), transparent 40%)`,
        }}
      />

      {/* Mouse Hover Glow Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, hsla(128, 100%, 46%, 0.08), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-3">
          <span
            className="font-mono-label font-bold text-primary/20 select-none transition-colors duration-300 group-hover:text-primary/40"
            style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.03em" }}
          >
            {num}
          </span>
          {item.badge && (
            <span className="font-mono-label font-bold text-[10px] text-primary uppercase tracking-[0.12em] px-2 py-[3px] border border-primary/25 bg-transparent shrink-0">
              {item.badge}
            </span>
          )}
        </div>
        <p className="font-body text-base md:text-lg font-medium text-foreground leading-relaxed">
          {item.text}
          {item.bold && <span className="font-bold text-primary">{item.bold}</span>}
        </p>
      </div>
    </motion.div>
  );
};

const ValueStackSection = ({ data }: { data: ValueStackData }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: stepsProgress } = useScroll({
    target: stepsContainerRef,
    offset: ["start center", "end center"],
  });

  const smoothSectionProgress = useSpring(sectionProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const smoothStepsProgress = useSpring(stepsProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const clipPathInset = useTransform(smoothSectionProgress, [0.2, 0.8], [100, 0]);
  const clipPath = useMotionTemplate`inset(${clipPathInset}% 0 0 0)`;

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {data.spineLabel}
      </div>

      <Marquee text={data.marquee.text} highlightWords={data.marquee.highlightWords} />

      <div className="overflow-hidden">
        <div
          className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none pointer-events-none"
          style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}
        >
          {data.ghostText}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-16">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="font-mono-label text-sm text-muted-foreground tracking-wider mb-12"
        >
          [{data.bigNum}] {data.sectionLabel}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] lg:items-start gap-12 lg:gap-16">
          {/* LEFT COLUMN - STICKY HEADLINE */}
          <div className="lg:sticky lg:top-32 lg:self-start lg:h-fit">
            <span
              className="font-display font-extrabold text-primary/15 select-none block relative"
              style={{ fontSize: "8rem", lineHeight: 1 }}
            >
              {data.bigNum}
              <motion.span
                className="absolute inset-0 font-display font-extrabold text-primary select-none pointer-events-none"
                style={{ clipPath }}
              >
                {data.bigNum}
              </motion.span>
            </span>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mt-4">
                {data.headline.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - SCROLLING CONTENT */}
          <div>
            {/* CHECKLIST - NUMBERED CARDS */}
            <div className="flex flex-col gap-[15vh] pb-[10vh]">
              {data.checklist.map((item, i) => (
                <GlowingCard key={i} item={item} i={i} totalCards={data.checklist.length} />
              ))}
            </div>

            {/* THIN RULE */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
              className="h-px bg-[#1A1A1A] my-12 origin-left"
            />

            {/* PROCESS STEPS */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="font-mono-label text-xs text-muted-foreground uppercase tracking-[0.15em] mb-8"
            >
              {data.stepsLabel}
            </motion.p>

            <div className="relative" ref={stepsContainerRef}>
              {/* Background Track Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-foreground/10 z-10" />
              {/* Animated Foreground Line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary origin-top z-20"
                style={{ scaleY: smoothStepsProgress }}
              />

              {data.steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  custom={i}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-surface-alt p-6 mb-6 transition-colors duration-300 relative z-0 ml-[3px]"
                  style={{ marginBottom: i === data.steps.length - 1 ? 0 : undefined }}
                >
                  <span
                    className="font-mono-label font-bold text-primary block mb-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1 }}
                  >
                    {step.number}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-[1.65]">
                    {step.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* RISK REVERSAL + CTA - FULL WIDTH */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-16"
        >
          <motion.div
            variants={fadeUp}
            className="bg-surface-alt border-l-[3px] border-l-primary p-6 md:p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          >
            <div>
              <p className="font-heading font-bold text-foreground leading-[1.5]" style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}>
                {data.riskReversal.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
              <p className="font-body text-[13px] text-muted-foreground italic mt-4 leading-[1.6] max-w-lg">
                {data.supportingLine}
              </p>
            </div>

            <a
              href={data.cta.href}
              className="shrink-0 inline-block font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all"
              style={{ boxShadow: "0 0 0 0 transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,234,28,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
            >
              {data.cta.label}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueStackSection;
