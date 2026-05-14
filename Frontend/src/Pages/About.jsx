import React, { useRef, lazy, Suspense, useMemo } from "react";
import AboutHero from "../Components/About/AboutHero";
import StorySection from "../Components/About/StorySection";
import CorePrinciples from "../Components/About/CorePrinciples";
import QuoteSection from "../Components/About/QuoteSection";
const TeamSection = lazy(() => import("../Components/About/TeamSection"));
import AboutCTA from "../Components/About/AboutCta";
import useInView from "../hooks/useInView";
import { SEOHead } from "../seo/SEOHead";
import { organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema } from "../seo/schemaBuilders.js";

const About = () => {
  const storySectionRef = useRef(null);
  const [teamTriggerRef, teamInView] = useInView();

  const scrollToStory = () => {
    storySectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
        description="Meet The BrandsWay — the team behind Aligarh’s growth-focused PR, SEO, ads, and web work. Our story, principles, and how we partner with ambitious brands."
        canonicalPath="/about-us"
        keywords="about The BrandsWay, PR agency Aligarh, digital marketing team Aligarh"
        jsonLd={[graphLd]}
      />
      <AboutHero onLearnStoryClick={scrollToStory} />
      <div ref={storySectionRef}>
        <StorySection />
      </div>
      <CorePrinciples />
      <QuoteSection />
      <div ref={teamTriggerRef}>
        {teamInView && (
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
            <TeamSection />
          </Suspense>
        )}
      </div>
      <AboutCTA />
    </div>
  );
};

export default About;
