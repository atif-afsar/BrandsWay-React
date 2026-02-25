import React from 'react'
import Hero from '../Components/Home/Hero'
import ServicesSection from '../Components/Home/Services'
import ResultsSection from '../Components/Home/Results'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import FAQSection from '../Components/Home/FAQs'
import CTASection from '../Components/Home/CTA'
import ProcessSection from '../Components/Home/Process'

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesSection/>
      <ProcessSection />
      <ResultsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home
