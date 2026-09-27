"use client";

import { useState } from "react";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { siteContent } from "@/lib/site";

const CATEGORIES = ["All", "Graphic", "UI/UX"] as const;

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const content = siteContent;

  const filteredProjects = selectedCategory === "All"
    ? content.projects
    : content.projects.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Graphic Design & UI/UX"
        description="Explore the work created by our team. Filter by Graphic or UI/UX to find the designs you want to see."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:bg-gradient-to-r hover:from-indigo-600 hover:to-violet-600 active:scale-95"
            >
              <span>Discuss your project</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/7999046735?text=Hi%2C%20I%20want%20to%20see%20portfolio%20examples"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              WhatsApp Direct
            </a>
          </div>
        }
      />

      <section className="py-12 pb-24">
        <div className="mx-auto w-[99%]">
          {/* Interactive Filter Tabs */}
          <Reveal>
            <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white shadow-md"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Project Cards Grid */}
          <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((item, index) => (
              <Reveal key={item.id} delay={index * 60}>
                <ProjectCard item={item} contact={content.contact} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
