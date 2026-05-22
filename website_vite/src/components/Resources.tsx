import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const resoimg = "/blogs/thumb/";

const resourcesData = [
  {
    id: 1,
    title: 'Watt is Electronics?: An Amateurs Roadmap',
    description: 'Master digital logic design, microcontroller architecture, and embedded programming fundamentals.',
    image: resoimg + 'wie.jpg',
    link: 'https://github.com/erciitb/WattIsElectronics/blob/main/README.md',
  },
  {
    id: 4,
    title: 'MCU: MicroController Universe',
    description: 'Get started with microcontrollers — the tiny computers behind modern electronics. Learn the basics of architecture, GPIO, and communication protocols.',
    image: resoimg +'mcu.webp',
    link: 'https://github.com/erciitb/MCU-MicroControllerUniverse/blob/main/README.md',
  },
  {
    id: 2,
    title: 'A beginners Guide to ROS2 Humble',
    description: 'Comprehensive guide to ROS architecture, working and applications along with Gazebo. Works for any OS.',
    image: resoimg +'reso-ros.png',
    link: 'https://github.com/erciitb/fROSty-winter-2024/blob/main/README.md',
  },

  {
    id: 5,
    title: 'Hardware Security & Reverse Engineering',
    description: 'Circuit analysis, fault injection, and side-channel attacks for embedded system security.',
    image: resoimg +'reso-hh.png',
    link: 'https://github.com/erciitb/Hardware_Hacking_Resources/blob/main/README.md',
  }
];

const workshopData = [
  {
    id: 1,
    title: 'Control Theory Bootcamp',
    description: 'Master PID, LQR and system modeling through MATLAB Simulink and build a self-balancing bot.',
    image: resoimg + 'ctb.png',
    link: 'https://github.com/erciitb/LS2025_Control_Theory/tree/main',
  },
  {
    id: 3,
    title: 'ITSP Collaborative and Prototyping tools',
    description: 'Devise and design the perfect ITSA Project by using the right tools and software when remote.',
    image: resoimg +'reso-ct.png',
    link: 'https://github.com/erciitb/ITSP_Resources/blob/main/README.md',
  },
  {
    id: 6,
    title: 'Internet Of Things Workshop',
    description: 'Hands-on worshop exploring IoT systems, edge AI, and communication technologies.',
    image: resoimg +'iot.png',
    link: 'https://github.com/Radhika-B1084/ESP32CAM-face',
  }
];

const Resources = () => {
  const renderCard = (item: any) => (
    <div
      key={item.id}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-heading mb-3">{item.title}</h3>
        <p className="text-gray-400 mb-4">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg transition-colors group bg-orange-600 hover:bg-orange-500"
        >
          <span className="font-medium text-white">
            Access Resource
          </span>
          <ExternalLink
            size={18}
            className="transition-colors text-white group-hover:text-white"
          />
        </a>
      </div>
    </div>
  );

  return (
    <section id="resources" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Tutorials Section */}
        <div id="tutorials" className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">Learning Resources</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg mb-10">
            Dive into curated tutorials and guides to strengthen your understanding in electronics and robotics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resourcesData.map(renderCard)}
          </div>
        </div>

        {/* Workshop Materials Section */}
        <div id="workshops" className="text-center mt-20">
          <h2 className="text-4xl font-heading mb-4">Workshop Materials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-10">
            Access recordings, slides, and documentation from our technical workshops.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {workshopData.map(renderCard)}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/30 p-0.5 rounded-xl">
            <div className="bg-gray-900 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Need some Resources?</h3>
              <p className="text-gray-300 mb-6">
                Contact us for specialized learning materials tailored to your project needs.
              </p>
              <Link to="/contact#cus">
                <button className="px-8 py-3 bg-blue-600 hover:bg-orange-500 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5">
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
