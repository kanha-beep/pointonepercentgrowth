import { SiteContent } from "./typesfile";
import portfolioImages from "@/data/portfolio-images.json";
const connectedCategories = [
  {
    slug: "graphic",
    name: "graphic",
    accent: "accent-graphic",
    description:
      "Real package data connected for graphic businesses with starter, growth, and premium website directions.",
    audience:
      "Kirana stores, fresh market stores, delivery-first graphic brands",
    websites: [
      "Fresh Start graphic",
      "Market Lane graphic",
      "Prime Harvest graphic",
    ],
    packages: [
      {
        tier: "Low",
        name: "Fresh Start graphic",
        price: "Rs 25,000 - Rs 35,000",
        pages: "5",
        features: "2",
        summary:
          "Starter graphic website for neighborhood stores that need trust, quick contact, and simple product highlights.",
      },
      // {
      //   tier: "Medium",
      //   name: "Market Lane graphic",
      //   price: "Rs 45,000 - Rs 70,000",
      //   pages: "10",
      //   features: "5",
      //   summary:
      //     "Growth package with offers, category storytelling, testimonials, and stronger local SEO sections.",
      // },
      // {
      //   tier: "High",
      //   name: "Prime Harvest graphic",
      //   price: "Rs 85,000 - Rs 1,40,000",
      //   pages: "15",
      //   features: "7",
      //   summary:
      //     "Premium graphic direction for supermarket brands, corporate inquiries, and multi-branch presentation.",
      // },
    ],
  },
  {
    slug: "uiux",
    name: "uiux",
    accent: "accent-uiux",
    description:
      "Package data for dairy businesses with lean, growth, and premium website directions.",
    audience: "uiux shops, dairy brands, subscription delivery businesses",
    websites: ["Shree Fresh uiux", "Morning Basket Dairy", "Urban A2 Creamery"],
    packages: [
      {
        tier: "Low",
        name: "Shree Fresh uiux",
        price: "Rs 14,999",
        pages: "5",
        features: "2",
        summary:
          "Lean dairy website focused on WhatsApp reorder flow and subscription enquiry capture for local families.",
      },
      // {
      //   tier: "Medium",
      //   name: "Morning Basket Dairy",
      //   price: "Rs 29,999",
      //   pages: "10",
      //   features: "5",
      //   summary:
      //     "Balanced dairy package with subscription plans, delivery slot enquiries, testimonials, and FAQ-led conversion.",
      // },
      // {
      //   tier: "High",
      //   name: "Urban A2 Creamery",
      //   price: "Rs 54,999",
      //   pages: "15",
      //   features: "7",
      //   summary:
      //     "Premium dairy experience with traceability, bundles, loyalty, B2B supply, and stronger brand storytelling.",
      // },
    ],
  },
  {
    slug: "full_stack",
    name: "full_stack",
    accent: "accent-full stack",
    description:
      "Package variants for full stack businesses covering starter, growth, and established supplier layouts.",
    audience:
      "School supply stores, office full stack shops, wholesale suppliers",
    websites: [
      "full stack Low Package",
      "full stack Medium Package",
      "full stack High Package",
    ],
    packages: [
      {
        tier: "Low",
        name: "full stack Low Package",
        price: "Rs 18,000",
        pages: "5",
        features: "2",
        summary:
          "Starter business website for local full stack shops with contact form and WhatsApp CTA.",
      },
      // {
      //   tier: "Medium",
      //   name: "full stack Medium Package",
      //   price: "Rs 42,000",
      //   pages: "10",
      //   features: "5",
      //   summary:
      //     "Growing full stack brand layout with category showcase, bulk order enquiry, testimonials, and FAQ.",
      // },
      // {
      //   tier: "High",
      //   name: "full stack High Package",
      //   price: "Rs 78,000",
      //   pages: "15",
      //   features: "7",
      //   summary:
      //     "Advanced full stack supplier website for institutional, school, and corporate conversion flows.",
      // },
    ],
  },
  {
    slug: "ai_ml",
    name: "ai_ml",
    accent: "accent-ai_ml",
    description:
      "Package variants for full stack businesses covering starter, growth, and established supplier layouts.",
    audience:
      "School supply stores, office full stack shops, wholesale suppliers",
    websites: [
      "full stack Low Package",
      "full stack Medium Package",
      "full stack High Package",
    ],
    packages: [
      {
        tier: "Low",
        name: "ai_ml Low Package",
        price: "Rs 18,000",
        pages: "5",
        features: "2",
        summary:
          "Starter business website for local full stack shops with contact form and WhatsApp CTA.",
      },
      // {
      //   tier: "Medium",
      //   name: "ai_ml Medium Package",
      //   price: "Rs 42,000",
      //   pages: "10",
      //   features: "5",
      //   summary:
      //     "Growing full stack brand layout with category showcase, bulk order enquiry, testimonials, and FAQ.",
      // },
      // {
      //   tier: "High",
      //   name: "ai_ml High Package",
      //   price: "Rs 78,000",
      //   pages: "15",
      //   features: "7",
      //   summary:
      //     "Advanced full stack supplier website for institutional, school, and corporate conversion flows.",
      // },
    ],
  },
] as const;

