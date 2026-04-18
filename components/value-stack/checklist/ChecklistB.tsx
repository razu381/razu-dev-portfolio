"use client";

import { motion } from "framer-motion";
import type { ValueStackCheckItem } from "@/data/pages/types";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function ChecklistStyleB({ items }: { items: ValueStackCheckItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="brutalist-card bg-surface border border-foreground/[0.04] p-6 relative group"
          >
            <div className="flex items-start justify-between mb-4">
              <span
                className="font-mono-label font-bold text-primary/20 select-none"
                style={{ fontSize: "2.5rem", lineHeight: 1, letterSpacing: "-0.03em" }}
              >
                {num}
              </span>
              {item.badge && (
                <span className="font-mono-label font-bold text-[10px] text-primary uppercase tracking-[0.12em] px-2 py-[3px] border border-primary/25 bg-transparent shrink-0">
                  {item.badge}
                </span>
              )}
            </div>
            <p className="font-body text-sm text-foreground leading-relaxed">
              {item.text}
              {item.bold && <span className="font-bold">{item.bold}</span>}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
