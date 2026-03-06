import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FeaturedCaseStudy = ({ 
  videoSrc = "https://cdn.pixabay.com/video/2020/10/21/53058-473550993_large.mp4", 
  title = "The Neon Pulse Campaign",
  description = "A global digital transformation for the next generation of urban lifestyle brands.",
  metrics = { reach: "12.4M", engagement: "8.2%", platform: "Omnichannel" }
}) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Play/Pause logic on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    videoRef.current?.pause();
    if (videoRef.current) videoRef.current.currentTime = 0; // Reset for impact
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="bg-black py-12 md:py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Side: Video Container */}
        <div 
          className="lg:col-span-7 relative group cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div 
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />
            
            <video
              ref={videoRef}
              src={videoSrc}
              muted
              loop
              playsInline
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
            />

            {/* Subtle "Play" Indicator */}
            {!isHovered && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm bg-white/5">
                   <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Right Side: Campaign Info */}
        <div className="lg:col-span-5 text-white">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[#C61407] font-bold uppercase tracking-[0.2em] text-sm mb-4 block"
          >
            Featured Campaign
          </motion.span>
          
          <h3 className="text-4xl md:text-5xl font-medium font-black mb-6 leading-tight uppercase tracking-tighter">
            {title}
          </h3>
          
          <p className="text-gray-400 text-lg mb-10 font-normal leading-relaxed">
            {description}
          </p>

          {/* Metrics Grid */}
          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <div>
              <p className="text-[#C61407] text-2xl font-black">{metrics.reach}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Reach</p>
            </div>
            <div>
              <p className="text-white text-2xl font-black">{metrics.engagement}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Engagement</p>
            </div>
            <div>
              <p className="text-white text-2xl font-black">{metrics.platform}</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Platform</p>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default FeaturedCaseStudy;