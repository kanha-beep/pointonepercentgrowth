import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/components/site-shell";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "pointonepercentgrowth",
  description: "Conversion-focused websites for local Indian businesses."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className="m-0 bg-[#f6f1e8] font-serif text-slate-800 antialiased [background-image:radial-gradient(circle_at_top_left,rgba(190,123,63,0.14),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(21,34,53,0.09),transparent_18%),linear-gradient(180deg,#fbf8f3_0%,#f3ede5_52%,#faf7f2_100%)]"
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
