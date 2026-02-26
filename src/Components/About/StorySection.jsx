import { motion } from "framer-motion";

export default function StorySection() {
  return (
    <section className="w-full bg-[#f5f6f8] py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Small Label */}
          <p className="text-sm tracking-widest text-red-500 font-medium mb-4">
            THE JOURNEY
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-medium text-gray-900 leading-tight tracking-[-0.02em] mb-6">
            Our Story
          </h2>

          {/* Red underline */}
          <div className="w-12 h-[3px] bg-red-500 mb-8 rounded-full"></div>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-600 text-[15px] md:text-base leading-relaxed font-medium">
            <p>
              Founded on the principles of strategic storytelling and digital
              excellence, BrandsWay has evolved from a boutique PR firm into a
              global digital marketing powerhouse.
            </p>

            <p>
              Our journey is defined by our commitment to building authentic
              connections between brands and their audiences through
              data-driven strategies and creative innovation. We don’t just
              manage reputations; we build legacies.
            </p>

            <p>
              Today, BrandsWay stands at the intersection of traditional media
              relations and cutting-edge digital growth, helping visionaries
              navigate the complex modern landscape with clarity and impact.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/about/story.jpeg" // replace with your image
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute -bottom-8 left-8 bg-red-600 text-white px-8 py-6 rounded-xl shadow-lg"
          >
            <h3 className="text-3xl font-semibold leading-none">12+</h3>
            <p className="text-sm mt-2 font-light opacity-90">
              Years of Excellence
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}