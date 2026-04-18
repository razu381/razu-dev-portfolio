"use client";

import { motion } from "framer-motion";
import type { ProcessData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const ProcessSection = ({ data }: { data: ProcessData }) => {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 px-6 md:px-10 lg:px-20"
      style={{ background: "#080808" }}
    >
      <span
        className="absolute select-none pointer-events-none font-display font-extrabold"
        style={{
          top: "40px",
          right: "-40px",
          zIndex: 0,
          fontSize: "clamp(10rem, 18vw, 20rem)",
          lineHeight: 1,
          letterSpacing: "-0.04em",
          color: "#F0F0F0",
          opacity: 0.025,
        }}
      >
        03
      </span>

      <div className="relative z-[1] max-w-[1152px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="mb-16"
        >
          <p className="font-mono-label text-sm text-muted-foreground mb-3 tracking-wider">
            {data.sectionLabel}
          </p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground leading-tight">
            {data.headline}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-[60px]">
          {data.steps.map((step, i) => (
            <motion.div
              key={step.number}
              custom={i}
              variants={stepVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="pl-7 transition-all duration-300 hover:border-l-[rgba(0,235,28,0.6)]"
              style={{
                borderLeft: "3px solid rgba(0,235,28,0.25)",
              }}
            >
              <span
                className="font-mono-label font-bold text-primary block mb-4"
                style={{
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </span>
              <div className="w-full h-px bg-[#1A1A1A] mb-4" />
              <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="font-body text-sm italic text-muted-foreground text-center mt-12 md:mt-16"
        >
          {data.closingLine}
        </motion.p>
      </div>
    </section>
  );
};

export default ProcessSection;
