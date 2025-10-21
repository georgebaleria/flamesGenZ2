import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import FlamesGame from './components/FlamesGame';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [hasPaid, setHasPaid] = useState(false);

  // Load payment status from localStorage on mount
  useEffect(() => {
    const savedPayment = localStorage.getItem('flames_payment');
    if (savedPayment === 'true') {
      setHasPaid(true);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  const handlePaymentSuccess = () => {
    setHasPaid(true);
    localStorage.setItem('flames_payment', 'true');
  };


  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation key="intro" onComplete={handleIntroComplete} />}
        
        {!showIntro && (
          <FlamesGame
            key="game"
            hasPaid={hasPaid}
            onPaymentSuccess={handlePaymentSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


