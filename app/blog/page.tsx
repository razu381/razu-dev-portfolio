"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import CustomCursor from "@/components/shared/CustomCursor";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Marquee from "@/components/shared/Marquee";
import { posts, getPostsByCategory } from "@/data/posts";

const categories = ["ALL", "REACT", "NEXT.JS", "TAILWIND CSS", "TYPESCRIPT", "PERFORMANCE", "TIPS"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function BlogArchive() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const filtered = getPostsByCategory(activeCategory);
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end pb-8 pt-24 px-6 md:px-10 lg:px-20 overflow-hidden">
        {/* Vertical label */}
        <div className="hidden lg:block absolute left-6 top-32 font-mono-label text-xs text-primary tracking-[0.2em] uppercase"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          [ ALL POSTS ]
        </div>

        {/* Ghost text */}
        <div
          className="absolute top-12 left-0 right-0 text-center font-display font-extrabold text-stroke select-none"
          style={{ fontSize: "clamp(5rem, 20vw, 18rem)", lineHeight: 1 }}>
          BLOG
        </div>

        <div className="relative z-10 max-w-[960px] mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="font-mono-label text-sm text-primary mb-3 tracking-wider">[ BLOG ]</p>
            <h1 className="font-display font-extrabold leading-[0.95]" style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}>
              <span className="block text-foreground">THOUGHTS.</span>
              <span className="block text-foreground">TUTORIALS.</span>
              <span className="block text-foreground">TIPS.</span>
            </h1>
            <p className="font-body text-muted-foreground mt-4">
              React · Next.js · Tailwind CSS · TypeScript · Performance · UI/UX
            </p>
          </motion.div>
        </div>
      </section>

      <Marquee
        text="REACT · NEXT.JS · TAILWIND · TYPESCRIPT · FRAMER MOTION · PERFORMANCE · ACCESSIBILITY · CSS · HTML · ANIMATIONS ·"
        highlightWords={["REACT", "NEXT.JS", "TAILWIND"]}
      />

      {/* Filter bar */}
      <div className="sticky top-16 z-40 border-b border-border py-4"
        style={{ background: "rgba(8,8,8,0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[960px] mx-auto px-6 flex flex-wrap gap-4 md:gap-6">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`font-mono-label text-[11px] tracking-widest uppercase pb-1 border-b transition-colors ${
                activeCategory === cat
                  ? "text-primary border-primary"
                  : "text-muted-foreground/60 border-transparent hover:text-foreground"
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Post grid */}
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 blog-archive-grid">
          {filtered.map((post, i) => {
            const isFeatured = i === 0;
            const isWide = i === 5;
            return (
              <motion.div key={post.id}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                transition={{ delay: i * 0.05 }} variants={fadeUp}
                className={`${isFeatured ? "md:col-span-2 lg:col-span-2" : ""} ${isWide ? "md:col-span-2 lg:col-span-3" : ""}`}>
                <Link href={`/blog/${post.slug}`}
                  className={`block bg-surface border border-border overflow-hidden group brutalist-card h-full ${isWide ? "lg:flex" : ""}`}>
                  {/* Image */}
                  <div className={`flex items-center justify-center ${
                    isWide ? "lg:w-[40%] aspect-video lg:aspect-auto lg:min-h-[200px]" : isFeatured ? "aspect-[16/7]" : "aspect-video"
                  }`}
                    style={{ background: "linear-gradient(135deg, #111 0%, #0d1a10 100%)" }}>
                    <span className="font-mono-label text-[10px] text-muted-foreground/30 tracking-wider">[ POST IMAGE ]</span>
                  </div>

                  {/* Content */}
                  <div className={`p-5 ${isWide ? "lg:w-[60%] lg:p-6 lg:flex lg:flex-col lg:justify-center" : ""}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono-label text-[10px] text-primary border border-primary px-2 py-0.5 tracking-wider">
                        {post.category}
                      </span>
                      <span className="font-mono-label text-[10px] text-muted-foreground/60">{post.date}</span>
                    </div>
                    <h3 className={`font-display font-bold text-foreground leading-tight mt-2 ${isFeatured ? "text-xl" : "text-sm md:text-base"}`}>
                      {post.title}
                    </h3>
                    <p className={`font-body text-sm text-muted-foreground mt-2 leading-relaxed ${isFeatured ? "line-clamp-3" : "line-clamp-2"}`}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-mono-label text-[10px] text-muted-foreground/40">{post.readTime}</span>
                      <span className="font-mono-label text-[10px] text-muted-foreground/60 group-hover:text-primary transition-colors">
                        READ →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 mt-16 font-mono-label text-xs">
          <span className="text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer">← PREV</span>
          <span className="bg-primary text-primary-foreground px-3 py-1.5">01</span>
          <span className="text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer px-3 py-1.5">02</span>
          <span className="text-muted-foreground/60 hover:text-foreground transition-colors cursor-pointer px-3 py-1.5">03</span>
          <span className="text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer">NEXT →</span>
        </div>
      </section>

      <Footer />
    </>
  );
}
