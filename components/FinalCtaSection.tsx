import Link from "next/link";

import Reveal from "@/components/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative mx-auto w-[min(1240px,calc(100%-40px))]">
        <Reveal variant="zoom">
          <div className="relative overflow-hidden rounded-3xl border border-[#1F30CC]/20 bg-slate-100 px-8 py-16 text-center text-slate-950 shadow-[0_30px_90px_-20px_rgba(31,48,204,0.25)] sm:px-16 sm:py-24">

            {/* Animated Background Mesh Orbs */}
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 animate-blob rounded-full bg-slate-50 blur-3xl" />

            <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 animate-blob rounded-full bg-slate-50 blur-3xl [animation-delay:4s]" />

            {/* Subtle SVG Grid Overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-10 text-[#1F30CC]">
              <svg
                className="h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="cta-grid"
                    width="40"
                    height="40"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 40 0 L 0 0 0 40"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </pattern>
                </defs>

                <rect
                  width="100%"
                  height="100%"
                  fill="url(#cta-grid)"
                />
              </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-[#1F30CC]/30 bg-slate-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1F30CC] backdrop-blur-md">
                <span className="h-2 w-2 animate-ping rounded-full bg-[#1F30CC]" />
                Start Growing Today
              </span>

              <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl sm:leading-tight">
                Ready to Launch Your High-Converting{" "}
                <span className="bg-gradient-to-r from-[#1F30CC] via-[#4B5FEA] to-[#7B88FF] bg-clip-text text-transparent">
                  Digital Presence?
                </span>
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Tell us about your graphic design or UI/UX project. We will
                help you plan the next steps.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1F30CC] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#1828AD] hover:shadow-[#1F30CC]/30 active:scale-95"
                >
                  <span>Start Your Project (Instant Estimate)</span>

                  <svg
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </Link>

                <a
                  href="https://wa.me/7999046735?text=Hi%2C%20I%20want%20to%20discuss%20a%20project%20with%20Point%20One%20Percent%20Growth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F30CC]/20 bg-white px-6 py-4 text-sm font-semibold text-slate-900 backdrop-blur-md transition hover:border-[#1F30CC]/50 hover:bg-[#1F30CC]/5"
                >
                  <span className="h-2 w-2 rounded-full bg-[#1F30CC]" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Guarantees */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-500">

                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-[#1F30CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Rapid 5-Day Delivery</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-[#1F30CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Zero Hidden Hosting Fees</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg
                    className="h-4 w-4 text-[#1F30CC]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>100% Tested Production Quality</span>
                </div>

              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
