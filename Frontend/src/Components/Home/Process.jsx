import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const steps = [
  { id: "01", title: "Research", description: "Deep-dive analysis into market trends and competitor vulnerabilities." },
  { id: "02", title: "Strategy", description: "Crafting a bespoke growth roadmap tailored to your specific revenue goals." },
  { id: "03", title: "Execution", description: "Precision launch of optimized campaigns across high-intent channels." },
  { id: "04", title: "Scaling", description: "Aggressive expansion of winning variables to maximize market share." }
];

const ProcessCard = ({ step }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={onMouseMove}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
      }}
      // Disabling the y-lift on very small screens to prevent layout shifting
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 sm:p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-[#C61407]/20"
    >
      {/* Spotlight Overlay - Hidden on touch devices to save performance */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 hidden md:block"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(198, 20, 7, 0.07), transparent 40%)`
          ),
        }}
      />

      {/* Large Background Index - Adjusted size for mobile */}
      <span className="absolute -right-2 -top-2 sm:-right-4 sm:-top-4 select-none text-7xl sm:text-8xl md:text-9xl font-black text-gray-50 transition-all duration-700 group-hover:-translate-x-4 group-hover:text-[#C61407]/5">
        {step.id}
      </span>

      <div className="relative z-10">
        {/* Number Badge */}
        <div className="relative mb-6 sm:mb-8 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#C61407]/10 opacity-0 group-hover:opacity-100" />
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-[#C61407]/20 bg-white shadow-sm transition-colors group-hover:bg-[#C61407] group-hover:text-white">
            <span className="text-xs sm:text-sm font-bold tracking-tighter">{step.id}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-600">
          {step.description}
        </p>

        {/* Animated Bottom Bar */}
        <div className="mt-6 sm:mt-8 h-1 w-0 bg-[#C61407] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#C61407 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-12 sm:mb-20 md:mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-block rounded-full bg-[#C61407]/5 px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C61407]"
          >
            Efficiency Redefined
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-black text-gray-900 tracking-tight mb-4 sm:mb-6 md:mb-8 px-2"
          >
            Built on Strategy. <br className="hidden sm:block"/>Driven by <span className="text-[#C61407] italic">Results.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg text-gray-500 font-light leading-relaxed px-4"
          >
            We engineer data-driven social media campaigns where every post, ad, and interaction is a calculated step toward owning your market.
          </motion.p>
        </div>

        {/* Responsive Grid System */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
        >
          {steps.map((step) => (
            <ProcessCard key={step.id} step={step} />
          ))}
        </motion.div>

        {/* Footer Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 sm:mt-20 md:mt-24 flex flex-col items-center gap-4 sm:gap-6"
        >
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <p className="text-[9px] sm:text-xs text-gray-400 uppercase tracking-[0.3em] font-semibold text-center">
            The Sustainable Growth Engine
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;