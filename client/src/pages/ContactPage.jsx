import ContactSection from "../components/ContactSection";
import PageHero from "../components/PageHero";

function ContactPage({
  content,
  formData,
  submitting,
  onInputChange,
  onFormSubmit
}) {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us turn your local business into a premium online brand"
        description="Reach out for a new website, a category-based portfolio, or a customized version of any showcased project."
      />
      <ContactSection
        content={content}
        formData={formData}
        submitting={submitting}
        onInputChange={onInputChange}
        onFormSubmit={onFormSubmit}
      />
    </>
  );
}

export default ContactPage;
