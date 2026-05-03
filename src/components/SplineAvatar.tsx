"use client";

import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export function SplineAvatar({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This trick manually forwards the mouse position to the Spline canvas
    // even if it has pointer-events: none. This ensures global tracking 
    // across the entire screen without blocking your buttons/links!
    const handlePointerMove = (e: PointerEvent) => {
      if (containerRef.current) {
        const canvas = containerRef.current.querySelector('canvas');
        if (canvas) {
          canvas.dispatchEvent(new PointerEvent('pointermove', {
            clientX: e.clientX,
            clientY: e.clientY,
            bubbles: true,
          }));
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    // We use a large 800x800 canvas and scale it down to prevent the avatar from being cropped
    // absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 keeps it perfectly centered
    <div 
      ref={containerRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[600px] h-[600px] pointer-events-none flex items-center justify-center scale-[0.5] sm:scale-[0.65] md:scale-[0.8]"
    >
      <div className={`w-full h-full ${className || ''}`}>
        <Spline scene="/scene.splinecode" className="w-full h-full" />
      </div>
    </div>
  );
}
