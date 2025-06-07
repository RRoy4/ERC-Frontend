import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const teamImagesDir = "/team/images/";

const teamMembers = [
  // First row - 2 people (Leadership)
  {
    id: 1,
    name: 'Saravan Kumar B.',
    role: 'Institute Electronics & Robotics Secretary',
    image: teamImagesDir + 'saravan.jpeg',
    bio: 'Pre-final year undergraduate in Electrical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/LunarLogician007',
      email: '23B3922@iitb.ac.in',
      instagram: 'https://instagram.com/b_saravan_kumar'
    }
  },
  {
    id: 2,
    name: 'Srivathsa Thotakura',
    role: 'Electronics and Robotics Club Manager',
    image: teamImagesDir + 'srivathsa.jpg',
    bio: 'Pre-final year undergraduate in Electrical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/semicolonmissin',
      email: 'srivathsa.thotakura@iitb.ac.in',
      instagram: 'https://instagram.com/voidsrivathsa'
    }
  },
  // Second row - 5 people (Core Team)
  {
    id: 3,
    name: 'Aditya Patel',
    role: 'Convenor',
    image: teamImagesDir + 'aditya.jpg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'maria.rodriguez@example.edu',
      instagram: 'https://instagram.com/mariarodriguez'
    }
  },
  {
    id: 4,
    name: 'Aswath Sahoo',
    role: 'Convenor',
    image: teamImagesDir + 'aswath.jpeg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'james.wilson@example.edu',
      instagram: 'https://instagram.com/jameswilson'
    }
  },
  {
    id: 5,
    name: 'Daksh Makwana',
    role: 'Convenor',
    image: teamImagesDir + 'daksh.jpg',
    bio: 'Sophomore undergraduate in Metallurgical Engineering and Material Sciences',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'emily.zhang@example.edu',
      instagram: 'https://instagram.com/emilyzhang'
    }
  },
  {
    id: 6,
    name: 'Dhruv Singla',
    role: 'Convenor',
    image: teamImagesDir + 'dhruv.jpeg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'rachel.adams@example.edu',
      instagram: 'https://instagram.com/racheladams'
    }
  },
  {
    id: 7,
    name: 'Esha Yindukuri',
    role: 'Convenor',
    image: teamImagesDir + 'esha.jpg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'david.kumar@example.edu',
      instagram: 'https://instagram.com/davidkumar'
    }
  },
  {
    id: 8,
    name: 'Kunal Gandvane',
    role: 'Convenor',
    image: teamImagesDir + 'kunal.png',
    bio: 'Sophomore undergraduate in Civil Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'lisa.thompson@example.edu',
      instagram: 'https://instagram.com/lisathompson'
    }
  },
  // Third row - 6 people (Team Members)
  {
    id: 9,
    name: 'Kunal Paroda',
    role: 'Convenor',
    image: teamImagesDir + 'paroda.jpg',
    bio: 'Sophomore undergraduate in Aerospace Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'michael.brown@example.edu',
      instagram: 'https://instagram.com/michaelbrown'
    }
  },
  {
    id: 10,
    name: 'Lakshmi Deep Chowdary',
    role: 'Postgraduate Convenor',
    image: teamImagesDir + 'lakshmi.jpeg',
    bio: 'Final Year Postgraduate in Electrical Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'sophie.lee@example.edu',
      instagram: 'https://instagram.com/sophielee'
    }
  },
  {
    id: 11,
    name: 'Radhika Agarwal',
    role: 'Convenor',
    image: teamImagesDir + 'radhika.jpg',
    bio: 'Sophomore undergraduate in Engineering Physics',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'ryan.patel@example.edu',
      instagram: 'https://instagram.com/ryanpatel'
    }
  },
  {
    id: 12,
    name: 'Sagar Venkatesh',
    role: 'Convenor',
    image: teamImagesDir + 'sagar.jpg',
    bio: 'Sophomore undergraduate in Computer Science and Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'anna.garcia@example.edu',
      instagram: 'https://instagram.com/annagarcia'
    }
  },
  {
    id: 13,
    name: 'Videep Reddy Jalapally',
    role: 'Convenor',
    image: teamImagesDir + 'videep.png',
    bio: 'Sophomore undergraduate in Computer Science and Engineering',
    social: {
      linkedin: '#',
      github: 'https://github.com/Jadeninja-23a',
      email: 'kevin.wang@example.edu',
      instagram: 'https://instagram.com/kevinwang'
    }
  }
];

const Team = () => {
  // Split team members into rows: 2, 4, 4, 3
  const leadership = teamMembers.slice(0, 2);
  const coreTeamRow1 = teamMembers.slice(2, 6);
  const coreTeamRow2 = teamMembers.slice(6, 10);
  const coreTeamRow3 = teamMembers.slice(10, 13);

  const renderTeamRow = (members, gridCols) => (
    <div className={`grid ${gridCols} gap-8 mb-8`}>
      {members.map((member) => (
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
  );

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-san-serif mb-4 font-heading">Meet the Team</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Meet the passionate individuals who lead our club, organize events, and mentor new members.
          </p>
        </div>

        {/* First Row - 2 people (Leadership) */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-200">Leadership</h2>
          {renderTeamRow(leadership, "grid-cols-1 md:grid-cols-2 justify-center max-w-2xl mx-auto")}
        </div>

        {/* Core Team Section - 2nd, 3rd, and 4th rows (4 + 4 + 3 people) */}
        <div>
          <h2 className="text-2xl font-semibold text-center mb-8 text-gray-200">Core Team</h2>
          {/* Second Row - 4 people */}
          {renderTeamRow(coreTeamRow1, "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}
          {/* Third Row - 4 people */}
          {renderTeamRow(coreTeamRow2, "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}
          {/* Fourth Row - 3 people */}
          {renderTeamRow(coreTeamRow3, "grid-cols-1 md:grid-cols-2 lg:grid-cols-3")}
        </div>
      </div>
    </section>
  );
};

export default Team;