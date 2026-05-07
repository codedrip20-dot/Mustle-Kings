import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Membership = () => {
  return (
    <section
      id="membership"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-[160px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl px-8 py-20 md:px-20 text-center"
        >
          {/* Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

          {/* Small Tag */}
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 uppercase tracking-[6px] text-purple-400 text-sm mb-6"
          >
            Join Mustles Kings
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="relative z-10 text-white text-4xl sm:text-5xl md:text-7xl font-black leading-tight"
          >
            Your Strongest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Version Starts Today
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            viewport={{ once: true }}
            className="relative z-10 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed"
          >
            Stop waiting for the perfect moment. Build strength,
            discipline, confidence, and a physique that reflects your
            full potential.
          </motion.p>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 0px 30px rgba(168,85,247,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 inline-flex items-center gap-3 mt-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-10 py-5 rounded-full text-lg font-bold shadow-2xl"
          >
            Start Membership
            <ArrowRight size={22} />
          </motion.a>

          {/* Bottom Mini Stats */}
          <div className="relative z-10 mt-16 flex flex-wrap justify-center gap-10">
            <div>
              <h3 className="text-white text-3xl font-black">10K+</h3>
              <p className="text-gray-500 text-sm mt-1">
                Active Members
              </p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-black">24/7</h3>
              <p className="text-gray-500 text-sm mt-1">
                Gym Access
              </p>
            </div>

            <div>
              <h3 className="text-white text-3xl font-black">98%</h3>
              <p className="text-gray-500 text-sm mt-1">
                Satisfaction Rate
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Membership;