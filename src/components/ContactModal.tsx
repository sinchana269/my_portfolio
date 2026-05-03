"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Mail, Copy, X, Github, Linkedin } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const email = "sinchanakj26@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#1a1a1a] border border-[#333] rounded-3xl overflow-hidden z-[101] shadow-2xl"
          >
            {/* Handle bar for visual cue */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-1 bg-white/10 rounded-full" />
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-3xl font-bold text-white">Get in touch</h2>
                <button 
                  onClick={onClose}
                  className="p-1 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-white/60 mb-8">Let's build something great together.</p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <a 
                  href="tel:+1234567890" 
                  className="flex flex-col p-4 sm:p-5 rounded-2xl bg-[#222] border border-[#333] hover:border-[#555] transition-colors group"
                >
                  <Calendar className="w-5 h-5 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white mb-1">Book a call</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase">30 Min Call</span>
                </a>
                
                <a 
                  href={`mailto:${email}`} 
                  className="flex flex-col p-4 sm:p-5 rounded-2xl bg-[#222] border border-[#333] hover:border-[#555] transition-colors group"
                >
                  <Mail className="w-5 h-5 text-purple-500 mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white mb-1">Email me</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-white/40 uppercase">Open Gmail</span>
                </a>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-[#333]">
                <button 
                  onClick={handleCopyEmail}
                  className="flex items-center gap-2 text-xs sm:text-sm font-medium text-white/60 hover:text-white transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy gmail address"}
                </button>
                
                <div className="flex items-center gap-4">
                  <a href="https://github.com/sinchana269" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/sinchana-k-j-b73860271/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={`mailto:${email}`} className="text-white/40 hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
