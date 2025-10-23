import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Sparkles } from "lucide-react";

const FLAMES_MEANINGS = {
  F: { label: "Friends", emoji: "👫", description: "🔥 You're Destined to be Great Friends!" },
  L: { label: "Lovers", emoji: "💕", description: "💘 Sparks Fly! Love is in the Air!" },
  A: { label: "Affection", emoji: "💖", description: "💞 There's Sweet Affection Between You!" },
  M: { label: "Marriage", emoji: "💒", description: "💍 It's Fate! You're Made for Each Other!" },
  E: { label: "Enemies", emoji: "⚔️", description: "💥 Uh-oh! Fire and Ice Don't Mix!" },
  S: { label: "Siblings", emoji: "👨‍👩‍👧‍👦", description: "👫 More Like Family Ties than Flames!" },
};

export const FlamesCalculator = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");
  const [showTransitionVideo, setShowTransitionVideo] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [calculationCount, setCalculationCount] = useState(0);

  // Content validation function
  const hasSubstantialContent = () => {
    // Check if page has substantial content
    const sections = document.querySelectorAll('section');
    const paragraphs = document.querySelectorAll('p');
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    
    // Ensure minimum content requirements
    return sections.length >= 4 && 
           paragraphs.length >= 10 && 
           headings.length >= 5;
  };

  // Page readiness validation
  const isPageReady = () => {
    return document.readyState === 'complete' && 
           document.querySelectorAll('section').length > 0;
  };

  // Core FLAMES Algorithm Functions
  function cleanName(s) {
    return s.toUpperCase().replace(/[^A-Z]/g, '');
  }

  function countRemainingLetters(a, b) {
    const arrA = a.split('');
    const arrB = b.split('');
    for (let i = arrA.length - 1; i >= 0; i--) {
      const ch = arrA[i];
      const j = arrB.indexOf(ch);
      if (j !== -1) {
        arrA.splice(i, 1);
        arrB.splice(j, 1);
      }
    }
    return arrA.length + arrB.length;
  }

  // Josephus-style FLAMES implementation
  function computeFlames(n) {
    let f = ['F', 'L', 'A', 'M', 'E', 'S'];
    let idx = 0;
    while (f.length > 1) {
      idx = (idx + n - 1) % f.length;
      f.splice(idx, 1);
    }
    return f[0];
  }

  function getResultPhrase(letter) {
    return FLAMES_MEANINGS[letter] || { label: 'Unknown', emoji: '🤔', description: 'Hmm... try again' };
  }

  const calculateFlames = () => {
    if (!name1.trim() || !name2.trim()) {
      setError('Please enter both names.');
      return;
    }

    setError('');
    setIsCalculating(true);
    
    // Simulate calculation animation
    setTimeout(() => {
      // Step 1: Clean names
      const a = cleanName(name1);
      const b = cleanName(name2);
      
      // Step 2: Count unmatched letters
      const n = countRemainingLetters(a, b);
      const effectiveN = n === 0 ? 6 : n;
      
      // Step 3: Josephus elimination
      const letter = computeFlames(effectiveN);
      
      // Step 4: Get result
      setResult(letter);
      setIsCalculating(false);
      
      // Show transition video immediately
      setShowTransitionVideo(true);
      
      // Show result popup after video completes
      setTimeout(() => {
        setShowTransitionVideo(false);
        setShowResultPopup(true);
        
        // Increment calculation count (triggers popup ads)
        setCalculationCount(prev => {
          const newCount = prev + 1;
          
          // Show popup ad after every 3 calculations (reduced frequency)
          if (newCount > 0 && newCount % 3 === 0) {
            // Only show ads on content-rich pages that are fully loaded
            if (hasSubstantialContent() && isPageReady()) {
              setTimeout(() => {
                // Trigger popup ad logic here if needed
                console.log('Ad would be shown for calculation:', newCount);
              }, 3000);
            } else {
              console.log('Ad skipped: Insufficient content or page not ready');
            }
          }
          
          return newCount;
        });
      }, 3000); // Video duration
    }, 1500);
  };

  const resetCalculator = () => {
    setName1("");
    setName2("");
    setResult(null);
    setError("");
    setShowTransitionVideo(false);
    setShowResultPopup(false);
  };

  return (
    <>
      {/* Transition Video */}
      {showTransitionVideo && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <video
            autoPlay
            muted
            loop={false}
            onEnded={() => {
              setShowTransitionVideo(false);
              setShowResultPopup(true);
            }}
            onError={(e) => {
              console.error('Transition video loading error:', e);
              console.log('Video src:', e.target.src);
              setShowTransitionVideo(false);
              setShowResultPopup(true);
            }}
            onLoadStart={() => console.log('Transition video loading started')}
            onCanPlay={() => console.log('Transition video can play')}
            onLoadedData={() => console.log('Transition video data loaded')}
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/genzfire.mp4" type="video/mp4" />
            {/* Fallback if video fails */}
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <h1 className="text-6xl font-extrabold text-white mb-4">FLAMES</h1>
                <p className="text-xl text-white/90">Discover Your Destiny</p>
              </div>
            </div>
          </video>
        </div>
      )}

      <div className="w-full max-w-md mx-auto">
        {!result ? (
        <div className="space-y-6 animate-fade-in">
          <div className="space-y-3">
            <div className="relative">
              <Input
                placeholder="Your name"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                className="h-14 text-lg border-2 border-primary/20 focus:border-primary transition-all"
              />
              <Heart className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary animate-pulse-slow" size={20} />
            </div>
            <div className="relative">
              <Input
                placeholder="Their name"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                className="h-14 text-lg border-2 border-secondary/20 focus:border-secondary transition-all"
              />
              <Sparkles className="absolute right-4 top-1/2 -translate-y-1/2 text-accent animate-pulse-slow" size={20} />
            </div>
          </div>

          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-lg border border-destructive/20">
              {error}
            </div>
          )}
          
          <Button
            variant="hero"
            size="xl"
            onClick={calculateFlames}
            disabled={!name1.trim() || !name2.trim() || isCalculating}
            className="w-full"
          >
            {isCalculating ? "CALCULATING..." : "🔥 CHECK MY FLAMES NOW!"}
          </Button>
          
          <p className="text-xs text-center text-muted-foreground">
            🔒 No Sign-Up • 💯 100% Free • ⚡ Instant Results
          </p>
        </div>
      ) : showResultPopup ? (
        <div className="space-y-6 animate-scale-in">
          <div className="gradient-card rounded-2xl p-8 text-center shadow-card">
            <div className="text-6xl mb-4 animate-bounce">
              {getResultPhrase(result).emoji}
            </div>
            <h3 className="text-4xl font-black text-primary-foreground mb-2">
              {getResultPhrase(result).label.toUpperCase()}
            </h3>
            <p className="text-primary-foreground/90 text-lg">
              {getResultPhrase(result).description}
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-xl p-4 text-center">
            <p className="text-sm font-semibold mb-1">
              {name1} + {name2}
            </p>
            <p className="text-xs text-muted-foreground">
              Your connection status is revealed! 
            </p>
          </div>
          
          <Button
            variant="outline"
            size="lg"
            onClick={resetCalculator}
            className="w-full"
          >
            Check Another Connection
          </Button>
        </div>
      ) : null}

      {/* FLAMES Meaning Cards */}
      <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
        {[
          ['F', 'Friends'],
          ['L', 'Lovers'],
          ['A', 'Affection'],
          ['M', 'Marriage'],
          ['E', 'Enemies'],
          ['S', 'Siblings'],
        ].map(([k, t]) => (
          <div
            key={k}
            className="bg-white rounded-2xl p-3 text-center ring-1 ring-zinc-100 shadow-sm hover:scale-105 transition-transform"
          >
            <div className="text-xl font-bold text-gradient">{k}</div>
            <div className="text-xs text-zinc-500 mt-1">{t}</div>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};
