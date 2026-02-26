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
  { name: "Michael Ross", role: "Creative Director", img: "/team/member12.png" },
];

export default function TeamSection() {
  const [page, setPage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // Responsive logic updated for clean breakpoints
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(4);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(team.length / itemsPerPage);

  const next = useCallback(() => {
    setPage((p) => (p + 1) % totalPages);
  }, [totalPages]);

  const prev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  // Auto-swipe engine (Every 2.5s)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      next();
    }, 2500);
    return () => clearInterval(interval);
  }, [next, isHovered, page]);

  // Ensure page index doesn't go out of bounds when resizing
  useEffect(() => {
    if (page >= totalPages) setPage(0);
  }, [itemsPerPage, totalPages, page]);

  const visible = team.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  return (
    <section 
      className="bg-[#f8f9fa] py-20 px-6 md:px-16 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#C61407] font-bold tracking-[0.2em] text-xs uppercase mb-4 block"
            >
              The Collective
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tighter leading-tight">
              The Minds Behind <br /> <span className="text-[#c61407]">BrandsWay</span>
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-lg font-light leading-relaxed mx-auto md:mx-0">
            A high-performance team of disruptors and creators dedicated to your brand's evolution.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${page}-${itemsPerPage}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {visible.map((member) => (
                <motion.div 
                    key={member.name} 
                    whileHover={{ y: -10 }}
                    className="group bg-white p-5 rounded-[2rem] shadow-sm border border-gray-100 transition-all duration-300"
                >
                  <div className="relative rounded-[1.5rem] overflow-hidden aspect-[4/5] bg-gray-100">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {/* Subtle red tint on hover only, no more gray default */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#C61407]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="mt-6 px-1 text-center">
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

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between mt-12 md:mt-20 gap-8">
            {/* Nav Buttons (Hidden on very small screens for cleaner mobile UI, or kept for accessibility) */}
            <div className="flex gap-4 order-1">
                <button
                    onClick={prev}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                    aria-label="Previous page"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={next}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-gray-200 flex items-center justify-center bg-white hover:bg-[#C61407] hover:border-[#C61407] hover:text-white transition-all shadow-sm"
                    aria-label="Next page"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2.5 order-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                    page === i ? "w-10 bg-[#C61407]" : "w-3 bg-gray-200 hover:bg-gray-400"
                    }`}
                />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}