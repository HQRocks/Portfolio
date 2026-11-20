"use client"

import { usePathname } from 'next/navigation'; // <--- Ez figyeli az aktuális URL-t
import SpaceButton from '../components/SpaceButton';
import Planet from '../components/Planet';
import CursorRocket from './CursorRocket';

export default function Navbar() {

    const pathname = usePathname(); // Megmondja, hogy hol vagyunk (pl. "/" vagy "/about" vagy "/projects")

    if (pathname === '/') {
        return null;
    }

    return (
        <nav className="h-40 flex flex-row justify-between items-center px-20 gap-12">

            <Planet size={70} href="/"/>

            <div className="flex flex-row items-center gap-4">
                <SpaceButton label="About Me" href="/about" size='md' isActive={pathname === '/about'}/>
                <SpaceButton label="Projects" href="/projects" size='md' isActive={pathname === '/projects'}/>
                <CursorRocket isParked={true}/>
            </div>
        </nav>
    );
}