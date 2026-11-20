"use client";

import React from 'react';
import Link from 'next/link';

interface PlanetProps {
  size?: number;
  href?: string;
}

export default function Planet({ size = 420, href = '/' }: PlanetProps) {
  const isSmall = size < 200;

  const planetContent = (
    <div 
      className="relative flex items-center justify-center animate-float group cursor-pointer flex-shrink-0"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes alienFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        @keyframes rotatePlanet {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 0%; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-alien-idle { animation: alienFloat 4s ease-in-out infinite; }
        
        .purple-planet-surface {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(216, 180, 254, 0.45) 0%, transparent 25%),
            radial-gradient(circle at 70% 60%, rgba(168, 85, 247, 0.5) 0%, transparent 35%),
            radial-gradient(circle at 40% 80%, rgba(126, 34, 206, 0.6) 0%, transparent 30%),
            linear-gradient(135deg, #3b0764 0%, #2e1065 50%, #030712 100%);
          background-size: 200% 100%;
          animation: rotatePlanet 60s linear infinite;
        }
      `}</style>

      {/* Lila kozmikus ragyogás */}
      <div className="absolute inset-[-12px] bg-gradient-to-tr from-purple-500/20 via-fuchsia-500/20 to-indigo-600/20 rounded-full blur-xl pointer-events-none animate-pulse" />

      {/* Űrlény / UFO egység */}
      <div className={`absolute ${isSmall ? '-top-3' : '-top-6'} left-1/2 -translate-x-1/2 z-50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:-translate-y-2 pointer-events-none`}>
        <div className="animate-alien-idle flex flex-col items-center">
          <div className={`${isSmall ? 'w-1 h-1' : 'w-2 h-2'} bg-purple-300 rounded-full shadow-[0_0_12px_#d8b4fe]`} />
          <div className={`${isSmall ? 'h-2' : 'h-4'} w-[1px] bg-purple-400`} />
          <div className={`relative ${isSmall ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'} rounded-full bg-slate-950/95 border border-purple-500/60 shadow-[0_0_20px_rgba(168,85,247,0.4)] backdrop-blur-xl flex items-center justify-center`}>
            <span className="filter drop-shadow-[0_0_6px_rgba(216,180,254,0.9)]">
              👽
            </span>
            <div className="absolute inset-x-0 -bottom-1 h-[2px] bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Bolygó Test */}
      <div 
        className="relative w-full h-full rounded-full bg-slate-950 border border-purple-500/40 overflow-hidden shadow-[0_0_50px_rgba(147,51,234,0.3)] flex items-center justify-center z-30 transition-all duration-500 group-hover:scale-105 group-hover:border-purple-400 group-hover:shadow-[0_0_70px_rgba(168,85,247,0.5)]"
      >
        {/* Lila textúra és kráterek */}
        <div className="absolute inset-0 purple-planet-surface opacity-95 z-10" />

        {/* 3D Gömbhatás és lila fényes ív */}
        <div className="absolute top-4 left-6 w-2/5 h-2/5 bg-purple-300/20 rounded-full blur-lg z-30 pointer-events-none" />
        <div className="absolute inset-0 shadow-[inset_-20px_-20px_40px_rgba(2,6,23,0.95),inset_10px_10px_20px_rgba(216,180,254,0.2)] rounded-full z-40 pointer-events-none" />
      </div>
    </div>
  );

  if (href) {
    return <Link href={href}>{planetContent}</Link>;
  }

  return planetContent;
}