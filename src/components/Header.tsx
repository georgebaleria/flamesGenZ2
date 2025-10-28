import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationLinks = [
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
    { href: '#faq', label: 'FAQ' },
    { href: '#privacy', label: 'Privacy' },
    { href: '#terms', label: 'Terms' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
              aria-label="Scroll to top of page"
            >
              <img 
                src="/responsive/logo-md.webp" 
                alt="Flames Check logo - Free love compatibility calculator"
                width="40"
                height="40"
                className="w-10 h-10 hover:opacity-90 transition-opacity duration-200"
              />
              <span className="text-white font-bold text-xl hover:text-yellow-300 transition-colors duration-200">Flames Check</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-yellow-300 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/20 py-4">
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
