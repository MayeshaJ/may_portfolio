'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Code2, Database, Terminal } from 'lucide-react';
import DraggableSticker from '@/components/DraggableSticker';
import { LogicGrid } from '@/components/AnimatedGraphics';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center p-6 overflow-hidden">
      
      {/* Background Animation Layer */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <LogicGrid />
      </div>

      {/* Main Content Container - Name & Tagline */}
      <div className="z-10 text-center max-w-[90vw] md:max-w-5xl relative">
        
        {/* Stickers positioned relative to the content container */}
        {/* Top-Left: CS Student */}
        <DraggableSticker 
          initialX={0} 
          initialY={0} 
          rotate={-12} 
          className="absolute pointer-events-auto -top-16 -left-4 sm:-top-20 sm:-left-8 md:-top-24 md:-left-16 lg:-top-28 lg:-left-24"
        >
          <div className="bg-neo-yellow border-2 border-neo-black p-2 md:p-3 shadow-neo font-mono text-[10px] md:text-sm font-bold transform -rotate-6 hover:scale-110 transition-transform whitespace-nowrap">
            CS Student @ MUN 🎓
          </div>
        </DraggableSticker>

        {/* Top-Right: Resume Button */}
        <DraggableSticker 
          initialX={0} 
          initialY={0} 
          rotate={8} 
          className="absolute pointer-events-auto -top-8 -right-4 sm:-top-12 sm:-right-8 md:-top-16 md:-right-12 lg:-top-20 lg:-right-20"
        >
          <motion.a 
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-neo-pink border-2 border-neo-black px-3 py-1.5 md:px-6 md:py-3 shadow-neo rounded-lg flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
          >
            <Download size={14} className="text-neo-black md:w-5 md:h-5" />
            <span className="font-display font-bold text-neo-black uppercase text-[10px] md:text-base">Resume</span>
          </motion.a>
        </DraggableSticker>

        {/* Bottom-Left: GPA Card */}
        <DraggableSticker 
          initialX={0} 
          initialY={0} 
          rotate={-5} 
          className="absolute pointer-events-auto -bottom-36 -left-8 sm:-bottom-40 sm:-left-12 md:-bottom-44 md:-left-20 lg:-bottom-48 lg:-left-28"
        >
          <div className="bg-white border-2 border-neo-black p-2 shadow-neo-sm w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 flex flex-col items-center justify-center gap-1 md:gap-2 hover:-rotate-12 transition-transform">
            <span className="font-mono text-[9px] md:text-xs font-bold bg-neo-green px-2">GPA 3.7</span>
            <span className="font-mono text-[9px] md:text-xs font-bold bg-neo-orange px-2">Dean's List</span>
            <div className="w-full h-0.5 md:h-1 bg-neo-black mt-1 md:mt-2"></div>
            <span className="text-xl md:text-3xl lg:text-4xl">🚀</span>
          </div>
        </DraggableSticker>

        {/* Bottom-Right: Tech Icons */}
        <DraggableSticker 
          initialX={0} 
          initialY={0} 
          rotate={15} 
          className="absolute pointer-events-auto -bottom-24 -right-4 sm:-bottom-28 sm:-right-8 md:-bottom-32 md:-right-12 lg:-bottom-36 lg:-right-20"
        >
          <div className="bg-neo-cyan border-2 border-neo-black p-2 md:p-3 shadow-neo rotate-12">
            <div className="flex gap-1.5 md:gap-2">
              <Terminal size={12} className="md:w-4 md:h-4" />
              <Code2 size={12} className="md:w-4 md:h-4" />
              <Database size={12} className="md:w-4 md:h-4" />
            </div>
          </div>
        </DraggableSticker>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-neo-black leading-tight tracking-tighter mix-blend-darken">
            MAYESHA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-orange to-neo-pink stroke-black relative" style={{ WebkitTextStroke: '0px' }}>
              JASHIM
              {/* SVG Underline */}
              <svg className="absolute w-full h-4 md:h-6 bottom-1 md:bottom-2 left-0 pointer-events-none" viewBox="0 0 300 20">
                <motion.path 
                  d="M5,15 Q150,5 295,15" 
                  fill="none" 
                  stroke="#1a1a1a" 
                  strokeWidth="4"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 md:mt-8 inline-block"
        >
          <div className="bg-white border-2 md:border-4 border-neo-black p-4 md:p-6 shadow-neo transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="font-mono text-sm sm:text-base md:text-xl font-bold text-neo-black">
            Just a girlie in STEM
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <ArrowDown className="animate-bounce w-8 h-8 md:w-12 md:h-12 text-neo-black" strokeWidth={3} />
      </motion.div>
    </section>
  );
};

export default Hero;