import React from 'react';
import { motion } from 'framer-motion';

const WorkCTA = () => {
  // Animation Variants (Preserved from your original for consistency)
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
    <section className="relative w-full py-36 md:py-48 px-6 overflow-hidden">
      {/* Background (Preserved your exact layering) */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero/bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.7)', mixBlendMode: 'lighten' }}
      />
      {/* Subtle Grid - Adjusted color to your brand red/blue for the Work page */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(198,20,7,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(198,20,7,0.4) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />
      
      {/* Subtle Background Accent */}
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
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Headline - Updated for Portfolio context */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-medium text-black tracking-tighter leading-[1.1] mb-8"
        >
          Want to be our next <br /> 
          <span className="text-[#C61407]">Success Story?</span>
        </motion.h2>

        {/* Subtext - Updated for Portfolio context */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-800 text-lg md:text-xl font-normal mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Browse our case studies to see the impact we make. Ready to see yours here? 
          Let’s discuss your next breakthrough project.
        </motion.p>

        {/* Button Container */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.button
            whileHover={{ 
              backgroundColor: "#C61407",
              scale: 1.04,
              boxShadow: "0 20px 40px -10px rgba(198, 20, 7, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-12 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-2xl transition-all duration-300"
          >
            Start a Project
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Line */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-black origin-center"
      />
    </section>
  );
};

export default WorkCTA;