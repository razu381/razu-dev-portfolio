"use client";

import { Github, Linkedin } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  const footerLinks = [
    { label: "Work", href: isHome ? "#projects" : "/#projects" },
    { label: "About", href: isHome ? "#about" : "/#about" },
    { label: "Blog", href: "/blog" },
    { label: "Reviews", href: isHome ? "#reviews" : "/#reviews" },
    { label: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <footer ref={footerRef} className="relative py-16 px-6 md:px-10 lg:px-20 overflow-hidden" style={{ background: "#050505", borderTop: "1px solid #1a1a1a" }}>
      {/* Top row */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <span className="font-mono-label text-xs text-muted-foreground/60">RAZU © 2025</span>
        <div className="flex gap-6">
          {footerLinks.map(l => (
            <a key={l.href} href={l.href}
              className="font-mono-label text-xs text-muted-foreground/40 hover:text-primary transition-colors tracking-wider">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-muted-foreground/40 hover:text-primary transition-colors" aria-label="Fiverr">
            <span className="font-mono-label text-xs font-bold">5RR</span>
          </a>
          <a href="#" className="text-muted-foreground/40 hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-muted-foreground/40 hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Giant name */}
      <div
        className={`text-center font-display font-extrabold text-stroke-faint select-none leading-none ${isVisible ? 'visible' : ''}`}
        style={{ fontSize: "clamp(4rem, 10vw, 12rem)" }}>
        SHOHIDUL ISLAM RAZU
      </div>

      <p className="text-center font-mono-label text-[10px] text-muted-foreground/30 tracking-[0.3em] mt-6 uppercase">
        Frontend Developer · Noakhali, Bangladesh
      </p>
    </footer>
  );
};

export default Footer;
