"use client";

import { motion } from "framer-motion";
import { Monitor, Zap, Smartphone, Sparkles, Globe, Layers } from "lucide-react";
import Marquee from "../shared/Marquee";
import { useTilt } from "@/hooks/useTilt";
import { ServicesData, ServiceCard } from "@/data/pages/types";

const iconMap: Record<string, React.ComponentType<{ size?: number | string; className?: string }>> = {
  Monitor,
  Zap,
  Smartphone,
  Sparkles,
  Globe,
  Layers,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const serviceCardVariants = {
  hidden: { opacity: 0, y: 60, rotateX: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
} as const;

const TiltCard = ({ card, Icon, variants, index }: {
  card: ServiceCard;
  Icon: React.ComponentType<{ size?: number | string; className?: string }>;
  variants: typeof serviceCardVariants;
  index: number;
}): JSX.Element => {
  const { ref, style, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={variants}
      custom={index}
      className="brutalist-card bg-surface border border-foreground/[0.04] p-6 md:p-8 relative group"
    >
      <div className="flex items-start justify-between mb-6">
        <Icon size={28} className="text-primary transition-all group-hover:drop-shadow-[0_0_8px_hsl(128,100%,46%,0.5)]" />
        <span className="font-mono-label text-xs text-muted-foreground/40">{card.num}</span>
      </div>
      <h3 className="font-heading font-bold text-sm md:text-base text-foreground mb-3 tracking-wide">{card.title}</h3>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
    </motion.div>
  );
};

const ServicesSection = ({ data }: { data: ServicesData }) => {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
        {data.sectionLabel}
      </div>
      <Marquee text={data.marqueeText} />
      <div className="absolute top-24 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
        style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 1 }}>
        {data.ghostText}
      </div>
      <div className="relative z-10 max-w-6xl mx-auto mt-16">
        <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          className="font-mono-label text-sm text-muted-foreground mb-12 tracking-wider">
          {data.sublabel}
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 services-grid">
          {data.cards.map((card, i) => {
            const Icon = iconMap[card.icon];
            return (
              <TiltCard key={card.num} card={card} Icon={Icon} variants={serviceCardVariants} index={i} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
