"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const hiringProcessItems = [
  {
    step: "01",
    tag: "Screening",
    sticker: "🔍",
    title: "Portfolio & Professional Review",
    description:
      "We begin with a deep dive into candidate portfolios, past GitHub commits, communication aptitude, and production-tested software delivery history before anyone advances.",
    metric: "Top 12% pass",
    badge: "Stage 1 Cleared"
  },
  {
    step: "02",
    tag: "Execution",
    sticker: "💻",
    title: "Technical Examination & Deep Assessment",
    description:
      "Engineers undergo rigorous, timed practical screenings testing architecture fundamentals, high-concurrency performance, responsive layout precision, and debugging depth.",
    metric: "Top 4% pass",
    badge: "Algorithmic Precision"
  },
  {
    step: "03",
    tag: "Live Test",
    sticker: "⚡",
    title: "Behavioral & Real-Time Pair Programming",
    description:
      "We evaluate how talent communicates under deadline pressure, defends architectural tradeoffs, refactors legacy code, and collaborates live with senior engineers.",
    metric: "Top 1.5% pass",
    badge: "Senior Level"
  },
  {
    step: "04",
    tag: "Standards",
    sticker: "🎓",
    title: "The .1% Growth Academy Protocol",
    description:
      "A structured enterprise simulation tests client-first communication protocols, modern component design systems, and SEO/conversion speed benchmarks.",
    metric: "Top 0.8% pass",
    badge: "Elite Methodology"
  },
  {
    step: "05",
    tag: "Trial",
    sticker: "🧪",
    title: "Monitored 90-Day Production Trial",
    description:
      "Selected developers work through live client sandbox assignments with dedicated tech lead oversight to verify consistency, responsiveness, and zero-compromise builds.",
    metric: "Top 0.3% pass",
    badge: "Production Ready"
  },
  {
    step: "06",
    tag: "Top 0.1%",
    sticker: "🏆",
    title: "Continuous Quality & Performance Auditing",
    description:
      "Even after passing, engineers undergo ongoing bi-weekly client feedback scores, code audits, and turnaround speed tracking to retain their elite network status.",
    metric: "0.1% Final Elite",
    badge: "0.1% Certified Star"
  }
] as const;

export default function HiringProcessSection() {
  const [activeStep, setActiveStep] = useState<string>("01");
  const currentItem =
    hiringProcessItems.find((item) => item.step === activeStep) ?? hiringProcessItems[0];

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
              <span>✨</span>
              <span>The 6-Step Talent Gauntlet</span>
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              How We Filter Down To The{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent underline decoration-amber-400 decoration-wavy decoration-2">
                Top 0.1%
              </span>
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
              We eliminate 99.9% of candidate guesswork so you collaborate exclusively with elite engineering minds.
            </p>
          </div>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Step Timeline Buttons */}
          <div className="space-y-3.5 lg:col-span-7">
            {hiringProcessItems.map((item, index) => {
              const isActive = item.step === activeStep;

              return (
                <Reveal key={item.step} delay={index * 50}>
                  <div
                    onClick={() => setActiveStep(item.step)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setActiveStep(item.step)}
                    className={`cursor-pointer rounded-2xl border-3 border-slate-900 p-5 transition-all duration-200 ${
                      isActive
                        ? "bg-amber-100/90 shadow-[6px_6px_0px_0px_#0f172a] -translate-x-1 -translate-y-1"
                        : "bg-white shadow-[3px_3px_0px_0px_#0f172a] hover:bg-slate-50 hover:shadow-[5px_5px_0px_0px_#0f172a] hover:-translate-x-0.5 hover:-translate-y-0.5"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <span
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 border-slate-900 text-base font-black transition-colors ${
                            isActive
                              ? "bg-indigo-600 text-white shadow-[2px_2px_0px_0px_#0f172a]"
                              : "bg-slate-100 text-slate-800"
                          }`}
                        >
                          {item.step}
                        </span>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-black tracking-wide uppercase text-indigo-700">
                              {item.tag}
                            </span>
                            <span className="text-slate-400">•</span>
                            <span className="text-xs font-bold text-slate-600">
                              {item.metric}
                            </span>
                          </div>
                          <h3 className="mt-1 text-lg font-black text-slate-900 sm:text-xl">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      <span className="text-2xl transition-transform hover:scale-125">
                        {item.sticker}
                      </span>
                    </div>

                    {isActive && (
                      <div className="mt-4 border-t-2 border-slate-900/10 pl-15 pt-3">
                        <p className="text-sm font-medium leading-relaxed text-slate-700">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Dynamic 3D Telemetry Card (Right Column) */}
          <div className="sticky top-28 lg:col-span-5">
            <Reveal variant="zoom" delay={120}>
              <div className="relative overflow-hidden rounded-3xl border-3 border-slate-900 bg-slate-900 p-8 text-white shadow-[8px_8px_0px_0px_#0f172a]">
                {/* Header terminal-style */}
                <div className="flex items-center justify-between border-b-2 border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-rose-500" />
                    <span className="flex h-3 w-3 rounded-full bg-amber-400" />
                    <span className="flex h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-mono text-xs font-bold text-slate-400">
                      vetting_sandbox.exe
                    </span>
                  </div>

                  <span className="rounded-lg border border-amber-400/30 bg-amber-400/20 px-2.5 py-0.5 text-xs font-extrabold text-amber-300">
                    {currentItem.badge}
                  </span>
                </div>

                {/* Animated 3D SVG Circular Dial */}
                <div className="my-8 flex flex-col items-center justify-center">
                  <div className="relative flex h-48 w-48 items-center justify-center">
                    <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-slate-800"
                        fill="none"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="url(#playful-gauge)"
                        strokeWidth="8"
                        strokeDasharray="264"
                        strokeDashoffset={264 - 264 * (parseInt(currentItem.step, 10) / 6)}
                        strokeLinecap="round"
                        fill="none"
                        className="transition-all duration-700 ease-out"
                      />
                      <defs>
                        <linearGradient id="playful-gauge" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>

                    <div className="absolute flex flex-col items-center text-center">
                      <span className="text-4xl">{currentItem.sticker}</span>
                      <span className="mt-1 text-2xl font-black text-white">
                        {currentItem.metric.split(" ")[0]}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {currentItem.metric.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs font-bold text-amber-300">
                    Stage {currentItem.step}: {currentItem.title}
                  </p>
                </div>

                {/* Quality Checklist */}
                <div className="space-y-2.5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Performance SLA</span>
                    <span className="font-bold text-emerald-400">99.9% Production Ready</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Code Quality Audit</span>
                    <span className="font-bold text-indigo-400">A+ Clean Code</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Client Rating Avg</span>
                    <span className="font-bold text-amber-300">4.99 / 5.0 ⭐</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Stage {currentItem.step} of 06</span>
                  <button
                    onClick={() => {
                      const next = (parseInt(activeStep, 10) % 6) + 1;
                      setActiveStep(String(next).padStart(2, "0"));
                    }}
                    className="flex items-center gap-1.5 rounded-lg border border-indigo-500/40 bg-indigo-500/20 px-3 py-1 font-bold text-indigo-300 transition hover:bg-indigo-500/40"
                  >
                    <span>Next Stage</span>
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
