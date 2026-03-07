import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../Components/About/AboutHero';
import StorySection from '../Components/About/StorySection';
import CorePrinciples from '../Components/About/CorePrinciples';
import QuoteSection from '../Components/About/QuoteSection';
import TeamSection from '../Components/About/TeamSection';
import AboutCTA from '../Components/About/AboutCta';

const About = () => {
  const storySectionRef = useRef(null);

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
      <TeamSection />
      <AboutCTA/>
    </div>
  );
};

export default About;
