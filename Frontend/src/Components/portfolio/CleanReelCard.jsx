import React, { useState, useRef } from "react";

export default function CleanReelCard({ reel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const embedUrl = reel.embedUrl || (reel.reelId ? `https://www.instagram.com/reel/${reel.reelId}/embed/` : null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex flex-col group">
      {/* 9:16 Pure Video Frame */}
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-black/10 shadow-md group-hover:shadow-2xl transition-all duration-500">
        
        {/* Minimal Loading Spinner */}
        {isLoading && reel.videoUrl && (
          <div className="absolute inset-0 z-20 bg-gray-900 animate-pulse flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-9 h-9 rounded-full border-2 border-white/20 border-t-[#C61407] animate-spin" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              Loading Video...
            </span>
          </div>
        )}

        {reel.videoUrl ? (
          <>
            <video
              ref={videoRef}
              src={reel.videoUrl}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onCanPlay={() => setIsLoading(false)}
              onLoadedData={() => setIsLoading(false)}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isLoading ? "opacity-0" : "opacity-100"
              }`}
            />
            {/* Audio Toggle Badge */}
            <button
              onClick={toggleMute}
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#C61407] transition-colors"
              title={isMuted ? "Unmute" : "Mute"}
            >
              <span className="material-symbols-outlined text-sm">
                {isMuted ? "volume_off" : "volume_up"}
              </span>
            </button>
          </>
        ) : embedUrl ? (
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-black flex items-center justify-center">
            <iframe
              src={embedUrl}
              title={reel.title || "Instagram Reel"}
              className="w-[106%] h-[152%] -mt-[16%] -ml-[3%] border-0 object-cover scale-[1.15] origin-center pointer-events-auto"
              allowFullScreen
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        ) : (
          <img
            src={reel.thumbnail}
            alt={reel.title}
            className="w-full h-full object-cover"
          />
        )}

      </div>

      {/* Clean Metadata below video */}
      <div className="mt-3 flex flex-col gap-1">
        <span className="text-[10px] font-mono text-[#C61407] uppercase tracking-widest font-semibold">
          {reel.categoryLabel}
        </span>
        <h3 className="font-['Syne',_sans-serif] text-lg font-bold uppercase text-black group-hover:text-[#C61407] transition-colors leading-tight">
          <a href={reel.instagramUrl} target="_blank" rel="noopener noreferrer">
            {reel.title}
          </a>
        </h3>
      </div>
    </div>
  );
}
