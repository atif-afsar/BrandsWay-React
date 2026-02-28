import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, ChevronDown } from 'lucide-react';
import { blogPosts } from '../../utils/blogData';

// Dynamically generate categories from blog data
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
    <div className="bg-[#FAF9F6] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 py-20">
        {/* 3. Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                activeCategory === cat 
                ? "bg-[#C61407] text-white border-[#C61407] shadow-lg shadow-red-900/20" 
                : "bg-white text-gray-500 border-gray-100 hover:border-gray-300 hover:text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 4. Article Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode='popLayout'>
            {filteredPosts.map((post) => (
              <motion.article
                layout
                key={post.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-6 shadow-sm bg-gray-200">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <span className="text-[#C61407] text-[10px] font-bold uppercase tracking-widest mb-3">{post.category}</span>
                <h3 className="text-2xl font-bold text-[#1a1c2e] leading-tight mb-4 group-hover:text-[#C61407] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-light text-base line-clamp-2 mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-gray-400 text-xs font-medium mt-auto">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPage;