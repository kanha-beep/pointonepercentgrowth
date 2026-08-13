import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function OfficeShowcase({ office, contact }) {
  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-start gap-7 lg:grid-cols-[1.05fr_0.95fr] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <SectionHeading
            eyebrow="Office"
            title={office.title}
            description={office.description}
          />
          <div className="space-y-2 leading-8 text-slate-500">
            <p>
              <strong className="text-slate-950">{contact.officeName}</strong>
            </p>
            <p>{contact.officeAddress}</p>
            <p>{contact.officeHours}</p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="rounded-[32px] border border-slate-950/10 bg-white/75 p-7 shadow-soft backdrop-blur-xl">
            <div className="overflow-hidden rounded-3xl bg-[#172334]">
              <div className="h-[42px] bg-gradient-to-r from-[#20354f] to-[#162230]" />
              <div className="relative min-h-[300px] overflow-hidden p-7">
                <div className="absolute right-10 top-8 h-[130px] w-[130px] rounded-[30px] bg-white/10 blur-[2px]" />
                <div className="absolute bottom-6 left-[18px] h-[90px] w-[90px] rounded-[30px] bg-[#be7b3f]/20 blur-[2px]" />
                <div className="relative z-10 grid gap-3.5">
                  {office.bullets.map((bullet) => (
                    <article
                      key={bullet}
                      className="grid grid-cols-[18px_1fr] gap-3 rounded-[18px] bg-white/10 p-[18px] text-white/90"
                    >
                      <span className="mt-[7px] h-2.5 w-2.5 rounded-full bg-[#f6d2b3]" />
                      <p className="m-0 leading-8 text-white/80">{bullet}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default OfficeShowcase;
