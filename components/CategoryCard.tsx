import type { Category } from "@/lib/site";

export default function CategoryCard({ item }: { item: Category }) {
  return (
    <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_10px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.18)]">
      {/* Decorative gradient top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-400 opacity-80" />

      <div>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3.5 py-1 text-xs font-bold text-indigo-700 ring-1 ring-indigo-500/20">
            {item.name}
          </span>
          <span className="text-[11px] font-semibold text-slate-500">
            Target: {item.audience}
          </span>
        </div>

        <h3 className="mt-5 text-2xl font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
          {item.name} Digital Storefronts
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {item.description}
        </p>

        {/* Example Websites / Directions */}
        <div className="mt-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Popular Directions
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.websites.map((website) => (
              <span
                key={website}
                className="rounded-xl border border-slate-200/90 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                {website}
              </span>
            ))}
          </div>
        </div>

        {/* Tier Variants */}
        {item.packages && item.packages.length > 0 && (
          <div className="mt-6 space-y-2.5">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Tier Breakdown
            </p>
            {item.packages.map((pkg) => (
              <div
                key={pkg.tier}
                className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-3.5 py-2.5 text-xs"
              >
                <div>
                  <span className="font-bold text-slate-900">{pkg.tier} Tier</span>
                  <span className="text-slate-400"> • {pkg.pages} Pages</span>
                </div>
                <span className="font-bold text-indigo-600">{pkg.price}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mt-8 pt-4 border-t border-slate-100">
        <a
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-md active:scale-98"
        >
          <span>Request {item.name} Build</span>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}
