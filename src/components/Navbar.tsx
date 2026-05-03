"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Phone, Mail, Calendar } from "lucide-react";
import { useTheme } from "next-themes";
import ContactModal from "./ContactModal";

const navItems = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#other", label: "Other" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const ids = navItems.map((item) => item.href.replace("/#", ""));
      let current = ids[0];
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 130) {
          current = ids[i];
          break;
        }
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-6">
      <nav className="max-w-[80rem] mx-auto px-6 md:px-8 lg:px-12">
        <div className="hidden lg:flex items-center justify-center relative">
          
          {/* Theme Toggle Left */}
          <div className="absolute left-0">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-14 h-14 rounded-full glass-strong flex items-center justify-center cursor-pointer transition-colors hover:text-purple-400/50"
            >
              {mounted && theme === "light" ? (
                <Sun className="text-[var(--muted)]" size={20} strokeWidth={2} />
              ) : (
                <Moon className="text-[var(--muted)]" size={20} strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Center Links */}
          <div className="flex items-center gap-1 glass-strong rounded-full shadow-xl shadow-black/10 h-14 px-8">
            {navItems.map((item) => {
              const id = item.href.replace("/#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-300 flex items-center"
                  style={{ color: isActive ? "var(--foreground)" : "var(--muted)" }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="template-nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "var(--accent)",
                        opacity: 0.1,
                        border: "1px solid var(--accent)",
                      }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Contact Details Right */}
          <div className="absolute right-0 flex items-center">
            <button 
              onClick={() => setShowContact(true)}
              className="h-14 px-6 rounded-full glass-strong flex items-center gap-2 font-semibold text-sm cursor-pointer hover:bg-[var(--accent)] transition-colors group"
            >
              <Calendar size={18} className="group-hover:text-white transition-colors" />
              <span className="group-hover:text-white transition-colors">Book a Call</span>
            </button>
            <ContactModal isOpen={showContact} onClose={() => setShowContact(false)} />
          </div>
          
        </div>
      </nav>
    </header>
  );
}
