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
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img src={HeaderLogo} alt="Header Logo" className="w-auto h-20 min-h-[24px] min-w-[24px]" />
        </Link>


        {/* Desktop Navigation */}
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
          <a
            href="https://bit.ly/erc-xlr8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-orange-700 rounded-md transition-colors font-heading"
          >
            XLR8
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

{/* Mobile Navigation */}
<div
  className={`md:hidden fixed inset-0 z-40 transition-transform duration-300 ${
    isMenuOpen ? 'translate-x-0' : 'translate-x-full'
  } bg-gradient-to-br from-gray-800 to-blue-900/90 backdrop-blur-xl`}
>
  {/* Close Button inside menu */}
  <div className="flex justify-end px-4 pt-4">
    <button onClick={toggleMenu} className="text-gray-300 hover:text-white transition-colors">
      <X size={28} />
    </button>
  </div>

  {/* Navigation Links */}
  <div className="px-4 py-10 flex flex-col space-y-6">
    {navItems.map(({ label, path }) => (
      <Link
        key={label}
        to={path}
        className="text-xl text-gray-300 hover:text-blue-400 transition-colors capitalize py-2 font-heading"
        onClick={toggleMenu}
      >
        {label}
      </Link>
    ))}
    <a
      href="https://bit.ly/erc-xlr8"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 px-4 py-3 bg-blue-600 hover:bg-orange-700 rounded-md transition-colors text-center font-heading"
      onClick={toggleMenu}
    >
      XLR8
    </a>
  </div>
</div>

    </header>
  );
};

export default Header;