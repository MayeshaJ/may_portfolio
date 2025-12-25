'use client'

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '@/constants';
import { Project } from '@/types';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { TradingGraphic, SecurityGraphic, ArcticAiGraphic, WorkflowGraphic, DocQAGraphic, GameLinkGraphic } from '@/components/AnimatedGraphics';

const GraphicMap: Record<string, React.ReactNode> = {
  'p1': <DocQAGraphic />,      // DocuQuery AI
  'p2': <GameLinkGraphic />,   // GameLink
  'p3': <WorkflowGraphic />,   // FeedbackFlow
  'p4': <SecurityGraphic />,   // Catch a Fish (when uncommented)
  'p5': <TradingGraphic />,    // Stonks: Trading Sim (when uncommented)
  'p6': <GameLinkGraphic />    // Additional project slot
};

const ProjectSection: React.FC<{ project: Project, index: number, total: number }> = ({ project, index, total }) => {
  const GraphicComponent = GraphicMap[project.id];
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Create a "dimming/scaling" effect as the card gets covered by the next one
  // We only want this to happen to cards that are NOT the last one
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const shadowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0]);

  return (
    <div 
      ref={containerRef}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-4 md:px-10"
      style={{ 
        zIndex: (index + 1) * 10,
        // Small offset so headers stack slightly if you wanted, 
        // but here we use it for a clean full overlap with z-index
      }}
    >
      <motion.div 
        style={{ 
          scale: index === total - 1 ? 1 : scale,
          opacity: index === total - 1 ? 1 : opacity,
        }}
        className="max-w-7xl w-full"
      >
        {/* The Unified Window Container */}
        <div className="bg-white border-4 border-neo-black shadow-[12px_12px_0px_0px_#1a1a1a] rounded-lg overflow-hidden flex flex-col">
          
          {/* Window Title Bar */}
          <div className="bg-neo-black p-4 flex items-center justify-between border-b-4 border-neo-black">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-neo-orange border border-white/20" />
              <div className="w-3 h-3 rounded-full bg-neo-yellow border border-white/20" />
              <div className="w-3 h-3 rounded-full bg-neo-green border border-white/20" />
            </div>
            <div className="text-white font-mono text-xs font-bold tracking-widest uppercase flex items-center gap-4">
              <span className="opacity-50">PROJ_0{index + 1}</span>
              <span className="hidden sm:inline">//</span>
              <span>{project.title}</span>
            </div>
            <div className="flex gap-2 opacity-0 md:opacity-100">
               <div className="w-4 h-1 bg-white/30" />
               <div className="w-4 h-1 bg-white/30" />
            </div>
          </div>

          {/* Main Layout Area */}
          <div className="flex flex-col md:flex-row h-full">
            
            {/* Left/Graphic Side: "The Live Viewport" */}
            <div className={`relative w-full md:w-3/5 min-h-[300px] md:min-h-[550px] ${project.color} border-b-4 md:border-b-0 md:border-r-4 border-neo-black group overflow-hidden`}>
              <div className="absolute inset-0 z-0">
                {GraphicComponent}
              </div>
              
              {/* Overlay Label */}
              {/* <div className="absolute top-4 left-4 z-10">
                <div className="bg-neo-black text-white px-3 py-1 font-mono text-[10px] font-bold flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  LIVE_SYSTEM_RENDER
                </div>
              </div> */}

              {/* Coordinate Grid Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>

            {/* Right/Content Side: "The Inspector Panel" */}
            <div className="w-full md:w-2/5 p-6 md:p-10 flex flex-col bg-white">
              <div className="mb-4 flex justify-between items-start">
                 <span className={`px-4 py-1 border-2 border-neo-black font-mono font-bold text-xs uppercase ${project.color} shadow-neo-sm`}>
                   {project.category}
                 </span>
                 <span className="font-mono text-4xl font-black opacity-10 leading-none">
                    0{index + 1}
                 </span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 leading-tight uppercase tracking-tighter">
                {project.title}
              </h2>

              <div className="flex-grow space-y-4">
                <div className="bg-gray-50 border-2 border-neo-black p-4 font-mono text-sm leading-relaxed relative">
                  <div className="absolute -top-3 left-3 bg-neo-black text-white px-2 py-0.5 text-[10px]">DESCRIPTION.TXT</div>
                  {project.description}
                </div>

                <div className="space-y-2">
                  <h4 className="font-mono text-[10px] font-bold uppercase text-gray-400">Environment_Variables:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-white border border-neo-black text-[10px] font-mono font-bold shadow-neo-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <motion.a 
                  href={project.link || "#"} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 bg-neo-black text-white px-4 py-3 font-bold text-xs border-2 border-neo-black hover:bg-white hover:text-neo-black transition-all shadow-neo"
                >
                  <Github size={16} /> OPEN_SOURCE
                </motion.a>
                <motion.button 
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 flex items-center justify-center gap-2 bg-white px-4 py-3 font-bold text-xs border-2 border-neo-black hover:bg-neo-yellow transition-all shadow-neo`}
                >
                  DETAILS <ArrowRight size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="bg-neo-bg">
      {/* Section Header - This will scroll away normally */}
      <div className="py-24 px-6 border-b-4 border-neo-black bg-neo-yellow/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-6xl md:text-9xl font-bold text-neo-black mb-4 leading-none">
            SELECTED<br />
            <span className="md:pl-40 text-transparent bg-clip-text bg-gradient-to-r from-neo-pink to-neo-purple" style={{ WebkitTextStroke: '3px #1a1a1a' }}>
              WORKS
            </span>
          </h2>
          <div className="max-w-2xl mt-8 border-l-8 border-neo-black pl-8">
            <p className="font-mono text-xl md:text-2xl font-bold uppercase tracking-tighter">
              A collection of prototypes, simulations, and tools.
            </p>
          </div>
        </div>
      </div>

      {/* The Sticky Stacking Container */}
      <div className="relative bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]">
        {PROJECTS.map((project, index) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            index={index} 
            total={PROJECTS.length} 
          />
        ))}
      </div>
      
      {/* Spacer so the last project doesn't feel like it ends too abruptly */}
      <div className="h-20 bg-neo-bg border-t-4 border-neo-black" />
    </div>
  );
};

export default Projects;