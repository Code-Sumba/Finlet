import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeHeroElement } from './ThreeHeroElement';
import { ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      gsap.from('.hero-3d', {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'expo.out',
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={contentRef} className="text-left">
          <div className="hero-reveal inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono text-accent uppercase tracking-widest">AI Financial Control System</span>
          </div>
          
          <h1 className="hero-reveal text-6xl lg:text-8xl mb-2 leading-[0.9]">
            FINLET
          </h1>
          <h2 className="hero-reveal text-3xl lg:text-5xl font-light text-text-secondary mb-8 leading-tight">
            Control your financial future
          </h2>
          
          <p className="hero-reveal text-lg text-text-secondary max-w-lg mb-10 leading-relaxed">
            See spending risk, survival time, and safe spending instantly using predictive AI.
          </p>

          <div className="hero-reveal flex flex-wrap gap-4">
            <a 
              href="#features"
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-semibold transition-all flex items-center gap-2 glow-shadow glow-shadow-hover"
            >
              Explore System <ArrowRight size={18} />
            </a>
            <button 
              onClick={onOpenInquiry}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-semibold transition-all flex items-center gap-2"
            >
              Send Inquiry
            </button>
          </div>
        </div>

        <div className="hero-3d h-[400px] lg:h-[600px] flex items-center justify-center">
          <ThreeHeroElement />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
};
