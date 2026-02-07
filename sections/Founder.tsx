
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Quote } from 'lucide-react';

export const Founder = ({ isLight }: { isLight: boolean }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`max-w-5xl mx-auto glass-effect rounded-[60px] overflow-hidden relative group transition-all duration-500 ${
          isLight ? 'border-black/15 bg-white shadow-2xl shadow-black/5' : 'border-white/10 bg-white/[0.01]'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5 group-hover:opacity-100 opacity-50 transition-opacity" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-16 p-12 md:p-24">
          <div className="w-56 h-56 md:w-80 md:h-80 shrink-0 relative perspective-1000">
            <motion.div 
              whileHover={{ rotateY: 15, rotateX: -5 }}
              className="relative w-full h-full transform-style-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-[40px] rotate-6 group-hover:rotate-12 transition-transform shadow-2xl opacity-20" />
              <div className={`absolute inset-0 glass-effect rounded-[40px] overflow-hidden shadow-2xl border ${isLight ? 'border-black/15' : 'border-white/10'}`}>
                <img 
                  src="https://res.cloudinary.com/dutuldpgd/image/upload/v1770479602/WhatsApp_Image_2026-02-07_at_9.22.03_PM_l5qqg9.jpg" 
                  alt="Deepak Kambala" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </motion.div>
          </div>

          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-emerald-500 font-black tracking-[0.4em] uppercase text-[10px]"
              >
                Community Architect
              </motion.div>
              <h2 className={`text-5xl md:text-7xl font-black tracking-tighter leading-none ${isLight ? 'text-black' : 'text-white'}`}>
                DEEPAK <br/> KAMBALA.
              </h2>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 text-emerald-500/20 w-16 h-16 -z-10" />
              <p className={`leading-relaxed text-xl md:text-2xl font-medium transition-colors duration-500 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                "I started Geeks Hive to bridge the gap between classroom theory and real-world engineering. Seeing 40,000 students grow together is the mission in action."
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 pt-6">
              <div className="flex gap-4">
                {[Linkedin, Twitter, Github].map((Icon, i) => (
                  <a key={i} href="#" className={`w-12 h-12 rounded-2xl glass-effect flex items-center justify-center transition-all ${
                    isLight ? 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-500/10 border-black/15' : 'text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/20 border-white/10'
                  }`}>
                    <Icon size={22} />
                  </a>
                ))}
              </div>
              <div className={`h-12 w-px hidden md:block ${isLight ? 'bg-black/10' : 'bg-white/10'}`} />
              <div className={`text-[10px] font-black uppercase tracking-widest text-center md:text-left ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
                Influencer Core @ Rendezvous 2025 <br/> Core Team @ Open Source Connect
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
