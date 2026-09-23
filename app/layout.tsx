import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: ".1% Growth | Graphic Design & UI/UX",
  description:
    "Explore our graphic design and UI/UX portfolio. Contact .1% Growth to discuss your next design project.",
  keywords: ["graphic design", "UI/UX design", "design portfolio", ".1% Growth"]
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
