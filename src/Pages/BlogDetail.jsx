import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, ChevronDown } from 'lucide-react';
import { blogPosts } from '../utils/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#FAF9F6] min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-[#1a1c2e] mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate('/insights')}
            className="text-[#C61407] font-semibold hover:underline text-sm sm:text-base"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <button
          onClick={() => navigate('/insights')}
          className="flex items-center gap-2 text-[#C61407] font-semibold hover:gap-3 transition-all mb-6 sm:mb-8 text-sm sm:text-base"
        >
          <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
          Back to Insights
        </button>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-2 lg:mt-18 sm:mt-18 sm:px-6 mb-8 sm:mb-18"
      >
        <div className="mb-6 sm:mb-8">
          <span className="text-[#C61407] text-xs font-bold uppercase tracking-widest">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1c2e] leading-tight mt-3 sm:mt-4 mb-4 sm:mb-6">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-gray-500 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <User size={14} className="sm:w-4 sm:h-4" />
              <span className="truncate">{blog.author}</span>
            </div>
            <span className="hidden sm:inline">{blog.date}</span>
            <span className="sm:hidden text-xs">{blog.date}</span>
            <div className="flex items-center gap-1 sm:gap-2">
              <Clock size={14} className="sm:w-4 sm:h-4" />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg mb-8 sm:mb-12"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16"
      >
        {/* Intro */}
        <div className="mb-8 sm:mb-12">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed sm:leading-relaxed font-light">
            {blog.content.intro}
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8 sm:space-y-12">
          {blog.content.sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c2e] mb-3 sm:mb-4">
                {section.title}
              </h2>
              <div className="text-sm sm:text-base text-gray-600 leading-relaxed sm:leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ Section */}
      {blog.content.faq && blog.content.faq.length > 0 && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c2e] mb-6 sm:mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3 sm:space-y-4">
            {blog.content.faq.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-sm sm:text-lg font-semibold text-[#1a1c2e] text-left pr-2">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[#C61407] transition-transform flex-shrink-0 sm:w-5 sm:h-5 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-50 border-t border-gray-200"
                  >
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 mb-12 sm:mb-20"
      >
        <div className="bg-gradient-to-r from-[#C61407] to-red-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white text-center">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
            {blog.content.cta}
          </h3>
          <button className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-white text-[#C61407] font-bold rounded-full hover:shadow-lg transition-all text-sm sm:text-base">
            Schedule Consultation
          </button>
        </div>
      </motion.section>

      {/* Related Posts */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-20"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1c2e] mb-8 sm:mb-12">More Insights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {blogPosts
            .filter(post => post.id !== blog.id)
            .slice(0, 3)
            .map((post) => (
              <motion.article
                key={post.id}
                whileHover={{ y: -5 }}
                onClick={() => navigate(`/blog/${post.slug}`)}
                className="flex flex-col group cursor-pointer"
              >
                <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4 shadow-sm bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-[#C61407] text-xs font-bold uppercase tracking-widest mb-2">
                  {post.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1a1c2e] leading-tight mb-2 group-hover:text-[#C61407] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 font-light text-xs sm:text-sm line-clamp-2">
                  {post.excerpt}
                </p>
              </motion.article>
            ))}
        </div>
      </motion.section>
    </div>
  );
};

export default BlogDetail;
