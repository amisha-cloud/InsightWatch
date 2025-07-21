import React from 'react';

export default function Dashboard() {
  return (
    <div className="text-white space-y-10">
      {/* Page Heading */}
      <div>
        <h1 className="text-4xl font-bold mb-2">Welcome to Your Dashboard</h1>
        <p className="text-gray-400">Monitor key stats and recent trends in real time.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {[
          { title: 'Total Influencers', value: '124', color: 'text-cyan-400' },
          { title: 'Trending Hashtags', value: '38', color: 'text-pink-400' },
          { title: 'Competitor Posts', value: '89', color: 'text-orange-400' },
          { title: 'Engagement Rate', value: '76%', color: 'text-green-400' },
        ].map(({ title, value, color }) => (
          <div
            key={title}
            className="bg-[#1A1F2B] rounded-2xl shadow-md p-6 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className={`text-3xl font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-[#1A1F2B] p-6 rounded-2xl shadow-md overflow-x-auto">
        <h2 className="text-2xl font-semibold mb-4">Recent Influencer Activity</h2>
        <table className="w-full text-left min-w-[600px]">
          <thead className="text-gray-400 text-sm">
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Platform</th>
              <th className="py-2 px-4">Followers</th>
              <th className="py-2 px-4">Last Post</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            {[
              { name: 'TechGuru', platform: 'Instagram', followers: '85.2K', lastPost: '2h ago' },
              { name: 'CodeQueen', platform: 'YouTube', followers: '142K', lastPost: '5h ago' },
              { name: 'MarketMaven', platform: 'Twitter', followers: '64.8K', lastPost: '1d ago' },
            ].map((item) => (
              <tr key={item.name} className="border-b border-gray-700 hover:bg-gray-800">
                <td className="py-2 px-4">{item.name}</td>
                <td className="py-2 px-4">{item.platform}</td>
                <td className="py-2 px-4">{item.followers}</td>
                <td className="py-2 px-4">{item.lastPost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Insights Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="bg-[#1A1F2B] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Trending Hashtags</h2>
          <ul className="list-disc ml-5 text-gray-300 space-y-2">
            <li>#AIForMarketing</li>
            <li>#BuildInPublic</li>
            <li>#InfluencerWatch</li>
            <li>#ReelEngagement</li>
          </ul>
        </div>

        <div className="bg-[#1A1F2B] p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Platform Insights</h2>
          <p className="text-gray-300 mb-2">Instagram has seen a 12% rise in brand engagement this week.</p>
          <p className="text-gray-300">YouTube Shorts outperforming regular uploads by 2.1x in impressions.</p>
        </div>
      </div>
    </div>
  );
}
