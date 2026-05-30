import React, { Suspense, lazy } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

// Cloudinary Optimized Gallery (A → T)
const galleryImages = [
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/a.jpeg',
    alt: 'ERC Event A',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/b.jpeg',
    alt: 'ERC Event B',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/c.jpeg',
    alt: 'ERC Event C',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/d.jpeg',
    alt: 'ERC Event D',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/e.jpeg',
    alt: 'ERC Event E',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/f.jpeg',
    alt: 'ERC Event F',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/g.jpeg',
    alt: 'ERC Event G',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/h.jpeg',
    alt: 'ERC Event H',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/i.jpeg',
    alt: 'ERC Event I',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/j.jpeg',
    alt: 'ERC Event J',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/k.jpeg',
    alt: 'ERC Event K',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/l.jpeg',
    alt: 'ERC Event L',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/m.jpeg',
    alt: 'ERC Event M',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/n.jpeg',
    alt: 'ERC Event N',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/o.jpeg',
    alt: 'ERC Event O',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/p.jpeg',
    alt: 'ERC Event P',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/q.jpeg',
    alt: 'ERC Event Q',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/r.jpeg',
    alt: 'ERC Event R',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/s.jpeg',
    alt: 'ERC Event S',
  },
  {
    url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/t.jpeg',
    alt: 'ERC Event T',
  },
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
            The Electronics & Robotics Club, IIT Bombay is a vibrant community of passionate students united by a love for circuits, robotics, and innovation. Open to all skill levels, the club hosts competitions, workshops, and discussions throughout the year to promote hands-on learning and creative problem-solving.
          </p>
        </div>

        {/* Vision Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-orange-600/20 p-8 rounded-xl border border-blue-500/20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl font-bold mb-4 font-heading">Our Vision</h2>
              <p className="text-gray-300 mb-4 text-lg">
                Our club envisions being the cornerstone of the Electronics and Robotics community — a space where curiosity meets creativity.
              </p>
              <p className="text-gray-300 text-lg">
                We aim to empower students to build impactful solutions through hands-on innovation and collaboration.
              </p>
            </div>

            <div className="w-64 h-64 rounded-full bg-gray-900 overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 animate-spin-slow border border-yellow-400/30 rounded-full" />
              <Suspense fallback={null}>
                <Spline
                  scene="https://prod.spline.design/uP8FxAJpRdIs-ei6/scene.splinecode"
                  className="w-full h-full relative z-10"
                />
              </Suspense>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <div className="mt-24">
          <h3 className="text-3xl font-heading text-center text-gray-100 mb-4">
            HIGHLIGHTS GALLERY
          </h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

          <div className="relative overflow-hidden bg-white/10 backdrop-blur-lg shadow-lg p-6">
            <div className="flex gap-8 animate-scroll-x hover:paused-scroll-x whitespace-nowrap w-max">
              {[...galleryImages, ...galleryImages].map((asset, index) => (
                <div
                  key={index}
                  className="flex-none w-104 h-80 rounded-xl overflow-hidden shadow-xl border border-gray-700"
                >
                  <img
                    src={asset.url}
                    alt={asset.alt || `Highlight ${index}`}
                    loading="lazy"
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