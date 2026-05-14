import React, { useRef, lazy, Suspense, useMemo } from "react";
import { SEOHead } from "../seo/SEOHead";
import { HOME_META } from "../seo/homeMeta";
import { SITE_ORIGIN, GBP_ALIGNED_REVIEWS } from "../seo/business.js";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  faqPageSchema,
  reviewItemListSchema,
  homeWebPageSchema,
  breadcrumbSchema,
} from "../seo/schemaBuilders.js";
import { homePageFaqData } from "../data/homeFaq";
import Hero from "../Components/Home/Hero";
import ServicesSection from "../Components/Home/Services";
const BestWorkSection = lazy(() => import("../Components/BestWork/BestWorkSection"));
import ResultsSection from "../Components/Home/Results";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import FAQSection from "../Components/Home/FAQs";
import CTASection from "../Components/Home/CTA";
import ProcessSection from "../Components/Home/Process";
import ScrollFillSection from "./ScrollFillSection";
const HomeLocalGrowth = lazy(() => import("../Components/Home/HomeLocalGrowth").then((m) => ({ default: m.HomeLocalGrowth })));
const HomeLocalTrustGBP = lazy(() => import("../Components/Home/HomeLocalTrustGBP").then((m) => ({ default: m.HomeLocalTrustGBP })));
import useInView from "../hooks/useInView";

const Home = () => {
  const bestWorkRef = useRef(null);
  const [bestWorkTriggerRef, bestWorkInView] = useInView();
  const [localSeoRef, localSeoInView] = useInView();
  const [localTrustRef, localTrustInView] = useInView();

  const scrollToBestWork = () => {
    bestWorkRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const homeUrl = SITE_ORIGIN + "/";

  /** @graph bundles entities for crawlers and keeps @id references consistent sitewide. */
  const homeJsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        homeWebPageSchema({
          name: HOME_META.title,
          description: HOME_META.description,
          url: homeUrl,
        }),
        breadcrumbSchema([
          { name: "Home", url: "/" },
        ]),
        faqPageSchema(homePageFaqData),
        reviewItemListSchema(GBP_ALIGNED_REVIEWS),
      ],
    }),
    [homeUrl]
  );

  return (
    <div>
      <SEOHead
        title={HOME_META.title}
        description={HOME_META.description}
        canonicalPath="/"
        keywords={HOME_META.keywords}
        jsonLd={[homeJsonLd]}
      />
      <Hero onSeeImpactClick={scrollToBestWork} />
      <ServicesSection />
      <ScrollFillSection />
      <ProcessSection />
      <div ref={localSeoRef}>
        {localSeoInView && (
          <Suspense fallback={<div className="h-32 bg-[#fafafa]" aria-hidden />}>
            <HomeLocalGrowth />
          </Suspense>
        )}
      </div>
      <div id="bestwork" ref={bestWorkRef}>
        <div ref={bestWorkTriggerRef}>
          {bestWorkInView && (
            <Suspense
              fallback={
                <div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center" aria-busy="true">
                  Loading...
                </div>
              }
            >
              <BestWorkSection />
            </Suspense>
          )}
        </div>
      </div>
      <ResultsSection />
      <WhyChooseUs />
      <div ref={localTrustRef}>
        {localTrustInView && (
          <Suspense fallback={<div className="h-32 bg-white" aria-hidden />}>
            <HomeLocalTrustGBP />
          </Suspense>
        )}
      </div>
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;
