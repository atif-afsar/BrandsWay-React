import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import InsightsSection from '../Components/Insights/InsightsHero';
const BlogPage = lazy(() => import('../Components/Insights/Blogs'));
import useInView from '../hooks/useInView';

const Insights = () => {
  const [blogsTriggerRef, blogsInView] = useInView();

  return (
   <div>
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
