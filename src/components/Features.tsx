import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Shield, Zap, BarChart3, RefreshCw, Activity, LifeBuoy, Lock, LayoutGrid } from 'lucide-react';

const features = [
  {
    title: "AI Risk Forecast",
    description: "See exactly when your balance will run out based on current behavior.",
    icon: Shield,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Safe Spending Intelligence",
    description: "Know how much you can spend today without risking tomorrow.",
    icon: Zap,
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  },
  {
    title: "Scenario Simulator",
    description: "Test purchases and see the financial impact instantly.",
    icon: BarChart3,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    title: "Subscription Audit",
    description: "AI identifies and flags recurring payments you might have forgotten.",
    icon: RefreshCw,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Velocity Tracking",
    description: "Monitor how fast you are spending compared to your income in real-time.",
    icon: Activity,
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  },
  {
    title: "Emergency Guard",
    description: "Predictive alerts for when you might need to dip into your savings.",
    icon: LifeBuoy,
    color: "text-white",
    bg: "bg-white/10",
  },
  {
    title: "Bank-Grade Security",
    description: "Your data is encrypted with 256-bit AES at rest and in transit.",
    icon: Lock,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "Smart Categorization",
    description: "Automatic transaction sorting using advanced machine learning.",
    icon: LayoutGrid,
    color: "text-accent-secondary",
    bg: "bg-accent-secondary/10",
  }
];

export const Features: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.to('.feature-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl mb-6 hero-reveal">Engineered for Precision</h2>
          <p className="text-text-secondary text-lg hero-reveal">
            Traditional budgeting looks backward. Finlet uses predictive intelligence to keep you ahead of your balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card glass-card p-8 glow-shadow-hover transition-all duration-500 group opacity-0"
            >
              <div className={`w-12 h-12 ${feature.bg} ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl mb-4">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
