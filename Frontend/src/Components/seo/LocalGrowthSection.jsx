import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Homepage local SEO block — natural language + internal links to service landings.
 * Keeps motion light (opacity/y) to avoid impacting interaction performance.
 */
const LocalGrowthSection = () => {
  const links = [
    { to: "/digital-marketing-agency-aligarh", label: "Digital marketing agency in Aligarh" },
    { to: "/seo-company-aligarh", label: "SEO company in Aligarh" },
    { to: "/website-development-company-aligarh", label: "Website development company in Aligarh" },
    { to: "/social-media-marketing-aligarh", label: "Social media marketing in Aligarh" },
    { to: "/google-ads-agency-aligarh", label: "Google Ads agency in Aligarh" },
    { to: "/branding-agency-aligarh", label: "Branding agency in Aligarh" },
    { to: "/pr-agency-aligarh", label: "PR agency in Aligarh" },
  ];

  return (
    <section className="bg-white border-y border-gray-100 py-16 sm:py-24 px-5 sm:px-8" aria-labelledby="local-growth-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }}>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C61407] mb-3">Aligarh · Local growth</p>
          <h2 id="local-growth-heading" className="text-3xl sm:text-4xl font-bold text-[#080C12] tracking-tight mb-6">
            Why The BrandsWay is a top marketing company in Aligarh
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Aligarh businesses grow when strategy, creative, and performance media work as one system. As a{" "}
            <strong className="text-gray-900 font-semibold">best digital marketing agency in Aligarh</strong> for ambitious brands, we build
            funnels that respect your margins — from search visibility to paid acquisition, websites, and reputation.
          </p>
          <h3 className="text-xl font-bold text-[#080C12] mt-10 mb-3">Businesses we help in Aligarh</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Retail, education institutes, healthcare clinics, professional services, creators, and regional brands expanding across Uttar Pradesh.
            If your buyers compare options online before they call, you need clear offers, fast pages, and proof that you deliver.
          </p>
          <h3 className="text-xl font-bold text-[#080C12] mt-10 mb-3">Aligarh-focused marketing solutions</h3>
          <p className="text-gray-600 leading-relaxed mb-8">
            We combine local relevance with scalable playbooks: structured service pages, ethical review generation support, creative that fits your
            tone, and reporting your finance team can understand. Explore our service hubs below — each is written for real purchase intent, not
            keyword stuffing.
          </p>
          <nav aria-label="Service pages for Aligarh">
            <ul className="flex flex-wrap gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-800 hover:border-[#C61407] hover:text-[#C61407] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </section>
  );
};

export default LocalGrowthSection;
