import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&h=250&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&h=250&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&h=250&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&h=250&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&h=250&auto=format&fit=crop"
  ];

  const platforms = [
    "Web Development", "Mobile App Development", "Graphic Design", "Digital Marketing", "SEO Optimization",
    "Cloud Services", "UI/UX Design", "Content Creation", "Social Media Strategy", "Email Marketing",
  ];

  const marqueeItems = [...platforms, ...platforms];

  const AvatarRow = ({ size = 'md' }) => {
    const dim = size === 'sm' ? 'w-9 h-9' : 'w-11 h-11';
    return (
      <div className="flex items-center gap-4">
        <div className="flex -space-x-2.5">
          {avatars.map((url, i) => (
            <motion.img
              key={i}
              src={url}
              alt={`Founder ${i + 1}`}
              whileHover={{ y: -4, scale: 1.1, zIndex: 10 }}
              className={`${dim} rounded-full border-2 border-white object-cover shadow-md relative`}
            />
          ))}
          <div className={`${dim} rounded-full border-2 border-white bg-black flex items-center justify-center text-[9px] text-white font-black shadow-md`}>
            50+
          </div>
        </div>
        <div>
          <div className="flex gap-0.5 mb-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 text-[#C61407]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-xs text-gray-500 leading-tight">
            Trusted by <span className="font-bold text-black">50+ Founders</span>
          </p>
        </div>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex flex-col font-['Poppins',_sans-serif] overflow-hidden">

      {/* ── Background layers ── */}
      <div className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/hero/bg2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      <div className="absolute inset-0 z-0"
        style={{ backgroundColor: 'rgba(255,255,255,0.6)', mixBlendMode: 'lighten' }}
      />
      <div className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(100,149,237,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,149,237,0.4) 1px, transparent 1px)`,
          backgroundSize: '56px 56px',
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.06) 0%, rgba(198,20,7,0.04) 100%)' }}
      />


      {/* ── MOBILE layout ── */}
      <div className="relative z-10 lg:hidden flex flex-col flex-1 px-5 sm:px-8 pt-24 pb-6 gap-8">

        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 self-start bg-black text-white text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C61407] animate-pulse" />
          Available for new projects
        </motion.span>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[28px] sm:text-4xl font-black text-black leading-[1.25] tracking-tight"
        >
          We Shape the
          <br />
          <span className="text-[#C61407]">Perfect Solution</span>
          <br />
          <span className="text-gray-500 font-medium text-[22px] sm:text-3xl">You Think – We Create</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed -mt-2"
        >
          Strategic marketing, powerful design, and performance systems built to scale your business faster.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap gap-3"
        >
          <button className="flex items-center gap-2 bg-[#C61407] text-white px-5 py-3 rounded-full font-semibold text-sm hover:bg-red-800 transition-all shadow-lg shadow-red-200/60 active:scale-95">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-5 h-5 rounded-full bg-white/20" alt="" />
            Request Proposal
          </button>
          <button className="px-6 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all active:scale-95">
            See Our Impact
          </button>
        </motion.div>

        {/* Avatars */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <AvatarRow size="sm" />
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="flex items-center gap-6 pt-5 border-t border-gray-200"
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "5★", label: "Rating" },
          ].map((stat, i) => (
            <React.Fragment key={stat.label}>
              {i > 0 && <div className="w-px h-8 bg-gray-200" />}
              <div>
                <p className="text-xl font-black text-black leading-none">{stat.value}</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ── DESKTOP layout ── */}
      <div className="relative z-10 hidden lg:flex flex-1 items-center max-w-7xl mx-auto w-full px-12 xl:px-16" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="grid grid-cols-2 gap-0 w-full items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>

          {/* LEFT column */}
          <div className="flex flex-col justify-center gap-8 pr-16 border-r border-gray-200/80 h-full py-12">

            {/* Est. tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-600"
            >
              Est. 2020
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-700 text-base leading-relaxed max-w-xs"
            >
              Strategic marketing, powerful design, and performance systems built to scale your business faster.
            </motion.p>

            {/* Avatars */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <AvatarRow />
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-8 pt-6 border-t border-gray-200"
            >
              {[
                { value: "50+", label: "Projects" },
                { value: "98%", label: "Satisfaction" },
                { value: "5★", label: "Rating" },
              ].map((stat, i) => (
                <React.Fragment key={stat.label}>
                  {i > 0 && <div className="w-px h-10 bg-gray-200" />}
                  <div>
                    <p className="text-3xl font-black text-black leading-none">{stat.value}</p>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col justify-center pl-16 h-full py-12 gap-8">

            {/* Available badge */}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 self-start bg-black text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full"
            >
              <span className="w-2 h-2 rounded-full bg-[#C61407] animate-pulse" />
              Available for new projects
            </motion.span>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-light md:font-thin text-black leading-[1.1] tracking-tight"
            >
              We Shape the
              <br />
              <span className="text-[#C61407]">Perfect Solution</span>
              <br />
              <span className="text-gray-500 font-semibold text-4xl xl:text-5xl">
                You Think – We Create
              </span>
            </motion.h1>

            {/* Sub-line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-sm text-gray-500 uppercase tracking-widest font-medium"
            >
              — Trusted by startups, creators & enterprises worldwide
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap gap-3"
            >
              <button className="flex items-center gap-2 bg-[#C61407] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-red-800 transition-all shadow-lg shadow-red-200/60 active:scale-95">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-5 h-5 rounded-full bg-white/20" alt="" />
                Request Proposal
              </button>
              <button className="px-7 py-3 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all active:scale-95">
                See Our Impact
              </button>
            </motion.div>
          </div>

        </div>
      </div>

      {/* ── MARQUEE — pinned to bottom ── */}
      <div className="relative z-10 w-full border-t border-gray-200 bg-white/70 backdrop-blur-sm py-4 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.95), transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.95), transparent)' }} />

        <div className="marquee-track flex items-center gap-8">
          {marqueeItems.map((name, i) => (
            <React.Fragment key={i}>
              <span className="text-[11px] sm:text-xs font-black text-gray-800 hover:text-[#C61407] transition-colors cursor-default tracking-[0.2em] uppercase whitespace-nowrap">
                {name}
              </span>
              <span className="text-[#C61407] font-black text-base select-none leading-none">·</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;900&display=swap');
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;