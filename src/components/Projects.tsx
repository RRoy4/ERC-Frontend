import React, { useState } from 'react';
import { Code, ExternalLink } from 'lucide-react';

// Project data
const projectsData = [
  {
    id: 1,
    title: 'Autonomous Maze Solver Robot',
    description: 'A robot that uses ultrasonic sensors and advanced algorithms to navigate and solve complex mazes autonomously.',
    image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'robotics',
    tags: ['Arduino', 'Sensors', 'Algorithms']
  },
  {
    id: 2,
    title: 'Smart Home Automation System',
    description: 'IoT-based home automation system that controls lighting, temperature, and security using a mobile app interface.',
    image: 'https://images.pexels.com/photos/1191877/pexels-photo-1191877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'iot',
    tags: ['ESP32', 'IoT', 'Mobile App']
  },
  {
    id: 3,
    title: 'Gesture-Controlled Drone',
    description: 'Custom-built drone that responds to hand gestures captured by a camera and processed using computer vision.',
    image: 'https://images.pexels.com/photos/336232/pexels-photo-336232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'robotics',
    tags: ['Computer Vision', 'Drone', 'Embedded Systems']
  },
  {
    id: 4,
    title: 'Solar-Powered Weather Station',
    description: 'Self-sustaining weather monitoring system that collects and transmits environmental data wirelessly.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'electronics',
    tags: ['Solar', 'Sensors', 'Wireless']
  },
  {
    id: 5,
    title: 'Music Visualizer LED Matrix',
    description: 'Responsive LED matrix that creates dynamic visual patterns synchronized with music using frequency analysis.',
    image: 'https://images.pexels.com/photos/1694000/pexels-photo-1694000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'electronics',
    tags: ['LEDs', 'Audio Processing', 'Art']
  },
  {
    id: 6,
    title: 'Robotic Arm with Computer Vision',
    description: 'Precision robotic arm that can identify, pick up, and sort objects based on their color and shape.',
    image: 'https://images.pexels.com/photos/4816921/pexels-photo-4816921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'robotics',
    tags: ['Computer Vision', 'Servos', 'Machine Learning']
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Our Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Explore some of our innovative projects that combine electronics, programming, and mechanical design to solve real-world problems.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['all', 'robotics', 'electronics', 'IoT'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === category 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }  font-heading`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-800 rounded-xl overflow-hidden transition-all hover:transform hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 bg-gray-900/80 text-xs rounded-full text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-500 capitalize">
                    {project.category}
                  </span>
                  <button className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    <span className="mr-1">View Details</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-md border border-gray-700 hover:border-blue-500/50 transition-all font-medium inline-flex items-center">
            <Code size={18} className="mr-2" />
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;