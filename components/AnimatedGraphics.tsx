'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ==========================================
// GENERAL GRAPHICS (Mind & Backgrounds)
// ==========================================

export const LogicGrid = () => {
  // Use more cells to cover ultra-wide monitors
  const cells = Array.from({ length: 100 });
  return (
    <div className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(80px,1fr))] auto-rows-[80px] md:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] md:auto-rows-[120px] gap-2 md:gap-4 p-2 md:p-4">
      {cells.map((_, i) => (
        <motion.div
          key={i}
          className="bg-neo-black rounded-sm opacity-10"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 0.98, 1],
            backgroundColor: ["#1a1a1a", "#ff90e8", "#1a1a1a"]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// ==========================================
// REFINED: HOW I THINK SPECIFIC GRAPHICS
// ==========================================

// REFINED LEADERSHIP: Figures avoid overlap + confusing question marks.
export const TeamSync = () => {
  const [phase, setPhase] = useState<'chaos' | 'lead' | 'order'>('chaos');

  useEffect(() => {
    const cycle = async () => {
      while (true) {
        setPhase('chaos');
        await new Promise(r => setTimeout(r, 3000));
        setPhase('lead');
        await new Promise(r => setTimeout(r, 2000));
        setPhase('order');
        await new Promise(r => setTimeout(r, 3000));
      }
    };
    cycle();
  }, []);

  const HumanFigure = ({ color, isLeader = false }: { color: string, isLeader?: boolean }) => (
    <g>
      <circle cx="0" cy="-14" r={isLeader ? "9" : "7"} fill={color} stroke="#1a1a1a" strokeWidth="1.5" />
      <path 
        d={isLeader 
          ? "M-12,18 L-12,0 Q-12,-6 0,-6 Q12,-6 12,0 L12,18 H-12 Z" 
          : "M-9,14 L-9,0 Q-9,-4 0,-4 Q9,-4 9,0 L9,14 H-9 Z"
        } 
        fill={color}
        stroke="#1a1a1a"
        strokeWidth="1.5"
      />
    </g>
  );

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gray-50/50">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
        <AnimatePresence>
          {phase === 'order' && (
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
            >
              <line x1="50" y1="35" x2="20" y2="75" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50" y1="35" x2="50" y2="75" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 4" />
              <line x1="50" y1="35" x2="80" y2="75" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="4 4" />
            </motion.g>
          )}
        </AnimatePresence>

        <motion.g animate={{ x: phase === 'chaos' ? 15 : 50, y: phase === 'chaos' ? 40 : 35 }} transition={{ type: "spring", damping: 15, stiffness: 100 }}>
          <HumanFigure color={phase === 'chaos' ? "#1a1a1a" : "#ffc900"} isLeader={true} />
        </motion.g>

        <motion.g animate={{ x: phase === 'chaos' ? 85 : 20, y: phase === 'chaos' ? 25 : 75, rotate: phase === 'chaos' ? -20 : 0 }} transition={{ type: "spring", damping: 15 }}>
          <HumanFigure color="#1a1a1a" />
        </motion.g>

        <motion.g animate={{ x: phase === 'chaos' ? 70 : 50, y: phase === 'chaos' ? 80 : 75, rotate: phase === 'chaos' ? 15 : 0 }} transition={{ type: "spring", damping: 15 }}>
          <HumanFigure color="#1a1a1a" />
        </motion.g>

        <motion.g animate={{ x: phase === 'chaos' ? 30 : 80, y: phase === 'chaos' ? 85 : 75, rotate: phase === 'chaos' ? -5 : 0 }} transition={{ type: "spring", damping: 15 }}>
          <HumanFigure color="#1a1a1a" />
        </motion.g>

        <AnimatePresence>
          {phase === 'chaos' && (
            <>
              <motion.text x="40" y="25" className="text-2xl font-bold fill-neo-pink" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, 10, -10] }} exit={{ opacity: 0, scale: 0 }} transition={{ repeat: Infinity, duration: 2 }}>?</motion.text>
              <motion.text x="75" y="55" className="text-lg font-bold fill-neo-orange" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, -10, 10] }} exit={{ opacity: 0, scale: 0 }} transition={{ repeat: Infinity, duration: 2.5, delay: 0.2 }}>?</motion.text>
              <motion.text x="15" y="70" className="text-xl font-bold fill-neo-cyan" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, rotate: [0, 5, -5] }} exit={{ opacity: 0, scale: 0 }} transition={{ repeat: Infinity, duration: 1.8, delay: 0.5 }}>?</motion.text>
            </>
          )}
        </AnimatePresence>
      </svg>
      <div className={`absolute bottom-2 font-mono text-[10px] font-bold px-2 py-0.5 border-2 border-neo-black transition-all ${phase === 'order' ? 'bg-neo-green text-white' : 'bg-white'}`}>
         {phase === 'chaos' ? 'SCATTERED' : phase === 'lead' ? 'TAKING INITIATIVE' : 'SYNCED EXECUTION'}
      </div>
    </div>
  );
};

