export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  deviceType: "desktop" | "mobile";
  bgColor?: string;
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: "foodwaste-relief",
    title: "FoodWaste Relief",
    description:
      "AI-powered surplus food distribution platform connecting donors with 20+ NGOs. Features an ML spoilage prediction engine, live meal telemetry, and secure QR handoff verification for end-to-end accountability.",
    tags: ["Python", "Next.js", "MySQL", "ML", "Vercel"],
    demo: "https://food-waste-donation-system.vercel.app",
    github: "https://food-waste-donation-system.vercel.app",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-emerald-500/90 to-teal-600/90",
    screenshots: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "github-portfolio",
    title: "Developer Portfolio with GitHub Sync",
    description:
      "Full-stack platform aggregating live GitHub data via GraphQL API with multi-tag filtering. AI-powered repo summarization and conversational chat interface. Containerized with Docker, deployed on AWS EC2 via CI/CD — handling 1,000+ daily searches.",
    tags: ["Next.js", "Java", "Spring Boot", "Docker", "AWS EC2", "GraphQL"],
    demo: "http://githubportfolio.duckdns.org/",
    github: "http://githubportfolio.duckdns.org/",
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-violet-500/90 to-fuchsia-600/90",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    ],
  },
  {
    id: "order-management",
    title: "Smart Order Management System",
    description:
      "Scalable e-commerce backend handling 10,000+ end-to-end order workflows. Built with Spring Boot REST APIs, optimized MySQL queries, and Redis caching — achieving 40% DB load reduction and 80% unit test coverage.",
    tags: ["Java", "Spring Boot", "MySQL", "Redis", "REST APIs"],
    featured: true,
    deviceType: "desktop",
    bgColor: "bg-linear-to-br from-blue-500/90 to-cyan-600/90",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop",
    ],
  },
];
