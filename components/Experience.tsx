'use client'

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE, SKILLS } from '@/constants';
import { Briefcase, MapPin, Calendar, Utensils, Beer, Fish, PartyPopper, HandPlatter, Hamburger } from 'lucide-react';

const ExperienceCard: React.FC<{ exp: typeof EXPERIENCE[0], index: number, isFirst?: boolean, isLast?: boolean }> = ({ exp, index, isFirst = false, isLast = false }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 mb-16 w-full ${isEven ? 'md:flex-row-reverse' : ''} ${isFirst ? 'md:pt-2' : ''} ${isLast ? 'md:pb-2' : ''}`}>
      
      <div className="w-full md:w-5/12 group">
        <motion.div 
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className={`bg-white border-2 border-neo-black p-6 shadow-neo group-hover:shadow-neo-hover transition-all duration-300 relative`}
        >
           <div className={`absolute -top-3 -left-3 w-8 h-8 ${exp.color} border-2 border-neo-black flex items-center justify-center font-bold z-10`}>
             {index + 1}
           </div>
           
           <h3 className="font-display text-xl font-bold mb-1">{exp.role}</h3>
           <div className="flex flex-wrap gap-3 text-sm font-mono text-gray-600 mb-4 border-b-2 border-dotted border-gray-300 pb-2">
             <span className="flex items-center gap-1"><Briefcase size={14} /> {exp.company}</span>
             <span className="flex items-center gap-1"><MapPin size={14} /> {exp.location}</span>
             <span className="flex items-center gap-1"><Calendar size={14} /> {exp.period}</span>
           </div>

           <ul className="list-disc list-inside space-y-2 font-mono text-sm">
             {exp.details.map((d, i) => (
               <li key={i} className="leading-tight">{d}</li>
             ))}
           </ul>
        </motion.div>
      </div>

      <div className="hidden md:flex w-2/12 justify-center relative bullet-container">
        <div className="w-4 h-4 bg-neo-black rounded-full z-10 ring-4 ring-white border-2 border-neo-black"></div>
      </div>

      <div className="w-full md:w-5/12" />
    </div>
  );
};

const SkillsTicker = () => {
  return (
    <div className="bg-neo-black py-4 overflow-hidden border-y-4 border-neo-yellow transform -rotate-1 mt-12">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex gap-8 whitespace-nowrap"
      >
        {[...SKILLS, ...SKILLS, ...SKILLS].map((cat, i) => (
           cat.skills.map((skill, j) => (
             <span key={`${i}-${j}`} className="text-white font-mono text-lg font-bold flex items-center gap-2">
               <span className="text-neo-yellow">*</span> {skill}
             </span>
           ))
        ))}
      </motion.div>
    </div>
  )
}

const SideQuestItem = ({ icon: Icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative flex flex-col items-center group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className={`w-16 h-16 rounded-full border-2 border-neo-black ${color} flex items-center justify-center shadow-neo hover:shadow-neo-hover z-10 relative cursor-pointer`}
      >
        <Icon size={28} className="text-neo-black" />
      </motion.div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            className="absolute top-20 w-48 bg-white border-2 border-neo-black p-3 shadow-neo z-20 text-center pointer-events-none"
          >
             <h4 className="font-bold font-display text-sm mb-1">{title}</h4>
             <p className="font-mono text-xs leading-tight">{desc}</p>
             <div className="w-3 h-3 bg-white border-t-2 border-l-2 border-neo-black absolute -top-2 left-1/2 -translate-x-1/2 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      if (!containerRef.current || !lineRef.current) return;
      
      // Wait for next frame to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        const bulletContainers = containerRef.current?.querySelectorAll('.bullet-container');
        
        if (bulletContainers && bulletContainers.length > 0) {
          const firstBullet = bulletContainers[0] as HTMLElement;
          const lastBullet = bulletContainers[bulletContainers.length - 1] as HTMLElement;
          const containerRect = containerRef.current?.getBoundingClientRect();
          
          if (firstBullet && lastBullet && containerRect) {
            const firstRect = firstBullet.getBoundingClientRect();
            const lastRect = lastBullet.getBoundingClientRect();
            
            const startY = firstRect.top + firstRect.height / 2 - containerRect.top;
            const endY = lastRect.top + lastRect.height / 2 - containerRect.top;
            
            if (lineRef.current) {
              lineRef.current.style.top = `${startY}px`;
              lineRef.current.style.height = `${endY - startY}px`;
              lineRef.current.style.bottom = 'auto';
            }
          }
        }
      });
    };

    // Initial update with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(updateLinePosition, 100);
    updateLinePosition();
    
    window.addEventListener('resize', updateLinePosition);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateLinePosition);
    };
  }, [EXPERIENCE.length]);

  return (
    <section className="py-16 md:py-24 bg-[#f0f0f0] relative overflow-hidden">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-7xl font-bold text-center mb-12 md:mb-20 text-neo-black uppercase" style={{ WebkitTextStroke: '1px black' }}>
          The Journey
        </h2>

        <div className="relative experience-container" ref={containerRef}>
           {/* Vertical Line - starts from first bullet, ends at last bullet */}
           <div 
                ref={lineRef}
                className="absolute left-1/2 w-1 bg-neo-black transform -translate-x-1/2 hidden md:block experience-line"
                style={{ 
                  top: '0px', 
                  height: '100px',
                  background: '#1a1a1a',
                  borderLeft: '1px dashed #1a1a1a',
                  borderRight: '1px dashed #ffffff'
                }} />
           
           {EXPERIENCE.map((exp, index) => (
             <ExperienceCard key={exp.id} exp={exp} index={index} isFirst={index === 0} isLast={index === EXPERIENCE.length - 1} />
           ))}
        </div>
        
        {/* Side Quests / Easter Eggs Section */}
        <div className="mt-32 pt-16 border-t-4 border-neo-black border-dashed relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f0f0f0] px-4">
              <span className="font-mono text-sm font-bold bg-neo-black text-white px-3 py-1 uppercase tracking-widest">Side Quests</span>
           </div>

           <div className="text-center mb-8">
              <h3 className="font-display text-3xl font-bold">The "Non-Tech" Lore</h3>
              <p className="font-mono text-sm opacity-60">Click icons to reveal service industry survival stats</p>
           </div>

           <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              <SideQuestItem 
                icon={Hamburger} 
                title="McDonald's (2022-2024)" 
                desc="Where the hustle began. Master of the fry station and high-pressure environments."
                color="bg-neo-yellow"
              />
              <SideQuestItem 
                icon={Beer} 
                title="A&W (Summer 2022)" 
                desc="Root beer floats & onion rings for days."
                color="bg-neo-orange"
              />
              <SideQuestItem 
                icon={HandPlatter} 
                title="Sun Sushi (Summer 2023)" 
                desc="Can recommend the best rolls in town.(And the secret menu items.)"
                color="bg-neo-pink"
              />
              <SideQuestItem 
                icon={PartyPopper} 
                title="Jack Astors (Summer 2024)" 
                desc="Managing reservations and first impressions with a smile and a pun on my t-shirt."
                color="bg-neo-purple"
              />
           </div>
        </div>
      </div>

      <SkillsTicker />
    </section>
  );
};

export default Experience;