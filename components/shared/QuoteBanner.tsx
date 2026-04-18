"use client";

import { motion } from "framer-motion";

interface QuoteBannerProps {
  text: string;
  highlight?: string;
}

export default function QuoteBanner({ text, highlight }: QuoteBannerProps) {
  const leftText = highlight ? text.replace(highlight, "").trim() : text;
  const rightText = highlight ?? "";

  return (
    <section className="relative w-screen -mx-[calc(50vw-50%)] py-16 md:py-24 border-y border-border bg-[#0a0a0a] overflow-hidden">
      {/* Decorative brutalist top-left label */}
      <div className="absolute top-0 left-6 md:left-10 lg:left-20 px-3 py-1 bg-surface-alt border-b border-x border-border font-mono-label text-[10px] text-primary/70 tracking-[0.2em] uppercase">
        [ QUOTE ]
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-6 md:px-10 lg:px-20 max-w-7xl mx-auto mt-4"
      >
        {/* Left — Solid text */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full"
        >
          <h2
            className="font-display font-bold text-foreground leading-[1.1] tracking-tight uppercase"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            {leftText}
          </h2>
        </motion.div>

        {/* Divider — Brutalist stark line */}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="w-full h-[2px] md:w-[2px] md:h-32 bg-primary/40 shrink-0"
        />

        {/* Right — Outlined text */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full"
        >
          <h2
            className="font-display font-extrabold leading-[1.05] tracking-tight uppercase"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              WebkitTextStroke: "1.5px hsl(128 100% 46%)",
              color: "transparent",
            }}
          >
            {rightText}
          </h2>
        </motion.div>
      </motion.div>

      {/* Decorative corner accents */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex gap-1">
        <div className="w-1 h-1 bg-primary/50" />
        <div className="w-1 h-1 bg-primary/50" />
        <div className="w-1 h-1 bg-primary/50" />
      </div>
    </section>
  );
}
