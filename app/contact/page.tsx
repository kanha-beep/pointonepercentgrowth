import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { siteContent } from "@/lib/site";

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact us" title="Let us turn your local business into a premium online brand" description="Reach out for a new website, a category-based portfolio, or a customized version of any showcased project." />
      <ContactSection content={siteContent} />
    </>
  );
}
