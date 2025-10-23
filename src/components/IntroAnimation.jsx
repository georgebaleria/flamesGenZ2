import React, { useState, useEffect } from 'react';

const IntroAnimation = ({ onComplete }) => {
  const [videoError, setVideoError] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);

  useEffect(() => {
    // Fallback timeout for iOS Safari
    const timeout = setTimeout(() => {
      console.log('Video timeout reached, proceeding to main page');
      setTimeoutReached(true);
      onComplete();
    }, 10000); // 10 second timeout

    return () => clearTimeout(timeout);
  }, [onComplete]);

  const handleVideoError = (e) => {
    console.error('Video loading error:', e);
    setVideoError(true);
    onComplete();
  };

  const handleVideoEnd = () => {
    console.log('Video ended successfully');
    onComplete();
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play');
  };

  // If video has error or timeout, show fallback
  if (videoError || timeoutReached) {
    return (
      <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-white mb-4">FLAMES</h1>
            <p className="text-xl text-white/90">Discover Your Destiny</p>
            <div className="mt-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        autoPlay
        muted
        playsInline // Critical for iOS Safari
        loop={false}
        onEnded={handleVideoEnd}
        onError={handleVideoError}
        onCanPlay={handleVideoCanPlay}
        onLoadStart={() => console.log('Video loading started')}
        onLoadedData={() => console.log('Video data loaded')}
        className="w-full h-full object-cover"
        preload="auto" // Help with loading
      >
        <source src="/genzfire.mp4" type="video/mp4" />
        {/* Fallback content for browsers that don't support video */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <h1 className="text-6xl font-extrabold text-white mb-4">FLAMES</h1>
            <p className="text-xl text-white/90">Discover Your Destiny</p>
          </div>
        </div>
      </video>
    </div>
  );
};

export default IntroAnimation;