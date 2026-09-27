import Link from "next/link";
import Reveal from "@/components/Reveal";

const matchSteps = [
  {
    step: "01",
    sticker: "📋",
    title: "Define Your Scope",
    badge: "15-Min Onboarding",
    description:
      "Share your requirements—whether it's launching an all-in-one local graphic storefront or integrating an NLP chatbot."
  },
  {
    step: "02",
    sticker: "🤝",
    title: "Instant Expert Match",
    badge: "Under 24 Hours",
    description:
      "We pair you with verified 0.1% developers and storefront specialists pre-selected specifically for your exact tech stack."
  },
  {
    step: "03",
    sticker: "🚀",
    title: "Launch & Scale",
    badge: "Guaranteed Delivery",
    description:
      "Collaborate directly via private WhatsApp / Slack channels with daily code pushes, rapid turnaround, and zero bureaucracy."
  }
] as const;

export default function MatchDeveloperSection() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
        <Reveal>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
              <span>⚡</span>
              <span>Ultra-Fast Kickoff</span>
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              From Concept to Kickoff in{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
                Under 24 Hours
              </span>
            </h2>
            <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
              Skip weeks of recruitment churn. We connect you straight to senior developers who execute.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {matchSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <article className="group relative flex h-full flex-col justify-between rounded-3xl border-3 border-slate-900 bg-white p-8 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#0f172a]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl transition-transform group-hover:scale-125">
                      {item.sticker}
                    </span>
                    <span className="rounded-xl border-2 border-slate-900 bg-slate-100 px-3 py-1 font-mono text-2xl font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
                      {item.step}
                    </span>
                  </div>

                  <span className="mt-6 inline-block rounded-lg border border-slate-900/20 bg-amber-50 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-indigo-700">
                    {item.badge}
                  </span>

                  <h3 className="mt-3 text-2xl font-black tracking-tight text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-black text-indigo-600">
                  <span>Learn workflow</span>
                  <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl border-3 border-slate-900 bg-amber-400 px-8 py-4 text-sm font-black text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:bg-amber-300 hover:shadow-[7px_7px_0px_0px_#0f172a] active:translate-x-0 active:translate-y-0 active:shadow-none"
            >
              <span>Match With A Developer Today</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
