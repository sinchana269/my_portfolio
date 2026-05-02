import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: LucideIcon;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/sinchana269",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sinchana-k-j-b73860271/",
    icon: Linkedin,
  },
  {
    name: "Email",
    url: "mailto:sinchanakj26@gmail.com",
    icon: Mail,
  },
];

export const siteConfig = {
  name: "Sinchana K J",
  initials: "SKJ",
  title: "Aspiring Software Engineer | AI/ML Enthusiast",
  description:
    "CS student & developer at the intersection of full-stack engineering and AI/ML — turning ideas into production-ready systems.",
  location: "Mysore, India",
  timezone: "GMT+5:30",
  github: "https://github.com/sinchana269",
  linkedin: "https://www.linkedin.com/in/sinchana-k-j-b73860271/",
  email: "sinchanakj26@gmail.com",
};
