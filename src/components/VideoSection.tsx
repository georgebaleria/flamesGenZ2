import { Play } from "lucide-react";
import { useState } from "react";

export const VideoSection = () => {
  const videos = Array.from({ length: 12 }, (_, i) => i + 1);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (videoNumber: number) => {
    setPlayingVideo(videoNumber);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            See Flames Check <span className="text-gradient">in Action</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Watch how real users are discovering their relationship vibes
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((videoNum) => (
            <div
              key={videoNum}
              className="relative group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Video Container */}
              <div className="relative aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 overflow-hidden">
                <video
                  className={`w-full h-full object-cover ${playingVideo === videoNum ? 'block' : 'hidden'}`}
                  controls
                  autoPlay={playingVideo === videoNum}
                  playsInline
                  preload="metadata"
                >
                  <source src={`/video${videoNum}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {playingVideo !== videoNum && (
                  <>
                    {/* Video Preview with Poster */}
                    <video
                      className="w-full h-full object-cover opacity-90"
                      muted
                      playsInline
                      preload="metadata"
                      style={{ pointerEvents: 'none' }}
                    >
                      <source src={`/video${videoNum}.mp4`} type="video/mp4" />
                    </video>
                    
                    {/* Play Button Overlay */}
                    <button
                      onClick={() => handleVideoClick(videoNum)}
                      className="absolute inset-0 w-full h-full flex items-center justify-center group"
                      aria-label={`Play video ${videoNum}`}
                    >
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="text-white ml-1" size={32} />
                      </div>
                    </button>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </>
                )}
              </div>

              {/* Video Info */}
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-600">
                    Video #{videoNum}
                  </span>
                  <span className="text-xs font-bold text-purple-600">
                    🎬 Watch Now
                  </span>
                </div>
                <h3 className="font-bold text-gray-900">
                  Flames Check User Experience
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl font-black mb-6">
            Ready to discover your relationship vibe?
          </p>
          <a
            href="#calculator"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-xl uppercase tracking-wide px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Try Flames Check Now →
          </a>
        </div>
      </div>
    </section>
  );
};

