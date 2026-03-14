"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const navLinks = [
    { label: "WORK", href: isHome ? "#projects" : "/#projects" },
    { label: "ABOUT", href: isHome ? "#about" : "/#about" },
    { label: "BLOG", href: "/blog" },
    { label: "REVIEWS", href: isHome ? "#reviews" : "/#reviews" },
    { label: "CONTACT", href: isHome ? "#contact" : "/#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10"
        style={{ background: "rgba(8,8,8,0.85)", backdropFilter: "blur(12px)" }}>
        <Link href="/" className="font-mono-label text-sm text-primary tracking-wider">
          [ RAZU.DEV ]
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => {
            const isRouterLink = l.href.startsWith("/") && !l.href.startsWith("/#");
            return isRouterLink ? (
              <Link key={l.label} href={l.href}
                className="font-mono-label text-xs tracking-widest text-muted-foreground hover:text-foreground nav-link-underline transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href}
                className="font-mono-label text-xs tracking-widest text-muted-foreground hover:text-foreground nav-link-underline transition-colors">
                {l.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <a href={isHome ? "#contact" : "/#contact"}
            className="hidden md:inline-block font-heading font-bold text-xs bg-primary text-primary-foreground px-5 py-2.5 hover:brightness-110 transition-all">
            HIRE ME →
          </a>
          <button onClick={() => setOpen(true)} className="md:hidden text-foreground" aria-label="Menu">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center gap-10">
          <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-foreground" aria-label="Close">
            <X size={28} />
          </button>
          {navLinks.map(l => {
            const isRouterLink = l.href.startsWith("/") && !l.href.startsWith("/#");
            return isRouterLink ? (
              <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="font-display font-extrabold text-4xl text-foreground hover:text-primary transition-colors">
                {l.label}
              </Link>
            ) : (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                className="font-display font-extrabold text-4xl text-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            );
          })}
          <a href={isHome ? "#contact" : "/#contact"} onClick={() => setOpen(false)}
            className="font-heading font-bold bg-primary text-primary-foreground px-8 py-3 text-lg mt-4">
            HIRE ME →
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
