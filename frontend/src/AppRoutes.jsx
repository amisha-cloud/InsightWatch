// src/components/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ExploreLayout from './components/ExploreLayout';
import Dashboard from './pages/Dashboard';
import Influencers from './pages/Influencers';
import Hashtags from './pages/Hashtags';
import Competitors from './pages/Competitors';
import Settings from './pages/Settings';
import Agents from './pages/Agents';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/agents" element={<Agents />} />

      {/* Shared Explore Layout */}
      <Route path="/explore" element={<ExploreLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="influencers" element={<Influencers />} />
        <Route path="hashtags" element={<Hashtags />} />
        <Route path="competitors" element={<Competitors />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
