import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    question: "How is this different from expense trackers?",
    answer: "Finlet predicts future outcomes, not just past transactions. We use AI to analyze your spending velocity and tell you exactly when you'll run out of money if you don't change course."
  },
  {
    question: "Is my financial data secure?",
    answer: "Yes. All data is encrypted and never shared. We prioritize security and privacy above all else, using industry-standard encryption protocols."
  },
  {
    question: "Do I need to connect my bank?",
    answer: "No. Manual tracking works fully. While connecting a bank account provides the most accurate real-time data, you can enter your balances and transactions manually."
  },
  {
    question: "Is Finlet free?",
    answer: "Core features are free. Advanced AI features like deep scenario simulation and automated risk alerts are part of our optional premium tier."
  }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl lg:text-5xl mb-12 text-center">Common Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card overflow-hidden border border-white/5"
            >
              <button 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                {activeIndex === index ? <Minus size={20} className="text-accent" /> : <Plus size={20} className="text-text-secondary" />}
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="p-6 pt-0 text-text-secondary leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
