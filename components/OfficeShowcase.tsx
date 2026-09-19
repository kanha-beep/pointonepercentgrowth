import Reveal from "@/components/Reveal";
import type { ContactInfo, SiteContent } from "@/lib/typesfile";

export default function OfficeShowcase({
  office,
  contact
}: {
  office: SiteContent["office"];
  contact: ContactInfo;
}) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left Description */}
          <div className="lg:col-span-6">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                Physical Presence & Studio
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                {office.title}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                {office.description}
              </p>

              <div className="mt-8 space-y-3 rounded-2xl border border-slate-200/80 bg-white/70 p-6 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{contact.officeName}</h4>
                    <p className="text-xs text-slate-500">{contact.officeAddress}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 text-xs text-slate-600">
                  <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Working Hours: <strong className="text-slate-800">{contact.officeHours}</strong></span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Sleek Card */}
          <div className="lg:col-span-6">
            <Reveal variant="right" delay={120}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 p-8 text-white shadow-2xl">
                {/* Header terminal-style bar */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">standards.production.ts</span>
                </div>

                <div className="mt-6 space-y-4">
                  {office.bullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-3.5 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900"
                    >
                      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/20">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
