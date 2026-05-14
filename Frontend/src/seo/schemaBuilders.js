import { BUSINESS, SITE_ORIGIN } from "./business.js";

/** @type {(graphs: object[]) => string} */
export function jsonLdStringify(graphs) {
  return JSON.stringify(graphs.length === 1 ? graphs[0] : { "@context": "https://schema.org", "@graph": graphs });
}

export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_ORIGIN}/#organization`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    logo: { "@type": "ImageObject", url: BUSINESS.logo },
    image: BUSINESS.image,
    telephone: BUSINESS.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    sameAs: BUSINESS.sameAs,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: BUSINESS.name,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: "en-IN",
  };
}

export function localBusinessSchema() {
  return {
    "@type": ["LocalBusiness", "MarketingAgency"],
    "@id": `${SITE_ORIGIN}/#localbusiness`,
    name: BUSINESS.name,
    alternateName: BUSINESS.alternateName,
    url: BUSINESS.url,
    image: BUSINESS.image,
    telephone: BUSINESS.telephone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.streetAddress,
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: BUSINESS.areaServed,
    openingHoursSpecification: BUSINESS.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: BUSINESS.sameAs,
    aggregateRating: BUSINESS.aggregateRating,
    parentOrganization: { "@id": `${SITE_ORIGIN}/#organization` },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Growth services — Aligarh",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital marketing",
            url: `${SITE_ORIGIN}/digital-marketing-agency-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & local SEO",
            url: `${SITE_ORIGIN}/seo-company-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Website development",
            url: `${SITE_ORIGIN}/website-development-company-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social media marketing",
            url: `${SITE_ORIGIN}/social-media-marketing-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Google Ads",
            url: `${SITE_ORIGIN}/google-ads-agency-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Branding",
            url: `${SITE_ORIGIN}/branding-agency-aligarh`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Public relations (PR)",
            url: `${SITE_ORIGIN}/pr-agency-aligarh`,
          },
        },
      ],
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_ORIGIN}${item.url}`,
    })),
  };
}

export function faqPageSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchemaForPage({ name, description, url }) {
  return {
    "@type": "Service",
    name,
    description,
    provider: { "@id": `${SITE_ORIGIN}/#localbusiness` },
    areaServed: BUSINESS.areaServed,
    url,
  };
}

export function articleSchema({ headline, description, url, image, datePublished, dateModified }) {
  return {
    "@type": "Article",
    headline,
    description,
    image: image?.startsWith("http") ? image : `${SITE_ORIGIN}${image}`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: BUSINESS.name, url: SITE_ORIGIN },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    datePublished: datePublished || "2026-01-01",
    dateModified: dateModified || datePublished || "2026-01-01",
    inLanguage: "en-IN",
  };
}

/** ItemList of Review entities — pairs with AggregateRating on LocalBusiness for rich results eligibility. */
export function reviewItemListSchema(reviews) {
  return {
    "@type": "ItemList",
    itemListElement: reviews.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
        reviewBody: r.text,
        itemReviewed: { "@id": `${SITE_ORIGIN}/#localbusiness` },
      },
    })),
  };
}

export function homeWebPageSchema({ name, description, url }) {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    about: { "@id": `${SITE_ORIGIN}/#localbusiness` },
    inLanguage: "en-IN",
  };
}
