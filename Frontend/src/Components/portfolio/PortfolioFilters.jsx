import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_CATEGORIES } from "../../data/portfolioData";
import { webProjects } from "../../data/webProjects";
import { graphics } from "../../data/graphics";
import { reels } from "../../data/reels";

export default function PortfolioFilters({ activeCategory, onSelectCategory }) {
  const counts = {
    ALL: webProjects.length + graphics.length + reels.length,
    "WEB PROJECTS": webProjects.length,
    GRAPHICS: graphics.length,
    "INSTAGRAM REELS": reels.length,
  };

  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-5 bg-[#fdf8f8] border-b border-black/10 font-['Geist',_sans-serif]">
      <div
        role="tablist"
        aria-label="Portfolio Category Filters"
        className="flex items-center gap-8 sm:gap-12 md:gap-16 overflow-x-auto no-scrollbar max-w-full"
      >
        {PORTFOLIO_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat)}
              className={`relative text-xs sm:text-sm font-bold tracking-[0.18em] uppercase pb-2 transition-colors whitespace-nowrap flex items-center gap-2 ${
                isActive ? "text-[#C61407]" : "text-gray-400 hover:text-black"
              }`}
            >
              <span>{cat}</span>
              <span
                className={`text-[10px] font-mono font-medium ${
                  isActive ? "text-[#C61407]" : "text-gray-400"
                }`}
              >
                ({counts[cat] || 0})
              </span>

              {isActive && (
                <motion.span
                  layoutId="filterActiveLineRed"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C61407]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
