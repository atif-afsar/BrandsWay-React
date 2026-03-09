import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import InsightsSection from '../Components/Insights/InsightsHero';
const BlogPage = lazy(() => import('../Components/Insights/Blogs'));
import useInView from '../hooks/useInView';

const Insights = () => {
  const [blogsTriggerRef, blogsInView] = useInView();

  return (
   <div>
    <Helmet>
       <title>Digital Marketing Insights & Blogs | BrandsWay Aligarh</title>
       <meta name="description" content="Stay updated with the latest digital marketing trends, PR strategies, and social media tips from BrandsWay, the top agency in Aligarh." />
       <meta name="keywords" content="Digital Marketing Insights, Aligarh Marketing Blogs, PR Strategies, Social Media Marketing Aligarh" />

       {/* Open Graph / Facebook */}
       <meta property="og:type" content="website" />
       <meta property="og:url" content="https://thebrandsway.com/insights" />
       <meta property="og:title" content="Digital Marketing Insights & Blogs | BrandsWay Aligarh" />
       <meta property="og:description" content="Stay updated with the latest digital marketing trends and PR strategies from BrandsWay." />
       <meta property="og:image" content="https://thebrandsway.com/hero/bg2.jpg" />

       {/* Twitter */}
       <meta property="twitter:card" content="summary_large_image" />
       <meta property="twitter:url" content="https://thebrandsway.com/insights" />
       <meta property="twitter:title" content="Digital Marketing Insights & Blogs | BrandsWay Aligarh" />
       <meta property="twitter:description" content="Stay updated with the latest digital marketing trends and PR strategies from BrandsWay." />
       <meta property="twitter:image" content="https://thebrandsway.com/hero/bg2.jpg" />
     </Helmet>
    <InsightsSection />
    <div ref={blogsTriggerRef}>
      {blogsInView && (
        <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
          <BlogPage />
        </Suspense>
      )}
    </div>
   </div>
  );
};

export default Insights;