// COHESIVE CACTUS GROWTH: Smooth step-by-step growth animation
export const GrowthMetaphor = () => {
    const [phase, setPhase] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setPhase(prev => (prev + 1) % 4);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-neo-bg overflow-hidden" style={{ height: '70%' }}>
            <div className="flex flex-col items-center justify-center flex-1" style={{ height: '70%' }}>
                <svg viewBox="0 0 100 120" className="w-full h-full max-w-[200px] max-h-[280px]" preserveAspectRatio="xMidYMid meet">
                    {/* Pot Shadow */}
                    <rect x="32" y="92" width="40" height="25" rx="2" fill="#1a1a1a" opacity="0.3" />
                    
                    {/* Main Pot */}
                    <rect x="30" y="90" width="40" height="25" rx="2" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2.5" />
                    
                    {/* Pot Rim */}
                    <rect x="28" y="88" width="44" height="6" rx="1" fill="#ff6b6b" stroke="#1a1a1a" strokeWidth="2.5" />

                    {/* Main Cactus Body - Smooth growth animation */}
                    <motion.rect 
                        x="42" 
                        y={phase === 0 ? 90 : phase === 1 ? 70 : phase === 2 ? 55 : 45}
                        width="16" 
                        height={phase === 0 ? 0 : phase === 1 ? 20 : phase === 2 ? 35 : 45}
                        rx="8"
                        fill="#00d1b2"
                        stroke="#1a1a1a"
                        strokeWidth="2.5"
                        transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
                    />

                    {/* Left Branch - Appears at phase 2 */}
                    {phase >= 2 && (
                        <motion.g
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.2 }}
                        >
                            {/* Joint */}
                            <rect x="36" y="62" width="10" height="10" rx="5" fill="#00d1b2" stroke="#1a1a1a" strokeWidth="2.5" />
                            {/* Branch Body */}
                            <rect x="32" y="52" width="12" height="18" rx="6" fill="#00d1b2" stroke="#1a1a1a" strokeWidth="2.5" />
                        </motion.g>
                    )}

                    {/* Right Branch - Appears at phase 3 */}
                    {phase >= 3 && (
                        <motion.g
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.3 }}
                        >
                            {/* Joint */}
                            <rect x="54" y="52" width="10" height="10" rx="5" fill="#00d1b2" stroke="#1a1a1a" strokeWidth="2.5" />
                            {/* Branch Body */}
                            <rect x="58" y="40" width="12" height="20" rx="6" fill="#00d1b2" stroke="#1a1a1a" strokeWidth="2.5" />
                        </motion.g>
                    )}

                    {/* Spine Details - Appear as plant grows */}
                    {phase >= 1 && (
                        <motion.g 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <line x1="42" y1="75" x2="38" y2="73" stroke="#1a1a1a" strokeWidth="1.5" />
                            <line x1="58" y1="75" x2="62" y2="73" stroke="#1a1a1a" strokeWidth="1.5" />
                            {phase >= 2 && (
                                <>
                                    <line x1="42" y1="65" x2="38" y2="63" stroke="#1a1a1a" strokeWidth="1.5" />
                                    <line x1="58" y1="65" x2="62" y2="63" stroke="#1a1a1a" strokeWidth="1.5" />
                                </>
                            )}
                        </motion.g>
                    )}
                </svg>
            </div>
            
            {/* Status Text - Takes remaining space in the 70% */}
            <motion.div 
                className="font-mono text-[10px] font-bold uppercase tracking-widest bg-white border-2 border-neo-black px-3 py-1.5 shadow-neo-sm mt-2"
                key={phase}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                {phase === 0 ? 'Consistent Input' : phase === 1 ? 'Early Effort' : phase === 2 ? 'Branching Knowledge' : 'Scaling Potential'}
            </motion.div>
        </div>
    );
};

