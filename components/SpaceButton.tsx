"use client";

import React, { useState } from 'react';
import Link from 'next/link';

interface SpaceButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  size?: 'lg' | 'md' | 'sm'; // Opcionális méretválasztó (alapból 'lg', azaz a te méreted)
}

export default function SpaceButton({ label, href, onClick, isActive, size = 'lg' }: SpaceButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    window.dispatchEvent(new CustomEvent('hide-rocket', { detail: true }));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    window.dispatchEvent(new CustomEvent('hide-rocket', { detail: false }));
  };

  // Méret osztályok leképzése (ha nem adsz meg semmit, a te nagy méreted érvényesül)
  const sizeClasses = {
    lg: 'px-15 py-5 text-3xl', // A te általad megálmodott óriási méret
    md: 'px-10 py-3.5 text-xl', // Ideális a Navbarba vagy más oldalakra
    sm: 'px-6 py-2 text-base',   // Kisebb, ha valahova pici gomb kell
  };

  const buttonContent = (
    <div 
      className="relative inline-block py-5 px-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Kukucskáló űrlény */}
      <div 
        className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-10 ${
          isHovered ? '-top-1 opacity-100 scale-100' : 'top-4 opacity-0 scale-75'
        }`}
      >
        <div className="flex flex-col items-center">
          <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]">
            👽
          </span>
          <div className="w-[1px] h-2 bg-emerald-400" />
        </div>
      </div>

      {/* Fő gomb */}
      <div
        className={`relative rounded-full font-semibold tracking-wide backdrop-blur-md transition-all duration-300 transform hover:scale-105 z-20 flex items-center justify-center ${sizeClasses[size]} ${
          isActive
            ? 'bg-indigo-600/30 text-white border border-indigo-400/50 shadow-[0_0_25px_rgba(99,102,241,0.4)]'
            : 'bg-slate-900/80 text-slate-300 border border-indigo-500/30 hover:border-indigo-400 hover:text-white hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]'
        }`}
      >
        {label}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {buttonContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="inline-block text-left">
      {buttonContent}
    </button>
  );
}