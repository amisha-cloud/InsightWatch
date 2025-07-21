import React from 'react';

export default function Competitors() {
  const competitors = [
    { brand: 'TrendWave', mentions: 842, sentiment: 'Positive' },
    { brand: 'BuzzTalk', mentions: 621, sentiment: 'Neutral' },
    { brand: 'InfluZone', mentions: 514, sentiment: 'Negative' },
  ];

  const sentimentColor = {
    Positive: 'text-green-400',
    Neutral: 'text-yellow-400',
    Negative: 'text-red-400',
  };

  const totalMentions = competitors.reduce((sum, c) => sum + c.mentions, 0);
  const sentimentCount = {
    Positive: competitors.filter(c => c.sentiment === 'Positive').length,
    Neutral: competitors.filter(c => c.sentiment === 'Neutral').length,
    Negative: competitors.filter(c => c.sentiment === 'Negative').length,
  };

  return (
    <div className="min-h-screen bg-[#0E0E10] text-white p-6 sm:p-10 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">
            🔍 InsightWatch – Competitor Insights
          </h1>
          <p className="text-gray-400 mt-1">
            Get real-time brand visibility and sentiment analysis of your market competitors
          </p>
        </div>
        <button
          onClick={() => window.location.href = '/'}
          className="text-sm sm:text-base text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </button>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-[#1A1E25] p-4 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Total Mentions</p>
          <h2 className="text-2xl font-bold mt-1">{totalMentions}</h2>
        </div>
        <div className="bg-[#1A1E25] p-4 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Positive Brands</p>
          <h2 className="text-xl font-semibold text-green-400 mt-1">{sentimentCount.Positive}</h2>
        </div>
        <div className="bg-[#1A1E25] p-4 rounded-xl shadow">
          <p className="text-gray-400 text-sm">Negative Brands</p>
          <h2 className="text-xl font-semibold text-red-400 mt-1">{sentimentCount.Negative}</h2>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-xl font-semibold">Competitor Table</h2>
        <input
          type="text"
          placeholder="Search brands..."
          className="px-4 py-2 rounded-lg bg-[#1A1E25] text-white placeholder-gray-500 border border-gray-700 focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
        <table className="min-w-full bg-[#1A1E25] text-left rounded-xl">
          <thead className="bg-[#2B2F36] text-gray-400 text-sm uppercase tracking-wider">
            <tr>
              <th className="px-6 py-4">Brand</th>
              <th className="px-6 py-4">Mentions</th>
              <th className="px-6 py-4">Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c, i) => (
              <tr key={i} className="border-t border-gray-700 hover:bg-[#2A2F36] transition">
                <td className="px-6 py-4 text-base font-medium">{c.brand}</td>
                <td className="px-6 py-4">{c.mentions}</td>
                <td className={`px-6 py-4 ${sentimentColor[c.sentiment]}`}>{c.sentiment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm text-center pt-10">
        Last updated: {new Date().toLocaleDateString()} | Powered by <strong>InsightWatch AI</strong>
      </p>
    </div>
  );
}
