"use client";

import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const useTilt = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const rotateX = useSpring(y, springConfig);
  const rotateY = useSpring(x, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    rotateX.set(-yPct * 10); // Limit rotation to 10 degrees
    rotateY.set(xPct * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return {
    ref,
    style: {
      rotateX,
      rotateY,
      transformStyle: "preserve-3d" as const,
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
  };
};
