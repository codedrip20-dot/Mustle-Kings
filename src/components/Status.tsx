import { motion } from "framer-motion";

const stats = [
  {
    number: "10K+",
    label: "Active Members",
  },
  {
    number: "25+",
    label: "Elite Coaches",
  },
  {
    number: "98%",
    label: "Transformation Rate",
  },
  {
    number: "24/7",
    label: "Gym Access",
  },
];

const Status = () => {
  return (
    <section
      id="status"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full"></div>

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
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-purple-400 text-sm mb-4">
            Our Impact
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight">
            Numbers That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Speak Power
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Trusted by thousands of athletes and fitness enthusiasts
            pushing beyond limits every single day.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 text-center overflow-hidden group"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>

              {/* Number */}
              <h3 className="text-5xl md:text-6xl font-black text-white mb-4 relative z-10">
                {stat.number}
              </h3>

              {/* Label */}
              <p className="text-gray-400 text-lg relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;