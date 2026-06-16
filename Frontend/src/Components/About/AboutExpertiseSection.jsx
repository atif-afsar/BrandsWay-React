import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Globe,
  Megaphone,
  Palette,
  Search,
  Share2,
  Sparkles,
} from "lucide-react";
import { BUSINESS } from "../../seo/business.js";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

const services = [
  {
    icon: Globe,
    title: "Digital Marketing",
    desc: "Full-funnel campaigns that connect brand, creative, and media for measurable growth in Aligarh.",
    path: "/digital-marketing-agency-aligarh",
  },
  {
    icon: Search,
    title: "SEO & Local Search",
    desc: "Technical SEO, content, and Maps visibility so buyers find you when they search in Aligarh.",
    path: "/seo-company-aligarh",
  },
  {
    icon: Sparkles,
    title: "Website Development",
    desc: "Fast, accessible sites and landing pages built to convert traffic from Google and ads.",
    path: "/website-development-company-aligarh",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Story-driven social that builds trust and keeps your brand top of mind across platforms.",
    path: "/social-media-marketing-aligarh",
  },
  {
    icon: BarChart3,
    title: "Google Ads",
    desc: "Disciplined paid search and performance campaigns with reporting leadership can act on.",
    path: "/google-ads-agency-aligarh",
  },
  {
    icon: Palette,
    title: "Branding",
    desc: "Identity systems and messaging that make you recognizable everywhere customers look.",
    path: "/branding-agency-aligarh",
  },
  {
    icon: Megaphone,
    title: "Public Relations",
    desc: "Editorial angles and media outreach that earn attention beyond paid placements.",
    path: "/pr-agency-aligarh",
  },
];

function AboutExpertiseSectionComponent() {
  return (
    <section
      className="bg-[#f8f9fa] py-20 md:py-28 px-6 md:px-16 overflow-hidden"
      aria-labelledby="about-expertise-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between mb-14 md:mb-20 gap-8 text-center md:text-left">
          <div className="max-w-2xl">
            <motion.span
              {...fade}
              transition={{ duration: 0.5 }}
              className="text-[#C61407] font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
            >
              Growth Expertise
            </motion.span>
            <motion.h2
              id="about-expertise-heading"
              {...fade}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tighter leading-tight"
            >
              Built for brands that want to{" "}
              <span className="text-[#c61407]">rank, convert, and scale</span>
            </motion.h2>
          </div>
          <motion.p
            {...fade}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-500 max-w-md text-lg font-normal leading-relaxed mx-auto md:mx-0"
          >
            The BrandsWay is a PR and digital marketing agency in {BUSINESS.address.addressLocality},{" "}
            {BUSINESS.address.addressRegion}. We combine search, paid media, web, and storytelling so
            local businesses show up with clarity—and prove what worked.
          </motion.p>
        </header>

        <motion.article
          {...fade}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-14 md:mb-16"
        >
          <div className="rounded-[2rem] bg-white border border-gray-100 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
              Why our approach works for Aligarh businesses
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Buyers compare you on Google, Instagram, and Maps before they call. We design every channel
              around that reality—structured landing pages,{" "}
              <Link to="/seo-company-aligarh" className="text-[#C61407] font-semibold hover:underline">
                SEO aligned to local intent
              </Link>
              , and ad accounts managed with discipline.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From retail and healthcare to education and professional services, we partner with teams
              who want a serious{" "}
              <Link
                to="/digital-marketing-agency-aligarh"
                className="text-[#C61407] font-semibold hover:underline"
              >
                marketing company in Aligarh
              </Link>{" "}
              —not vanity metrics, but pipeline and revenue signals you can trust.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#080C12] text-white p-8 md:p-10 shadow-xl">
            <h3 className="text-2xl font-bold tracking-tight mb-4">What you get as a partner</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C61407]" aria-hidden />
                <span>
                  Senior oversight on strategy, creative, and execution—one team instead of scattered
                  freelancers.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C61407]" aria-hidden />
                <span>
                  Reporting in plain language: spend, leads, search visibility, and creative performance.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C61407]" aria-hidden />
                <span>
                  Playbooks tuned for {BUSINESS.address.addressLocality} first, with room to scale across{" "}
                  {BUSINESS.address.addressRegion} and India.
                </span>
              </li>
            </ul>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#C61407] px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </motion.article>

        <motion.div
          {...fade}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="group relative flex flex-col rounded-[1.75rem] border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C61407]/5 transition-colors duration-300 group-hover:bg-[#C61407]">
                  <Icon
                    className="h-6 w-6 text-[#C61407] transition-colors duration-300 group-hover:text-white"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2 pr-6">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#C61407]">
                  Learn more
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </motion.div>

        <motion.aside
          {...fade}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-14 md:mt-20 text-center max-w-2xl mx-auto"
        >
          <p className="text-gray-500 leading-relaxed">
            Explore practical playbooks in our{" "}
            <Link to="/insights" className="text-[#C61407] font-semibold hover:underline">
              growth journal
            </Link>{" "}
            —long-form guides on SEO, ads, and social written for busy operators in Aligarh and beyond.
          </p>
        </motion.aside>
      </div>
    </section>
  );
}

export const AboutExpertiseSection = memo(AboutExpertiseSectionComponent);
export default AboutExpertiseSection;
