"use client";

import { motion } from "framer-motion";
import type { ValueStackData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6 },
  }),
};

const ValueStackOption1 = ({ data }: { data: ValueStackData }) => {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div
        className="absolute top-0 select-none pointer-events-none"
        style={{
          left: "-20px",
          zIndex: 0,
          fontSize: "clamp(8rem, 14vw, 16rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "#F0F0F0",
          opacity: 0.025,
        }}
      >
        <span className="font-display font-extrabold">INCLUDED</span>
      </div>

      <div className="relative z-10 max-w-[1152px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono-label text-xs text-muted-foreground tracking-[0.15em] uppercase mb-6">
            {data.sectionLabel}
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-[15px] text-muted-foreground mb-12">
            {data.introLine}
          </p>
        </motion.div>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, duration: 0.6 } } }}
          className="font-display font-bold text-foreground leading-[1.1] mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {data.headline.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h2>

        <div className="w-full">
          {data.checklist.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={rowVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center justify-between py-[18px]"
              style={{
                borderTop: i === 0 ? "1px solid #1A1A1A" : undefined,
                borderBottom: "1px solid #1A1A1A",
              }}
            >
              <div className="flex items-center flex-1 min-w-0">
                <span className="font-mono-label text-primary mr-4 shrink-0">✓</span>
                <p className="font-body text-base text-foreground truncate">
                  {item.text}
                  {item.bold && <span className="font-bold">{item.bold}</span>}
                </p>
              </div>
              {item.badge && (
                <span
                  className="font-mono-label font-bold text-[11px] text-primary uppercase tracking-[0.12em] px-2.5 py-1 shrink-0 ml-4"
                  style={{ border: "1px solid rgba(0, 235, 28, 0.3)" }}
                >
                  {item.badge}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="mt-16 h-[2px] bg-primary origin-left"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.6 } } }}
          className="mt-10"
        >
          <p
            className="font-heading font-bold text-foreground leading-[1.3] max-w-[720px] whitespace-pre-line"
            style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)" }}
          >
            {data.riskReversal}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.6 } } }}
        >
          <p className="font-body text-[13px] text-muted-foreground italic mt-5 max-w-[560px]">
            {data.supportingLine}
          </p>
          <div className="mt-10">
            <a
              href={data.cta.href}
              className="inline-block font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all"
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,234,28,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")}
            >
              {data.cta.label}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueStackOption1;
