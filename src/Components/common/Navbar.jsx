import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = ['About Us', 'Our Work', 'Insights', 'Contact Us'];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 font-['Poppins',_sans-serif] transition-all duration-300"
        style={{ paddingTop: scrolled ? '12px' : '24px' }}
      >
        <div className="flex justify-center px-4">
          <div
            className="flex items-center justify-between w-full max-w-6xl px-6 py-2.5 rounded-full transition-all duration-300"
            style={{
              background: scrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.80)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.4)',
              boxShadow: scrolled
                ? '0 8px 40px rgba(0,0,0,0.14)'
                : '0 4px 24px rgba(0,0,0,0.08)',
            }}
          >
            {/* Logo */}
            <a href="#" className="text-xl font-black tracking-tight flex-shrink-0">
              <span className="text-[#C61407]">Brands</span>
              <span className="text-black">Way</span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-gray-500">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="relative group transition-colors duration-200 hover:text-[#C61407]"
                >
                  {link}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#C61407] rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 bg-[#C61407] text-white px-4 py-1.5 rounded-full text-[13px] font-semibold hover:bg-red-700 transition-colors shadow-sm shadow-red-200"
            >
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                className="w-5 h-5 rounded-full bg-white/20"
                alt="avatar"
              />
              Book a Discovery Call
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors gap-[5px] flex-shrink-0"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 h-[1.5px] bg-gray-800 rounded-full origin-center"
              />
              <motion.span
                animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-4 h-[1.5px] bg-gray-800 rounded-full"
              />
              <motion.span
                animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25 }}
                className="block w-4 h-[1.5px] bg-gray-800 rounded-full origin-center"
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.97 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden mx-4 mt-2 rounded-3xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.96)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.5)',
                boxShadow: '0 12px 48px rgba(0,0,0,0.13)',
              }}
            >
              <div className="flex flex-col px-6 py-5 gap-1">
                {links.map((link, i) => (
                  <motion.a
                    key={link}
                    href="#"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.2 }}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-3 text-[15px] font-medium text-gray-700 hover:text-[#C61407] border-b border-gray-100 last:border-0 transition-colors group"
                  >
                    {link}
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-[#C61407] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.2 }}
                  className="mt-4 flex items-center justify-center gap-2 bg-[#C61407] text-white px-5 py-3 rounded-2xl text-[14px] font-semibold hover:bg-red-700 transition-colors shadow-md shadow-red-200/60 w-full"
                >
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    className="w-6 h-6 rounded-full bg-white/20"
                    alt="avatar"
                  />
                  Book a Discovery Call
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;