import React from 'react';

const icons = [
  { 
    name: "Webflow", 
    color: "hover:text-[#4353FF]", 
    path: <path d="M27 1L19 19l-5-12-5 12L1 1h5l3 8 4-9 4 9 3-8h4z" fill="currentColor"/> 
  },
  { 
    name: "WordPress", 
    color: "hover:text-[#21759B]", 
    path: <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm0 1.3c2.4 0 4.59.91 6.24 2.4L2.4 16.24A8.7 8.7 0 011.3 10 8.7 8.7 0 0110 1.3zm0 17.4a8.7 8.7 0 01-6.24-2.4L17.6 3.76A8.7 8.7 0 0118.7 10 8.7 8.7 0 0110 18.7z" fill="currentColor"/> 
  },
  { 
    name: "Laravel", 
    color: "hover:text-[#F9322C]", 
    path: <path d="M38 8.5v8.5l-7 4v8l-14 8.5-15-8.5V6L17 .5l12 7L38 4v4.5zM9 30l9 5.5v-7L9 23v7zm10 5.5L28 30v-7l-9 5.5v7zM19 22l9-5-9-5.5L10 17l9 5zm-11-6L1 23v-8.5L8 10v6zm22-6v6l7-4V7.5l-7 2.5z" fill="currentColor"/> 
  },
  { 
    name: "Shopify", 
    color: "hover:text-[#95BF47]", 
    path: <path d="M25.2 4.4c-.6-.4-1.3-.4-1.9 0L4.5 16.2c-.6.4-.9 1-.9 1.7v16.2c0 .7.3 1.3.9 1.7.6.4 1.3.4 1.9 0l18.8-11.8c.6-.4.9-1 .9-1.7V6.1c0-.7-.3-1.3-.9-1.7z" fill="currentColor"/> 
  },
  { 
    name: "React", 
    color: "hover:text-[#61DAFB]", 
    path: <path d="M20 10.5c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5 7.5-3.4 7.5-7.5-3.4-7.5-7.5-7.5zm0 13c-3 0-5.5-2.5-5.5-5.5s2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5z" fill="currentColor"/> 
  }
];

const Marquee = () => {
  return (
    <div className="w-full bg-white py-6 border-y border-gray-100 overflow-hidden">
      <div className="relative flex items-center">
        {/* The Marquee Container */}
        <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
          {/* First Set of Icons */}
          {icons.map((icon, index) => (
            <div 
              key={index} 
              className={`flex items-center gap-4 text-gray-400 transition-all duration-300 ${icon.color} group cursor-default`}
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
                {icon.path}
              </svg>
              <span className="text-xl font-bold tracking-tighter uppercase">{icon.name}</span>
            </div>
          ))}

          {/* Duplicated Set of Icons for seamless looping */}
          {icons.map((icon, index) => (
            <div 
              key={`dup-${index}`} 
              className={`flex items-center gap-4 text-gray-400 transition-all duration-300 ${icon.color} group cursor-default`}
            >
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-current">
                {icon.path}
              </svg>
              <span className="text-xl font-bold tracking-tighter uppercase">{icon.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS for the animation loop */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        /* Optional: Pause on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Marquee;