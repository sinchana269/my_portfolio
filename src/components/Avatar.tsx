"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Pupil {
  x: number;
  y: number;
}

const LEFT_EYE: Pupil = { x: 78, y: 98 };
const RIGHT_EYE: Pupil = { x: 122, y: 98 };
const LEFT_EYE_CENTER = { cx: 78, cy: 98 };
const RIGHT_EYE_CENTER = { cx: 122, cy: 98 };
const MAX_OFFSET = 5;

function calcPupil(
  eye: { cx: number; cy: number },
  mouseInSvg: { x: number; y: number }
): Pupil {
  const dx = mouseInSvg.x - eye.cx;
  const dy = mouseInSvg.y - eye.cy;
  const dist = Math.sqrt(dx * dx + dy * dy);
  const scale = dist === 0 ? 0 : Math.min(dist / 30, 1) * MAX_OFFSET;
  return {
    x: eye.cx + (dx / (dist || 1)) * scale,
    y: eye.cy + (dy / (dist || 1)) * scale,
  };
}

export function Avatar() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [left, setLeft] = useState<Pupil>(LEFT_EYE);
  const [right, setRight] = useState<Pupil>(RIGHT_EYE);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!svgRef.current) return;
      const rect = svgRef.current.getBoundingClientRect();
      const mouseInSvg = {
        x: ((e.clientX - rect.left) / rect.width) * 200,
        y: ((e.clientY - rect.top) / rect.height) * 200,
      };
      setLeft(calcPupil(LEFT_EYE_CENTER, mouseInSvg));
      setRight(calcPupil(RIGHT_EYE_CENTER, mouseInSvg));
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="hidden lg:flex items-center justify-center relative w-full">
      {/* Ambient glow behind avatar — scales with container */}
      <div className="absolute inset-0 rounded-full bg-violet-500/10 blur-3xl scale-75" />

      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 drop-shadow-2xl w-full h-auto"
      >
        <defs>
          <radialGradient id="faceGrad" cx="45%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#2d2d3d" />
            <stop offset="100%" stopColor="#18181b" />
          </radialGradient>
          <radialGradient id="irisGrad" cx="40%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.6" />
          </radialGradient>
          <filter id="avatarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <clipPath id="faceClip">
            <circle cx="100" cy="105" r="82" />
          </clipPath>
        </defs>

        {/* Outer accent ring */}
        <circle cx="100" cy="100" r="95" fill="none" stroke="#8b5cf6" strokeWidth="0.8" opacity="0.3" />
        <circle cx="100" cy="100" r="91" fill="none" stroke="#6366f1" strokeWidth="0.4" opacity="0.2" />

        {/* Face base */}
        <circle cx="100" cy="105" r="82" fill="url(#faceGrad)" />

        {/* Hair — top */}
        <ellipse cx="100" cy="30" rx="58" ry="35" fill="#1a1a2e" clipPath="url(#faceClip)" />
        {/* Hair — sides */}
        <ellipse cx="26" cy="80" rx="20" ry="40" fill="#1a1a2e" />
        <ellipse cx="174" cy="80" rx="20" ry="40" fill="#1a1a2e" />

        {/* Ears */}
        <ellipse cx="18" cy="110" rx="9" ry="13" fill="#2d2d3d" />
        <ellipse cx="182" cy="110" rx="9" ry="13" fill="#2d2d3d" />

        {/* Neck */}
        <rect x="84" y="178" width="32" height="22" rx="10" fill="#2d2d3d" />

        {/* Eyebrows */}
        <path d="M 60 84 Q 78 77 96 83" stroke="#a1a1aa" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 104 83 Q 122 77 140 84" stroke="#a1a1aa" strokeWidth="2.5" fill="none" strokeLinecap="round" />

        {/* Eye sockets */}
        <circle cx={LEFT_EYE_CENTER.cx} cy={LEFT_EYE_CENTER.cy} r="17" fill="#0a0a0f" />
        <circle cx={RIGHT_EYE_CENTER.cx} cy={RIGHT_EYE_CENTER.cy} r="17" fill="#0a0a0f" />

        {/* Irises */}
        <circle cx={LEFT_EYE_CENTER.cx} cy={LEFT_EYE_CENTER.cy} r="12" fill="url(#irisGrad)" opacity="0.9" />
        <circle cx={RIGHT_EYE_CENTER.cx} cy={RIGHT_EYE_CENTER.cy} r="12" fill="url(#irisGrad)" opacity="0.9" />

        {/* Pupils (cursor-tracking) */}
        <motion.circle
          r={6.5}
          fill="#1a0a2e"
          filter="url(#avatarGlow)"
          animate={{ cx: left.x, cy: left.y }}
          transition={{ type: "spring", damping: 18, stiffness: 180 }}
        />
        <motion.circle
          r={6.5}
          fill="#1a0a2e"
          filter="url(#avatarGlow)"
          animate={{ cx: right.x, cy: right.y }}
          transition={{ type: "spring", damping: 18, stiffness: 180 }}
        />

        {/* Pupil shine */}
        <motion.circle
          r={2}
          fill="white"
          opacity={0.85}
          animate={{ cx: left.x + 2, cy: left.y - 2.5 }}
          transition={{ type: "spring", damping: 18, stiffness: 180 }}
        />
        <motion.circle
          r={2}
          fill="white"
          opacity={0.85}
          animate={{ cx: right.x + 2, cy: right.y - 2.5 }}
          transition={{ type: "spring", damping: 18, stiffness: 180 }}
        />

        {/* Nose */}
        <ellipse cx="100" cy="120" rx="4" ry="3.5" fill="#3f3f46" />

        {/* Mouth — subtle smile */}
        <path
          d="M 84 136 Q 100 148 116 136"
          stroke="#8b5cf6"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
          filter="url(#softGlow)"
        />

        {/* Decorative accent dots */}
        <circle cx="38" cy="130" r="2" fill="#8b5cf6" opacity="0.4" />
        <circle cx="162" cy="130" r="2" fill="#8b5cf6" opacity="0.4" />
      </svg>
    </div>
  );
}
