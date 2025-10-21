import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import FlamesGame from './components/FlamesGame';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <div className="App">
      <AnimatePresence mode="wait">
        {showIntro && <IntroAnimation key="intro" onComplete={handleIntroComplete} />}
        
        {!showIntro && (
          <FlamesGame key="game" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;