// REFINED RAPID ITERATION: Two screens (Code vs UI)
export const SpeedLoop = () => {
    const [state, setState] = useState<'coding' | 'bug' | 'fixing' | 'live'>('coding');
    
    useEffect(() => {
        const sequence = async () => {
            while(true) {
                setState('coding');
                await new Promise(r => setTimeout(r, 2500));
                setState('bug');
                await new Promise(r => setTimeout(r, 1500));
                setState('fixing');
                await new Promise(r => setTimeout(r, 1800));
                setState('live');
                await new Promise(r => setTimeout(r, 3500));
            }
        }
        sequence();
    }, []);

    const codeLines = [
      { w: '70%', c: 'bg-gray-600' },
      { w: '40%', c: 'bg-neo-pink' },
      { w: '85%', c: 'bg-neo-cyan' },
      { w: '60%', c: 'bg-gray-600' }
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#f5f5f5] p-6" style={{ height: '75%', width: '100%' }}>
            <div className="flex gap-6 w-full max-w-2xl justify-center items-center" style={{ width: '90%' }}>
                <motion.div className="flex-1 bg-neo-black border-2 border-neo-black rounded shadow-neo-sm overflow-hidden" animate={{ y: state === 'bug' ? [0, -2, 2, 0] : 0 }} transition={{ repeat: state === 'bug' ? Infinity : 0, duration: 0.1 }} style={{ minWidth: '200px' }}>
                    <div className="h-6 bg-gray-800 flex items-center px-2 gap-1 border-b border-neo-black">
                        <div className="w-2 h-2 rounded-full bg-red-400" />
                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                        <div className="w-2 h-2 rounded-full bg-green-400" />
                    </div>
                    <div className="h-48 p-3 font-mono text-xs space-y-2 bg-gray-900">
                        {state === 'coding' && codeLines.map((line, i) => (
                           <motion.div key={i} className={`h-1 rounded ${line.c}`} initial={{ width: 0 }} animate={{ width: line.w }} transition={{ delay: i * 0.2 }} />
                        ))}
                        {state === 'bug' && (
                           <>
                             {codeLines.slice(0, 2).map((line, i) => <div key={i} className={`h-2 rounded ${line.c} w-[${line.w}]`} />)}
                             <motion.div className="h-2 rounded bg-red-500 w-[90%]" animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity }} />
                             <div className="text-red-500 text-xs mt-2 font-bold">! UNCAUGHT_EXCEPTION</div>
                           </>
                        )}
                        {state === 'fixing' && (
                           <div className="flex flex-col h-full justify-center items-center">
                              <motion.div className="text-neo-green font-bold text-base" animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity }}>FIXING...</motion.div>
                              <div className="w-full h-2 bg-gray-800 mt-3 overflow-hidden rounded">
                                <motion.div className="h-full bg-neo-green" initial={{ x: '-100%' }} animate={{ x: '0%' }} />
                              </div>
                           </div>
                        )}
                        {state === 'live' && <div className="space-y-2 opacity-50">{codeLines.map((line, i) => <div key={i} className={`h-2 rounded ${line.c} w-[${line.w}]`} />)}</div>}
                    </div>
                </motion.div>
                <motion.div animate={{ x: state === 'live' ? [0, 5, 0] : 0 }} className="text-neo-black font-bold text-2xl">→</motion.div>
                <motion.div className="flex-1 bg-white border-2 border-neo-black rounded shadow-neo-sm overflow-hidden" animate={{ rotate: state === 'bug' ? [0, 1, -1, 0] : 0 }} style={{ minWidth: '200px' }}>
                    <div className="h-6 bg-gray-100 border-b border-neo-black flex items-center px-2"><div className="w-16 h-2 bg-gray-300 rounded" /></div>
                    <div className="h-48 p-3 relative bg-neo-bg">
                        {state === 'coding' && <motion.div className="flex flex-col gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}><div className="w-full h-10 bg-gray-200 rounded animate-pulse" /><div className="w-3/4 h-4 bg-gray-200 rounded" /><div className="w-1/2 h-4 bg-gray-200 rounded" /></motion.div>}
                        {state === 'bug' && <div className="flex flex-col items-center justify-center h-full"><div className="text-4xl grayscale animate-pulse">😵‍💫</div><div className="mt-3 w-24 h-3 bg-red-200 rounded" /></div>}
                        {state === 'fixing' && <div className="flex flex-col items-center justify-center h-full opacity-30 blur-[0.5px]"><div className="w-full h-12 bg-gray-100 rounded" /><div className="w-full h-6 bg-gray-100 rounded mt-3" /></div>}
                        {state === 'live' && <motion.div className="flex flex-col h-full bg-white p-2 rounded border border-neo-black/5" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}><div className="h-10 bg-neo-yellow w-full mb-2 border border-neo-black/10" /><div className="flex gap-2 flex-1"><div className="w-12 bg-neo-pink h-full" /><div className="flex-1 space-y-2"><div className="h-2 bg-gray-200 w-full" /><div className="h-2 bg-gray-200 w-2/3" /><div className="h-6 bg-neo-cyan w-full mt-2" /></div></div><div className="absolute top-2 right-2"><motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-neo-green font-bold text-sm">✓</motion.div></div></motion.div>}
                    </div>
                </motion.div>
            </div>
            <div className="mt-4 font-mono text-sm font-bold uppercase tracking-wider">
               {state === 'coding' ? 'Building...' : state === 'bug' ? 'Debug required' : state === 'fixing' ? 'Applying Patch' : 'Successfully Deployed'}
            </div>
        </div>
    )
}

