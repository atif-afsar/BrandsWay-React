import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Delays the paragraph after the heading
      },
    },
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom "expo" ease for a premium feel
      },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-black py-24 px-6 md:py-32 overflow-hidden">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Subtle Red Accent Line */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[2px] bg-[#C61407] mx-auto mb-8"
        />

        {/* Main Heading */}
        <motion.h2 
          variants={titleVariants}
          className="text-white text-5xl md:text-7xl lg:text-7xl font-medium font-black uppercase tracking-tighter leading-none mb-8"
        >
          Our Best <span className="text-[#C61407]">Work</span>
        </motion.h2>

        {/* Description */}
        <motion.p 
          variants={descVariants}
          className="text-gray-400 text-lg md:text-xl lg:text-2xl font-normal max-w-2xl mx-auto leading-relaxed"
        >
          We blend disruptive strategy with world-class design to help 
          forward-thinking brands define the next generation of digital experiences.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SectionHeader;