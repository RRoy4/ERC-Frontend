import React from 'react';
import { Heart, ChevronRight } from 'lucide-react';
import FooterLogo from '../assets/footer.png';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'Team', href: '/team' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
];

const resources = [
  { label: 'Learning Resources', href: '/resources#tutorials' },
  { label: 'Workshop Materials', href: '/resources#workshops' },
];

const legalLinks = [
  { label: 'Institute Technical Council', href: 'https://tech-iitb.org' },
  { label: 'Institute Website', href: 'https://www.iitb.ac.in' },
  { label: 'SAC Constitution, IIT Bombay', href: 'https://gymkhana.iitb.ac.in/SAC-Constitution-March-2018.pdf' },
  { label: 'Students Gymkhana, IIT Bombay', href: 'https://gymkhana.iitb.ac.in/' },
];

const socialPlatforms = [
  { name: 'instagram', href: 'https://instagram.com/erc.iitb' },
  { name: 'github', href: 'https://github.com/erciitb' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Club Info */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={FooterLogo}
                alt="Footer Logo"
                className="h-27 w-auto"
              />
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              Empowering students to explore the exciting world of electronics and robotics through hands-on projects, competitions, and collaborative learning.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  <span className="sr-only">{platform.name}</span>
                  <i className={`fab fa-${platform.name} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center hover:text-orange-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center hover:text-orange-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-white">Important Links</h3>
            <ul className="space-y-3">
              {legalLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom row */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center md:text-left md:flex md:items-center md:justify-between">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Electronics & Robotics Club, IIT Bombay. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 flex items-center justify-center md:justify-end">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-orange-600" />
            <span>by ERC Team 2025-26</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
