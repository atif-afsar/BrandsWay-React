import React, { useRef, lazy, Suspense, useMemo } from "react";
import AboutHero from "../Components/About/AboutHero";
import StorySection from "../Components/About/StorySection";
import CorePrinciples from "../Components/About/CorePrinciples";
import QuoteSection from "../Components/About/QuoteSection";
const AboutExpertiseSection = lazy(() => import("../Components/About/AboutExpertiseSection"));
import AboutCTA from "../Components/About/AboutCta";
import useInView from "../hooks/useInView";
import useSmoothScrollTo from "../hooks/useSmoothScrollTo";
import { SEOHead } from "../seo/SEOHead";
import { organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema } from "../seo/schemaBuilders.js";

const About = () => {
  const storySectionRef = useRef(null);
  const [expertiseTriggerRef, expertiseInView] = useInView();
  const scrollToStory = useSmoothScrollTo();

  const graphLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "About", url: "/about-us" },
        ]),
      ],
    }),
    [],
  );

  return (
    <div>
      <SEOHead
        title="About The BrandsWay | PR & Digital Marketing Agency in Aligarh"
        description="Learn how The BrandsWay delivers PR, SEO, paid media, and web growth for Aligarh brands — our story, principles, expertise, and partnership approach."
        canonicalPath="/about-us"
        keywords="about The BrandsWay, PR agency Aligarh, digital marketing agency Aligarh, SEO company Aligarh"
        jsonLd={[graphLd]}
      />
      <AboutHero onLearnStoryClick={() => scrollToStory(storySectionRef)} />
      <div ref={storySectionRef}>
        <StorySection />
      </div>
      <CorePrinciples />
      <QuoteSection />
      <div ref={expertiseTriggerRef}>
        {expertiseInView && (
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
            <AboutExpertiseSection />
          </Suspense>
        )}
      </div>
      <AboutCTA />
    </div>
  );
};

export default About;
