import React from "react";

export default function PortfolioCard({ project, onClick, isFeatured }) {
  return (
    <article
      className={`group cursor-pointer flex flex-col ${
        isFeatured ? "md:col-span-2 lg:col-span-2" : "col-span-1"
      }`}
      onClick={() => onClick && onClick(project)}
    >
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-200/80 aspect-[16/10] shadow-sm">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />

        <div className="absolute top-4 left-4 z-20 bg-black/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10">
          {project.category}
        </div>

        <div className="absolute bottom-4 right-4 z-20 inline-flex items-center gap-1.5 bg-white/95 text-black text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg opacity-90 group-hover:opacity-100 group-hover:bg-[#C61407] group-hover:text-white transition-all duration-300 transform group-hover:translate-x-0 translate-x-1">
          <span>View Project</span>
          <span className="text-sm">↗</span>
        </div>

        <img
          src={project.coverImage || project.visual}
          alt={`Preview of ${project.title}`}
          loading="lazy"
          className="w-full h-full object-cover object-top transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
        />
      </div>

      <div className="pt-4 flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-[#C61407] transition-colors">
            {project.title}
          </h3>
          <span className="text-xs text-gray-400 font-mono">{project.year || "2025"}</span>
        </div>
        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 leading-relaxed">
          {project.description}
        </p>
      </div>
    </article>
  );
}
