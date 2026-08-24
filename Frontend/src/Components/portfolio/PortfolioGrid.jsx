import React, { useState } from "react";
import { webProjects } from "../../data/webProjects";
import { graphics } from "../../data/graphics";
import { reels } from "../../data/reels";
import ReelModal from "./ReelModal";
import CleanReelCard from "./CleanReelCard";
import WebBrowserCard from "./WebBrowserCard";

export default function PortfolioGrid({ activeCategory }) {
  const [selectedReel, setSelectedReel] = useState(null);

  const showWeb = activeCategory === "ALL" || activeCategory === "WEB PROJECTS";
  const showGraphics = activeCategory === "ALL" || activeCategory === "GRAPHICS";
  const showReels = activeCategory === "ALL" || activeCategory === "INSTAGRAM REELS";

  return (
    <div className="w-full font-['Geist',_sans-serif] bg-[#fdf8f8] text-black">
      
      {/* Interactive Reel Modal Player */}
      <ReelModal reel={selectedReel} onClose={() => setSelectedReel(null)} />

      {/* ── 1. WEB PROJECTS SECTION ── */}
      {showWeb && (
        <section className="w-full px-6 sm:px-12 lg:px-20 pt-12 pb-24 border-b border-black/10">
          
          {/* Section Heading */}
          <div className="mb-16">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.25em] block mb-2">
              CATEGORY 01
            </span>
            <h2 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl text-black font-semibold tracking-tight uppercase">
              Web Projects
            </h2>
          </div>

          <div className="flex flex-col gap-24 md:gap-36">
            
            {/* 01 VELISQA — Full Width Featured */}
            {webProjects[0] && (
              <div className="group flex flex-col">
                <WebBrowserCard project={webProjects[0]} className="mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-xs font-mono text-gray-400 mb-2 block tracking-widest">
                      {webProjects[0].display} · {webProjects[0].categoryLabel}
                    </span>
                    <h3 className="font-['Syne',_sans-serif] text-4xl sm:text-6xl uppercase tracking-tight text-black font-bold group-hover:text-[#C61407] transition-colors mb-3">
                      <a href={webProjects[0].url} target="_blank" rel="noopener noreferrer">
                        {webProjects[0].title}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-base max-w-xl leading-relaxed mb-4">
                      {webProjects[0].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {webProjects[0].services.map((srv, i) => (
                        <span key={i} className="text-[10px] bg-black/5 text-gray-700 px-3 py-1 rounded font-mono uppercase font-medium">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={webProjects[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black group-hover:text-[#C61407] transition-colors uppercase border-b-2 border-black group-hover:border-[#C61407] pb-1 flex-shrink-0"
                  >
                    <span>{webProjects[0].ctaText}</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* 02 YASIR ALI CLASSES — Asymmetric (Visual Right) */}
            {webProjects[1] && (
              <div className="group grid grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="col-span-12 md:col-span-5 order-2 md:order-1 flex flex-col justify-center">
                  <span className="text-xs font-mono text-gray-400 mb-2 tracking-widest">
                    {webProjects[1].display} · {webProjects[1].categoryLabel}
                  </span>
                  <h3 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl uppercase tracking-tight text-black font-bold group-hover:text-[#C61407] transition-colors mb-4">
                    <a href={webProjects[1].url} target="_blank" rel="noopener noreferrer">
                      {webProjects[1].title}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {webProjects[1].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {webProjects[1].services.map((srv, i) => (
                      <span key={i} className="text-[10px] bg-black/5 text-gray-700 px-3 py-1 rounded font-mono uppercase font-medium">
                        {srv}
                      </span>
                    ))}
                  </div>
                  <a
                    href={webProjects[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black group-hover:text-[#C61407] transition-colors uppercase border-b-2 border-black group-hover:border-[#C61407] pb-1 w-fit"
                  >
                    <span>{webProjects[1].ctaText}</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
                <div className="col-span-12 md:col-span-7 order-1 md:order-2">
                  <WebBrowserCard project={webProjects[1]} />
                </div>
              </div>
            )}

            {/* 03 ISLAMIC MISSION SCHOOL — Reverse Composition (Visual Left) */}
            {webProjects[2] && (
              <div className="group grid grid-cols-12 gap-8 lg:gap-14 items-center">
                <div className="col-span-12 md:col-span-7">
                  <WebBrowserCard project={webProjects[2]} />
                </div>
                <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                  <span className="text-xs font-mono text-gray-400 mb-2 tracking-widest">
                    {webProjects[2].display} · {webProjects[2].categoryLabel}
                  </span>
                  <h3 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl uppercase tracking-tight text-black font-bold group-hover:text-[#C61407] transition-colors mb-4">
                    <a href={webProjects[2].url} target="_blank" rel="noopener noreferrer">
                      {webProjects[2].title}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {webProjects[2].description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {webProjects[2].services.map((srv, i) => (
                      <span key={i} className="text-[10px] bg-black/5 text-gray-700 px-3 py-1 rounded font-mono uppercase font-medium">
                        {srv}
                      </span>
                    ))}
                  </div>
                  <a
                    href={webProjects[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black group-hover:text-[#C61407] transition-colors uppercase border-b-2 border-black group-hover:border-[#C61407] pb-1 w-fit"
                  >
                    <span>{webProjects[2].ctaText}</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* 04 MEHDI HASAN TAILORS — Wide Large */}
            {webProjects[3] && (
              <div className="group flex flex-col">
                <WebBrowserCard project={webProjects[3]} className="mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-xs font-mono text-gray-400 mb-2 block tracking-widest">
                      {webProjects[3].display} · {webProjects[3].categoryLabel}
                    </span>
                    <h3 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl uppercase tracking-tight text-black font-bold group-hover:text-[#C61407] transition-colors mb-3">
                      <a href={webProjects[3].url} target="_blank" rel="noopener noreferrer">
                        {webProjects[3].title}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-base max-w-xl leading-relaxed mb-4">
                      {webProjects[3].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {webProjects[3].services.map((srv, i) => (
                        <span key={i} className="text-[10px] bg-black/5 text-gray-700 px-3 py-1 rounded font-mono uppercase font-medium">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={webProjects[3].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black group-hover:text-[#C61407] transition-colors uppercase border-b-2 border-black group-hover:border-[#C61407] pb-1 flex-shrink-0"
                  >
                    <span>{webProjects[3].ctaText}</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* 05 EXPERTS TAX CONSULTANTS — Wide Final */}
            {webProjects[4] && (
              <div className="group flex flex-col">
                <WebBrowserCard project={webProjects[4]} className="mb-8" />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <span className="text-xs font-mono text-gray-400 mb-2 block tracking-widest">
                      {webProjects[4].display} · {webProjects[4].categoryLabel}
                    </span>
                    <h3 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl uppercase tracking-tight text-black font-bold group-hover:text-[#C61407] transition-colors mb-3">
                      <a href={webProjects[4].url} target="_blank" rel="noopener noreferrer">
                        {webProjects[4].title}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-base max-w-xl leading-relaxed mb-4">
                      {webProjects[4].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {webProjects[4].services.map((srv, i) => (
                        <span key={i} className="text-[10px] bg-black/5 text-gray-700 px-3 py-1 rounded font-mono uppercase font-medium">
                          {srv}
                        </span>
                      ))}
                    </div>
                  </div>
                  <a
                    href={webProjects[4].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-black group-hover:text-[#C61407] transition-colors uppercase border-b-2 border-black group-hover:border-[#C61407] pb-1 flex-shrink-0"
                  >
                    <span>{webProjects[4].ctaText}</span>
                    <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      arrow_outward
                    </span>
                  </a>
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* ── 2. GRAPHICS SECTION ── */}
      {showGraphics && (
        <section className="w-full px-6 sm:px-12 lg:px-20 pt-20 pb-28 border-b border-black/10">
          
          {/* Section Heading */}
          <div className="mb-16">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.25em] block mb-2">
              CATEGORY 02
            </span>
            <h2 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl text-black font-semibold tracking-tight uppercase mb-3">
              Graphics
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
              Visual systems, campaign creatives and digital artwork created for brands.
            </p>
          </div>

          {/* Asymmetric Editorial Masonry Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {graphics.map((item, i) => (
              <div
                key={item.id}
                className="group flex flex-col cursor-pointer"
              >
                <div className="overflow-hidden rounded-2xl bg-[#0f1115] mb-5 border border-black/10 shadow-md group-hover:shadow-xl transition-all duration-500 aspect-[4/5] flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <span className="text-[11px] font-mono text-[#C61407] uppercase tracking-widest block mb-1 font-semibold">
                  {item.categoryLabel}
                </span>
                <h3 className="font-['Syne',_sans-serif] text-xl font-bold uppercase text-black group-hover:text-[#C61407] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ── 3. INSTAGRAM REELS SECTION ── */}
      {showReels && (
        <section className="w-full px-6 sm:px-12 lg:px-20 pt-20 pb-28">
          
          {/* Section Heading */}
          <div className="mb-16">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-[0.25em] block mb-2">
              CATEGORY 03
            </span>
            <h2 className="font-['Syne',_sans-serif] text-3xl sm:text-5xl text-black font-semibold tracking-tight uppercase mb-3">
              Instagram Reels
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-md leading-relaxed">
              Short-form motion, campaign creative, and video stories built for maximum engagement.
            </p>
          </div>

          {/* 9:16 Pure Video Grid without Instagram Profile/Header */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {reels.map((reel) => (
              <CleanReelCard key={reel.id} reel={reel} />
            ))}
          </div>

        </section>
      )}

    </div>
  );
}
