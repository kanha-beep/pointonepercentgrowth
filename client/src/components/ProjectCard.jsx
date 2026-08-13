const gradientClasses = {
  "gradient-salon": "bg-gradient-to-br from-[#f8e8e4] via-[#f7f3ef] to-[#f1cfb6]",
  "gradient-salon-soft": "bg-gradient-to-br from-[#fff8f2] via-[#f5e7df] to-[#ead5c7]",
  "gradient-grocery": "bg-gradient-to-br from-[#dcedd7] via-[#eff7ea] to-[#c7e3c1]",
  "gradient-medical": "bg-gradient-to-br from-[#dceeff] via-[#f0f8ff] to-[#c8dcff]",
  "gradient-milk": "bg-gradient-to-br from-[#dff5ff] via-[#f4fbff] to-[#cce6ff]",
  "gradient-stationery": "bg-gradient-to-br from-[#ece7ff] via-[#f7f4ff] to-[#d4d0ff]",
  "gradient-cosmetics": "bg-gradient-to-br from-[#ffe0ea] via-[#fff1f5] to-[#ffd1e1]"
};

function ProjectCard({ item, contact }) {
  const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I am interested in project ${item.number} - ${item.title}. Please customize it for my business.`
  )}`;

  return (
    <article className="overflow-hidden rounded-[32px] border border-slate-950/10 bg-white/75 p-0 shadow-soft backdrop-blur-xl">
      <div
        className={`relative min-h-60 overflow-hidden border-b border-slate-950/10 p-6 ${
          gradientClasses[item.gradient] || gradientClasses["gradient-salon"]
        }`}
      >
        <div className="inline-flex h-14 min-w-14 items-center justify-center rounded-full bg-white/85 text-[0.8rem] font-bold text-slate-950">
          {item.number}
        </div>
        <div className="absolute bottom-[-32px] right-[-24px] h-[180px] w-[180px] rounded-full border border-white/45 shadow-[inset_0_0_0_28px_rgba(255,255,255,0.08)]" />
      </div>
      <div className="p-6 pb-7">
        <span className="inline-flex items-center justify-center rounded-full border border-slate-950/10 bg-white/90 px-3.5 py-2 text-[0.8rem] font-bold">
          {item.category}
        </span>
        <h3 className="mb-2.5 mt-[18px] text-2xl text-slate-950">{item.title}</h3>
        <p className="leading-8 text-slate-500">{item.summary}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3.5">
          {item.stats.map((stat) => (
            <span
              key={stat}
              className="rounded-[14px] border border-slate-950/10 bg-white/75 px-3 py-2 text-[0.86rem] text-slate-950"
            >
              {stat}
            </span>
          ))}
        </div>
        <div className="mb-4 mt-4 font-semibold text-slate-500">
          <strong>Best fit:</strong> {item.packageFit}
        </div>
        <div className="flex flex-wrap items-center gap-3.5">
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
            href={whatsappLink}
          >
            {item.ctaLabel}
          </a>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 px-5 py-3 text-slate-950 transition duration-200 hover:-translate-y-0.5"
            href={contact.phoneHref}
          >
            Call for Project {item.number}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
