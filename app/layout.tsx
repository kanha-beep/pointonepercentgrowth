import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: ".1% Growth | Top 0.1% Vetted Talent & High-Converting Digital Storefronts",
  description:
    "Discover battle-tested 0.1% software engineers and premium digital storefront packages engineered to accelerate local and digital businesses.",
  keywords: [
    "0.1% Growth",
    "vetted software engineers",
    "digital storefront",
    "grocery website package",
    "milk dairy subscription website",
    "stationery business website",
    "Next.js web development"
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 min-h-screen bg-[#fbf8f3] font-sans text-slate-900 antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
