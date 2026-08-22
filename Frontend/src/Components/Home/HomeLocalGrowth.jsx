import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/**
 * Location + intent-rich homepage section redesigned in The BrandsWay premium editorial aesthetic.
 * Preserves all programmatic SEO links and structured hierarchy.
 */
function HomeLocalGrowthComponent() {
  const fade = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 }
  };

  return (
    <section
      className="w-full bg-[#fdf8f8] py-28 px-6 sm:px-12 lg:px-20 font-['Geist',_sans-serif] text-black border-t border-black/10"
      aria-labelledby="local-growth-heading"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/10 pb-16">
          <div className="max-w-3xl">
            <motion.div {...fade} className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C61407]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C61407]">
                ALIGARH · UTTAR PRADESH
              </span>
            </motion.div>
            
            <motion.h2
              id="local-growth-heading"
              {...fade}
              className="font-['Syne',_sans-serif] text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-black leading-[1.05]"
            >
              Why ambitious brands choose <br />
              <span className="font-bold text-[#C61407]">The BrandsWay.</span>
            </motion.h2>
          </div>

          <motion.p {...fade} className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed">
            Whether you are building a local retail flagship, scaling an education institution, or expanding services across UP — buyers compare you on Google, Instagram, and Maps before they call.
          </motion.p>
        </div>

        {/* Asymmetric 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Card 1: Businesses We Help */}
          <motion.article
            {...fade}
            className="md:col-span-6 bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 sm:p-12 flex flex-col justify-between hover:border-black/30 transition-colors group"
          >
            <div>
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-4">
                01 / TARGETED GROWTH
              </span>
              <h3 className="font-['Syne',_sans-serif] text-2xl sm:text-3xl font-bold uppercase text-black mb-6 group-hover:text-[#C61407] transition-colors">
                Businesses we help in Aligarh
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                We work with founders and marketing teams who demand a serious partner for performance: retail, healthcare, education, events, manufacturing, and professional services. If your customers search online first, we build the funnel around that reality.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                From{" "}
                <Link to="/seo-company-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  SEO tailored to Aligarh search intent
                </Link>{" "}
                to targeted{" "}
                <Link to="/google-ads-agency-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  Google Ads campaigns
                </Link>{" "}
                and high-converting{" "}
                <Link to="/social-media-marketing-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  social media marketing
                </Link>
                , we synchronize digital channels so budgets reinforce each other.
              </p>
            </div>
            
            <div className="mt-10 pt-6 border-t border-black/5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-black group-hover:text-[#C61407] transition-colors">
              <span>LOCAL PERFORMANCE FUNNELS</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </div>
          </motion.article>

          {/* Card 2: Aligarh-Focused Solutions */}
          <motion.article
            {...fade}
            className="md:col-span-6 bg-black text-white rounded-2xl p-8 sm:p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <span className="text-xs font-mono text-[#C61407] uppercase tracking-widest block mb-4 font-semibold">
                02 / PRECISION STRATEGY
              </span>
              <h3 className="font-['Syne',_sans-serif] text-2xl sm:text-3xl font-bold uppercase text-white mb-6 group-hover:text-[#C61407] transition-colors">
                Aligarh-focused marketing solutions
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Local growth is not “small budget marketing.” It is precision: the right message, the right radius, the right proof, and reporting leadership can trust. We design campaigns for Aligarh buyers first — then scale as you expand across Uttar Pradesh.
              </p>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sm text-[#C61407] mt-0.5">check_circle</span>
                  <span>Service-area strategy, call tracking hygiene, and landing pages aligned strictly to intent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-sm text-[#C61407] mt-0.5">check_circle</span>
                  <span>
                    Explore our comprehensive{" "}
                    <Link to="/digital-marketing-agency-aligarh" className="text-white font-semibold underline underline-offset-4 hover:text-[#C61407] transition-colors">
                      digital marketing agency in Aligarh
                    </Link>{" "}
                    playbook.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#C61407] transition-colors relative z-10">
              <span>SCALABLE REGIONAL CAMPAIGNS</span>
              <span className="material-symbols-outlined text-sm">north_east</span>
            </div>
          </motion.article>

        </div>

        {/* 3-Column Pillar System */}
        <motion.div {...fade} className="bg-white/60 backdrop-blur-sm border border-black/10 rounded-2xl p-8 sm:p-14">
          <div className="mb-10">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-2">
              03 / THE BRANDSWAY DIFFERENCE
            </span>
            <h3 className="font-['Syne',_sans-serif] text-3xl sm:text-4xl font-bold uppercase text-black">
              Why The BrandsWay is a strong choice in Aligarh
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-600 leading-relaxed text-sm sm:text-base">
            
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#C61407] uppercase tracking-wider">PILLAR 01</span>
              <h4 className="font-['Syne',_sans-serif] text-xl font-bold uppercase text-black">Results-Driven Marketing</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                We prioritize pipeline and revenue signals — not vanity metrics. That discipline is what teams expect from a premier{" "}
                <Link to="/digital-marketing-agency-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  marketing company in Aligarh
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#C61407] uppercase tracking-wider">PILLAR 02</span>
              <h4 className="font-['Syne',_sans-serif] text-xl font-bold uppercase text-black">Industries We Serve</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Retail, education, healthcare, hospitality, events, creators, and B2B suppliers. If you need a{" "}
                <Link to="/website-development-company-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  website development company in Aligarh
                </Link>
                , we ship fast, accessible builds.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#C61407] uppercase tracking-wider">PILLAR 03</span>
              <h4 className="font-['Syne',_sans-serif] text-xl font-bold uppercase text-black">Trust & Execution</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                From brand strategy and{" "}
                <Link to="/branding-agency-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  branding
                </Link>{" "}
                to corporate{" "}
                <Link to="/pr-agency-aligarh" className="font-semibold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
                  PR campaigns
                </Link>
                , we keep messaging consistent so customers recognize your brand everywhere.
              </p>
            </div>

          </div>
        </motion.div>

        {/* Section Footer Call to Action */}
        <motion.div {...fade} className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-black/10">
          <p className="text-gray-600 text-sm sm:text-base max-w-xl">
            Want practical local growth playbooks? Explore our{" "}
            <Link to="/insights" className="font-bold text-black underline underline-offset-4 hover:text-[#C61407] transition-colors">
              growth journal
            </Link>{" "}
            for in-depth guides on SEO, ads, and social media.
          </p>

          <Link
            to="/contact-us"
            className="group inline-flex items-center gap-2 border-b-2 border-black pb-1.5 transition-colors hover:border-[#C61407] flex-shrink-0"
          >
            <span className="text-sm font-bold uppercase tracking-wider text-black group-hover:text-[#C61407] transition-colors">
              Book a Strategy Call
            </span>
            <span className="material-symbols-outlined text-base text-black group-hover:text-[#C61407] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              arrow_outward
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export const HomeLocalGrowth = memo(HomeLocalGrowthComponent);
