import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-gradient-to-b from-[#0B0F15] via-[#111827] to-[#1a2332] flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl text-center text-white px-4">
        {/* Brand Name */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-4 tracking-tight text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Insight<span className="text-teal-400">Watch</span>
        </motion.h1>

        {/* Tagline */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-teal-300 mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Eyes on Influence!
          Data at Your Fingertips!
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Welcome to your AI-powered command center — track influencers, decode viral trends, 
          and monitor competitors in real-time with clarity, speed, and precision.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center gap-4 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <button className="bg-teal-400 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-teal-300 active:scale-95 transition-all duration-300">
            Explore Dashboard
          </button>
          <button className="border border-teal-400 text-teal-300 hover:bg-teal-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
