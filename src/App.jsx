import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import Login from './components/Login';
import FlamesGame from './components/FlamesGame';
import Settings from './components/Settings';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState('login'); // login | game | settings
  const [user, setUser] = useState(null);
  const [hasPaid, setHasPaid] = useState(false);

  // Load user and payment status from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('flames_user');
    const savedPayment = localStorage.getItem('flames_payment');
    
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setCurrentView('game');
    }
    if (savedPayment === 'true') {
      setHasPaid(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('flames_user', JSON.stringify(userData));
    setCurrentView('game');
  };

  const handleLogout = () => {
    setUser(null);
    setHasPaid(false);
    localStorage.removeItem('flames_user');
    localStorage.removeItem('flames_payment');
    setCurrentView('login');
  };

  const handlePaymentSuccess = () => {
    setHasPaid(true);
    localStorage.setItem('flames_payment', 'true');
  };


  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation key="intro" onComplete={handleIntroComplete} />}
        
        {!showIntro && !user && currentView === 'login' && (
          <Login key="login" onLogin={handleLogin} />
        )}

        {!showIntro && user && currentView === 'game' && (
          <div key="game">
            <FlamesGame
              hasPaid={hasPaid}
              onPaymentSuccess={handlePaymentSuccess}
            />
            <div className="fixed bottom-6 right-6 z-40">
              <button
                onClick={() => setCurrentView('settings')}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9F1C] to-[#FF6B6B] text-white text-2xl shadow-2xl hover:scale-110 transition-transform"
                title="Settings"
              >
                ⚙️
              </button>
            </div>
          </div>
        )}

        {!showIntro && user && currentView === 'settings' && (
          <div key="settings">
            <Settings user={user} hasPaid={hasPaid} onLogout={handleLogout} />
            <div className="fixed bottom-6 right-6 z-40">
              <button
                onClick={() => setCurrentView('game')}
                className="w-14 h-14 rounded-full bg-gradient-to-br from-[#FF9F1C] to-[#FF6B6B] text-white text-2xl shadow-2xl hover:scale-110 transition-transform"
                title="Back to Game"
              >
                🔥
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


