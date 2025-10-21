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

export default function FlamesGame() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [phase, setPhase] = useState('idle'); // idle | animating | revealed
  const [showPopupAd, setShowPopupAd] = useState(false);
  const [showResultPopup, setShowResultPopup] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showTransitionVideo, setShowTransitionVideo] = useState(false);
  const [calculationCount, setCalculationCount] = useState(0);
  const [resultLetter, setResultLetter] = useState(null);
  const [resultText, setResultText] = useState('');
  const [error, setError] = useState('');


  // Initialize AdSense ads
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.log('AdSense not available:', err);
    }
  }, []);

  // Show popup ad after every 2 calculations
  useEffect(() => {
    if (calculationCount > 0 && calculationCount % 2 === 0) {
      setTimeout(() => {
        setShowPopupAd(true);
      }, 3000); // Show popup 3 seconds after result
    }
  }, [calculationCount]);

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

    // Calculate result immediately
    const letter = computeFlames(effectiveN);
    const r = getResultPhrase(letter);
    setResultLetter(letter);
    setResultText(r.phrase);
    setPhase('revealed');
    
    // Show transition video immediately
    setShowTransitionVideo(true);
    
    // Show result popup after video completes
    setTimeout(() => {
      setShowTransitionVideo(false);
      setShowResultPopup(true);
      
      // Increment calculation count (triggers popup ads)
      setCalculationCount(prev => prev + 1);
    }, 3000); // Video duration
  }

  function handleReset() {
    setName1('');
    setName2('');
    setPhase('idle');
    setResultLetter(null);
    setResultText('');
    setError('');
  }


  function handleClosePopupAd() {
    setShowPopupAd(false);
  }

  function handleCloseResultPopup() {
    setShowResultPopup(false);
  }


  function handleShare() {
    setShowShareModal(true);
  }

  function handleCloseShareModal() {
    setShowShareModal(false);
  }

  function getShareText() {
    return `🔥 FLAMES Result: ${name1} & ${name2} = ${resultLetter} (${getResultPhrase(resultLetter).title}) - ${resultText}`;
  }

  function getShareUrl() {
    return window.location.href;
  }

  function shareToSocial(platform) {
    const shareText = getShareText();
    const shareUrl = getShareUrl();
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);
    
    let shareLink = '';
    
    switch(platform) {
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodedText}%20${encodedUrl}`;
        break;
      case 'telegram':
        shareLink = `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`;
        break;
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`;
        break;
      case 'messenger':
        shareLink = `https://www.facebook.com/dialog/send?link=${encodedUrl}&app_id=YOUR_APP_ID&redirect_uri=${encodedUrl}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing, copy to clipboard
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
          alert('Content copied! You can now paste it in your Instagram story or post.');
        });
        return;
      case 'tiktok':
        // TikTok doesn't support direct sharing, copy to clipboard
        navigator.clipboard.writeText(`${shareText}\n${shareUrl}`).then(() => {
          alert('Content copied! You can now paste it in your TikTok video description.');
        });
        return;
      default:
        return;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank', 'width=600,height=400');
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


            {/* Top Banner Ad (728×90) */}
            <div className="mb-6 flex justify-center">
              <ins className="adsbygoogle"
                   style={{display: 'block'}}
                   data-ad-client="ca-pub-XXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

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

            {/* In-Article Ad (after form) */}
            <div className="mb-6 flex justify-center">
              <ins className="adsbygoogle"
                   style={{display: 'block'}}
                   data-ad-client="ca-pub-XXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="rectangle"
                   data-full-width-responsive="true"></ins>
            </div>

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

            {/* Bottom Ad (responsive) */}
            <div className="mt-6 mb-4 flex justify-center">
              <ins className="adsbygoogle"
                   style={{display: 'block'}}
                   data-ad-client="ca-pub-XXXX"
                   data-ad-slot="XXXXXXXXXX"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
            </div>

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


      {/* Popup Ad */}
      {showPopupAd && (
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
                Support us by watching this quick ad!
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

            <div className="flex justify-center">
              <button
                onClick={handleClosePopupAd}
                className="rounded-2xl px-6 py-2 text-sm font-semibold text-zinc-600 bg-zinc-100 hover:bg-zinc-200 transition-colors"
              >
                Skip Ad
              </button>
            </div>
          </motion.div>
        </div>
      )}

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
            <div className="absolute top-4 right-4 text-4xl opacity-50 z-0">
              🔥
            </div>

            {/* Static Fire Particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute text-2xl opacity-50 z-0"
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

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden"
          >
            {/* Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-cyan-100 to-yellow-100 opacity-50"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-extrabold text-gradient mb-2">Share Your Result</h2>
                <p className="text-sm text-zinc-600">Choose how you want to share your FLAMES result</p>
              </div>

              {/* Social Media Buttons */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {/* WhatsApp */}
                <button
                  onClick={() => shareToSocial('whatsapp')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-green-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">💬</span>
                  <span>WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  onClick={() => shareToSocial('telegram')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">✈️</span>
                  <span>Telegram</span>
                </button>

                {/* Facebook */}
                <button
                  onClick={() => shareToSocial('facebook')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-600 text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">📘</span>
                  <span>Facebook</span>
                </button>

                {/* Messenger */}
                <button
                  onClick={() => shareToSocial('messenger')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-400 text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">💌</span>
                  <span>Messenger</span>
                </button>

                {/* Instagram */}
                <button
                  onClick={() => shareToSocial('instagram')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">📷</span>
                  <span>Instagram</span>
                </button>

                {/* TikTok */}
                <button
                  onClick={() => shareToSocial('tiktok')}
                  className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-black text-white font-semibold hover:scale-105 transition-transform"
                >
                  <span className="text-2xl">🎵</span>
                  <span>TikTok</span>
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleCloseShareModal}
                  className="flex-1 rounded-2xl px-4 py-3 bg-zinc-200 text-zinc-800 font-semibold hover:scale-105 transition-transform"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${getShareText()}\n${getShareUrl()}`).then(() => {
                      alert('Result copied to clipboard!');
                      handleCloseShareModal();
                    });
                  }}
                  className="flex-1 rounded-2xl px-4 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}


