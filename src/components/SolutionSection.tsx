import { Sparkles, Heart, Zap } from "lucide-react";

export const SolutionSection = () => {
  const steps = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Drop the Names",
      description: "Type in your name and theirs (crush, friend, enemy—anyone!)",
    },
    {
      icon: <Zap className="text-accent" size={32} />,
      title: "Watch the Magic",
      description: "Our calculator runs the digits and letters in seconds.",
    },
    {
      icon: <Sparkles className="text-secondary" size={32} />,
      title: "Get the Tea",
      description: "Your Flames Check status pops up: L.O.V.E., E.N.E.M.Y., S.I.B.L.I.N.G.—you get the full story.",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-black">
            The Flames Check Drop:<br />
            <span className="text-gradient">Your Instant Relationship Status</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We took the classic FLAMES game and powered it up with next-level numerology. 
            <span className="font-bold"> It's not random. It's a calculated vibe check.</span>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="absolute -top-4 left-8 w-12 h-12 gradient-card rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg">
                {index + 1}
              </div>
              <div className="mt-4 mb-4">{step.icon}</div>
              <h3 className="text-2xl font-black mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
