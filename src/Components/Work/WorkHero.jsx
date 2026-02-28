import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const PortfolioHero = () => {
  // Animation Variants for refined control
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#D0C3C2] px-6 py-20 overflow-hidden">
      
      {/* 1. Cinematic Background Image */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/work/herobg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(20%)'
        }}
      />

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Main Headline with Floating Motion */}
        <motion.div
         
        >
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#1a1c2e] tracking-tight leading-[1.1]"
          >
            Impact through <br />
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[#C61407]"
            >
              Creativity
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 text-gray-700/80 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal"
        >
          Explore our portfolio of strategic PR campaigns and disruptive digital 
          marketing initiatives that helped global brands dominate their industries.
        </motion.p>

        {/* Button Actions with Staggered Entry */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          {/* Primary Button (Red) */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#a51106",
              boxShadow: "0 20px 25px -5px rgba(198, 20, 7, 0.2)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center gap-3 px-8 py-4 bg-[#C61407] text-white font-bold rounded-2xl transition-all shadow-lg"
          >
            Latest Case Studies
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} className="group-hover:text-white" />
            </motion.div>
          </motion.button>

          {/* Secondary Button (White) */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#ffffff",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white/80 backdrop-blur-sm text-[#1a1c2e] font-bold rounded-2xl border border-white transition-all"
          >
            Our Approach
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#D0C3C2] to-transparent pointer-events-none" />
    </section>
  );
};

export default PortfolioHero;