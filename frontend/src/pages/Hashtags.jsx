import React from 'react';
import { Search, TrendingUp, Eye, BarChart3 } from 'lucide-react';

const hashtags = [
  {
    id: 1,
    name: '#AIRevolution',
    posts: '67.3K',
    engagement: '1.2M',
    growth: '+42.1%',
  },
  {
    id: 2,
    name: '#TechTrends',
    posts: '45.2K',
    engagement: '892K',
    growth: '+25.4%',
  },
  {
    id: 3,
    name: '#DesignThinking',
    posts: '32.1K',
    engagement: '654K',
    growth: '+18.7%',
  },
];

const hashtagCards = [
  {
    name: '#TechTrends',
    category: 'Technology',
    posts: '45.2K',
    engagement: '892K',
    score: 85,
    growth: '+25.4%',
  },
  {
    name: '#DesignThinking',
    category: 'Design',
    posts: '32.1K',
    engagement: '654K',
    score: 85,
    growth: '+18.7%',
  },
  {
    name: '#StartupLife',
    category: 'Business',
    posts: '28.9K',
    engagement: '542K',
    score: 45,
    growth: '-5.2%',
  },
];

export default function Hashtags() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Hashtags</h1>
          <p className="text-gray-400">Monitor trending hashtags and their performance</p>
        </div>
        <button className="bg-cyan-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-cyan-300">
          # Track Hashtag
        </button>
      </div>

      <div className="relative mb-10">
        <Search className="absolute top-2.5 left-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search hashtags..."
          className="w-full bg-[#1e293b] text-white py-2 pl-10 pr-4 rounded-md outline-none"
        />
      </div>

      <div className="bg-[#1e293b] p-6 rounded-xl mb-10">
        <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
          <TrendingUp size={20} /> Top Trending
        </h2>
        <p className="text-sm text-gray-400 mb-4">Hashtags with the highest growth this week</p>

        {hashtags.map((tag, index) => (
          <div
            key={tag.id}
            className="flex justify-between items-center border-b border-[#334155] py-4"
          >
            <div className="flex items-center gap-4">
              <div className="bg-cyan-400 text-black rounded-full w-8 h-8 flex items-center justify-center font-bold">
                #{index + 1}
              </div>
              <div>
                <h3 className="font-semibold">{tag.name}</h3>
                <p className="text-sm text-gray-400">{tag.posts} posts</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${tag.growth.includes('-') ? 'text-red-400' : 'text-green-400'}`}>
                {tag.growth}
              </p>
              <p className="text-sm text-gray-400">{tag.engagement} engagement</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {hashtagCards.map((card) => (
          <div key={card.name} className="bg-[#1e293b] p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-1">{card.name}</h3>
            <span className="text-sm bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">{card.category}</span>

            <div className="mt-4 flex justify-between text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <BarChart3 size={16} /> {card.posts} posts
              </div>
              <div className="flex items-center gap-1">
                <Eye size={16} /> {card.engagement}
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm">Trend Score</p>
              <span className="text-white font-bold">{card.score}/100</span>
            </div>
            <p
              className={`mt-2 text-right font-semibold ${
                card.growth.includes('-') ? 'text-red-400' : 'text-green-400'
              }`}
            >
              {card.growth}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
