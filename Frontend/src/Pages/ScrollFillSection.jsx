import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const words = [
  "In", "a", "world", "where", "attention", "is", "currency,", "we", "engineer",
  "Public", "Relations", "and", "Marketing", "systems", "that", "position", "brands",
  "at", "the", "center", "of", "conversation.", "From", "narrative", "architecture",
  "to", "performance-driven", "campaigns,", "we", "create", "momentum", "that",
  "builds", "authority,", "amplifies", "reach,", "and", "turns", "visibility",
  "into", "sustained", "market", "leadership."
];

const Word = ({ children, progress, range }) => {
  // Refined transitions for a light background
  const opacity = useTransform(progress, range, [0.12, 1]);
  const y = useTransform(progress, range, [6, 0]);
  const blur = useTransform(progress, range, ['blur(3px)', 'blur(0px)']);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: blur,
        display: 'inline-block',
        marginRight: '0.35em',
        marginBottom: '0.2em',
        willChange: 'opacity, transform, filter',
      }}
      className="select-none tracking-tight font-medium"
    >
      <span className="text-[#C61407]">
        {children}
      </span>
    </motion.span>
  );
};

const ScrollFillSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.5", "end 0.9"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 35,
    damping: 25,
    restDelta: 0.001,
    mass: 0.6,
  });

  return (
    <section
      ref={containerRef}
      className="bg-[#ffffff] min-h-[160vh] flex flex-col items-center justify-start px-8 md:px-24"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center max-w-5xl w-full">
        
        {/* Minimalist Header - Monochrome Accent */}
        <div className="flex items-center gap-3 mb-10 opacity-40">
          <div className="h-[1px] w-10 bg-[#1a1a1a]" />
          <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-[#C61407]">
            The Ethos
          </span>
        </div>

        {/* Refined Typography - Smaller and cleaner */}
        <p className="leading-[1.5] text-[clamp(1.2rem,2.2vw,2rem)] text-[#1a1a1a] flex flex-wrap antialiased">
          {words.map((word, i) => {
            const total = words.length;
            const windowSize = 0.12;
            const start = (i / total) * (1 - windowSize);
            const end = start + windowSize;
            
            return (
              <Word key={i} progress={smoothProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>

        {/* Minimal Footer Decor */}
        <div className="mt-12">
            <div className="h-[1px] w-6 bg-red-600 opacity-80" />
        </div>
      </div>
    </section>
  );
};

export default ScrollFillSection;