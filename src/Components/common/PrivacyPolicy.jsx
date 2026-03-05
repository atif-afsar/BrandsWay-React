import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const policies = [
    {
      id: "01",
      category: "Data Collection",
      title: "Information We Prioritize",
      content: "We collect only what is essential to build your brand's authority. This includes professional identifiers (name, email, LinkedIn profiles) and strategic data points provided during discovery sessions. We do not engage in mass data harvesting."
    },
    {
      id: "02",
      category: "Usage",
      title: "Strategic Application",
      content: "Your data is used exclusively to personalize our performance systems and marketing strategies. It allows us to calibrate our creative output to your specific industry landscape and target audience behaviors."
    },
    {
      id: "03",
      category: "Security",
      title: "The Vault Protocol",
      content: "BrandsWay employs enterprise-grade encryption for all client assets and communication logs. We treat your pre-launch concepts and strategic intellectual property with the same level of security we apply to our own core systems."
    },
    {
      id: "04",
      category: "Third Parties",
      title: "Zero-Sale Mandate",
      content: "We never sell, rent, or trade your data to third-party brokers. Data sharing is limited strictly to essential infrastructure partners (like cloud hosting or CRM tools) required to deliver our specialized services."
    },
    {
      id: "05",
      category: "Rights",
      title: "Your Authority",
      content: "As a partner of BrandsWay, you retain full rights over your personal data. You may request a full export of your data or its permanent deletion from our active systems at any time via our legal portal."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080C12] text-[#EDE9E2] font-['Poppins',_sans-serif] selection:bg-[#C61407] selection:text-white">
      {/* Background Grid & Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C61407] blur-[150px] opacity-10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* Header Section */}
        <header className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-[#C61407]" />
              <span className="text-[#C61407] uppercase tracking-[0.4em] text-[10px] font-black">
                Privacy Protocol v2.0
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 italic">
              Data<span className="inline-block w-3"></span><span className="text-gray-600 font-medium not-italic">Integrity.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed font-light">
              At BrandsWay, we believe privacy is the ultimate luxury. 
              Our commitment to protecting your digital footprint is as 
              unwavering as our commitment to your brand's growth.
            </p>
          </motion.div>
        </header>

        {/* Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-16">
          {policies.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-xs font-bold text-[#C61407] font-mono">{item.id}</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                  {item.category}
                </span>
              </div>
              <h3 className="text-2xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Rights Section with Dark Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 rounded-3xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 text-8xl font-black italic">BrandsWAY</div>
          <div className="relative z-10 max-w-xl">
            <h2 className="text-3xl font-medium mb-6">Compliance & Transparency</h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our privacy framework is designed to exceed GDPR, CCPA, and international data 
              sovereignty standards. We don't just follow the law; we set the benchmark 
              for ethical data stewardship in the agency space.
            </p>
          </div>
        </motion.div>

        {/* Footer Note */}
        <footer className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-12 text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em]">
          <div>© 2026 BrandsWay Global Holdings</div>
          <div className="flex gap-8">
            <a href="/terms" className="hover:text-[#C61407] transition-colors">Terms of Service</a>
            <a href="mailto:privacy@brandsway.com" className="hover:text-[#C61407] transition-colors">DPO Contact</a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');
      `}</style>
    </div>
  );
};

export default PrivacyPolicy;