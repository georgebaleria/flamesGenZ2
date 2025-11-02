import { X, AlertTriangle } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    {
      problem: "You're refreshing their social page for clues.",
      implication: "Wasted hours scrolling, missed opportunities, and increased anxiety from overthinking every post and story."
    },
    {
      problem: "You text your group chat 10 times before hitting send.",
      implication: "Friends get tired of your uncertainty spiral, you lose confidence in your own judgment, and real connections get delayed by second-guessing."
    },
    {
      problem: "You keep running the same scenarios in your head, zero clarity.",
      implication: "Mental exhaustion from constant anxiety, making decisions based on fear instead of facts, and potentially missing out on great relationships due to paralysis."
    },
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
          
          <div className="grid gap-6 max-w-3xl mx-auto mt-12">
            {problems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-card hover:shadow-xl transition-shadow overflow-hidden"
              >
                {/* Problem */}
                <div className="flex items-start gap-4 p-6">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="text-destructive" size={20} />
                  </div>
                  <p className="text-left text-lg font-medium">{item.problem}</p>
                </div>
                
                {/* Implication */}
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-orange-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p className="text-sm font-semibold text-orange-800 mb-1">If You Don't Address This:</p>
                      <p className="text-sm text-orange-700">{item.implication}</p>
                    </div>
                  </div>
                </div>
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
