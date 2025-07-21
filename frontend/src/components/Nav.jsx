import { FaBell, FaUserCircle, FaBars } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav({ toggleSidebar, showBack = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate(-1); // Go to previous page
  };

  const handleExplore = () => {
    if (location.pathname !== '/explore') {
      navigate('/explore');
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-[#0B0F15] border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* Left: Back arrow or Hamburger + Logo */}
      <div className="flex items-center gap-3">
        {showBack ? (
          <button onClick={handleBack} className="text-white text-2xl mr-2">
            ←
          </button>
        ) : (
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white text-2xl mr-2"
          >
            <FaBars />
          </button>
        )}
        <div className="flex items-center gap-3 ml-2 sm:ml-6">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white">
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-semibold hidden sm:inline text-white">InsightWatch</span>
        </div>
      </div>

      {/* Center: Search */}
      <div className="hidden sm:flex-grow sm:flex sm:justify-center px-4">
        <input
          type="text"
          placeholder="Search influencers, hashtags..."
          className="bg-gray-800 text-white px-4 py-2 rounded-lg outline-none w-full max-w-md placeholder-gray-400"
        />
      </div>

      {/* Right: Explore + Icons */}
      <div className="flex items-center gap-6">
        <button
          onClick={handleExplore}
          className="text-white border px-3 py-1 rounded-md hover:bg-cyan-500 hover:text-black"
        >
          Explore
        </button>
        <FaBell size={20} className="text-white cursor-pointer hover:text-cyan-400" />
        <FaUserCircle size={28} className="text-white cursor-pointer hover:text-cyan-400" />
      </div>
    </nav>
  );
}
