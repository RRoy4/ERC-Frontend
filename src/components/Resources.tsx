import React, { useState } from 'react';
import { BookOpen, FileText, Video, Download, ExternalLink, ChevronRight } from 'lucide-react';

// Categories for resources
const categories = [
  { id: 'all', name: 'All Resources' },
  { id: 'tutorials', name: 'Tutorials' },
  { id: 'documentation', name: 'Documentation' },
  { id: 'videos', name: 'Video Courses' },
  { id: 'software', name: 'Software & Tools' },
];

// Resources data
const resourcesData = [
  {
    id: 1,
    title: 'Introduction to Arduino Programming',
    description: 'A comprehensive guide to getting started with Arduino for beginners.',
    type: 'tutorials',
    icon: <BookOpen className="h-5 w-5" />,
    link: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Raspberry Pi Project Ideas',
    description: 'Collection of 50+ project ideas for Raspberry Pi with difficulty ratings.',
    type: 'tutorials',
    icon: <BookOpen className="h-5 w-5" />,
    link: '#',
    featured: false
  },
  {
    id: 3,
    title: 'ESP32 Technical Documentation',
    description: 'Official documentation for ESP32 microcontroller with examples.',
    type: 'documentation',
    icon: <FileText className="h-5 w-5" />,
    link: '#',
    featured: false
  },
  {
    id: 4,
    title: 'Robot Operating System (ROS) Basics',
    description: 'Video course covering the fundamentals of ROS for robotics projects.',
    type: 'videos',
    icon: <Video className="h-5 w-5" />,
    link: '#',
    featured: true
  },
  {
    id: 5,
    title: 'KiCad PCB Design Tutorial',
    description: 'Learn how to design professional PCBs using the free KiCad software.',
    type: 'tutorials',
    icon: <BookOpen className="h-5 w-5" />,
    link: '#',
    featured: false
  },
  {
    id: 6,
    title: 'Arduino Libraries Reference',
    description: 'Documentation for common Arduino libraries used in club projects.',
    type: 'documentation',
    icon: <FileText className="h-5 w-5" />,
    link: '#',
    featured: false
  },
  {
    id: 7,
    title: 'Machine Learning for Embedded Systems',
    description: 'Video series on implementing ML algorithms on microcontrollers.',
    type: 'videos',
    icon: <Video className="h-5 w-5" />,
    link: '#',
    featured: false
  },
  {
    id: 8,
    title: 'Club Project Templates',
    description: 'Starter templates and code for various types of electronics projects.',
    type: 'software',
    icon: <Download className="h-5 w-5" />,
    link: '#',
    featured: true
  }
];

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredResources = activeCategory === 'all'
    ? resourcesData
    : resourcesData.filter(resource => resource.type === activeCategory);
    
  const featuredResources = resourcesData.filter(resource => resource.featured);

  return (
    <section id="resources\" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Learning Resources</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Access our curated collection of tutorials, documentation, and tools to enhance your skills in electronics and robotics.
          </p>
        </div>
        
        {/* Featured Resources */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 px-4">Featured Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <div 
                key={resource.id}
                className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <div className="bg-blue-500/20 p-3 rounded-lg inline-block mb-4">
                  {resource.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{resource.title}</h4>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                <a 
                  href={resource.link}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Access Resource
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 m-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Resource List */}
        <div className="bg-gray-900 rounded-xl overflow-hidden">
          <div className="divide-y divide-gray-800">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="p-6 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-start">
                  <div className="bg-gray-800 p-3 rounded-lg mr-4">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-1">{resource.title}</h4>
                    <p className="text-gray-400 mb-2">{resource.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500 capitalize">{resource.type}</span>
                      <a 
                        href={resource.link}
                        className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Resource
                        <ChevronRight size={16} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-gray-700 text-center">
          <h3 className="text-xl font-semibold mb-4">Request Learning Materials</h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Request specific tutorials, documentation, or resources to help with your project.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
            Request Resources
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resources;