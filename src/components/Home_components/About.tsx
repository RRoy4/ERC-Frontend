import React from 'react';
import { Cpu, Zap, Users, Award, Code, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-8 w-8 text-blue-500" />,
    title: 'Hands-on Electronics',
    description: 'Learn practical electronics through interactive workshops and projects led by experienced mentors.'
  },
  {
    icon: <Code className="h-8 w-8 text-green-400" />,
    title: 'Programming Skills',
    description: 'Master coding for microcontrollers, embedded systems, and robotics applications.'
  },
  {
    icon: <Users className="h-8 w-8 text-purple-400" />,
    title: 'Collaborative Community',
    description: 'Connect with like-minded peers and build lasting relationships through team projects.'
  },
  {
    icon: <Award className="h-8 w-8 text-yellow-400" />,
    title: 'Competitions',
    description: 'Represent our club in regional and national robotics competitions and hackathons.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-orange-400" />,
    title: 'Innovation Lab',
    description: 'Access to state-of-the-art equipment and tools to bring your creative ideas to life.'
  },
  {
    icon: <Zap className="h-8 w-8 text-red-400" />,
    title: 'Expert Mentorship',
    description: 'Learn from industry professionals and academic experts in electronics and robotics.'
  }
];

const About = () => {
  return (
    <section id="about\" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">About Our Club</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Founded in 2020, our Electronics and Robotics Club provides a platform for students to explore their passion for technology through practical learning and exciting projects. We welcome members of all skill levels, from beginners to advanced.
          </p>
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
              <h2 className="text-2xl font-bold mb-4 font-heading">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                To foster innovation and technical excellence in electronics and robotics by providing students with hands-on experience, collaborative opportunities, and access to resources that enable them to develop practical skills and create impactful projects.
              </p>
              <p className="text-gray-300">
                We believe in learning by doing, sharing knowledge openly, and building a supportive community where members can explore their interests and reach their full potential.
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