import { NavLink } from 'react-router-dom';
import { FaHome, FaHashtag, FaUsers, FaCogs, FaChartBar, FaRobot } from 'react-icons/fa'; // Added FaRobot for Agents icon

export default function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { name: 'Dashboard', icon: FaHome, path: '/explore' },
    { name: 'Influencers', icon: FaUsers, path: '/explore/influencers' },
    { name: 'Hashtags', icon: FaHashtag, path: '/explore/hashtags' },
    { name: 'Competitors', icon: FaChartBar, path: '/explore/competitors' },
    { name: 'Agents', icon: FaRobot, path: '/agents' }, // ✅ Added this line
    { name: 'Settings', icon: FaCogs, path: '/explore/settings' },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#0B0F15] z-50 shadow-lg transform transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:z-auto`}
      >
        <div className="mt-20 flex flex-col gap-1 overflow-y-auto h-[calc(100vh-5rem)] px-3">
          {navItems.map(({ name, icon: Icon, path }) => (
            <NavLink
              key={name}
              to={path}
              end={name === 'Dashboard'}
              onClick={() => {
                if (window.innerWidth < 768) setIsOpen(false);
              }}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-3 rounded-lg text-sm font-medium transition duration-200 ${
                  isActive ? 'bg-gray-800 text-cyan-400' : 'text-white hover:bg-gray-700'
                }`
              }
            >
              <Icon className="text-lg" />
              {name}
            </NavLink>
          ))}
        </div>
      </aside>
    </>
  );
}
