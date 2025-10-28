import { FlamesCalculator } from "./FlamesCalculator";

export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-pulse-slow">💕</div>
        <div className="absolute top-40 right-20 text-5xl animate-pulse-slow delay-100">✨</div>
        <div className="absolute bottom-32 left-20 text-5xl animate-pulse-slow delay-200">💖</div>
        <div className="absolute bottom-20 right-32 text-6xl animate-pulse-slow delay-300">🔥</div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src="/responsive/logo-md.webp" 
              srcSet="/responsive/logo-sm.webp 48w, /responsive/logo-md.webp 96w, /responsive/logo-lg.webp 192w"
              sizes="(max-width: 768px) 48px, 96px"
              alt="Flames Check logo - Free love compatibility calculator for Gen Z relationships" 
              title="Flames Check - Modern FLAMES Calculator"
              width="48" 
              height="48" 
              loading="eager"
              className="w-12 h-12" 
            />
            <h1 className="text-3xl md:text-4xl font-black tracking-tight font-lato px-0 text-amber-400">Flames Check</h1>
          </div>
          
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            CRUSHING? FIND OUT YOUR<br />
            <span className="text-gradient bg-white/90">REAL VIBE CHECK.</span>
          </h2>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Stop stressing. Flames Check uses a viral 90s game + modern numerology to spill the tea on your connection. 
            <span className="font-bold"> Totally free, zero weird commitment.</span>
          </p>
          
          {/* Calculator Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl max-w-2xl mx-auto">
            <FlamesCalculator />
          </div>
          
          {/* Trust Cue */}
          <p className="text-white/80 text-sm md:text-base">
            ✨ Seen the trend? Join <span className="font-bold text-white">2M+ others</span> who got their Flames Check score.
          </p>
        </div>
      </div>
    </section>;
};