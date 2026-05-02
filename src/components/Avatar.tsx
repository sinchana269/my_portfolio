"use client";

import Spline from '@splinetool/react-spline';

export function Avatar() {
  return (
    <div className="hidden lg:flex fixed inset-y-0 right-0 w-1/2 items-center justify-center z-[-1] pointer-events-none">
      {/* Ambient glow behind avatar */}
      <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-[100px] scale-75" />

      {/* Spline Avatar */}
      <div className="relative w-full h-full opacity-90">
        <Spline 
          scene="https://prod.spline.design/7IM1SLrdB-JPNwNA/scene.splinecode" 
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
