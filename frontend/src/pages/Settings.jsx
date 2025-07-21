import React from 'react';

export default function Settings() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div className="bg-[#1A1E25] p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Notification Preferences</h2>
          <p className="text-sm text-gray-400">Choose how often you'd like alerts about influencers and mentions.</p>
        </div>

        <div className="bg-[#1A1E25] p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Integration Settings</h2>
          <p className="text-sm text-gray-400">Connect your Instagram, YouTube, and LinkedIn accounts.</p>
        </div>

        <div className="bg-[#1A1E25] p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Account</h2>
          <p className="text-sm text-gray-400">Manage your password, profile image, and display name.</p>
        </div>
      </div>
    </div>
  );
}
