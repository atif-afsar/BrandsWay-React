import React from "react";
import { Link } from "react-router-dom";
import { reels } from "../../data/reels";
import ReelMarqueeItem from "./ReelMarqueeItem";

export default function ReelMarqueeSection() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeReels = [...reels, ...reels];

  return (
    <section className="w-full bg-black text-white py-28 overflow-hidden relative font-['Geist',_sans-serif] border-t border-white/10">
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="text-xs font-mono text-[#C61407] uppercase tracking-[0.25em] block mb-3 font-semibold">
            CREATIVE MOTION / REELS
          </span>
          <h2 className="font-['Syne',_sans-serif] text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.05]">
            Stories crafted for <span className="font-bold text-[#C61407]">impact.</span>
          </h2>
        </div>

        <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
          Short-form commercial reels, high-converting motion content, and visual brand stories.
        </p>
      </div>

      {/* Infinite Marquee Track Container */}
      <div className="w-full overflow-hidden py-4">
        <div className="flex gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused] w-max">
          {marqueeReels.map((reel, idx) => (
            <ReelMarqueeItem key={`${reel.id}-${idx}`} reel={reel} />
          ))}
        </div>
      </div>

      {/* Footer Explore Link */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mt-16 flex justify-center">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 border-b-2 border-white pb-1 text-sm font-bold uppercase tracking-wider text-white hover:text-[#C61407] hover:border-[#C61407] transition-all group"
        >
          <span>Explore All Reels & Work</span>
          <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            arrow_outward
          </span>
        </Link>
      </div>

    </section>
  );
}
