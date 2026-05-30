import React from 'react';

// Define the structure for our timeline items to keep the code clean
interface TimelineItem {
  week: string;
  title: string;
  description: string;
  gradient: string;
  glow: string;
}

const timelineData: TimelineItem[] = [
  {
    week: 'Week 1',
    title: 'Mechatronics',
    description: 'Dive into the core building blocks of physical robotics. This phase packs in mechanical CAD design, coordinate transformations, and IK/FK math, right alongside practical control theory, dynamic actuation, and sensor integration.',
    gradient: 'from-blue-400 to-blue-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]',
  },
  {
    week: 'Week 2-4',
    title: 'ROS Simulation',
    description: 'Transition into software. Learn the Robot Operating System, visualize robot models in RViz, and simulate physics in Gazebo.',
    gradient: 'from-purple-400 to-purple-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]',
  },
  {
    week: 'Week 5-6',
    title: 'Projects',
    description: 'Apply everything learned to build and deploy a comprehensive robotics project from scratch.',
    gradient: 'from-yellow-400 to-orange-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
  },
];

const SOR: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-8 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 
            bg-gradient-to-r from-yellow-300 via-orange-400 to-blue-500 
            bg-[length:200%_200%] bg-clip-text text-transparent 
            animate-gradient-x">
            Summer of Robotics
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your roadmap to mastering the intersection of hardware and software.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 md:border-none">
          
          {/* Central Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 -translate-x-1/2 rounded-full opacity-50"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-center group
                  ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
                `}
              >
                
                {/* Timeline Dot */}
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gray-900 border-4 border-gray-700 
                  group-hover:border-white transition-colors duration-300 z-10
                  shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]">
                </div>

                {/* Content Card (Left or Right depending on index) */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  
                  <div className={`
                    p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10
                    transform transition-all duration-500 ease-out
                    group-hover:-translate-y-2 ${item.glow}
                  `}>
                    
                    {/* Week Badge */}
                    <span className={`
                      inline-block px-4 py-1 rounded-full text-sm font-bold mb-4
                      bg-gradient-to-r ${item.gradient} text-gray-950
                    `}>
                      {item.week}
                    </span>
                    
                    {/* Card Title */}
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">
                      {item.title}
                    </h3>
                    
                    {/* Card Description */}
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOR;