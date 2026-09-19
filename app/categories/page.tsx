import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site";

export default function CategoriesPage() {
  const content = siteContent;

  return (
    <>
      <PageHero
        eyebrow="Industry Blueprints"
        title="Tailored Solutions for Every Business Sector"
        description="Browse pre-architected storefront patterns specifically optimized for local consumer behaviors, inventory dynamics, and rapid WhatsApp ordering."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 active:scale-95"
            >
              <span>Explore All Live Builds</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        }
      />

      <section className="py-12 pb-28">
        <div className="mx-auto w-[min(1240px,calc(100%-40px))]">
          <Reveal>
            <div className="mb-14 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Industry Breakdown
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Select Your Niche
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Every sector has distinct customer journey expectations. We’ve battle-tested user flows for each category.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {content.categories.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <CategoryCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
