import ContactSection from "../components/ContactSection";
import OfficeShowcase from "../components/OfficeShowcase";
import PackageCard from "../components/PackageCard";
import PageHero from "../components/PageHero";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function HomePage({
  content,
  navigate,
  formData,
  submitting,
  onInputChange,
  onFormSubmit
}) {
  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        actions={
          <>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
              onClick={() => navigate("/projects")}
            >
              {content.hero.primaryCta}
            </button>
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-950/10 bg-white/80 px-5 py-3 text-slate-950 transition duration-200 hover:-translate-y-0.5"
              onClick={() => navigate("/contact")}
            >
              {content.hero.secondaryCta}
            </button>
          </>
        }
        stats={
          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {content.metrics.map((metric) => (
                <article
                  key={metric.label}
                  className="rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl"
                >
                  <strong className="block text-[2.2rem] text-slate-950">{metric.value}</strong>
                  <span className="leading-8 text-slate-500">{metric.label}</span>
                </article>
              ))}
            </div>
            <div className="rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl">
              {content.highlights.map((item) => (
                <p key={item} className="m-0 text-slate-500 [&:not(:first-child)]:mt-3">
                  {item}
                </p>
              ))}
            </div>
          </div>
        }
      />

      <section className="px-0 pb-[88px] pt-0 max-[720px]:pb-[72px]">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] overflow-hidden rounded-full border border-slate-950/10 bg-white/70 max-[720px]:w-[min(100%-28px,1180px)]">
          <div className="inline-flex min-w-max animate-marquee gap-7 whitespace-nowrap px-5 py-3.5 font-semibold text-slate-950">
            <span>{content.contact.officeName}</span>
            <span>{content.contact.officeAddress}</span>
            <span>{content.contact.officeHours}</span>
            <span>WhatsApp-first client communication</span>
            <span>Responsive design for every screen</span>
          </div>
        </div>
      </section>

      <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Packages"
              title="Low, medium, and high service plans with clear business value"
              description="Each package is designed to help local businesses look stronger online and get more direct enquiries."
            />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.packages.map((item, index) => (
              <Reveal key={item.name} delay={index * 80}>
                <PackageCard item={item} contact={content.contact} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <OfficeShowcase office={content.office} contact={content.contact} />

      <section className="bg-white/20 px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <SectionHeading
              eyebrow="Featured projects"
              title="Professional portfolio cards clients can browse before they call"
              description="Every project includes direct WhatsApp and mobile actions so decision-making stays fast."
            />
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            {content.projects.slice(0, 3).map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <ProjectCard item={item} contact={content.contact} />
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
              onClick={() => navigate("/projects")}
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      <ContactSection
        content={content}
        formData={formData}
        submitting={submitting}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
}

export default HomePage;
