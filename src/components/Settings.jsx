import React from 'react';
import { motion } from 'framer-motion';

export default function Settings({ user, hasPaid, onLogout }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="min-h-screen bg-gradient-to-b from-[#FFF6ED] to-[#FFF0F0] p-6"
    >
      <div className="max-w-2xl mx-auto">
        <div className="glassmorphism rounded-3xl shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF9F1C] to-[#FF6B6B] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              ⚙️
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-gradient">Settings</h1>
              <p className="text-zinc-600">Manage your account and credits</p>
            </div>
          </div>

          {/* User Info Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
            <h2 className="text-lg font-bold text-zinc-800 mb-4">Account Information</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Name:</span>
                <span className="font-semibold text-zinc-800">{user.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-600">Email:</span>
                <span className="font-semibold text-zinc-800">{user.email}</span>
              </div>
            </div>
          </div>

          {/* Payment Status Card */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 shadow-lg mb-6 border-2 border-orange-200">
            <h2 className="text-lg font-bold text-zinc-800 mb-4">Account Status</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-600 mb-1">Current Plan</p>
                <p className="text-2xl font-extrabold text-gradient">
                  {hasPaid ? 'Premium (Ad-Free)' : 'Free (With Ads)'}
                </p>
              </div>
              <div className="text-5xl">{hasPaid ? '✨' : '📺'}</div>
            </div>
            <p className="text-xs text-zinc-600 mt-4">
              {hasPaid 
                ? 'You have unlimited FLAMES calculations without ads!' 
                : 'Upgrade to Premium for ₱499 to remove all ads and enjoy unlimited calculations.'
              }
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="text-3xl mb-2">📊</div>
              <h3 className="font-bold text-zinc-800 mb-1">Usage</h3>
              <p className="text-sm text-zinc-600">Track your FLAMES history</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-md">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-bold text-zinc-800 mb-1">Tips</h3>
              <p className="text-sm text-zinc-600">Share results with friends</p>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="w-full rounded-2xl px-5 py-4 font-bold shadow-lg text-white bg-gradient-to-r from-zinc-600 to-zinc-800 hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Logout
          </button>

          {/* Footer */}
          <div className="mt-6 text-center text-xs text-zinc-500">
            <p>FLAMES GenZ - For entertainment purposes only</p>
            <p className="mt-1">© 2024 All rights reserved</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}


