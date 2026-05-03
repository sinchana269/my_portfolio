import { motion } from "framer-motion";
import { SplineAvatar } from "@/components/SplineAvatar";

import { siteConfig } from "@/data/config";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-[6rem] pb-[8rem] scroll-mt-[120px]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl mx-auto"
      >
        <div className="text-center mb-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <div className="relative flex items-center justify-center z-0">
              {/* Nudging the parent container directly to bypass the internal scaling factor */}
              <div className="relative w-36 h-36 sm:w-52 sm:h-52 -translate-x-6 sm:-translate-x-8">
                <SplineAvatar />
              </div>
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 tracking-tight text-[var(--foreground)]"
          >
            Hi, I'm <span className="text-gradient-shimmer">Sinchana K J</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[var(--muted)]"
          >
            {siteConfig.title}
          </motion.p>
        </div>


        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center mt-8"
        >
          <div className="flex flex-col items-center gap-2 text-white/30 animate-pulse">
            <span className="text-xs tracking-widest uppercase">Scroll to explore</span>
            <ArrowDown size={16} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
