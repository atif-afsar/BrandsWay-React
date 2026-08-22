import React, { useState, useMemo } from "react";
import { SEOHead } from "../seo/SEOHead";
import { PORTFOLIO_SEO } from "../seo/staticRoutesMeta";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  breadcrumbSchema,
} from "../seo/schemaBuilders";
import PortfolioHero from "../Components/portfolio/PortfolioHero";
import PortfolioFilters from "../Components/portfolio/PortfolioFilters";
import PortfolioGrid from "../Components/portfolio/PortfolioGrid";
import PortfolioCTA from "../Components/portfolio/PortfolioCTA";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]),
      ],
    }),
    []
  );

  return (
    <div className="bg-[#fdf8f8] min-h-screen font-['Geist',_sans-serif]">
      <SEOHead
        title={PORTFOLIO_SEO.title}
        description={PORTFOLIO_SEO.description}
        canonicalPath="/portfolio"
        keywords={PORTFOLIO_SEO.keywords}
        jsonLd={[jsonLd]}
      />

      <PortfolioHero />

      <PortfolioFilters
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <PortfolioGrid activeCategory={activeCategory} />

      <PortfolioCTA />
    </div>
  );
}
