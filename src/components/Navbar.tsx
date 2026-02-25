import React, { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(124,58,237,0.5)]">F</div>
          <span className="text-xl font-display font-bold tracking-tighter">FINLET</span>
        </div>
        
        <div className="hidden sm:flex items-center gap-4 md:gap-8 text-sm font-medium text-text-secondary">
          <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-text-primary transition-colors">How it works</a>
          <a href="#faq" className="hover:text-text-primary transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#features"
            className="hidden sm:block px-5 py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors"
          >
            Explore
          </a>
          <button 
            onClick={onOpenInquiry}
            className="px-5 py-2.5 bg-accent hover:bg-accent/90 text-white rounded-xl text-sm font-semibold transition-all shadow-lg shadow-accent/20"
          >
            Send Inquiry
          </button>
        </div>
      </div>
    </nav>
  );
};
