"use client";

import { motion } from "framer-motion";
import type { AboutData } from "@/data/pages/types";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = ({ data }: { data: AboutData }) => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden" style={{ background: "#0a0a0a" }}>
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.sectionLabel}
      </div>
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        {data.ghostText}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        <div className="lg:w-[30%]">
          <span className="font-display font-extrabold text-primary/15 select-none" style={{ fontSize: "8rem", lineHeight: 1 }}>{data.bigNum}</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mt-4">
              {data.heading.split('\n').map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h2>
          </motion.div>
        </div>
        <motion.div className="lg:w-[70%]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}>
          <motion.p variants={fadeUp} className="font-display font-medium text-lg md:text-xl text-foreground mb-6">
            {data.subtitle}
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            {data.bio}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            {data.skills.map(skill => (
              <span key={skill} className="font-mono-label text-xs px-4 py-2 bg-surface-alt border border-primary/25 text-foreground tracking-wider">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="relative z-10 max-w-lg ml-auto mr-6 md:mr-20 -mt-4 lg:-mt-8 bg-surface-alt border-l-[3px] border-l-primary p-6 md:p-8">
        <p className="font-body text-sm text-foreground/90 italic leading-relaxed mb-4">
          {data.quote.text}
        </p>
        <p className="font-mono-label text-xs text-muted-foreground">
          — {data.quote.author} · {data.quote.role} · {data.quote.country} · <span className="text-primary">★★★★★</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
