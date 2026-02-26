import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterLink = ({ href, children }) => (
  <li>
    <motion.div
      whileHover={{ x: 4, color: "#C61407" }}
      className="text-gray-400 text-sm transition-colors duration-300 inline-block py-1"
    >
      <Link to={href} className="text-gray-400 hover:text-[#C61407] transition-colors">
        {children}
      </Link>
    </motion.div>
  </li>
);

/* Collapsible on mobile, always-open on desktop */
const FooterSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col border-b border-white/5 sm:border-none">
      {/* Header — clickable only on mobile */}
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center justify-between w-full py-4 sm:py-0 sm:mb-6 sm:cursor-default focus:outline-none"
      >
        <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">
          {title}
        </h4>
        {/* Chevron — mobile only */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="sm:hidden text-gray-500 text-sm select-none"
        >
          ▾
        </motion.span>
      </button>

      {/* Links — always visible on sm+, collapsible on xs */}
      <AnimatePresence initial={false}>
        {(open) && (
          <motion.ul
            key="mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="flex flex-col gap-1 overflow-hidden sm:hidden mb-3"
          >
            {links.map((link) => (
              <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Always visible on sm+ */}
      <ul className="hidden sm:flex flex-col gap-2">
        {links.map((link) => (
          <FooterLink key={link.name} href={link.href}>{link.name}</FooterLink>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const services = [
    { name: "Paid Acquisition", href: "#" },
    { name: "Conversion Rate Opt.", href: "#" },
    { name: "Brand Strategy", href: "#" },
    { name: "SEO Dominance", href: "#" },
  ];

  const company = [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Careers", href: "#" },
  ];

  const resources = [
    { name: "Growth Blog", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "Help Center", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-10 pb-8 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">

        {/* ── TOP GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-x-8 gap-y-0 sm:gap-y-10 mb-0 sm:mb-10">

          {/* BRAND COLUMN */}
          <div className="sm:col-span-2 lg:col-span-5 flex flex-col gap-4 pb-6 sm:pb-0 border-b border-white/5 sm:border-none">
            <img src="/logo/brandsway.png" alt="BrandsWay" className="h-16 w-16 sm:h-20 sm:w-20" />
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering high-performance growth engines for the next generation
              of market-leading brands. Precision in every pixel.
            </p>

            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {[
                { name: 'Twitter', icon: FaTwitter, href: '#' },
                { name: 'Facebook', icon: FaFacebook, href: '#' },
                { name: 'LinkedIn', icon: FaLinkedin, href: '#' },
                { name: 'Instagram', icon: FaInstagram, href: '#' }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-[#C61407] p-2.5 rounded-lg hover:bg-[#C61407]/10 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* LINKS — stacked accordion on mobile, 3-col grid on sm+ */}
          <div className="sm:col-span-2 lg:col-span-7 sm:grid sm:grid-cols-3 sm:gap-8 flex flex-col">
            <FooterSection title="Services"   links={services}   />
            <FooterSection title="Company"    links={company}    />
            <FooterSection title="Resources"  links={resources}  />
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="w-full h-px bg-white/5 mt-6 sm:mt-0 mb-6" />

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-6">
          <div className="text-gray-600 text-[10px] uppercase tracking-widest text-center sm:text-left">
            © 2026 BrandsWay. All rights reserved.
          </div>
          <div className="text-gray-400 text-xs font-medium italic">
            Strategy. Precision. <span className="text-[#C61407]">Results.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;