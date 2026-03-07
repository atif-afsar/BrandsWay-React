import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const stats = [
  {
    value: 4.7,
    suffix: "x",
    label: "Average ROAS",
    desc: "Across active campaigns"
  },
  {
    value: 312,
    suffix: "%",
    prefix: "+",
    label: "Revenue Growth",
    desc: "Client portfolio average"
  },
  {
    value: 89,
    suffix: "%",
    label: "Lead Quality Increase",
    desc: "Qualified prospects only"
  },
  {
    value: 2.8,
    suffix: "x",
    label: "Conversion Boost",
    desc: "Landing optimization"
  }
];

const RollingNumber = ({ value, prefix = "", suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1500; // 1.5 Seconds
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        
        // Power4 out easing
        const easeOutQuad = 1 - Math.pow(1 - progress, 4);
        const currentNum = easeOutQuad * end;

        setDisplayValue(currentNum);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {Number.isInteger(value) 
        ? Math.floor(displayValue) 
        : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
};

const StatTile = ({ stat, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -6, 
        borderColor: "rgba(198, 20, 7, 0.4)",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)"
      }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className="bg-white border border-gray-200 rounded-xl p-8 transition-colors duration-300"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl md:text-5xl font-semibold text-black tracking-tight">
          <RollingNumber 
            value={stat.value} 
            prefix={stat.prefix} 
            suffix={stat.suffix} 
          />
        </h3>
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wider">
          {stat.label}
        </p>
        <p className="text-[11px] text-gray-400 font-normal">
          {stat.desc}
        </p>
      </div>
      
      {/* Subtle bottom accent line on hover */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="h-[2px] bg-[#C61407] mt-6 origin-left w-12"
      />
    </motion.div>
  );
};

const ResultsSection = () => {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-black/40 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4"
          >
            Proven Performance
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-semibold text-black tracking-tight mb-6"
          >
            Real Numbers. Real <span className="text-[#C61407]">Growth.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-base max-w-lg mx-auto font-light"
          >
            We let the data do the talking. Our methodology is built on 
            statistical significance and scalable ROI.
          </motion.p>
        </div>

        {/* --- STATS GRID --- */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <StatTile key={index} stat={stat} index={index} />
          ))}
        </motion.div>

        {/* --- BOTTOM TRUST LINE --- */}
        <div className="mt-20 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex flex-col items-center gap-4"
          >
            <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
              Performance backed by data, not guesses.
            </p>
            <div className="w-12 h-px bg-gray-100" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;