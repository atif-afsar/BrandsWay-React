import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function QuoteSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect for the background quote mark
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#B11206] text-white py-16 md:py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Decorative Parallax Background Quote */}
      <motion.div 
        style={{ y }}
        className="absolute left-10 top-0 text-white/5 text-[300px] font-serif pointer-events-none select-none"
      >
        “
      </motion.div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Subtle Label */}
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-white/50 text-xs font-bold tracking-[0.3em] uppercase mb-6 block"
        >
          Leadership Message
        </motion.span>

        {/* The Quote with Letter Spacing and High-End Typography */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.15] tracking-tight italic"
        >
          “BrandsWay didn’t just manage our PR; they <span className="text-white/60">redefined</span> our global presence. Their approach to radical integrity is a breath of fresh air.”
        </motion.h2>

        {/* Profile Section with refined aesthetics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center"
        >
          {/* Avatar with Glassmorphism Border */}
         <div className="relative group">

                {/* Soft contrast halo */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-125" />

                {/* Glass ring */}
                <div className="absolute inset-0 rounded-full border border-white/40" />

                {/* Image */}
                <img
                    src="/about/yasir.png"
                    alt="Yasir Ali"
                    className="relative w-20 h-20 rounded-full object-cover shadow-[0_10px_40px_rgba(0,0,0,0.35)] transition duration-700 group-hover:scale-105"
                />
                </div>

          <div className="mt-4 space-y-1">
            <h4 className="text-xl font-bold tracking-wider">YASIR ALI</h4>
            <div className="flex items-center justify-center gap-3">
              <span className="h-[1px] w-4 bg-white/40"></span>
              <p className="text-white/70 text-sm font-light uppercase tracking-widest">
                Founder & CEO
              </p>
              <span className="h-[1px] w-4 bg-white/40"></span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Aesthetic Bottom Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
    </section>
  );
}