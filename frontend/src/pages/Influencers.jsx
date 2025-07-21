import React, { useState } from "react";
import {
  User,
  Search,
  TrendingUp,
  TrendingDown,
  Filter,
  MoreHorizontal,
  X,
} from "lucide-react";

export default function Influencers() {
  const [influencers, setInfluencers] = useState([
    {
      name: "Alex Rodriguez",
      username: "@alextech",
      category: "Technology",
      followers: "2.4M",
      engagement: "4.2%",
      posts: 1247,
      status: "Rising",
    },
    {
      name: "Sarah Kim",
      username: "@sarahdesigns",
      category: "Design",
      followers: "1.8M",
      engagement: "6.1%",
      posts: 892,
      status: "Rising",
    },
    {
      name: "Marcus Johnson",
      username: "@marcosbiz",
      category: "Business",
      followers: "3.1M",
      engagement: "3.8%",
      posts: 2156,
      status: "Falling",
    },
    {
      name: "Emma Chen",
      username: "@emmastartup",
      category: "Startups",
      followers: "956K",
      engagement: "8.4%",
      posts: 634,
      status: "Rising",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newInfluencer, setNewInfluencer] = useState({
    name: "",
    username: "",
    category: "",
    followers: "",
    engagement: "",
    posts: "",
    status: "Rising",
  });

  const handleChange = (e) => {
    setNewInfluencer({ ...newInfluencer, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (
      newInfluencer.name &&
      newInfluencer.username &&
      newInfluencer.category
    ) {
      setInfluencers([...influencers, newInfluencer]);
      setNewInfluencer({
        name: "",
        username: "",
        category: "",
        followers: "",
        engagement: "",
        posts: "",
        status: "Rising",
      });
      setShowModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold">Influencers</h1>
          <p className="text-gray-400 text-sm">
            Track and analyze influencer performance
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-cyan-400 hover:bg-cyan-300 text-black px-4 py-2 rounded-md font-semibold"
        >
          👥 Add Influencer
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute top-2.5 left-3 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search influencers..."
            className="w-full bg-[#1e293b] text-white py-2 pl-10 pr-4 rounded-md outline-none"
          />
        </div>
        <button className="bg-[#1e293b] text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Filter size={16} /> Filter
        </button>
      </div>

      {/* Influencer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {influencers.map((inf, idx) => (
          <div
            key={idx}
            className="bg-[#1e293b] p-5 rounded-xl shadow hover:scale-[1.02] transition duration-200"
          >
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white">
                <User size={28} />
              </div>
              <MoreHorizontal className="text-gray-400" size={20} />
            </div>
            <h2 className="text-xl font-semibold mt-4">{inf.name}</h2>
            <p className="text-sm text-gray-400">{inf.username}</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                {inf.category}
              </span>
              <div
                className={`text-sm font-medium flex items-center gap-1 ${
                  inf.status === "Rising"
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {inf.status === "Rising" ? (
                  <TrendingUp size={14} />
                ) : (
                  <TrendingDown size={14} />
                )}
                {inf.status}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-4">
              <div className="text-center">
                <p className="text-white font-semibold">{inf.followers}</p>
                <p>Followers</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">{inf.engagement}</p>
                <p>Engagement</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">{inf.posts}</p>
                <p>Posts</p>
              </div>
            </div>
            <button className="w-full mt-5 bg-black/80 hover:bg-black text-white py-2 rounded-md text-sm font-medium">
              View Profile
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-[#1e293b] text-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Add Influencer</h2>

            <div className="space-y-3">
              <input
                name="name"
                placeholder="Name"
                value={newInfluencer.name}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <input
                name="username"
                placeholder="@username"
                value={newInfluencer.username}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <input
                name="category"
                placeholder="Category"
                value={newInfluencer.category}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <input
                name="followers"
                placeholder="Followers (e.g. 1.2M)"
                value={newInfluencer.followers}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <input
                name="engagement"
                placeholder="Engagement (e.g. 5.3%)"
                value={newInfluencer.engagement}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <input
                name="posts"
                placeholder="Posts (e.g. 432)"
                value={newInfluencer.posts}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              />
              <select
                name="status"
                value={newInfluencer.status}
                onChange={handleChange}
                className="w-full bg-gray-800 p-2 rounded-md outline-none"
              >
                <option value="Rising">Rising</option>
                <option value="Falling">Falling</option>
              </select>
              <button
                onClick={handleAdd}
                className="w-full mt-4 bg-cyan-400 hover:bg-cyan-300 text-black py-2 rounded-md font-semibold"
              >
                ➕ Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
