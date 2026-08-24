import React from "react";

export default function WebBrowserCard({ project, className = "" }) {
  // Extract clean domain hostname for browser address bar display
  let displayUrl = project.url;
  try {
    const parsed = new URL(project.url);
    displayUrl = parsed.hostname;
  } catch (e) {
    displayUrl = project.url;
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full rounded-2xl overflow-hidden bg-[#181a20] border border-black/15 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-black/30 group/browser ${className}`}
    >
      {/* Sleek Safari/Chrome Browser Header Bar */}
      <div className="w-full bg-[#20232b] px-4 py-2.5 flex items-center justify-between border-b border-white/10 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>

        {/* URL Pill */}
        <div className="flex items-center justify-center gap-1.5 bg-black/40 text-gray-300 text-[11px] font-mono px-4 py-1 rounded-full border border-white/10 max-w-[260px] truncate">
          <span className="material-symbols-outlined text-xs text-green-400">lock</span>
          <span>{displayUrl}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-400">
          <span className="material-symbols-outlined text-xs">open_in_new</span>
        </div>
      </div>

      {/* Crisp Image Showcase Frame */}
      <div className="w-full bg-[#0d0f12] overflow-hidden max-h-[480px] flex items-top justify-center">
        <img
          src={project.visual}
          alt={`Screenshot of ${project.title} website`}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover object-top transition-transform duration-700 ease-out group-hover/browser:scale-[1.015]"
        />
      </div>
    </a>
  );
}
