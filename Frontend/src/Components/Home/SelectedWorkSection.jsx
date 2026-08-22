import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { webProjects } from "../../data/webProjects";
import { graphics } from "../../data/graphics";
import { reels } from "../../data/reels";
import WebBrowserCard from "../portfolio/WebBrowserCard";

export default function SelectedWorkSection({ id }) {
  const featuredWebsite = webProjects[0]; // Velisqa
  const featuredGraphic = graphics[0]; // Crisp Fry
  const featuredReel = reels[0]; // Kinetic Reel

  return (
    <section id={id} className="w-full bg-[#fdf8f8] py-28 px-6 sm:px-12 lg:px-20 font-['Geist',_sans-serif] relative border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C61407] block mb-4"
            >
              SELECTED WORK
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['Syne',_sans-serif] text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-black leading-[1.05]"
            >
              A few things we've <span className="text-[#C61407]">built.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed"
          >
            Digital experiences, visual stories and content crafted for ambitious brands.
          </motion.p>
        </div>

        {/* 3 Selected Pieces: 1 Website, 1 Graphic, 1 Reel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Piece 1: Website */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group flex flex-col"
          >
            <WebBrowserCard project={featuredWebsite} className="mb-5" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-[#C61407] uppercase tracking-wider">{featuredWebsite.categoryLabel}</span>
              <h3 className="font-['Syne',_sans-serif] text-2xl font-bold uppercase text-black group-hover:text-[#C61407] transition-colors">
                <Link to="/portfolio">{featuredWebsite.title}</Link>
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                {featuredWebsite.description}
              </p>
            </div>
          </motion.div>

          {/* Piece 2: Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group cursor-pointer flex flex-col"
          >
            <Link to="/portfolio" className="block relative overflow-hidden rounded-2xl bg-[#0f1115] border border-black/10 aspect-[4/5] mb-5 shadow-md group-hover:shadow-xl transition-all duration-500">
              <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md text-white text-[10px] uppercase font-mono font-semibold tracking-widest px-3 py-1 rounded">
                02 / GRAPHIC
              </div>
              <img
                src={featuredGraphic.image}
                alt={featuredGraphic.title}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-[1.02] transition-transform duration-500 ease-out"
              />
            </Link>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">{featuredGraphic.categoryLabel}</span>
              <h3 className="font-['Syne',_sans-serif] text-2xl font-bold uppercase text-black group-hover:text-[#C61407] transition-colors">
                <Link to="/portfolio">{featuredGraphic.title}</Link>
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                {featuredGraphic.description}
              </p>
            </div>
          </motion.div>

          {/* Piece 3: Instagram Reel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group flex flex-col"
          >
            <div className="relative overflow-hidden rounded-xl bg-black border border-black/5 aspect-[4/3] mb-5">
              <iframe
                src={featuredReel.embedUrl}
                title={featuredReel.title}
                className="w-[106%] h-[152%] -mt-[16%] -ml-[3%] border-0 scale-[1.15] origin-center"
                allowFullScreen
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-[#C61407] uppercase tracking-wider">{featuredReel.categoryLabel}</span>
              <h3 className="font-['Syne',_sans-serif] text-2xl font-bold uppercase text-black group-hover:text-[#C61407] transition-colors">
                <a href={featuredReel.instagramUrl} target="_blank" rel="noopener noreferrer">{featuredReel.title}</a>
              </h3>
              <a href={featuredReel.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-black uppercase flex items-center gap-1 group-hover:text-[#C61407] transition-colors mt-1">
                <span>WATCH ON INSTAGRAM</span>
                <span className="material-symbols-outlined text-xs">arrow_outward</span>
              </a>
            </div>
          </motion.div>

        </div>

        {/* Bottom CTA to Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 md:mt-24 text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold uppercase tracking-wider text-black hover:text-[#C61407] hover:border-[#C61407] transition-all group"
          >
            <span>Explore Portfolio</span>
            <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              arrow_outward
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
