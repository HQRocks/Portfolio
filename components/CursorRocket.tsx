"use client";

import React, { useState, useEffect } from 'react';

interface CursorRocketProps {
    isParked?: boolean;
}

export default function CursorRocket({ isParked = false }: CursorRocketProps) {
    const [pos, setPos] = useState({ x: 0, y: 0, angle: 0, isMoving: false });
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        if (isParked) return;

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let currentX = mouseX;
        let currentY = mouseY;
        let frameId: number;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        const handleHideRocket = (e: Event) => {
            const customEvent = e as CustomEvent<boolean>;
            setIsHidden(customEvent.detail);
        };

        const animate = () => {
            const dx = mouseX - currentX;
            const dy = mouseY - currentY;
            const distance = Math.sqrt(dx * dx + dy * dy);

            currentX += dx * 0.07;
            currentY += dy * 0.07;

            const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
            const isMoving = distance > 0.8;

            setPos({ x: currentX, y: currentY, angle, isMoving });
            frameId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('hide-rocket', handleHideRocket as EventListener);
        frameId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('hide-rocket', handleHideRocket as EventListener);
            cancelAnimationFrame(frameId);
        };
    }, [isParked]);

    // HA LE VAN PARKOLVA: Egységes stílusú dokkoló (ugyanolyan, mint a SpaceButton)
    if (isParked) {
        return (
            <div
                title="The rocket only operates in space"
                className="relative w-14 h-14 rounded-full bg-slate-900/80 border border-indigo-500/30 backdrop-blur-md flex items-center justify-center cursor-help transition-all duration-300 hover:scale-105 hover:border-indigo-400 shadow-[0_0_20px_rgba(79,70,229,0.2)]"
            >
                {/* A leparkolt űrhajó (álló helyzetben) */}
                <div className="relative flex items-center justify-center transform -rotate-45">
                    <svg
                        className="w-6 h-6 text-indigo-100 filter drop-shadow-[0_0_8px_rgba(129,140,248,0.9)]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path fill="currentColor" stroke="none" d="M12 2C9.5 5 7.5 9.5 7.5 14C7.5 16 8 18 9 19.5C9 19.5 6 21 4.5 22C4 22.33 3.66 21 4 20.5C5 18 7 14 7 14C7 14 6 13 6 12C6 11 12 2 12 2Z" />
                        <path fill="currentColor" stroke="none" d="M12 2C14.5 5 16.5 9.5 16.5 14C16.5 16 16 18 15 19.5C15 19.5 18 21 19.5 22C20 22.33 20.34 21 20 20.5C19 18 17 14 17 14C17 14 18 13 18 12C18 11 12 2 12 2Z" />
                        <circle cx="12" cy="11" r="1.8" className="text-slate-900" fill="currentColor" />
                    </svg>
                </div>
            </div>
        );
    }

    // HA SZABADON REPÜL A FŐOLDALON:
    return (
        <div
            className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${isHidden ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                }`}
            style={{
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(-50%, -50%) rotate(${pos.angle}deg)`,
            }}
        >
            <div className="relative flex flex-col items-center">
                {pos.isMoving && (
                    <div className="absolute -bottom-5 w-3 h-8 flex justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-orange-500 to-indigo-400 rounded-full blur-[2px] animate-pulse" />
                        <div className="relative w-1 h-5 mt-1 bg-white/70 rounded-full blur-[1px]" />
                    </div>
                )}

                <svg
                    className="w-7 h-7 text-indigo-100 filter drop-shadow-[0_0_8px_rgba(129,140,248,0.9)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                >
                    <path fill="currentColor" stroke="none" d="M12 2C9.5 5 7.5 9.5 7.5 14C7.5 16 8 18 9 19.5C9 19.5 6 21 4.5 22C4 22.33 3.66 21 4 20.5C5 18 7 14 7 14C7 14 6 13 6 12C6 11 12 2 12 2Z" />
                    <path fill="currentColor" stroke="none" d="M12 2C14.5 5 16.5 9.5 16.5 14C16.5 16 16 18 15 19.5C15 19.5 18 21 19.5 22C20 22.33 20.34 21 20 20.5C19 18 17 14 17 14C17 14 18 13 18 12C18 11 12 2 12 2Z" />
                    <circle cx="12" cy="11" r="1.8" className="text-slate-900" fill="currentColor" />
                </svg>
            </div>
        </div>
    );
}