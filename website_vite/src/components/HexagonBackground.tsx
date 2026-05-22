import React from 'react';

const HexagonBackground = () => {
  return (
    <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] z-0 overflow-hidden pointer-events-none">
      <div
        className="w-full h-full animate-rotate-slow bg-[url('/backgrounds/hex-tile.svg')] 
        bg-repeat bg-[length:40px_40px] opacity-10"
      />
    </div>
  );
};

export default HexagonBackground;
