import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, User, MessageSquare, Send } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-md glass-card p-8 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={20} />
            </button>

            <div className="mb-8">
              <h2 className="text-3xl mb-2">Send Inquiry</h2>
              <p className="text-text-secondary">
                Have questions about Finlet? Send us a message and our team will get back to you.
              </p>
            </div>

            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              alert('Inquiry sent successfully!');
              onClose();
            }}>
              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
                  <input 
                    required
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-text-secondary ml-1">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-text-secondary" size={18} />
                  <textarea 
                    required
                    placeholder="How can we help you?"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 group transition-all">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
