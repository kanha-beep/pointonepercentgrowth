import Link from "next/link";

import CategoryCard from "@/components/CategoryCard";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { siteContent } from "@/lib/site";

export default function CategoriesPage() {
  const content = siteContent;

  return (
    <>
      <PageHero eyebrow="Categories" title="Explore all the categories and choose your final website destination" description="Browse by business type first, compare multiple website directions inside that category, and then ask for customization." actions={<Link className="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5" href="/projects">See Category Projects</Link>} />
      <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8"><div className="mx-auto w-[min(1180px,calc(100%-40px))] max-[720px]:w-[min(100%-28px,1180px)]"><Reveal><SectionHeading eyebrow="Business categories" title="Each category below can hold multiple project cards or full websites that show clients exactly what you can build" description="" /></Reveal><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{content.categories.map((item, index) => <Reveal key={item.slug} delay={index * 70}><CategoryCard item={item} /></Reveal>)}</div></div></section>
    </>
  );
}
