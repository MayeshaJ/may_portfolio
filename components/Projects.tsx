'use client'

import React from 'react';
import { motion } from 'framer-motion';
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

const ProjectSection: React.FC<{ project: Project, index: number }> = ({ project, index }) => {
  const isEven = index % 2 === 0;
  const GraphicComponent = GraphicMap[project.id];

  return (
    <section className={`min-h-[90vh] flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} border-b-4 border-neo-black relative overflow-hidden`}>
      
      {/* Visual/Graphic Side (50%) */}
      <div className={`w-full md:w-1/2 min-h-[50vh] md:min-h-full relative border-b-4 md:border-b-0 ${isEven ? 'md:border-r-4' : 'md:border-l-4'} border-neo-black bg-neo-bg overflow-hidden group`}>
        {/* The Interactive Graphic */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {GraphicComponent}
        </motion.div>
        
        {/* Overlay Label */}
        <motion.div 
          className="absolute top-6 left-6 z-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
           <span className={`inline-block px-4 py-2 ${project.color} border-2 border-neo-black font-mono font-bold shadow-neo`}>
             VISUALIZATION_MODE: ON
           </span>
        </motion.div>
      </div>

      {/* Content Side (50%) */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white relative">
        
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
               <motion.span 
                 className="font-mono text-6xl font-bold opacity-10 stroke-black" 
                 style={{ WebkitTextStroke: '2px #1a1a1a', color: 'transparent' }}
                 initial={{ scale: 0.8, opacity: 0 }}
                 whileInView={{ scale: 1, opacity: 0.1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
               >
                 0{index + 1}
               </motion.span>
               <motion.span 
                 className={`px-3 py-1 border border-neo-black rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-gray-100`}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3, duration: 0.4 }}
               >
                  {project.category}
               </motion.span>
            </motion.div>

            <motion.h2 
              className="font-display text-5xl md:text-7xl font-bold mb-8 leading-none"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {project.title}
            </motion.h2>

            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-2 bg-neo-black mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
              />
              <motion.p 
                className="font-mono text-lg leading-relaxed text-gray-800"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            <div className="flex flex-wrap gap-2 mb-10">
              {project.tech.map((t, techIndex) => (
                <motion.span 
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                  className={`px-3 py-1 border-2 border-neo-black text-sm font-bold shadow-[2px_2px_0px_0px_#1a1a1a] ${project.color} bg-opacity-30`}
                >
                  {t}
                </motion.span>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.a 
                href={project.link || "#"} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                className="flex items-center gap-2 bg-neo-black text-white px-8 py-4 font-bold text-lg border-2 border-transparent hover:bg-neo-pink hover:text-neo-black hover:border-neo-black transition-all shadow-neo hover:shadow-neo-hover"
              >
                <Github size={20} /> View Code
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

const Projects: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Section Header */}
      <div className="py-24 px-6 border-b-4 border-neo-black bg-neo-yellow/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="font-display text-6xl md:text-9xl font-bold text-neo-black mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SELECTED<br />
            <motion.span 
              className="pl-20 md:pl-40 text-stroke-2 text-transparent bg-clip-text bg-gradient-to-r from-neo-pink to-neo-purple" 
              style={{ WebkitTextStroke: '3px #1a1a1a' }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              PROJECTS
            </motion.span>
          </motion.h2>
          <motion.p 
            className="font-mono text-xl md:text-2xl max-w-2xl mt-8 border-l-4 border-neo-black pl-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A collection of prototypes, simulations, and tools engineered for impact.
            <br />
          </motion.p>
        </div>
      </div>

      {/* Vertical Project Stack */}
      <div>
        {PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;