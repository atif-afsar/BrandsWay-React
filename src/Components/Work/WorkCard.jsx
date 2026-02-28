import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 group border border-gray-100"
    >
      {/* Category */}
      <p className="text-xs text-[#C61407] tracking-widest font-medium uppercase">
        {project.category}
      </p>

      {/* Title */}
      <h3 className="mt-3 text-xl font-bold text-gray-900">
        {project.title}
      </h3>
    </motion.div>
  );
}