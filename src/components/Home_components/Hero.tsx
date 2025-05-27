import React, { useEffect, useRef } from 'react';
import { ChevronDown, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(0, 136, 255, 0.15), transparent 40%)'
      }}
    >
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-full h-full" style={{ 
          background: 'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0, 136, 255, 0.5) 40px, rgba(0, 136, 255, 0.5) 41px), repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0, 136, 255, 0.5) 40px, rgba(0, 136, 255, 0.5) 41px)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 font-body">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center mb-4 px-3 py-1 bg-blue-900/30 rounded-full border border-blue-500/30">
            <Zap size={16} className="text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">Building the future, one circuit at a time</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block">Welcome to the</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-400">
              Electronics & Robotics Club
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Join our community of innovators, tinkerers, and problem-solvers as we explore the exciting world of electronics and robotics through hands-on projects and competitions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all hover:shadow-lg hover:shadow-blue-500/20 text-lg font-medium">
              Join Our Club
            </button>
            <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-all hover:border-blue-500/50 text-lg font-medium">
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400 cursor-pointer animate-bounce" onClick={scrollToAbout}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;