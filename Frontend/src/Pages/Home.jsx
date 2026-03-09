import React, { useRef, lazy, Suspense } from 'react'
import Hero from '../Components/Home/Hero'
import ServicesSection from '../Components/Home/Services'
const BestWorkSection = lazy(() => import('../Components/BestWork/BestWorkSection'))
import ResultsSection from '../Components/Home/Results'
import WhyChooseUs from '../Components/Home/WhyChooseUs'
import FAQSection from '../Components/Home/FAQs'
import CTASection from '../Components/Home/CTA'
import ProcessSection from '../Components/Home/Process'
import ScrollFillSection from './ScrollFillSection'
import useInView from '../hooks/useInView'

const Home = () => {
  const bestWorkRef = useRef(null)
  const [bestWorkTriggerRef, bestWorkInView] = useInView()

  const scrollToBestWork = () => {
    bestWorkRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Hero onSeeImpactClick={scrollToBestWork} />
      <ServicesSection/>
      <ScrollFillSection />
      <ProcessSection />
      <div id="bestwork" ref={bestWorkRef}>
        <div ref={bestWorkTriggerRef}>
          {bestWorkInView && (
            <Suspense fallback={<div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">Loading...</div>}>
              <BestWorkSection />
            </Suspense>
          )}
        </div>
      </div>
      <ResultsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default Home
