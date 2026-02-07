
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Calendar, Award, Star, Globe, TrendingUp } from 'lucide-react';

const JourneyTiltCard = ({ children, index, isLight }: { children: React.ReactNode, index: number, isLight: boolean }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]));

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`glass-effect p-8 rounded-[40px] shadow-2xl ${isLight ? 'hover:bg-black/[0.03] border-black/15 bg-white/40' : 'hover:bg-white/[0.04] border-white/5'} transition-all group relative overflow-hidden`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
        {children}
      </div>
      <div className={`absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/${isLight ? '[0.04]' : '[0.02]'} transition-colors`} />
    </motion.div>
  );
};

const events = [
  {
    date: 'July 28, 2024',
    title: 'The Inception',
    description: 'Geeks Hive was born with a mission to help students bridge the gap between academia and real-world tech.',
    icon: <Calendar className="text-emerald-500" />,
  },
  {
    date: 'Mentorship Phase',
    title: '18 Months of Guidance',
    description: 'Mentored members, addressed doubts, and simplified complex concepts like pointers, memory, and logic.',
    icon: <Globe className="text-emerald-500" />,
  },
  {
    date: 'Rendezvous 2025',
    title: 'IIT Delhi Influencer Core',
    description: 'Recognized for impact! Became part of the influencer core team for Rendezvous 2025 at IIT Delhi.',
    icon: <Star className="text-emerald-500" />,
  },
  {
    date: 'Open Source Connect',
    title: 'Core Team Expansion',
    description: 'Joined the Open Source Connect Core Team, bringing community-driven values to a larger stage.',
    icon: <Award className="text-emerald-500" />,
  },
  {
    date: 'Present Day',
    title: '40,000+ Strong',
    description: 'A thriving ecosystem of curious minds across all major platforms. The journey has just begun.',
    icon: <TrendingUp className="text-emerald-500" />,
  }
];

export const Journey = ({ isLight }: { isLight: boolean }) => {
  return (
    <section className="container mx-auto px-6 py-40">
      <div className="text-center mb-32 space-y-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className={`text-[10px] font-black uppercase tracking-[0.5em] ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`}
        >
          Evolution Timeline
        </motion.div>
        <h2 className={`text-6xl md:text-8xl font-black tracking-tighter leading-tight ${isLight ? 'text-black' : 'text-white'}`}>
          THE <span className="text-emerald-500">JOURNEY.</span>
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className={`absolute left-1/2 top-0 bottom-0 w-[1px] ${isLight ? 'bg-gradient-to-b from-emerald-300 via-emerald-100 to-transparent' : 'bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent'} transform -translate-x-1/2 hidden md:block`} />

        <div className="space-y-20 md:space-y-32">
          {events.map((event, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full perspective-1000">
                <JourneyTiltCard index={index} isLight={isLight}>
                  <div className="space-y-4">
                    <span className={`text-[10px] font-black uppercase tracking-widest block opacity-70 ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`}>
                      {event.date}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-black tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>{event.title}</h3>
                    <p className={`${isLight ? 'text-gray-600' : 'text-gray-500'} text-sm md:text-base leading-relaxed font-medium`}>
                      {event.description}
                    </p>
                  </div>
                </JourneyTiltCard>
              </div>

              <div className="relative z-10">
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className={`w-20 h-20 rounded-[28px] glass-effect flex items-center justify-center ${isLight ? 'border-emerald-500/30' : 'border-emerald-500/20'} shadow-xl ${isLight ? 'bg-white' : 'bg-black'} relative`}
                >
                  <div className={`absolute inset-0 blur-xl rounded-full ${isLight ? 'bg-emerald-500/10' : 'bg-emerald-500/10'}`} />
                  <div className="relative z-10">{event.icon}</div>
                </motion.div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
