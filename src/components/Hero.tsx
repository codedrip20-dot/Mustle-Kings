import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex items-center pt-24"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-[-150px] right-[-100px] w-[300px] h-[300px] bg-pink-500/20 blur-[120px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag */}
            <p className="uppercase tracking-[6px] text-purple-400 text-sm mb-5">
              Elite Fitness Club
            </p>

            {/* Heading */}
            <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-black leading-tight">
              Build Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Dream Physique
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg mt-6 max-w-xl leading-relaxed">
              Unlock your strongest version with expert trainers,
              personalized workouts, premium equipment, and a community
              built for champions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 mt-10">
              <motion.a
                href="#membership"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-bold text-center hover:bg-gray-200 transition duration-300"
              >
                Start Membership
              </motion.a>

              <motion.a
                href="#programs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-center hover:bg-white/10 transition duration-300"
              >
                Explore Programs
              </motion.a>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 flex-wrap">
              <div>
                <h2 className="text-3xl font-bold text-white">5K+</h2>
                <p className="text-gray-500 text-sm">Active Members</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">15+</h2>
                <p className="text-gray-500 text-sm">Expert Trainers</p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">24/7</h2>
                <p className="text-gray-500 text-sm">Gym Access</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                alt="Gym Workout"
                className="w-[320px] sm:w-[420px] lg:w-[500px] h-[500px] object-cover rounded-[40px] shadow-2xl"
              />

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-5 w-[220px]"
              >
                <p className="text-white font-semibold text-lg">
                  Transformation Starts Here
                </p>

                <p className="text-gray-400 text-sm mt-2">
                  Join the fitness revolution with customized training
                  plans and elite coaching.
                </p>
              </motion.div>

              {/* Small Floating Image */}
              <motion.img
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
                alt="Workout"
                className="absolute -top-10 -right-10 w-32 h-32 object-cover rounded-3xl border-4 border-black shadow-2xl hidden md:block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;