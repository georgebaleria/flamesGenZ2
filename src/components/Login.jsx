import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication
    if (email === 'test@example.com' && password === 'password123') {
      onLogin({ email, name: 'Test User' });
    } else {
      setError('Invalid email or password. Try: test@example.com / password123');
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setError('');
    
    // Mock forgot password behavior
    setTimeout(() => {
      alert('Password reset link sent to your email! (This is a demo - no email will be sent)');
      setShowForgotPassword(false);
    }, 500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-[#FFF6ED] to-[#FFF0F0] flex items-center justify-center p-6"
    >
      <div className="max-w-md w-full glassmorphism rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF9F1C] to-[#FF6B6B] flex items-center justify-center text-white text-4xl font-bold shadow-lg mx-auto mb-4"
          >
            🔥
          </motion.div>
          <h1 className="text-3xl font-extrabold text-gradient mb-2">Welcome Back</h1>
          <p className="text-zinc-600">Sign in to continue your FLAMES journey</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="test@example.com"
              className="w-full rounded-2xl px-5 py-3 bg-white/90 ring-2 ring-zinc-200 focus:ring-orange-300 outline-none transition-all placeholder:text-zinc-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-zinc-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password123"
              className="w-full rounded-2xl px-5 py-3 bg-white/90 ring-2 ring-zinc-200 focus:ring-orange-300 outline-none transition-all placeholder:text-zinc-400"
              required
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full rounded-2xl px-5 py-4 font-bold shadow-lg text-white bg-gradient-to-r from-[#FF6B6B] to-[#FF9F1C] hover:scale-[1.02] active:scale-[0.98] transition-transform"
          >
            Sign In
          </button>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="w-full text-sm text-zinc-600 hover:text-orange-500 transition-colors"
          >
            Forgot Password?
          </button>
        </form>

        <div className="mt-6 p-4 bg-orange-50 rounded-2xl border border-orange-200">
          <p className="text-xs text-zinc-600 text-center">
            <strong>Demo Credentials:</strong><br />
            Email: test@example.com<br />
            Password: password123
          </p>
        </div>
      </div>
    </motion.div>
  );
}


