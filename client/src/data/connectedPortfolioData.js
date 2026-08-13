export const connectedCategories = [
  {
    slug: "grocery",
    name: "Grocery",
    accent: "accent-grocery",
    description:
      "Real package data connected from the `grocery` React/Vite folder with low, medium, and high website directions.",
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
      "Package data converted from the `Milk` folder into plain React-friendly objects so the app stays React-only and avoids Next.js routing.",
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
      "React package variants connected from the `Stationary` folder, covering starter, growth, and established supplier layouts.",
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
];

export const connectedProjects = connectedCategories.flatMap((category, categoryIndex) =>
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
