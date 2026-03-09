import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import ContactForm from '../Components/contact/ContactForm';
import ContactSidebar from '../Components/contact/ContactSidebar';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact BrandsWay | Digital Marketing Agency in Aligarh</title>
        <meta name="description" content="Get in touch with BrandsWay, the leading digital marketing and PR agency in Aligarh. Contact us today for social media marketing and brand growth." />
        <meta name="keywords" content="Contact BrandsWay, Digital Marketing Agency in Aligarh, PR Agency in Aligarh, Social Media Marketing Company in Aligarh" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebrandsway.com/contact" />
        <meta property="og:title" content="Contact BrandsWay | Digital Marketing Agency in Aligarh" />
        <meta property="og:description" content="Get in touch with BrandsWay, the leading digital marketing and PR agency in Aligarh." />
        <meta property="og:image" content="https://thebrandsway.com/hero/bg2.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thebrandsway.com/contact" />
        <meta property="twitter:title" content="Contact BrandsWay | Digital Marketing Agency in Aligarh" />
        <meta property="twitter:description" content="Get in touch with BrandsWay, the leading digital marketing and PR agency in Aligarh." />
        <meta property="twitter:image" content="https://thebrandsway.com/hero/bg2.jpg" />
      </Helmet>
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-4 mt-6">Get in <span className='text-[#C61407]'>touch.</span> </h2>
          <p className="text-gray-500 max-w-xl leading-relaxed">
            We'd love to hear from you. Whether you have a specific project in mind or just want to explore the possibilities, let's build something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-stretch">
          <ContactForm />
          <ContactSidebar />
        </div>
        
        {/* Social Links Footer */}
        <div className="mt-12 flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-400">
          <span>Follow Us</span>
          {[
            { name: 'LinkedIn', href: 'https://www.linkedin.com/company/the-brandsway/' },
            { name: 'Twitter', href: 'https://x.com/BrandsWay00/' },
            { name: 'Instagram', href: 'https://www.instagram.com/thebrandsway/' },
            { name: 'Facebook', href: 'https://www.facebook.com/Thebrandsway' }
          ].map(link => (
            <a 
              key={link.name} 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-[#C61407] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Contact;
