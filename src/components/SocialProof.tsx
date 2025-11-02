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
    {
      quote: "Y'all I did Flames Check with my ex just to be petty and got ENEMY. I was like nah that can't be right... but then I remembered the messy breakup and how we literally can't be in the same room. This app knew what I refused to admit for months 😂",
      author: "Morgan T., 20",
      result: "Enemy",
      emoji: "🔪",
    },
    {
      quote: "My boyfriend and I have been together for 2 years and everyone says we're perfect for each other. Did Flames Check out of curiosity and got MARRIAGE. I literally screamed!! This is THE sign y'all 🥹💍",
      author: "Luna R., 22",
      result: "Marriage",
      emoji: "💍",
    },
    {
      quote: "I've been crushing on my coworker for MONTHS but was too scared to make a move. Flames Check gave me LOVE and I was like okay universe, I see you! We're going on our third date this weekend and I owe it all to this app! 🎉",
      author: "Alex P., 24",
      result: "Love",
      emoji: "🔥",
    },
    {
      quote: "My college roommate and I got FRIENDSHIP and honestly it's so accurate. We're not romantically involved at all but we're literally ride or dies. This helped me understand our bond better. Highly recommend!",
      author: "Sam D., 19",
      result: "Friendship",
      emoji: "🤝",
    },
    {
      quote: "Did this with my celebrity crush (Taylor Swift & me obviously lol) and got AFFECTION. I know it's just for fun but honestly it made my day! This app is so entertaining and free which is the best part 💯",
      author: "Emmy J., 17",
      result: "Affection",
      emoji: "💖",
    },
    {
      quote: "I was scared to check with my long-term crush because I didn't want to be disappointed. Got MARRIAGE and honestly teared up a bit. It gave me the confidence to finally tell them how I feel. This app is magic ✨",
      author: "Riley M., 21",
      result: "Marriage",
      emoji: "💍",
    },
    {
      quote: "My friends forced me to do Flames Check with my lab partner and we got LOVE. I was like okay maybe there IS something there. We went on a date and I've never felt this kind of connection before. Thank you Flames Check! 💕",
      author: "Casey B., 23",
      result: "Love",
      emoji: "🔥",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            Customer Trust by the Numbers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join millions of users who found clarity with Flames Check
          </p>
        </div>

        {/* Trust Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">2M+</div>
            <div className="text-sm font-semibold text-gray-600">Names Checked</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">500K+</div>
            <div className="text-sm font-semibold text-gray-600">Active Users</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">4.9★</div>
            <div className="text-sm font-semibold text-gray-600">Avg Rating</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl md:text-5xl font-black text-gradient mb-2">100%</div>
            <div className="text-sm font-semibold text-gray-600">Free Forever</div>
          </div>
        </div>

        <div className="text-center space-y-6 mb-16">
          <h3 className="text-3xl md:text-4xl font-black">
            Don't Take <span className="text-gradient">Our Word</span> For It
          </h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
