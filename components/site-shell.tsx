"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import { siteContent, type SiteContent } from "@/lib/site";
import ChatbotWidget from "@/components/ChatbotWidget";

type StatusState = {
  type: "" | "success" | "error";
  message: string;
};

type EnquiryContextValue = {
  status: StatusState;
  setStatus: (status: StatusState) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" }
] as const;

const footerGroups = [
  { title: "Our work", links: [
    { label: "Graphic Design", href: "/projects" },
    { label: "UI/UX Design", href: "/projects" }
  ] },
  { title: "Studio", links: [
    { label: "About us", href: "/about" },
    { label: "Contact us", href: "/contact" }
  ] }
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
  const value = useMemo(() => ({ status, setStatus }), [status]);

  return (
    <EnquiryContext.Provider value={value}>
      <div className="flex min-h-screen flex-col bg-[#fbf8f3] text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Header content={siteContent} />
        <StatusBanner />
        <main className="flex-1">{children}</main>
        <Footer content={siteContent} />
        <ChatbotWidget />
      </div>
    </EnquiryContext.Provider>
  );
}

export function useEnquiryStatus() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiryStatus must be used inside SiteShell.");
  }
  return context;
}

function StatusBanner() {
  const { status } = useEnquiryStatus();
  if (!status.message) return null;

  return (
    <div
      className={`px-5 py-3 text-center text-sm font-semibold tracking-wide ${
        status.type === "success"
          ? "bg-emerald-600 text-white shadow-sm"
          : "bg-rose-600 text-white shadow-sm"
      }`}
    >
      {status.message}
    </div>
  );
}

function Header({ content }: { content: SiteContent }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl transition-all duration-300">
      <div className="mx-auto flex w-[min(1240px,calc(100%-40px))] items-center justify-between py-4">
        {/* Brand Logo with animated SVG mark */}
        <Link
          href="/"
          className="group flex items-center gap-3 transition hover:opacity-90"
          onClick={() => setMobileOpen(false)}
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 text-white shadow-md transition-transform duration-300 group-hover:scale-105">
            <svg className="h-5 w-5 text-indigo-400 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
                .1%
              </span>
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-lg font-extrabold tracking-tight text-transparent sm:text-xl">
                Growth
              </span>
            </div>
            <p className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">
              Graphic Design & UI/UX
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1.5 shadow-xs backdrop-blur-md md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-xs transition duration-200 hover:border-emerald-300 hover:bg-emerald-50/50 hover:text-emerald-700 active:scale-98"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            WhatsApp Now
          </a>

          <Link
            href="/contact"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-5 py-2 text-xs font-bold text-white shadow-md transition-all duration-200 hover:shadow-indigo-500/25 hover:shadow-lg active:scale-98"
          >
            <span>Get Started</span>
            <svg
              className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 text-slate-700 shadow-xs md:hidden"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-slate-200 bg-white/95 px-6 py-5 backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                  pathname === item.path
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-col gap-2 pt-4 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-sm font-bold text-white shadow-md"
            >
              Get Started
            </Link>
            <a
              href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-semibold text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))] py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-500 text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">.1% Growth</span>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Graphic design and UI/UX for brands and digital products. Explore our work and get in touch to discuss your project.
            </p>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-semibold text-slate-300">Headquarters</p>
              <p className="mt-1 text-xs text-slate-400">{content.contact.officeAddress}</p>
              <p className="mt-1 text-xs text-indigo-400">{content.contact.email} • {content.contact.phoneDisplay}</p>
            </div>
          </div>

          {/* Nav Groups */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                  {group.title}
                </h4>
                <ul className="space-y-2.5 p-0">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-slate-400 transition hover:text-indigo-400"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Point One Percent Growth. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
