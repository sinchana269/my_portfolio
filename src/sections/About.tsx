"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/config";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring" as const, stiffness: 100, damping: 15 } 
  },
};

const textVariants = {
  hidden: { opacity: 0, y: "100%" },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const TILE_IMAGES = {
  education: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  work: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  location: "/map.jpg",
  mindset: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  default: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
} as const;

type TileKey = keyof typeof TILE_IMAGES;

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const currentImage = activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default;
  const nameParts = siteConfig.name.split(" ");
  const firstName = nameParts[0].split("");
  const lastName = nameParts.slice(1).join(" ").split("");

  return (
    <section className="pb-32 pt-0 px-4 max-w-7xl mx-auto w-full" id="about" style={{ scrollMarginTop: "0px" }}>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4 md:grid-rows-[12rem_minmax(24rem,auto)_12rem] w-full"
      >
        {/* Item 0: Mobile Title */}
        <motion.div variants={itemVariants} className="md:hidden col-span-1 row-span-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] rounded-2xl relative overflow-hidden group w-full h-full p-6">
          <div className="flex flex-col justify-center items-center text-center h-full relative z-10 w-full gap-1">
            <div className="flex flex-col items-center w-full pb-2">
              <div className="flex justify-center text-xl font-black tracking-tighter leading-[1.1] text-[var(--foreground)]">
                {firstName.map((char, i) => (
                  <motion.div key={i} className="inline-block" variants={textVariants}>
                    <span className="inline-block">{char}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center text-xl font-black tracking-tighter leading-[1.1] text-[var(--foreground)]">
                {lastName.map((char, i) => (
                  <motion.div key={i} className="inline-block" variants={textVariants}>
                    <span className="inline-block">{char}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-[10px] text-[var(--muted)] font-medium uppercase tracking-widest">{siteConfig.title}</p>
          </div>
        </motion.div>

        {/* Item 1: Desktop Title */}
        <motion.div variants={itemVariants} className="hidden md:flex col-span-1 row-span-1 md:col-start-1 md:row-start-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md rounded-2xl relative overflow-hidden group w-full h-full p-7">
          <div className="flex flex-col justify-center items-center text-center h-full relative z-10 w-full gap-1">
            <div className="flex flex-col items-center w-full pb-2">
              <div className="flex justify-center text-3xl font-black tracking-tighter leading-[1.1] text-[var(--foreground)]">
                {firstName.map((char, i) => (
                  <motion.div key={i} className="inline-block" variants={textVariants}>
                    <span className="inline-block">{char}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center text-3xl font-black tracking-tighter leading-[1.1] text-[var(--foreground)]">
                {lastName.map((char, i) => (
                  <motion.div key={i} className="inline-block" variants={textVariants}>
                    <span className="inline-block">{char}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-xs text-[var(--muted)] font-medium uppercase tracking-widest mt-2">{siteConfig.title}</p>
          </div>
        </motion.div>

        {/* Item 2: Mobile Image */}
        <motion.div variants={itemVariants} className="md:hidden aspect-square col-span-1 row-span-1 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full">
          <Image src={TILE_IMAGES.default} alt="Profile" fill className="object-cover" />
        </motion.div>

        {/* Item 3: Education */}
        <motion.div 
          variants={itemVariants}
          onMouseEnter={() => setActiveTile("education")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-2 row-span-1 md:col-start-2 md:col-span-2 md:row-start-1 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-md rounded-2xl relative overflow-hidden group w-full h-32 md:h-full p-6 flex flex-col justify-center hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200"
        >
          <div className="relative z-10">
            <h3 className="text-sm font-bold uppercase text-[var(--foreground)] md:text-base">Education</h3>
            <p className="mt-1 text-xs font-semibold text-violet-300 md:text-sm">B.E. CSE (AI & ML) · CGPA 9.08/10</p>
            <p className="mt-1 text-xs text-[var(--muted)] md:text-sm">Vidyavardhaka College of Engineering · 2023–2027</p>
          </div>
        </motion.div>

        {/* Item 4: Craft */}
        <motion.div 
          variants={itemVariants}
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 md:col-start-3 md:row-start-2 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-sm rounded-2xl flex flex-col justify-between group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 h-full w-full overflow-hidden p-6"
        >
          <div>
            <h3 className="text-sm font-bold md:text-base text-[var(--foreground)]">Craft</h3>
            <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
              Building modular, tested, and production-ready systems — from REST APIs to ML-integrated platforms.
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {["Spring Boot", "Next.js", "Python", "AWS"].map(t => (
                <span key={t} className="rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] text-[var(--muted)]">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Item 5: Location */}
        <motion.div 
          variants={itemVariants}
          onMouseEnter={() => setActiveTile("location")}
          onMouseLeave={() => setActiveTile(null)}
          className="aspect-square col-span-1 row-span-1 md:col-start-2 md:row-start-3 border border-[var(--card-border)] backdrop-blur-sm rounded-2xl overflow-hidden relative group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 h-full w-full"
        >
          <Image src={TILE_IMAGES.location} alt="Location" fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="text-lg font-bold text-white md:text-2xl">Mysore, India</p>
            <p className="text-[10px] text-[var(--muted)] md:text-xs">12.2958° N, 76.6394° E · GMT+5:30</p>
          </div>
        </motion.div>

        {/* Item 6: Mindset */}
        <motion.div 
          variants={itemVariants}
          onMouseEnter={() => setActiveTile("mindset")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 md:col-start-1 md:row-start-2 bg-gradient-to-br from-[var(--card)] to-[var(--card-border)] border border-[var(--card-border)] backdrop-blur-sm rounded-2xl flex flex-col h-full w-full overflow-hidden relative group hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 p-6"
        >
          <h3 className="text-sm font-bold md:text-base text-[var(--foreground)]">Mindset</h3>
          <p className="mt-2 text-xs leading-relaxed text-[var(--muted)] md:text-sm">
            Curiosity, consistency, and craft. I believe in shipping real things — not just studying them.
          </p>
          <div className="mt-4 flex-1 rounded-xl overflow-hidden border border-white/10 relative min-h-[100px]">
            <Image src={TILE_IMAGES.mindset} alt="Mindset" fill className="object-cover" />
          </div>
        </motion.div>

        {/* Item 7: Mobile image 2 (Hidden desktop) */}
        <motion.div variants={itemVariants} className="md:hidden aspect-square col-span-1 row-span-1 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full">
          <Image src={TILE_IMAGES.work} alt="Work" fill className="object-cover" />
        </motion.div>

        {/* Item 8: Desktop Center Image */}
        <motion.div variants={itemVariants} className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl overflow-hidden border border-[var(--card-border)] relative w-full h-full bg-black">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image src={currentImage} alt="Center" fill className="object-cover" priority />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
}
