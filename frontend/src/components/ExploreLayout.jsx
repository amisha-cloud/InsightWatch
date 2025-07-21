import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Sidebar from './Sidebar';

export default function ExploreLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-[#0E1117] text-white">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation Bar */}
        <nav className="flex items-center justify-between px-6 py-4 bg-[#0B0F15] border-b border-gray-700">
          <button
            onClick={() => navigate('/')}
            className="text-white hover:text-cyan-400 transition duration-200"
          >
            <FaArrowLeft size={20} />
          </button>
          <h1 className="text-xl sm:text-2xl font-semibold text-cyan-400 mx-auto">
            InsightWatch
          </h1>
          <div className="w-5" /> {/* Placeholder for right-side balance */}
        </nav>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