export const FuelCycler = () => {
    const [index, setIndex] = useState(0);
    const drinks = [
        { type: 'boba', color: 'bg-neo-orange', label: 'Boba' },
        { type: 'coffee', color: 'bg-[#6f4e37]', label: 'Iced Coffee' },
        { type: 'matcha', color: 'bg-[#b7e3cc]', label: 'Matcha' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % drinks.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const currentDrink = drinks[index];

    return (
        <div className="w-full h-full flex items-center justify-center relative bg-black/5 overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={currentDrink.type} initial={{ scale: 0.8, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: -20 }} transition={{ type: "spring", stiffness: 120, damping: 20 }} className="relative flex flex-col items-center justify-center">
                    <div className="relative border-4 border-neo-black bg-white overflow-hidden shadow-neo w-20 h-28 rounded-b-2xl border-t-0">
                        <div className="absolute -top-3 left-[-4px] right-[-4px] h-3 bg-white border-4 border-neo-black rounded-t-md" />
                        <div className={`absolute bottom-0 w-full h-[75%] ${currentDrink.color} opacity-80 transition-colors duration-500`}>
                            {currentDrink.type === 'boba' && (
                                <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1 flex-wrap px-1">
                                    {[1,2,3,4,5,6].map(i => <div key={i} className="w-3 h-3 bg-neo-black rounded-full" />)}
                                </div>
                            )}
                            {(currentDrink.type === 'coffee' || currentDrink.type === 'matcha') && (
                                <div className="absolute top-2 left-0 right-0 flex justify-center gap-1">
                                    <div className="w-6 h-6 bg-white/30 border-2 border-white/50 rotate-12" />
                                    <div className="w-5 h-5 bg-white/30 border-2 border-white/50 -rotate-6" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="absolute -top-8 w-2 h-12 bg-neo-pink border-2 border-neo-black -z-10 -rotate-6" />
                    <div className="mt-3 font-mono text-[10px] font-bold bg-white border-2 border-neo-black px-2 py-0.5 shadow-[2px_2px_0px_0px_black]">
                        {currentDrink.label}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

// ==========================================
// SPECIFIC PROJECT GRAPHICS
// ==========================================

export const CodeMatrix = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none font-mono text-xs leading-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 text-neo-black whitespace-nowrap"
          style={{ left: `${i * 5}%` }}
          initial={{ y: -100 }}
          animate={{ y: '100vh' }}
          transition={{ duration: 2 + Math.random() * 3, repeat: Infinity, ease: 'linear', delay: Math.random() * 2 }}
        >
           {Array.from({ length: 30 }).map((_, j) => (
             <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
           ))}
        </motion.div>
      ))}
    </div>
  )
}

export const NetworkGraph = () => {
  const nodes = [
    { x: 20, y: 20 }, { x: 80, y: 20 },
    { x: 50, y: 50 },
    { x: 20, y: 80 }, { x: 80, y: 80 }
  ];
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none">
       <svg className="w-full h-full">
          {nodes.map((node, i) => (
             nodes.slice(i + 1).map((other, j) => (
                <motion.line
                   key={`${i}-${j}`}
                   x1={`${node.x}%`} y1={`${node.y}%`}
                   x2={`${other.x}%`} y2={`${other.y}%`}
                   stroke="#1a1a1a"
                   strokeWidth="1"
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: [0, 1, 0] }}
                   transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
                />
             ))
          ))}
          {nodes.map((node, i) => (
             <circle cx={`${node.x}%`} cy={`${node.y}%`} r="4" fill="#1a1a1a" key={i} />
          ))}
       </svg>
    </div>
  );
};

