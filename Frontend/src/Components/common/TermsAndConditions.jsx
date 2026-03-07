import React from 'react';
import { motion } from 'framer-motion';

const TermsAndConditions = () => {
  const sections = [
    {
      title: "01. Acceptance of Terms",
      content: "By accessing and using the BrandsWay platform and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. Our services are designed for visionary founders and enterprises seeking strategic growth."
    },
    {
      title: "02. Scope of Services",
      content: "BrandsWay provides strategic marketing, performance design, and scalable systems. While we strive for perfection in every creation, specific results depend on market variables and client collaboration. We reserve the right to refine our methodologies to maintain industry-leading standards."
    },
    {
      title: "03. Intellectual Property",
      content: "Unless otherwise agreed in writing, all preliminary concepts and strategic frameworks remain the intellectual property of BrandsWay. Upon final payment, ownership of the specific final deliverables is transferred to the client, while BrandsWay retains the right to showcase the work for portfolio purposes."
    },
    {
      title: "04. Client Obligations",
      content: "Success is a collaborative effort. Clients agree to provide timely feedback and necessary assets. Delays in communication may result in adjusted timelines. We expect a professional partnership built on mutual respect for the creative process."
    },
    {
      title: "05. Limitation of Liability",
      content: "BrandsWay shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services. We provide the tools for authority; how you wield them is your ultimate responsibility."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080C12] text-[#EDE9E2] font-['Poppins',_sans-serif] selection:bg-[#C61407] selection:text-white">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C61407] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-[#C61407] opacity-50 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center lg:text-left"
        >
          <span className="text-[#C61407] uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">
            Legal Framework
          </span>
          <h1 className="text-4xl md:text-6xl font-medium font-black tracking-tight mb-6">
            Terms & <span className="text-gray-500">Conditions</span>
          </h1>
          <div className="h-1 w-20 bg-[#C61407] mb-8 mx-auto lg:mx-0" />
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Last Updated: March 2026. These terms govern the professional relationship between 
            BrandsWay and its global partners.
          </p>
        </motion.div>

        {/* Content Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-l border-white/10 pl-8 hover:border-[#C61407] transition-colors duration-500"
            >
              <h2 className="text-xl font-bold mb-4 group-hover:text-[#C61407] transition-colors">
                {section.title}
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base font-light">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Footer/Contact */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-center"
        >
          <h3 className="text-lg font-bold mb-2">Have questions about our terms?</h3>
          <p className="text-gray-400 text-sm mb-6">Our legal team is available for clarification.</p>
          <a 
            href="mailto:legal@brandsway.com" 
            className="inline-block px-8 py-3 bg-[#C61407] text-white rounded-full font-medium text-xs uppercase tracking-widest hover:bg-red-800 transition-all active:scale-95 shadow-lg shadow-red-900/20"
          >
            Contact Legal
          </a>
        </motion.div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');
      `}</style>
    </div>
  );
};

export default TermsAndConditions;