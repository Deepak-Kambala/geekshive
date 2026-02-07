
import React, { useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Zap } from 'lucide-react';

const ParticleCanvas = ({ isLight }: { isLight: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number; y: number; size: number; speedX: number; speedY: number;
      baseX: number; baseY: number; density: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
      }

      update() {
        let dx = mouse.current.x - this.x;
        let dy = mouse.current.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = 150;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < maxDistance) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = isLight ? 'rgba(16, 185, 129, 0.2)' : 'rgba(16, 185, 129, 0.4)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = (canvas.width * canvas.height) / 8000;
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    const handleMouse = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    resize();
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isLight]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};

export const Hero = ({ isLight }: { isLight: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]));

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="min-h-screen flex items-center justify-center pt-20 px-6 perspective-1000 overflow-hidden relative"
    >
      <ParticleCanvas isLight={isLight} />
      
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full max-w-6xl z-10"
      >
        <div className={`glass-effect p-16 md:p-32 rounded-[80px] ${isLight ? 'border-black/10 bg-white/60' : 'border-white/5 bg-white/[0.01]'} relative overflow-hidden group transition-all duration-500`}>
          <div className={`absolute -top-[50%] -left-[50%] w-full h-full ${isLight ? 'bg-emerald-500/5' : 'bg-emerald-500/5'} blur-[120px] rounded-full group-hover:opacity-100 opacity-30 transition-opacity`} />
          
          <motion.div 
            style={{ translateZ: 100 }}
            className="relative z-10 text-center space-y-12"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full ${isLight ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30 shadow-sm' : 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400'} text-[9px] font-black uppercase tracking-[0.5em]`}>
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isLight ? 'bg-emerald-500' : 'bg-emerald-400'}`}></span>
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isLight ? 'bg-emerald-600' : 'bg-emerald-500'}`}></span>
              </span>
              Neural Network Active
            </div>

            <h1 className={`text-7xl md:text-[160px] font-black tracking-tighter leading-[0.8] ${isLight ? 'text-black' : 'text-white'} transition-colors duration-500`}>
              GEEKS<br/>
              <span className="text-emerald-500">HIVE.</span>
            </h1>

            <p className={`${isLight ? 'text-gray-600' : 'text-gray-500'} max-w-lg mx-auto text-[10px] md:text-xs font-black uppercase tracking-[0.4em] leading-relaxed transition-colors duration-500`}>
              Engineering the next generation of <span className={isLight ? 'text-black' : 'text-white'}>technical leaders</span> through a community-driven ecosystem.
            </p>
          </motion.div>

          <motion.div
            style={{ translateZ: 150 }}
            className={`absolute top-10 right-10 w-20 h-20 rounded-3xl glass-effect ${isLight ? 'border-black/15 bg-white' : 'border-white/10'} hidden md:flex items-center justify-center text-emerald-500 shadow-xl rotate-12`}
          >
            <Zap size={32} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
