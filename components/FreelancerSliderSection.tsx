"use client";

import Reveal from "@/components/Reveal";

const freelancers = [
  {
    name: "Kanha Gupta",
    role: "Lead Full-Stack Architect",
    location: "Bhopal, MP, India",
    completedProjects: 42,
    rating: "5.0",
    specialty: "Next.js • TypeScript • Cloud APIs",
    tag: "Architect ⚡",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Jaoa Silva",
    role: "UI/UX & Frontend Engineer",
    location: "São Paulo, Brazil",
    completedProjects: 58,
    rating: "4.99",
    specialty: "Tailwind CSS • Motion • React 19",
    tag: "Motion Ninja 🎨",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lakshya Gupta",
    role: "Design Systems & Web Lead",
    location: "Bhopal, MP, India",
    completedProjects: 84,
    rating: "5.0",
    specialty: "Digital Storefronts • E-commerce",
    tag: "Storefront Pro 🛍️",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Elena Rostova",
    role: "AI & Data Engineer",
    location: "Berlin, Germany",
    completedProjects: 65,
    rating: "5.0",
    specialty: "Python FastAPI • NLP • Scikit-Learn",
    tag: "AI Craftsman 🧠",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Arjun Verma",
    role: "Performance & SEO Specialist",
    location: "Bengaluru, India",
    completedProjects: 92,
    rating: "4.98",
    specialty: "Core Web Vitals • Local SEO • Headless",
    tag: "Speed Demon 🚀",
    image:
      "https://res.cloudinary.com/dw7elrwuy/image/upload/v1790411402/pointonepercentgrowth/branding/agency-logo.jpg"
  }
] as const;

function FreelancerCard({ freelancer }: { freelancer: (typeof freelancers)[number] }) {
  return (
    <article className="group relative w-[310px] shrink-0 rounded-3xl border-3 border-slate-900 bg-white p-5 shadow-[6px_6px_0px_0px_#0f172a] transition-all duration-300 hover:-translate-x-1.5 hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_#0f172a]">
      {/* 3D Image Container */}
      {/* <div className="relative h-60 w-full overflow-hidden rounded-2xl border-2 border-slate-900 bg-slate-100"> */}
        {/* <img
          src={freelancer.image}
          alt={freelancer.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        /> */}

        {/* Sticker Stamp */}
        {/* <div className="absolute top-3 left-3 rounded-full border-2 border-slate-900 bg-amber-300 px-3 py-0.5 text-[11px] font-black uppercase text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
          {freelancer.tag}
        </div> */}

        {/* <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full border-2 border-slate-900 bg-white px-2.5 py-0.5 text-xs font-black text-slate-900 shadow-[2px_2px_0px_0px_#0f172a]">
          <span>⭐</span>
          <span>{freelancer.rating}</span>
        </div> */}
      {/* </div> */}

      {/* Info Section */}
      <div className="pt-4">
        <h3 className="text-xl font-black tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
          {freelancer.name}
        </h3>
        <p className="text-xs font-bold text-indigo-600">{freelancer.role}</p>

        <div className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
          <span>📍</span>
          <span>{freelancer.location}</span>
        </div>

        <div className="mt-3 rounded-xl border-2 border-slate-900/10 bg-slate-50 p-2.5 text-xs font-bold">
          <div className="flex justify-between text-slate-700">
            <span>Delivered Builds:</span>
            <span className="text-slate-900">{freelancer.completedProjects} Projects</span>
          </div>
          <div className="mt-1 flex justify-between text-slate-700">
            <span>Expertise:</span>
            <span className="truncate pl-2 text-indigo-600">{freelancer.specialty.split("•")[0]}</span>
          </div>
        </div>

        <a
          href="/contact"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-slate-900 bg-slate-900 px-4 py-3 text-xs font-black text-white shadow-[3px_3px_0px_0px_#0f172a] transition-all duration-200 hover:bg-indigo-600 hover:shadow-[4px_4px_0px_0px_#0f172a] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
        >
          <span>Book Developer</span>
          <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </article>
  );
}

export default function FreelancerSliderSection() {
  const loopedFreelancers = [...freelancers, ...freelancers];

  return (
    <section className="relative overflow-hidden py-16 lg:py-24">
      <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
        <Reveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-amber-300 px-4 py-1 text-xs font-black uppercase tracking-wider text-slate-900 shadow-[3px_3px_0px_0px_#0f172a]">
              <span>⭐</span>
              <span>Screened Specialists Pool</span>
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
              Meet Our Rigorously Screened{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">
                Specialists
              </span>
            </h2>
            <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg">
              Top 0.1% vetted software engineers and digital storefront craftsmen ready to accelerate your builds.
            </p>
          </div>
        </Reveal>
      </div>

      {/* 3D Infinite Marquee Slider */}
      <div className="group relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#fbf8f3] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#fbf8f3] to-transparent" />

        <div className="flex min-w-max gap-8 animate-marquee group-hover:[animation-play-state:paused] py-3">
          {loopedFreelancers.map((freelancer, index) => (
            <div key={`${freelancer.name}-${index}`}>
              <FreelancerCard freelancer={freelancer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
