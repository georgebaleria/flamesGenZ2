import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index.jsx";
import NotFound from "./pages/NotFound.jsx";
import { HashModal } from "@/components/HashModal";
import { useHashNavigation } from "@/hooks/useHashNavigation";
import { AboutContent } from "@/components/content/AboutContent";
import { ContactContent } from "@/components/content/ContactContent";
import { FAQContent } from "@/components/content/FAQContent";
import { PrivacyContent } from "@/components/content/PrivacyContent";
import { TermsContent } from "@/components/content/TermsContent";

const queryClient = new QueryClient();

const AppContent = () => {
  const { currentHash, closeModal, isModalOpen } = useHashNavigation();

  const getModalContent = () => {
    switch (currentHash) {
      case 'about':
        return <AboutContent />;
      case 'contact':
        return <ContactContent />;
      case 'faq':
        return <FAQContent />;
      case 'privacy':
        return <PrivacyContent />;
      case 'terms':
        return <TermsContent />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (currentHash) {
      case 'about':
        return 'About Flames Check';
      case 'contact':
        return 'Contact Us';
      case 'faq':
        return 'Frequently Asked Questions';
      case 'privacy':
        return 'Privacy Policy';
      case 'terms':
        return 'Terms of Use';
      default:
        return '';
    }
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <HashModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={getModalTitle()}
      >
        {getModalContent()}
      </HashModal>
    </>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;


