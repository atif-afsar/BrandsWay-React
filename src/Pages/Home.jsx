import React, { useRef } from 'react'
import Hero from '../Components/Home/Hero'
import ServicesSection from '../Components/Home/Services'
import BestWorkSection from '../Components/BestWork/BestWorkSection'
import ResultsSection from '../Components/Home/Results'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import FAQSection from '../Components/Home/FAQs'
import CTASection from '../Components/Home/CTA'
import ProcessSection from '../Components/Home/Process'
import ScrollFillSection from './ScrollFillSection'

const Home = () => {
  const bestWorkRef = useRef(null)

  const scrollToBestWork = () => {
    bestWorkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Hero onSeeImpactClick={scrollToBestWork} />
      <ServicesSection/>
      <div ref={bestWorkRef}>
        <BestWorkSection />
      </div>
      <ScrollFillSection />
      <ProcessSection />
      <ResultsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home
