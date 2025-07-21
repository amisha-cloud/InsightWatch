import { motion } from 'framer-motion';
import { FaSearch, FaChartLine, FaBell } from 'react-icons/fa';

export default function HowItWorks() {
  const steps = [
    {
      icon: <FaSearch size={36} />,
      title: "Discover Influencers",
      desc: "Search across platforms and uncover influencers aligned with your brand niche.",
    },
    {
      icon: <FaChartLine size={36} />,
      title: "Track Performance",
      desc: "Analyze metrics like engagement rate, sentiment, and follower spikes in real-time.",
    },
    {
      icon: <FaBell size={36} />,
      title: "Get Notified",
      desc: "Receive alerts when competitors make a move or trends shift in your domain.",
    },
  ];

  return (
    <section className="bg-[#111827] py-24 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          How InsightWatch Works
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          From discovery to actionable alerts, InsightWatch is your all-in-one influence intelligence platform.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-[#1F2937] rounded-2xl p-8 shadow-md hover:shadow-[0_0_20px_#14b8a6] transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-teal-400 mb-4">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-300 text-base leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
