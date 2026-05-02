"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/data/config";

const TILE_IMAGES = {
  education:
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
  work:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
  location:
    "https://images.unsplash.com/photo-1596422846543-75c6fc197f11?q=80&w=1200&auto=format&fit=crop",
  mindset:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
  default:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
} as const;

type TileKey = keyof typeof TILE_IMAGES;

const craftTags = [
  "Spring Boot",
  "Next.js",
  "Python",
  "Docker",
  "AWS",
  "MySQL",
  "REST APIs",
  "System Design",
];

export function About() {
  const [activeTile, setActiveTile] = useState<TileKey | null>(null);
  const currentImage = activeTile ? TILE_IMAGES[activeTile] : TILE_IMAGES.default;

  return (
    <section
      id="about"
      className="section pb-32 pt-0"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl xl:text-7xl">
          About <span className="text-gradient-shimmer">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:grid-rows-[12rem_auto_12rem] xl:grid-rows-[16rem_auto_16rem] xl:gap-6">
        {/* Profile — mobile */}
        <article className="md:hidden col-span-1 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Profile</p>
          <h3 className="mt-2 text-2xl font-black leading-[1.05]">{siteConfig.name}</h3>
          <p className="mt-2 text-xs text-(--muted)">{siteConfig.title}</p>
        </article>

        {/* Default image — mobile */}
        <article className="md:hidden aspect-square overflow-hidden rounded-2xl border border-(--card-border)">
          <Image
            src={TILE_IMAGES.default}
            alt="Center"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
        </article>

        {/* Profile — desktop */}
        <article className="hidden md:flex col-span-1 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-7 xl:p-9">
          <div className="flex w-full flex-col justify-center text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-violet-300 xl:text-sm">Profile</p>
            <h3 className="mt-2 text-3xl font-black leading-[1.05] xl:text-4xl">{siteConfig.name}</h3>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-(--muted) xl:text-xs">
              {siteConfig.title}
            </p>
          </div>
        </article>

        {/* Education tile */}
        <article
          onMouseEnter={() => setActiveTile("education")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-2 row-span-1 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 xl:p-7 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold uppercase text-(--foreground) xl:text-base">
            Education
          </h3>
          <p className="mt-1 text-xs font-semibold text-violet-300 xl:text-sm">
            B.E. CSE (AI & ML) · CGPA 9.08/10
          </p>
          <p className="mt-1 text-xs leading-relaxed text-(--muted) sm:text-sm xl:text-base">
            Vidyavardhaka College of Engineering, Mysuru · 2023–2027
          </p>
          <p className="mt-1 text-[10px] text-(--muted) xl:text-xs">
            PUC 91.16% · SSLC 88.8%
          </p>
        </article>

        {/* Craft tile */}
        <article
          onMouseEnter={() => setActiveTile("work")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 xl:p-7 md:col-start-3 md:row-start-2 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold xl:text-base">Craft</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm xl:text-base">
            Backend-heavy full-stack developer. I build modular, tested, and production-ready systems — from REST APIs to ML-integrated platforms.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {craftTags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 px-2 py-1 text-[10px] xl:text-xs text-(--muted)"
              >
                {t}
              </span>
            ))}
          </div>
        </article>

        {/* Location tile */}
        <article
          onMouseEnter={() => setActiveTile("location")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-1 h-full min-h-[9rem] xl:min-h-[12rem] rounded-2xl border border-(--card-border) overflow-hidden relative transition-all duration-200 hover:border-violet-400/40"
        >
          <Image
            src={TILE_IMAGES.location}
            alt="Mysore, India"
            fill
            className="object-cover opacity-70"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/65 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-3 xl:p-5">
            <p className="text-xl font-bold leading-none xl:text-3xl">Mysore</p>
            <p className="text-[11px] text-(--muted) xl:text-sm">India · GMT+5:30</p>
          </div>
        </article>

        {/* Mindset tile */}
        <article
          onMouseEnter={() => setActiveTile("mindset")}
          onMouseLeave={() => setActiveTile(null)}
          className="col-span-1 row-span-2 rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 xl:p-7 md:col-start-1 md:row-start-2 transition-all duration-200 hover:border-violet-400/40"
        >
          <h3 className="text-sm font-bold xl:text-base">Mindset</h3>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm xl:text-base">
            Curiosity, consistency, and craft. I believe in shipping real things — not just studying them. My projects are my proof.
          </p>
          <p className="mt-2 text-xs leading-relaxed text-(--muted) sm:text-sm xl:text-base">
            When I'm not coding, I'm dancing or exploring creative arts — both teach me the same thing: iteration beats perfection.
          </p>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10">
            <Image
              src={TILE_IMAGES.mindset}
              alt="Mindset"
              width={700}
              height={900}
              className="h-40 w-full object-cover xl:h-56"
            />
          </div>
        </article>

        {/* Center hover image — desktop only */}
        <article className="hidden md:block aspect-square col-start-2 row-start-2 rounded-2xl border border-(--card-border) overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={currentImage}
                alt="Center"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </article>
      </div>
    </section>
  );
}
