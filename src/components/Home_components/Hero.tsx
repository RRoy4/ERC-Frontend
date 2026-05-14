import React, { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import CenterLogo from '../../assets/centerlogo.png';
import { useNavigate } from 'react-router-dom';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const checkTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouchDevice(checkTouch);
  }, []);


  // Real cursor tracking for desktop
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

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

  // Gyro-based movement for mobile
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (!isTouchDevice || !window.DeviceOrientationEvent) return;

    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (!heroRef.current) return;
      // gamma: left-right tilt [-90,90], beta: front-back tilt [-180,180]
      const gamma = event.gamma ?? 0;
      const beta = event.beta ?? 0;
      // Normalize to [0,1]
      const x = Math.min(Math.max((gamma + 90) / 180, 0), 1);
      const y = Math.min(Math.max((beta + 180) / 360, 0), 1);
      setMousePos({ x, y });
    };

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Interactive Spline Background */}
      {!isTouchDevice && (
        <div className="absolute inset-0 pointer-events-none">
          <Spline
            scene="https://prod.spline.design/eELXmmdwRuXGtrSS/scene.splinecode"
            className="w-full h-full"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at center, rgba(26, 38, 60, 0.9) 0px, rgba(26, 36, 58, 0.9) 100px, rgba(27, 38, 62, 0.7) 200px, rgba(17,24,39,0.7) 100%)"
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 z-10 font-body">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center mb-4 px-3 py-1 bg-blue-900/30 rounded-full border border-blue-500/30">
            <Zap size={16} className="text-yellow-400 mr-2" />
            <span className="text-sm text-blue-400">
              Building the future, one circuit at a time, since 2017.
            </span>
          </div>

          <img src={CenterLogo} alt="Footer Logo" className="block mx-auto w-auto h-auto" />
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