// PROJECT 1: Trading Sim (Chaotic, Graph, Money)
export const TradingGraphic = () => (
  <div className="w-full h-full bg-neo-green/10 relative overflow-hidden flex items-center justify-center">
    {/* Scrolling Grid */}
    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
    
    {/* Main Graph Line */}
    <svg className="w-full h-64 absolute bottom-0" preserveAspectRatio="none">
      <motion.path 
        d="M0,150 L50,140 L100,160 L150,100 L200,180 L250,80 L300,120 L350,40 L400,100 L500,0"
        fill="none"
        stroke="#1a1a1a"
        strokeWidth="4"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "linear" }}
      />
      <motion.path 
        d="M0,150 L50,140 L100,160 L150,100 L200,180 L250,80 L300,120 L350,40 L400,100 L500,0 V300 H0 Z"
        fill="#00d1b2"
        opacity="0.2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ delay: 1, duration: 1 }}
      />
    </svg>

    {/* Floating Elements */}
    <motion.div 
      className="absolute top-10 right-10 bg-neo-yellow border-2 border-neo-black p-2 font-mono font-bold rounded-full shadow-neo"
      animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      $$$
    </motion.div>

    <motion.div 
      className="absolute bottom-20 left-20 bg-neo-pink border-2 border-neo-black p-2 font-mono font-bold shadow-neo"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
    >
      BUY! BUY!
    </motion.div>

    {/* Rocket */}
    <motion.div
      className="absolute text-6xl"
      initial={{ x: -100, y: 200 }}
      whileInView={{ x: 400, y: -200 }}
      transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
    >
      🚀
    </motion.div>
  </div>
);

