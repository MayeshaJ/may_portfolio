'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 border-t-4 border-neo-black bg-neo-bg relative">
      <div className="w-full max-w-screen-md mx-auto">
        
        {/* Centered Academic Info */}
        <div className="flex flex-col items-center">
           <div className="flex items-center gap-3 md:gap-4 mb-8">
             <div className="bg-neo-black text-white p-2 md:p-3 rounded-md">
               <BookOpen size={24} className="md:w-8 md:h-8" />
             </div>
             <h2 className="font-display text-4xl md:text-5xl font-bold">EDUCATION</h2>
           </div>

           <div className="bg-white border-2 border-neo-black p-6 md:p-8 shadow-neo mb-12 relative w-full">
             <div className="absolute top-0 right-0 bg-neo-yellow px-3 py-1 md:px-4 md:py-1 font-bold font-mono text-sm md:text-base border-l-2 border-b-2 border-neo-black">
               GPA {RESUME_DATA.education.gpa}
             </div>
             <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 pr-20 md:pr-0">{RESUME_DATA.education.school}</h3>
             <p className="font-mono text-base md:text-lg mb-4">{RESUME_DATA.education.degree}</p>
             <div className="flex items-center gap-2 text-neo-pink font-bold mb-6">
                <Award size={18} className="md:w-5 md:h-5" />
                <span className="text-sm md:text-base">{RESUME_DATA.education.honors[0]}</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Education;