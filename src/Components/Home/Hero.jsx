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
    "Webflow", "WordPress", "Umbraco", "Laravel", "React",
    "Shopify", "Next.js", "Figma", "HubSpot", "Framer",
    "Contentful", "Strapi", "Vue.js", "Tailwind CSS", "Sanity"
  ];

  const marqueeItems = [...platforms, ...platforms];

  return (
    <section className="relative min-h-screen w-full flex flex-col font-['Poppins',_sans-serif] overflow-hidden">

      {/* Background */}
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

      {/* Main content */}
      <div
        className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12"
        style={{ paddingTop: '80px' }}
      >

        {/* ── MOBILE layout (completely unchanged) ── */}
        <div className="w-full lg:hidden grid grid-cols-12 gap-y-8">
          <div className="col-span-12 mt-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl font-black font-medium text-black leading-[1.4] tracking-tight"
            >
              We Shape the Perfect Solution,<br />
              <span className='text-[#c61407]'>You Think – We Create</span>
              <br />
              <span>—</span>
              <span className="text-black">Trusted by startups, creators, and enterprises worldwide.</span>
            </motion.h1>
          </div>

          <div className="col-span-12 mb-6 flex flex-col gap-5">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-800 text-sm sm:text-base leading-relaxed"
            >
              Strategic marketing, powerful design, and performance systems built to scale your business faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button className="flex items-center gap-2 bg-[#C61407] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-800 transition-all shadow-md shadow-red-300/40">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-5 h-5 rounded-full bg-white/20" alt="" />
                Request Proposal
              </button>
              <button className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all">
                See Our Impact
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 group w-full"
            >
              <div className="flex -space-x-3 transition-space duration-300 group-hover:-space-x-2">
                {avatars.map((url, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} className="relative">
                    <img src={url} alt={`Founder ${index + 1}`}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-gray-100 object-cover shadow-lg" />
                  </motion.div>
                ))}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white bg-[#0c0c0c] flex items-center justify-center text-[10px] text-white font-bold shadow-lg">50+</div>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C61407]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-['Playfair_Display',_serif] italic text-base sm:text-lg text-gray-700 leading-tight text-center sm:text-left">
                  Trusted by <span className="font-black text-black not-italic">50+ Founders</span> & Product Teams
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── DESKTOP layout — two-column, fills full width ── */}
        <div className="hidden lg:grid w-full grid-cols-2 gap-0 items-center" style={{ minHeight: 'calc(100vh - 160px)' }}>

          {/* LEFT — description, buttons, avatars, stats */}
          <div className="flex flex-col justify-center gap-8 pr-16 border-r border-gray-200/60 h-full py-16">

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-800 text-base leading-relaxed max-w-sm"
            >
              Strategic marketing, powerful design, and performance systems built to scale your business faster.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <button className="flex items-center gap-2 bg-[#C61407] text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-red-800 transition-all shadow-md shadow-red-300/40">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-5 h-5 rounded-full bg-white/20" alt="" />
                Request Proposal
              </button>
              <button className="px-6 py-2.5 rounded-full border-2 border-gray-900 text-gray-900 font-semibold text-sm hover:bg-gray-900 hover:text-white transition-all">
                See Our Impact
              </button>
            </motion.div>

            {/* Avatars + rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-6 group"
            >
              <div className="flex -space-x-3 transition-space duration-300 group-hover:-space-x-2">
                {avatars.map((url, index) => (
                  <motion.div key={index} whileHover={{ y: -5, scale: 1.1 }} className="relative">
                    <img src={url} alt={`Founder ${index + 1}`}
                      className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 object-cover shadow-lg" />
                  </motion.div>
                ))}
                <div className="w-12 h-12 rounded-full border-3 border-white bg-[#0c0c0c] flex items-center justify-center text-[10px] text-white font-bold shadow-lg">50+</div>
              </div>
              <div className="flex flex-col items-start gap-1">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#C61407]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-['Playfair_Display',_serif] italic text-lg text-gray-700 leading-tight">
                  Trusted by <span className="font-black text-black not-italic">50+ Founders</span> & Product Teams
                </p>
              </div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
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
                    <p className="text-2xl font-black text-black">{stat.value}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mt-0.5">{stat.label}</p>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — headline + badge + service tags */}
          <div className="flex flex-col justify-center pl-16 h-full py-16">

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-black font-medium text-black leading-[1.4] tracking-tight"
            >
              We Shape the Perfect Solution,<br />
              <span className='text-[#c61407]'>You Think – We Create</span>
              <br />
              <span>—</span>
              <span className="text-black">Trusted by startups, creators, and enterprises worldwide.</span>
            </motion.h1>

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex items-center gap-4"
            >
              <span className="inline-flex items-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-[#C61407] animate-pulse" />
                Available for new projects
              </span>
              <span className="text-xs text-gray-700 uppercase tracking-widest">Est. 2020</span>
            </motion.div>

            {/* Service tags */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {["Brand Strategy", "Web Design", "Development", "SEO & Growth", "UI/UX", "Digital Marketing"].map((tag) => (
                <span key={tag}
                  className="text-xs font-semibold text-gray-600 border border-gray-300 px-3 py-1.5 rounded-full hover:border-[#C61407] hover:text-[#C61407] transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* MARQUEE — pinned to bottom */}
      <div className="relative z-10 w-full mb-8 sm:mb-12 border-t border-gray-200 bg-white/60 backdrop-blur-sm py-4 sm:py-5 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-24 z-10"
          style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.9), transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-24 z-10"
          style={{ background: 'linear-gradient(to left, rgba(255,255,255,0.9), transparent)' }} />

        <div className="flex items-center" style={{ willChange: 'transform' }}>
          <div className="flex items-center gap-6 sm:gap-10 marquee-track">
            {marqueeItems.map((name, i) => (
              <React.Fragment key={i}>
                <span className="text-xs sm:text-sm font-black text-gray-900 hover:text-[#C61407] transition-colors cursor-default tracking-widest uppercase whitespace-nowrap">
                  {name}
                </span>
                <span className="text-[#C61407] font-black text-base sm:text-lg select-none">·</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style>{`
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