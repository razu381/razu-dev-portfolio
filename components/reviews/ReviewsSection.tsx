"use client";

import { motion } from "framer-motion";
import Marquee from "../shared/Marquee";

const textReviews = [
  {
    quote: "I highly recommend Razu! He is extremely patient, professional, and even a good teacher! He will do anything it takes to do a job that exceeds any expectations! It was great to collaborate with him.",
    name: "Imola",
    role: "Manager, Commerce Machine",
    country: "Romania",
  },
  {
    quote: "Razu delivered exactly what I asked for and more. Fast turnaround, clean code, excellent communication throughout.",
    name: "[Client Name]",
    role: "",
    country: "[Country]",
  },
  {
    quote: "Best frontend developer I've worked with. Will definitely return for future projects. Truly exceeded expectations.",
    name: "[Client Name]",
    role: "",
    country: "[Country]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const ReviewsSection = () => {
  return (
    <section id="reviews" className="relative py-24 md:py-32 overflow-hidden">
      {/* Vertical label */}
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        [ 05 — REVIEWS ]
      </div>

      <Marquee
        text="CLIENT LOVE · 50+ PROJECTS SHIPPED · 19 COUNTRIES · 4 YEARS · CLIENT LOVE ·"
        highlightWords={["50+", "CLIENT LOVE"]}
      />

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        REVIEWS
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-20 mt-16">
        <p className="font-mono-label text-sm text-muted-foreground mb-12 tracking-wider">
          <span className="text-primary">[ 05 ]</span> &nbsp;WHAT CLIENTS SAY
        </p>

        {/* Video reviews */}
        <p className="font-mono-label text-xs text-primary mb-6 tracking-wider">[ VIDEO TESTIMONIALS ]</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {[1, 2, 3].map(i => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-surface border border-border overflow-hidden">
              <div className="aspect-video w-full">
                {/* REPLACE YOUR_VIDEO_ID_HERE with actual YouTube video ID */}
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE"
                  title={`Video review ${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <span className="font-mono-label text-[10px] text-primary tracking-wider">[ VIDEO REVIEW ]</span>
                <p className="font-heading font-bold text-sm text-foreground mt-1">Client Name</p>
                <p className="font-body text-xs text-muted-foreground">— Country</p>
                <p className="text-primary text-xs mt-1">★★★★★</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Text reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {textReviews.map((r, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className={`bg-surface-alt border-l-[3px] border-l-primary p-6 md:p-8 relative ${i === 2 ? "md:col-span-2" : ""} ${i === 1 ? "md:mt-8" : ""}`}>
              <span className="absolute top-2 left-4 font-display text-primary/10 select-none pointer-events-none" style={{ fontSize: "6rem", lineHeight: 1 }}>"</span>
              <p className="font-body text-sm text-foreground/90 italic leading-relaxed mb-4 relative z-10">
                "{r.quote}"
              </p>
              <p className="font-mono-label text-xs text-muted-foreground relative z-10">
                — {r.name}{r.role && ` · ${r.role}`} · {r.country} · <span className="text-primary">★★★★★</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
