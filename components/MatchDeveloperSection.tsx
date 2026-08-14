import Link from "next/link";

import Reveal from "@/components/Reveal";

const matchSteps = [
  {
    step: "01",
    title: "Brief",
    description:
      "You'll tell us what you need: we can tackle anything from small fixes to full website builds."
  },
  {
    step: "02",
    title: "Connect",
    description:
      "We'll connect you to the right developers for your project to chat with and get your scope 100% defined."
  },
  {
    step: "03",
    title: "Collaborate",
    description:
      "You'll get one estimate, hire your preferred developer, and start collaborating."
  }
] as const;

export default function MatchDeveloperSection() {
  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <div className="mx-auto max-w-[940px] text-center">
            <h2 className="m-0 text-[clamp(2.2rem,4.8vw,4.35rem)] leading-[1.05] tracking-[-0.06em] text-[#171c28]">
              Get matched with your Software developer in under one day
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3 max-[720px]:mt-10">
          {matchSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <article className="min-h-[256px] rounded-[4px] border-t-[8px] border-[#f6ad93] bg-[#192129] px-6 py-7 text-white shadow-[0_18px_40px_rgba(17,24,39,0.18)]">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="m-0 text-[clamp(2rem,3vw,3rem)] leading-[0.95] tracking-[-0.05em] text-white">
                    {item.title}
                  </h3>
                  <span className="text-[clamp(2rem,3vw,3rem)] leading-none tracking-[-0.06em] text-white">
                    {item.step}
                  </span>
                </div>
                <p className="mt-6 max-w-[290px] text-[1.06rem] leading-9 text-white/92">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mx-auto mt-12 h-px w-[min(880px,100%)] bg-[#c9d8d6] max-[720px]:mt-10" />

        <Reveal delay={180}>
          <div className="mt-11 flex justify-center">
            <Link
              className="inline-flex min-h-[48px] items-center justify-center rounded-[4px] bg-[#1d2832] px-10 py-3 text-[0.95rem] font-semibold uppercase tracking-[0.09em] text-white transition duration-200 hover:-translate-y-0.5"
              href="/contact"
            >
              Start A Project
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
