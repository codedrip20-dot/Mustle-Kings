import { motion } from "framer-motion";

const transformations = [
  {
    name: "Alex Carter",
    result: "Lost 18kg in 5 Months",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    quote:
      "This gym completely changed my mindset, discipline, and physique.",
  },

  {
    name: "Sophia Lee",
    result: "Built Strength & Confidence",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
    quote:
      "The trainers pushed me beyond limits I never thought possible.",
  },

  {
    name: "Michael Ross",
    result: "12% Body Fat Transformation",
    image:
      "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=1200&auto=format&fit=crop",
    quote:
      "The energy, people, and coaching here are simply elite level.",
  },
];

const Transformation = () => {
  return (
    <section
      id="transformations"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-4">
            Real Results
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Transformations
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              That Inspire
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Thousands have transformed their bodies and mindset through
            consistency, elite coaching, and relentless discipline.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {transformations.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -12 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-[420px]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                {/* Floating Badge */}
                <div className="absolute top-5 left-5 bg-white/10 backdrop-blur-lg border border-white/10 px-4 py-2 rounded-full">
                  <p className="text-white text-sm font-semibold">
                    Transformation
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-white text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-purple-400 font-semibold mt-2">
                  {item.result}
                </p>

                <p className="text-gray-400 mt-5 leading-relaxed">
                  "{item.quote}"
                </p>

                {/* Progress Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400">
                      Transformation Progress
                    </span>

                    <span className="text-white font-semibold">
                      98%
                    </span>
                  </div>

                  <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "98%" }}
                      transition={{ duration: 1.5 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformation;