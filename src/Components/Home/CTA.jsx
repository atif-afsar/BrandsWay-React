import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  // Animation Variants
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
      {/* Background */}
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
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-7xl font-semibold text-black tracking-tighter leading-[1.1] mb-8"
        >
          Ready to <span className="text-[#C61407]">Grow Faster</span> <br className="hidden md:block" /> 
          Than Your Competitors?
        </motion.h2>

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-gray-800 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Let’s build a strategy tailored to your business goals.
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
            className="px-10 py-5 bg-black text-white text-sm font-medium uppercase tracking-[0.2em] rounded-full shadow-lg shadow-black/5 transition-colors duration-300"
          >
            Book Strategy Call
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Decorative Bottom Line (Optional) */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 0.1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-black origin-center"
      />
    </section>
  );
};

export default CTASection;