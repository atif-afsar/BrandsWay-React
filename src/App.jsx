import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import OurWork from './Pages/OurWork'
import Insights from './Pages/Insights'
import Contact from './Pages/Contact'
import Navbar from './Components/common/Navbar'
import Footer from './Components/common/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
