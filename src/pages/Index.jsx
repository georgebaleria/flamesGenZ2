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
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">
              Frequently Asked Questions (FAQ)
            </h2>
          </div>
          <FAQContent />
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Find Your<br />
            <span className="text-yellow-300">Perfect Match?</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 2 million+ users who discovered their relationship vibe. Get your instant answer now!
          </p>
          <button
            onClick={scrollToTop}
            className="bg-white text-purple-600 hover:bg-yellow-300 font-black text-xl uppercase tracking-wide px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300"
          >
            🔥 Check My Flames Now →
          </button>
          <p className="text-white/80 text-sm mt-6">
            ✨ 100% Free • No Sign-Up • Instant Results
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
