"use client";

import { motion } from "framer-motion";
import Marquee from "../shared/Marquee";
import type { ValueStackData } from "@/data/pages/types";
import ChecklistA from "./checklist/ChecklistA";

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

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16">
          {/* LEFT COLUMN - STICKY HEADLINE */}
          <div className="lg:sticky lg:top-32 lg:self-start">
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

          {/* RIGHT COLUMN - SCROLLING CONTENT */}
          <div>
            {/* CHECKLIST */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <ChecklistA items={data.checklist} />
            </motion.div>

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