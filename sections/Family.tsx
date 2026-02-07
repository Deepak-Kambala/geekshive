
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School } from 'lucide-react';

const institutes = [
  { name: 'IIT Delhi', category: 'IIT' },
  { name: 'IIT Kharagpur', category: 'IIT' },
  { name: 'IIT Roorkee', category: 'IIT' },
  { name: 'IIT Guwahati', category: 'IIT' },
  { name: 'IIT Mandi', category: 'IIT' },
  { name: 'IIT Kanpur', category: 'IIT' },
  { name: 'NIT Raipur', category: 'NIT' },
  { name: 'NIT Delhi', category: 'NIT' },
  { name: 'NIT Trichy', category: 'NIT' },
  { name: 'NIT Warangal', category: 'NIT' },
  { name: 'NIT Silchar', category: 'NIT' },
  { name: 'NIT Surat', category: 'NIT' },
  { name: 'NIT Srinagar', category: 'NIT' },
  { name: 'IIIT Raichur', category: 'IIIT' },
  { name: 'IIIT Vadodara', category: 'IIIT' },
  { name: 'IIIT Kota', category: 'IIIT' },
  { name: 'IIIT Nagpur', category: 'IIIT' },
  { name: 'BITS Pilani', category: 'Others' },
  { name: 'DTU', category: 'Others' },
  { name: 'SRM', category: 'Others' },
  { name: 'VIT', category: 'Others' },
  { name: 'Miranda House', category: 'Others' },
  { name: 'Christ University', category: 'Others' },
  { name: 'Shiv Nadar Univ', category: 'Others' },
  { name: 'JNTU Hyderabad', category: 'Others' },
  { name: 'Amity University', category: 'Others' },
];

export const Family = ({ isLight }: { isLight: boolean }) => {
  const [filter, setFilter] = useState<'All' | 'IIT' | 'NIT' | 'IIIT' | 'Others'>('All');

  const filtered = filter === 'All' 
    ? institutes 
    : institutes.filter(inst => inst.category === filter);

  return (
    <section className="container mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`text-[10px] font-black uppercase tracking-[0.5em] ${isLight ? 'text-emerald-600' : 'text-emerald-500'}`}
          >
            Network Hub
          </motion.div>
          <h2 className={`text-4xl md:text-7xl font-black tracking-tighter ${isLight ? 'text-black' : 'text-white'}`}>OUR FAMILY.</h2>
          <p className={`${isLight ? 'text-gray-600' : 'text-gray-400'} max-w-xl text-sm md:text-base font-medium leading-relaxed`}>
            Students from India's most prestigious institutions trust Geeks Hive for guidance, logic building, and career growth.
          </p>
        </div>
        
        <div className={`flex flex-wrap gap-2 glass-effect p-2 rounded-2xl ${isLight ? 'bg-white/80 border-black/10 shadow-sm' : 'bg-white/5 border-white/5'}`}>
          {['All', 'IIT', 'NIT', 'IIIT', 'Others'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                filter === cat 
                  ? (isLight ? 'bg-emerald-600 text-white shadow-lg' : 'bg-emerald-500 text-black shadow-lg') 
                  : (isLight ? 'text-gray-500 hover:text-black hover:bg-black/5' : 'text-gray-400 hover:text-white hover:bg-white/5')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((inst, idx) => (
            <motion.div
              key={inst.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: idx * 0.02 }}
              className={`glass-effect p-6 rounded-[32px] text-center flex flex-col items-center justify-center gap-4 group transition-all cursor-default ${
                isLight ? 'border-black/10 bg-white/40 hover:border-emerald-500/30 hover:bg-white hover:shadow-xl' : 'border-white/5 hover:border-white/20 hover:bg-white/[0.04]'
              }`}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                isLight ? 'bg-emerald-500/10 text-emerald-600 group-hover:scale-110' : 'bg-emerald-500/5 text-emerald-400 group-hover:scale-110'
              }`}>
                <School size={20} />
              </div>
              <span className={`text-xs font-black uppercase tracking-tight transition-colors ${isLight ? 'text-black' : 'text-white'}`}>
                {inst.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
