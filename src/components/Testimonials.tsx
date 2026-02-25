import React from 'react';

const testimonials = [
  {
    quote: "“I stopped guessing and started knowing.”",
    author: "Aarav",
    role: "Engineering Student"
  },
  {
    quote: "“It feels like having a financial control panel.”",
    author: "Riya",
    role: "Intern"
  },
  {
    quote: "“I finally understand what I can afford.”",
    author: "Kunal",
    role: "Freelancer"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl mb-16 text-center">User Intelligence</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 flex flex-col justify-between">
              <p className="text-xl italic mb-8 text-text-primary leading-relaxed">
                {t.quote}
              </p>
              <div>
                <p className="font-semibold text-accent">— {t.author}</p>
                <p className="text-sm text-text-secondary">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