const connectedProjects = portfolioImages.map((image, index) => ({
  id: image.id,
  number: String(index + 1).padStart(2, "0"),
  title: image.title,
  category: image.developer === "Lavanya" ? "Graphic" : "UI/UX",
  developer: image.developer,
  summary: `Portfolio work created by ${image.developer}.`,
  packageFit: "Portfolio",
  gradient: image.developer === "graphic" ? "gradient-graphic" : "gradient-uiux",
  stats: [],
  ctaLabel: "View project",
  imageUrl: image.imageUrl,
}));
export const siteContent: SiteContent = {
  businessName: ".1%Growth",
  tagline: "",
  topLabel: "Responsive portfolio. Motion-rich sections. Category-led selling.",
  seoLine:
    "Designing digital storefronts that make local businesses look premium online.",
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
    eyebrow: "",
    title:
      "We build polished websites that make graphics, graphic stores, uiux brands, full stack shops, clinics, cosmetics brands, and local shops look ready for serious business.",
    description:
      "This main portfolio website helps clients browse our work by category, compare low, medium, and high service plans, and contact us directly on WhatsApp or phone for customization.",
    primaryCta: "Explore Projects",
    secondaryCta: "See Packages",
  },
  metrics: [
    { value: "07", label: "business categories" },
    { value: "09", label: "connected package directions" },
    { value: "03", label: "service packages" },
    { value: "100%", label: "mobile responsive layouts" },
  ],
  highlights: [
    "Dedicated pages for About, Projects, Categories, and Contact",
    "Motion-based reveals, floating shapes, and premium section layering",
    "Direct WhatsApp and mobile call actions on every project card",
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
        "Basic speed optimization",
      ],
    },
    {
      tier: "Medium",
      name: "Growth Package",
      price: "Rs 34,999",
      meta: "Up to 10 pages",
      featured: true,
      description:
        "For businesses that want category showcases and stronger conversion.",
      features: [
        "Everything in Launch Package",
        "Gallery or product showcase sections",
        "Google Maps and trust blocks",
        "Lead-focused landing sections",
        "Category filtering and custom CTAs",
        "On-page SEO structure",
      ],
    },
    {
      tier: "High",
      name: "Scale Package",
      price: "Rs 64,999",
      meta: "Up to 15 pages",
      featured: false,
      description:
        "For premium local brands moving toward full e-commerce positioning.",
      features: [
        "Everything in Growth Package",
        "Advanced multi-section storytelling",
        "Custom forms and lead routing",
        "Conversion analytics setup",
        "Speed and structure optimization",
        "Large project or multi-category architecture",
      ],
    },
  ],
  story: {
    title: "Who we are",
    description:
      "We are a small business web studio building premium-feel portfolio and business websites for local markets. Our approach is simple: show clients category-specific work first, then customize the design to match their brand, offers, and target customers.",
    principles: [
      "Professional visual system that builds trust fast",
      "Practical layouts that help customers call or message immediately",
      "Category-first presentations so local clients know exactly what they are buying",
    ],
  },
  office: {
    title: "Our office and working style",
    description:
      "We blend agency-level visual polish with local business practicality. Every project is designed to feel premium on mobile, clean on desktop, and easy for real customers to act on.",
    bullets: [
      "Clear process from category selection to launch",
      "Custom branding for graphic, graphic, full stack, medical, cosmetics, e-commerce, and uiux businesses",
      "Direct support through WhatsApp and voice call",
    ],
  },
  categories: [
    {
      slug: "graphic",
      name: "Graphic",
      accent: "accent-graphic",
      description:
        "Luxury service presentation, pricing blocks, appointment messaging, stylist sections, and beauty-led visuals.",
      audience: "graphics, spas, grooming, makeover studios",
      websites: [
        "Fusion Unisex graphic",
        "Lucky Family graphic",
        "Urban Glow Studio",
      ],
    },
    {
      slug: "asdcfvb",
      name: "qwsdfvfdsdcv",
      accent: "accent-graphic",
      description:
        "Connected package directions for graphic businesses with starter, growth, and premium website variants.",
      audience: "Kirana stores, quick commerce brands, fresh market stores",
      websites: connectedCategories.find((item) => item.slug === "graphic")!
        .websites,
      packages: connectedCategories.find((item) => item.slug === "graphic")!
        .packages,
    },
    {
      slug: "uiux",
      name: "uiux",
      accent: "accent-uiux",
      description:
        "Subscription-friendly, trust-led website directions for local dairies and premium uiux brands.",
      audience: "Local dairies, uiux subscriptions, premium dairy brands",
      websites: connectedCategories.find((item) => item.slug === "uiux")!
        .websites,
      packages: connectedCategories.find((item) => item.slug === "uiux")!
        .packages,
    },
    {
      slug: "medical",
      name: "Medical",
      accent: "accent-medical",
      description:
        "Trust-focused pages for medicines, diagnostic information, working hours, and nearby contact.",
      audience: "Pharmacies, clinics, wellness stores",
      websites: [
        "CarePlus Medical",
        "City Medico Hub",
        "Health Direct Pharmacy",
      ],
    },
    {
      slug: "full stack",
      name: "full stack",
      accent: "accent-full stack",
      description:
        "Connected package layouts for shop, school, office, and wholesale full stack selling.",
      audience: "Local full stack shops, office suppliers",
      websites: connectedCategories.find((item) => item.slug === "full_stack")!
        .websites,
      packages: connectedCategories.find((item) => item.slug === "full_stack")!
        .packages,
    },
    {
      slug: "cosmetics",
      name: "Cosmetics",
      accent: "accent-cosmetics",
      description:
        "Product-led storytelling with clean grids, premium visuals, and beauty brand positioning.",
      audience: "Makeup brands, beauty stores, skincare boutiques",
      websites: [
        "Velvet Glow Cosmetics",
        "Blush & Bloom",
        "Radiant Beauty House",
      ],
    },
    {
      slug: "ecommerce",
      name: "E-Commerce",
      accent: "accent-commerce",
      description:
        "Sales-first product experiences for local businesses moving online with stronger digital credibility.",
      audience: "Any local business ready to sell online",
      websites: [
        "Local Cart Pro",
        "Neighborhood Storefront",
        "ScaleUp Commerce",
      ],
    },
  ],
  projects: connectedProjects,
  process: [
    {
      step: "01",
      title: "Choose category",
      description:
        "graphic, graphic, uiux, medical, full stack, cosmetics, or e-commerce.",
    },
    {
      step: "02",
      title: "Shortlist a project",
      description:
        "Pick the project direction that matches your business personality.",
    },
    {
      step: "03",
      title: "Select low, medium, or high",
      description:
        "We map your pages, features, and conversion flow to the right package.",
    },
    {
      step: "04",
      title: "Customize and launch",
      description:
        "Your branding, content, direct contact links, and local positioning go live.",
    },
  ],
  testimonials: [
    {
      quote:
        "The website immediately looked more expensive than what local competitors had. Clients trusted us faster.",
      name: "graphic Business Owner",
    },
    {
      quote:
        "The category-based portfolio made it easy to pick a direction. We knew what we were buying before we called.",
      name: "graphic Store Founder",
    },
    {
      quote:
        "Mobile responsiveness and clear WhatsApp buttons made the biggest difference for our local leads.",
      name: "Medical Store Manager",
    },
  ],
};
