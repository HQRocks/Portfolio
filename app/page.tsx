"use client";

import React, { useEffect, useState } from "react";
import Planet from "../components/Planet";
import SpaceButton from "../components/SpaceButton";
import CursorRocket from "../components/CursorRocket";

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    const update = () => setIsDesktop(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return (
    <main>
      {isDesktop && <CursorRocket />}

      <div className="min-h-screen text-white flex items-center justify-center px-4 py-10">
        <nav className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <SpaceButton label="About Me" href="/about" />
          <Planet size={isDesktop ? 400 : 220} />
          <SpaceButton label="Projects" href="/projects" />
        </nav>
      </div>
    </main>
  );
}