import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Our Portfolio | BrandsWay Digital Marketing in Aligarh</title>
        <meta name="description" content="Explore BrandsWay's portfolio of successful digital marketing, PR, and social media campaigns in Aligarh. See how we help brands grow." />
        <meta name="keywords" content="BrandsWay Portfolio, Digital Marketing Agency in Aligarh, PR Agency in Aligarh, Social Media Marketing Company in Aligarh" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebrandsway.com/our-work" />
        <meta property="og:title" content="Our Portfolio | BrandsWay Digital Marketing in Aligarh" />
        <meta property="og:description" content="Explore BrandsWay's portfolio of successful digital marketing, PR, and social media campaigns in Aligarh." />
        <meta property="og:image" content="https://thebrandsway.com/hero/bg2.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thebrandsway.com/our-work" />
        <meta property="twitter:title" content="Our Portfolio | BrandsWay Digital Marketing in Aligarh" />
        <meta property="twitter:description" content="Explore BrandsWay's portfolio of successful digital marketing, PR, and social media campaigns in Aligarh." />
        <meta property="twitter:image" content="https://thebrandsway.com/hero/bg2.jpg" />
      </Helmet>
      <WorkHero onLatestCaseStudiesClick={scrollToWorkSection} />
      <div ref={workSectionRef}>
        <ProjectsSection />
      </div>
      <WorkCTA />
    </div>
  );
};

export default OurWork;
