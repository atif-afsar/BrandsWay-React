import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const FeaturedCaseStudy = ({ 
  videoSrc = "https://cdn.pixabay.com/video/2020/10/21/53058-473550993_large.mp4", 
  title = "The Neon Pulse Campaign",
  description = "A global digital transformation for the next generation of urban lifestyle brands.",
  metrics = { reach: "180k", engagement: "8.2%", platform: "Omnichannel" },
  instagramLink = "https://www.instagram.com/thebrandsway/",
  isInstagramEmbed = false,
  instagramReelUrl = ""
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!isInstagramEmbed) {
      setIsHovered(true);
      videoRef.current?.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isInstagramEmbed) {
      setIsHovered(false);
      videoRef.current?.pause();
      if (videoRef.current) videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className="bg-black py-20 md:py-32 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Video Container (9:16 Portrait) */}
        <div 
          className="lg:col-span-4 relative group cursor-pointer w-full max-w-[320px] mx-auto lg:mx-0"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            animate={{ scale: isHovered ? 1.03 : 1 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            className="relative overflow-hidden rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#0A0A0A]"
            style={{ aspectRatio: '9/16' }}
          >
            {isInstagramEmbed ? (
              <iframe
                src={`${instagramReelUrl}embed/`}
                className="w-full h-full"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                style={{ border: 'none', overflow: 'hidden' }}
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                <video
                  ref={videoRef}
                  src={videoSrc}
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
                />

                {/* Minimal Play Overlay */}
                {!isHovered && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5">
                       <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                    </div>
                  </div>
                )}
              </>
            )}

            {/* Premium Instagram Badge */}
            {!isInstagramEmbed && (
              <a 
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-full hover:bg-[#C61407] hover:border-[#C61407] transition-all duration-300 group/icon"
              >
                <FaInstagram className="text-white text-lg group-hover/icon:scale-110 transition-transform" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Right Side: Campaign Info */}
        <div className="lg:col-span-8 text-white text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-[#C61407] font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              Case Study // 01
            </span>
            
            <h3 className="text-5xl md:text-7xl font-medium font-black mb-8 leading-[0.9] uppercase tracking-tighter">
              {title.split(' ').map((word, i) => (
                <span key={i} className={i === title.split(' ').length - 1 ? "text-[#C61407]" : ""}>
                  {word}{' '}
                </span>
              ))}
            </h3>
            
            <p className="text-gray-500 text-lg md:text-xl mb-12 font-light max-w-xl leading-relaxed">
              {description}
            </p>

            {/* Metrics Layout - Minimalist style */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 border-t border-white/5 pt-10">
              <div className="relative">
                <p className="text-3xl font-black tracking-tighter">200k</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mt-1">Reach</p>
              </div>
              <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
              <div className="relative">
                <p className="text-3xl font-black tracking-tighter">{metrics.engagement}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mt-1">Engagement</p>
              </div>
              <div className="w-[1px] h-12 bg-white/5 hidden md:block" />
              <div className="relative">
                <p className="text-3xl font-black tracking-tighter uppercase">{metrics.platform}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mt-1">Platform</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
};

export default FeaturedCaseStudy;