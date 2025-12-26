'use client'

import React, { Suspense, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import HowIThink from '@/components/HowIThink'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import { Menu } from 'lucide-react'

// Dynamically import ThreeScene with SSR disabled
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { 
  ssr: false,
  loading: () => null
})

const OpenToWorkButton = () => {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 hidden md:block">
      <div className="relative w-20 h-20 md:w-28 md:h-28 animate-spin-slow">
        {/* 
          Adjusted viewBox and textPath for perfect centering.
          cx, cy = 50, 50. Radius approx 35-40 for text path.
        */}
        <svg viewBox="0 0 100 100" width="100%" height="100%">
          <defs>
              <path id="circlePath" d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
          </defs>
          <text fontSize="10" fontWeight="bold" fill="#1a1a1a" letterSpacing="2px">
              <textPath href="#circlePath" startOffset="0%">
                OPEN TO WORK • OPEN TO WORK •
              </textPath>
          </text>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 bg-neo-green rounded-full border-2 border-neo-black flex items-center justify-center">
            
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close menu after clicking
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <nav className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
      <div className="relative" ref={menuRef}>
         <button 
           onClick={() => setIsOpen(!isOpen)}
           className="bg-white border-2 border-neo-black p-2 md:p-3 shadow-neo hover:shadow-neo-hover hover:-translate-y-1 transition-all rounded-full"
         >
           <Menu size={20} className="md:w-6 md:h-6" />
         </button>
         
         {isOpen && (
           <div className="absolute right-0 top-full mt-4 w-48 bg-white border-2 border-neo-black shadow-neo p-2 transform origin-top-right transition-all">
              <ul className="space-y-2 font-mono text-sm">
                {[
                  { label: 'Hi', id: 'hero' },
                  { label: 'Intro', id: 'mind' },
                  { label: 'Education', id: 'education' },
                  { label: 'Projects', id: 'projects' },
                  { label: 'Experience', id: 'experience' },
                  { label: 'Contact', id: 'contact' }
                ].map((item) => (
                  <li 
                    key={item.label} 
                    onClick={() => scrollToSection(item.id)}
                    className="hover:bg-neo-yellow p-2 cursor-pointer border-b border-transparent hover:border-neo-black transition-colors"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
           </div>
         )}
      </div>
    </nav>
  )
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neo-bg text-neo-black selection:bg-neo-pink selection:text-neo-black">
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
      
      <Navigation />
      
      <main className="relative z-10">
        <div id="hero">
          <Hero />
        </div>
        <div id="mind">
          <HowIThink />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
      
      {/* Sticky Action Button - Centered Text Alignment Fix */}
      <OpenToWorkButton />
    </div>
  )
}

