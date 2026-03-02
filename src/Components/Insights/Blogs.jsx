import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '../../utils/blogData';

// Dynamic category generator
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
    <div className="bg-[#050505] min-h-screen selection:bg-[#C61407] selection:text-white">
      {/* Background Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#C61407]/5 blur-[120px] rounded-full" />
      </div>

      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[#C61407] text-xs font-bold uppercase tracking-[0.3em] mb-4 block"
            >
              Our Journal
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-medium text-white tracking-tighter"
            >
              Perspectives<span className="text-[#C61407]">.</span>
            </motion.h1>
          </div>

          {/* Filter Bar */}
          <motion.div 
            layout
            className="flex flex-wrap gap-2 bg-white/5 p-1.5 backdrop-blur-xl rounded-full border border-white/10"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-500 uppercase tracking-wider ${
                  activeCategory === cat 
                  ? "bg-[#C61407] text-white shadow-lg shadow-red-900/40" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Article Grid - Layout Prop handles smooth reflow when filtering */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post, index) => {
              // High-end agency logic: First post spans more space, others vary
              const isFeatured = index === 0 && activeCategory === "All Articles";
              const colSpan = isFeatured ? "lg:col-span-8" : "lg:col-span-4";
              const aspectRatio = isFeatured ? "aspect-[16/8]" : (index % 3 === 0 ? "aspect-[4/5]" : "aspect-square");

              return (
                <motion.article
                  layout
                  key={post.id}
                  initial={{ opacity: 0, y: 40, scale: 0.96, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.23, 1, 0.32, 1],
                    delay: index * 0.05 
                  }}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className={`flex flex-col group cursor-pointer relative ${colSpan}`}
                >
                  {/* Image Container */}
                  <div className={`${aspectRatio} relative rounded-2xl overflow-hidden mb-8 bg-[#111] border border-white/5 group-hover:border-[#C61407]/30 transition-colors duration-700`}>
                    
                    {/* Secondary Image Preview (Carousel Effect) */}
                    {post.secondaryImage && (
                      <img 
                        src={post.secondaryImage} 
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out z-10" 
                        alt="preview"
                      />
                    )}

                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.2s] cubic-bezier(0.23, 1, 0.32, 1)" 
                    />

                    {/* Premium Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    
                    {/* Category Badge - Glass Effect */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 text-[10px] text-white font-bold uppercase tracking-[0.2em] rounded-full">
                        {post.category}
                      </span>
                    </div>

                    {/* Featured Star */}
                    {post.featured && (
                      <div className="absolute top-4 right-4 z-20 text-[#C61407]">
                        <Star size={18} fill="currentColor" />
                      </div>
                    )}
                  </div>

                  {/* Content Meta */}
                  <div className="flex items-center gap-4 text-[#C61407] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <div className="flex items-center gap-1.5">
                      <Clock size={12} className="animate-pulse" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title with Underline Reveal */}
                  <div className="relative overflow-hidden">
                    <h3 className={`font-bold text-white leading-[1.1] mb-4 transition-transform duration-500 group-hover:-translate-y-1 ${isFeatured ? 'text-4xl md:text-5xl' : 'text-2xl'}`}>
                      {post.title}
                    </h3>
                    <div className="h-[2px] w-full bg-[#C61407] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  </div>

                  <p className="text-gray-400 font-light text-base leading-relaxed line-clamp-2 mb-8 group-hover:text-gray-300 transition-colors">
                    {post.excerpt}
                  </p>

                  {/* Author & Footer */}
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {post.author?.avatar && (
                        <img src={post.author.avatar} className="w-8 h-8 rounded-full border border-white/10" alt={post.author.name} />
                      )}
                      <span className="text-xs text-gray-400 group-hover:text-white transition-colors">{post.author?.name || "Editorial Staff"}</span>
                    </div>
                    
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="text-white group-hover:text-[#C61407] transition-colors"
                    >
                      <ChevronRight size={20} />
                    </motion.div>
                  </div>

                  {/* Hover Shadow Bloom */}
                  <div className="absolute inset-0 -z-10 bg-[#C61407]/0 group-hover:bg-[#C61407]/5 blur-3xl transition-all duration-700 rounded-full scale-75 group-hover:scale-100" />
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