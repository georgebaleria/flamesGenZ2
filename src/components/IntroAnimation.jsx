import React from 'react';

const IntroAnimation = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      <video
        autoPlay
        muted
        loop={false}
        onEnded={onComplete}
        onError={(e) => {
          console.error('Video loading error:', e);
          console.log('Video src:', e.target.src);
          onComplete(); // Fallback to complete if video fails
        }}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
        onLoadedData={() => console.log('Video data loaded')}
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
    </div>
  );
};

export default IntroAnimation;