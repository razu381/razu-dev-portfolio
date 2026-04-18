"use client";

import { motion } from "framer-motion";

interface QuoteBannerProps {
  text: string;
  highlight?: string;
}

export default function QuoteBanner({ text, highlight }: QuoteBannerProps) {
  const parts = highlight ? text.split(highlight) : [text];

  return (
    <section className="relative w-screen -mx-[calc(50vw-50%)] py-16 overflow-hidden" style={{ background: "rgba(0, 255, 0, 0.03)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:px-20"
      >
        <h2 className="font-display font-extrabold text-foreground leading-[1.1]" style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)" }}>
          {highlight ? (
            <>
              {parts[0]}
              <span className="text-stroke">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            text
          )}
        </h2>
      </motion.div>
    </section>
  );
}
