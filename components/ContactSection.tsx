"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

import Reveal from "@/components/Reveal";
import { useEnquiryStatus } from "@/components/site-shell";
import type { EnquiryInput, SiteContent } from "@/lib/site";

const initialForm: EnquiryInput = {
  name: "",
  businessType: "",
  phone: "",
  packageName: "",
  message: ""
};

export default function ContactSection({ content }: { content: SiteContent }) {
  const [formData, setFormData] = useState<EnquiryInput>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const { setStatus } = useEnquiryStatus();

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong while submitting your enquiry.");
      }

      setStatus({ type: "success", message: "Your enquiry has been received! Our founders will contact you shortly." });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Something went wrong while submitting your enquiry."
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="relative py-16 pb-28">
      <div className="mx-auto grid w-[min(1240px,calc(100%-40px))] items-start gap-12 lg:grid-cols-12">
        {/* Left Column: Direct channels */}
        <div className="space-y-6 lg:col-span-5">
          <Reveal variant="left">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Direct Communication
            </span>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Let's Build Something Exceptional
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Have a project in mind or need a tailored package quote? Reach out directly via form or message our founding team on WhatsApp.
            </p>

            <div className="mt-8 space-y-4">
              {/* WhatsApp Quick Connect */}
              <a
                href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(content.contact.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-50/50 p-5 backdrop-blur-md transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">WhatsApp Fast Chat</h4>
                    <p className="text-xs text-slate-500">Average response time: &lt; 15 mins</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-emerald-600 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Email */}
              <a
                href={`mailto:${content.contact.email}`}
                className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md transition-all duration-200 hover:border-slate-300 hover:bg-white"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Email Inquiries</h4>
                    <p className="text-xs text-slate-500">{content.contact.email}</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href={content.contact.phoneHref}
                className="group flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-5 backdrop-blur-md transition-all duration-200 hover:border-slate-300 hover:bg-white"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct Phone</h4>
                    <p className="text-xs text-slate-500">{content.contact.phoneDisplay}</p>
                  </div>
                </div>
                <svg className="h-4 w-4 text-slate-400 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <Reveal variant="right" delay={100}>
            <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-[0_20px_50px_-15px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Send Project Brief
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Tell us about your business, the features you require, or the developer skillset you need.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Business Type / Industry
                    </label>
                    <input
                      type="text"
                      name="businessType"
                      required
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="graphic, Dairy, Retail, Tech..."
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Interested Package
                    </label>
                    <select
                      name="packageName"
                      required
                      value={formData.packageName}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                    >
                      <option value="">Select a package or service</option>
                      {content.packages.map((item) => (
                        <option key={item.name} value={item.name}>
                          {item.name} ({item.tier} - {item.price})
                        </option>
                      ))}
                      <option value="Custom Developer Hiring">Hire 0.1% Vetted Developer</option>
                      <option value="Other / Custom Enterprise">Other / Custom Enterprise Build</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Project Notes & Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your current store, custom features you need (e.g. WhatsApp checkout, delivery zones), or timeline expectations."
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:shadow-indigo-500/20 hover:shadow-lg disabled:opacity-50 active:scale-98"
                >
                  {submitting ? (
                    <>
                      <svg className="h-4 w-4 animate-spin text-white" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Submitting Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Project Brief</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-slate-400">
                  🔒 We respect your privacy. No spam, ever.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
