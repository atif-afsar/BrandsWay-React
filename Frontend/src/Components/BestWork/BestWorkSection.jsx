import React from 'react';
import { motion } from 'framer-motion';

// Importing the components built in previous steps
import SectionHeader from './SectionHeader';
import FeaturedCaseStudy from './FeaturedCaseStudy';
import VideoGrid from './VideoGrid';

/**
 * BestWorkSection
 * This acts as the parent container, orchestrating the 
 * layout and spacing for a premium portfolio experience.
 */
const BestWorkSection = () => {
  return (
    <main className="bg-black min-h-screen selection:bg-[#C61407] selection:text-white">
      
      {/* 1. Introduction & Title Area */}
      <section className="pt-20">
        <SectionHeader />
      </section>

      {/* 2. Primary Highlight - The Hero Project */}
      <div className="container mx-auto px-4 -mt-10 mb-10 md:mb-20">
        <FeaturedCaseStudy 
          title="The Kinetic Identity"
          description="A multi-sensory digital campaign for a global automotive leader, focusing on the intersection of AI and human emotion."
          metrics={{
            reach: "22.5M",
            engagement: "14.2%",
            platform: "Instagram"
          }}
          isInstagramEmbed={true}
          instagramReelUrl="https://www.instagram.com/reel/DS7PqruCDn7/"
          instagramLink="https://www.instagram.com/thebrandsway/"
        />
      </div>

      {/* 3. The Grid - Supporting Body of Work */}
      <section className="relative pb-32">
        <div className="container mx-auto px-4">
          {/* Subtle Label for the Grid Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12 px-6"
          >
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-white/40 uppercase tracking-[0.3em] text-[10px] font-medium">
              Browse More Projects
            </span>
          </motion.div>

          <VideoGrid />
        </div>
      </section>

      {/* 4. Footer Call to Action (Optional Addition) */}
      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-24 border-t border-white/5 text-center"
      >
        <h3 className="text-white text-3xl md:text-5xl font-medium font-black uppercase tracking-tighter mb-8">
          Have a Project <span className="text-[#C61407]">In Mind?</span>
        </h3>
        <motion.a href='tel:+917302988037' className="bg-transparent border border-white/20 hover:border-[#C61407] text-white px-10 py-4 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-500 hover:shadow-[0_0_30px_rgba(198,20,7,0.2)]">
          Let's Talk
        </motion.a>
      </motion.footer>
      
    </main>
  );
};

export default BestWorkSection;