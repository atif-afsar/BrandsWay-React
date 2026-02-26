import React from 'react';
import { motion } from 'framer-motion';

const Insights = () => {
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
            <span className="text-[#C61407]">Insights</span> & Articles
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest trends, tips, and strategies in digital marketing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
