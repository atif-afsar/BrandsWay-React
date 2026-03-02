import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WorkCard from "./WorkCard";
import work from "../../utils/WorkData";

const categories = [
  "All",
  "Web Development",
  "Brand Identity",
  "SEO",
  "Content",
];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(6);

  const filtered =
    active === "All"
      ? work
      : work.filter((p) => {
          // Support multiple categories separated by comma or "and"
          const categories = p.category.split(/,|\s+and\s+|\s*&\s*/).map(c => c.trim());
          return categories.some(cat => cat.toLowerCase().includes(active.toLowerCase()) || active.toLowerCase().includes(cat.toLowerCase()));
        });

  return (
    <section className="bg-[#f3f4f6] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                active === cat
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filtered.slice(0, visible).map((project) => (
              <WorkCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {visible < filtered.length && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setVisible((prev) => prev + 3)}
              className="px-8 py-3 rounded-full bg-white border border-gray-300 hover:bg-red-500 hover:text-white transition"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}