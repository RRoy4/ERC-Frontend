import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const teamImagesDir = "/team/images/";

const teamMembers = [
  {
    id: 1,
    name: 'Saravan Kumar B.',
    role: 'Institute Electronics & Robotics Secretary',
    image: teamImagesDir + 'saravan.jpeg',
    bio: 'Third year undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/saravan-kumar-boddeda-0351b1294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/LunarLogician007',
      email: 'boddedask@gmail.com',
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
      linkedin: 'https://linkedin.com/in/srivathsahere',
      github: 'https://github.com/semicolonmissin',
      email: 'srivathsa.thotakura@iitb.ac.in',
      instagram: 'https://instagram.com/voidsrivathsa'
    }
  },
  {
    id: 3,
    name: 'Aditya Patel',
    role: 'Convenor',
    image: teamImagesDir + 'aditya.jpg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/aditya-patel-98584b327/',
      github: 'https://github.com/kaabooom',
      email: '24B3949@iitb.ac.in',
      instagram: 'https://www.instagram.com/aadi_16.1/'
    }
  },
  {
    id: 4,
    name: 'Aswath Sahoo',
    role: 'Convenor',
    image: teamImagesDir + 'aswath.jpeg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'http://linkedin.com/in/aswath-sahoo-a7b70b235',
      github: 'https://github.com/Aswath0929',
      email: 'aswath_sahoo@yahoo.com',
      instagram: 'https://www.instagram.com/aswathsahoo?igsh=M3RncTYzN2J4bDNi&utm_source=qr'
    }
  },
  {
    id: 5,
    name: 'Daksh Makwana',
    role: 'Convenor',
    image: teamImagesDir + 'daksh.jpg',
    bio: 'Sophomore undergraduate in Metallurgical Engineering and Material Sciences',
    social: {
      linkedin: 'https://www.linkedin.com/in/daksh-makwana-698253326',
      github: 'https://github.com/DAKMAK2006',
      email: 'makwanadaksh01@gmail.com',
      instagram: '#'
    }
  },
  {
    id: 6,
    name: 'Dhruv Singla',
    role: 'Convenor',
    image: teamImagesDir + 'dhruv.jpeg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/dhruv-singla-99b8b6320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Dhuvsingla16',
      email: 'sngla.dhrv@gmail.com',
      instagram: 'https://www.instagram.com/dhruvsingla16?igsh=MTVkb3hsd3A1eXVraQ=='
    }
  },
  {
    id: 7,
    name: 'Sai Durga Esha Y.',
    role: 'Convenor',
    image: teamImagesDir + 'esha.jpg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/sai-durga-esha-yindukuri-a3616433b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/ysdesha',
      email: 'ysdesha@gmail.com',
      instagram: 'https://www.instagram.com/esha_yindukuri?igsh=MTA5YzR2OGQ1cmlpYg=='
    }
  },
  {
    id: 8,
    name: 'Kunal Gandvane',
    role: 'Convenor',
    image: teamImagesDir + 'kunal.png',
    bio: 'Sophomore undergraduate in Civil Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/kunal-gandvane-b28062346?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/webserver105',
      email: 'kunal7sr@gmail.com',
      instagram: 'https://www.instagram.com/kunal_262k?igsh=b2Rsbmk1bmIwZml3'
    }
  },
  {
    id: 9,
    name: 'Kunal Paroda',
    role: 'Convenor',
    image: teamImagesDir + 'paroda.jpg',
    bio: 'Sophomore undergraduate in Aerospace Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/kunal-paroda-126180225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'http://github.com/Aero71maverick',
      email: 'kunalparoda@gmail.com',
      instagram: 'http://instagram.com/kunalparoda'
    }
  },
  {
    id: 10,
    name: 'Lakshmi Deep Chowdary M.',
    role: 'Postgraduate Convenor',
    image: teamImagesDir + 'lakshmi.jpeg',
    bio: 'Final Year Postgraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/lakshmi-deep-maddineni/',
      github: '#',
      email: 'lakshmideepmaddineni@gmail.com',
      instagram: '#'
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
      github: 'https://github.com/Radhika-B1084',
      email: 'radhu1402@gmail.com',
      instagram: 'https://www.instagram.com/radhikaag__?igsh=MWc4MmdpYTlvYzJnYQ=='
    }
  },
  {
    id: 12,
    name: 'Sagar Venkatesh',
    role: 'Convenor',
    image: teamImagesDir + 'sagar.jpg',
    bio: 'Sophomore undergraduate in Computer Science and Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/sagar-venkatesh-a3a800318/',
      github: 'https://github.com/Sagarv812',
      email: 'sagarv812@gmail.com',
      instagram: 'https://www.instagram.com/sagarv812/'
    }
  },
  {
    id: 13,
    name: 'Videep Reddy Jalapally',
    role: 'Convenor',
    image: teamImagesDir + 'videep.png',
    bio: 'Sophomore undergraduate in Computer Science and Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/videep-reddy-jalapally-a2439334a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      github: 'https://github.com/Jadeninja-23a',
      email: 'mail4videep @gmail.com',
      instagram: 'https://www.instagram.com/videep_23a?igsh=MXpqMXFnYnM5ZHBi&utm_source=qr'
    }
  }
];

const renderTeamRow = (members, gridCols, isLeadership = false) => (
  <div className={`grid ${gridCols} gap-8 mb-8`}>
    {members.map((member) => (
      <div
        key={member.id}
        className={`rounded-xl p-6 transition-all 
          ${isLeadership
            ? "bg-gray-800 shadow-lg shadow-blue-400/30 border border-gray-700"
            : "bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
          }`}
      >
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


const Team = () => {
  const leadership = teamMembers.slice(0, 2);
  const coreTeamRow1 = teamMembers.slice(2, 6);
  const coreTeamRow2 = teamMembers.slice(6, 10);
  const coreTeamRow3 = teamMembers.slice(10, 13);

  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
         <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">Meet the Team</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Meet the individuals who lead our club, organize events, and mentor new members.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-heading text-center mb-8 text-gray-200">Leadership</h2>
          {renderTeamRow(leadership, "grid-cols-1 md:grid-cols-2 justify-center max-w-2xl mx-auto", true)}
        </div>

        <div>
          <h2 className="text-2xl font-heading text-center mb-8 text-gray-200">Core Team</h2>
          {renderTeamRow(coreTeamRow1, "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}
          {renderTeamRow(coreTeamRow2, "grid-cols-1 md:grid-cols-2 lg:grid-cols-4")}
          
          {/* Modified last row - centered 3-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-8 justify-center max-w-4xl mx-auto">
            {coreTeamRow3.map((member) => (
              <div
                key={member.id}
                className="rounded-xl p-6 transition-all bg-gray-800 hover:shadow-lg hover:shadow-blue-500/10"
              >
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
      </div>
    </section>
  );
};

export default Team;