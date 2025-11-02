import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CelebrityCarousel } from "@/components/CelebrityCarousel";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SocialProof } from "@/components/SocialProof";
import { VideoSection } from "@/components/VideoSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { HowToUseSection } from "@/components/HowToUseSection";
import { CTASection } from "@/components/CTASection";
import { AboutContent } from "@/components/content/AboutContent";
import { ContactContent } from "@/components/content/ContactContent";
import { FAQContent } from "@/components/content/FAQContent";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CelebrityCarousel />
      <ProblemSection />
      <SolutionSection />
      <SocialProof />
      <VideoSection />
      <FeaturesSection />
      <HowToUseSection />
      <CTASection />
      
      {/* About Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">About Flames Check</h2>
          <AboutContent />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h2>
          <ContactContent />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <FAQContent />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
