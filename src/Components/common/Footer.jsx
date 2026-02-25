import React from 'react';
import { motion } from 'framer-motion';

const FooterLink = ({ href, children }) => (
  <li>
    <motion.a
      href={href}
      whileHover={{ x: 4, color: "#C61407" }}
      className="text-gray-400 text-sm transition-colors duration-300 inline-block py-1"
    >
      {children}
    </motion.a>
  </li>
);

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col gap-6">
    <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">
      {title}
    </h4>
    <ul className="flex flex-col gap-2">
      {links.map((link) => (
        <FooterLink key={link.name} href={link.href}>
          {link.name}
        </FooterLink>
      ))}
    </ul>
  </div>
);

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
    <footer className="bg-[#050505] text-white py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- TOP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <img src="/logo/brandsway.png" alt="BrandsWay" className="h-20 w-20" />
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Engineering high-performance growth engines for the next generation 
              of market-leading brands. Precision in every pixel.
            </p>
            
            {/* SOCIALS */}
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -2, color: "#C61407" }}
                  className="text-xs uppercase tracking-widest font-bold text-gray-500 transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterSection title="Services" links={services} />
            <FooterSection title="Company" links={company} />
            <FooterSection title="Resources" links={resources} />
          </div>
        </div>

        {/* --- DIVIDER --- */}
        <div className="w-full h-px bg-white/5 mb-6" />

        {/* --- BOTTOM BAR --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-600 text-[10px] uppercase tracking-widest">
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