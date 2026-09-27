import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[68vh] items-center px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <div className="max-w-[720px] rounded-[36px] border border-slate-950/10 bg-white/75 p-[42px] shadow-soft backdrop-blur-xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#be7b3f]">Page not found</p>
          <h1 className="m-0 text-[clamp(2.4rem,5vw,5rem)] leading-[0.98] tracking-[-0.05em] text-slate-950">This page does not exist in the portfolio yet.</h1>
          <p className="mt-5 leading-8 text-slate-500">Use the button below to return to the main website showcase.</p>
          <Link className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5" href="/">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
