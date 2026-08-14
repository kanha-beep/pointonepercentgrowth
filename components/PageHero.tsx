import type { ReactNode } from "react";

import Reveal from "@/components/Reveal";

export default function PageHero({ eyebrow, title, description, actions, stats }: { eyebrow: string; title: string; description: string; actions?: ReactNode; stats?: ReactNode }) {
  return (
    <section className="relative overflow-hidden px-0 pb-10 pt-[72px] max-[720px]:pt-[54px]">
      <div className="absolute right-[8%] top-9 h-60 w-60 animate-float rounded-full bg-[#be7b3f]/10 blur-md" />
      <div className="absolute bottom-0 left-[-40px] h-44 w-44 animate-float-reverse rounded-full bg-[#26415f]/10 blur-md" />
      <div className="relative z-10 mx-auto grid w-[min(1180px,calc(100%-40px))] items-start gap-7 lg:grid-cols-[1.05fr_0.95fr] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#be7b3f]">{eyebrow}</p>
          <h1 className="m-0 text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] tracking-[-0.05em] text-slate-950">{title}</h1>
          <p className="mt-5 max-w-[62ch] text-[1.04rem] leading-8 text-slate-500">{description}</p>
          {actions ? <div className="mt-7 flex flex-wrap items-center gap-3.5">{actions}</div> : null}
        </Reveal>
        {stats ? <Reveal delay={120}>{stats}</Reveal> : null}
      </div>
    </section>
  );
}
