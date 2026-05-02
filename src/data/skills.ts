export interface SkillGroup {
  title: string;
  summary: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    summary: "Strong foundations across multiple paradigms.",
    items: ["Python", "Java", "JavaScript / TypeScript", "C / C++"],
  },
  {
    title: "Frontend",
    summary: "Building polished, responsive user interfaces.",
    items: ["React", "Next.js", "Angular (basic)", "Tailwind CSS"],
  },
  {
    title: "Backend & Cloud",
    summary: "Distributed systems, APIs, and cloud infra.",
    items: [
      "Spring Boot",
      "Node.js",
      "Docker & CI/CD",
      "AWS (EC2, Cloud)",
      "MySQL · MongoDB · Redis · Firebase",
      "Kafka · Event-Driven Architecture",
    ],
  },
  {
    title: "AI / ML",
    summary: "Predictive models and AI-integrated systems.",
    items: [
      "ML model integration",
      "Predictive & spoilage modeling",
      "AWS Generative AI Foundations",
      "ML Specialization — Coursera",
    ],
  },
];

export interface BeltIcon {
  name: string;
  color: string;
  iconKey: string;
}

export const beltItems: BeltIcon[] = [
  { name: "Python", color: "#3776AB", iconKey: "python" },
  { name: "React", color: "#61DAFB", iconKey: "react" },
  { name: "Next.js", color: "#ffffff", iconKey: "nextjs" },
  { name: "TypeScript", color: "#3178C6", iconKey: "typescript" },
  { name: "Java", color: "#f89820", iconKey: "java" },
  { name: "Spring Boot", color: "#6DB33F", iconKey: "spring" },
  { name: "Node.js", color: "#339933", iconKey: "nodejs" },
  { name: "Docker", color: "#2496ED", iconKey: "docker" },
  { name: "AWS", color: "#FF9900", iconKey: "aws" },
  { name: "MySQL", color: "#4479A1", iconKey: "mysql" },
  { name: "MongoDB", color: "#47A248", iconKey: "mongodb" },
  { name: "Firebase", color: "#FFCA28", iconKey: "firebase" },
  { name: "Git", color: "#F05032", iconKey: "git" },
  { name: "Tailwind", color: "#06B6D4", iconKey: "tailwind" },
];
