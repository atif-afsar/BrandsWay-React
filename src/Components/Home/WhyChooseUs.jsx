import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Data-Driven Strategy",
    description: "Leveraging granular analytics to build roadmaps that eliminate guesswork.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Conversion Optimization",
    description: "Refining user journeys to turn passive browsers into high-value customers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Performance Scaling",
    description: "Strategic infrastructure built to handle rapid growth without friction.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
      </svg>
    ),
  },
  {
    title: "Creative That Converts",
    description: "High-impact visual storytelling designed for psychological resonance.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

const WhyChooseSection = () => {
  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800;900&display=swap');*, *::before, *::after { box-sizing: border-box; }`}</style>
      <section className="relative w-full py-24 md:py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero/bg1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.7)', mixBlendMode: 'lighten' }}
      />
      {/* --- HEADER --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-20 md:mb-28">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-black/50 uppercase tracking-[0.3em] text-[11px] font-bold block mb-4"
        >
          Why Choose Us
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-black text-black leading-tight font-medium tracking-tight mb-6"
        >
          Built for Brands That <br className="hidden md:block" /> Want to <span className="text-[#C61407] font-medium">Win.</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 max-w-xl mx-auto text-lg leading-relaxed"
        >
          Precision engineering meets creative excellence to deliver growth that 
          scales as fast as your ambition.
        </motion.p>
      </div>

      {/* --- CARDS GRID --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
      >
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ 
              y: -6, 
              scale: 1.03,
              boxShadow: "0 20px 40px -10px rgba(198, 20, 7, 0.15)"
            }}
            // Idle floating animation
            animate={{
              y: [0, -8, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.5
              }
            }}
            className="group relative bg-white/75 backdrop-blur-md border border-white/40 p-8 rounded-2xl shadow-sm overflow-hidden"
          >
            {/* Top Accent Line (Animate on Hover) */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 left-0 right-0 h-[3px] bg-[#C61407] origin-left"
            />

            <div className="flex flex-col items-start gap-5">
              <div className="p-3 bg-black text-white rounded-lg group-hover:bg-[#C61407] transition-colors duration-300">
                {feature.icon}
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-black mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </>
  );
};

export default WhyChooseSection;