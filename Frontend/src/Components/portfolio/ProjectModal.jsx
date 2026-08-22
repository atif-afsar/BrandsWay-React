import React, { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 font-['Geist',_sans-serif]">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-sm"
      />

      <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col z-10 border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Close project modal"
        >
          ✕
        </button>

        <div className="overflow-y-auto p-6 sm:p-10 flex flex-col gap-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-[#C61407]/10 text-[#C61407] text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full">
                {project.category || project.categoryLabel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-black tracking-tight">
              {project.title}
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
            <img
              src={project.coverImage || project.visual}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-xs uppercase tracking-widest font-bold text-gray-400">
              Overview
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.url && (
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C61407] hover:bg-red-800 text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-md shadow-red-200"
              >
                <span>Visit Website ↗</span>
              </a>

              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-xs font-semibold uppercase tracking-widest"
              >
                Close Preview
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
