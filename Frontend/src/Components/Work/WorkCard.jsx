import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
    >
      {/* Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="p-6">
        {/* Category */}
        <p className="text-xs text-[#C61407] tracking-widest font-medium uppercase">
          {project.category}
        </p>

        {/* Title */}
        <h3 className="mt-3 text-xl font-bold text-gray-900">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Live Link Button */}
        {project.link && project.link !== "#" && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-[#C61407] text-white rounded-lg hover:bg-[#a01006] transition-colors duration-300 font-medium"
          >
            View Live Project
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}