import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const steps = [
  {
    number: "01",
    title: "Connect",
    description: "Connect or enter your balance."
  },
  {
    number: "02",
    title: "Analyze",
    description: "Finlet analyzes spending velocity and timeline."
  },
  {
    number: "03",
    title: "Control",
    description: "Receive predictive control recommendations."
  }
];

export const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.step-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl mb-16">The Control Protocol</h2>
        
        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="step-item relative">
              <div className="text-8xl font-display font-bold text-white/5 absolute -top-12 -left-4 pointer-events-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl mb-4 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" />
                  {step.title}
                </h3>
                <p className="text-text-secondary text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
