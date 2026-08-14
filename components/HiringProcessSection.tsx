"use client";

import { useState } from "react";

import Reveal from "@/components/Reveal";

const hiringProcessItems = [
  {
    step: "01",
    title: "Professional review",
    description:
      "We begin with a detailed profile and portfolio review, checking communication, client history, and real Software delivery experience before moving anyone forward."
  },
  {
    step: "02",
    title: "Technical exam",
    description:
      "Candidates complete a practical screening that tests Software fundamentals, theme and plugin judgment, debugging habits, and build quality."
  },
  {
    step: "03",
    title: "Behavioral interview & live coding test",
    description:
      "We evaluate how they think under pressure, explain tradeoffs, collaborate in real time, and solve implementation problems without guesswork."
  },
  {
    step: "04",
    title: "The pointonepercentgrowth Academy exam",
    description:
      "A structured assessment helps us verify process discipline, standards awareness, and consistency across more advanced project scenarios."
  },
  {
    step: "05",
    title: "90-day trial period",
    description:
      "Shortlisted experts work through a monitored trial window so we can confirm reliability, responsiveness, and delivery quality with real client-style work."
  },
  {
    step: "06",
    title: "Ongoing excellence monitoring",
    description:
      "After selection, we continue reviewing performance, communication, and client outcomes to keep the network strong over time."
  }
] as const;

export default function HiringProcessSection() {
  const [activeStep, setActiveStep] = useState<string>(hiringProcessItems[0]?.step ?? "01");

  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#be7b3f]">Vetting and hiring</p>
            <h2 className="m-0 text-[clamp(2.2rem,4.7vw,4.4rem)] leading-[1.02] tracking-[-0.06em] text-[#171c28]">
              How we find the best Software experts
            </h2>
            <p className="mt-5 text-[1.05rem] leading-8 text-[#4f5f7d]">Our vetting and hiring process</p>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(300px,0.9fr)]">
          <div className="space-y-5">
            {hiringProcessItems.map((item, index) => {
              const isActive = item.step === activeStep;

              return (
                <Reveal key={item.step} delay={index * 70}>
                  <button
                    type="button"
                    onClick={() => setActiveStep(item.step)}
                    className={[
                      "w-full rounded-[30px] border border-transparent px-6 py-5 text-left transition duration-200",
                      isActive
                        ? "bg-[#f6ad93] text-[#171c28] shadow-[0_22px_48px_rgba(245,160,132,0.28)]"
                        : "border-[#d9e2ec] bg-white/58 text-[#171c28] hover:border-[#c8d4e2] hover:bg-white/78"
                    ].join(" ")}
                    aria-expanded={isActive}
                  >
                    <div className="grid gap-4 md:grid-cols-[82px_minmax(0,1fr)_28px] md:items-start">
                      <span className="font-serif text-[3.6rem] leading-none tracking-[-0.08em]">{item.step}</span>
                      <div>
                        <h3 className="m-0 max-w-[520px] text-[clamp(1.45rem,2.2vw,2.15rem)] font-medium leading-[1.05] tracking-[-0.045em]">
                          {item.title}
                        </h3>
                        {isActive ? (
                          <p className="mt-5 max-w-[680px] text-lg leading-9 text-[#1e293b]">
                            {item.description}
                          </p>
                        ) : null}
                      </div>
                      <span
                        className={[
                          "mt-2 inline-flex h-7 w-7 items-center justify-center transition-transform duration-200",
                          isActive ? "rotate-180" : ""
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-current stroke-[2.8]">
                          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </button>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={160} className="sticky top-24 max-lg:order-first max-lg:mx-auto max-lg:w-full max-lg:max-w-[440px]">
            <div className="relative min-h-[540px] overflow-hidden rounded-[40px] bg-[linear-gradient(180deg,rgba(255,255,255,0.7),rgba(245,248,251,0.92))] p-8">
              <div className="absolute left-8 top-24 h-[152px] w-[152px] rounded-[34px] bg-[#eaf0ef]" />
              <div className="absolute bottom-16 left-20 h-[126px] w-[126px] rounded-[34px] bg-[#edf2f2]" />
              <div className="absolute right-6 top-14 h-[148px] w-[148px] rounded-[36px] bg-[#edf2ef]" />
              <div className="absolute bottom-24 right-16 h-[150px] w-[150px] rounded-[38px] bg-[#edf2ef]" />

              <div className="absolute left-[104px] top-[176px] h-[165px] w-[165px] rounded-full border-[12px] border-[#ffab8b]" />
              <div className="absolute left-[158px] top-[125px] h-[30px] w-[178px] rounded-t-[16px] border-[10px] border-b-0 border-[#153746] bg-[#23596d]" />
              <div className="absolute left-[158px] top-[154px] h-[224px] w-[178px] rounded-b-[8px] border-[10px] border-[#153746] bg-white" />
              <div className="absolute left-[244px] top-[154px] h-[224px] w-[12px] bg-[#153746]" />

              <div className="absolute left-[142px] top-[278px] h-[110px] w-[20px] -rotate-45 rounded-full bg-[#153746]" />
              <div className="absolute left-[112px] top-[351px] h-[28px] w-[28px] rounded-full bg-[#153746]" />
              <div className="absolute left-[281px] top-[116px] flex h-[86px] w-[86px] items-center justify-center rounded-full border-[10px] border-[#153746] bg-white">
                <svg viewBox="0 0 40 40" className="h-10 w-10 fill-none stroke-[#153746] stroke-[4.4]">
                  <path d="M10 21l7 7 13-15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

