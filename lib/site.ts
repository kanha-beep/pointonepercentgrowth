import { SiteContent } from "./typesfile";
import portfolioImages from "@/data/portfolio-images.json";
const connectedProjects = portfolioImages.map((image, index) => ({
  id: image.id,
  number: String(index + 1).padStart(2, "0"),
  title: image.title,
  category: image.developer === "Lavanya" ? "Graphic" : "UI/UX",
  developer: image.developer,
  summary: `Portfolio work created by ${image.developer}.`,
  gradient: image.developer === "Lavanya" ? "gradient-graphic" : "gradient-uiux",
  stats: [],
  ctaLabel: "View project",
  imageUrl: image.imageUrl,
}));
export const siteContent: SiteContent = {
  businessName: ".1%Growth",
  tagline: "",
  topLabel: "Graphic Design & UI/UX Portfolio",
  seoLine:
    "Graphic design and UI/UX for your next project.",
  contact: {
    email: "pointonepercentgrowth@gmail.com",
    phoneDisplay: "+91 7999046735",
    phoneHref: "tel:+7999046735",
    whatsappNumber: "7999046735",
    whatsappText:
      "Hi, I saw your Sale Portfolio website and I want a professional business website.",
    officeLabel: "Studio office",
    officeName: "PointOnePercentGrowth",
    officeAddress: "Lalghati",
    officeHours: "Mon to Sat, 10:00 AM to 7:30 PM",
  },
  hero: {
    eyebrow: "Graphic Design & UI/UX",
    title: "Good design. Clear communication.",
    description: "Explore our graphic design and UI/UX work, and tell us what you would like to create.",
    primaryCta: "View our work",
    secondaryCta: "Contact us",
  },
  metrics: [
    { value: String(portfolioImages.length), label: "portfolio images" },
    { value: "02", label: "design disciplines" },
  ],
  highlights: ["Graphic design", "UI/UX design", "Direct contact with our team"],
  story: {
    title: "Who we are",
    description:
      "We are a creative team working on graphic design and UI/UX. Browse our portfolio to see our work, then contact us to discuss your idea.",
    principles: [
      "Professional visual system that builds trust fast",
      "Practical layouts that help customers call or message immediately",
      "A simple process with clear communication",
    ],
  },
  office: {
    title: "Our office and working style",
    description:
      "We blend agency-level visual polish with local business practicality. Every project is designed to feel premium on mobile, clean on desktop, and easy for real customers to act on.",
    bullets: [
      "Clear process from your first brief to final delivery",
      "Graphic design and UI/UX for brands and digital products",
      "Direct support through WhatsApp and voice call",
    ],
  },

  projects: connectedProjects,
  process: [
    { step: "01", title: "Explore our work", description: "Browse our Graphic and UI/UX projects." },
    { step: "02", title: "Share your idea", description: "Tell us what you need and your timeline." },
    { step: "03", title: "Design together", description: "Review the work and share your feedback." },
    { step: "04", title: "Receive your designs", description: "Get the finished files for your project." },
  ],
  testimonials: [],
};
export type { ContactInfo, SiteContent, EnquiryInput } from "./typesfile";
