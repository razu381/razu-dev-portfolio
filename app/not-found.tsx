"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 font-display font-extrabold text-9xl text-stroke-accent">404</h1>
        <p className="mb-4 font-heading text-2xl text-foreground">Page Not Found</p>
        <p className="mb-8 font-body text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Link
          href="/"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-sm px-8 py-3 hover:brightness-110 transition-all"
        >
          Back to Home →
        </Link>
      </div>
    </div>
  );
}
