const accentClasses = {
  "accent-salon": "bg-gradient-to-b from-[#fff7f4]/95 to-white/75",
  "accent-grocery": "bg-gradient-to-b from-[#f1faee]/95 to-white/75",
  "accent-medical": "bg-gradient-to-b from-[#f0f8ff]/95 to-white/75",
  "accent-milk": "bg-gradient-to-b from-[#eff9ff]/95 to-white/75",
  "accent-stationery": "bg-gradient-to-b from-[#f5f4ff]/95 to-white/75",
  "accent-cosmetics": "bg-gradient-to-b from-[#fff2f6]/95 to-white/75",
  "accent-commerce": "bg-gradient-to-b from-[#fff8ed]/95 to-white/75"
};

function CategoryCard({ item }) {
  return (
    <article
      className={`rounded-[32px] border border-slate-950/10 p-7 shadow-soft backdrop-blur-xl ${
        accentClasses[item.accent] || "bg-white/75"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="inline-flex items-center justify-center rounded-full border border-slate-950/10 bg-white/90 px-3.5 py-2 text-[0.8rem] font-bold">
          {item.name}
        </span>
        <span className="inline-flex items-center justify-center rounded-full bg-slate-950/5 px-3 py-2 text-[0.8rem] font-bold text-slate-500">
          {item.audience}
        </span>
      </div>
      <h3 className="mb-2.5 mt-[18px] text-2xl text-slate-950">{item.name} Websites</h3>
      <p className="leading-8 text-slate-500">{item.description}</p>
      <div className="mt-4 flex flex-wrap items-center gap-3.5">
        {item.websites.map((website) => (
          <span
            key={website}
            className="rounded-[14px] border border-slate-950/10 bg-white/75 px-3 py-2 text-[0.86rem] text-slate-950"
          >
            {website}
          </span>
        ))}
      </div>
      {item.packages ? (
        <div className="mt-[18px] grid gap-2.5">
          {item.packages.map((pkg) => (
            <div
              key={pkg.tier}
              className="flex justify-between gap-3 rounded-2xl border border-slate-950/10 bg-white/75 px-3.5 py-3"
            >
              <strong className="text-[0.88rem]">
                {pkg.tier} - {pkg.pages} pages
              </strong>
              <span className="text-[0.88rem] text-slate-500">{pkg.features} features</span>
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default CategoryCard;
