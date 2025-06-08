import React, { useEffect, useRef } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import CenterLogo from '../../assets/centerlogo.png';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // ✅ Initialize navigate

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
        backgroundImage:
          'radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(0, 136, 255, 0.15), transparent 40%)',
      }}
    >
      {/* Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute w-full h-full"
          style={{
            background:
              'repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(0, 136, 255, 0.5) 40px, rgba(0, 136, 255, 0.5) 41px), repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(0, 136, 255, 0.5) 40px, rgba(0, 136, 255, 0.5) 41px)',
          }}
        ></div>
      </div>

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
            Join our community of innovators, tinkerers, and problem-solvers as we explore the
            exciting world of electronics and robotics through hands-on projects and competitions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://linktr.ee/elecrobocommunity"
              target="_blank" // Optional: opens in new tab
              rel="noopener noreferrer" // Security best practice with target="_blank"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all hover:shadow-lg hover:shadow-blue-500/20 text-lg font-medium font-heading"
            >
              Join Our Club
            </a>
            <button
              className="px-8 py-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 transition-all hover:border-blue-500/50 text-lg font-medium font-heading"
              onClick={() => navigate('/events')} // ✅ Link to Events page
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
