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

export type PackagePlan = {
  tier: string;
  name: string;
  price: string;
  meta?: string;
  featured?: boolean;
  description?: string;
  features: string[] | string;
  pages?: string;
  summary?: string;
};

export type Category = {
  slug: string;
  name: string;
  accent: string;
  description: string;
  audience: string;
  websites: readonly string[];
  packages?: ReadonlyArray<{
    tier: string;
    name: string;
    price: string;
    pages: string;
    features: string;
    summary: string;
  }>;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  packageFit: string;
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
  packages: PackagePlan[];
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
  categories: Category[];
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
  packageName: string;
  message: string;
};