import { Button } from "@/components/ui/button";
import { Shield, CreditCard } from "lucide-react";

export const CTASection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-t from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl p-12 shadow-2xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-black">
            Ready to See <span className="text-gradient">Your Status?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't spend another minute overthinking it. Get your score in seconds and get back to your life.
          </p>
          
          <Button
            variant="hero"
            size="xl"
            onClick={scrollToTop}
            className="w-full md:w-auto md:min-w-[400px] h-auto min-h-[56px] py-3 md:py-4"
          >
            🔥 FLAMES CHECK MY NAME NOW!
          </Button>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <Shield className="text-primary" size={20} />
              <span className="font-semibold">No Sign-Up Needed</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard className="text-primary" size={20} />
              <span className="font-semibold">Seriously, it's 100% Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
