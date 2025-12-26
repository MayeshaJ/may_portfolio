'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';
import { RESUME_DATA } from '@/constants';
import { Mail, Linkedin, Github, Heart, Check } from 'lucide-react';

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(RESUME_DATA.contact.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      // Fallback: try mailto if clipboard fails
      window.location.href = `mailto:${RESUME_DATA.contact.email}`;
    }
  };

  return (
    <section className="min-h-[70vh] bg-neo-pink flex flex-col justify-center items-center px-4 md:px-6 pt-16 md:pt-20 pb-12 border-t-4 border-neo-black relative overflow-hidden">
      <div className="w-full max-w-screen-lg mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        <div className="inline-block bg-white border-2 border-neo-black px-4 py-1 font-mono text-xs md:text-sm mb-12 md:mb-16 shadow-neo rounded-full">
          Status: Open for Full-time
        </div>
        
        <h2 className="font-display text-5xl md:text-8xl font-bold mb-8 leading-none">
          LET'S BUILD <br />
          <span className="text-white" style={{ textShadow: '4px 4px 0px #000' }}>SOMETHING</span> <br />
          COOL.
        </h2>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-8 md:mt-12">
           <button 
             onClick={handleEmailClick}
             className="group relative"
           >
             <div className="absolute inset-0 bg-neo-black translate-y-2 translate-x-2 rounded-lg group-hover:translate-x-3 group-hover:translate-y-3 transition-all" />
             <div className="relative bg-white border-2 border-neo-black px-8 py-4 rounded-lg flex items-center gap-3 font-bold text-xl hover:-translate-y-1 transition-transform">
               {emailCopied ? <Check size={20} /> : <Mail />} 
               {emailCopied ? 'Email Copied!' : 'Email Me'}
             </div>
           </button>
           
           <a href={RESUME_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="group relative">
             <div className="absolute inset-0 bg-neo-blue translate-y-2 translate-x-2 rounded-lg bg-blue-600" />
             <div className="relative bg-white border-2 border-neo-black px-8 py-4 rounded-lg flex items-center gap-3 font-bold text-xl hover:-translate-y-1 transition-transform">
               <Linkedin /> LinkedIn
             </div>
           </a>

           <a href={RESUME_DATA.contact.github} target="_blank" rel="noreferrer" className="group relative">
             <div className="absolute inset-0 bg-neo-black translate-y-2 translate-x-2 rounded-lg" />
             <div className="relative bg-neo-yellow border-2 border-neo-black px-8 py-4 rounded-lg flex items-center gap-3 font-bold text-xl hover:-translate-y-1 transition-transform">
               <Github /> GitHub
             </div>
           </a>
        </div>

        <div className="mt-16 font-mono text-sm font-bold flex flex-col items-center gap-2">
          <p>Designed with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> by Mayesha</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;