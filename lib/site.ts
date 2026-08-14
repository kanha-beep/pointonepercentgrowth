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

const connectedCategories = [
  {
    slug: "grocery",
    name: "Grocery",
    accent: "accent-grocery",
    description:
      "Real package data connected for grocery businesses with starter, growth, and premium website directions.",
    audience: "Kirana stores, fresh market stores, delivery-first grocery brands",
    websites: ["Fresh Start Grocery", "Market Lane Grocery", "Prime Harvest Grocery"],
    packages: [
      {
        tier: "Low",
        name: "Fresh Start Grocery",
        price: "Rs 25,000 - Rs 35,000",
        pages: "5",
        features: "2",
        summary:
          "Starter grocery website for neighborhood stores that need trust, quick contact, and simple product highlights."
      },
      {
        tier: "Medium",
        name: "Market Lane Grocery",
        price: "Rs 45,000 - Rs 70,000",
        pages: "10",
        features: "5",
        summary:
          "Growth package with offers, category storytelling, testimonials, and stronger local SEO sections."
      },
      {
        tier: "High",
        name: "Prime Harvest Grocery",
        price: "Rs 85,000 - Rs 1,40,000",
        pages: "15",
        features: "7",
        summary:
          "Premium grocery direction for supermarket brands, corporate inquiries, and multi-branch presentation."
      }
    ]
  },
  {
    slug: "milk",
    name: "Milk",
    accent: "accent-milk",
    description:
      "Package data for dairy businesses with lean, growth, and premium website directions.",
    audience: "Milk shops, dairy brands, subscription delivery businesses",
    websites: ["Shree Fresh Milk", "Morning Basket Dairy", "Urban A2 Creamery"],
    packages: [
      {
        tier: "Low",
        name: "Shree Fresh Milk",
        price: "Rs 14,999",
        pages: "5",
        features: "2",
        summary:
          "Lean dairy website focused on WhatsApp reorder flow and subscription enquiry capture for local families."
      },
      {
        tier: "Medium",
        name: "Morning Basket Dairy",
        price: "Rs 29,999",
        pages: "10",
        features: "5",
        summary:
          "Balanced dairy package with subscription plans, delivery slot enquiries, testimonials, and FAQ-led conversion."
      },
      {
        tier: "High",
        name: "Urban A2 Creamery",
        price: "Rs 54,999",
        pages: "15",
        features: "7",
        summary:
          "Premium dairy experience with traceability, bundles, loyalty, B2B supply, and stronger brand storytelling."
      }
    ]
  },
  {
    slug: "stationery",
    name: "Stationery",
    accent: "accent-stationery",
    description:
      "Package variants for stationery businesses covering starter, growth, and established supplier layouts.",
    audience: "School supply stores, office stationery shops, wholesale suppliers",
    websites: ["Stationery Low Package", "Stationery Medium Package", "Stationery High Package"],
    packages: [
      {
        tier: "Low",
        name: "Stationery Low Package",
        price: "Rs 18,000",
        pages: "5",
        features: "2",
        summary:
          "Starter business website for local stationery shops with contact form and WhatsApp CTA."
      },
      {
        tier: "Medium",
        name: "Stationery Medium Package",
        price: "Rs 42,000",
        pages: "10",
        features: "5",
        summary:
          "Growing stationery brand layout with category showcase, bulk order enquiry, testimonials, and FAQ."
      },
      {
        tier: "High",
        name: "Stationery High Package",
        price: "Rs 78,000",
        pages: "15",
        features: "7",
        summary:
          "Advanced stationery supplier website for institutional, school, and corporate conversion flows."
      }
    ]
  }
] as const;

