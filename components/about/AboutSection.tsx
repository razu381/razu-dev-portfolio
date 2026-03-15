"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* Vertical label */}
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        [ 01 — ABOUT ]
      </div>

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        ABOUT
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        {/* Left 30% */}
        <div className="lg:w-[30%]">
          <span className="font-display font-extrabold text-primary/15 select-none" style={{ fontSize: "8rem", lineHeight: 1 }}>01</span>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-display font-bold text-2xl md:text-3xl leading-tight mt-4">
              THE<br />DEVELOPER<br />BEHIND<br />THE CODE.
            </h2>
          </motion.div>
        </div>

        {/* Right 70% */}
        <motion.div className="lg:w-[70%]" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.15 }}>
          <motion.p variants={fadeUp} className="font-display font-medium text-lg md:text-xl text-foreground mb-6">
            4 Years. 19 Countries. 50+ Projects Shipped.
          </motion.p>
          <motion.p variants={fadeUp} className="font-body text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            I'm Razu — a frontend developer based in Noakhali, Bangladesh, with 4 years of experience building modern web interfaces. I've worked with clients from 19 nations, turning Figma designs into pixel-perfect, high-performance React and Next.js applications. I specialize in building fast, accessible, and beautifully animated frontends that users actually enjoy using.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mb-12">
            {["React / Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"].map(skill => (
              <span key={skill} className="font-mono-label text-xs px-4 py-2 bg-surface-alt border border-primary/25 text-foreground tracking-wider">
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating quote */}
      <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
        className="relative z-10 max-w-lg ml-auto mr-6 md:mr-20 -mt-4 lg:-mt-8 bg-surface-alt border-l-[3px] border-l-primary p-6 md:p-8">
        <p className="font-body text-sm text-foreground/90 italic leading-relaxed mb-4">
          "I highly recommend Razu! Extremely patient, professional, and a great teacher. He exceeds every expectation!"
        </p>
        <p className="font-mono-label text-xs text-muted-foreground">
          — Imola · Manager, Commerce Machine · Romania · <span className="text-primary">★★★★★</span>
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
