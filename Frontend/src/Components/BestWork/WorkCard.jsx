import React from 'react';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard'; // Assuming WorkCard is in the same directory

const projects = [
  {
    id: 1,
    title: "The Midnight Circuit",
    result: "+240% Engagement",
    videoSrc: "https://cdn.pixabay.com/video/2020/09/25/51111-464303423_large.mp4"
  },
  {
    id: 2,
    title: "Aura Skincare",
    result: "1.2M New Users",
    videoSrc: "https://cdn.pixabay.com/video/2021/09/10/88132-603704381_large.mp4"
  },
  {
    id: 3,
    title: "Apex Robotics",
    result: "Sold Out in 4h",
    videoSrc: "https://cdn.pixabay.com/video/2022/01/18/104694-666355416_large.mp4"
  },
  {
    id: 4,
    title: "Hyperion Watch Co.",
    result: "+180% ROAS",
    videoSrc: "https://cdn.pixabay.com/video/2023/10/24/186358-877775586_large.mp4"
  }
];

const WorkSection = () => {
  // Container variants to stagger the WorkCard entrances
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header logic integrated or separate */}
        <div className="mb-16">
          <div className="h-1 w-12 bg-[#C61407] mb-6" />
          <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Selected <span className="text-[#C61407]">Works</span>
          </h2>
        </div>

        {/* The Grid Container */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <div key={project.id}>
              <WorkCard 
                title={project.title}
                result={project.result}
                videoSrc={project.videoSrc}
              />
            </div>
          ))}
        </motion.div>
        
        {/* Optional: Call to Action */}
        <div className="mt-20 text-center">
          <button className="text-white border border-white/20 px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 rounded-full">
            Explore All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;