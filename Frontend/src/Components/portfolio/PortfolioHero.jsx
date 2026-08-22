import React from "react";

export default function PortfolioHero() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 pt-32 pb-24 md:pt-44 md:pb-36 flex flex-col justify-center bg-[#fdf8f8] border-b border-black/10 font-['Geist',_sans-serif]">
      <div className="flex flex-col max-w-6xl">
        <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-8">
          THE BRANDSWAY / SELECTED WORK
        </span>

        <h1 className="font-['Syne',_sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[104px] text-black leading-[0.92] tracking-tight font-light mb-8">
          We make brands <br />
          <span className="font-bold text-[#C61407]">impossible to ignore.</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl max-w-lg leading-relaxed font-normal">
          Websites, visual stories and content designed to make brands matter.
        </p>
      </div>
    </section>
  );
}
