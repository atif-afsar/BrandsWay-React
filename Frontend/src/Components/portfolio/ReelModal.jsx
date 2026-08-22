import React, { useEffect } from "react";

export default function ReelModal({ reel, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (reel) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reel, onClose]);

  if (!reel) return null;

  // Extract Instagram Reel Embed URL
  const embedUrl = reel.embedUrl || (reel.reelId ? `https://www.instagram.com/reel/${reel.reelId}/embed/` : null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-['Geist',_sans-serif]">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md"
      />

      {/* Modal Container */}
      <div className="relative bg-black rounded-3xl overflow-hidden shadow-2xl max-w-md w-full flex flex-col z-10 border border-white/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-colors"
          aria-label="Close Reel Modal"
        >
          ✕
        </button>

        {/* Header */}
        <div className="p-5 border-b border-white/10 flex flex-col pr-12">
          <span className="text-[10px] font-mono text-[#C61407] tracking-widest uppercase font-bold">
            {reel.categoryLabel || "INSTAGRAM REEL"}
          </span>
          <h3 className="font-['Syne',_sans-serif] text-lg font-bold uppercase tracking-tight text-white mt-1">
            {reel.title}
          </h3>
        </div>

        {/* Video Embed Player Body */}
        <div className="relative w-full aspect-[9/16] bg-black flex items-center justify-center overflow-hidden">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={reel.title}
              className="w-full h-full border-0"
              allowFullScreen
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          ) : (
            <div className="p-6 text-center text-gray-400">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover rounded-xl mb-4"
              />
            </div>
          )}
        </div>

        {/* Footer Link */}
        <div className="p-4 border-t border-white/10 flex items-center justify-between bg-black/90">
          <span className="text-xs text-gray-400">Watch on Instagram</span>
          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[#C61407] hover:bg-red-700 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors uppercase tracking-wider"
          >
            <span>Open App</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </div>
  );
}
