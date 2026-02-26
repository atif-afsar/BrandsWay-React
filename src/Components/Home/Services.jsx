import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  Code, PenTool, Layout, Share2, Search, Mail, Smartphone, CreditCard
} from 'lucide-react';

const services = [
  { title: "Web Development", desc: "High-performance, scalable websites built with modern frameworks.", icon: Code, tag: "01" },
  { title: "Content Creation", desc: "Compelling storytelling that captures attention and drives engagement.", icon: PenTool, tag: "02" },
  { title: "Graphic Designing", desc: "Visual identities that define your brand and stand out in the noise.", icon: Layout, tag: "03" },
  { title: "Social Media", desc: "Strategic management to grow your community across all platforms.", icon: Share2, tag: "04" },
  { title: "SEO Services", desc: "Data-driven optimization to dominate search engine rankings.", icon: Search, tag: "05" },
  { title: "Email Marketing", desc: "Personalized campaigns that convert leads into loyal customers.", icon: Mail, tag: "06" },
  { title: "App Development", desc: "Intuitive mobile experiences designed for iOS and Android.", icon: Smartphone, tag: "07" },
  { title: "Payment Solutions", desc: "Seamless gateway integrations for secure global transactions.", icon: CreditCard, tag: "08" },
];

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{ y: -8 }}
      className="relative shrink-0 rounded-3xl flex flex-col justify-between group cursor-pointer overflow-hidden
                 w-full sm:w-[300px] md:w-[340px]
                 h-auto min-h-[280px] sm:h-[420px] md:h-[460px]"
      style={{
        background: 'white',
        border: '1px solid rgba(0,0,0,0.07)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* Hover fill background */}
      <motion.div
        className="absolute inset-0 bg-[#C61407] z-0"
        initial={{ scaleY: 0, originY: 1 }}
        whileHover={{ scaleY: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'bottom' }}
      />

      {/* Card number watermark */}
      <div
        className="absolute top-4 right-5 sm:top-6 sm:right-7 text-[56px] sm:text-[72px] font-black leading-none select-none z-10 transition-colors duration-300 group-hover:text-white/10"
        style={{ color: 'rgba(0,0,0,0.04)', fontFamily: '"Bebas Neue", sans-serif' }}
      >
        {service.tag}
      </div>

      <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between gap-6 sm:gap-0">
        <div>
          {/* Icon */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-400 group-hover:bg-white/15"
            style={{ background: 'rgba(198,20,7,0.08)' }}
          >
            <Icon
              size={20}
              className="transition-colors duration-300 group-hover:text-white"
              style={{ color: '#C61407' }}
            />
          </div>

          {/* Title */}
          <h3
            className="mt-5 sm:mt-8 text-[18px] sm:text-[22px] font-bold tracking-tight leading-tight transition-colors duration-300 group-hover:text-white"
            style={{ color: '#111', fontFamily: '"Sora", sans-serif' }}
          >
            {service.title}
          </h3>

          {/* Divider */}
          <div
            className="mt-3 sm:mt-4 h-px w-10 transition-all duration-300 group-hover:w-16 group-hover:bg-white/40"
            style={{ background: '#C61407' }}
          />

          {/* Description */}
          <p
            className="mt-3 sm:mt-5 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/75"
            style={{ color: '#6b7280' }}
          >
            {service.desc}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 sm:mt-8">
          <span
            className="text-xs font-bold tracking-widest uppercase transition-colors duration-300 group-hover:text-white"
            style={{ color: '#C61407' }}
          >
            Explore
          </span>
          <motion.span
            className="inline-block transition-colors duration-300 group-hover:text-white"
            style={{ color: '#C61407' }}
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
};

/* Progress bar at top — desktop only */
const ProgressBar = ({ progress }) => (
  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gray-100 z-50 hidden md:block">
    <motion.div
      className="h-full bg-[#C61407] origin-left"
      style={{ scaleX: progress, transformOrigin: 'left' }}
    />
  </div>
);

/* ─── Desktop: horizontal scroll section ─── */
const DesktopSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const CARD_WIDTH = 340 + 32;
  const TOTAL_CARDS = services.length;
  const VISIBLE_CARDS = 3.3;
  const SCROLL_DISTANCE = CARD_WIDTH * (TOTAL_CARDS - VISIBLE_CARDS);

  const xPx = useTransform(scrollYProgress, [0.05, 0.95], [0, -SCROLL_DISTANCE]);
  const springX = useSpring(xPx, { stiffness: 80, damping: 22 });

  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25]);

  return (
    <section
      ref={targetRef}
      className="relative bg-[#fafafa] hidden md:block"
      style={{ height: `${TOTAL_CARDS * 60 + 200}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <ProgressBar progress={scrollYProgress} />

        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(198,20,7,0.04) 0%, transparent 70%)' }}
        />

        <div className="flex flex-col gap-10 w-full">
          {/* Header */}
          <motion.div
            style={{ y: headingY, opacity: headingOpacity }}
            className="px-8 lg:px-16 max-w-7xl mx-auto w-full flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mt-6">
              <div className="w-5 h-[2px] bg-[#C61407]" />
              <span
                className="text-[#C61407] font-bold tracking-[0.25em] uppercase text-[10px]"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                Our Expertise
              </span>
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-semibold text-black tracking-tight mb-2"
            >
              Marketing<span className="text-[#C61407]"> Services</span>
            </motion.h2>

            <motion.p
              className="mt-4 text-xs font-bold text-gray-400 tracking-widest uppercase"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {Array.from({ length: TOTAL_CARDS }, (_, i) => (
                <motion.span
                  key={i}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [0.05 + (i / TOTAL_CARDS) * 0.85, 0.05 + ((i + 1) / TOTAL_CARDS) * 0.85],
                      [1, 0.25]
                    ),
                    display: 'inline-block',
                    marginRight: '3px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                  {i < TOTAL_CARDS - 1 && <span style={{ color: '#e5e7eb' }}> — </span>}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Horizontal Cards Strip */}
          <div className="relative flex items-center w-full overflow-hidden">
            <motion.div
              style={{ x: springX }}
              className="flex gap-8 pl-8 lg:pl-16 pr-16"
            >
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Scroll hint */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.12], [1, 0]) }}
            className="px-8 lg:px-16 flex items-center gap-2 text-gray-400"
          >
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
              <path d="M0 5h18M14 1l4 4-4 4" stroke="#C61407" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] tracking-widest uppercase font-semibold" style={{ fontFamily: '"Sora", sans-serif' }}>
              Scroll to explore
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── Mobile: vertical stacked grid ─── */
const MobileSection = () => (
  <section className="bg-[#fafafa] md:hidden py-16 px-5">
    {/* Decorative accent */}
    <div
      className="absolute left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full pointer-events-none"
      style={{ background: 'radial-gradient(circle, rgba(198,20,7,0.05) 0%, transparent 70%)' }}
    />

    {/* Header */}
    <div className="flex flex-col items-center text-center mb-10">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-4 h-[2px] bg-[#C61407]" />
        <span
          className="text-[#C61407] font-bold tracking-[0.25em] uppercase text-[10px]"
          style={{ fontFamily: '"Sora", sans-serif' }}
        >
          Our Expertise
        </span>
        <div className="w-4 h-[2px] bg-[#C61407]" />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[34px] sm:text-5xl font-semibold text-black tracking-tight leading-tight"
        style={{ fontFamily: '"Sora", sans-serif' }}
      >
        Marketing<span className="text-[#C61407]"> Services</span>
      </motion.h2>
      <p className="mt-3 text-sm text-gray-400 max-w-xs" style={{ fontFamily: '"Sora", sans-serif' }}>
        Everything you need to grow your brand online.
      </p>
    </div>

    {/* Cards grid — 1 col on xs, 2 col on sm */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  </section>
);

/* ─── Main export ─── */
const ServicesSection = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700;800;900&family=Bebas+Neue&display=swap');
      * { box-sizing: border-box; }
    `}</style>
    <MobileSection />
    <DesktopSection />
  </>
);

export default ServicesSection;