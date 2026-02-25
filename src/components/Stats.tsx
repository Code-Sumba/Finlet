import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const stats = [
  { value: "92%", label: "Users avoid mid-month balance depletion" },
  { value: "3.4x", label: "Increase in goal completion rate" },
  { value: "11 days", label: "Average survival extension per user" }
];

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <div className="text-5xl lg:text-7xl font-display font-bold text-accent mb-4 tracking-tighter">
                {stat.value}
              </div>
              <p className="text-text-secondary text-sm uppercase tracking-widest font-mono">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
