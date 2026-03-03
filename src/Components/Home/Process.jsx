import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const steps = [
  { id: "01", title: "Research", description: "Deep-dive analysis into market trends and competitor vulnerabilities." },
  { id: "02", title: "Strategy", description: "Crafting a bespoke growth roadmap tailored to your specific revenue goals." },
  { id: "03", title: "Execution", description: "Precision launch of optimized campaigns across high-intent channels." },
  { id: "04", title: "Scaling", description: "Aggressive expansion of winning variables to maximize market share." }
];

const ProcessCard = ({ step, index }) => {
  // Spotlight effect logic
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
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-[#C61407]/20"
    >
      {/* 1. Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(198, 20, 7, 0.06), transparent 40%)`
          ),
        }}
      />

      {/* 2. Large Background Index (Parallax) */}
      <span className="absolute -right-4 -top-4 select-none text-9xl font-bold text-gray-50 transition-all duration-700 group-hover:-translate-x-4 group-hover:text-[#C61407]/5">
        {step.id}
      </span>

      <div className="relative z-10">
        {/* 3. Icon/Number Badge with Pulse */}
        <div className="relative mb-8 flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 animate-ping rounded-full bg-[#C61407]/10 opacity-0 group-hover:opacity-100" />
          <div className="flex h-full w-full items-center justify-center rounded-xl border border-[#C61407]/20 bg-white shadow-sm transition-colors group-hover:bg-[#C61407] group-hover:text-white">
            <span className="text-sm font-bold tracking-tighter">{step.id}</span>
          </div>
        </div>

        {/* 4. Content */}
        <h3 className="mb-3 text-xl font-bold text-gray-900 tracking-tight">
          {step.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-500 transition-colors group-hover:text-gray-600">
          {step.description}
        </p>

        {/* 5. Animated Bottom Bar */}
        <div className="mt-8 h-1 w-0 bg-[#C61407] transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section className="relative overflow-hidden bg-gray-50/50 py-32 px-6">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(#C61407 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-4 inline-block rounded-full bg-[#C61407]/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-[#C61407]"
          >
            Efficiency Redefined
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black font-medium text-gray-900 tracking-tight mb-8"
          >
            Built on Strategy. <br/>Driven by <span className="text-[#C61407] italic">Results.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mx-auto max-w-2xl text-lg text-gray-500 font-light leading-relaxed"
          >
            We engineer data-driven social media campaigns where every post, ad, and interaction is a calculated step toward owning your market.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </motion.div>

        {/* Footer Tagline */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <p className="text-xs text-gray-400 uppercase tracking-[0.4em] font-semibold">
            The Sustainable Growth Engine
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;