import type { ContactInfo, PackagePlan } from "@/lib/site";

export default function PackageCard({
  item,
  contact
}: {
  item: PackagePlan;
  contact: ContactInfo;
}) {
  const features = Array.isArray(item.features)
    ? item.features
    : String(item.features)
        .split(",")
        .map((f) => f.trim());

  const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi! I want the ${item.name} (${item.tier} Tier - ${item.price}) for my business website.`
  )}`;

  const isFeatured = Boolean(item.featured || item.tier === "Medium");

  return (
    <article
      className={`group relative flex flex-col justify-between rounded-3xl border-3 border-slate-900 p-8 transition-all duration-300 ${
        isFeatured
          ? "bg-gradient-to-b from-[#fffbeb] to-white shadow-[8px_8px_0px_0px_#4f46e5] hover:-translate-x-1.5 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#4f46e5]"
          : "bg-white shadow-[6px_6px_0px_0px_#0f172a] hover:-translate-x-1.5 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#0f172a]"
      }`}
    >
      {/* Playful Floating Stamp / Sticker */}
      {isFeatured && (
        <div className="absolute -top-3.5 right-6 z-10 flex items-center gap-1 rounded-full border-2 border-slate-900 bg-amber-400 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-slate-900 shadow-[2px_2px_0px_0px_#0f172a] transition-transform group-hover:rotate-2">
          <span>🔥</span>
          <span>Most Popular Choice</span>
        </div>
      )}

      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-xl border-2 border-slate-900 px-3.5 py-1 text-xs font-black uppercase tracking-wider ${
              isFeatured
                ? "bg-indigo-600 text-white shadow-[2px_2px_0px_0px_#0f172a]"
                : "bg-slate-100 text-slate-800"
            }`}
          >
            {item.tier} Tier
          </span>

          {item.pages && (
            <span className="rounded-lg border border-slate-900/20 bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
              {item.pages} Pages
            </span>
          )}
        </div>

        <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
          {item.name}
        </h3>

        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            {item.price}
          </p>
          <span className="text-xs font-bold text-slate-500">/ one-time build</span>
        </div>

        {item.meta && (
          <p className="mt-2 text-xs font-extrabold uppercase tracking-wider text-indigo-600">
            {item.meta}
          </p>
        )}

        {item.summary && (
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            {item.summary}
          </p>
        )}

        {/* Feature List with 3D check tags */}
        <div className="my-6 h-0.5 w-full bg-slate-900/10" />

        <ul className="space-y-3 p-0">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 text-sm font-medium text-slate-700 transition-transform duration-200 group-hover:translate-x-1"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border-2 border-slate-900 bg-emerald-400 text-slate-900 shadow-[1px_1px_0px_0px_#0f172a]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3D Tactile Action Button */}
      <div className="mt-8 pt-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 rounded-2xl border-3 border-slate-900 px-6 py-4 text-sm font-black transition-all duration-200 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_0px_#0f172a] ${
            isFeatured
              ? "bg-amber-400 text-slate-900 shadow-[4px_4px_0px_0px_#0f172a] hover:bg-amber-300 hover:shadow-[6px_6px_0px_0px_#0f172a]"
              : "bg-slate-900 text-white shadow-[4px_4px_0px_0px_#0f172a] hover:bg-slate-800 hover:shadow-[6px_6px_0px_0px_#0f172a]"
          }`}
        >
          <span>Choose {item.tier} Package</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <p className="mt-3 text-center text-xs font-semibold text-slate-400">
          WhatsApp direct setup • Zero recurring code fees
        </p>
      </div>
    </article>
  );
}
