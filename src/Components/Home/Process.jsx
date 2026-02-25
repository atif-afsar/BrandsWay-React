import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    id: "01",
    title: "Research",
    description: "Deep-dive analysis into market trends and competitor vulnerabilities."
  },
  {
    id: "02",
    title: "Strategy",
    description: "Crafting a bespoke growth roadmap tailored to your specific revenue goals."
  },
  {
    id: "03",
    title: "Execution",
    description: "Precision launch of optimized campaigns across high-intent channels."
  },
  {
    id: "04",
    title: "Scaling",
    description: "Aggressive expansion of winning variables to maximize market share."
  }
];

const ProcessCard = ({ step, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center md:items-start text-center md:text-left h-full"
    >
      {/* Animated Top Border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute top-0 left-0 right-0 h-1 bg-[#C61407] rounded-t-xl origin-left"
      />

      {/* Number Badge */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#C61407]/30 bg-[#C61407]/5 mb-6">
        <span className="text-xs font-bold text-[#C61407] tracking-tighter">
          {step.id}
        </span>
      </div>

      <h3 className="text-black text-lg font-medium tracking-tight mb-3">
        {step.title}
      </h3>
      
      <p className="text-gray-600 text-sm leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
};

const ProcessSection = () => {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black/40 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4"
          >
            Our Process
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-semibold text-black tracking-tight mb-6"
          >
            Built on Strategy. Driven by <span className="text-[#C61407]">Results.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base max-w-xl mx-auto font-light"
          >
            Our framework is engineered for precision, ensuring every campaign 
            is a calculated step toward market dominance.
          </motion.p>
        </div>

        {/* --- CARDS GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch"
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <ProcessCard step={step} index={index} />
              
              {/* Subtle Connection Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 pointer-events-none" 
                     style={{ left: `${(index + 1) * 25 - 1.5}%`, width: '3%' }}>
                  <div className="h-[1px] w-full bg-gray-200" />
                </div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* --- OPTIONAL TAGLINE --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="h-[1px] w-8 bg-gray-200" />
          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
            Sustainable Growth Engine
          </p>
          <div className="h-[1px] w-8 bg-gray-200" />
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;