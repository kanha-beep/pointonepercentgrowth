export type ContactInfo = {
  email: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappText: string;
  officeLabel: string;
  officeName: string;
  officeAddress: string;
  officeHours: string;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  gradient: string;
  stats: string[];
  ctaLabel: string;
  imageUrl?: string;
  developer?: string;
};

export type SiteContent = {
  businessName: string;
  tagline: string;
  topLabel: string;
  seoLine: string;
  contact: ContactInfo;
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  metrics: Array<{ value: string; label: string }>;
  highlights: string[];
  story: {
    title: string;
    description: string;
    principles: string[];
  };
  office: {
    title: string;
    description: string;
    bullets: string[];
  };
  projects: Project[];
  process: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    quote: string;
    name: string;
  }>;
};

export type EnquiryInput = {
  name: string;
  businessType: string;
  phone: string;
  message: string;
};
