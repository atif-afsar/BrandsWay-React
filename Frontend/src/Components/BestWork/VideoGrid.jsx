import React from 'react';
import { motion } from 'framer-motion';

const campaigns = [
  { id: 1, title: "Velocity Racing", metric: "2.4M Views", video: "https://cdn.pixabay.com/video/2020/09/25/51111-464303423_large.mp4" },
  { id: 2, title: "Ethereal Fragrance", metric: "840K Reach", video: "https://cdn.pixabay.com/video/2021/09/10/88132-603704381_large.mp4" },
  { id: 3, title: "Urban Pulse", metric: "1.1M Engagement", video: "https://cdn.pixabay.com/video/2022/01/18/104694-666355416_large.mp4" },
  { id: 4, title: "Arctic Tech", metric: "3.2M Impressions", video: "https://cdn.pixabay.com/video/2023/10/24/186358-877775586_large.mp4" },
  { id: 5, title: "Lunar Odyssey", metric: "500K Shares", video: "https://cdn.pixabay.com/video/2021/04/12/70868-537443834_large.mp4" },
  { id: 6, title: "Prime Aesthetics", metric: "900K Views", video: "https://cdn.pixabay.com/video/2022/05/17/117215-710899882_large.mp4" },
];

const VideoCard = ({ campaign, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className="group relative bg-[#0A0A0A] rounded-xl overflow-hidden border border-white/5 cursor-pointer"
    >
      {/* Video Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {/* Hover Border Glow - Red Accent */}
        <div className="absolute inset-0 z-20 border-0 group-hover:border-2 border-[#C61407] transition-all duration-300 rounded-xl pointer-events-none shadow-[inset_0_0_20px_rgba(198,20,7,0.3)] opacity-0 group-hover:opacity-100" />
        
        <motion.video
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          src={campaign.video}
          muted
          loop
          playsInline
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => {
            e.target.pause();
            e.target.currentTime = 0;
          }}
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
        />

        {/* Bottom Overlay Info */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 bg-gradient-to-t from-black via-black/40 to-transparent">
          <p className="text-[#C61407] text-xs font-bold uppercase tracking-widest mb-1">
            {campaign.metric}
          </p>
          <h4 className="text-white text-xl font-medium font-black uppercase tracking-tighter">
            {campaign.title}
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

const VideoGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Creates the sequential entry effect
      },
    },
  };

  return (
    <section className="bg-black py-20 px-6">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {campaigns.map((campaign, index) => (
          <VideoCard key={campaign.id} campaign={campaign} index={index} />
        ))}
      </motion.div>
    </section>
  );
};

export default VideoGrid;