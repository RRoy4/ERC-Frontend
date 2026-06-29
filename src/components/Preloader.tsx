import React, { useState, useEffect } from 'react';
// Replace this with the actual path to your ERC logo
import ercLogo from '../assets/centerlogo.png'; 

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const text = "ELECTRIFY. CODE. INNOVATE.";

  useEffect(() => {
    // 1. Trigger CSS transitions exactly one frame after mounting
    const startTimer = requestAnimationFrame(() => {
      setStartAnimation(true);
    });

    // 2. Start fading out the screen after 2.8 seconds
    // (Text finishes revealing in ~1.5s, leaving over a full second to read it)
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2800);

    // 3. Completely unmount the preloader from the DOM at 3.5s
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    // Cleanup
    return () => {
      cancelAnimationFrame(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gray-950 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
        isFadingOut ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      
      {/* Logo Reveal */}
      <div className="mb-8 animate-[pulse_2s_ease-in-out_infinite]">
        <img 
          src={ercLogo} 
          alt="ERC Logo" 
          className="w-40 md:w-48 h-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]" 
        />
      </div>

      {/* Sequential Text Reveal - Pure CSS for 0 lag */}
      <div className="flex flex-wrap justify-center font-heading font-bold text-xl md:text-2xl tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">
        {text.split('').map((char, index) => (
          <span
            key={index}
            // Each letter waits 50ms longer than the previous one before animating
            style={{ transitionDelay: `${index * 50}ms` }} 
            className={`inline-block transition-all duration-300 ease-out ${
              startAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      {/* Bottom Loading Bar */}
      <div 
        className={`absolute bottom-0 left-0 h-1 bg-cyan-500 w-full origin-left transition-transform duration-[2800ms] ease-out ${
          startAnimation ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </div>
  );
};

export default Preloader;