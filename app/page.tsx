import Link from "next/link";

import FinalCtaSection from "@/components/FinalCtaSection";
import FreelancerSliderSection from "@/components/FreelancerSliderSection";
import HiringProcessSection from "@/components/HiringProcessSection";
import MatchDeveloperSection from "@/components/MatchDeveloperSection";
import OfficeShowcase from "@/components/OfficeShowcase";
import PackageCard from "@/components/PackageCard";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/site";

const gridMarks = Array.from({ length: 15 });

export default function HomePage() {
  const content = siteContent;

  return (
    <>
      <section className="relative overflow-hidden px-0 pb-14 pt-12 max-[720px]:pb-10 max-[720px]:pt-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-44px] top-[110px] grid grid-cols-5 gap-0 opacity-70 max-[900px]:left-[-56px] max-[720px]:top-[140px]">
            {gridMarks.map((_, index) => (
              <span
                key={`left-${index}`}
                className="h-[68px] w-[68px] border-r border-t border-[#dae2ee] max-[720px]:h-[46px] max-[720px]:w-[46px]"
              />
            ))}
          </div>
          <div className="absolute right-[18px] top-[72px] grid grid-cols-5 gap-0 opacity-70 max-[900px]:right-[-18px] max-[720px]:right-[-34px] max-[720px]:top-[92px]">
            {gridMarks.map((_, index) => (
              <span
                key={`right-${index}`}
                className="h-[68px] w-[68px] border-r border-t border-[#dae2ee] max-[720px]:h-[46px] max-[720px]:w-[46px]"
              />
            ))}
          </div>
          <div className="absolute left-1/2 top-[54%] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#dceaff] blur-3xl max-[720px]:h-[280px] max-[720px]:w-[280px]" />
          <div className="absolute left-1/2 top-[58%] h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/85 blur-2xl max-[720px]:h-[160px] max-[720px]:w-[160px]" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-[560px] w-[min(1180px,calc(100%-40px))] flex-col items-center justify-center text-center max-[720px]:min-h-[480px] max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <h1 className="mx-auto max-w-[760px] text-[clamp(3rem,6vw,5.35rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#171c28]">
              Hire top freelance talent on ApniWebiste
            </h1>
            <p className="mx-auto mt-7 max-w-[620px] text-[clamp(1.1rem,2vw,1.45rem)] leading-8 text-[#5f7191]">
              Discover and hire top independent talent today.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
              <Link
                className="inline-flex min-h-[60px] items-center justify-center rounded-full bg-[#2e374a] px-8 py-3 text-[1.05rem] font-semibold text-white shadow-[0_20px_40px_rgba(64,94,150,0.18)] transition duration-200 hover:-translate-y-0.5"
                href="/projects"
              >
                Browse talent
              </Link>
              <Link
                className="inline-flex min-h-[60px] items-center justify-center rounded-full border border-[#d7e0ed] bg-white/85 px-8 py-3 text-[1.05rem] font-semibold text-[#4f5f7d] shadow-[0_16px_34px_rgba(148,170,205,0.18)] backdrop-blur transition duration-200 hover:-translate-y-0.5"
                href="/contact"
              >
                Get started
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

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

      <HiringProcessSection />
      <FreelancerSliderSection />
      <MatchDeveloperSection />
      <OfficeShowcase office={content.office} contact={content.contact} />

      {/* <section className="bg-white/20 px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
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
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5"
              href="/projects"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section> */}

      <FinalCtaSection />
    </>
  );
}
