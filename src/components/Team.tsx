import React from 'react';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

const teamImagesDir = "/team/images/";

const teamMembers = [
  {
    id: 1,
    name: 'Aditya Patel',
    role: 'Electronics & Robotics Club Secretary',
    image: teamImagesDir + 'aditya.jpg',
    bio: 'Third year undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/aditya-patel-98584b327/',
      github: 'https://github.com/thee-fool',
      email: '24B3949@iitb.ac.in',
      instagram: 'https://www.instagram.com/aadi_16.1/'
    }
  },
  {
    id: 2,
    name: 'Daksh Makhwana',
    role: 'Electronics and Robotics Club Manager',
    image: teamImagesDir + 'daksh.jpg',
    bio: 'Third year undergraduate in Metallurgical Engineering And Material Sciences',
    social: {
      linkedin: 'https://www.linkedin.com/in/daksh-makwana-698253326',
      github: 'https://github.com/DAKMAK2006',
      email: 'makwanadaksh01@gmail.com',
      instagram: '#'
    }
  },
  {
    id: 3,
    name: 'Sachin Mandal',
    role: 'Convenor',
    image: teamImagesDir + 'sachin.png',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/sachin-mandal-iitb',
      github: 'https://github.com/sachinmandal3580-rgb',
      email: 'sachinmandal7639@gmail.com',
      instagram: 'https://www.instagram.com/sachin_mandal001/'
    }
  },
  {
    id: 4,
    name: 'Santhosh Senthilmurugan',
    role: 'Convenor',
    image: teamImagesDir + 'santhosh.jpg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/santhosh-s-74a203384?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/Santhosh007joker',
      email: 'santhoshsenthil800@gmail.com',
      instagram: '#'
    }
  },
  {
    id: 5,
    name: 'Ayush Goel',
    role: 'Convenor',
    image: teamImagesDir + 'ayush.jpg',
    bio: 'Sophomore undergraduate in Metallurgical Engineering and Material Sciences',
    social: {
      linkedin: 'https://www.linkedin.com/in/ayush-goel-823b7a378?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      github: 'https://github.com/AyushGoel06',
      email: 'ayushgoel0610@gmail.com',
      instagram: 'https://www.instagram.com/ayushgoel._?igsh=MW5jaGN6ZjdiN3o5Yw=='
    }
  },
  {
    id: 6,
    name: 'Diya Dholakia',
    role: 'Convenor',
    image: teamImagesDir + 'diya.jpg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/diya-dholakia-34727b388?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/diyaadholakiaa',
      email: 'diyaa.dholakiaa@gmail.com',
      instagram: 'https://www.instagram.com/diyaadholakiaa?igsh=MXAwZWJzdms1Ym83aQ=='
    }
  },
  {
    id: 7,
    name: 'Maulik Khandelwal',
    role: 'Convenor',
    image: teamImagesDir + 'maulik.jpg',
    bio: 'Sophomore undergraduate in Chemical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/maulikkhandelwal',
      github: 'https://github.com/voidmaulikkhandelwal',
      email: 'maulik.erc@gmail.com',
      instagram: 'https://www.instagram.com/maulikkhandelwal_/'
    }
  },
  {
    id: 8,
    name: 'Reyansh Agarwal',
    role: 'Convenor',
    image: teamImagesDir + 'reyansh.png',
    bio: 'Sophomore undergraduate in Civil Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/reyansh-agarwal-743a4a386',
      github: 'https://github.com/Reyansh-007',
      email: 'reyanshagarwal007@gmail.com',
      instagram: 'https://www.instagram.com/reyansh_298/'
    }
  },
  {
    id: 9,
    name: 'Ratnala Srisiva Yashasri',
    role: 'Convenor',
    image: teamImagesDir + 'yashasri.jpg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/yashasri-ratnala-0b9b85379/',
      github: 'https://github.com/tomandjerry8',
      email: 'yashasriratnala@gmail.com',
      instagram: 'https://www.instagram.com/yashas.12x/'
    }
  },
  {
    id: 10,
    name: 'Ishika Goyal',
    role: 'Convenor',
    image: teamImagesDir + 'ishika.jpg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/ishika-goyal-36922840a?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/ishikagoyal06',
      email: 'goyalishi06@gmail.com',
      instagram: 'https://www.instagram.com/ishikaa._.goyal_/'
    }
  },
  {
    id: 11,
    name: 'Raunak Roy',
    role: 'Convenor',
    image: teamImagesDir + 'raunak.jpg',
    bio: 'Sophomore undergraduate in Mechanical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/raunak-roy1',
      github: 'https://github.com/RRoy4',
      email: 'raunak.roy1@gmail.com',
      instagram: '#'
    }
  },
  {
    id: 12,
    name: 'Sarthak Goel',
    role: 'Convenor',
    image: teamImagesDir + 'sarthak.jpg',
    bio: 'Sophomore undergraduate in Electrical Engineering',
    social: {
      linkedin: 'https://www.linkedin.com/in/sarthak-goel-b6695337b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github: 'https://github.com/Saarthak43',
      email: '25b1308@iitb.ac.in',
      instagram: 'https://www.instagram.com/sarthakkkgoel?igsh=MW5ydWcxZzh6NzFtbg=='
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8 justify-center max-w-2xl mx-auto">          
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