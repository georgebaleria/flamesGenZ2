import { AlertTriangle } from "lucide-react";

export const ProblemSection = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const problems = [
    {
      title: "REFRESHING FOR CLUES AGAIN?",
      description: "You're refreshing their social page for clues.",
      imageSrc: "/optimized/refreshingforclauseagain.webp",
      fallbackSrc: "/refreshingforclauseagain.png",
      implications: [
        "Wasted hours scrolling through feeds",
        "Missed opportunities while overthinking",
        "Increased anxiety from constant checking"
      ],
      cta: "FIND YOUR PEACE"
    },
    {
      title: "GROUP CHAT CONFESSIONS?",
      description: "You text your group chat 10 times before hitting send.",
      imageSrc: "/optimized/groupchatconfessions.webp",
      fallbackSrc: "/groupchatconfessions.png",
      implications: [
        "Friends get tired of your uncertainty spiral",
        "You lose confidence in your own judgment",
        "Real connections get delayed by second-guessing"
      ],
      cta: "TRUST YOUR VIBE!"
    },
    {
      title: "MIND MOVIES ON LOOP?",
      description: "You keep running the same scenarios in your head, zero clarity.",
      imageSrc: "/optimized/mindmovesonloop.webp",
      fallbackSrc: "/mindmovesonloop.png",
      implications: [
        "Mental exhaustion from constant anxiety",
        "Making decisions based on fear instead of facts",
        "Potentially missing out on great relationships due to paralysis"
      ],
      cta: "BREAK THE CYCLE!"
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Is Your Vibe Real or Just<br />
            <span className="text-gradient">in Your Head?</span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            We get it. It's hard to tell if your connection with someone is actually a thing or if you're just spiraling.
          </p>
        </div>
        
        <div className="grid gap-12 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Mobile Phone Container */}
              <div className="relative">
                {/* Phone Frame with Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 opacity-30" />
                
                {/* Content */}
                <div className="relative p-8 md:p-12">
                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 uppercase tracking-tight">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-700 mb-8 font-medium">
                    {item.description}
                  </p>
                  
                  {/* Image Container - Mobile Phone Style */}
                  <div className="flex justify-center mb-8">
                    <div className="relative">
                      <picture>
                        <source srcSet={item.imageSrc} type="image/webp" />
                        <img 
                          src={item.fallbackSrc}
                          alt={`${item.title} - ${item.description} | Flames Check relationship compatibility calculator`}
                          title={`${item.title} - Flames Check`}
                          width="600"
                          height="900"
                          className="max-w-full h-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                          loading="eager"
                        />
                      </picture>
                    </div>
                  </div>
                  
                  {/* Implications Box */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 border-l-4 border-red-500 rounded-xl p-6 shadow-lg">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center">
                        <AlertTriangle className="text-white" size={24} />
                      </div>
                      <h4 className="text-lg md:text-xl font-black text-red-800 uppercase">
                        IF YOU DON'T ADDRESS THIS:
                      </h4>
                    </div>
                    
                    <ul className="space-y-3 ml-13">
                      {item.implications.map((implication, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-800">
                          <span className="text-red-600 font-black text-xl flex-shrink-0">•</span>
                          <span className="font-semibold text-base">{implication}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={scrollToTop}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black text-lg uppercase tracking-wide px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      {item.cta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-3xl font-black mb-4">
            You need the <span className="text-gradient">real-deal answer</span> without the drama.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black text-xl uppercase tracking-wide px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Your Flames Check Score Now →
          </button>
        </div>
      </div>
    </section>
  );
};
