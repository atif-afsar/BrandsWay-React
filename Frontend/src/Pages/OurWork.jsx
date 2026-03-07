import React, { useRef } from 'react';
import WorkHero from '../Components/Work/WorkHero';
import ProjectsSection from '../Components/Work/WorkSection';
import WorkCTA from '../Components/Work/WorkCta';

const OurWork = () => {
  const workSectionRef = useRef(null);

  const scrollToWorkSection = () => {
    workSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <WorkHero onLatestCaseStudiesClick={scrollToWorkSection} />
      <div ref={workSectionRef}>
        <ProjectsSection />
      </div>
      <WorkCTA />
    </div>
  );
};

export default OurWork;
