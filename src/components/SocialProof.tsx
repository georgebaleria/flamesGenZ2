import { Star, TrendingUp } from "lucide-react";

export const SocialProof = () => {
  const testimonials = [
    {
      quote: "Okay so I was SPIRALING over this guy for like 3 weeks straight. Did Flames Check just for fun and got AFFECTION. Decided to shoot my shot and turns out he was feeling the same way?? We're literally talking every day now. This thing is scary accurate ngl 😭",
      author: "Zara M., 18",
      result: "Affection",
      emoji: "💖",
    },
    {
      quote: "Me and my bestie have been inseparable since middle school and I always wondered why we just GET each other. Tried this and got SIBLING and I swear I almost cried. Like it makes SO much sense. She's literally the sister I never had and now we have proof lmaooo",
      author: "Jordan K., 16",
      result: "Sibling",
      emoji: "🏡",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Don't Take <span className="text-gradient">Our Word</span> For It
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                ))}
              </div>
              
              <div className="mb-4">
                <span className="inline-block px-4 py-2 gradient-card rounded-full text-white font-bold text-sm">
                  {testimonial.emoji} {testimonial.result}
                </span>
              </div>
              
              <p className="text-lg mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <p className="font-bold text-muted-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 text-center text-white shadow-glow">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={24} />
            <p className="text-xl font-black">100% Free • 2 Million+ Names Checked</p>
          </div>
          <p className="text-white/90">#FlamesCheck is trending on TikTok!</p>
        </div>
      </div>
    </section>
  );
};
