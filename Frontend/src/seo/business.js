/**
 * Central NAP + brand constants for JSON-LD, meta, and GBP-aligned copy.
 * Single source of truth reduces mismatches between site and Google Business Profile.
 */
export const SITE_ORIGIN = "https://thebrandsway.com";

export const BUSINESS = {
  name: "The BrandsWay",
  alternateName: "BrandsWay",
  legalName: "The BrandsWay",
  description:
    "The BrandsWay is a digital marketing and PR agency in Aligarh, Uttar Pradesh, helping brands grow with SEO, paid media, social media, websites, and branding.",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo/brandsway.png`,
  image: `${SITE_ORIGIN}/hero/bg2.jpg`,
  telephone: "+917302988037",
  whatsappE164: "917302988037",
  address: {
    streetAddress: "IT Plaza, Abdullah Road",
    addressLocality: "Aligarh",
    addressRegion: "Uttar Pradesh",
    postalCode: "202001",
    addressCountry: "IN",
  },
  geo: {
    latitude: 27.8974,
    longitude: 78.088,
  },
  areaServed: [
    { "@type": "City", name: "Aligarh" },
    { "@type": "AdministrativeArea", name: "Uttar Pradesh" },
  ],
  openingHours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "19:00" },
  ],
  sameAs: [
    "https://www.facebook.com/Thebrandsway",
    "https://www.instagram.com/thebrandsway/",
    "https://www.linkedin.com/company/the-brandsway/",
    "https://x.com/BrandsWay00/",
  ],
  /** Public Google rating snapshot — keep aligned with your live GBP. */
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "11",
    reviewCount: "11",
  },
};

/**
 * Representative client reviews for Review + ItemList JSON-LD (align with live GBP where possible).
 */
export const GBP_ALIGNED_REVIEWS = [
  {
    author: "Local retail brand, Aligarh",
    rating: 5,
    text: "Clear reporting, faster website, and campaigns that actually brought walk-ins. The team understands how buyers search in Aligarh.",
  },
  {
    author: "Education services, Uttar Pradesh",
    rating: 5,
    text: "Strong creative and disciplined ad accounts. We finally had one partner who could connect SEO, landing pages, and paid search.",
  },
  {
    author: "Healthcare clinic, Aligarh",
    rating: 5,
    text: "Professional on calls and WhatsApp, timelines were realistic, and our local discovery improved within the first quarter.",
  },
];

export const DEFAULT_OG_IMAGE = BUSINESS.image;
