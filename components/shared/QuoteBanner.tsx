"use client";

import { motion } from "framer-motion";

interface QuoteBannerProps {
  text: string;
  highlight?: string;
}

export default function QuoteBanner({ text, highlight }: QuoteBannerProps) {
  const textLines = text.split("\n");
  const highlightLines = highlight ? highlight.split("\n") : [];

  return (
    <section className="relative w-screen -mx-[calc(50vw-50%)] py-32 overflow-hidden" style={{ background: "rgba(0, 255, 0, 0.03)" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:px-20"
      >
        <h2
          className="font-display font-extrabold leading-[0.95] uppercase"
          style={{
            fontSize: "clamp(4.5rem, 9vw, 9rem)",
            letterSpacing: "-0.02em",
          }}
        >
          {highlightLines.length > 0 ? (
            <>
              {textLines.map((line, i) => (
                <span
                  key={`t-${i}`}
                  className="block"
                  style={{ color: "#F0F0F0" }}
                >
                  {line}
                </span>
              ))}
              {highlightLines.map((line, i) => (
                <span
                  key={`h-${i}`}
                  className="block"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.5px rgba(240, 240, 240, 0.18)",
                  }}
                >
                  {line}
                </span>
              ))}
            </>
          ) : (
            textLines.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))
          )}
        </h2>
      </motion.div>
    </section>
  );
}
