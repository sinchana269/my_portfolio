"use client";

import { motion } from "framer-motion";
import { Trophy, Link2, FileDown } from "lucide-react";
import { siteConfig } from "@/data/config";

const items = [
  {
    key: "cv",
    icon: FileDown,
    title: "Download CV",
    desc: "My resume with projects, skills, certifications, and experience.",
    href: "/sinchana_resume.pdf",
    target: "_blank",
    color: "from-violet-500 to-purple-500",
  },
  {
    key: "achievements",
    icon: Trophy,
    title: "Achievements",
    desc: "AWS Cloud & GenAI certifications · ML Specialization · University hackathons · NSS volunteer.",
    href: "#achievements",
    target: "_self",
    color: "from-amber-500 to-orange-500",
  },
  {
    key: "links",
    icon: Link2,
    title: "Useful Links",
    desc: "GitHub · LinkedIn · FoodWaste Relief (Live) · GitHub Portfolio (Live)",
    href: siteConfig.github,
    target: "_blank",
    color: "from-blue-500 to-cyan-500",
  },
];

export function Other() {
  return (
    <section
      id="other"
      className="relative overflow-hidden pt-0 pb-24 sm:pb-32"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 px-2 text-3xl font-bold text-pretty sm:text-5xl md:text-6xl">
            More{" "}
            <span className="text-gradient-shimmer">About Me</span>
          </h2>
          <p className="mx-auto max-w-2xl px-3 text-base text-(--muted) sm:text-lg md:text-xl">
            Download my resume, explore achievements, or find me across the web.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <motion.a
              key={item.key}
              href={item.href}
              target={item.target}
              rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
              className="group glass relative cursor-pointer overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:scale-105 sm:p-8"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
              />
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className={`h-16 w-16 rounded-2xl bg-linear-to-br ${item.color} p-0.5`}>
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-(--background)">
                    <item.icon size={32} style={{ color: "var(--foreground)" }} />
                  </div>
                </div>
                <div>
                  <h3
                    className={`bg-linear-to-br ${item.color} mb-2 bg-clip-text px-1 text-xl font-bold text-transparent sm:text-2xl`}
                  >
                    {item.title}
                  </h3>
                  <p className="px-1 text-xs text-(--muted) sm:text-sm">{item.desc}</p>
                </div>
                <div
                  className={`bg-linear-to-br ${item.color} mt-2 bg-clip-text text-sm font-semibold text-transparent transition-transform duration-300 group-hover:translate-x-2`}
                >
                  {item.key === "cv" ? "Download ↓" : "Explore →"}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
