"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

import { siteContent, type SiteContent } from "@/lib/site";

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
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Categories", path: "/categories" },
  { label: "Contact", path: "/contact" }
] as const;

const footerGroups = [
  {
    title: "Solutions",
    links: [
      { label: "Businesses", href: "/categories" },
      { label: "Agencies", href: "/about" },
      { label: "Freelancers", href: "/projects" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "How it works", href: "/about" },
      { label: "Help center", href: "/contact" },
      { label: "Blog", href: "/projects" }
    ]
  },
  {
    title: "Developers",
    links: [
      { label: "Software developers", href: "/projects" },
      { label: "WooCommerce developers", href: "/projects" },
      { label: "Apply as an Expert", href: "/contact" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "Our story", href: "/about" },
      { label: "Our team", href: "/about" },
      { label: "Manifesto", href: "/about" }
    ]
  }
] as const;

export function SiteShell({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<StatusState>({ type: "", message: "" });
  const value = useMemo(() => ({ status, setStatus }), [status]);

  return (
    <EnquiryContext.Provider value={value}>
      <div className="min-h-screen">
        <Header content={siteContent} />
        <StatusBanner />
        <main>{children}</main>
        <Footer content={siteContent} />
      </div>
      <FloatingContact />
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

  if (!status.message) {
    return null;
  }

  return (
    <div className={`px-5 py-2.5 text-center text-[0.95rem] ${status.type === "success" ? "bg-emerald-700/10 text-emerald-700" : "bg-red-700/10 text-red-700"}`}>
      {status.message}
    </div>
  );
}

function Header({ content }: { content: SiteContent }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-950/10 bg-[#f8f3ec]/85 backdrop-blur-xl">
      <div className="mx-auto flex w-[min(1180px,calc(100%-40px))] items-center justify-between gap-6 py-[18px] max-[720px]:w-[min(100%-28px,1180px)] max-[720px]:items-start">
        <Link className="inline-flex items-center gap-3.5 border-0 p-0 text-left" href="/" onClick={closeMenu}>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-[18px] border border-[#be7b3f]/25 bg-gradient-to-br from-white/95 to-[#f1dcc9]/95 font-bold text-slate-950 shadow-soft">SP</span>
          <span>
            <strong className="block text-[1.02rem] text-slate-950">{content.businessName}</strong>
            <small className="block text-[0.78rem] text-slate-500">{content.tagline}</small>
          </span>
        </Link>
        <nav className="hidden items-center gap-3.5 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path} className={`relative text-[0.96rem] ${pathname === item.path ? "text-slate-950 after:absolute after:inset-x-0 after:-bottom-2.5 after:h-0.5 after:rounded-full after:bg-[#be7b3f] after:content-['']" : "text-slate-500 hover:text-slate-950"}`} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
        </nav>
        {/* <div className="flex items-center gap-3.5">
          <a className="hidden min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5 md:inline-flex" href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`}>
            WhatsApp
          </a>
          <button className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 px-5 py-3 text-slate-950 transition duration-200 hover:-translate-y-0.5 md:hidden" onClick={() => setOpen((current) => !current)} type="button">
            Menu
          </button>
        </div> */}
      </div>
      {open ? (
        <div className="border-t border-slate-950/10 bg-[#faf6f0]/95 md:hidden">
          <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] gap-4 py-[18px] pb-[22px] max-[720px]:w-[min(100%-28px,1180px)]">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={pathname === item.path ? "text-slate-950" : "text-slate-500"} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function SocialIcon({ kind }: { kind: "x" | "facebook" }) {
  if (kind === "x") {
    return (
      <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-7.43L5.54 22H2.43l7.24-8.28L1.6 2h6.4l4.43 6.9L18.9 2Zm-1.1 18h1.73L7.07 3.9H5.2Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
      <path d="M13.5 22v-8.2h2.8l.42-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.71V4.13c-.3-.04-1.33-.13-2.52-.13-2.5 0-4.21 1.53-4.21 4.34v2.42H7.25v3.2h2.88V22h3.37Z" />
    </svg>
  );
}

function Footer({ content }: { content: SiteContent }) {
  return (
    <footer className="bg-[#192129] px-0 py-16 pb-10 text-white max-[720px]:py-12">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.9fr_0.9fr_0.9fr_0.9fr]">
          <div className="max-w-[290px]">
            <h3 className="m-0 text-[clamp(2.3rem,3vw,3rem)] leading-none tracking-[-0.05em] text-white">
              pointonepercentgrowth
            </h3>
            <p className="mt-4 flex items-center gap-2 text-[1.05rem] font-medium text-[#f6ad93]">
              <span className="text-[1rem]">*</span>
              <span>Build with heart</span>
            </p>
            <p className="mt-6 leading-8 text-white/68">
              When you absolutely, positively need the highest quality Software development work.
            </p>
            <div className="mt-7 flex items-center gap-5 text-[#f6ad93]">
              <a aria-label="X" className="transition hover:text-white" href="https://x.com">
                <SocialIcon kind="x" />
              </a>
              <a aria-label="Facebook" className="transition hover:text-white" href="https://facebook.com">
                <SocialIcon kind="facebook" />
              </a>
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title}>
              <h4 className="m-0 text-[1.15rem] leading-none tracking-[-0.03em] text-white">{group.title}</h4>
              <div className="mt-4 h-px w-full bg-white/28" />
              <div className="mt-5 flex flex-col gap-3.5">
                {group.links.map((link) => (
                  <Link key={link.label} className="text-[1rem] text-white/68 transition hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 text-center text-[0.98rem] text-white/85 max-[720px]:mt-12">
          <span>2026 (c) {content.businessName}</span>
          <span className="text-[#f6ad93]">|</span>
          <Link className="transition hover:text-white" href="/contact">
            Terms of Service
          </Link>
          <span className="text-[#f6ad93]">|</span>
          <Link className="transition hover:text-white" href="/contact">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingContact() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 flex flex-col items-end gap-3 sm:bottom-[18px] sm:left-auto sm:right-[18px] w-auto">
      <a
        aria-label="WhatsApp"
        className="inline-flex items-center justify-center rounded-full border border-slate-950/10 bg-white/95 p-3 shadow-soft"
        href={`https://wa.me/${siteContent.contact.whatsappNumber}?text=${encodeURIComponent(siteContent.contact.whatsappText)}`}
      >
        <span aria-hidden="true">💬</span>
      </a>
      <a
        aria-label="Call Now"
        className="inline-flex items-center justify-center rounded-full border border-slate-950/10 bg-white/95 p-3 shadow-soft"
        href={siteContent.contact.phoneHref}
      >
        <span aria-hidden="true">📞</span>
      </a>
    </div>
  );
}

