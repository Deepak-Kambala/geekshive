
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Activity } from 'lucide-react';

const track1 = [
  "Hii bro where can I learn C fully?",
  "Thanks for clarification! Logic is clear now.",
  "Your quizzes are very helpful for concepts.",
  "How should I plan my BTech journey?",
  "Bhai App kaise banate h? Suggest path.",
  "Deepak bro, your explanation on pointers was 10/10.",
  "Which institute are you from? Massive respect.",
];

const track2 = [
  "Me quizzes chala baguntayi (The quizzes are great!)",
  "Tq so much! Best mentor ever.",
  "Reverse a string using pointers doubt sir.",
  "Think once more, it's postfix operator!",
  "Logic puzzles are literally mind blowing.",
  "Hii bro where can I learn C fully?",
  "Thanks for clarification! Logic is clear now.",
];

const track3 = [
  "How should I plan my BTech journey?",
  "Bhai App kaise banate h? Suggest path.",
  "Can we have more sessions on Memory Safety?",
  "The Geeks Hive community is a life saver.",
  "How to get a high packaging job from BTech?",
  "Me quizzes chala baguntayi (The quizzes are great!)",
  "Tq so much! Best mentor ever.",
];

const track4 = [
  "Reverse a string using pointers doubt sir.",
  "Think once more, it's postfix operator!",
  "Logic puzzles are literally mind blowing.",
  "Deepak bro, your explanation on pointers was 10/10.",
  "Which institute are you from? Massive respect.",
  "Hii bro where can I learn C fully?",
  "Thanks for clarification! Logic is clear now.",
];

// Added isLight prop to InfiniteTrack for themed scrolling messages
const InfiniteTrack = ({ items, speed = 40, reverse = false, skew = 0, opacity = 1, scale = 1, isLight }: { 
  items: string[], 
  speed?: number, 
  reverse?: boolean, 
  skew?: number,
  opacity?: number,
  scale?: number,
  isLight: boolean
}) => (
  <div className="flex overflow-hidden py-3 select-none" style={{ opacity, transform: `scale(${scale}) skewX(${skew}deg)` }}>
    <motion.div
      initial={{ x: reverse ? "-100%" : 0 }}
      animate={{ x: reverse ? 0 : "-100%" }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="flex whitespace-nowrap gap-4 md:gap-8"
    >
      {[...items, ...items, ...items, ...items].map((text, i) => (
        <div 
          key={i} 
          className={`glass-effect px-8 md:px-12 py-5 md:py-7 rounded-[28px] border flex items-center gap-4 transition-all cursor-default group shadow-xl ${
            isLight ? 'border-black/15 bg-white/60 hover:bg-white' : 'border-white/5 hover:bg-white/[0.04]'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
             <MessageSquare size={14} className="text-emerald-500 group-hover:scale-110 transition-transform" />
          </div>
          <span className={`font-bold text-sm md:text-base tracking-tight transition-colors ${
            isLight ? 'text-gray-700 group-hover:text-black' : 'text-gray-400 group-hover:text-white'
          }`}>
            {text}
          </span>
        </div>
      ))}
    </motion.div>
  </div>
);

// Added isLight prop to Mentorship to handle theme switching
export const Mentorship = ({ isLight }: { isLight: boolean }) => {
  return (
    <section className={`py-32 relative overflow-hidden transition-colors duration-500 ${isLight ? 'bg-[#ffffff]' : 'bg-[#050505]'}`}>
      {/* Immersive Background Glows */}
      <div className={`absolute top-1/4 -left-20 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none ${isLight ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
      <div className={`absolute bottom-1/4 -right-20 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none ${isLight ? 'bg-blue-500/10' : 'bg-blue-500/5'}`} />

      <div className="container mx-auto px-6 mb-24 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-[0.4em] ${
              isLight ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700' : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400'
            }`}
          >
            <Activity size={12} className="animate-pulse" /> Community Pulse
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-6xl md:text-9xl font-black tracking-tighter leading-tight ${isLight ? 'text-black' : 'text-white'}`}
          >
            REAL <br/> <span className="text-emerald-500">INTERACTIONS</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <p className={`text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto ${isLight ? 'text-gray-700' : 'text-gray-400'}`}>
              Our community is driven by active discussions and peer-to-peer mentorship. 
              Over <span className={isLight ? 'text-emerald-600' : 'text-white'}>850+ active threads</span> spanning logic puzzles to career roadmaps.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Highly Animated 3D Scroller Tracks */}
      <div className="relative py-10 perspective-1000">
        <div className="relative z-10 space-y-4 md:space-y-6 transform-style-3d">
          
          {/* Layer 1 - Close */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            className="translate-z-[100px]"
          >
            <InfiniteTrack items={track1} speed={60} isLight={isLight} />
          </motion.div>

          {/* Layer 2 - Mid (Reverse) */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 0.8 }} 
            className="scale-95 opacity-80 translate-z-[50px]"
          >
            <InfiniteTrack items={track2} speed={45} reverse skew={-2} isLight={isLight} />
          </motion.div>

          {/* Layer 3 - Mid */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 0.9 }} 
            className="translate-z-[20px]"
          >
            <InfiniteTrack items={track3} speed={75} isLight={isLight} />
          </motion.div>

          {/* Layer 4 - Far (Reverse) */}
          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 0.6 }} 
            className="scale-90 opacity-60 translate-z-[-50px]"
          >
            <InfiniteTrack items={track4} speed={55} reverse skew={2} isLight={isLight} />
          </motion.div>

        </div>

        {/* Side Masks for Smooth Fade - Themed based on isLight */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 md:w-64 z-20 pointer-events-none bg-gradient-to-r from-current to-transparent ${isLight ? 'text-[#ffffff]' : 'text-[#050505]'}`} />
        <div className={`absolute right-0 top-0 bottom-0 w-32 md:w-64 z-20 pointer-events-none bg-gradient-to-l from-current to-transparent ${isLight ? 'text-[#ffffff]' : 'text-[#050505]'}`} />
      </div>

      {/* Dynamic Counter Footer */}
      <div className="container mx-auto px-6 mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-30">
          <div className="flex flex-col items-center gap-1">
            <span className={`text-2xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>850+</span>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-black' : 'text-white'}`}>Solved Doubts</span>
          </div>
          <div className={`hidden md:block w-px h-8 ${isLight ? 'bg-black/20' : 'bg-white/20'}`} />
          <div className="flex flex-col items-center gap-1">
            <span className={`text-2xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>10k+</span>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-black' : 'text-white'}`}>Code Snippets</span>
          </div>
          <div className={`hidden md:block w-px h-8 ${isLight ? 'bg-black/20' : 'bg-white/20'}`} />
          <div className="flex flex-col items-center gap-1">
            <span className={`text-2xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>24/7</span>
            <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-black' : 'text-white'}`}>Active Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};
