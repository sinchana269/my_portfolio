"use client";

import { motion } from "framer-motion";
import {
  SiDocker,
  SiGit,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiSpring,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";
import { skillGroups } from "@/data/skills";

const beltItems = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

const beltChunk = [...Array(4)].flatMap(() => beltItems);

export function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden pt-0 pb-28"
      style={{ scrollMarginTop: "100px" }}
    >
      <div className="section">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-(--accent) sm:text-base xl:text-lg">
            Tech stack
          </span>
          <h2 className="mt-2 px-2 text-3xl font-bold tracking-tight text-pretty sm:text-5xl md:text-6xl xl:text-7xl">
            Skills{" "}
            <span className="text-gradient-shimmer">Overview</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-(--card-border) bg-linear-to-br from-(--card) to-(--card-border) p-5 xl:p-7"
            >
              <h3 className="text-base font-semibold xl:text-lg">{group.title}</h3>
              <p className="mt-1 text-xs text-(--muted) xl:text-sm">{group.summary}</p>
              <ul className="mt-3 space-y-2 text-sm text-(--muted) xl:text-base">
                {group.items.map((item) => (
                  <li key={item}>— {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Icon belt marquee */}
        <div className="mt-8 rounded-2xl border border-(--card-border) bg-(--card)/40 py-4 xl:py-6">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex w-max items-center gap-10 whitespace-nowrap xl:gap-14"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-10 px-6 xl:gap-14">
                  {beltChunk.map((item, index) => (
                    <div key={`${copy}-${item.name}-${index}`} className="flex items-center gap-3">
                      <item.icon style={{ color: item.color }} size={22} className="xl:hidden" />
                      <item.icon style={{ color: item.color }} size={28} className="hidden xl:block" />
                      <span className="text-sm uppercase tracking-wider text-(--muted) xl:text-base">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
