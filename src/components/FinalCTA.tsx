import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FinalCTAProps {
  onOpenInquiry: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenInquiry }) => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-3xl mx-auto glass-card p-12 lg:p-20 glow-shadow">
          <h2 className="text-4xl lg:text-6xl mb-8 leading-tight">
            Ready to take control?
          </h2>
          <p className="text-text-secondary text-xl mb-12 max-w-xl mx-auto">
            Our team is ready to help you implement the Finlet control system for your personal or business finances.
          </p>
          <button 
            onClick={onOpenInquiry}
            className="px-10 py-5 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-3 mx-auto glow-shadow-hover"
          >
            Send Inquiry <ArrowRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};
