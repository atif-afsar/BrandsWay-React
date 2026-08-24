import React, { useState, useRef, useEffect } from "react";

export default function ReelMarqueeItem({ reel }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px 0px", threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!videoRef.current || !reel.videoUrl) return;

    if (isInView && isPlaying) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      videoRef.current.pause();
    }
  }, [isInView, isPlaying, reel.videoUrl]);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div ref={containerRef} className="relative flex-shrink-0 w-60 sm:w-72 md:w-80 aspect-[9/16] rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group select-none">
      
      {/* Minimal Loader Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 z-20 bg-gray-900 animate-pulse flex flex-col items-center justify-center gap-3 p-4">
          <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-[#C61407] animate-spin" />
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
            Loading Reel...
          </span>
        </div>
      )}

      {/* Direct Native Video Element */}
      <video
        ref={videoRef}
        src={isInView ? reel.videoUrl : undefined}
        preload={isInView ? "metadata" : "none"}
        muted={isMuted}
        loop
        playsInline
        onLoadedData={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        onClick={togglePlay}
        className={`w-full h-full object-cover transition-opacity duration-700 cursor-pointer ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Video Overlay Info & Controls */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-5 z-10 opacity-90 group-hover:opacity-100 transition-opacity">
        
        {/* Top Badges */}
        <div className="flex items-center justify-between w-full pointer-events-auto">
          <span className="bg-black/60 backdrop-blur-md text-white text-[9px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-white/10">
            {reel.categoryLabel || "REEL"}
          </span>

          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-[#C61407] transition-colors"
            title={isMuted ? "Unmute" : "Mute"}
          >
            <span className="material-symbols-outlined text-sm">
              {isMuted ? "volume_off" : "volume_up"}
            </span>
          </button>
        </div>

        {/* Bottom Title & Link */}
        <div className="flex flex-col gap-1 pointer-events-auto">
          <h4 className="font-['Syne',_sans-serif] text-sm md:text-base font-bold text-white uppercase leading-snug line-clamp-2">
            {reel.title}
          </h4>
          <a
            href={reel.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C61407] hover:text-white transition-colors uppercase tracking-wider mt-0.5"
          >
            <span>Watch on Instagram</span>
            <span className="material-symbols-outlined text-xs">arrow_outward</span>
          </a>
        </div>

      </div>
    </div>
  );
}