const connectedProjects = connectedCategories.flatMap((category, categoryIndex) =>
  category.packages.map((pkg, packageIndex) => ({
    id: `${category.slug}-${pkg.tier.toLowerCase()}`,
    number: String(categoryIndex * 3 + packageIndex + 1).padStart(2, "0"),
    title: pkg.name,
    category: `${category.name} (${pkg.tier})`,
    summary: pkg.summary,
    packageFit: pkg.tier,
    gradient:
      category.slug === "grocery"
        ? "gradient-grocery"
        : category.slug === "milk"
          ? "gradient-milk"
          : "gradient-stationery",
    stats: [`${pkg.pages} pages`, `${pkg.features} features`, pkg.price],
    ctaLabel: `Use ${pkg.name}`
  }))
);

export const siteContent: SiteContent = {
  businessName: "pointonepercentgrowth",
  tagline: "Conversion-focused websites for local Indian businesses",
  topLabel: "Responsive portfolio. Motion-rich sections. Category-led selling.",
  seoLine: "Designing digital storefronts that make local businesses look premium online.",
  contact: {
    email: "hello@saleportfolio.in",
    phoneDisplay: "+91 91313 95725",
    phoneHref: "tel:+919131395725",
    whatsappNumber: "919131395725",
    whatsappText:
      "Hi, I saw your Sale Portfolio website and I want a professional business website.",
    officeLabel: "Studio office",
    officeName: "pointonepercentgrowth",
    officeAddress: "Om Shiv Nagar, Lalghati",
    officeHours: "Mon to Sat, 10:00 AM to 7:30 PM"
  },
  hero: {
    eyebrow: "Portfolio websites for local growth brands",
    title:
      "We build polished websites that make salons, grocery stores, milk brands, stationery shops, clinics, cosmetics brands, and local shops look ready for serious business.",
    description:
      "This main portfolio website helps clients browse our work by category, compare low, medium, and high service plans, and contact us directly on WhatsApp or phone for customization.",
    primaryCta: "Explore Projects",
    secondaryCta: "See Packages"
  },
  metrics: [
    { value: "07", label: "business categories" },
    { value: "09", label: "connected package directions" },
    { value: "03", label: "service packages" },
    { value: "100%", label: "mobile responsive layouts" }
  ],
  highlights: [
    "Dedicated pages for About, Projects, Categories, and Contact",
    "Motion-based reveals, floating shapes, and premium section layering",
    "Direct WhatsApp and mobile call actions on every project card"
  ],
  packages: [
    {
      tier: "Low",
      name: "Launch Package",
      price: "Rs 14,999",
      meta: "Up to 5 pages",
      featured: false,
      description: "For local shops that want a clean online presence quickly.",
      features: [
        "Home, About, Services, Contact, Portfolio",
        "Direct WhatsApp button",
        "Simple enquiry form",
        "Responsive mobile-first design",
        "Basic speed optimization"
      ]
    },
    {
      tier: "Medium",
      name: "Growth Package",
      price: "Rs 34,999",
      meta: "Up to 10 pages",
      featured: true,
      description: "For businesses that want category showcases and stronger conversion.",
      features: [
        "Everything in Launch Package",
        "Gallery or product showcase sections",
        "Google Maps and trust blocks",
        "Lead-focused landing sections",
        "Category filtering and custom CTAs",
        "On-page SEO structure"
      ]
    },
    {
      tier: "High",
      name: "Scale Package",
      price: "Rs 64,999",
      meta: "Up to 15 pages",
      featured: false,
      description: "For premium local brands moving toward full e-commerce positioning.",
      features: [
        "Everything in Growth Package",
        "Advanced multi-section storytelling",
        "Custom forms and lead routing",
        "Conversion analytics setup",
        "Speed and structure optimization",
        "Large project or multi-category architecture"
      ]
    }
  ],
  story: {
    title: "Who we are",
    description:
      "We are a small business web studio building premium-feel portfolio and business websites for local markets. Our approach is simple: show clients category-specific work first, then customize the design to match their brand, offers, and target customers.",
    principles: [
      "Professional visual system that builds trust fast",
      "Practical layouts that help customers call or message immediately",
      "Category-first presentations so local clients know exactly what they are buying"
    ]
  },
  office: {
    title: "Our office and working style",
    description:
      "We blend agency-level visual polish with local business practicality. Every project is designed to feel premium on mobile, clean on desktop, and easy for real customers to act on.",
    bullets: [
      "Clear process from category selection to launch",
      "Custom branding for salon, grocery, stationery, medical, cosmetics, e-commerce, and milk businesses",
      "Direct support through WhatsApp and voice call"
    ]
  },
  categories: [
    {
      slug: "salon",
      name: "Salon",
      accent: "accent-salon",
      description:
        "Luxury service presentation, pricing blocks, appointment messaging, stylist sections, and beauty-led visuals.",
      audience: "Salons, spas, grooming, makeover studios",
      websites: ["Fusion Unisex Salon", "Lucky Family Salon", "Urban Glow Studio"]
    },
    {
      slug: "grocery",
      name: "Grocery",
      accent: "accent-grocery",
      description:
        "Connected package directions for grocery businesses with starter, growth, and premium website variants.",
      audience: "Kirana stores, quick commerce brands, fresh market stores",
      websites: connectedCategories.find((item) => item.slug === "grocery")!.websites,
      packages: connectedCategories.find((item) => item.slug === "grocery")!.packages
    },
    {
      slug: "milk",
      name: "Milk",
      accent: "accent-milk",
      description:
        "Subscription-friendly, trust-led website directions for local dairies and premium milk brands.",
      audience: "Local dairies, milk subscriptions, premium dairy brands",
      websites: connectedCategories.find((item) => item.slug === "milk")!.websites,
      packages: connectedCategories.find((item) => item.slug === "milk")!.packages
    },
    {
      slug: "medical",
      name: "Medical",
      accent: "accent-medical",
      description:
        "Trust-focused pages for medicines, diagnostic information, working hours, and nearby contact.",
      audience: "Pharmacies, clinics, wellness stores",
      websites: ["CarePlus Medical", "City Medico Hub", "Health Direct Pharmacy"]
    },
    {
      slug: "stationery",
      name: "Stationery",
      accent: "accent-stationery",
      description:
        "Connected package layouts for shop, school, office, and wholesale stationery selling.",
      audience: "Local stationery shops, office suppliers",
      websites: connectedCategories.find((item) => item.slug === "stationery")!.websites,
      packages: connectedCategories.find((item) => item.slug === "stationery")!.packages
    },
    {
      slug: "cosmetics",
      name: "Cosmetics",
      accent: "accent-cosmetics",
      description:
        "Product-led storytelling with clean grids, premium visuals, and beauty brand positioning.",
      audience: "Makeup brands, beauty stores, skincare boutiques",
      websites: ["Velvet Glow Cosmetics", "Blush & Bloom", "Radiant Beauty House"]
    },
    {
      slug: "ecommerce",
      name: "E-Commerce",
      accent: "accent-commerce",
      description:
        "Sales-first product experiences for local businesses moving online with stronger digital credibility.",
      audience: "Any local business ready to sell online",
      websites: ["Local Cart Pro", "Neighborhood Storefront", "ScaleUp Commerce"]
    }
  ],
  projects: connectedProjects,
  process: [
    {
      step: "01",
      title: "Choose category",
      description: "Salon, grocery, milk, medical, stationery, cosmetics, or e-commerce."
    },
    {
      step: "02",
      title: "Shortlist a project",
      description: "Pick the project direction that matches your business personality."
    },
    {
      step: "03",
      title: "Select low, medium, or high",
      description: "We map your pages, features, and conversion flow to the right package."
    },
    {
      step: "04",
      title: "Customize and launch",
      description: "Your branding, content, direct contact links, and local positioning go live."
    }
  ],
  testimonials: [
    {
      quote:
        "The website immediately looked more expensive than what local competitors had. Clients trusted us faster.",
      name: "Salon Business Owner"
    },
    {
      quote:
        "The category-based portfolio made it easy to pick a direction. We knew what we were buying before we called.",
      name: "Grocery Store Founder"
    },
    {
      quote:
        "Mobile responsiveness and clear WhatsApp buttons made the biggest difference for our local leads.",
      name: "Medical Store Manager"
    }
  ]
};
