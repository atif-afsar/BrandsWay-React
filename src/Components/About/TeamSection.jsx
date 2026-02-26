import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const team = [
  { name: "Elena Rodriguez", role: "Founder & Managing Director", img: "/team/member1.png" },
  { name: "Marcus Chen", role: "Head of Creative Strategy", img: "/team/member2.png" },
  { name: "Sarah Jenkins", role: "Director of Communications", img: "/team/member3.png" },
  { name: "David Thorne", role: "Lead Growth Analyst", img: "/team/member4.png" },
  { name: "Sophia Malik", role: "Brand Strategist", img: "/team/member5.png" },
  { name: "Liam Scott", role: "Media Planner", img: "/team/member6.png" },
  { name: "Julianne Moore", role: "Public Relations Lead", img: "/team/member7.png" },
  { name: "Aaron Vane", role: "Content Director", img: "/team/member8.png" },
  { name: "Isabella Cruz", role: "Digital Marketing Specialist", img: "/team/member9.png" },
  { name: "Kevin Zhang", role: "UX/UI Lead", img: "/team/member10.png" },
  { name: "Rachel Adams", role: "Account Executive", img: "/team/member11.png" },
  { name: "Rachel Adams", role: "Account Executive", img: "/team/member12.png" },
];

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive items per page logic
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    const handleResize = () => setItemsPerPage(getItemsPerPage());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(team.length / itemsPerPage);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  // Auto-swipe every 2 seconds unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 2500); // 2.5s for a slightly smoother pace
    return () => clearInterval(interval);
  }, [next, isHovered]);

  const visible = team.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section 
      className="bg-[#f8f9fa] py-24 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Premium Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#C61407] font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
            >
              The Collective
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter leading-tight">
              The Minds Behind <br /> <span className="text-gray-400">BrandsWay</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed">
            A high-performance team of disruptors, creators, and strategists dedicated to your brand's evolution.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative min-h-[480px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${page}-${itemsPerPage}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {visible.map((member, i) => (
                <motion.div 
                    key={member.name} 
                    whileHover={{ y: -8 }}
                    className="group bg-white p-4 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-500"
                >
                  {/* Image with Red Accent Overlay */}
                  <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C61407]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text Content */}
                  <div className="mt-6 px-2 pb-2 text-center">
                    <h3 className="font-bold text-gray-900 text-xl tracking-tight leading-none">
                      {member.name}
                    </h3>
                    <p className="text-[#C61407] text-sm mt-2 font-medium uppercase tracking-widest">
                      {member.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Sophisticated Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-20 gap-8">
            {/* Dots with Page Progress */}
            <div className="flex gap-3 order-2 sm:order-1">
                {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                    page === i ? "w-12 bg-[#C61407]" : "w-4 bg-gray-200 hover:bg-gray-400"
                    }`}
                />
                ))}
            </div>

            {/* Nav Buttons */}
            <div className="flex gap-4 order-1 sm:order-2">
                <button
                    onClick={prev}
                    className="group w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:border-black transition-all duration-300"
                >
                    <ChevronLeft className="group-hover:text-white transition-colors" />
                </button>
                <button
                    onClick={next}
                    className="group w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#C61407] hover:border-[#C61407] transition-all duration-300"
                >
                    <ChevronRight className="group-hover:text-white transition-colors" />
                </button>
            </div>
        </div>
      </div>
    </section>
  );
}