import React from 'react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
  // Animation Variants (Consistent with your premium theme)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative w-full py-32 md:py-40 px-6 overflow-hidden bg-[#fdfdfd]">
      
      {/* 1. Background Image with Fixed Parallax */}
         <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero/bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.6)', mixBlendMode: 'lighten' }}
      />
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(100,149,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.4) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(198,20,7,0.04) 100%)' }}
      />

      {/* Subtle Background Accent (8% Opacity Radial Glow) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(198, 20, 7, 0.08) 0%, transparent 70%)'
        }}
      />
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Top Badge */}
        <motion.span 
          variants={itemVariants}
          className="inline-block px-4 py-1.5 mb-6 text-[#C61407] font-bold tracking-[0.3em] text-[10px] uppercase border border-[#C61407]/20 rounded-full bg-[#C61407]/5"
        >
          Let's Connect
        </motion.span>

        {/* Visionary Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-medium text-gray-900 tracking-tighter leading-[1.1] mb-8"
        >
          Your Story <br className="hidden md:block" /> 
          Deserves to be <span className="text-[#C61407]">Unforgettable.</span>
        </motion.h2>

        {/* Narrative Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-600 text-lg md:text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We don't just build brands; we build legacies. Partner with us to transform your vision into a global impact.
        </motion.p>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileHover={{ 
              backgroundColor: "#C61407",
              scale: 1.05,
              boxShadow: "0 20px 40px -10px rgba(198, 20, 7, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all"
          >
            Start Your Journey
          </motion.button>

          <motion.button
            whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
            className="px-12 py-5 bg-transparent border border-black/10 text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Animated Bottom Accent */}
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "120px", opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 h-[1px] bg-[#C61407] origin-center"
      />
    </section>
  );
};

export default AboutCTA;