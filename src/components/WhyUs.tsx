import { motion } from "framer-motion";
import {
  Dumbbell,
  ShieldCheck,
  TimerReset,
  Trophy,
} from "lucide-react";

const features = [
  {
    title: "Elite Trainers",
    description:
      "Train with certified professionals focused on real transformation and performance.",
    icon: Trophy,
  },

  {
    title: "Modern Equipment",
    description:
      "Experience world-class machines and premium workout environments.",
    icon: Dumbbell,
  },

  {
    title: "24/7 Access",
    description:
      "Workout anytime with unlimited access designed for your schedule.",
    icon: TimerReset,
  },

  {
    title: "Results Driven",
    description:
      "Every program is built to maximize consistency, progress, and discipline.",
    icon: ShieldCheck,
  },
];

const WhyUs = () => {
  return (
    <section
      id="why-us"
      className="relative py-28 bg-black overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/20 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-4">
              Why Choose Us
            </p>

            <h2 className="text-white text-4xl md:text-6xl font-black leading-tight">
              More Than Just
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                A Gym Experience
              </span>
            </h2>

            <p className="text-gray-400 text-lg mt-8 leading-relaxed">
              We combine elite coaching, modern facilities, and a
              results-driven mindset to help you unlock your strongest
              version physically and mentally.
            </p>

            {/* Premium Bullet Points */}
            <div className="mt-10 space-y-5">
              {[
                "Personalized transformation plans",
                "Professional fitness coaching",
                "Supportive fitness community",
                "Premium equipment & recovery zones",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>

                  <p className="text-gray-300 text-lg">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold"
            >
              Start Your Journey
            </motion.button>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-[28px] p-8 overflow-hidden"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <Icon className="text-white w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 mt-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10 pointer-events-none"></div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;