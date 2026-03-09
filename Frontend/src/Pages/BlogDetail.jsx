import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, User, ChevronDown, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../utils/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Reading Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const blog = blogPosts.find(post => post.slug === slug);

  if (!blog) {
    return (
      <div className="bg-[#080C12] min-h-screen flex items-center justify-center px-4 ">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white ">Insight Not Found</h1>
          <button
            onClick={() => navigate('/insights')}
            className="px-6 py-3 bg-[#C61407] text-white rounded-full font-bold hover:bg-red-700 transition-all"
          >
            Return to Journal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen selection:bg-[#C61407] selection:text-white overflow-x-hidden">
      <Helmet>
        <title>{`${blog.title} | BrandsWay Insights`}</title>
        <meta name="description" content={blog.excerpt || `Read more about ${blog.title} on BrandsWay Insights. Stay updated with the latest digital marketing and PR trends in Aligarh.`} />
        <meta name="keywords" content={`${blog.category}, Digital Marketing Aligarh, BrandsWay Blog, PR Agency Aligarh`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://thebrandsway.com/insights/${slug}`} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://thebrandsway.com/insights/${slug}`} />
        <meta property="twitter:title" content={blog.title} />
        <meta property="twitter:description" content={blog.excerpt} />
        <meta property="twitter:image" content={blog.image} />
      </Helmet>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C61407] z-50 origin-left"
        style={{ scaleX }}
      />


      <main className="pt-32 pb-20">
        {/* Back Button */}
        <div className="max-w-4xl mx-auto px-6 mb-8">
          <button
            onClick={() => navigate('/insights')}
            className="flex items-center gap-2 text-[#C61407] font-semibold hover:gap-3 transition-all text-sm"
          >
            <ArrowLeft size={18} />
            Back to Insights
          </button>
        </div>

        {/* Header Section */}
        <header className="max-w-4xl mx-auto px-6 mb-12 sm:mb-20 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-[#C61407]/10 text-[#C61407] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
              {blog.category}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#080C12] tracking-tighter leading-[1.05] mb-8">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 py-6 border-y border-gray-200/60 text-gray-500 font-medium text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                   <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${blog.author}`} alt={`${blog.author} - BrandsWay Digital Marketing Expert`} loading="lazy" sizes="40px" />
                </div>
                <span className="text-gray-900 font-bold">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#C61407]" />
                <span>{blog.readTime} Reading</span>
              </div>
              <div className="hidden sm:block text-gray-300">|</div>
              <div>{blog.date}</div>
            </div>
          </motion.div>
        </header>

        {/* Featured Image - Ultra Wide Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto px-4 mb-16 sm:mb-24"
        >
          <div className="aspect-[21/9] rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200">
            <img
              src={blog.image}
              alt={`${blog.title} - Digital Marketing Insight by BrandsWay`}
              fetchpriority="high"
              sizes="(max-width: 768px) 100vw, 100vw"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </div>
        </motion.div>

        {/* Article Body */}
        <article className="max-w-3xl mx-auto px-6 relative">
          {/* Intro with Drop Cap effect for premium feel */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl text-gray-800 leading-relaxed font-serif italic">
              {blog.content.intro}
            </p>
          </div>

          <div className="prose prose-lg prose-red max-w-none">
            {blog.content.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-[#080C12] mb-6 tracking-tight">
                  {section.title}
                </h2>
                <div className="text-gray-600 leading-[1.8] text-lg font-light whitespace-pre-line">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </article>

        {/* FAQ with Premium Styling */}
        {blog.content.faq && blog.content.faq.length > 0 && (
          <section className="max-w-3xl mx-auto px-6 mt-20 mb-20">
            <h2 className="text-2xl font-bold text-[#080C12] mb-10 flex items-center gap-4">
              Deep Dive FAQ <span className="h-[1px] flex-grow bg-gray-200" />
            </h2>
            <div className="space-y-4">
              {blog.content.faq.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border transition-all duration-300 rounded-2xl ${expandedFaq === index ? 'border-[#C61407] bg-white shadow-xl shadow-red-900/5' : 'border-gray-200 bg-gray-50/50'}`}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-gray-900">{faq.question}</span>
                    <ChevronDown size={20} className={`text-[#C61407] transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Newsletter / CTA Section */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <div className="bg-[#080C12] rounded-[2rem] p-8 sm:p-16 relative overflow-hidden text-center sm:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C61407]/20 blur-[100px] -mr-32 -mt-32 rounded-full" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="lg:max-w-xl">
                <h3 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to build <span className="text-[#C61407]">Authority?</span>
                </h3>
                <p className="text-gray-400 text-lg">
                  {blog.content.cta}
                </p>
              </div>
              <Link to="/contact-us" className="relative z-10">
              <button className="px-10 py-5 bg-[#C61407] text-white font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-900/20 whitespace-nowrap">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts Grid */}
        <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-200">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#080C12]">Further Reading</h2>
            <button onClick={() => navigate('/insights')} className="text-[#C61407] font-bold text-xs uppercase tracking-[0.2em] border-b-2 border-[#C61407] pb-1">View All</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogPosts
              .filter(post => post.id !== blog.id)
              .slice(0, 3)
              .map((post) => (
                <article 
                  key={post.id} 
                  onClick={() => navigate(`/blog/${post.slug}`)}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                    <img src={post.image} alt={post.title} loading="lazy" sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <span className="text-[#C61407] text-[10px] font-black uppercase tracking-widest mb-3 block">{post.category}</span>
                  <h4 className="text-xl font-bold group-hover:text-[#C61407] transition-colors mb-3">{post.title}</h4>
                  <p className="text-gray-500 text-sm line-clamp-2 font-light leading-relaxed">{post.excerpt}</p>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default BlogDetail;