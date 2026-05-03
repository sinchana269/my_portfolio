import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink, Download } from "lucide-react";

const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    description: "Mastered foundational Python programming for data science and AI. Gained hands-on experience with data structures, data analysis libraries (Pandas, NumPy), and basic web scraping techniques.",
    icon: <Award className="w-6 h-6 text-amber-500" />,
    image: "/cert1.png",
    pdf: "/cert1.pdf",
    verifyLink: "https://coursera.org/verify/7XAJNME4P7E5"
  },
  {
    title: "Machine Learning Foundations: A Case Study Approach",
    issuer: "University of Washington",
    description: "Explored the practical applications of machine learning through case studies. Developed intuition for regression, classification, clustering, and deep learning algorithms.",
    icon: <Award className="w-6 h-6 text-amber-500" />,
    image: "/cert2.png",
    pdf: "/cert2.pdf",
    verifyLink: "https://coursera.org/verify/I2Y50NXCVGVD"
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

export default function CertificationsPage() {
  return (
    <main className="min-h-screen pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/" className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm sm:text-base">Back to home</span>
          </Link>
        </motion.div>

        <div className="text-center mb-12">
          <motion.span 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-xs sm:text-sm font-semibold tracking-widest text-amber-500 uppercase mb-4"
          >
            Professional Growth
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            <span className="text-[var(--foreground)]">My </span>
            <span className="text-amber-500">Certifications</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto"
          >
            Verified credentials and continuous learning milestones.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 pb-12"
        >
          {certifications.map((item, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="flex flex-col group overflow-hidden glass border border-[var(--card-border)] rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative w-full aspect-[1.41/1] bg-[#111] border-b border-[var(--card-border)] overflow-hidden">
                <img 
                  alt={item.title} 
                  src={item.image} 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a href={item.verifyLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors" title="Verify Certificate">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a href={item.pdf} download className="p-3 bg-amber-500/80 hover:bg-amber-500 backdrop-blur-md rounded-full text-white transition-colors" title="Download PDF">
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-5 sm:p-6 md:p-8 flex flex-col flex-grow justify-center bg-[var(--card)]">
                <div className="flex items-center gap-2 mb-2 text-amber-500">
                  {item.icon}
                  <span className="font-medium text-sm tracking-wide">{item.issuer}</span>
                </div>
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[var(--foreground)]">{item.title}</h2>
                </div>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
