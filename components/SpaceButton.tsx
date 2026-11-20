"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface SpaceButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  size?: "lg" | "md" | "sm";
}

export default function SpaceButton({
  label,
  href,
  onClick,
  isActive,
  size = "lg",
}: SpaceButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setIsDesktopPointer(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const handleMouseEnter = () => {
    if (!isDesktopPointer) return;
    setIsHovered(true);
    window.dispatchEvent(new CustomEvent("hide-rocket", { detail: true }));
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDesktopPointer) return;
    window.dispatchEvent(new CustomEvent("hide-rocket", { detail: false }));
  };

  // Compact on mobile, full size on md+ screens
  const sizeClasses = {
    lg: "px-8 py-3 text-lg sm:px-11 sm:py-4 sm:text-2xl md:px-15 md:py-5 md:text-3xl",
    md: "px-4 py-1.5 text-xs sm:px-7 sm:py-2.5 sm:text-base md:px-10 md:py-3.5 md:text-xl",
    sm: "px-3 py-1 text-xs sm:px-5 sm:py-1.5 sm:text-sm md:px-6 md:py-2 md:text-base",
  };

  const showAlien = isDesktopPointer && isHovered;

  const buttonContent = (
    <div
      className="relative inline-block py-1.5 md:py-5 px-1 md:px-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Kukucskáló űrlény (desktop pointer hover only) */}
      {isDesktopPointer && (
        <div
          className={`hidden md:block absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-10 ${
            showAlien ? "-top-1 opacity-100 scale-100" : "top-4 opacity-0 scale-75"
          }`}
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]">
              👽
            </span>
            <div className="w-[1px] h-2 bg-emerald-400" />
          </div>
        </div>
      )}

      {/* Fő gomb */}
      <div
        className={`relative rounded-full font-semibold tracking-wide whitespace-nowrap backdrop-blur-md transition-all duration-300 transform md:hover:scale-105 z-20 flex items-center justify-center ${sizeClasses[size]} ${
          isActive
            ? "bg-indigo-600/30 text-white border border-indigo-400/50 shadow-[0_0_25px_rgba(99,102,241,0.4)]"
            : "bg-slate-900/80 text-slate-300 border border-indigo-500/30 md:hover:border-indigo-400 md:hover:text-white md:hover:shadow-[0_0_30px_rgba(79,70,229,0.3)]"
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