import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 h-full"
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
            <input type="text" placeholder="Jane" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
            <input type="text" placeholder="Doe" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
          <input type="email" placeholder="jane@brandsway.com" className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
          <select className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-[#C61407] transition-all outline-none text-sm appearance-none cursor-pointer">
            <option>Branding Project</option>
            <option>Web Design</option>
            <option>Consultation</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
          <textarea rows={5} placeholder="Tell us about your project..." className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-[#C61407] transition-all outline-none text-sm resize-none"></textarea>
        </div>

        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-[#C61407] text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
        >
          Send Message <Send size={16} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;