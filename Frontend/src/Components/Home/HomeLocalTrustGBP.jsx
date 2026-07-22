import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, MessageCircle, Star } from "lucide-react";
import { BUSINESS, GBP_ALIGNED_REVIEWS, telHref, waHref, addressLines, mapsEmbedSrc } from "../../seo/business.js";

/**
 * Google Business Profile–supporting block: NAP, hours, map, reviews, WhatsApp + tel CTAs.
 * Visible address + click-to-call patterns improve local trust and user signals.
 */
function HomeLocalTrustGBPComponent() {
  const wa = waHref();
  const mapSrc = mapsEmbedSrc();

  return (
    <section className="bg-white py-20 md:py-28 px-5 sm:px-8 border-t border-gray-100" aria-labelledby="local-trust-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <h2 id="local-trust-heading" className="text-3xl sm:text-4xl font-bold text-[#080C12] tracking-tight mb-4">
              Visit, call, or WhatsApp — we serve Aligarh & nearby cities
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Consistent NAP (name, address, phone) across your website and Google Business Profile helps local rankings. Use the buttons below for fast contact—the same details we publish in structured data for crawlers.
            </p>

            <address className="not-italic rounded-2xl border border-gray-200 p-6 mb-6 bg-[#fafafa]">
              <p className="font-bold text-[#080C12] text-lg mb-2">{BUSINESS.name}</p>
              <p className="text-gray-700 flex gap-2 items-start">
                <MapPin className="w-5 h-5 text-[#C61407] shrink-0 mt-0.5" aria-hidden />
                <span>
                  {addressLines().map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </span>
              </p>
              <p className="text-gray-600 flex gap-2 items-center mt-4">
                <Phone className="w-5 h-5 text-[#C61407]" aria-hidden />
                <a href={telHref()} className="hover:text-[#C61407] transition-colors font-medium">
                  {BUSINESS.telephoneDisplay}
                </a>
              </p>
              <p className="text-gray-600 flex gap-2 items-center mt-4">
                <Clock className="w-5 h-5 text-[#C61407]" aria-hidden />
                <span>Mon–Sat · 10:00–19:00 (IST)</span>
              </p>
            </address>

            <div className="flex flex-wrap gap-3">
              <a
                href={telHref()}
                className="inline-flex items-center gap-2 rounded-full bg-[#080C12] text-white px-6 py-3 text-sm font-bold hover:bg-black transition-colors"
                aria-label={`Call The BrandsWay at ${BUSINESS.telephoneDisplay}`}
              >
                <Phone className="w-4 h-4" aria-hidden />
                Call now
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#080C12] text-[#080C12] px-6 py-3 text-sm font-bold hover:bg-[#080C12] hover:text-white transition-colors"
                aria-label="Chat on WhatsApp with The BrandsWay"
              >
                <MessageCircle className="w-4 h-4" aria-hidden />
                WhatsApp
              </a>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 rounded-full bg-[#C61407] text-white px-6 py-3 text-sm font-bold hover:bg-red-800 transition-colors"
              >
                Contact page
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg aspect-video bg-gray-100">
              <iframe
                title="The BrandsWay office location on Google Maps — Aligarh"
                src={mapSrc}
                className="w-full h-full min-h-[220px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#080C12] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[#C61407] fill-[#C61407]" aria-hidden />
                Customer reviews & local trust signals
              </h3>
              <ul className="space-y-4">
                {GBP_ALIGNED_REVIEWS.map((r) => (
                  <motion.li
                    key={r.author}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl border border-gray-100 p-4 bg-[#fafafa]"
                  >
                    <div className="flex gap-1 mb-2" aria-label={`${r.rating} out of 5 stars`}>
                      {Array.from({ length: r.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-[#C61407] fill-[#C61407]" aria-hidden />
                      ))}
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">{r.text}</p>
                    <p className="text-xs text-gray-500 mt-2 font-medium">{r.author}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const HomeLocalTrustGBP = memo(HomeLocalTrustGBPComponent);
