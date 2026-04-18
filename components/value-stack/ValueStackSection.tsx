"use client";

import { motion } from "framer-motion";
import type { ValueStackData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const checkItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ValueStackSection = ({ data }: { data: ValueStackData }) => {
  return (
    <section
      className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden"
      style={{ background: "#0A0A0A" }}
    >
      <div className="relative z-10 max-w-[1152px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-12"
        >
          <p className="font-mono-label text-sm text-muted-foreground mb-3 tracking-wider">
            {data.sectionLabel}
          </p>
          <p className="font-body text-[15px] text-muted-foreground mb-8">
            {data.introLine}
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight whitespace-pre-line">
            {data.headline}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-[720px] mx-auto"
          style={{
            background: "#111111",
            border: "1px solid #1A1A1A",
            padding: "clamp(24px, 5vw, 64px)",
            boxShadow: "0 8px 30px rgba(0, 235, 28, 0.07)",
          }}
        >
          <div className="space-y-4">
            {data.checklist.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={checkItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <span className="text-primary text-lg leading-6 shrink-0">
                  ✓
                </span>
                <p className="font-body text-[16px] md:text-[18px] text-foreground leading-relaxed">
                  {item.text}
                  {item.bold && (
                    <span className="font-bold">{item.bold}</span>
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 md:mt-12 pt-8"
            style={{ borderTop: "2px solid #00EB1C" }}
          >
            <p className="font-heading font-bold text-[20px] md:text-[24px] text-foreground leading-relaxed mb-3">
              {data.riskReversal}
            </p>
            <p className="font-body text-[13px] text-muted-foreground italic leading-relaxed">
              {data.supportingLine}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-center"
          >
            <a
              href={data.cta.href}
              className="inline-block font-heading font-bold text-sm bg-primary text-primary-foreground px-8 py-3.5 hover:brightness-110 transition-all"
              style={{ boxShadow: "0 0 0 0 transparent" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 8px 24px rgba(0,234,28,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 0 transparent")
              }
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
