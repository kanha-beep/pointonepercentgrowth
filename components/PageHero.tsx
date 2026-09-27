import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
  actions,
  stats
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
  stats?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      {/* Background Animated Gradient Mesh */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-80 w-80 animate-blob rounded-full bg-indigo-400/15 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 animate-blob rounded-full bg-violet-400/15 blur-3xl [animation-delay:3s]" />
      </div>

      <div className="relative mx-auto w-[min(1240px,calc(100%-40px))]">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal variant="left">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs">
                <span className="h-2 w-2 rounded-full bg-indigo-500" />
                {eyebrow}
              </span>

              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl sm:leading-[1.12] lg:text-6xl">
                {title}
              </h1>

              {description && (
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {description}
                </p>
              )}

              {actions && (
                <div className="mt-8 flex flex-wrap items-center gap-3.5">
                  {actions}
                </div>
              )}
            </Reveal>
          </div>

          {stats && (
            <div className="lg:col-span-5">
              <Reveal variant="right" delay={120}>
                {stats}
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
