import React, { useRef, useMemo } from "react";
import WorkHero from "../Components/Work/WorkHero";
import ProjectsSection from "../Components/Work/WorkSection";
import WorkCTA from "../Components/Work/WorkCta";
import { SEOHead } from "../seo/SEOHead";
import { organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema } from "../seo/schemaBuilders.js";
import useSmoothScrollTo from "../hooks/useSmoothScrollTo";

const OurWork = () => {
  const workSectionRef = useRef(null);
  const scrollToWorkSection = useSmoothScrollTo();

  const graphLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Our Work", url: "/our-work" },
        ]),
      ],
    }),
    [],
  );

  return (
    <div>
      <SEOHead
        title="Our Work & Case Studies | The BrandsWay Aligarh"
        description="Explore campaigns and creative work from The BrandsWay — digital marketing, PR, SEO, and social projects for brands in Aligarh and beyond."
        canonicalPath="/our-work"
        keywords="BrandsWay portfolio, digital marketing case studies Aligarh, PR campaigns Aligarh"
        jsonLd={[graphLd]}
      />
      <WorkHero onLatestCaseStudiesClick={() => scrollToWorkSection(workSectionRef)} />
      <div ref={workSectionRef}>
        <ProjectsSection />
      </div>
      <WorkCTA />
    </div>
  );
};

export default OurWork;
