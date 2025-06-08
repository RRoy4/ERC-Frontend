// components/AnimatedBackground.tsx
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 1024"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        <path
          d="M0 200 Q400 100 800 300 T1600 200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="d"
            dur="10s"
            repeatCount="indefinite"
            values="
              M0 200 Q400 100 800 300 T1600 200;
              M0 210 Q400 120 800 280 T1600 210;
              M0 200 Q400 100 800 300 T1600 200
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedBackground;
