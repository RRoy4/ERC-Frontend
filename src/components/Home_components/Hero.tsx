import React, { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import CenterLogo from '../../assets/centerlogo.png';
import { useNavigate } from 'react-router-dom';
import PcbBackground from '../../assets/pcb.svg';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(56, 189, 248, 0.15), transparent 40%)`,
      }}
    >
      {/* PCB Background masked to cursor circle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${PcbBackground})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          maskImage: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, black 10%, transparent 25%)`,
          WebkitMaskImage: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, black 10%, transparent 25%)`,
          opacity: 0.1,
        }}
      />

      <div className="container mx-auto px-4 z-10 font-body">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center mb-4 px-3 py-1 bg-blue-900/30 rounded-full border border-blue-500/30">
            <Zap size={16} className="text-blue-400 mr-2" />
            <span className="text-sm text-blue-400">
              Building the future, one circuit at a time, since 2017.
            </span>
          </div>

          <img src={CenterLogo} alt="Footer Logo" className="block mx-auto w-auto h-44" />
          <br />

          <p className="text-xl text-gray-300 mb-8">
            Join our community of innovators and problem-solvers as we explore the
            exciting world of electronics and robotics through workshops and competitions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://linktr.ee/elecrobocommunity"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all hover:shadow-lg hover:shadow-blue-500/20 text-lg font-medium font-heading"
            >
              Join Our Club
            </a>
            <button
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-all hover:border-blue-500/50 text-lg font-medium font-heading"
              onClick={() => navigate('/events')}
            >
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
