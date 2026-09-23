import type { ContactInfo, Project } from "@/lib/typesfile";

const gradientClasses: Record<string, string> = {
  "gradient-graphic": "bg-gradient-to-br from-rose-50 via-white to-amber-50",
  "gradient-graphic-soft": "bg-gradient-to-br from-amber-50/50 via-white to-orange-50",
  "gradient-medical": "bg-gradient-to-br from-sky-50 via-blue-50/40 to-indigo-50",
  "gradient-uiux": "bg-gradient-to-br from-blue-50 via-indigo-50/40 to-cyan-50",
  "gradient-full stack": "bg-gradient-to-br from-violet-50 via-purple-50/40 to-pink-50",
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
        className={`relative flex min-h-[38rem] w-auto flex-col justify-between overflow-hidden border-b border-slate-100 p-6 ${
          gradientClasses[item.gradient] || gradientClasses["gradient-graphic"]
        }`}
      >
        {/* <div className="relative z-10 flex items-center justify-between"> */}
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-xs font-black tracking-tight text-slate-800 shadow-sm backdrop-blur-sm">
            {item.number}
          </span> */}
          {/* <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow-xs backdrop-blur-sm">
            {item.category}
          </span> */}
        {/* </div> */}
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={`${item.developer ?? item.title} project preview`}
            className="absolute inset-0 z-0 h-full w-full object-cover object-top"
          />
        ) : null}
        {/* Ambient SVG shapes */}
        {/* <div className="pointer-events-none absolute -bottom-10 -right-10 h-36 w-36 rounded-full border border-slate-900/5 bg-white/40 blur-xs transition-transform duration-500 group-hover:scale-125" /> */}

    
      </div>

      {/* Content & Specs */}
     
    </article>
  );
}
