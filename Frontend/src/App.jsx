import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { LANDING_PAGE_ORDER } from "./data/landingPages.data";
import Navbar from "./Components/common/Navbar";
import Footer from "./Components/common/Footer";
import BrandsWayLoader from "./Components/common/BrandsWayLoader";
import ScrollToTop from "./Components/common/ScrollToTop";
import SmoothScroll from "./Components/common/SmoothScroll";
import CoursesLaunchPopup from "./Components/common/CoursesLaunchPopup";
import TermsAndConditions from "./Components/common/TermsAndConditions";
import PrivacyPolicy from "./Components/common/PrivacyPolicy";
import BestWorkSection from "./Components/BestWork/BestWorkSection";

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const OurWork = lazy(() => import("./Pages/OurWork"));
const Insights = lazy(() => import("./Pages/Insights"));
const BlogDetail = lazy(() => import("./Pages/BlogDetail"));
const Contact = lazy(() => import("./Pages/Contact"));
const SeoServiceLanding = lazy(() => import("./Pages/SeoServiceLanding"));
const Assistant = lazy(() => import("./Components/AI/Assistant"));

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleComplete = () => {
    setLoading(false);
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      <AnimatePresence mode="wait">
        {loading && <BrandsWayLoader key="loader" onComplete={handleComplete} />}
      </AnimatePresence>

      {!loading && (
        <>
          <CoursesLaunchPopup />
          <LazyMotion features={domAnimation}>
            <Suspense fallback={null}>
              <Assistant />
            </Suspense>
            <SmoothScroll>
              <Router>
                <ScrollToTop />
                <Navbar />
                <Suspense fallback={<BrandsWayLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="/our-work" element={<OurWork />} />
                  <Route path="/insights" element={<Insights />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route path="/contact-us" element={<Contact />} />
                  {LANDING_PAGE_ORDER.map((path) => (
                    <Route key={path} path={path} element={<SeoServiceLanding />} />
                  ))}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-and-condition" element={<TermsAndConditions />} />
                  <Route path="/bestWork" element={<BestWorkSection />} />
                </Routes>
              </Suspense>
              <Footer />
            </Router>
          </SmoothScroll>
        </LazyMotion>
        </>
      )}
    </div>
  );
};

export default App;