// PROJECT 2: Phishing Sim (Hook, Email, Shield)
export const SecurityGraphic = () => (
  <div className="w-full h-full bg-neo-pink/10 relative flex items-center justify-center overflow-hidden">
     {/* Matrix Rain Effect subtle */}
     <CodeMatrix />

     {/* The Email */}
     <motion.div
       className="w-32 h-24 bg-white border-2 border-neo-black flex items-center justify-center relative z-10 shadow-neo"
       initial={{ y: 50 }}
       animate={{ y: 0 }}
     >
       <div className="w-0 h-0 border-l-[60px] border-l-transparent border-r-[60px] border-r-transparent border-t-[40px] border-t-neo-black absolute top-0" />
       <div className="w-0 h-0 border-l-[56px] border-l-transparent border-r-[56px] border-r-transparent border-t-[36px] border-t-white absolute top-0" />
       <span className="font-mono font-bold">@</span>
     </motion.div>

     {/* The Hook */}
     <motion.div
        className="absolute top-0"
        initial={{ y: -100 }}
        whileInView={{ y: 130 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
     >
       <div className="w-1 h-32 bg-neo-black mx-auto" />
       <div className="w-8 h-8 border-b-4 border-r-4 border-neo-black rounded-br-full" />
     </motion.div>

     {/* The Shield (Appears to block) */}
     <motion.div
       className="absolute z-20 text-neo-green"
       initial={{ opacity: 0, scale: 0 }}
       whileInView={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 0.5] }}
       transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
     >
       <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
         <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
       </svg>
     </motion.div>
  </div>
);

// PROJECT 3: Arctic Tales (Ice, Brain, Particles)
export const ArcticAiGraphic = () => (
  <div className="w-full h-full bg-neo-cyan/10 relative flex items-center justify-center overflow-hidden">
     {/* RAG Context Particles */}
     {Array.from({ length: 10 }).map((_, i) => (
       <motion.div
         key={i}
         className="absolute w-2 h-2 bg-neo-black rounded-full"
         initial={{ x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400, opacity: 0 }}
         whileInView={{ x: 0, y: 0, opacity: 1 }}
         transition={{ duration: 2, delay: i * 0.1, repeat: Infinity, repeatDelay: 2 }}
       />
     ))}

     {/* Central AI Brain/Crystal */}
     <motion.div 
       className="relative w-32 h-32"
       animate={{ rotate: 360 }}
       transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
     >
        <div className="absolute inset-0 border-4 border-neo-cyan rotate-45 bg-white/50 backdrop-blur-sm" />
        <div className="absolute inset-0 border-4 border-neo-black -rotate-12 mix-blend-multiply" />
     </motion.div>

     {/* Story output */}
     <motion.div
       className="absolute top-1/2 left-1/2 ml-20 -mt-16 bg-white p-2 border border-neo-black shadow-neo font-mono text-xs w-32"
       initial={{ opacity: 0, x: 0 }}
       whileInView={{ opacity: 1, x: 20 }}
       transition={{ delay: 1, duration: 0.5, repeat: Infinity, repeatDelay: 2.5 }}
     >
       Once upon a time in the frozen north...
     </motion.div>
  </div>
);

// PROJECT 4: FeedbackFlow (Cycles, Speed, Optimization)
export const WorkflowGraphic = () => (
  <div className="w-full h-full bg-neo-yellow/10 relative flex items-center justify-center overflow-hidden">
      {/* Rotating Gears */}
      <motion.div
        className="absolute left-10 top-10 text-neo-black/20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
         <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
         </svg>
      </motion.div>

      {/* Flow Chart Nodes */}
      <div className="flex items-center gap-8 relative z-10">
         {['User', 'Review', 'Success'].map((step, i) => (
           <React.Fragment key={i}>
             <motion.div
               className="w-24 h-24 bg-white border-2 border-neo-black rounded-full flex items-center justify-center font-bold font-display shadow-neo"
               initial={{ scale: 0.8, opacity: 0.5 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ delay: i * 0.3 }}
             >
               {step}
             </motion.div>
             {i < 2 && (
               <motion.div 
                 className="w-12 h-2 bg-neo-black"
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 transition={{ delay: i * 0.3 + 0.2 }}
               />
             )}
           </React.Fragment>
         ))}
      </div>
      
      {/* Speed Lines */}
      <motion.div
         className="absolute inset-0"
         initial={{ x: '-100%' }}
         whileInView={{ x: '100%' }}
         transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      >
        <div className="w-full h-px bg-neo-black/20 my-8" />
        <div className="w-full h-px bg-neo-black/20 my-12" />
        <div className="w-full h-px bg-neo-black/20 my-4" />
      </motion.div>
  </div>
);

