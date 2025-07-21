import React from 'react';
import { motion } from 'framer-motion';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Feature from '../components/Features'; 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F15] text-white font-inter">
      <Nav />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* How It Works */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <HowItWorks />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Feature /> 
      </motion.div>

      {/* Testimonials */}
      <motion.section
        className="py-24 px-6 bg-[#0B0F15] text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-10">What Our Users Say</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {[
            {
              name: 'Ritika Sharma',
              feedback: 'InsightWatch helped us identify high-performing influencers we’d never considered before. Game changer!',
            },
            {
              name: 'Jay Malhotra',
              feedback: 'Real-time trend updates and brand tracking gave us a huge edge over our competition.',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-[#1A1E25] p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <p className="italic text-gray-300 mb-4">“{testimonial.feedback}”</p>
              <p className="text-teal-400 font-semibold">– {testimonial.name}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Trusted Brands */}
      <motion.section
        className="py-20 px-6 text-center bg-[#12161F]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Leading Brands</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Top companies rely on InsightWatch to track, plan, and lead influencer campaigns.
        </p>
        <div className="flex flex-wrap justify-center gap-8 text-lg font-medium text-teal-400">
          {['Meta', 'Adobe', 'Spotify', 'Unilever'].map((brand, idx) => (
            <span key={idx} className="hover:text-teal-300 transition duration-200">
              {brand}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Newsletter */}
      <motion.section
        className="py-20 px-6 text-center bg-[#0B0F15]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="text-gray-400 mb-6">Join our newsletter for weekly insights and updates.</p>
        <form className="max-w-xl mx-auto flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-2/3 px-4 py-3 rounded-md bg-[#1A1E25] text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-md font-semibold transition"
          >
            Subscribe
          </button>
        </form>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-24 px-6 text-center bg-[#12161F]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Gaining Influence Today</h2>
        <p className="text-gray-400 mb-6 text-lg">
          Track, Analyze, and Win — all in one dashboard.
        </p>
        <motion.a
          href="/dashboard"
          className="inline-block px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#0B0F15] py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} InsightWatch. All rights reserved.
      </footer>
    </div>
  );
}
