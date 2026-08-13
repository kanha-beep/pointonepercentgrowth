function PackageCard({ item, contact }) {
  const whatsappLink = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want the ${item.name} package for my business website.`
  )}`;

  return (
    <article
      className={`rounded-[32px] border border-slate-950/10 bg-white/75 p-7 shadow-soft backdrop-blur-xl ${
        item.featured
          ? "bg-gradient-to-b from-white/90 to-[#f9f0e7]/95 lg:-translate-y-2"
          : ""
      }`}
    >
      <span className="inline-flex items-center justify-center rounded-full border border-slate-950/10 bg-white/90 px-3.5 py-2 text-[0.8rem] font-bold">
        {item.tier}
      </span>
      <h3 className="mb-2.5 mt-[18px] text-2xl text-slate-950">{item.name}</h3>
      <p className="m-0 text-[2.6rem] font-bold tracking-[-0.05em] text-slate-950">{item.price}</p>
      <p className="mb-4 mt-2 font-semibold text-slate-500">{item.meta}</p>
      <p className="mb-[18px] text-slate-500">{item.description}</p>
      <ul className="grid gap-2.5 p-0">
        {item.features.map((feature) => (
          <li key={feature} className="list-none leading-8 text-slate-500">
            <span className="mr-2.5 inline-block h-2 w-2 rounded-full bg-[#be7b3f] align-middle" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-3.5">
        <a
          className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 py-3 font-medium transition duration-200 hover:-translate-y-0.5 ${
            item.featured
              ? "bg-gradient-to-br from-[#172334] to-[#26415f] text-white shadow-soft"
              : "border border-slate-950/10 bg-white/80 text-slate-950"
          }`}
          href={whatsappLink}
        >
          Choose {item.tier}
        </a>
      </div>
    </article>
  );
}

export default PackageCard;
