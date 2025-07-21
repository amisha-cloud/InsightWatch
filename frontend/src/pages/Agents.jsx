import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function Agents() {
  const [agents, setAgents] = useState([]);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [responding, setResponding] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:8000/agents/')
      .then((res) => {
        setAgents(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('⚠️ Failed to load agents.');
        setLoading(false);
      });
  }, []);

  const handleSend = async () => {
    if (!userInput.trim() || !selectedAgent) return;
    const newChat = [...chat, { sender: 'user', text: userInput }];
    setChat(newChat);
    setUserInput('');
    setResponding(true);

    try {
      const res = await axios.post('http://localhost:11434/api/generate', {
        model: 'llama3',
        prompt: `Explain the following about ${selectedAgent.name}: ${userInput}`,
        stream: false,
      });
      setChat([...newChat, { sender: 'bot', text: res.data.response }]);
    } catch {
      setChat([...newChat, { sender: 'bot', text: '❌ Failed to fetch response from Ollama.' }]);
    } finally {
      setResponding(false);
    }
  };

  const handleBack = () => {
    setSelectedAgent(null);
    setChat([]);
  };

  if (loading) return <div className="p-6 text-lg text-gray-300">Loading agents...</div>;
  if (error) return <div className="p-6 text-red-400">{error}</div>;

  return (
    <div className="px-6 py-16 min-h-screen bg-[#0B0F15] text-white">
      {!selectedAgent ? (
        <>
          <h2 className="text-5xl font-bold mb-4 text-white">🚀 Insight Agents</h2>
          <div className="w-20 h-1 bg-teal-400 rounded-full mb-6"></div>
          <p className="text-gray-400 mb-12 text-lg max-w-2xl">Click an agent to learn more and ask questions about what it can do.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent) => (
              <div
                key={agent.id}
                className="bg-[#10151C] hover:bg-[#18212A] border border-gray-700 hover:border-teal-500 transition-all duration-200 rounded-2xl p-6 cursor-pointer shadow-lg"
                onClick={() => setSelectedAgent(agent)}
              >
                <h3 className="text-2xl font-semibold text-teal-400 mb-2">{agent.name}</h3>
                <p className="text-gray-300 text-base mb-4">{agent.description}</p>
                <span className="text-xs inline-block px-2 py-1 rounded bg-teal-600 text-white">
                  Status: {agent.status}
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            className="flex items-center text-gray-400 hover:text-white mb-8 text-sm"
            onClick={handleBack}
          >
            <FaArrowLeft className="mr-2" /> Back to Agents
          </button>

          <h2 className="text-4xl font-bold text-teal-400 mb-2">{selectedAgent.name}</h2>
          <p className="text-gray-300 mb-6 text-lg">{selectedAgent.description}</p>

          <div className="bg-[#10151C] border border-gray-700 rounded-2xl p-6 h-[400px] overflow-y-auto mb-6 shadow-inner">
            {chat.length === 0 ? (
              <p className="text-gray-500 text-sm">💬 Ask something about this agent to get started.</p>
            ) : (
              chat.map((msg, i) => (
                <div
                  key={i}
                  className={`my-2 p-3 rounded-lg w-fit max-w-[75%] ${
                    msg.sender === 'user'
                      ? 'bg-teal-600 text-white self-end ml-auto'
                      : 'bg-gray-700 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-4 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Ask how this agent works..."
            />
            <button
              onClick={handleSend}
              disabled={responding}
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-60"
            >
              {responding ? 'Thinking...' : 'Ask'}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
