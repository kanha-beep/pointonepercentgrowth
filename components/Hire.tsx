import React from "react";

export default function Hire() {
  return <div>

     <div className="relative z-10 mx-auto flex min-h-[560px] w-[80%] flex-col items-center justify-center text-center">
              <Reveal>
                <div className=" h-full flex flex-col -translate-y-[2.5rem] items-center">
                  {/* <div className=""> */}
                    <h1 className=" text-[5rem] font-semibold leading-[1.2] text-[#171c28]">
                      Hire Top Talent on .1%Growth
                    </h1>
                    <p className="mx-auto mt-7 max-w-[620px] text-[clamp(1.1rem,2vw,1.45rem)] leading-8 text-[#5f7191]">
                      Discover and hire top independent talent today.
                    </p>
                  {/* </div> */}
                </div>
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
  </div>;
}
