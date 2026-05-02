import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Other } from "@/sections/Other";
import { siteConfig } from "@/data/config";

const title = `${siteConfig.name} | Software Engineer & AI/ML Enthusiast`;
const description = siteConfig.description;
const siteUrl = "https://sinchana-kj.vercel.app";

import dynamic from 'next/dynamic';
const Avatar = dynamic(() => import('@/components/Avatar').then(mod => mod.Avatar), { ssr: false });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pb-20 relative z-10">
        <Avatar />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Other />
      </main>
      <Footer />
    </>
  );
}
