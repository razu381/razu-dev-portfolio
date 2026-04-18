"use client";

import { motion } from "framer-motion";
import type { ValueStackCheckItem } from "@/data/pages/types";

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function ChecklistStyleC({ items }: { items: ValueStackCheckItem[] }) {
  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={rowVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-6 py-5 pl-8 border-l-[2px] border-l-primary/20 hover:border-l-primary transition-colors duration-200 group"
        >
          <p className="font-body text-base md:text-lg text-foreground leading-relaxed flex-1">
            {item.text}
            {item.bold && <span className="font-bold">{item.bold}</span>}
          </p>
          {item.badge && (
            <span className="font-mono-label font-bold text-[10px] text-muted-foreground uppercase tracking-[0.12em] px-2.5 py-[4px] shrink-0 border border-border group-hover:border-primary/40 group-hover:text-primary/80 transition-colors duration-200 bg-transparent">
              {item.badge}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
}
