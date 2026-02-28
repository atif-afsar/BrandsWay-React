import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './Pages/Home'
import About from './Pages/About'
import OurWork from './Pages/OurWork'
import Insights from './Pages/Insights'
import BlogDetail from './Pages/BlogDetail'
import Contact from './Pages/Contact'
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'
import BrandsWayLoader from './Components/common/BrandsWayLoader'

const App = () => {
  const [loading, setLoading] = useState(true)

  const handleComplete = () => {
    setLoading(false)
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <BrandsWayLoader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>
      
      {!loading && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/our-work" element={<OurWork />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  )
}

export default App
