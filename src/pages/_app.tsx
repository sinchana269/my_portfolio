import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark">
      <div className={inter.className} style={{ display: "contents" }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
