import type { Metadata } from "next";
import { Syne, Space_Grotesk, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import PageTransition from "@/components/PageTransition";
import NoiseTexture from "@/components/NoiseTexture";
import ScrollProgress from "@/components/ScrollProgress";

const fontDisplay = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontHeading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const fontBody = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fontMonoLabel = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-label",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Razu — Portfolio",
  description: "A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontDisplay.variable} ${fontHeading.variable} ${fontBody.variable} ${fontMonoLabel.variable}`}>
      <body className="font-body">
        <ScrollProgress />
        <NoiseTexture />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
