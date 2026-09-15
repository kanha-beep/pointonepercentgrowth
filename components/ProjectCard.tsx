import type { ContactInfo, Project } from "@/lib/site";

const gradientClasses: Record<string, string> = {
  "gradient-salon": "bg-gradient-to-br from-rose-50 via-white to-amber-50",
  "gradient-salon-soft": "bg-gradient-to-br from-amber-50/50 via-white to-orange-50",
  "gradient-grocery": "bg-gradient-to-br from-emerald-50 via-teal-50/40 to-lime-50",
  "gradient-medical": "bg-gradient-to-br from-sky-50 via-blue-50/40 to-indigo-50",
  "gradient-milk": "bg-gradient-to-br from-blue-50 via-indigo-50/40 to-cyan-50",
  "gradient-stationery": "bg-gradient-to-br from-violet-50 via-purple-50/40 to-pink-50",
  "gradient-cosmetics": "bg-gradient-to-br from-pink-50 via-rose-50/40 to-fuchsia-50"
};

export default function ProjectCard({
  item,
  contact
}: {
  item: Project;
  contact: ContactInfo;
}) {
  const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I'm interested in project build "${item.title}" (${item.category}). Please share details.`
  )}`;

  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-300 hover:shadow-[0_20px_45px_-12px_rgba(99,102,241,0.18)]">
      {/* Visual Header with abstract geometric graphics */}
      <div
        className={`relative flex min-h-56 flex-col justify-between overflow-hidden border-b border-slate-100 p-6 ${
          gradientClasses[item.gradient] || gradientClasses["gradient-grocery"]
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-xs font-black tracking-tight text-slate-800 shadow-sm backdrop-blur-sm">
            {item.number}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-xs backdrop-blur-sm">
            {item.category}
          </span>
        </div>

        {/* Ambient SVG shapes */}
        <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full border border-slate-900/5 bg-white/40 blur-xs transition-transform duration-500 group-hover:scale-125" />

        <div className="relative z-10">
          <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600">
            Recommended Tier: {item.packageFit}
          </span>
          <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Content & Specs */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-sm leading-relaxed text-slate-600">
            {item.summary}
          </p>

          {/* Stats Chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            {item.stats.map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                {stat}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col gap-2.5 pt-4 border-t border-slate-100 sm:flex-row sm:items-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all duration-200 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 hover:shadow-md active:scale-98"
          >
            <span>{item.ctaLabel}</span>
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <a
            href={contact.phoneHref}
            className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            <svg className="h-3.5 w-3.5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call Info</span>
          </a>
        </div>
      </div>
    </article>
  );
}
