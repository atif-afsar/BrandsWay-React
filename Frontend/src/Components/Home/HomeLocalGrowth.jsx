import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Building2, Sparkles } from "lucide-react";

/**
 * Location + intent-rich homepage blocks — supports Aligarh local queries without keyword stuffing.
 * Semantic H2/H3 hierarchy for crawlers; internal links to programmatic landing URLs.
 */
function HomeLocalGrowthComponent() {
  const fade = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.2 } };

  return (
    <section className="bg-[#fafafa] py-20 md:py-28 px-5 sm:px-8" aria-labelledby="local-growth-heading">
      <div className="max-w-6xl mx-auto space-y-20">
        <header className="text-center max-w-3xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#C61407] mb-4">Aligarh · Uttar Pradesh</p>
          <h2 id="local-growth-heading" className="text-3xl sm:text-5xl font-bold text-[#080C12] tracking-tight leading-tight mb-6">
            Why businesses across Aligarh choose The BrandsWay
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Whether you are building a local retail name, scaling an education brand, or growing a services company, buyers compare you on Google, Instagram, and Maps before they call. We help you show up with clarity—and prove what worked.
          </p>
        </header>

        <motion.article {...fade} transition={{ duration: 0.45 }} className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl bg-white border border-gray-100 p-8 shadow-sm">
            <Building2 className="w-10 h-10 text-[#C61407] mb-4" aria-hidden />
            <h3 className="text-2xl font-bold text-[#080C12] mb-4">Businesses we help in Aligarh</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              We work with founders and marketing teams who want a serious partner for performance: retail, healthcare, education, events, manufacturing partners, and professional services. If your customers search online first, we build the funnel around that reality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From{" "}
              <Link to="/seo-company-aligarh" className="text-[#C61407] font-semibold hover:underline">
                SEO that matches how people search in Aligarh
              </Link>{" "}
              to{" "}
              <Link to="/google-ads-agency-aligarh" className="text-[#C61407] font-semibold hover:underline">
                Google Ads
              </Link>{" "}
              and{" "}
              <Link to="/social-media-marketing-aligarh" className="text-[#C61407] font-semibold hover:underline">
                social media marketing
              </Link>
              , we connect channels so budgets reinforce each other.
            </p>
          </div>
          <div className="rounded-3xl bg-[#080C12] text-white p-8 shadow-xl">
            <Sparkles className="w-10 h-10 text-[#C61407] mb-4" aria-hidden />
            <h3 className="text-2xl font-bold mb-4">Aligarh-focused marketing solutions</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Local growth is not “small budget marketing.” It is precision: the right message, the right radius, the right proof, and reporting your leadership can trust. We design campaigns for Aligarh buyers first—then scale when you expand across Uttar Pradesh.
            </p>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-[#C61407] shrink-0 mt-0.5" aria-hidden />
                <span>Service-area strategy, call tracking hygiene, and landing pages aligned to intent.</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="w-4 h-4 text-[#C61407] shrink-0 mt-0.5" aria-hidden />
                <span>
                  Explore our{" "}
                  <Link to="/digital-marketing-agency-aligarh" className="text-white font-semibold hover:text-[#C61407]">
                    digital marketing agency in Aligarh
                  </Link>{" "}
                  playbook.
                </span>
              </li>
            </ul>
          </div>
        </motion.article>

        <motion.article {...fade} transition={{ duration: 0.45, delay: 0.05 }} className="rounded-[2rem] border border-gray-200 bg-white p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-[#080C12] mb-6">Why The BrandsWay is a strong choice for local businesses in Aligarh</h3>
          <div className="grid sm:grid-cols-3 gap-8 text-gray-600 leading-relaxed text-sm sm:text-base">
            <div>
              <p className="font-bold text-[#080C12] mb-2">Results-driven marketing</p>
              <p>
                We prioritize pipeline and revenue signals—not vanity metrics. That discipline is what teams expect from a top{" "}
                <Link to="/digital-marketing-agency-aligarh" className="text-[#C61407] font-semibold hover:underline">
                  marketing company in Aligarh
                </Link>
                .
              </p>
            </div>
            <div>
              <p className="font-bold text-[#080C12] mb-2">Industries we serve</p>
              <p>
                Retail, education, healthcare, hospitality, events, creators, and B2B suppliers. If you need a{" "}
                <Link to="/website-development-company-aligarh" className="text-[#C61407] font-semibold hover:underline">
                  website development company in Aligarh
                </Link>
                , we ship fast, accessible builds.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#080C12] mb-2">Trust and execution</p>
              <p>
                From{" "}
                <Link to="/branding-agency-aligarh" className="text-[#C61407] font-semibold hover:underline">
                  branding
                </Link>{" "}
                to{" "}
                <Link to="/pr-agency-aligarh" className="text-[#C61407] font-semibold hover:underline">
                  PR
                </Link>
                , we keep messaging consistent so customers recognize you everywhere.
              </p>
            </div>
          </div>
        </motion.article>

        <motion.aside {...fade} transition={{ duration: 0.45, delay: 0.1 }} className="text-center">
          <p className="text-gray-500 max-w-2xl mx-auto mb-6">
            Want practical local playbooks? Read our{" "}
            <Link to="/insights" className="text-[#C61407] font-semibold hover:underline">
              growth journal
            </Link>{" "}
            for long-tail guides on SEO, ads, and social—written for busy operators.
          </p>
          <Link
            to="/contact-us"
            className="inline-flex items-center justify-center rounded-full bg-[#C61407] text-white px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
          >
            Book a strategy call
          </Link>
        </motion.aside>
      </div>
    </section>
  );
}

export const HomeLocalGrowth = memo(HomeLocalGrowthComponent);
