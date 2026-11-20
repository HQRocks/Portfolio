"use client";

import { useEffect, useState } from "react";

type CardProps = {
    imagePath: string;
    title: string;
    tools: string[];
    note: string;
    children: string;
    href: string;
};

export default function Card({ imagePath, title, tools, note, children, href }: CardProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDesktopPointer, setIsDesktopPointer] = useState(false);

    useEffect(() => {
        const media = window.matchMedia("(min-width: 768px) and (pointer: fine)");
        const update = () => setIsDesktopPointer(media.matches);
        update();

        media.addEventListener("change", update);
        return () => media.removeEventListener("change", update);
    }, []);

    const showAlien = isDesktopPointer && isHovered;

    return (
        <div
            className="flex justify-center relative py-3 sm:py-5 px-1 sm:px-2 w-full sm:w-auto"
            onMouseEnter={() => isDesktopPointer && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
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

            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[270px] sm:max-w-[320px] md:w-96 min-h-[290px] sm:min-h-[340px] md:h-96 rounded-xl border-2 border-cyan-800 bg-slate-900/40 p-1.5 sm:p-2 backdrop-blur-sm
                md:hover:scale-101 md:hover:border-indigo-400 md:hover:text-white md:hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] z-20 transition-all"
            >
                <div className="h-28 sm:h-36 md:h-40 overflow-hidden rounded-lg bg-slate-950 mb-1">
                    <img
                        src={imagePath}
                        alt={title}
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Card Body */}
                <div className="flex flex-col p-1.5 sm:p-2 gap-1.5 sm:gap-2">
                    <h2 className="text-base sm:text-lg text-white">
                        {title}
                    </h2>

                    <p className="text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed text-slate-400">
                        {children}
                    </p>

                    <p className="text-xs sm:text-sm md:text-base italic text-slate-500">
                        Note: {note}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="text-[11px] sm:text-xs font-mono px-1.5 sm:px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </div>
    );
}