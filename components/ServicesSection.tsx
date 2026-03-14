"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Smartphone, Sparkles, Globe, Layers } from "lucide-react";
import Marquee from "./Marquee";

const cards = [
  { icon: Monitor, title: "PIXEL-PERFECT UI DEVELOPMENT", desc: "I turn your Figma, XD, or Sketch designs into flawless React components — exact spacing, exact typography, exact interactions. Nothing approximate.", num: "01", area: "a" },
  { icon: Zap, title: "NEXT.JS PERFORMANCE & SEO", desc: "Server-side rendering, static generation, image optimization, Core Web Vitals — I build Next.js apps that score 95+ on Google PageSpeed and rank.", num: "02", area: "b" },
  { icon: Smartphone, title: "RESPONSIVE ON EVERY DEVICE", desc: "Mobile-first Tailwind CSS layouts that look and feel intentional on every screen size — phones, tablets, desktops, and ultrawide monitors.", num: "03", area: "c" },
  { icon: Sparkles, title: "SMOOTH ANIMATIONS & INTERACTIONS", desc: "Framer Motion page transitions, scroll animations, micro-interactions — the details that make a good site feel exceptional.", num: "04", area: "d" },
  { icon: Globe, title: "API INTEGRATION & DYNAMIC DATA", desc: "REST APIs, headless CMS (Contentful, Sanity), Supabase, Firebase — I connect your frontend to any backend cleanly and efficiently.", num: "05", area: "e" },
  { icon: Layers, title: "COMPONENT LIBRARIES & DESIGN SYSTEMS", desc: "Reusable, documented React component libraries with Storybook — built so your team can scale the UI without breaking consistency.", num: "06", area: "f" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden">
      <Marquee text="WHAT I DO · WHAT I DO · WHAT I DO ·" />

      {/* Ghost text */}
      <div
        className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 15vw, 16rem)", lineHeight: 1 }}>
        SERVICES
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-16">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="font-mono-label text-sm text-muted-foreground mb-12 tracking-wider">
          <span className="text-primary">[ 02 ]</span> &nbsp;EVERY PROJECT COMES WITH:
        </motion.p>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 services-grid">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div key={card.num}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="brutalist-card bg-surface border border-foreground/[0.04] p-6 md:p-8 relative group">
                <div className="flex items-start justify-between mb-6">
                  <Icon size={28} className="text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(128,100%,46%,0.5)]" />
                  <span className="font-mono-label text-xs text-muted-foreground/40">{card.num}</span>
                </div>
                <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-3 tracking-wide">{card.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
