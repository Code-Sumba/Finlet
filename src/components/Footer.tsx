import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-display font-bold tracking-tighter mb-2">FINLET</span>
            <p className="text-text-secondary text-sm">AI Financial Control System</p>
          </div>
          
          <div className="flex gap-8 text-sm text-text-secondary">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Security</a>
          </div>
          
          <div className="text-text-secondary text-xs font-mono">
            © {new Date().getFullYear()} Finlet AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
