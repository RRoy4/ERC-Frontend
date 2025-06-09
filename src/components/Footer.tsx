import React from 'react';
import { Cpu, Heart, ChevronRight } from 'lucide-react';
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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Club Info */}
          <div>
            <div className="flex items-center mb-4 font-heading">

              <img src={FooterLogo} alt="Footer Logo" className="w-auto h-12" />
            </div>
            <p className="text-gray-400 mb-6">
              Empowering students to explore the exciting world of electronics and robotics through hands-on projects, competitions, and collaborative learning.
            </p>
            <div className="flex space-x-4">
              {socialPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <span className="sr-only">{platform.name}</span>
                  <i className={`fab fa-${platform.name}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading">Resources</h3>
            <ul className="space-y-3">
              {resources.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center">
                    <ChevronRight size={16} className="mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest events, projects, and opportunities.
            </p>
            <form className="mb-4">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700"
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div> */}
        </div>

        {/* Legal Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Electronics & Robotics Club, IIT Bombay. All rights reserved.
          </p>
          { <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map(({ label, href }) => (
              <a key={label} href={href} className="text-gray-500 hover:text-blue-400 transition-colors text-sm">
                {label}
              </a>
            ))}
          </div>}
        </div>

        {/* Made with love */}
        <div className="mt-6 text-center text-gray-500 text-sm flex items-center justify-center">
          <span>Made with</span>
          <Heart size={14} className="mx-1 text-orange-600" />
          <span>by ERC Team 2025-26</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;