"use client";

import { useState } from 'react';

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

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className="flex relative py-5 px-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Kukucskáló űrlény */}
            <div
                className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 pointer-events-none z-10 ${isHovered ? '-top-1 opacity-100 scale-100' : 'top-4 opacity-0 scale-75'
                    }`}
            >
                <div className="flex flex-col items-center">
                    <span className="text-2xl filter drop-shadow-[0_0_8px_rgba(52,211,153,0.9)]">
                        👽
                    </span>
                    <div className="w-[1px] h-2 bg-emerald-400" />
                </div>
            </div>

            <a
                href={href}
                target="_blank"
                className="h-96 w-96 rounded-xl border-2 border-cyan-800 bg-slate-900/40 p-2 backdrop-blur-sm
                hover:scale-101 hover:border-indigo-400 hover:text-white hover:shadow-[0_0_30px_rgba(79,70,229,0.3)] z-20"
            >
                <div className="h-40 overflow-hidden rounded-lg bg-slate-950 mb-1">
                    <img
                        src={imagePath}
                        alt=""
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Card Body */}
                <div className="flex flex-col p-2 gap-2">
                    <h2 className="text-lg text-white">
                        {title}
                    </h2>

                    <p className="text-base leading-relaxed text-slate-400">
                        {children}
                    </p>

                    <p className="text-base italic text-slate-500">
                        Note: {note}
                    </p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700"
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