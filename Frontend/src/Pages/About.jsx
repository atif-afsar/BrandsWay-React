import React, { useRef, lazy, Suspense } from 'react';
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
