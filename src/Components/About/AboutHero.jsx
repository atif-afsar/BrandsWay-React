import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-black">
      
      {/* Background Layer with Parallax Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/about/abouthero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Premium Gradient Overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
      <div className="absolute inset-0 z-0 bg-radial-gradient(circle_at_center,_var(--tw-gradient-stops)) from-transparent via-black/10 to-black/40" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center max-w-7xl mx-auto w-full px-6 md:px-12">
        <div className="w-full flex flex-col items-center text-center">
          
          {/* Subtle Accent Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-white/60 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
          >
            Our Agency
          </motion.span>

          {/* Headline - "Impact" highlighted with a subtle glow */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-[1.1] tracking-tighter mb-8"
          >
            Behind the 
            <span className="relative inline-block">
              <span className="relative z-10 text-[#C61407]"> Impact</span>
              {/* <span className="absolute -inset-1 blur-2xl bg-red-600/20 z-0"></span> */}
            </span>
          </motion.h1>

          {/* Subheading - Improved readability and line height */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed font-normal"
          >
            Strategic PR and digital marketing for brands that aim to 
            <span className="text-white"> lead, disrupt, and define </span> the future.
          </motion.p>

          {/* CTA Button - High-end Glassmorphism + Interaction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#C61407' }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-[#C61407] text-white font-medium rounded-full shadow-[0_10px_40px_-10px_rgba(198,20,7,0.5)] transition-colors"
            >
              Learn Our Story
            </motion.button>
            
            <motion.button
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full backdrop-blur-md transition-all"
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Minimalist refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="relative z-10 flex flex-col items-center pb-12"
      >
      </motion.div>
    </section>
  );
};

export default AboutHero;