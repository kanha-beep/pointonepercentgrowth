import Link from "next/link";

import Reveal from "@/components/Reveal";

export default function FinalCtaSection() {
  return (
    <section className="px-0 pt-10">
      <div className="bg-[#f6ad93] px-0 py-[108px] max-[720px]:py-[84px]">
        <div className="mx-auto w-[min(1180px,calc(100%-40px))] text-center max-[720px]:w-[min(100%-28px,1180px)]">
          <Reveal>
            <h2 className="m-0 text-[clamp(2.3rem,4.9vw,4.5rem)] leading-[1.04] tracking-[-0.06em] text-[#171c28]">
              Ready to hire your Software developer?
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-16 flex justify-center max-[720px]:mt-12">
              <Link
                className="inline-flex min-h-[46px] items-center justify-center rounded-[4px] bg-[#192129] px-8 py-3 text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:-translate-y-0.5"
                href="/contact"
              >
                Post A Project (It's Free!)
              </Link>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-10 text-[1.02rem] leading-8 text-[#171c28]">
              Free estimate | No obligation to hire | 100% risk-free
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
