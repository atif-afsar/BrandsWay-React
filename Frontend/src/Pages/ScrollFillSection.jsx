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
  const opacity = useTransform(progress, range, [0.08, 1]);
  const blur = useTransform(progress, range, [6, 0]);
  const y = useTransform(progress, range, [12, 0]);

  return (
    <motion.span
      style={{
        opacity,
        y,
        filter: blur.get ? undefined : undefined,
        display: 'inline-block',
        marginRight: '0.28em',
        marginBottom: '0.15em',
        willChange: 'opacity, transform',
      }}
      className="word-span"
    >
      <motion.span
        style={{
          filter: useTransform(blur, v => `blur(${v}px)`),
          display: 'inline-block',
        }}
        className="bg-gradient-to-r from-[#FF3A2D] via-[#D01208] to-[#8C0D04] bg-clip-text text-transparent"
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

const ScrollFillSection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.45", "end 0.75"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.0005,
    mass: 0.5,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&display=swap');

        .scroll-fill-section {
          background: #FAFAF8;
          position: relative;
          overflow: hidden;
        }

        .scroll-fill-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255, 58, 45, 0.04) 0%, transparent 70%),
            radial-gradient(ellipse 60% 40% at 80% 110%, rgba(198, 20, 7, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .scroll-fill-label {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.28);
        }

        .scroll-fill-text {
          font-family: 'Cormorant Garamond', 'Georgia', serif;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: transparent;
        }

        .word-span {
          transform-origin: bottom left;
        }

        .decorative-line {
          width: 36px;
          height: 1.5px;
          background: linear-gradient(to right, #FF3A2D, transparent);
          display: inline-block;
        }
      `}</style>

      <section
        ref={containerRef}
        className="scroll-fill-section min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto w-full">

          {/* Eyebrow label */}
          <div className="flex items-center gap-4 mb-10 md:mb-14">
            <span className="decorative-line" />
            <span className="scroll-fill-label">Our Philosophy</span>
          </div>

          {/* Main text */}
          <p
            className="scroll-fill-text font-medium text-[clamp(2rem,4.5vw,4.25rem)] flex flex-wrap"
          >
            {words.map((word, i) => {
              const total = words.length;
              // Stagger window: each word occupies a 14% window, offset by position
              const windowSize = 0.18;
              const start = (i / total) * (1 - windowSize);
              const end = start + windowSize;
              return (
                <Word key={i} progress={smoothProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>

          {/* Bottom accent */}
          <div className=" md:mt-20 flex items-center gap-6 ">
            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'linear-gradient(to right, rgba(255,58,45,0.7), transparent)',
              }}
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default ScrollFillSection;