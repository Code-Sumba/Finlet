/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  const openInquiry = () => setIsInquiryOpen(true);

  return (
    <div className="relative min-h-screen selection:bg-accent selection:text-white">
      <Navbar onOpenInquiry={openInquiry} />
      <main>
        <Hero onOpenInquiry={openInquiry} />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA onOpenInquiry={openInquiry} />
      </main>
      <Footer />

      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)}
      />
    </div>
  );
}
