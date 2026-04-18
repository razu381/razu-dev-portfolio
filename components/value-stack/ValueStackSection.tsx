"use client";

import { motion } from "framer-motion";
import type { ValueStackData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const rowVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.15 + i * 0.07, duration: 0.6 },
  }),
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
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-20"
      style={{ background: "#0A0A0A" }}
    >
      <span
        className="absolute select-none pointer-events-none font-display font-extrabold whitespace-nowrap"
        style={{
          top: "50%",
          right: "-60px",
          transform: "translateY(-50%)",
          zIndex: 0,
          fontSize: "clamp(8rem, 16vw, 18rem)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "#F0F0F0",
          opacity: 0.025,
        }}
      >
        VALUE
      </span>

      <div className="relative z-[1] max-w-[1152px] mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-mono-label text-xs text-muted-foreground tracking-[0.15em] uppercase mb-4 block">
            {data.sectionLabel}
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-[15px] text-muted-foreground mb-16">
            {data.introLine}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] items-start">
          {/* LEFT COLUMN */}
          <div className="lg:border-r lg:border-[#1A1A1A] lg:pr-16">
            <motion.h2
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display font-bold text-foreground leading-[1.1] mb-12"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
            >
              Most developers<br />
              charge extra<br />
              for this.<br />
              <br />
              It&apos;s all<br />
              included.
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
              className="h-px bg-[#1A1A1A] mb-10 origin-left"
            />

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.6 } } }}
              className="font-mono-label text-[11px] text-muted-foreground uppercase tracking-[0.15em] mb-8"
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
                className="border-l-[3px] pl-5 mb-8 transition-colors duration-300 hover:border-l-[rgba(0,235,28,0.6)]"
                style={{
                  borderLeftColor: "rgba(0, 235, 28, 0.25)",
                  marginBottom: i === data.steps.length - 1 ? 0 : undefined,
                }}
              >
                <span
                  className="font-mono-label font-bold text-primary block mb-2.5"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", lineHeight: 1 }}
                >
                  {step.number}
                </span>
                <h4 className="font-heading font-bold text-[15px] text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="font-body text-sm text-muted-foreground leading-[1.65]">
                  {step.body}
                </p>
              </motion.div>
            ))}

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.64, duration: 0.6, ease: "easeOut" }}
              className="mt-10 mb-10 h-[2px] bg-primary origin-left"
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.74, duration: 0.6 } } }}
            >
              <p
                className="font-heading font-bold text-foreground leading-[1.5]"
                style={{ fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)" }}
              >
                {data.riskReversal.split("\n").map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
              <p className="font-body text-[13px] text-muted-foreground italic mt-4 leading-[1.6]">
                {data.supportingLine}
              </p>
              <div className="mt-8">
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

          {/* RIGHT COLUMN */}
          <div className="mt-12 lg:mt-0 lg:pl-16">
            {data.checklist.map((item, i) => (
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
                <div className="flex items-center flex-1 min-w-0">
                  <span className="font-mono-label text-sm text-primary mr-4 shrink-0">✓</span>
                  <p className="font-body text-base text-foreground pr-4">
                    {item.text}
                    {item.bold && <span className="font-bold">{item.bold}</span>}
                  </p>
                </div>
                {item.badge && (
                  <span
                    className="font-mono-label font-bold text-[11px] text-primary uppercase tracking-[0.12em] px-3 py-[5px] shrink-0 transition-colors duration-200 group-hover:border-[rgba(0,235,28,0.6)]"
                    style={{ border: "1px solid rgba(0, 235, 28, 0.3)", background: "transparent" }}
                  >
                    {item.badge}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
