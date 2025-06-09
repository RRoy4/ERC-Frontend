import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cpu } from 'lucide-react';
import HeaderLogo from '../assets/header.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    // { label: 'projects', path: '/projects' },
    { label: 'events', path: '/events' },
    { label: 'team', path: '/team' },
    { label: 'legacy', path: '/legacy' },
    { label: 'resources', path: '/resources' },
    { label: 'contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={HeaderLogo} alt="Footer Logo" className="w-auto h-20" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-gray-300 hover:text-blue-500 transition-colors capitalize"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://linktr.ee/elecrobocommunity"
            target="_blank" // Optional: opens in new tab
            rel="noopener noreferrer" // Security best practice with target="_blank"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-20 flex flex-col space-y-6">
          {navItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-xl text-gray-300 hover:text-blue-500 transition-colors capitalize py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/join"
            className="mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;