import { motion } from "framer-motion";
import { Dumbbell, Flame, Shield } from "lucide-react";

const programs = [
  {
    title: "Strength Training",
    description:
      "Build raw power, muscle mass, and explosive strength with elite-level weight training programs.",
    icon: Dumbbell,
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Functional Fitness",
    description:
      "Improve mobility, endurance, flexibility, and athletic performance with dynamic functional workouts.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop",
  },

  {
    title: "Combat Conditioning",
    description:
      "Train like a fighter with intense conditioning sessions focused on stamina, agility, and discipline.",
    icon: Shield,
    image:
      "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=1200&auto=format&fit=crop",
  },
];

const Programs = () => {
  return (
    <section
      id="programs"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Content */}
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
            Elite Programs
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
            Train Beyond
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Your Limits
            </span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Discover premium fitness programs designed to maximize
            strength, endurance, athleticism, and transformation.
          </p>
        </motion.div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;

            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[32px] overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                  {/* Floating Icon */}
                  <div className="absolute top-5 left-5 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/10 flex items-center justify-center">
                    <Icon className="text-white w-7 h-7" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-white text-2xl font-bold">
                    {program.title}
                  </h3>

                  <p className="text-gray-400 mt-5 leading-relaxed">
                    {program.description}
                  </p>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold"
                  >
                    Explore Program
                  </motion.button>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;