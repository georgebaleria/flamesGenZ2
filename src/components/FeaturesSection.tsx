export const FeaturesSection = () => {
  const features = [
    {
      emoji: "🔥",
      letter: "L",
      title: "Love",
      benefit: "Stop guessing—see if your crush energy is actually mutual.",
    },
    {
      emoji: "🤝",
      letter: "F",
      title: "Friendship",
      benefit: "Figure out if you're a casual pal or a ride-or-die. Great for setting boundaries!",
    },
    {
      emoji: "💖",
      letter: "A",
      title: "Affection",
      benefit: "That 'in-between' stage. Check if it's just a fleeting crush or if things are leveling up.",
    },
    {
      emoji: "🔪",
      letter: "E",
      title: "Enemies",
      benefit: "Get a head start on avoiding the drama. Sometimes, less contact is the best strategy.",
    },
    {
      emoji: "💍",
      letter: "M",
      title: "Marriage",
      benefit: "The ultimate bond check. Find out if your connection is built to last forever.",
    },
    {
      emoji: "🏡",
      letter: "S",
      title: "Sibling",
      benefit: "Identify your non-blood family. The real ones who'll always be there for the tea.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            What Your Flames Check Score<br />
            <span className="text-gradient">Actually Means</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every letter unlocks a different level of understanding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.emoji}
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-black text-gradient">{feature.letter}</span>
                <h3 className="text-2xl font-black">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{feature.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
