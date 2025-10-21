import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroAnimation({ onComplete }) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setTimeout(() => onComplete(), 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!showIntro) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        autoPlay
        muted
        loop={false}
        onEnded={onComplete}
        className="w-full h-full object-cover"
      >
        <source src="/genzfire.mp4" type="video/mp4" />
        {/* Fallback to current animation */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-white mb-4">FLAMES</h1>
            <p className="text-xl text-white/90">Discover Your Destiny</p>
          </div>
        </div>
      </video>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="text-center w-full">
          <h1 
            className="text-white mb-2 md:mb-4"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(70px, 12vw, 300px)',
              fontWeight: 400,
              lineHeight: 0.9,
              textShadow: '0 0 20px rgba(0,0,0,0.8)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            FLAMES
          </h1>
          <p 
            className="text-white"
            style={{
              fontFamily: 'Open Sans, sans-serif',
              fontSize: 'clamp(30px, 5vw, 100px)',
              fontWeight: 100,
              lineHeight: 1,
              textShadow: '0 0 10px rgba(0,0,0,0.8)',
              whiteSpace: 'nowrap',
              overflow: 'hidden'
            }}
          >
            Find your destiny
          </p>
        </div>
      </div>
    </div>
  );
}


