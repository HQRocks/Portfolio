"use client";

import { usePathname } from "next/navigation";
import SpaceButton from "../components/SpaceButton";
import Planet from "../components/Planet";
import CursorRocket from "./CursorRocket";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="min-h-20 md:h-40 flex flex-wrap justify-between items-center px-3 sm:px-8 md:px-20 py-3 md:py-0 gap-y-2 gap-x-2 sm:gap-x-6 md:gap-x-12">
      <Planet size={56} href="/" />

      <div className="flex flex-wrap items-center gap-1.5 sm:gap-4">
        <SpaceButton label="About Me" href="/about" size="md" isActive={pathname === "/about"} />
        <SpaceButton label="Projects" href="/projects" size="md" isActive={pathname === "/projects"} />
        <div className="hidden lg:block">
          <CursorRocket isParked={true} />
        </div>
      </div>
    </nav>
  );
}