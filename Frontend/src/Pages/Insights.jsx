import React, { lazy, Suspense, useMemo } from "react";
import { Link } from "react-router-dom";
import InsightsSection from "../Components/Insights/InsightsHero";
const BlogPage = lazy(() => import("../Components/Insights/Blogs"));
import useInView from "../hooks/useInView";
import { SEOHead } from "../seo/SEOHead";
import { LANDING_PAGE_ORDER, LANDING_PAGES } from "../data/landingPages.data";
import { organizationSchema, websiteSchema, localBusinessSchema, breadcrumbSchema } from "../seo/schemaBuilders.js";

const Insights = () => {
  const [blogsTriggerRef, blogsInView] = useInView();

  const graphLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
        ]),
      ],
    }),
    [],
  );

  return (
    <div>
      <SEOHead
        title="Marketing Insights & Journal | The BrandsWay Aligarh"
        description="Read The BrandsWay journal — SEO, PR, paid media, branding, and growth strategy articles for businesses in Aligarh and India."
        canonicalPath="/insights"
        keywords="digital marketing blog Aligarh, PR insights, SEO tips, social media strategy"
        jsonLd={[graphLd]}
      />
      <InsightsSection />

      <section className="bg-white border-y border-gray-100 py-10 px-6" aria-labelledby="insights-services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="insights-services-heading" className="text-xs font-black uppercase tracking-[0.3em] text-[#C61407] mb-4">
            Services in Aligarh
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mb-6">
            Explore intent-built service pages — each is written for buyers researching agencies in Aligarh (internal links strengthen topical
            authority sitewide).
          </p>
          <nav className="flex flex-wrap gap-2" aria-label="Aligarh service pages">
            {LANDING_PAGE_ORDER.map((path) => {
              const label = (LANDING_PAGES[path]?.metaTitle || "").split("|")[0]?.trim() || path;
              return (
                <Link
                  key={path}
                  to={path}
                  className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-800 hover:border-[#C61407] hover:text-[#C61407] transition-colors"
                >
                  {label}
                </Link>
              );
            })}
            <Link
              to="/contact-us"
              className="inline-flex items-center rounded-full bg-[#080C12] px-4 py-2 text-xs font-semibold text-white hover:bg-black transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </section>

      <div ref={blogsTriggerRef}>
        {blogsInView && (
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
            <BlogPage />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default Insights;
