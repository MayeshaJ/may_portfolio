'use client'

import type { ReactNode, ComponentType, FC } from 'react';
import { motion } from 'framer-motion';
import { TeamSync, GrowthMetaphor, SpeedLoop, FuelCycler } from '@/components/AnimatedGraphics';
import { RefreshCw, Coffee, Users, TrendingUp } from 'lucide-react';

const FeatureCard = ({ 
  title, 
  subtitle, 
  graphic, 
  color, 
  className = "", 
  icon: Icon 
}: { 
  title: string, 
  subtitle: string, 
  graphic: ReactNode, 
  color: string, 
  className?: string,
  icon: ComponentType<{ size?: number; className?: string }>
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative bg-white border-2 border-neo-black shadow-neo overflow-hidden flex flex-col ${className} group`}
  >
    {/* Header Area */}
    <div className={`p-6 ${color} border-b-2 border-neo-black flex items-center justify-between z-10 relative`}>
      <h3 className="font-display text-2xl font-bold uppercase tracking-tight">{title}</h3>
      <div className="bg-white border border-neo-black p-2 rounded-full shadow-sm">
         <Icon size={20} className="text-neo-black" />
      </div>
    </div>

    {/* Visual & Content Area */}
    <div className="flex-1 relative min-h-[200px]">
       {/* Graphic Layer */}
       <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {graphic}
       </div>
       
       {/* Text Overlay (Bottom) */}
       <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-sm border-t-2 border-neo-black transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
         <p className="font-mono text-sm leading-relaxed font-medium">
           {subtitle}
         </p>
       </div>
    </div>
  </motion.div>
);

const HowIThink: FC = () => {
  return (
    <section className="py-32 px-6 bg-neo-bg relative border-b-4 border-neo-black">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 flex flex-col items-start gap-6">
          <motion.div 
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 2 }}
            className="bg-neo-yellow border-4 border-neo-black px-8 py-4 shadow-neo inline-block"
          >
             <h2 className="font-display text-5xl md:text-6xl font-bold">
               BACKEND OF <br className="md:hidden"/>MY BRAIN
             </h2>
          </motion.div>
          <p className="font-mono text-xl max-w-2xl border-l-4 border-neo-pink pl-4 ml-2">
             I don't just write code; I engineer systems. <br/>
             My process balances structural logic with creative experimentation.
          </p>
        </div>

        {/* BENTO GRID LAYOUT - Increased height to 500px for better graphic fit */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[450px]">
          
          {/* Slot 1: Rapid Iteration (Large) */}
          <div className="md:col-span-8">
             <FeatureCard 
              title="Rapid Iteration" 
              subtitle="Fail fast, learn faster. Whether it's a hackathon or a production deploy."
              graphic={<SpeedLoop />}
              color="bg-neo-green"
              icon={RefreshCw}
              className="h-full"
            />
          </div>

          {/* Slot 2: Technical Leadership (Tall) */}
          <div className="md:col-span-4 md:row-span-2">
            <FeatureCard 
              title="Technical Leadership" 
              subtitle="Guiding teams through chaos. Transforming individual potential into synchronized execution."
              graphic={<TeamSync />}
              color="bg-neo-cyan"
              icon={Users}
              className="h-full"
            />
          </div>

          {/* Slot 3: The Fuel (Medium) */}
          <div className="md:col-span-3">
             <FeatureCard 
              title="The Fuel" 
              subtitle="Powered by Boba, Iced Coffee, and Matcha."
              graphic={<FuelCycler />}
              color="bg-neo-pink"
              icon={Coffee}
              className="h-full"
            />
          </div>

          {/* Slot 4: Growth Protocol (Medium) */}
          <div className="md:col-span-5">
             <FeatureCard 
              title="Growth Protocol" 
              subtitle="Water for plant growth, LeetCode for brain growth. Consistent practice is the secret to scaling both."
              graphic={<GrowthMetaphor />}
              color="bg-neo-orange"
              icon={TrendingUp}
              className="h-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowIThink;