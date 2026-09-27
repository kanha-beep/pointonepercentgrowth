import Reveal from "@/components/Reveal";

const freelancerCategories = [
  {
    title: "Programming & Development",
    count: "297,444 Freelancers",
    icon: "code"
  },
  {
    title: "Writing & Translation",
    count: "217,499 Freelancers",
    icon: "document"
  },
  {
    title: "Design & Art",
    count: "201,240 Freelancers",
    icon: "art"
  },
  {
    title: "Administrative & Secretarial",
    count: "89,855 Freelancers",
    icon: "admin"
  },
  {
    title: "Sales & Marketing",
    count: "80,136 Freelancers",
    icon: "chart"
  },
  {
    title: "Engineering & Architecture",
    count: "51,876 Freelancers",
    icon: "blueprint"
  },
  {
    title: "Business & Finance",
    count: "47,588 Freelancers",
    icon: "finance"
  },
  {
    title: "Education & Training",
    count: "10,894 Freelancers",
    icon: "education"
  },
  {
    title: "Legal",
    count: "6,002 Freelancers",
    icon: "legal"
  }
] as const;

function CategoryIcon({ icon }: { icon: (typeof freelancerCategories)[number]["icon"] }) {
  const baseClasses = "h-11 w-11 text-[#2f80ed]";

  switch (icon) {
    case "code":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <rect x="10" y="7" width="28" height="18" rx="3.5" />
          <path d="M18 17l-4 4 4 4" />
          <path d="M30 17l4 4-4 4" />
          <path d="M22 24l4-10" />
          <path d="M13 31h22" />
          <rect x="14" y="31" width="20" height="10" rx="2.8" />
          <circle cx="31" cy="36" r="1.5" />
          <path d="M18 35h6" />
        </svg>
      );
    case "document":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <rect x="10" y="10" width="20" height="24" rx="2.8" />
          <path d="M17 16h12" />
          <path d="M17 21h12" />
          <path d="M17 26h9" />
          <rect x="18" y="5" width="20" height="24" rx="2.8" />
          <path d="M25 11h12" />
          <path d="M25 16h12" />
          <path d="M25 21h8" />
          <path d="M32 12v25" />
          <path d="M37 31l4 4" />
          <path d="M37 31l-4 4" />
        </svg>
      );
    case "art":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M12 32c0-8 4-15 7-19 4 4 7 10 7 17 0 4-3 7-7 7s-7-2-7-5z" />
          <path d="M17 9c2 2 4 5 5 8" />
          <path d="M24 35c0-10 5-18 8-22 4 4 7 10 7 18 0 4-3 7-7 7a8 8 0 0 1-8-3z" />
          <path d="M31 9c2 2 4 5 5 8" />
          <path d="M8 36c5-3 11-4 17-4 7 0 12 1 15 4" />
          <path d="M19 35l-4-10" />
          <path d="M29 35l4-12" />
        </svg>
      );
    case "admin":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M14 8h16l6 6v20a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
          <path d="M30 8v8h8" />
          <path d="M15 18h14" />
          <path d="M15 24h14" />
          <path d="M15 30h9" />
          <path d="M35 22.5a3.5 3.5 0 1 0 0 7" />
          <path d="M38.5 19.5l-1.2 2.1" />
          <path d="M38.5 30.5l-1.2-2.1" />
          <path d="M42 25h-2.4" />
        </svg>
      );
    case "chart":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M10 11h14l6 6v20H10z" />
          <path d="M24 11v6h6" />
          <path d="M16 31v-7" />
          <path d="M22 31V20" />
          <path d="M28 31v-11" />
          <path d="M12 35h24" />
          <circle cx="18" cy="15" r="7" />
          <path d="M18 15V10" />
          <path d="M18 15h4" />
        </svg>
      );
    case "blueprint":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M14 11h18l6 6v20H14z" />
          <path d="M32 11v8h8" />
          <path d="M18 30V18" />
          <path d="M18 30h12" />
          <path d="M24 30V16" />
          <path d="M30 30a6 6 0 1 0-12 0" />
          <path d="M24 15l4 7" />
          <path d="M24 15l-4 7" />
          <circle cx="24" cy="15" r="2" />
        </svg>
      );
    case "finance":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M12 8h16l8 8v20a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" />
          <path d="M28 8v8h8" />
          <rect x="12" y="14" width="10" height="8" rx="1.8" />
          <path d="M14 18h6" />
          <circle cx="18" cy="31" r="5.8" />
          <path d="M18 27.8v6.4" />
          <path d="M20.8 29.4c-.8-.9-1.8-1.2-2.8-1.2-1.5 0-2.6.8-2.6 2 0 1.1.9 1.7 2.7 2.2 1.8.5 2.7 1.1 2.7 2.3 0 1.4-1.2 2.3-2.9 2.3-1.1 0-2.2-.3-3.1-1.1" />
          <path d="M26 28h6" />
          <path d="M26 32h6" />
        </svg>
      );
    case "education":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M8 18l16-7 16 7-16 7-16-7z" />
          <path d="M14 22v8c0 3 5 5 10 5s10-2 10-5v-8" />
          <path d="M40 18v10" />
          <path d="M40 28c1.7 1.2 2.5 2.6 2.5 4.2 0 2.5-2.2 4.8-5.5 5.8" />
        </svg>
      );
    case "legal":
      return (
        <svg aria-hidden="true" className={baseClasses} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" viewBox="0 0 48 48">
          <path d="M24 10v23" />
          <path d="M16 15h16" />
          <path d="M11 19l-5 9h10l-5-9z" />
          <path d="M37 19l-5 9h10l-5-9z" />
          <path d="M11 19h26" />
          <path d="M20 38h8" />
          <path d="M14 41h20" />
        </svg>
      );
  }
}

export default function TopFreelancersSection() {
  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <h2 className="m-0 text-[clamp(2.2rem,4vw,4rem)] leading-[1.05] tracking-[-0.05em] text-slate-950">
              Find Top Freelancers
            </h2>
            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-[#2f80ed]" />
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {freelancerCategories.map((item, index) => (
            <Reveal key={item.title} delay={index * 60}>
              <article className="flex min-h-[198px] flex-col items-center justify-center rounded-[8px] border border-[#e7eef6] bg-white px-8 py-10 text-center shadow-[0_6px_18px_rgba(47,128,237,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(47,128,237,0.16)] max-[720px]:min-h-[176px]">
                <CategoryIcon icon={item.icon} />
                <h3 className="mt-6 text-[1.05rem] font-semibold leading-8 text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-[0.98rem] leading-7 text-slate-500">{item.count}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
