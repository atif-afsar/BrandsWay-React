import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Star } from "lucide-react";
import { BUSINESS } from "../../seo/business.js";

/** Visible testimonials — copy aligns with optional Review JSON-LD on the homepage graph. */
const TESTIMONIALS = [
  {
    quote: "Clear reporting and a team that understands local buyers — our inquiries became more qualified within weeks.",
    role: "Service business owner · Aligarh",
  },
  {
    quote: "They rebuilt our website for speed and structured our ads so we finally saw which keywords paid for themselves.",
    role: "Retail founder · Aligarh",
  },
  {
    quote: "PR + social felt coordinated for the first time. The messaging finally matched what we promise on calls.",
    role: "Education brand · Uttar Pradesh",
  },
];

/**
 * GBP support block: NAP, hours, map embed, call/WhatsApp CTAs, and review snippets.
 */
const LocalTrustStrip = () => {
  const mapSrc =
    "https://maps.google.com/maps?q=" +
    encodeURIComponent(`${BUSINESS.address.streetAddress}, ${BUSINESS.address.addressLocality}`) +
    "&output=embed";

  return (
    <section className="bg-[#050505] text-white py-16 sm:py-24 px-5 sm:px-8" aria-labelledby="local-trust-heading">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C61407] mb-3">Visit · Call · WhatsApp</p>
          <h2 id="local-trust-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Local trust signals for Google Business Profile alignment
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8">
            Consistent name, address, and phone across your site and listings helps Google connect your brand entity to Maps results. Use the
            actions below for fast contact — ideal for mobile users discovering you organically.
          </p>

          <address className="not-italic space-y-4 text-gray-300 text-sm mb-8">
            <p className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C61407] shrink-0 mt-0.5" aria-hidden />
              <span>
                <strong className="text-white">{BUSINESS.name}</strong>
                <br />
                {BUSINESS.address.streetAddress}, {BUSINESS.address.addressLocality}, {BUSINESS.address.addressRegion}{" "}
                {BUSINESS.address.postalCode}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#C61407]" aria-hidden />
              <a href={`tel:${BUSINESS.telephone}`} className="hover:text-white transition-colors">
                {BUSINESS.telephone.replace("+91", "+91 ")}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#C61407]" aria-hidden />
              <span>Mon–Sat · 10:00–19:00 (by appointment)</span>
            </p>
          </address>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${BUSINESS.telephone}`}
              className="inline-flex items-center justify-center rounded-full bg-[#C61407] px-6 py-3 text-sm font-semibold hover:bg-red-700 transition-colors"
            >
              Click to call
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsappE164}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              WhatsApp
            </a>
            <Link to="/contact-us" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors">
              Contact form
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl">
            <iframe title="Map showing The BrandsWay office in Aligarh" src={mapSrc} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#C61407]" aria-hidden />
              Customer voices
            </h3>
            <ul className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <p className="text-gray-200 text-sm leading-relaxed mb-2">“{t.quote}”</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalTrustStrip;
