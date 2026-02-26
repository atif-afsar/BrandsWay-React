import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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
            Get in <span className="text-[#C61407]">Touch</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed mb-12">
            Ready to start your growth journey? Let's talk about your goals.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#C61407] text-white font-semibold rounded-full hover:bg-red-800 transition-colors"
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
