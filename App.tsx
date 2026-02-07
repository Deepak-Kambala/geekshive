
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValue } from 'framer-motion';
import { 
  Menu, X, Zap, Github, Twitter, Linkedin, Sun, Moon
} from 'lucide-react';

import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Milestones } from './sections/Milestones';
import { Mentorship } from './sections/Mentorship';
import { Family } from './sections/Family';
import { Founder } from './sections/Founder';
import { CTA } from './sections/CTA';

const CursorDot = ({ index, mainX, mainY, isLight }: { index: number, mainX: any, mainY: any, isLight: boolean }) => {
  const x = useSpring(mainX, { stiffness: 150 - index * 20, damping: 25 + index * 2 });
  const y = useSpring(mainY, { stiffness: 150 - index * 20, damping: 25 + index * 2 });
  
  return (
    <motion.div
      className={`fixed top-0 left-0 pointer-events-none z-[105] rounded-full ${isLight ? 'bg-emerald-500/40' : 'bg-emerald-500/20'}`}
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
        width: 12 - index * 2,
        height: 12 - index * 2,
        opacity: 0.6 - index * 0.1,
      }}
    />
  );
};

const CustomCursor = ({ isLight }: { isLight: boolean }) => {
  const mainX = useMotionValue(0);
  const mainY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mainX.set(e.clientX);
      mainY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const dots = [0, 1, 2, 3, 4, 5];

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 w-14 h-14 rounded-full pointer-events-none z-[110] border ${isLight ? 'border-emerald-600/40' : 'border-emerald-500/40'} flex items-center justify-center mix-blend-difference`}
        style={{
          x: mainX,
          y: mainY,
          translateX: '-50%',
          translateY: '-50%',
          backdropFilter: 'blur(4px) saturate(250%)',
        }}
      >
        <div className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-emerald-600' : 'bg-emerald-500'}`} />
      </motion.div>
      {dots.map((i) => (
        <CursorDot key={i} index={i} mainX={mainX} mainY={mainY} isLight={isLight} />
      ))}
    </>
  );
};

const BackgroundDecor = ({ isLight }: { isLight: boolean }) => (
  <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: isLight ? [0.05, 0.1, 0.05] : [0.15, 0.25, 0.15],
        rotate: [0, 45, 0]
      }}
      transition={{ duration: 25, repeat: Infinity }}
      className={`absolute top-[-10%] left-[-10%] w-[60%] h-[60%] blur-[180px] rounded-full ${isLight ? 'bg-emerald-200/20' : 'bg-emerald-600/10'}`} 
    />
    <motion.div 
      animate={{ 
        scale: [1.2, 1, 1.2],
        opacity: isLight ? [0.03, 0.07, 0.03] : [0.1, 0.2, 0.1],
        rotate: [0, -30, 0]
      }}
      transition={{ duration: 30, repeat: Infinity }}
      className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full ${isLight ? 'bg-blue-200/20' : 'bg-blue-600/5'}`} 
    />
  </div>
);

export default function App() {
  const [isLight, setIsLight] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLight]);

  const toggleTheme = () => setIsLight(!isLight);

  return (
    <main className={`relative min-h-screen transition-colors duration-500 ${isLight ? 'bg-[#fcfcfc] text-[#050505]' : 'bg-[#050505] text-white'} selection:bg-emerald-500/30`}>
      <CustomCursor isLight={isLight} />
      <BackgroundDecor isLight={isLight} />
      
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-6">
        <div className="glass-effect rounded-2xl px-6 py-3 flex items-center justify-between border-white/5 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <Zap className="text-emerald-500 fill-emerald-500 w-5 h-5 group-hover:scale-125 transition-transform" />
            <span className={`text-[10px] font-black uppercase tracking-[0.4em] ${isLight ? 'text-black' : 'text-white'}`}>Geeks Hive</span>
          </div>
          
          <div className="hidden md:flex gap-8">
            {['Journey', 'Community', 'Family'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`text-[9px] font-black uppercase tracking-widest ${isLight ? 'text-gray-500 hover:text-emerald-600' : 'text-gray-500 hover:text-emerald-400'} transition-colors`}>
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all duration-300 ${isLight ? 'bg-black/5 hover:bg-black/10 text-black' : 'bg-white/5 hover:bg-white/10 text-white'}`}
          >
            {isLight ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </nav>

      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-emerald-500/50 origin-left z-[60]" style={{ scaleX }} />

      <div className="space-y-40 pb-40">
        <Hero isLight={isLight} />
        <section id="journey"><Journey isLight={isLight} /></section>
        <Milestones isLight={isLight} />
        <section id="community"><Mentorship isLight={isLight} /></section>
        <section id="family"><Family isLight={isLight} /></section>
        <Founder isLight={isLight} />
        <CTA isLight={isLight} />
      </div>

      <footer className={`py-20 border-t ${isLight ? 'border-black/5' : 'border-white/5'} text-center space-y-8`}>
         <div className="flex justify-center gap-6">
            <Github size={18} className={`${isLight ? 'text-gray-400 hover:text-black' : 'text-gray-600 hover:text-white'} cursor-pointer transition-colors`} />
            <Twitter size={18} className={`${isLight ? 'text-gray-400 hover:text-emerald-600' : 'text-gray-600 hover:text-white'} cursor-pointer transition-colors`} />
            <Linkedin size={18} className={`${isLight ? 'text-gray-400 hover:text-emerald-600' : 'text-gray-600 hover:text-white'} cursor-pointer transition-colors`} />
         </div>
         <p className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-gray-700'}`}>© 2024 GEEKS HIVE • FOR STUDENTS BY STUDENTS</p>
      </footer>
    </main>
  );
}
