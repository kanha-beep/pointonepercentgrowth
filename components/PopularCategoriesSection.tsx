"use client";

import { useRef } from "react";

const popularCategories = [
  {
    title: "Content Writing",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#28124b]/70 via-[#28124b]/20 to-transparent"
  },
  {
    title: "SEO",
    image:
      "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#1d2440]/70 via-[#1d2440]/25 to-transparent"
  },
  {
    title: "Website Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#2a2f45]/72 via-[#2a2f45]/24 to-transparent"
  },
  {
    title: "Logo Design",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#36221a]/68 via-[#36221a]/18 to-transparent"
  },
  {
    title: "Voice-over",
    image:
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#182235]/72 via-[#182235]/20 to-transparent"
  },
  {
    title: "Illustration & Drawing",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    accent: "from-[#221936]/75 via-[#221936]/25 to-transparent"
  }
] as const;

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current stroke-[1.8]" aria-hidden="true">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PopularCategoriesSection() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollRail = (direction: "left" | "right") => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    const nextOffset = Math.max(rail.clientWidth * 0.78, 260);

    rail.scrollBy({
      left: direction === "right" ? nextOffset : -nextOffset,
      behavior: "smooth"
    });
  };

  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <div className="mb-8 flex items-start justify-between gap-5 max-[720px]:mb-6 max-[720px]:flex-col">
          <div className="max-w-3xl">
            <h2 className="m-0 text-[clamp(2.2rem,4.8vw,4.1rem)] font-semibold leading-[0.95] tracking-[-0.06em] text-[#2d1363]">
              Most popular categories
            </h2>
          </div>
          <div className="flex items-center rounded-2xl border border-[#cfd7e4] bg-white/80 shadow-[0_16px_34px_rgba(148,170,205,0.12)] backdrop-blur">
            <button
              aria-label="Scroll categories left"
              className="inline-flex h-[50px] w-[52px] items-center justify-center text-[#a4afc2] transition hover:text-[#2d1363]"
              onClick={() => scrollRail("left")}
              type="button"
            >
              <ArrowIcon direction="left" />
            </button>
            <span className="h-[50px] w-px bg-[#cfd7e4]" />
            <button
              aria-label="Scroll categories right"
              className="inline-flex h-[50px] w-[52px] items-center justify-center text-[#7f8ca6] transition hover:text-[#2d1363]"
              onClick={() => scrollRail("right")}
              type="button"
            >
              <ArrowIcon direction="right" />
            </button>
          </div>
        </div>

        <div
          ref={railRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {popularCategories.map((category) => (
            <article
              key={category.title}
              className="group relative h-[438px] min-w-[274px] flex-[0_0_274px] snap-start overflow-hidden rounded-[30px] border border-slate-950/10 shadow-[0_22px_44px_rgba(37,57,94,0.14)] max-[720px]:h-[360px] max-[720px]:min-w-[248px] max-[720px]:flex-[0_0_248px]"
              style={{
                backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.04), rgba(0,0,0,0.18)), url(${category.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover"
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${category.accent}`} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_34%,rgba(0,0,0,0.18)_100%)]" />
              <div className="relative flex h-full items-start p-6">
                <div className="max-w-[226px] rounded-[18px] border border-white/65 bg-white/8 px-4 py-3 text-white shadow-[0_20px_28px_rgba(16,18,31,0.12)] backdrop-blur-[2px] transition duration-200 group-hover:-translate-y-1">
                  <h3 className="m-0 text-[1rem] font-semibold leading-[1.35] min-[721px]:text-[1.05rem]">
                    {category.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