// PROJECT 5: DocuQuery AI (Document Scanning, Search)
export const DocQAGraphic = () => (
  <div className="w-full h-full bg-neo-purple/10 relative flex items-center justify-center overflow-hidden">
    {/* Floating Docs */}
    <motion.div 
      className="absolute w-40 h-56 bg-white border-2 border-neo-black shadow-neo flex flex-col p-4 gap-2"
      initial={{ y: 20 }}
      animate={{ y: -20 }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
    >
      <div className="w-1/2 h-4 bg-neo-black/20 mb-2"></div>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="w-full h-2 bg-gray-200"></div>
      ))}
      {/* Scan Line */}
      <motion.div 
        className="absolute left-0 top-0 w-full h-1 bg-neo-purple shadow-[0_0_10px_rgba(178,141,255,0.8)]"
        animate={{ top: ["0%", "100%", "0%"] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>

    {/* Search/Answer Bubbles */}
    <motion.div 
      className="absolute right-10 top-20 bg-neo-black text-white px-4 py-2 font-mono text-xs rounded-lg shadow-neo"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.5 }}
    >
      Finding answer...
    </motion.div>
    
    <motion.div 
      className="absolute left-10 bottom-20 bg-neo-green border-2 border-neo-black px-4 py-2 font-mono text-xs font-bold shadow-neo"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 1.5 }}
    >
      Confidence: 98%
    </motion.div>
  </div>
);

// PROJECT 6: GameLink (Mobile, Connection, Sports)
export const GameLinkGraphic = () => (
  <div className="w-full h-full bg-neo-orange/10 relative flex items-center justify-center overflow-hidden">
    {/* Phone Outline */}
    <div className="w-64 h-[500px] border-4 border-neo-black rounded-3xl bg-white relative overflow-hidden shadow-neo-lg transform rotate-[-5deg]">
       {/* App Header */}
       <div className="h-12 bg-neo-orange border-b-2 border-neo-black flex items-center px-4">
          <div className="w-4 h-4 rounded-full bg-white/50"></div>
       </div>
       
       {/* Player Cards */}
       <div className="p-4 flex flex-col gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-neo-black p-3 rounded-lg flex items-center gap-3 shadow-sm"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
            >
               <div className="w-10 h-10 rounded-full bg-neo-black/10 flex items-center justify-center">⚽</div>
               <div className="flex-1 h-2 bg-gray-200 rounded"></div>
            </motion.div>
          ))}
       </div>

       {/* Floating Notification */}
       <motion.div
         className="absolute bottom-10 left-4 right-4 bg-neo-black text-white p-3 rounded-lg font-mono text-xs text-center"
         initial={{ y: 100 }}
         whileInView={{ y: 0 }}
         transition={{ delay: 1, type: "spring" }}
       >
         Match Found! 🏟️
       </motion.div>
    </div>

    {/* Background Connectivity Balls */}
    {[1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="absolute w-12 h-12 bg-neo-orange rounded-full border-2 border-neo-black flex items-center justify-center -z-10 opacity-50"
        initial={{ x: 0, y: 0 }}
        animate={{ 
          x: (Math.random() - 0.5) * 500,
          y: (Math.random() - 0.5) * 500
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
      >
        ⚽
      </motion.div>
    ))}
  </div>
);