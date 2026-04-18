"use client";

import { motion } from "framer-motion";
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

const rowVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

const ValueStackSection = ({ data }: { data: ValueStackData }) => {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      <div
        className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
      >
        {data.spineLabel}
      </div>

      <Marquee text={data.marquee.text} highlightWords={data.marquee.highlightWords} />

      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}
      >
        {data.ghostText}
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

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <div className="lg:w-[30%]">
            <span
              className="font-display font-extrabold text-primary/15 select-none"
              style={{ fontSize: "8rem", lineHeight: 1 }}
            >
              {data.bigNum}
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

          <motion.div
            className="lg:w-[70%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ staggerChildren: 0.15 }}
          >
            <motion.p variants={fadeUp} className="font-body text-muted-foreground mb-10">
              {data.introLine}
            </motion.p>

            <motion.p variants={fadeUp} className="font-mono-label text-xs text-muted-foreground uppercase tracking-[0.15em] mb-8">
              {data.stepsLabel}
            </motion.p>

            {data.steps.map((step, i) => (
              <motion.div
                key={step.number}
                custom={i}
                variants={stepVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-surface-alt border-l-[3px] border-l-primary p-6 mb-6 transition-colors duration-300"
                style={{ marginBottom: i === data.steps.length - 1 ? 0 : undefined }}
              >
                <span className="font-mono-label font-bold text-primary block mb-2" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1 }}>
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
          </motion.div>
        </div>

        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-[#1A1A1A]">
          {data.checklist.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between py-5 border-b border-[#1A1A1A] group transition-colors duration-200 hover:bg-surface"
            >
              <div className="flex items-center gap-3 min-w-0 pr-4">
                <span className="font-mono-label text-primary text-sm shrink-0">✓</span>
                <p className="font-body text-sm text-foreground leading-relaxed truncate">
                  {item.text}
                  {item.bold && <span className="font-bold">{item.bold}</span>}
                </p>
              </div>
              {item.badge && (
                <span className="font-mono-label font-bold text-[11px] text-primary uppercase tracking-[0.12em] px-2.5 py-[4px] shrink-0 border border-primary/30 bg-transparent">
                  {item.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-12 lg:mt-20"
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
