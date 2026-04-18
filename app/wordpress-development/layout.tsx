import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WordPress Development Services — Razu.dev",
  description:
    "Custom WordPress themes, WooCommerce stores, and SEO-optimized WordPress sites. 50+ sites launched for clients across 19 countries.",
  openGraph: {
    title: "WordPress Development Services — Razu.dev",
    description:
      "Custom WordPress themes, WooCommerce stores, and SEO-optimized WordPress sites.",
    url: "https://razu.dev/wordpress-development",
  },
};

export default function WordPressDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
