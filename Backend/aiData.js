// aiData.js - Company information for AI assistant
const companyData = {
  name: "BrandsWay",
  description: "A premier creative agency specializing in branding, web development, digital marketing, and innovative design solutions that help businesses thrive in the digital landscape.",
  services: [
    "Brand Identity & Logo Design",
    "Website Development (React, Next.js)",
    "UI/UX Design & Prototyping",
    "Digital Marketing & SEO",
    "Content Creation & Strategy",
    "E-commerce Development",
    "Mobile App Development",
    "Social Media Management",
    "Video Production & Animation",
    "Print Design & Packaging"
  ],
  about: {
    story: "BrandsWay was founded with a passion for creativity and innovation, aiming to bridge the gap between businesses and their digital audience through exceptional design and technology solutions.",
    mission: "To empower brands with compelling digital experiences that drive engagement, growth, and lasting success in an ever-evolving marketplace.",
    vision: "To become the go-to creative partner for businesses seeking transformative digital solutions that set them apart from the competition.",
    corePrinciples: [
      "Creativity First",
      "Client-Centric Approach",
      "Innovation & Excellence",
      "Timely Delivery",
      "Continuous Innovation",
      "Sustainable Growth"
    ]
  },
  team: {
    description: "Our talented team consists of experienced designers, developers, strategists, and marketing experts who collaborate seamlessly to bring your vision to life.",
    size: "A dedicated team of creative professionals with diverse backgrounds and expertise"
  },
  contact: {
    email: "brandswaying@gmail.com",
    phone: "+91-7302988039",
    location: "Aligarh, Uttar Pradesh, India",
    address: "IT Plaza, Abdullah Road, Aligarh, Uttar Pradesh 202001",
    workingHours: "Monday - Saturday: 10:00 AM - 7:00 PM IST"
  },
  work: {
    description: "We have successfully delivered innovative solutions for clients across various industries, from startups to established enterprises, helping them achieve their digital goals.",
    featuredProjects: [
      "Complete Brand Identity for Tech Startup",
      "E-commerce Platform with Advanced Features",
      "Mobile App for Healthcare Provider",
      "Digital Marketing Campaign for Retail Brand",
      "Corporate Website Redesign",
      "Video Content Production Series"
    ]
  },
  process: [
    "Discovery & Consultation",
    "Research & Strategy Development",
    "Creative Concept & Design",
    "Development & Implementation",
    "Testing & Quality Assurance",
    "Launch & Ongoing Support"
  ],
  pricing: {
    description: "We offer flexible pricing models tailored to your project needs and budget.",
    models: [
      "Fixed Price Projects",
      "Hourly Consulting",
      "Retainer Agreements",
      "Performance-Based Pricing"
    ]
  },
  faqs: [
    {
      question: "What services do you offer?",
      answer: "We offer comprehensive creative services including brand identity design, web development, UI/UX design, digital marketing, content creation, e-commerce solutions, mobile app development, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity and scope. Simple branding projects may take 2-4 weeks, while complex web development projects can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer comprehensive maintenance and support packages to ensure your digital assets continue to perform optimally. We also provide training and documentation for seamless handover."
    },
    {
      question: "What is your typical project process?",
      answer: "Our process includes discovery & consultation, research & strategy, creative development, implementation, testing, and launch with ongoing support. We keep you involved throughout every step."
    },
    {
      question: "Do you work with clients internationally?",
      answer: "Absolutely! We work with clients globally and have experience managing projects across different time zones. We use modern collaboration tools to ensure smooth communication."
    },
    {
      question: "What makes BrandsWay different from other agencies?",
      answer: "Our client-centric approach, commitment to innovation, and focus on delivering measurable results set us apart. We combine creativity with strategic thinking to create solutions that not only look great but drive real business outcomes."
    }
  ],
  expertise: [
    "React & Modern JavaScript Frameworks",
    "Node.js & Backend Development",
    "UI/UX Design & Prototyping",
    "Brand Strategy & Identity",
    "Digital Marketing & SEO",
    "E-commerce Platforms",
    "Mobile App Development",
    "Content Management Systems",
    "Video Production & Editing",
    "Print & Packaging Design"
  ],
  industries: [
    "Technology & SaaS",
    "E-commerce & Retail",
    "Healthcare & Wellness",
    "Finance & FinTech",
    "Real Estate",
    "Food & Beverage",
    "Education",
    "Non-profit Organizations",
    "Startups & Entrepreneurs"
  ]
};

// This function can be used to provide relevant context based on the user's query
function getContextForAI(query) {
  const lowerQuery = query.toLowerCase();

  let context = `You are a friendly AI assistant for BrandsWay, a creative agency in Aligarh, India. Keep responses short, friendly, and conversational. `;

  if (lowerQuery.includes('service') || lowerQuery.includes('what do you do') || lowerQuery.includes('offer')) {
    context += `Our services: ${companyData.services.slice(0, 5).join(', ')}, and more. `;
  }

  if (lowerQuery.includes('about') || lowerQuery.includes('story') || lowerQuery.includes('company')) {
    context += `We're a creative agency helping businesses shine online with branding, web development, and digital marketing. `;
  }

  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone') || lowerQuery.includes('reach')) {
    context += `Reach us at ${companyData.contact.email} or call ${companyData.contact.phone}. Located in ${companyData.contact.location}. `;
  }

  if (lowerQuery.includes('work') || lowerQuery.includes('project') || lowerQuery.includes('portfolio')) {
    context += `We've worked on brand identities, websites, mobile apps, and digital campaigns for various industries. Our work includes: ${companyData.work.featuredProjects.join(', ')}. `;
  }

  if (lowerQuery.includes('process') || lowerQuery.includes('how') || lowerQuery.includes('workflow')) {
    context += `Our process: ${companyData.process.join(' → ')}. `;
  }

  if (lowerQuery.includes('team') || lowerQuery.includes('people')) {
    context += `${companyData.team.description} `;
  }

  if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('fee')) {
    context += `We offer flexible pricing - fixed price, hourly, or retainer options. `;
  }

  if (lowerQuery.includes('expertise') || lowerQuery.includes('skill') || lowerQuery.includes('technology')) {
    context += `We specialize in React, Node.js, UI/UX design, branding, and digital marketing. `;
  }

  if (lowerQuery.includes('industry') || lowerQuery.includes('client')) {
    context += `We work with tech, e-commerce, healthcare, finance, and many other industries. `;
  }

  context += `Be friendly, concise, and helpful. Use simple language. If needed, suggest contacting us at ${companyData.contact.email}. Keep responses under 100 words.`;

  return context;
}

module.exports = { companyData, getContextForAI };
