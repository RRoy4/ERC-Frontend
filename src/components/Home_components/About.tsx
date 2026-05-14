import React from 'react';
import Spline from '@splinetool/react-spline';

const galleryImages = [
  'gallery/f.jpg', 'gallery/h.jpg', 'gallery/l.jpeg', 'gallery/r.jpeg', 'gallery/g.jpg',
  'gallery/p.jpeg', 'gallery/j.jpeg', 'gallery/c.JPG', 'gallery/q.jpeg', 'gallery/k.jpeg',
  'gallery/o.jpeg', 'gallery/n.jpeg', 'gallery/a.JPG', 'gallery/i.jpeg', 'gallery/e.JPG',
  'gallery/m.jpeg', 'gallery/d.JPG', 'gallery/b.JPG', 'gallery/s.jpeg', 'gallery/t.jpeg',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/70">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl mb-4 font-heading font-bold
            bg-gradient-to-r from-yellow-300 to-orange-500 
            bg-[length:200%_200%] bg-clip-text text-transparent 
            animate-gradient-x">
            ELECTRIFY. CODE. INNOVATE.
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            The Electronics & Robotics Club, IIT Bombay is a vibrant community of passionate students united by a love for circuits, robotics, and innovation. Open to all skill levels, the club hosts competitions, workshops, and discussions throughout the year to promote hands-on learning and creative problem-solving. We also maintain a growing collection of tutorials, blogs, and a community wiki, contributed to by our members.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-orange-600/20 p-8 rounded-xl border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4 font-heading">Our Vision</h2>
              <p className="text-gray-300 mb-4 text-lg">
                Our club envisions being the cornerstone of the Electronics and Robotics community within the institute — a vibrant space where curiosity meets creativity. We strive to provide a dynamic and inclusive platform for students to explore, tinker, and innovate in these cutting-edge domains.
              </p>
              <p className="text-gray-300 text-lg">
                By fostering a culture rooted in collaboration, continuous learning, and hands-on discovery, we aim to empower enthusiasts to turn ideas into impactful solutions and grow as engineers, thinkers, and problem-solvers.
              </p>
            </div>
            <div className="w-64 h-64 rounded-full bg-gray-900 overflow-hidden shadow-lg relative">
              <div
                className="absolute inset-0 animate-spin-slow"
                style={{
                  border: '2px rgba(196, 149, 47, 0.3)',
                  borderRadius: '50%',
                }}
              />
              <Spline
                scene="https://prod.spline.design/uP8FxAJpRdIs-ei6/scene.splinecode"
                className="w-full h-full relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div className="mt-24">
          <h3 className="text-3xl font-heading text-center text-gray-100 mb-4">HIGHLIGHTS GALLERY</h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <div className="relative overflow-hidden  bg-white/10 backdrop-blur-lg shadow-lg p-6">
            <div className="flex gap-8 animate-scroll-x hover:paused-scroll-x whitespace-nowrap w-max">
              {[...galleryImages, ...galleryImages].map((filename, index) => (
                <div key={index} className="flex-none w-104 h-80 rounded-xl overflow-hidden shadow-xl border border-gray-700">
                  <img
                    src={`${filename}`}
                    alt={`Highlight ${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
