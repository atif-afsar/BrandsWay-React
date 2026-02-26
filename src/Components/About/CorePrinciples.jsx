import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Target, ArrowUpRight } from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Strategic Clarity",
    desc: "We cut through the noise with focused strategies that align perfectly with your business goals.",
    color: "#C61407",
  },
  {
    icon: Sparkles,
    title: "Creative Impact",
    desc: "Innovation isn't just a buzzword; it's how we ensure your brand remains memorable and relevant.",
    color: "#C61407",
  },
  {
    icon: ShieldCheck,
    title: "Radical Integrity",
    desc: "Transparency and honesty form the bedrock of our client relationships and professional ethics.",
    color: "#C61407",
  },
];

// Container variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CorePrinciples() {
  return (
    <section className="w-full bg-[#f8f6f4] py-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-[#C61407] font-bold tracking-[0.2em] uppercase text-xs mb-4 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter"
            >
              The DNA of Our <br /> <span className="text-gray-400">Success.</span>
            </motion.h2>
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-500 max-w-sm text-lg font-normal leading-relaxed"
          >
            The foundation of everything we do, from high-level client relations to precise campaign execution.
          </motion.p>
        </div>

        {/* Principles Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {principles.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative bg-white border border-gray-100 p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500"
              >
                {/* Interactive Background Element */}
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="text-[#C61407]" size={24} />
                </div>

                {/* Icon Circle */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#C61407]/5 mb-8 group-hover:bg-[#C61407] transition-colors duration-500">
                  <Icon 
                    className="text-[#C61407] group-hover:text-white transition-colors duration-500" 
                    size={28} 
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 font-normal leading-relaxed group-hover:text-gray-700 transition-colors">
                  {item.desc}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-8 h-[2px] w-0 bg-[#C61407] group-hover:w-full transition-all duration-700 ease-in-out" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}