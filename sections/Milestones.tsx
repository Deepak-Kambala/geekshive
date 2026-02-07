
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Layers, Heart, Globe2 } from 'lucide-react';

const stats = [
  { label: 'Community', value: '40,000+', icon: <Users size={20} />, accent: 'text-emerald-500' },
  { label: 'Hackathons', value: '15+', icon: <Code2 size={20} />, accent: 'text-emerald-400' },
  { label: 'Partnerships', value: '50+', icon: <Layers size={20} />, accent: 'text-emerald-600' },
  { label: 'Mentorship', value: '10k+', icon: <Heart size={20} />, accent: 'text-emerald-500' },
  { label: 'Networks', value: '30+', icon: <Globe2 size={20} />, accent: 'text-emerald-400' },
];

export const Milestones = ({ isLight }: { isLight: boolean }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-20 space-y-4">
        <h2 className={`text-sm font-black tracking-[0.3em] uppercase ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`}>Impact Metrics</h2>
        <h3 className={`text-4xl md:text-5xl font-bold tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>MILESTONES</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            className="group relative"
          >
            <div className={`border p-8 rounded-[24px] h-full flex flex-col items-start gap-6 transition-all duration-500 shadow-sm ${isLight ? 'bg-white border-black/10 hover:border-emerald-500/40 hover:bg-emerald-500/[0.02]' : 'bg-white/[0.02] border-white/5 hover:bg-emerald-500/[0.03] hover:border-emerald-500/20'}`}>
              <div className={`w-10 h-10 rounded-lg ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-black border-white/10'} border flex items-center justify-center ${stat.accent} transition-transform duration-500 group-hover:scale-110 group-hover:border-emerald-500/50`}>
                {stat.icon}
              </div>

              <div className="space-y-1">
                <div className={`text-3xl font-bold tracking-tight ${isLight ? 'text-black' : 'text-white'}`}>{stat.value}</div>
                <div className={`text-[10px] font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-400' : 'text-gray-500'} group-hover:text-emerald-500 transition-colors`}>
                  {stat.label}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
