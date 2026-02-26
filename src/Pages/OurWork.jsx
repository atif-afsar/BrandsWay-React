import React from 'react';
import { motion } from 'framer-motion';

const OurWork = () => {
  return (
    <section className="relative w-full min-h-screen py-24 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-black text-black mb-6">
            Our <span className="text-[#C61407]">Work</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects and case studies.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
