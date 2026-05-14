import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import XLR8Page from './components/XLR8Page.tsx';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'events', path: '/events' },
  { label: 'team', path: '/team' },
  { label: 'legacy', path: '/legacy' },
  { label: 'resources', path: '/resources' },
  { label: 'contact', path: '/contact' },
  { label: 'Certificates', path: '/certificates' },
];

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 z-[999] transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } bg-white/10 backdrop-blur-xl shadow-xl border-l border-white/20`}
    >

    {/* Close Button aligned top-right just like the toggle icon */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors z-[1001]"
      >
        <X size={24} />
      </button>

      {/* Nav Links */}
      <div className="px-4 py-24 flex flex-col space-y-6">
        {navItems.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className="text-xl text-gray-300 hover:text-blue-400 transition-colors capitalize py-2 font-heading"
            onClick={onClose}
          >
            {label}
          </Link>
        ))}
        <Link
          to="/xlr8"
          className="mt-4 px-4 py-3 bg-blue-600 hover:bg-orange-700 rounded-md transition-colors text-center font-heading"
          onClick={onClose}
        >
          XLR8
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
