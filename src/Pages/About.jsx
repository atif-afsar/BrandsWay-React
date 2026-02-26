import React from 'react';
import { motion } from 'framer-motion';
import AboutHero from '../Components/About/AboutHero';
import StorySection from '../Components/About/StorySection';
import CorePrinciples from '../Components/About/CorePrinciples';
import QuoteSection from '../Components/About/QuoteSection';
import TeamSection from '../Components/About/TeamSection';
import AboutCTA from '../Components/About/AboutCta';

const About = () => {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <CorePrinciples />
      <QuoteSection />
      <TeamSection />
      <AboutCTA/>
    </div>
  );
};

export default About;
