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

      {/* Chaotic Draggable Elements */}
      <DraggableSticker initialX={-350} initialY={-220} rotate={-12}>
        <div className="bg-neo-yellow border-2 border-neo-black p-3 shadow-neo font-mono text-sm font-bold transform -rotate-6 hover:scale-110 transition-transform">
          CS Student @ MUN 🎓
        </div>
      </DraggableSticker>

      {/* Replaced 'Open for Full-time' with Interactive Resume Button */}
      <DraggableSticker initialX={380} initialY={-100} rotate={8}>
        <motion.a 
          href="/resume.pdf" // Placeholder link
          download
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-neo-pink border-2 border-neo-black px-6 py-3 shadow-neo rounded-lg flex items-center gap-2 hover:bg-white transition-colors cursor-pointer"
        >
          <Download size={20} className="text-neo-black" />
          <span className="font-display font-bold text-neo-black uppercase">Resume</span>
        </motion.a>
      </DraggableSticker>

      <DraggableSticker initialX={-400} initialY={150} rotate={-5}>
        <div className="bg-white border-2 border-neo-black p-2 shadow-neo-sm w-40 h-40 flex flex-col items-center justify-center gap-2 hover:-rotate-12 transition-transform">
          <span className="font-mono text-xs font-bold bg-neo-green px-2">GPA 3.7</span>
          <span className="font-mono text-xs font-bold bg-neo-orange px-2">Dean's List</span>
          <div className="w-full h-1 bg-neo-black mt-2"></div>
          <span className="text-4xl">🚀</span>
        </div>
      </DraggableSticker>

      <DraggableSticker initialX={350} initialY={250} rotate={15}>
         <div className="bg-neo-cyan border-2 border-neo-black p-3 shadow-neo rotate-12">
            <div className="flex gap-2">
               <Terminal size={16} />
               <Code2 size={16} />
               <Database size={16} />
            </div>
         </div>
      </DraggableSticker>

      <div className="z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-6xl md:text-9xl font-bold text-neo-black leading-tight tracking-tighter mix-blend-darken">
            MAYESHA
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neo-orange to-neo-pink stroke-black relative" style={{ WebkitTextStroke: '0px' }}>
              JASHIM
              {/* SVG Underline */}
              <svg className="absolute w-full h-6 bottom-2 left-0 pointer-events-none" viewBox="0 0 300 20">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 inline-block"
        >
          <div className="bg-white border-4 border-neo-black p-6 shadow-neo transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <p className="font-mono text-lg md:text-xl font-bold text-neo-black">
            Just a girlie in STEM architecting the <br className="md:hidden"/>simulations
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
        <ArrowDown className="animate-bounce w-12 h-12 text-neo-black" strokeWidth={3} />
      </motion.div>
    </section>
  );
};

export default Hero;