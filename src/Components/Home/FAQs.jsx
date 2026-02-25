import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: "How long does it take to see results?",
    answer: "Most campaigns show measurable data within 30 days, with performance compounding over the first 90 days."
  },
  {
    question: "Do you offer custom strategies?",
    answer: "Every plan is built from the ground up, tailored specifically to your revenue goals, audience behavior, and market gaps."
  },
  {
    question: "Which platforms do you manage?",
    answer: "Our core expertise lies in Google Ads, Meta Ads, SEO, Conversion Rate Optimization, and performance-first funnels."
  },
  {
    question: "Do you work with startups?",
    answer: "Yes. We partner with both high-potential early-stage startups and established companies looking to scale aggressively."
  },
  {
    question: "How do you measure success?",
    answer: "We focus on the metrics that matter: ROI, ROAS, cost per acquisition, and net revenue growth."
  }
];

const FAQItem = ({ item, index, isOpen, toggleOpen }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="border-b border-gray-100"
    >
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between py-7 text-left group"
      >
        <span className={`text-lg md:text-xl font-medium tracking-tight transition-all duration-300 ${isOpen ? 'text-[#C61407]' : 'text-black group-hover:text-[#C61407] group-hover:pl-1'}`}>
          {item.question}
        </span>
        
        <div className="relative w-5 h-5 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: isOpen ? 90 : 0, opacity: isOpen ? 0 : 1 }}
            className="absolute h-[1.5px] w-full bg-black"
          />
          <motion.div 
            animate={{ rotate: isOpen ? 0 : 90 }}
            className="absolute h-[1.5px] w-full bg-black"
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
          >
            <div className="pb-8 pr-10">
              <motion.p 
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                className="text-gray-500 leading-relaxed font-light text-base md:text-lg"
              >
                {item.answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-[780px] mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black/40 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4"
          >
            FAQs
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-black tracking-tighter mb-6"
          >
            Questions, <span className="text-[#C61407]">Answered.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base md:text-lg max-w-md mx-auto font-light"
          >
            Everything you need to know about our growth methodology and partnerships.
          </motion.p>
        </div>

        {/* --- FAQ LIST --- */}
        <div className="mb-24">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              index={index}
              isOpen={activeIndex === index}
              toggleOpen={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* --- BOTTOM CTA --- */}
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-sm font-medium tracking-widest uppercase mb-8"
          >
            Still have questions?
          </motion.p>
          
          <motion.button
            whileHover={{ 
              backgroundColor: "#C61407",
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="px-10 py-5 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-black/5 transition-all"
          >
            Book Strategy Call
          </motion.button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;