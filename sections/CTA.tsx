
import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import React from 'react';

export const CTA = ({ isLight }: { isLight: boolean }) => {
  return (
    <section className="container mx-auto px-6 py-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`relative p-[1px] rounded-[60px] shadow-3xl overflow-hidden group bg-gradient-to-br ${
          isLight ? 'from-emerald-500/40 via-black/10 to-blue-500/40' : 'from-emerald-500/30 via-white/10 to-blue-500/30'
        }`}
      >
        <div className={`rounded-[59px] px-10 py-32 text-center relative overflow-hidden transition-colors duration-500 ${
          isLight ? 'bg-white' : 'bg-[#050505]'
        }`}>
          {/* Immersive background texture */}
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] ${
              isLight ? 'bg-emerald-500/10' : 'bg-emerald-500/5'
            }`} />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 10 }}
              className={`w-20 h-20 rounded-3xl mx-auto flex items-center justify-center mb-8 border transition-all shadow-xl ${
                isLight ? 'bg-white border-black/10 text-emerald-600 shadow-emerald-500/5' : 'bg-white/5 border-white/10 text-emerald-500'
              }`}
            >
              <Rocket size={40} />
            </motion.div>

            <h2 className={`text-6xl md:text-9xl font-black tracking-tighter leading-none ${isLight ? 'text-black' : 'text-white'}`}>
              BECOME THE <br/>
              <span className="text-emerald-500">FUTURE.</span>
            </h2>

            <div className="space-y-8">
              <p className={`max-w-xl mx-auto text-base md:text-xl font-medium leading-relaxed ${
                isLight ? 'text-gray-600' : 'text-gray-400'
              }`}>
                Join 40,000+ students engineering the next wave of technical excellence. No barriers, just growth.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://www.linkedin.com/company/geeks-hive/', '_blank')}
  className={`px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center gap-4 transition-all ${
    isLight
      ? 'bg-black text-white hover:bg-emerald-600'
      : 'bg-white text-black hover:bg-emerald-500'
  }`}
                >
                  Join the Hive <ArrowRight size={16} />
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
    window.open('https://www.linkedin.com/company/geeks-hive/', '_blank')
  }
  className={`px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] border transition-all ${
    isLight
      ? 'border-black/15 text-black hover:bg-black/5'
      : 'border-white/10 text-white hover:bg-white/5'
  }`}
                >
                  Collaborate With Us
                </motion.button>
              </div>
            </div>

            <div className={`pt-16 border-t inline-block w-full max-w-md transition-colors ${isLight ? 'border-black/5' : 'border-white/5'}`}>
              <div className="flex justify-between items-center px-4">
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>Est. 2024</span>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>By Students For Students</span>
                <span className={`text-[9px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>Open Access</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
