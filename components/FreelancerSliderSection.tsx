import Reveal from "@/components/Reveal";

const freelancers = [
  {
    name: "Ameer Abdullah",
    location: "Dubai, United Arab Emirates",
    completedProjects: 335,
    joined: "December 2020",
    specialty: "WordPress architecture",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Rob Rochford",
    location: "Manchester, United Kingdom",
    completedProjects: 141,
    joined: "September 2021",
    specialty: "Performance optimization",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Darko Gerguric",
    location: "Zrenjanin City, Serbia",
    completedProjects: 133,
    joined: "June 2020",
    specialty: "Custom plugin development",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dejan Markovic",
    location: "Toronto, Canada",
    completedProjects: 58,
    joined: "February 2019",
    specialty: "Enterprise WordPress builds",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Dragos Nistor",
    location: "London, United Kingdom",
    completedProjects: 184,
    joined: "May 2022",
    specialty: "WooCommerce systems",
    image:
      "https://images.unsplash.com/photo-1506794778191-f55b29a7d72a?auto=format&fit=crop&w=900&q=80"
  }
] as const;

function LocationPin() {
  return (
    <svg aria-hidden="true" className="h-4 w-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
      <path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function RatingMarks() {
  return (
    <div className="flex items-center gap-1.5 text-[#172334]">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="inline-flex h-3.5 w-3.5 items-center justify-center text-[0.72rem] font-bold">
          *
        </span>
      ))}
    </div>
  );
}

function FreelancerCard({ freelancer }: { freelancer: (typeof freelancers)[number] }) {
  return (
    <article className="w-[296px] shrink-0 rounded-[30px] bg-white px-4 pb-5 pt-4 shadow-[0_18px_42px_rgba(35,46,72,0.12)] ring-1 ring-slate-950/6 max-[720px]:w-[260px]">
      <div
        className="h-[288px] rounded-[24px] bg-[#dfe7ee] bg-cover bg-center max-[720px]:h-[244px]"
        style={{ backgroundImage: `url(${freelancer.image})` }}
      />

      <div className="px-1 pt-5">
        <h3 className="m-0 text-[2rem] leading-[1] tracking-[-0.05em] text-[#171c28]">{freelancer.name}</h3>

        <div className="mt-3 flex items-center gap-2 text-[0.96rem] text-[#9fb0af]">
          <LocationPin />
          <span>{freelancer.location}</span>
        </div>

        <div className="mt-4">
          <RatingMarks />
        </div>

        <p className="mt-3 text-[0.98rem] leading-7 text-[#172334]">Completed Projects: {freelancer.completedProjects}</p>
        <p className="text-[0.98rem] leading-7 text-[#172334]">Joined: {freelancer.joined}</p>
        <p className="mt-1 text-[0.95rem] leading-7 text-[#5f7191]">{freelancer.specialty}</p>

        <button
          type="button"
          className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center rounded-[6px] bg-[#1d2832] px-4 py-3 text-[0.95rem] font-semibold uppercase tracking-[0.05em] text-white transition duration-200 hover:-translate-y-0.5"
        >
          View Profile
        </button>
      </div>
    </article>
  );
}

export default function FreelancerSliderSection() {
  const loopedFreelancers = [...freelancers, ...freelancers];

  return (
    <section className="overflow-hidden px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1280px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1280px)]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[920px] text-center">
            <h2 className="m-0 text-[clamp(2.2rem,4.8vw,4.45rem)] leading-[1.04] tracking-[-0.06em] text-[#171c28]">
              A handful of our 500+ carefully screened Software Developers.
            </h2>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-[linear-gradient(90deg,#f6f1e8,rgba(246,241,232,0))]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-[linear-gradient(270deg,#f6f1e8,rgba(246,241,232,0))]" />

        <div className="flex min-w-max gap-6 whitespace-nowrap animate-marquee max-[720px]:animate-marquee-mobile">
          {loopedFreelancers.map((freelancer, index) => (
            <div key={`${freelancer.name}-${index}`} className="whitespace-normal">
              <FreelancerCard freelancer={freelancer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
