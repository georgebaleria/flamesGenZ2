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

  const dieFaces = ['F', 'L', 'A', 'M', 'E', 'S'];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-500 via-cyan-500 to-yellow-400 flex items-center justify-center">
      {/* Flaming Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          >
            <div className="text-6xl animate-flame">🔥</div>
          </motion.div>
        ))}
      </div>

      {/* Sparks */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            y: [0, -50],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeOut",
          }}
        />
      ))}

      {/* 3D Spinning Die */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotateX: 0, rotateY: 0 }}
        animate={{ 
          scale: 1,
          rotateX: [0, 360, 720],
          rotateY: [0, 360, 720],
        }}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
        }}
        style={{ perspective: '1000px' }}
      >
        <div className="relative w-40 h-40" style={{ transformStyle: 'preserve-3d' }}>
          {/* Die faces */}
          {dieFaces.map((letter, index) => {
            const positions = [
              { rotateY: '0deg', translateZ: '60px' },      // Front
              { rotateY: '90deg', translateZ: '60px' },     // Right
              { rotateY: '180deg', translateZ: '60px' },    // Back
              { rotateY: '270deg', translateZ: '60px' },    // Left
              { rotateX: '90deg', translateZ: '60px' },     // Top
              { rotateX: '-90deg', translateZ: '60px' },    // Bottom
            ];

            return (
              <motion.div
                key={index}
                className="absolute w-40 h-40 bg-gradient-to-br from-white to-gray-100 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-purple-300"
                style={{
                  ...positions[index],
                  transform: `translateZ(${positions[index].translateZ})`,
                }}
                animate={{
                  rotateY: index === 0 ? [0, 360] : undefined,
                  rotateX: index === 4 ? [90, 450] : undefined,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <span className="text-6xl font-extrabold text-gradient">{letter}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        className="absolute bottom-20 left-0 right-0 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-black text-white mb-2 drop-shadow-2xl">
          FLAMES
        </h1>
        <p className="text-xl text-white/90 font-semibold drop-shadow-lg">
          Discover Your Destiny
        </p>
      </motion.div>

      {/* Loading indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}


