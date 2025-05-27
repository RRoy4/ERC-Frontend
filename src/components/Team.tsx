import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const teamImagesDir = "/public/team/images/";
// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu'
    }
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Club President',
    image: 'https://images.pexels.com/photos/5397723/pexels-photo-5397723.jpeg',
    bio: 'Senior Computer Engineering student specializing in AI and robotics. Has led multiple award-winning projects.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'michael.chen@example.edu'
    }
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Vice President',
    image: 'https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg',
    bio: 'Junior Electrical Engineering student with a passion for IoT and sustainable technology solutions.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'aisha.patel@example.edu'
    }
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    role: 'Workshop Coordinator',
    image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
    bio: 'Senior Mechatronics student who has organized over 25 workshops on various electronics and programming topics.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'carlos.rodriguez@example.edu'
    }
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/5324927/pexels-photo-5324927.jpeg',
    bio: 'Graduate student researching human-robot interaction with experience managing complex engineering projects.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'emma.wilson@example.edu'
    }
  },
  {
    id: 6,
    name: 'David Kim',
    role: 'Technical Lead',
    image: 'https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg',
    bio: 'Computer Science senior specializing in embedded systems programming and computer vision applications.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'david.kim@example.edu'
    }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Meet the passionate individuals who lead our club, organize events, and mentor new members.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-gray-800 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-700">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-blue-500 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.github}
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-700 rounded-full"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-700 rounded-full"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors p-2 hover:bg-gray-700 rounded-full"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Join Our Leadership Team</h3>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            We're always looking for passionate members to take on leadership roles and help guide the direction of our club. If you're interested in joining the team, please reach out to us.
          </p>
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors inline-flex items-center">
            Apply for Leadership Positions
            <ExternalLink size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;