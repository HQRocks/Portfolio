"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import Planet from '../components/Planet';
import SpaceButton from "../components/SpaceButton";
import CursorRocket from '../components/CursorRocket';


export default function Home() {

  return (
    <main>
      <CursorRocket />
      
      <div className="relative min-h-screen text-white flex flex-col items-center justify-center">

        <nav className="flex flex-row justify-center items-center gap-12">
          
          <SpaceButton label="About Me" href="/about"/>
          <Planet size={400}/>
          <SpaceButton label="Projects" href="/projects"/>
        </nav>

      </div>
    </main>
  );
}