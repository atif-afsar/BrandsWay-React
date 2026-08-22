import React from "react";
import { telHref } from "../../seo/business.js";

export default function PortfolioCTA() {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-20 py-32 md:py-44 flex flex-col items-center text-center bg-[#fdf8f8] font-['Geist',_sans-serif]">
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-[0.25em] mb-8">
        HAVE A PROJECT IN MIND?
      </span>

      <h2 className="font-[#Syne',_sans-serif] text-5xl sm:text-7xl md:text-8xl lg:text-[96px] text-black leading-[0.95] tracking-tighter mb-8 max-w-5xl font-light">
        Let's build something <br />
        <span className="font-bold text-[#C61407]">worth remembering.</span>
      </h2>

      <p className="text-gray-600 text-base md:text-lg max-w-md mb-12 leading-relaxed font-normal">
        Have a website, campaign or creative project in mind? Let's talk.
      </p>

      <div>
        <a
          href={telHref()}
          className="group inline-flex items-center gap-2 border-b-2 border-black pb-1.5 transition-colors hover:border-[#C61407]"
        >
          <span className="text-base md:text-lg font-bold uppercase tracking-wider text-black group-hover:text-[#C61407] transition-colors">
            Book a Discovery Call
          </span>
          <span className="material-symbols-outlined text-xl text-black group-hover:text-[#C61407] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            arrow_outward
          </span>
        </a>
      </div>
    </section>
  );
}
