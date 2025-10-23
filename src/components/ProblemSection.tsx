import { X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "You're refreshing their social page for clues.",
    "You text your group chat 10 times before hitting send.",
    "You keep running the same scenarios in your head, zero clarity.",
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black">
            Is Your Vibe Real or Just<br />
            <span className="text-gradient">in Your Head?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We get it. It's hard to tell if your connection with someone is actually a thing or if you're just spiraling.
          </p>
          
          <div className="grid gap-4 max-w-2xl mx-auto mt-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-card hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                  <X className="text-destructive" size={20} />
                </div>
                <p className="text-left text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>
          
          <p className="text-2xl font-bold mt-8">
            You need the <span className="text-gradient">real-deal answer</span> without the drama.
          </p>
        </div>
      </div>
    </section>
  );
};
