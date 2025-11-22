import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ personalInfo, onExploreClick }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animated particles
    const particles = [];
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm z-10" />
      
      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 text-center text-white">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-['Space_Grotesk'] animate-fade-in">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-300 font-light tracking-wider animate-fade-in-up">
              {personalInfo.title}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up-delay">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Tech Icons */}
          <div className="flex justify-center space-x-8 py-8 animate-fade-in-up-delay-2">
            <div className="group relative">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:scale-110">
                <Smartphone className="w-8 h-8 text-blue-400" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Mobile
              </span>
            </div>
            <div className="group relative">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-purple-500/20 group-hover:scale-110">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Code
              </span>
            </div>
            <div className="group relative">
              <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
                <Zap className="w-8 h-8 text-cyan-400" />
              </div>
              <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                Innovation
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-8 animate-fade-in-up-delay-3">
            <Button 
              onClick={onExploreClick}
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group"
            >
              Explore My Work
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in 1s ease-out 0.2s both;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in 1s ease-out 0.4s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
        
        .animate-fade-in-up-delay-3 {
          animation: fade-in 1s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;