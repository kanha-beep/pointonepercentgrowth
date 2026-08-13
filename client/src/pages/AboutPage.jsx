import OfficeShowcase from "../components/OfficeShowcase";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function AboutPage({ content, navigate }) {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={content.story.title}
        description={content.story.description}
        actions={
          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
            onClick={() => navigate("/contact")}
          >
            Talk About Your Website
          </button>
        }
      />

      <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
        <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-start gap-7 lg:grid-cols-[1.05fr_0.95fr] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Positioning"
              title="We make local businesses feel premium online"
              description="The goal is not just a good-looking website. The goal is a website that makes your customer trust you faster."
            />
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 rounded-[32px] border border-slate-950/10 bg-white/75 p-7 shadow-soft backdrop-blur-xl">
              {content.story.principles.map((principle, index) => (
                <article
                  key={principle}
                  className="grid grid-cols-[54px_1fr] items-start gap-4 border-b border-slate-950/10 py-4 last:border-b-0 last:pb-0"
                >
                  <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[18px] bg-[#be7b3f]/15 font-bold text-slate-950">
                    {`0${index + 1}`}
                  </span>
                  <p className="m-0 leading-8 text-slate-500">{principle}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <OfficeShowcase office={content.office} contact={content.contact} />

      <section className="bg-white/20 px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Process"
              title="A simple workflow that is easy for clients to understand"
              description="We keep the path simple so local businesses can move from interest to launch without confusion."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {content.process.map((item, index) => (
              <Reveal key={item.step} delay={index * 90}>
                <article className="rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl">
                  <strong className="mb-4 block text-[2rem] text-slate-950">{item.step}</strong>
                  <h3 className="mb-2.5 mt-0 text-2xl text-slate-950">{item.title}</h3>
                  <p className="leading-8 text-slate-500">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
