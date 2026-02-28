import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const InsightsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Section Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium  mt-8 text-[#1a1c2e] tracking-tighter"
          >
            Insights<span className="text-[#C61407]">.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed"
          >
            Thought leadership and deep dives into the intersection of strategic branding, 
            digital-first marketing, and future-ready design.
          </motion.p>
        </div>

        {/* 2. Featured Case Study - Two Column Layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        >
          {/* Image Container - Left */}
          <div className="group overflow-hidden rounded-2xl">
            <img 
              src="/insights/insightsHero.png"
              alt="The Future of Brand Identity"
              className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content Card - Right */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-all duration-500"
          >
            
            {/* Tag */}
            <div className="flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full w-fit mb-5">
              <Star size={12} className="text-[#C61407] fill-[#C61407]" />
              <span className="text-[#C61407] text-[9px] font-bold uppercase tracking-widest">
                Featured Case Study
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-[#1a1c2e] leading-tight tracking-tight mb-4">
              The Future of Brand Identity in a Digital-First World
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Discover how global brands are pivoting their visual systems to thrive in an era 
              where the smartphone is the primary interface for customer connection.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default InsightsSection;
