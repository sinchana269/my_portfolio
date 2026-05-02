import { siteConfig } from "@/data/config";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-24 pt-24 sm:pt-28 lg:min-h-screen"
    >
      {/* Background blobs — full viewport width */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-[40rem] w-[40rem] rounded-full bg-violet-600/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[40rem] w-[40rem] rounded-full bg-fuchsia-600/15 blur-[120px]" />
      </div>

      {/* Content: constrained, laid out as equal 50/50 grid */}
      <div className="section grid w-full items-center gap-10 lg:grid-cols-2 xl:gap-16">
        {/* Left — text content */}
        <div className="flex flex-col gap-6 xl:gap-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400 sm:text-sm xl:text-base">
            {siteConfig.title}
          </p>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Building
            <br />
            Intelligent
            <br />
            <span className="text-gradient-shimmer">
              Products.
            </span>
          </h1>

          <p className="text-base text-(--muted) sm:text-lg xl:text-xl 2xl:text-2xl leading-relaxed">
            {siteConfig.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-violet-500 px-7 py-3 text-sm font-bold text-white transition-all hover:bg-violet-400 hover:shadow-lg hover:shadow-violet-500/30 xl:px-8 xl:py-3.5 xl:text-base"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="rounded-full border border-white/25 px-7 py-3 text-sm font-bold text-white transition-all hover:border-white/50 hover:bg-white/5 xl:px-8 xl:py-3.5 xl:text-base"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Right — intentionally left empty so the global fixed Avatar can occupy this space */}
        <div className="hidden lg:block w-full h-full min-h-[500px]"></div>
      </div>
    </section>
  );
}
