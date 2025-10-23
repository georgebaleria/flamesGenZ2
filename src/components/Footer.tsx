import { Flame } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="text-primary" size={32} />
              <span className="text-2xl font-black">FLAMES</span>
            </div>
            <p className="text-muted-foreground">
              Flames Check is a free relationship calculator based on the classic FLAMES game and numerology.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-muted-foreground text-sm">
          <p>© 2024 Flames Check. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
