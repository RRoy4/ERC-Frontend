import React from 'react';
import { Cpu, Bot ,Layers } from 'lucide-react';
import {Hardhack , Controlsys , Roboarm} from './Customicon'

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-blue-500" />,
    title: 'Embedded Systems',
    description: 'Master microcontroller programming and real-time system design to build efficient, reliable hardware-software integrated systems.'
  },
  {
    icon: <Bot className="h-8 w-8 text-green-400" />,
    title: 'ROS (Robot Operating System)',
    description: 'Build and simulate intelligent robot behaviors using the ROS framework — a powerful toolset for robot software development..'
  },
  {
    icon: <Layers className="h-8 w-8 text-purple-400" />,
    title: 'Image Processing',
    description: 'Use computer vision techniques to make robots see, understand, and interact with the world through camera-based sensing and analysis.'
  },
  {
    icon: <Hardhack className="h-8 w-8 text-yellow-400" />,
    title: 'Hardware Hacking',
    description: 'Curious how hardware gets hacked in the real world? Learn about side-channel attacks and fault injection.'
  },
  {
    icon: <Roboarm className="h-8 w-8 text-orange-400" />,
    title: 'Robotics',
    description: 'Explore robot kinematics, motion planning, and simulation using tools like MATLAB and Hello Robot to design intelligent control strategies.'
  },
  {
    icon: <Controlsys className="h-8 w-8 text-red-400" />,
    title: 'Control Systems',
    description: 'Design and analyze dynamic systems using tools like MATLAB to develop precise control for robotic and electronic applications.'
  }
];

const About = () => {
  return (
    <section id="about\" className="py-20 bg-gray-800"> 
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading 
            bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 
            bg-[length:200%_200%] bg-clip-text text-transparent 
            animate-gradient-x">
            ELECTRIFY.CODE.INNOVATE
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            The Electronics & Robotics Club, IIT Bombay is a vibrant community of passionate students united by a love for circuits, robotics, and innovation. Open to all skill levels, the club hosts competitions, workshops, and discussions throughout the year to promote hands-on learning and creative problem-solving. We also maintain a growing collection of tutorials, blogs, and a community wiki, contributed to by our members.
          </p>
          <p className="max-w-3xl mx-auto text-gray-300 mt-4 text-lg italic " >Below are the six core domains we actively explore and grow in:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-4 p-3 inline-block bg-gray-800 rounded-lg group-hover:bg-gray-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 font-heading">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-green-500/20 p-8 rounded-xl border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4 font-heading">Our Vision</h2>
              <p className="text-gray-300 mb-4">
                Our club envisions being the cornerstone of the Electronics and Robotics community within the institute — a vibrant space where curiosity meets creativity. We strive to provide a dynamic and inclusive platform for students to explore, tinker, and innovate in these cutting-edge domains. 
              </p>
              <p className="text-gray-300">
                By fostering a culture rooted in collaboration, continuous learning, and hands-on discovery, we aim to empower enthusiasts to turn ideas into impactful solutions and grow as engineers, thinkers, and problem-solvers.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 rounded-full bg-blue-900/30 flex items-center justify-center overflow-hidden">
                <div className="absolute w-full h-full animate-spin-slow" style={{ 
                  border: '2px dashed rgba(0, 136, 255, 0.3)', 
                  borderRadius: '50%' 
                }}></div>
                <Cpu size={64} className="text-blue-500 z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;