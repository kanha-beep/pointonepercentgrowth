"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { siteContent } from "@/lib/site";

const logoUrl = "https://res.cloudinary.com/dw7elrwuy/image/upload/v1790411402/pointonepercentgrowth/branding/agency-logo.jpg";
const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
] as const;

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const content = siteContent;

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-[min(1240px,calc(100%-40px))] items-center justify-between py-4">
        <Link href="/" className="group flex items-center gap-3 transition hover:opacity-90" onClick={() => setMobileOpen(false)}>
          <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border text-white transition-transform duration-300 group-hover:scale-105">
            <img src={logoUrl} alt=".1% Growth" className="h-full w-full object-contain" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>
          </div>
          <div><div className="flex items-center"><span className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">.1%</span><span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-lg font-extrabold tracking-tight text-transparent sm:text-xl">Growth</span></div><p className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">Graphic Design & UI/UX</p></div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1.5 shadow-xs backdrop-blur-md md:flex">
          {navItems.map((item) => <Link key={item.path} href={item.path} className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${pathname === item.path ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:bg-slate-100/70 hover:text-slate-900"}`}>{item.label}</Link>)}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition duration-200 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-700 active:scale-98"><span className="h-2 w-2 rounded-full bg-emerald-500" />WhatsApp Now</a>
          <Link href="/contact" className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-2 text-xs font-bold text-white shadow-md transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 active:scale-98"><span>Get Started</span><svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></Link>
        </div>

        <button type="button" onClick={() => setMobileOpen(!mobileOpen)} className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-xs md:hidden" aria-label="Toggle navigation menu"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">{mobileOpen ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}</svg></button>
      </div>

      {mobileOpen && <div className="border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-2xl md:hidden"><nav className="flex flex-col space-y-2">{navItems.map((item) => <Link key={item.path} href={item.path} onClick={() => setMobileOpen(false)} className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${pathname === item.path ? "bg-indigo-50 text-indigo-700" : "text-slate-700 hover:bg-slate-50"}`}>{item.label}</Link>)}</nav><div className="mt-5 flex flex-col gap-2 border-t border-slate-100 pt-4"><Link href="/contact" onClick={() => setMobileOpen(false)} className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-md">Get Started</Link><a href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`} target="_blank" rel="noopener noreferrer" className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700"><span className="h-2 w-2 rounded-full bg-emerald-500" />WhatsApp Direct</a></div></div>}
    </header>
  );
}
