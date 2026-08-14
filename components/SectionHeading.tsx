export default function SectionHeading({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="mb-8 max-w-3xl">
      {eyebrow ? <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#be7b3f]">{eyebrow}</p> : null}
      <h2 className="m-0 text-[clamp(2rem,3.5vw,3.2rem)] leading-[1.04] tracking-[-0.05em] text-slate-950">{title}</h2>
      {description ? <p className="mt-3.5 leading-8 text-slate-500">{description}</p> : null}
    </div>
  );
}
