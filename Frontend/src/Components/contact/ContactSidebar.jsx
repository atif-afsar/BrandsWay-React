import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Calendar } from 'lucide-react';
import { BUSINESS, telHref, addressLines, mapsEmbedSrc } from '../../seo/business.js';

const ContactSidebar = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8 h-full flex flex-col"
    >
      {/* Top Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#C61407]">
            <MapPin size={18} />
            <h4 className="font-bold text-sm">Studio</h4>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            {addressLines().map((line) => (
              <span key={line} className="block">{line}</span>
            ))}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2 text-[#C61407]">
            <Mail size={18} />
            <h4 className="font-bold text-sm">Contact</h4>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
           brandswaying@gmail.com<br />
           <a href={telHref()} className="hover:text-[#C61407] transition-colors">{BUSINESS.telephoneDisplay}</a>
          </p>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="relative rounded-3xl overflow-hidden bg-gray-200 aspect-video lg:aspect-square flex-grow grayscale hover:grayscale-0 transition-all duration-700 border border-gray-100 shadow-sm">
        <iframe 
          src={mapsEmbedSrc()} 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="The BrandsWay studio map — Grand Bazaar, Lal Diggi Road, Aligarh"
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-8 h-8 bg-[#C61407] rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
            <MapPin size={16} fill="white" />
          </div>
        </div>
      </div>

      {/* Live Call CTA */}
      <div className="bg-[#C61407] p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-red-500/20">
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold mb-1">Prefer to talk live?</h4>
          <p className="text-white/70 text-xs">Book a 15-minute discovery call with our leads.</p>
        </div>
        <motion.a 
         href={telHref()}
          whileHover={{ y: -2 }}
          className="bg-white text-[#C61407] px-6 py-3 rounded-xl font-bold text-xs whitespace-nowrap"
        >
          Schedule Call
        </motion.a>
      </div>
    </motion.div>
  );
};

export default ContactSidebar;