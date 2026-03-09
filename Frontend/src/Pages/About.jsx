import React, { useRef, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import AboutHero from '../Components/About/AboutHero';
import StorySection from '../Components/About/StorySection';
import CorePrinciples from '../Components/About/CorePrinciples';
import QuoteSection from '../Components/About/QuoteSection';
const TeamSection = lazy(() => import('../Components/About/TeamSection'));
import AboutCTA from '../Components/About/AboutCta';
import useInView from '../hooks/useInView';

const About = () => {
  const storySectionRef = useRef(null);
  const [teamTriggerRef, teamInView] = useInView();

  const scrollToStory = () => {
    storySectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <Helmet>
        <title>About Us | BrandsWay - Leading PR Agency in Aligarh</title>
        <meta name="description" content="Learn about BrandsWay, our story, core principles, and the team behind the top digital marketing and PR agency in Aligarh. We drive brand growth." />
        <meta name="keywords" content="About BrandsWay, PR Agency in Aligarh, Digital Marketing Agency in Aligarh, Social Media Marketing Company in Aligarh" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebrandsway.com/about" />
        <meta property="og:title" content="About Us | BrandsWay - Leading PR Agency in Aligarh" />
        <meta property="og:description" content="Learn about BrandsWay, our story, core principles, and the team behind the top digital marketing and PR agency in Aligarh." />
        <meta property="og:image" content="https://thebrandsway.com/hero/bg2.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thebrandsway.com/about" />
        <meta property="twitter:title" content="About Us | BrandsWay - Leading PR Agency in Aligarh" />
        <meta property="twitter:description" content="Learn about BrandsWay, our story, core principles, and the team behind the top digital marketing and PR agency in Aligarh." />
        <meta property="twitter:image" content="https://thebrandsway.com/hero/bg2.jpg" />
      </Helmet>
      <AboutHero onLearnStoryClick={scrollToStory} />
      <div ref={storySectionRef}>
        <StorySection />
      </div>
      <CorePrinciples />
      <QuoteSection />
      <div ref={teamTriggerRef}>
        {teamInView && (
          <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
            <TeamSection />
          </Suspense>
        )}
      </div>
      <AboutCTA/>
    </div>
  );
};

export default About;
