"use client";

import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    // Only on pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;

      // Update glow based on element under cursor (using ref to avoid re-renders)
      const target = e.target as HTMLElement;
      const interactiveElement = target.closest('a, button, input, textarea, select, [role="button"]');
      const wasHovering = isHoveringRef.current;
      isHoveringRef.current = !!interactiveElement;

      // Only update DOM when hover state actually changes
      if (wasHovering !== isHoveringRef.current) {
        if (isHoveringRef.current) {
          ring.classList.add('cursor-ring-hover');
          dot.classList.add('cursor-dot-hover');
        } else {
          ring.classList.remove('cursor-ring-hover');
          dot.classList.remove('cursor-dot-hover');
        }
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    animate();

    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot hidden md:block"
      />
      <div
        ref={ringRef}
        className="cursor-ring hidden md:block"
      />
    </>
  );
};

export default CustomCursor;
