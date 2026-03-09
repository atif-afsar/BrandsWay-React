import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const campaigns = [
  { id: 7, title: "YAC Edtech", metric: "Creative Direction", type: "instagram", embedUrl: "https://www.instagram.com/reel/DUiTrYgEUWv/embed" },
  { id: 8, title: "Mehdi Hasan Tailor", metric: "Brand Story", type: "instagram", embedUrl: "https://www.instagram.com/reel/DSuZqcJD-4d/embed" },
  { id: 10, title: "Social Motion", metric: "Digital Campaign", type: "instagram", embedUrl: "https://www.instagram.com/reel/DRTyKglkXLo/embed" },
  { id: 11, title: "Golden Restaurant", metric: "Hospitality PR", type: "instagram", embedUrl: "https://www.instagram.com/reel/DTUt3okCIXz/embed" },
  { id: 12, title: "Iceberg Melting", metric: "Visual Identity", type: "instagram", embedUrl: "https://www.instagram.com/reel/DRl03kgkTku/embed" },
  { id: 13, title: "Care IAS", metric: "Educational Growth", type: "instagram", embedUrl: "https://www.instagram.com/reel/DTDLdfsktNo/embed" },
];

const VideoCard = ({ campaign }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-white overflow-hidden"
    >
      {/* Decorative Brand Line (Hover) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-[3px] bg-red-600 z-30 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.4, ease: "circOut" }}
      />

      <div className="relative aspect-[9/16] w-full overflow-hidden bg-gray-50 shadow-sm border border-gray-100">
        <iframe
          src={campaign.embedUrl}
          className="w-full h-full scale-[1.01]"
          frameBorder="0"
          scrolling="no"
          allowTransparency="true"
          allow="encrypted-media"
        />
        
        {/* Minimalist Overlay - Visible on Hover */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none flex flex-col justify-end p-8">
            <div className="bg-white p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] uppercase tracking-[0.3em] text-red-600 font-bold mb-2">
                    {campaign.metric}
                </p>
                <h4 className="text-black text-lg font-light tracking-tight leading-tight">
                    {campaign.title}
                </h4>
            </div>
        </div>
      </div>

      {/* Mobile/Static Info (Always visible below card for better UX) */}
      <div className="mt-4 mb-8 md:group-hover:opacity-0 transition-opacity duration-300 px-2">
        <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400 font-medium mb-1">
          {campaign.metric}
        </p>
        <h4 className="text-black text-sm font-medium tracking-wide italic-serif-support">
          {campaign.title}
        </h4>
      </div>
    </motion.div>
  );
};

const VideoGrid = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-light tracking-tighter text-black mb-4">
                Selected <span className="italic font-serif">Works</span>
            </h2>
            <div className="h-[1px] w-12 bg-red-600 mx-auto md:mx-0" />
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-2 md:gap-y-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {campaigns.map((campaign) => (
            <VideoCard key={campaign.id} campaign={campaign} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoGrid;