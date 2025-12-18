'use client'

import { motion } from 'framer-motion';
import { RESUME_DATA } from '@/constants';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Contact = () => {
  return (
    <section className="min-h-[80vh] bg-neo-pink flex flex-col justify-between pt-24 pb-12 px-6 border-t-4 border-neo-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-block bg-white border-2 border-neo-black px-4 py-1 font-mono text-sm mb-6 shadow-neo rounded-full">
          Status: Active & Learning
        </div>
        
        <h2 className="font-display text-6xl md:text-8xl font-bold mb-8 leading-none">
          LET'S BUILD <br />
          <span className="text-white" style={{ textShadow: '4px 4px 0px #000' }}>SOMETHING</span> <br />
          COOL.
        </h2>

        <div className="flex flex-wrap justify-center gap-6 mt-12">
           <a href={`mailto:${RESUME_DATA.contact.email}`} className="group relative">
             <div className="absolute inset-0 bg-neo-black translate-y-2 translate-x-2 rounded-lg group-hover:translate-x-3 group-hover:translate-y-3 transition-all" />
             <div className="relative bg-white border-2 border-neo-black px-8 py-4 rounded-lg flex items-center gap-3 font-bold text-xl hover:-translate-y-1 transition-transform">
               <Mail /> Email Me
             </div>
           </a>
           
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
      </div>

      <div className="text-center mt-24 font-mono text-sm font-bold flex flex-col items-center gap-2">
        <p>Designed with <Heart className="inline w-4 h-4 text-red-500 fill-current" /> by Mayesha</p>
      </div>
    </section>
  );
};

export default Contact;