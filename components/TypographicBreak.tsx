"use client";

import { motion } from "framer-motion";

interface TypographicBreakProps {
  text: string;
  direction?: "left" | "right";
}

export default function TypographicBreak({ text, direction = "left" }: TypographicBreakProps) {
  return (
    <section className="relative py-32 overflow-hidden w-screen -mx-[calc(50vw-50%)]">
      <motion.div
        initial={{ x: direction === "left" ? -100 : 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="whitespace-nowrap px-6 md:px-20"
      >
        <span className="font-display font-extrabold text-stroke leading-none inline-block">
          {text}
        </span>
      </motion.div>
    </section>
  );
}
