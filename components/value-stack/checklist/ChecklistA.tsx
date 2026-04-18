"use client";

import { motion } from "framer-motion";
import type { ValueStackCheckItem } from "@/data/pages/types";

const rowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function ChecklistStyleA({ items }: { items: ValueStackCheckItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 border-t border-[#1A1A1A]">
      {items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-between py-5 border-b border-[#1A1A1A] group transition-colors duration-200 hover:bg-surface"
        >
          <div className="flex items-center gap-3 min-w-0 pr-4">
            <span className="font-mono-label text-primary text-sm shrink-0">✓</span>
            <p className="font-body text-sm text-foreground leading-relaxed truncate">
              {item.text}
              {item.bold && <span className="font-bold">{item.bold}</span>}
            </p>
          </div>
          {item.badge && (
            <span className="font-mono-label font-bold text-[11px] text-primary uppercase tracking-[0.12em] px-2.5 py-[4px] shrink-0 border border-primary/30 bg-transparent">
              {item.badge}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
