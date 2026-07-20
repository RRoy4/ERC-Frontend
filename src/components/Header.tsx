import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HeaderLogo from '../assets/header.png';
import HeaderVideo from '../assets/Animated_logo.mp4'; 
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Playback controller: Reset and play when hovered
  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch((e) => console.log("Playback deferred:", e));
    }
  }, [isHovered]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleSorClick = () => { setIsMenuOpen(false); navigate('/sor'); };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'events', path: '/events' },
    { label: 'team', path: '/team' },
    { label: 'legacy', path: '/legacy' },
    { label: 'resources', path: '/resources' },
    { label: 'contact', path: '/contact' },
    { label: 'Certificates', path: '/certificates' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isHovered
            ? 'bg-black/70 backdrop-blur-md shadow-lg border-b border-white/10' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo / Video Swap Container - Locked to h-16 base */}
          <Link 
            to="/" 
            className="flex items-center justify-center relative w-auto h-16"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsMenuOpen(false)}
          >
            {/* STATIC LOGO: h-16 (64px) */}
            <img 
              src={HeaderLogo} 
              alt="Header Logo" 
              className={`w-auto h-20 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`} 
            />
            
            {/* ANIMATED VIDEO: h-20 (80px) - Just enough to compensate for video margins */}
            <video
              ref={videoRef}
              src={HeaderVideo}
              muted
              playsInline
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-auto h-[62px] max-w-none object-contain transition-opacity duration-300 mix-blend-screen contrast-150 brightness-110 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(({ label, path }) => (
              <Link
                key={label}
                to={path}
                className="text-gray-300 hover:text-orange-500 transition-colors capitalize font-heading"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <button onClick={handleSorClick} className="px-4 py-2 bg-blue-600 hover:bg-orange-700 rounded-md transition-colors font-heading text-white">SOR</button>
            <Link to="/xlr8" className="px-4 py-2 bg-blue-600 hover:bg-orange-700 rounded-md transition-colors font-heading text-white">XLR8</Link>
          </nav>

          <button className="md:hidden text-gray-300" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;