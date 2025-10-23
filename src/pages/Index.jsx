import { Hero } from "@/components/Hero";
import { CelebrityCarousel } from "@/components/CelebrityCarousel";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProof } from "@/components/SocialProof";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CelebrityCarousel />
      <ProblemSection />
      <SolutionSection />
      <SocialProof />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
