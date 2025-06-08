import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
const resoimg = "/team/images/"

const resourcesData = [
  {
    id: 1,
    title: 'ER101: Digital Electronics & Microcontrollers',
    description: 'Master digital logic design, microcontroller architecture, and embedded programming fundamentals.',
    image: resoimg + 'reso-er.png',
    link: '#',
  },
  {
    id: 2,
    title: 'ROS: Advanced Robotic Operating Systems',
    description: 'Comprehensive guide to Robot Operating System architecture, middleware, and industrial applications.',
    image: resoimg +'reso-ros.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Control Theory: Modern Approaches',
    description: 'State-space modeling, stability analysis, and controller design for complex dynamic systems.',
    image: resoimg +'reso-ct.png',
    link: '#',
  },
  {
    id: 4,
    title: 'Reinforcement Learning: Theory to Practice',
    description: 'Deep Q-learning, policy gradients, and multi-agent systems implementation with hardware acceleration.',
    image: resoimg +'reso-rl.png',
    link: '#',
  },
  {
    id: 5,
    title: 'Hardware Security & Reverse Engineering',
    description: 'Circuit analysis, fault injection, and side-channel attacks for embedded system security.',
    image: resoimg +'reso-hh.png',
    link: '#',
  }
];

const Resources = () => {
  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-1">
          <h2 className="text-4xl font-san-serif mb-4 font-heading">Learning Resources</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
            Access our curated collection of learning materials for electronics and robotics.
          </p>
        </div>
        
        {/* Featured Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resourcesData.map((resource) => (
            <div 
              key={resource.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a 
                  href={resource.link}
                  className="inline-flex items-center justify-between w-full px-4 py-2.5 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors group"
                >
                  <span className="font-medium">Access Resource</span>
                  <ExternalLink 
                    size={18} 
                    className="text-blue-400 group-hover:text-blue-300 transition-colors" 
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Call-to-Action */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-0.5 rounded-xl">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Need some Resources?</h3>
              <p className="text-gray-300 mb-6">
                Contact us for specialized learning materials tailored to your project needs.
              </p>
              <Link to="/contact">
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5">
                  Request Resources
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;