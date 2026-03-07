import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Strategic Media Relations",
    description: "Not just press releases—storytelling that secures placements in top-tier outlets like Forbes, Bloomberg, and TechCrunch.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Performance Marketing",
    description: "Precision-targeted ad campaigns built on behavioral data to maximize ROAS and dominate high-intent search channels.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Crisis Management",
    description: "Protecting brand equity with rapid-response strategies that turn potential PR disasters into opportunities for trust-building.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Authority Positioning",
    description: "Transforming founders into industry thought leaders through executive branding, podcasts, and keynote placements.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Conversion Creative",
    description: "Psychology-backed design and copy that bypasses logical resistance to drive emotional buying decisions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Growth Scaling",
    description: "Infrastructure optimization to ensure your brand handles rapid-fire scale without losing service quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
  }
];

const FeatureCard = ({ feature, idx }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        }
      }}
      whileHover={{ y: -10 }}
      className="group relative flex flex-col bg-white/40 backdrop-blur-xl border border-white/50 p-10 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Dynamic Animated Glow Backdrop */}
      <div className="absolute -inset-24 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C61407]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Modern Icon Treatment */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-[#C61407] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
        <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-black text-white group-hover:bg-[#C61407] group-hover:scale-110 transition-all duration-500 shadow-lg">
          {feature.icon}
        </div>
      </div>
      
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed font-light">
          {feature.description}
        </p>
      </div>

      {/* Decorative Index Number */}
      <div className="absolute bottom-6 right-8 text-6xl font-black text-black/[0.03] select-none group-hover:text-[#C61407]/5 transition-colors">
        0{idx + 1}
      </div>

      {/* Bottom Progress Accent */}
      <motion.div 
        className="absolute bottom-0 left-0 h-1.5 bg-gradient-to-r from-transparent via-[#C61407] to-transparent w-full"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
};

const WhyChooseSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-40 px-6 bg-slate-50 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl text-left">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[#C61407] uppercase tracking-[0.4em] text-[12px]  font-black block mb-4"
            >
              The Agency Advantage
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl lg:text-7xl font-medium font-black text-black leading-[1.1] tracking-tighter"
            >
              Engineered for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-700 to-[#C61407]">Cultural Impact.</span>
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-500 max-w-md text-lg font-light leading-relaxed border-l-2 border-[#C61407]/20 pl-6"
          >
            We don't just buy attention; we earn it. Our ecosystem combines tactical PR with performance data to make your brand impossible to ignore.
          </motion.p>
        </div>

        {/* --- 6 CARD GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;