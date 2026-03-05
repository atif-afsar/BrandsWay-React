import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../../utils/blogData';

const getCategories = () => {
  const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];
  return ["All Articles", ...uniqueCategories.sort()];
};

const BlogPage = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const categories = useMemo(() => getCategories(), []);

  const filteredPosts = activeCategory === "All Articles" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="bg-[#050505] min-h-screen selection:bg-[#C61407] selection:text-white overflow-x-hidden">
      {/* Background Layering */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] -left-[10%] w-[70%] h-[70%] bg-[#C61407]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] -right-[10%] w-[50%] h-[50%] bg-[#C61407]/3 blur-[100px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 md:py-32 relative z-10">
        
        {/* Header Section */}
        <header className="mb-12 md:mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-[1px] bg-[#C61407]" />
              <span className="text-[#C61407] text-[10px] font-black uppercase tracking-[0.4em]">
                Insight & Strategy
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl sm:text-7xl md:text-8xl font-medium text-white tracking-tighter leading-[0.9]"
            >
              The <br className="hidden md:block" /> 
              Journal<span className="text-[#C61407]">.</span>
            </motion.h1>
          </div>

          {/* Filter Bar - Responsive Scrollable on Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-nowrap overflow-x-auto lg:flex-wrap gap-2 pb-4 lg:pb-0 scrollbar-hide no-scrollbar"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap px-6 py-2.5 rounded-full text-[10px] font-bold transition-all duration-500 uppercase tracking-widest border ${
                  activeCategory === cat 
                  ? "bg-[#C61407] border-[#C61407] text-white shadow-[0_0_20px_rgba(198,20,7,0.3)]" 
                  : "text-gray-500 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </header>

        {/* Article Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-20 md:gap-y-32"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post, index) => {
              const isFeatured = index === 0 && activeCategory === "All Articles";
              
              // Responsive Grid Spans: Featured spans full width on mobile/tablet, 8 cols on desktop
              const colSpan = isFeatured ? "lg:col-span-8 md:col-span-2" : "lg:col-span-4 md:col-span-1";
              
              return (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className={`group cursor-pointer flex flex-col ${colSpan}`}
                >
                  {/* Image wrapper with high-end transition */}
                  <div className={`relative w-full overflow-hidden rounded-3xl mb-8 bg-[#0a0a0a] border border-white/5 transition-all duration-700 
                    ${isFeatured ? 'aspect-[16/10] md:aspect-[16/8]' : 'aspect-[4/5] md:aspect-square'}`}>
                    
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover scale-105 group-hover:scale-100 group-hover:grayscale-0 grayscale-[0.3] transition-all duration-[1.5s] ease-out" 
                    />

                    {/* Glass Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                    
                    {/* Floating Info */}
                    <div className="absolute top-6 left-6 z-20 flex gap-2">
                      <span className="px-4 py-1.5 bg-black/60 backdrop-blur-xl border border-white/10 text-[9px] text-white font-black uppercase tracking-widest rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {post.featured && (
                      <div className="absolute top-6 right-6 z-20 text-[#C61407] drop-shadow-[0_0_10px_rgba(198,20,7,0.5)]">
                        <Star size={20} fill="currentColor" />
                      </div>
                    )}

                    {/* Read Post Button Reveal */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                       <span className="bg-white text-black px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest">
                         Read Insight
                       </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 text-[#C61407] text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} strokeWidth={3} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-white leading-[1.1] mb-5 group-hover:text-gray-300 transition-colors duration-300 
                    ${isFeatured ? 'text-4xl md:text-5xl lg:text-6xl tracking-tighter' : 'text-2xl md:text-3xl tracking-tight'}`}>
                    {post.title}
                  </h3>

                  <p className="text-gray-500 font-light text-base leading-relaxed line-clamp-2 mb-8 max-w-xl">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#C61407] to-[#800000] overflow-hidden border border-white/10">
                        {post.author?.avatar && (
                          <img src={post.author.avatar} alt="" className="w-full h-full object-cover" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] text-white font-bold tracking-wide">{post.author?.name || "Editorial"}</span>
                        <span className="text-[9px] text-gray-500 uppercase tracking-tighter">Strategist</span>
                      </div>
                    </div>
                    
                    <motion.div 
                      className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-[#C61407] group-hover:border-[#C61407] transition-all duration-500"
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;