import Link from "next/link";

import FinalCtaSection from "@/components/FinalCtaSection";
import FreelancerSliderSection from "@/components/FreelancerSliderSection";
import HiringProcessSection from "@/components/HiringProcessSection";
import MatchDeveloperSection from "@/components/MatchDeveloperSection";
import OfficeShowcase from "@/components/OfficeShowcase";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site";

export default function HomePage() {
  const content = siteContent;

  return (
    <div className="relative overflow-hidden">
      {/* PLAYFUL CREATIVE STUDIO HERO SECTION */}
      <section className="relative overflow-hidden pt-14 pb-20 lg:pt-24 lg:pb-32">
        {/* Playful Floating SVG Doodles & Background Orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-[480px] w-[480px] animate-blob rounded-full bg-amber-300/25 blur-3xl" />
          <div className="absolute -right-20 top-20 h-[450px] w-[450px] animate-blob rounded-full bg-indigo-400/20 blur-3xl [animation-delay:3s]" />
          <div className="absolute left-1/3 bottom-0 h-[380px] w-[380px] animate-blob rounded-full bg-pink-300/20 blur-3xl [animation-delay:6s]" />

          {/* SVG Playful Grid Pattern */}
          <svg className="absolute inset-0 h-full w-full opacity-25" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="studio-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(15, 23, 42, 0.2)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#studio-grid)" />
          </svg>
        </div>

        <div className="relative mx-auto w-[min(1240px,calc(100%-40px))] text-center">
          <Reveal variant="down">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a] transition-transform hover:scale-105 hover:rotate-1">
              <span>🚀</span>
              <span>Creative Studio & 0.1% Talent Accelerator</span>
            </div>
          </Reveal>

          <Reveal variant="up" delay={80}>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.1] lg:text-7xl">
              Launch High-Converting Storefronts or Hire{" "}
              <span className="relative inline-block text-indigo-600">
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
                  Top 0.1% Talent
                </span>
                <span className="absolute -bottom-1 left-0 -z-0 h-3 w-full bg-amber-300/70" />
              </span>
            </h1>
          </Reveal>

          <Reveal variant="up" delay={140}>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-slate-700 sm:text-xl sm:leading-8">
              We design playful, high-performance digital storefronts for growing local businesses and match you directly with rigorously audited 0.1% software engineers.
            </p>
          </Reveal>

          <Reveal variant="zoom" delay={200}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border-3 border-slate-900 bg-indigo-600 px-8 py-4 text-sm font-black text-white shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-indigo-500 hover:shadow-[7px_7px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>Browse Blueprints & Talent</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              <a
                href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border-3 border-slate-900 bg-amber-400 px-8 py-4 text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[7px_7px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
              >
                <span>💬</span>
                <span>WhatsApp Fast Chat</span>
              </a>
            </div>
          </Reveal>

          {/* 3D Tactile Metric Badges */}
          <Reveal variant="fade" delay={260}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-white px-4 py-2.5 shadow-[3px_3px_0px_0px_#0f172a] transition-transform hover:-translate-y-1">
                <span className="text-lg">🎯</span>
                <span className="text-xs font-black text-slate-900">0.1% Pass Rate</span>
                <span className="text-[11px] font-semibold text-slate-500">Screening</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-white px-4 py-2.5 shadow-[3px_3px_0px_0px_#0f172a] transition-transform hover:-translate-y-1">
                <span className="text-lg">⚡</span>
                <span className="text-xs font-black text-slate-900">5-7 Days</span>
                <span className="text-[11px] font-semibold text-slate-500">Delivery</span>
              </div>
              <div className="flex items-center gap-2 rounded-2xl border-2 border-slate-900 bg-white px-4 py-2.5 shadow-[3px_3px_0px_0px_#0f172a] transition-transform hover:-translate-y-1">
                <span className="text-lg">📦</span>
                <span className="text-xs font-black text-slate-900">WhatsApp First</span>
                <span className="text-[11px] font-semibold text-slate-500">Direct Reorder</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INFINITE PLAYFUL MARQUEE TICKER */}
      <section className="relative overflow-hidden border-y-3 border-slate-900 bg-amber-300 py-3.5">
        <div className="flex min-w-max animate-marquee gap-8 whitespace-nowrap text-xs font-black uppercase tracking-wider text-slate-900">
          <span className="flex items-center gap-2">⭐ {content.contact.officeName}</span>
          <span>•</span>
          <span>{content.contact.officeAddress}</span>
          <span>•</span>
          <span>{content.contact.officeHours}</span>
          <span>•</span>
          <span>🔥 WhatsApp Direct Lead Checkout</span>
          <span>•</span>
          <span>🚀 95+ Lighthouse Performance Guarantee</span>
          <span>•</span>
          <span>⚡ Grocery • Dairy • Stationery • Tech Storefronts</span>
          <span>•</span>
          <span>⭐ {content.contact.officeName}</span>
          <span>•</span>
          <span>{content.contact.officeAddress}</span>
          <span>•</span>
          <span>{content.contact.officeHours}</span>
        </div>
      </section>

      {/* 3D TACTILE BENTO GRID */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
          <Reveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
                <span>💡</span>
                <span>The Creative Advantage</span>
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Engineered for High-Conversion Growth
              </h2>
              <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
                We combine battle-tested modern engineering with high-converting customer psychology.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-12">
            {/* Bento Box 1: WhatsApp Checkout */}
            <div className="md:col-span-8">
              <Reveal delay={60}>
                <div className="group relative h-full rounded-3xl border-3 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#4f46e5]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-emerald-400 text-2xl text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                    💬
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-900">
                    WhatsApp-Integrated Digital Storefronts
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    Indian consumers love simplicity. With one click, items from their cart are formatted into an instant bill and sent straight to your WhatsApp business line.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <span className="rounded-xl border-2 border-slate-900 bg-emerald-100 px-3 py-1 text-xs font-black text-slate-900">Direct Reorder Flow</span>
                    <span className="rounded-xl border-2 border-slate-900 bg-amber-100 px-3 py-1 text-xs font-black text-slate-900">Zero App Installation</span>
                    <span className="rounded-xl border-2 border-slate-900 bg-indigo-100 px-3 py-1 text-xs font-black text-slate-900">Instant Customer Capture</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Bento Box 2: Speed */}
            <div className="md:col-span-4">
              <Reveal delay={120}>
                <div className="group relative h-full rounded-3xl border-3 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#4f46e5]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-indigo-400 text-2xl text-white shadow-[2px_2px_0px_0px_#0f172a]">
                    ⚡
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900">
                    Sub-Second Loading
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    Built on Next.js 16 with instant page transitions and 95+ Core Web Vitals scores.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Bento Box 3: Vetting */}
            <div className="md:col-span-4">
              <Reveal delay={180}>
                <div className="group relative h-full rounded-3xl border-3 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#4f46e5]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-pink-400 text-2xl text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                    🛡️
                  </div>
                  <h3 className="mt-6 text-xl font-black tracking-tight text-slate-900">
                    Rigorous 0.1% Vetting
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    Every talent in our pool passes technical sandbox exams and live production trials.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Bento Box 4: Transparent Fixed Pricing */}
            <div className="md:col-span-8">
              <Reveal delay={240}>
                <div className="group relative h-full rounded-3xl border-3 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#4f46e5]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-900 bg-amber-400 text-2xl text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                    💰
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-tight text-slate-900">
                    Predictable, Honest Package Pricing
                  </h3>
                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    No recurring platform royalties or hidden surprises. You get complete source code ownership and full launch support.
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/categories"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase text-indigo-600 hover:text-indigo-800"
                    >
                      <span>Explore Industry Package Specs</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES PRICING SECTION */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
          <Reveal>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
                <span>💎</span>
                <span>Transparent Packages</span>
              </span>
              <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
                Low, Medium & High Service Plans
              </h2>
              <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
                Choose the package tier engineered specifically for your business scale.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.packages.map((item, index) => (
              <Reveal key={item.name} delay={index * 80}>
                <PackageCard item={item} contact={content.contact} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6-STEP TALENT GAUNTLET */}
      <HiringProcessSection />

      {/* SCREENED SPECIALISTS SLIDER */}
      <FreelancerSliderSection />

      {/* 24-HOUR MATCH WORKFLOW */}
      <MatchDeveloperSection />

      {/* STUDIO COMMAND CENTER */}
      <OfficeShowcase office={content.office} contact={content.contact} />

      {/* FINAL HIGH-IMPACT CTA */}
      <FinalCtaSection />
    </div>
  );
}
