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
    <section className="relative w-screen -mx-[calc(50vw-50%)] overflow-hidden py-16 md:py-24 border-y border-white/[0.02] bg-[#050505]">
      {/* Subtle ambient glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 blur-[100px] md:blur-[140px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto"
      >
        {/* Left — solid white */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full text-center md:text-right flex justify-center md:justify-end"
        >
          <h2
            className="font-display font-extrabold text-foreground leading-[1.1] tracking-tight max-w-md"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.75rem)" }}
          >
            {leftText}
          </h2>
        </motion.div>

        {/* Divider (Horizontal on mobile, Vertical on desktop) */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="w-20 h-px md:w-[2px] md:h-32 md:mx-10 lg:mx-16 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-primary to-transparent shrink-0"
          style={{
            boxShadow: "0 0 20px 2px hsla(128,100%,46%,0.4)",
          }}
        />

        {/* Right — outlined glow */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex-1 w-full text-center md:text-left flex justify-center md:justify-start"
        >
          <h2
            className="font-display font-extrabold leading-[1.05] tracking-tight max-w-lg"
            style={{
              fontSize: "clamp(2.2rem, 4.2vw, 3.5rem)",
              WebkitTextStroke: "1.5px hsl(128 100% 46%)",
              color: "transparent",
              textShadow: "0 0 40px hsla(128,100%,46%,0.15)",
            }}
          >
            {rightText}
          </h2>
        </motion.div>
      </motion.div>
    </section>
  );
}
