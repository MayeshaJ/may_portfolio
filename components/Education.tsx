'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { BookOpen, Award } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 border-t-4 border-neo-black bg-neo-bg relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Centered Academic Info */}
        <div className="flex flex-col items-center">
           <div className="flex items-center gap-4 mb-8">
             <div className="bg-neo-black text-white p-3 rounded-md">
               <BookOpen size={32} />
             </div>
             <h2 className="font-display text-5xl font-bold">EDUCATION</h2>
           </div>

           <div className="bg-white border-2 border-neo-black p-8 shadow-neo mb-12 relative w-full">
             <div className="absolute top-0 right-0 bg-neo-yellow px-4 py-1 font-bold font-mono border-l-2 border-b-2 border-neo-black">
               GPA {RESUME_DATA.education.gpa}
             </div>
             <h3 className="font-display text-3xl font-bold mb-2">{RESUME_DATA.education.school}</h3>
             <p className="font-mono text-lg mb-4">{RESUME_DATA.education.degree}</p>
             <div className="flex items-center gap-2 text-neo-pink font-bold mb-6">
                <Award size={20} />
                <span>{RESUME_DATA.education.honors[0]}</span>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Education;