import Link from "next/link";

import OfficeShowcase from "@/components/OfficeShowcase";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site";

export default function AboutPage() {
  const content = siteContent;

  return (
    <>
      <PageHero
        eyebrow="Our Mission & Culture"
        title={content.story.title}
        description={content.story.description}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 active:scale-95"
            >
              <span>Partner With Us</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/7999046735?text=Hi%2C%20I%20want%20to%20know%20more%20about%20pointonepercentgrowth"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              WhatsApp Founders
            </a>
          </div>
        }
      />

      {/* Core Principles Bento */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto grid w-[min(1240px,calc(100%-40px))] items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal variant="left">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Philosophy
              </span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                We Make Growing Businesses Look Unstoppable
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                A great storefront is not an artistic indulgence—it is a conversion engine. We obsess over readability, instant trust signals, and zero-friction purchase flows.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {content.story.principles.map((principle, index) => (
              <Reveal key={principle} delay={index * 80}>
                <div className="group flex items-start gap-5 rounded-2xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-200 hover:border-indigo-300 hover:shadow-md">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 font-black text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                    0{index + 1}
                  </span>
                  <p className="pt-2 text-sm leading-relaxed text-slate-700">
                    {principle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Command Center */}
      <OfficeShowcase office={content.office} contact={content.contact} />

      {/* 4-Step Client Journey */}
      <section className="py-16 pb-28">
        <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Execution Model
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                The Frictionless Path from Idea to Launch
              </h2>
              <p className="mt-3 text-sm text-slate-600">
                Clear milestones, rapid iterations, and constant communication.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.process.map((item, index) => (
              <Reveal key={item.step} delay={index * 70}>
                <div className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/85 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-300 hover:shadow-lg">
                  <div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-indigo-500 transition-colors">
                      {item.step}
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 h-1 w-8 rounded-full bg-slate-200 group-hover:w-16 group-hover:bg-indigo-500 transition-all duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
