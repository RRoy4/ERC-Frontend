import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const teamImagesDir = "/public/team/images/";

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
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    role: 'Faculty Advisor',
    image: teamImagesDir + 'test.png',
    bio: 'Associate Professor of Electrical Engineering with 15 years of industry experience in robotics and embedded systems.',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sarah.johnson@example.edu',
      instagram: 'https://instagram.com/sarahjohnson'
    }
  },
  
  
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Our Team</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Meet the passionate individuals who lead our club, organize events, and mentor new members.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-800 rounded-xl p-6 transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gray-700">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-1 font-heading">{member.name}</h3>
                <div className="text-blue-500 font-medium mb-3">{member.role}</div>
                <p className="text-gray-400 mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-400 p-2 hover:bg-gray-700 rounded-full">
                    <Github size={20} />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400 p-2 hover:bg-gray-700 rounded-full">
                    <Linkedin size={20} />
                  </a>
                  <a href={`mailto:${member.social.email}`} className="text-gray-400 hover:text-blue-400 p-2 hover:bg-gray-700 rounded-full">
                    <Mail size={20} />
                  </a>
                  <a href={member.social.instagram} className="text-gray-400 hover:text-pink-500 p-2 hover:bg-gray-700 rounded-full">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
