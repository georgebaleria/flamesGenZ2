import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Move InputField outside the component to prevent recreation
const InputField = React.memo(({ label, value, setValue, placeholder }) => {
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [setValue]);

  return (
    <div className="w-full">
      <label className="block text-sm font-semibold text-zinc-700 mb-2">{label}</label>
      <input
        type="text"
        aria-label={label}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-2xl px-5 py-3 bg-white/90 ring-2 ring-zinc-200 focus:ring-purple-300 focus:ring-2 outline-none transition-all placeholder:text-zinc-400"
        autoComplete="off"
      />
    </div>
  );
});

InputField.displayName = 'InputField';

export default function FlamesGame({ hasPaid, onPaymentSuccess }) {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [phase, setPhase] = useState('idle'); // idle | animating | revealed
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showPopupAd, setShowPopupAd] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [calculationCount, setCalculationCount] = useState(0);
  const [resultLetter, setResultLetter] = useState(null);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');


  // Initialize AdSense ads (only if user hasn't paid)
  useEffect(() => {
    if (!hasPaid) {
      try {
        if (window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        console.log('AdSense not available:', err);
      }
    }
  }, [hasPaid]);

  // Show popup ad after every 2 calculations for non-paying users
  useEffect(() => {
    if (!hasPaid && calculationCount > 0 && calculationCount % 2 === 0) {
      setTimeout(() => {
        setShowPopupAd(true);
      }, 3000); // Show popup 3 seconds after result
    }
  }, [calculationCount, hasPaid]);

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

  function getResultPhrase(letter) {
    const map = {
      F: { title: 'Friends', phrase: '🔥 You\'re Destined to be Great Friends!', emoji: '👫' },
      L: { title: 'Lovers', phrase: '💘 Sparks Fly! Love is in the Air!', emoji: '💕' },
      A: { title: 'Affection', phrase: '💞 There\'s Sweet Affection Between You!', emoji: '💖' },
      M: { title: 'Marriage', phrase: '💍 It\'s Fate! You\'re Made for Each Other!', emoji: '💒' },
      E: { title: 'Enemies', phrase: '💥 Uh-oh! Fire and Ice Don\'t Mix!', emoji: '⚔️' },
      S: { title: 'Siblings', phrase: '👫 More Like Family Ties than Flames!', emoji: '👨‍👩‍👧‍👦' },
    };
    return map[letter] || { title: 'Unknown', phrase: 'Hmm... try again', emoji: '🤔' };
  }

  async function handleSubmit(e) {
    e && e.preventDefault();
    setError('');

    const a = cleanName(name1);
    const b = cleanName(name2);
    if (!a || !b) {
      setError('Please enter both names.');
      return;
    }

    const n = countRemainingLetters(a, b);
    const effectiveN = n === 0 ? 6 : n;

    setPhase('animating');
    setResultLetter(null);
    setResultText('');

    setTimeout(() => {
      const letter = computeFlames(effectiveN);
      const r = getResultPhrase(letter);
      setResultLetter(letter);
      setResultText(r.phrase);
      setPhase('revealed');
      
      // Show result popup with fire transition
      setShowResultPopup(true);
      
      // Increment calculation count (triggers popup ads for non-paying users)
      setCalculationCount(prev => prev + 1);
    }, 2500);
  }

  function handleReset() {
    setName1('');
    setName2('');
    setPhase('idle');
    setResultLetter(null);
    setResultText('');
    setError('');
  }

  function handlePayment() {
    setShowPaymentModal(true);
  }

  function handlePaymentSuccess() {
    setShowPaymentModal(false);
    setShowPopupAd(false);
    onPaymentSuccess();
    alert('Payment successful! Ads have been removed. Enjoy your ad-free experience! 🎉');
  }

  function handleClosePopupAd() {
    setShowPopupAd(false);
  }

  function handleCloseResultPopup() {
    setShowResultPopup(false);
  }


  async function handleShare() {
    const shareText = `FLAMES Result: ${resultText} — ${name1} + ${name2}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: 'FLAMES Result', text: shareText });
      } catch (err) {
        // user cancelled
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        alert('Result copied to clipboard! Share it with your friends!');
      } catch (err) {
        alert('Unable to share. Try copying manually: ' + shareText);
      }
    }
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-cyan-50 to-yellow-50 p-4 md:p-6">
      <div className="max-w-2xl mx-auto">
        {/* Main Game Container with Flaming Border */}
        <div className="flaming-border rounded-3xl">
          <div className="glassmorphism rounded-3xl shadow-2xl p-6 md:p-8">
            {/* Header */}
            <header className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                🔥
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-gradient">FLAMES</h1>
                <p className="text-sm text-zinc-600">Find your destiny — friends, love, or something else?</p>
              </div>
            </header>

            {/* Payment Status Display */}
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl border border-purple-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{hasPaid ? '✨' : '📺'}</span>
                  <div>
                    <p className="text-xs text-zinc-600">Status</p>
                    <p className="text-xl font-extrabold text-gradient">
                      {hasPaid ? 'Ad-Free' : 'Free with Ads'}
                    </p>
                  </div>
                </div>
                {!hasPaid && (
                  <button
                    onClick={handlePayment}
                    className="text-xs bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Remove Ads - ₱499
                  </button>
                )}
              </div>
            </div>

            {/* Top Banner Ad (728×90) - Only show if not paid */}
            {!hasPaid && (
              <div className="mb-6 flex justify-center">
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-XXXX"
                     data-ad-slot="XXXXXXXXXX"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 mb-6">
              <InputField 
                key="name1"
                label="Your Name" 
                value={name1} 
                setValue={setName1} 
                placeholder="e.g. Alex" 
              />
              <InputField 
                key="name2"
                label="Target Name" 
                value={name2} 
                setValue={setName2} 
                placeholder="e.g. Jamie" 
              />

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-purple-600 bg-purple-50 p-3 rounded-xl"
                >
                  {error}
                </motion.div>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-2xl px-5 py-4 font-bold shadow-lg text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-[1.02] active:scale-[0.98] transition-transform"
                  aria-disabled={phase === 'animating'}
                >
                  {phase === 'animating' ? 'Calculating...' : 'Find Out'}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-16 h-16 rounded-2xl bg-white ring-2 ring-zinc-200 flex items-center justify-center text-2xl hover:scale-105 transition-transform"
                  title="Reset"
                >
                  🔁
                </button>
              </div>
            </form>

            {/* In-Article Ad (after form) - Only show if not paid */}
            {!hasPaid && (
              <div className="mb-6 flex justify-center">
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-XXXX"
                     data-ad-slot="XXXXXXXXXX"
                     data-ad-format="rectangle"
                     data-full-width-responsive="true"></ins>
              </div>
            )}

            {/* Animation area */}
            <div className="min-h-[300px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {phase === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-zinc-500"
                  >
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-lg">Enter names and tap <strong>Find Out</strong></p>
                    <p className="text-sm mt-2">for a dramatic reveal!</p>
                  </motion.div>
                )}

                {phase === 'animating' && (
                  <motion.div
                    key="animating"
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="relative"
                  >
                    {/* Dramatic Pulsating Flame Circle */}
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 via-cyan-400 to-purple-500 flex items-center justify-center shadow-2xl animate-flame">
                      <div className="text-7xl animate-glow">🔥</div>
                    </div>
                    {/* Orbiting letters */}
                    {['F', 'L', 'A', 'M', 'E', 'S'].map((letter, i) => (
                      <motion.div
                        key={letter}
                        className="absolute text-4xl font-extrabold text-white drop-shadow-lg"
                        style={{
                          top: '50%',
                          left: '50%',
                        }}
                        animate={{
                          x: [0, Math.cos((i * 60) * Math.PI / 180) * 120, 0],
                          y: [0, Math.sin((i * 60) * Math.PI / 180) * 120, 0],
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        {letter}
                      </motion.div>
                    ))}
                  </motion.div>
                )}

                {phase === 'revealed' && (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-zinc-500"
                  >
                    <div className="text-6xl mb-4">✨</div>
                    <p className="text-lg">Result ready! Check the popup below.</p>
                    <p className="text-sm mt-2">Your destiny awaits!</p>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

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
                <motion.div
                  key={k}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-3 text-center ring-1 ring-zinc-100 shadow-sm"
                >
                  <div className="text-xl font-bold text-gradient">{k}</div>
                  <div className="text-xs text-zinc-500 mt-1">{t}</div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Ad (responsive) - Only show if not paid */}
            {!hasPaid && (
              <div className="mt-6 mb-4 flex justify-center">
                <ins className="adsbygoogle"
                     style={{display: 'block'}}
                     data-ad-client="ca-pub-XXXX"
                     data-ad-slot="XXXXXXXXXX"
                     data-ad-format="auto"
                     data-full-width-responsive="true"></ins>
              </div>
            )}

            {/* Footer */}
            <footer className="mt-6 text-xs text-zinc-500 text-center">
              <p className="mb-4">Fun, for entertainment only — not a real predictor of relationships.</p>
              
              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-4 text-xs">
                <button 
                  onClick={() => alert('Privacy Policy: We collect minimal data (names for FLAMES calculation) and store it locally on your device. No personal information is shared with third parties.')}
                  className="text-zinc-600 hover:text-purple-500 transition-colors underline"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => alert('Terms of Service: This is a fun entertainment app. Results are not scientifically accurate. Use responsibly and have fun!')}
                  className="text-zinc-600 hover:text-purple-500 transition-colors underline"
                >
                  Terms of Service
                </button>
                <button 
                  onClick={() => alert('Contact: For support or feedback, please reach out through the app store or contact the development team.')}
                  className="text-zinc-600 hover:text-purple-500 transition-colors underline"
                >
                  Contact
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">💎</div>
              <h2 className="text-2xl font-bold text-zinc-800 mb-2">Remove Ads</h2>
              <p className="text-zinc-600">Get unlimited FLAMES calculations without any ads!</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-cyan-50 rounded-2xl p-6 mb-6 border border-purple-200">
              <div className="text-center">
                <p className="text-sm text-zinc-600 mb-2">One-time payment</p>
                <p className="text-4xl font-extrabold text-gradient">₱499</p>
                <p className="text-xs text-zinc-500 mt-2">Lifetime ad-free access</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span>No more banner ads</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span>No popup interruptions</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span>Unlimited FLAMES calculations</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="text-green-500">✓</span>
                <span>Premium experience</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="flex-1 rounded-2xl px-5 py-3 font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentSuccess}
                className="flex-1 rounded-2xl px-5 py-3 font-bold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-[1.02] transition-transform"
              >
                Pay ₱499
              </button>
            </div>

            <p className="text-xs text-zinc-500 text-center mt-4">
              Payment will be processed via Wise integration
            </p>
          </motion.div>
        </div>
      )}

      {/* Popup Ad for non-paying users */}
      {showPopupAd && !hasPaid && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-3xl p-6 max-w-sm w-full shadow-2xl"
          >
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">📺</div>
              <h3 className="text-lg font-bold text-zinc-800 mb-2">Advertisement</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Support us by watching this quick ad, or upgrade to Premium to remove all ads!
              </p>
            </div>

            {/* Mock Ad Content */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-4 border border-blue-200">
              <div className="text-center">
                <div className="text-2xl mb-2">🎮</div>
                <p className="text-sm font-semibold text-zinc-800">Try Our New Game!</p>
                <p className="text-xs text-zinc-600">Download now and get 50% off!</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleClosePopupAd}
                className="flex-1 rounded-2xl px-4 py-2 text-sm font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Skip Ad
              </button>
              <button
                onClick={handlePayment}
                className="flex-1 rounded-2xl px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:scale-[1.02] transition-transform"
              >
                Remove Ads - ₱499
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Result Popup with Fire Transition and Phoenix */}
      {showResultPopup && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl relative overflow-hidden"
          >
            {/* Fire Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-cyan-100 to-yellow-100 opacity-50"></div>
            
            {/* Static Phoenix */}
            <div className="absolute top-4 right-4 text-4xl">
              🔥
            </div>

            {/* Static Fire Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                🔥
              </div>
            ))}

            {/* Result Content */}
            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="inline-flex items-center justify-center rounded-full w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-cyan-500 text-white text-4xl font-extrabold shadow-2xl mb-4"
              >
                {resultLetter}
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-2xl font-extrabold text-gradient mb-2"
              >
                {getResultPhrase(resultLetter).title}
              </motion.h2>
              
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-zinc-700 mb-6"
              >
                {resultText}
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex gap-2 justify-center"
              >
                <button
                  onClick={handleShare}
                  className="rounded-full px-4 py-2 bg-white ring-2 ring-zinc-200 font-semibold hover:scale-105 transition-transform text-sm"
                >
                  📤 Share
                </button>
                <button
                  onClick={handleCloseResultPopup}
                  className="rounded-full px-4 py-2 bg-white ring-2 ring-zinc-200 font-semibold hover:scale-105 transition-transform text-sm"
                >
                  ✨ Close
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}


