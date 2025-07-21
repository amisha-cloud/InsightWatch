import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Influencer Monitoring',
    description: 'Tracks influencer posts and brand mentions across Instagram, YouTube, and LinkedIn.',
    agent: 'influencer-monitor'
  },
  {
    title: 'Competitor Insights',
    description: 'Get real-time competitor content analysis and engagement trends.',
    agent: 'competitor-insights'
  },
  {
    title: 'Hashtag Trends',
    description: 'Stay updated with trending hashtags in your niche and get suggestions.',
    agent: 'hashtag-trends'
  },
  {
    title: 'Digest Report',
    description: 'Receive daily/weekly summaries of all influencer, hashtag, and competitor insights.',
    agent: 'digest-report'
  },
  {
    title: 'Intelligent Agents',
    description: 'Let AI agents summarize and analyze all activity for better decision-making.',
    agent: 'intelligent-agents'
  },
  {
    title: 'Conversational Interface',
    description: 'Chat with your data to ask questions like "What’s trending today?".',
    agent: 'chat-interface'
  }
];

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (agent) => {
    navigate(`/agent/${agent}`);
  };

  return (
    <section className="min-h-screen bg-[#0B0F15] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">InsightWatch Features</h1>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-8 rounded-full" />
        <p className="text-gray-400 mb-16 text-xl">Import the insights that matter. Skip the noise.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              role="button"
              tabIndex={0}
              aria-label={`Start ${feature.title}`}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleClick(feature.agent)}
              onKeyDown={(e) => e.key === 'Enter' && handleClick(feature.agent)}
              className="bg-[#10151C] rounded-2xl p-8 min-h-[220px] cursor-pointer shadow-md hover:shadow-lg hover:bg-[#172028] transition-all duration-300 border border-[#1F2937] hover:border-teal-500 hover:scale-[1.02] active:scale-[0.98] outline-none focus:ring-2 focus:ring-teal-500"
            >
              <h3 className="text-2xl font-semibold text-teal-400 mb-4">{feature.title}</h3>
              <p className="text-gray-400 text-base">{feature.description}</p>
              <div className="mt-6 text-right">
                <span className="text-teal-400 text-base underline">Start Agent →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
