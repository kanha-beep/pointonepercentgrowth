import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ContactSection({
  content,
  formData,
  submitting,
  onInputChange,
  onFormSubmit
}) {
  return (
    <section className="px-0 py-10 pb-[88px] max-[720px]:pb-[72px] max-[720px]:pt-8">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] items-start gap-7 lg:grid-cols-[1.05fr_0.95fr] max-[720px]:w-[min(100%-28px,1180px)]">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let clients see the quality, then contact you instantly."
            description="Use the form for leads, or reach out directly on email, call, and WhatsApp."
          />
          <div className="flex flex-col gap-3.5">
            <a
              className="block rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl"
              href={`mailto:${content.contact.email}`}
            >
              <span className="leading-8 text-slate-500">Email</span>
              <strong className="mt-1.5 block text-slate-950">{content.contact.email}</strong>
            </a>
            <a
              className="block rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl"
              href={content.contact.phoneHref}
            >
              <span className="leading-8 text-slate-500">Phone</span>
              <strong className="mt-1.5 block text-slate-950">{content.contact.phoneDisplay}</strong>
            </a>
            <a
              className="block rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl"
              href={`https://wa.me/${content.contact.whatsappNumber}?text=${encodeURIComponent(
                content.contact.whatsappText
              )}`}
            >
              <span className="leading-8 text-slate-500">WhatsApp</span>
              <strong className="mt-1.5 block text-slate-950">
                Chat directly for project discussion
              </strong>
            </a>
            <div className="rounded-[28px] border border-slate-950/10 bg-white/75 p-[22px] shadow-soft backdrop-blur-xl">
              <span className="leading-8 text-slate-500">Address</span>
              <strong className="mt-1.5 block text-slate-950">
                {content.contact.officeAddress}
              </strong>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            className="rounded-[32px] border border-slate-950/10 bg-white/75 p-7 shadow-soft backdrop-blur-xl"
            onSubmit={onFormSubmit}
          >
            <h3 className="mb-2.5 mt-0 text-2xl text-slate-950">Send an enquiry</h3>
            <p className="mb-6 leading-8 text-slate-500">
              Share your business type, preferred package, and the style you want us to customize.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="mb-[18px] block">
                <span className="mb-2 block font-bold text-slate-950">Name</span>
                <input
                  className="w-full rounded-[18px] border border-slate-950/10 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-[#26415f]/40 focus:ring-4 focus:ring-[#26415f]/10"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={onInputChange}
                  required
                />
              </label>

              <label className="mb-[18px] block">
                <span className="mb-2 block font-bold text-slate-950">Business Type</span>
                <input
                  className="w-full rounded-[18px] border border-slate-950/10 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-[#26415f]/40 focus:ring-4 focus:ring-[#26415f]/10"
                  type="text"
                  name="businessType"
                  value={formData.businessType}
                  onChange={onInputChange}
                  placeholder="Salon, medical, grocery..."
                  required
                />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="mb-[18px] block">
                <span className="mb-2 block font-bold text-slate-950">Phone</span>
                <input
                  className="w-full rounded-[18px] border border-slate-950/10 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-[#26415f]/40 focus:ring-4 focus:ring-[#26415f]/10"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={onInputChange}
                  required
                />
              </label>

              <label className="mb-[18px] block">
                <span className="mb-2 block font-bold text-slate-950">Package</span>
                <select
                  className="w-full rounded-[18px] border border-slate-950/10 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-[#26415f]/40 focus:ring-4 focus:ring-[#26415f]/10"
                  name="packageName"
                  value={formData.packageName}
                  onChange={onInputChange}
                  required
                >
                  <option value="">Select a package</option>
                  {content.packages.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="mb-[18px] block">
              <span className="mb-2 block font-bold text-slate-950">Message</span>
              <textarea
                className="w-full rounded-[18px] border border-slate-950/10 bg-white/90 px-4 py-3.5 text-slate-800 outline-none transition focus:border-[#26415f]/40 focus:ring-4 focus:ring-[#26415f]/10"
                name="message"
                rows="5"
                value={formData.message}
                onChange={onInputChange}
                placeholder="Tell us which category or project style you want."
                required
              />
            </label>

            <button
              type="submit"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-br from-[#172334] to-[#26415f] px-5 py-3 text-white shadow-soft transition duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Enquiry"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactSection;
