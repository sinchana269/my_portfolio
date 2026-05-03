import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";

const links = [
  {
    title: "GitHub",
    description: "@sinchana269",
    url: "https://github.com/sinchana269",
    icon: <Github className="w-6 h-6 text-[var(--foreground)]" />
  },
  {
    title: "LinkedIn",
    description: "Sinchana K J",
    url: "https://www.linkedin.com/in/sinchana-k-j-b73860271/",
    icon: <Linkedin className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Email",
    description: "sinchanakj26@gmail.com",
    url: "mailto:sinchanakj26@gmail.com",
    icon: <Mail className="w-6 h-6 text-rose-500" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
};

export default function LinksPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-x-hidden flex flex-col items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="w-full max-w-2xl relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-12 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to home</span>
          </Link>
        </motion.div>

        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-blue-500 uppercase mb-3 sm:mb-4"
          >
            Connect With Me
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-2"
          >
            <span className="text-[var(--foreground)]">My </span>
            <span className="text-blue-500">Links</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto px-4"
          >
            Find me across the web and social platforms
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4"
        >
          {links.map((item, index) => (
            <motion.a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              variants={itemVariants}
              className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center justify-between group hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5">
                  <div className="w-full h-full rounded-xl sm:rounded-2xl bg-[var(--background)] flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-bold text-base sm:text-lg text-[var(--foreground)] group-hover:text-blue-500 transition-colors">
                  {item.title}
                </h3>
              </div>
              <svg aria-hidden="true" className="lucide lucide-external-link text-[var(--muted)] group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 3h6v6"></path>
                <path d="M10 14 21 3"></path>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
