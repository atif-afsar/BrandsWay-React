import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: 'Branding Project',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          subject: 'Branding Project',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 h-full"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">First Name</label>
            <input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Jane" 
              required
              className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" 
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Last Name</label>
            <input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe" 
              required
              className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" 
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@brandsway.com" 
            required
            className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:ring-2 focus:ring-red-500/10 focus:border-[#C61407] transition-all outline-none text-sm" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
          <select 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-[#C61407] transition-all outline-none text-sm appearance-none cursor-pointer"
          >
            <option>Branding Project</option>
            <option>Web Design</option>
            <option>Consultation</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
          <textarea 
            rows={5} 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..." 
            required
            className="w-full px-5 py-4 bg-gray-50 border-transparent rounded-xl focus:bg-white focus:border-[#C61407] transition-all outline-none text-sm resize-none"
          ></textarea>
        </div>

        {status.message && (
          <div className={`p-4 rounded-xl text-sm ${
            status.type === 'success' 
              ? 'bg-green-50 text-green-700 border border-green-200' 
              : 'bg-red-50 text-red-700 border border-red-200'
          }`}>
            {status.message}
          </div>
        )}

        <motion.button 
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-500/20 transition-all ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-[#C61407] text-white hover:bg-red-700'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;