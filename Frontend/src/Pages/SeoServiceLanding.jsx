import React, { useMemo, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Phone, MapPin, ArrowRight } from "lucide-react";
import { SEOHead } from "../seo/SEOHead";
import { LANDING_PAGES } from "../data/landingPages.data";
import { BUSINESS, SITE_ORIGIN, GBP_ALIGNED_REVIEWS, telHref, addressLine } from "../seo/business.js";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchemaForPage,
  reviewItemListSchema,
} from "../seo/schemaBuilders.js";

/**
 * SEO service landing template — shared layout, unique copy from `landingPages.data`.
 * JSON-LD uses @graph so WebPage + Service + FAQ connect to Organization/LocalBusiness @ids.
 */
const SeoServiceLanding = () => {
  const { pathname } = useLocation();
  const page = LANDING_PAGES[pathname];
  const [openFaq, setOpenFaq] = useState(null);

  const canonical = `${SITE_ORIGIN}${pathname}`;

  const graphLd = useMemo(() => {
    if (!page) return null;
    return {
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema(),
        websiteSchema(),
        localBusinessSchema(),
        {
          "@type": "WebPage",
          "@id": `${canonical}#webpage`,
          url: canonical,
          name: page.metaTitle,
          description: page.metaDescription,
          isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
          about: { "@id": `${SITE_ORIGIN}/#localbusiness` },
        },
        breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: page.metaTitle.split("|")[0]?.trim() || "Services", url: page.path },
        ]),
        serviceSchemaForPage({
          name: page.h1,
          description: page.metaDescription,
          url: canonical,
        }),
        faqPageSchema(page.faqs),
        reviewItemListSchema(GBP_ALIGNED_REVIEWS),
      ],
    };
  }, [page, canonical]);

  if (!page) return <Navigate to="/" replace />;

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-['Poppins',_sans-serif]">
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonicalPath={page.path}
        keywords={page.keywords}
        ogType="website"
        jsonLd={graphLd ? [graphLd] : []}
      />

      <main className="pt-28 pb-20">
        <nav className="max-w-5xl mx-auto px-6 mb-10" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
            <li>
              <Link to="/" className="hover:text-[#C61407] transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-800 font-medium line-clamp-1">{page.h1}</li>
          </ol>
        </nav>

        <header className="max-w-5xl mx-auto px-6 mb-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C61407] mb-4">The BrandsWay · Aligarh</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#080C12] tracking-tight leading-[1.08] mb-6">{page.h1}</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed">{page.subheading}</p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 bg-[#C61407] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-red-800 transition-colors shadow-lg shadow-red-200/50"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <a
                href={`https://wa.me/${BUSINESS.whatsappE164}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-[#080C12] text-[#080C12] px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#080C12] hover:text-white transition-colors"
              >
                WhatsApp us
              </a>
            </div>
          </motion.div>
        </header>

        <section className="max-w-5xl mx-auto px-6 mb-16" aria-labelledby="benefits-heading">
          <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-bold text-[#080C12] mb-8">
            Why teams work with us
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {page.benefits.map((b, i) => (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-[#080C12] mb-3">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.body}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-16 space-y-12" aria-labelledby="service-detail-heading">
          <h2 id="service-detail-heading" className="sr-only">
            Service details
          </h2>
          {page.bodySections.map((section) => (
            <article key={section.title} className="prose prose-lg max-w-none">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#080C12] mb-4 not-prose">{section.title}</h3>
              {section.paragraphs.map((p, idx) => (
                <p key={idx} className="text-gray-600 leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-16" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-2xl font-bold text-[#080C12] mb-8">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {page.faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left gap-4"
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-trigger-${index}`}
                >
                  <span className="font-semibold text-[#080C12]">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#C61407] shrink-0 transition-transform ${openFaq === index ? "rotate-180" : ""}`} aria-hidden />
                </button>
                {openFaq === index && (
                  <div id={`faq-panel-${index}`} role="region" aria-labelledby={`faq-trigger-${index}`} className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 mb-12" aria-labelledby="related-heading">
          <h2 id="related-heading" className="text-xl font-bold text-[#080C12] mb-4">
            Explore related services
          </h2>
          <ul className="flex flex-wrap gap-3">
            {page.relatedPaths.map((p) => {
              const label = LANDING_PAGES[p]?.metaTitle?.split("|")[0]?.trim() || p.replace(/\//g, " ");
              return (
                <li key={p}>
                  <Link to={p} className="inline-block px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-800 hover:border-[#C61407] hover:text-[#C61407] transition-colors">
                    {p === "/contact-us" ? "Contact The BrandsWay" : label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link to="/insights" className="inline-block px-4 py-2 rounded-full bg-[#080C12] text-white text-sm hover:bg-black transition-colors">
                Read insights
              </Link>
            </li>
          </ul>
        </section>

        <section className="max-w-5xl mx-auto px-6">
          <div className="rounded-[2rem] bg-[#080C12] text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Ready for a growth plan?</h2>
              <p className="text-gray-400 max-w-xl">
                Tell us your goals — we will propose a practical roadmap for Aligarh and beyond, with clear milestones.
              </p>
              <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C61407]" aria-hidden />
                  {addressLine()}
                </span>
                <a href={telHref()} className="inline-flex items-center gap-2 hover:text-white">
                  <Phone className="w-4 h-4 text-[#C61407]" aria-hidden />
                  {BUSINESS.telephoneDisplay}
                </a>
              </div>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex justify-center items-center px-8 py-4 bg-[#C61407] rounded-full font-bold uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SeoServiceLanding;
