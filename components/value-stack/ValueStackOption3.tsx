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
    transition: { delay: 0.2 + i * 0.08, duration: 0.6 },
  }),
};

const ValueStackOption3 = ({ data }: { data: ValueStackData }) => {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div
        className="absolute select-none pointer-events-none"
        style={{
          top: "50%",
          right: "-40px",
          transform: "translateY(-50%)",
          zIndex: 0,
          fontSize: "clamp(12rem, 22vw, 22rem)",
          lineHeight: 1,
          color: "#F0F0F0",
          opacity: 0.02,
        }}
      >
        <span className="font-display font-extrabold">06</span>
      </div>

      <div className="relative z-10 max-w-[1152px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono-label text-xs text-muted-foreground tracking-[0.15em] uppercase mb-4">
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
          className="font-display font-bold text-foreground leading-[1.1] mb-14"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {data.headline.split("\n").map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </motion.h2>

        <div className="w-full">
          {data.checklist.map((item, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={i}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center py-5 group transition-colors duration-200 hover:bg-[rgba(0,235,28,0.02)]"
                style={{
                  borderTop: i === 0 ? "1px solid #1A1A1A" : undefined,
                  borderBottom: "1px solid #1A1A1A",
                }}
              >
                <span className="font-mono-label font-bold text-[13px] text-primary min-w-[48px] shrink-0 tracking-[0.05em]">
                  {num} /
                </span>
                <p className="font-body text-[17px] text-foreground flex-1 px-6">
                  {item.text}
                  {item.bold && <span className="font-bold">{item.bold}</span>}
                </p>
                {item.badge && (
                  <span
                    className="font-mono-label font-bold text-[11px] text-primary uppercase tracking-[0.12em] px-3 py-[5px] shrink-0 transition-colors duration-200 group-hover:border-[rgba(0,235,28,0.6)]"
                    style={{ border: "1px solid rgba(0, 235, 28, 0.3)" }}
                  >
                    {item.badge}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="mt-[72px] h-[2px] bg-primary origin-left"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: 0.8, duration: 0.6 } } }}
          className="mt-12"
        >
          <p
            className="font-display font-extrabold text-foreground leading-[1.2] max-w-[800px] whitespace-pre-line"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            {data.riskReversal}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.9, duration: 0.6 } } }}
        >
          <p className="font-body text-sm text-muted-foreground italic mt-6 max-w-[640px]">
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

export default ValueStackOption3;
