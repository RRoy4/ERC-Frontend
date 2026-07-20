import React, { useState, useEffect, useRef, Component } from 'react';
import Spline from '@splinetool/react-spline';
import { Bot, X, Lightbulb } from 'lucide-react';

// ─── Error Boundary ────────────────────────────────────────────────────────────
class SplineErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: Error) {
    console.warn('Spline failed to load (WebGL not supported):', error.message);
  }
  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

// ─── Gallery Images ────────────────────────────────────────────────────────────
const galleryImages = [
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/a.jpeg', alt: 'ERC Event A' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/b.jpeg', alt: 'ERC Event B' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/c.jpeg', alt: 'ERC Event C' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/d.jpeg', alt: 'ERC Event D' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/e.jpeg', alt: 'ERC Event E' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/f.jpeg', alt: 'ERC Event F' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/g.jpeg', alt: 'ERC Event G' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/h.jpeg', alt: 'ERC Event H' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/i.jpeg', alt: 'ERC Event I' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/j.jpeg', alt: 'ERC Event J' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/k.jpeg', alt: 'ERC Event K' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/l.jpeg', alt: 'ERC Event L' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/m.jpeg', alt: 'ERC Event M' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/n.jpeg', alt: 'ERC Event N' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/o.jpeg', alt: 'ERC Event O' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/p.jpeg', alt: 'ERC Event P' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/q.jpeg', alt: 'ERC Event Q' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/r.jpeg', alt: 'ERC Event R' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/s.jpeg', alt: 'ERC Event S' },
  { url: 'https://res.cloudinary.com/djbm9dagt/image/upload/f_auto,q_auto,w_1200/v1780110702/t.jpeg', alt: 'ERC Event T' },
];

// ─── Daily Robotics Facts ──────────────────────────────────────────────────────
const roboticsFacts = [
  "The word 'robot' comes from the Czech word 'robota', which literally translates to 'forced labor' or 'drudgery'.",
  "The first known design for a humanoid robot was created by Leonardo da Vinci around the year 1495.",
  "Mars is entirely inhabited by robots! As of now, several rovers and landers are the only active 'residents' on the Red Planet.",
  "The world's first industrial robot, Unimate, went to work on a General Motors assembly line in 1961.",
  "In 2017, Saudi Arabia granted citizenship to a humanoid robot named Sophia, making her the first robot to receive legal personhood.",
  "The smallest robot ever created is a 'crab' robot that is smaller than a flea. It walks using shape-memory alloys instead of motors.",
  "Roomba, the popular robot vacuum, uses a SLAM (Simultaneous Localization and Mapping) algorithm similar to the ones used in autonomous cars.",
  "The first recorded instance of a robot causing a human fatality occurred in 1979 at a Ford Motor plant.",
  "Electro, a 7-foot tall robot built by Westinghouse in 1939, could walk by voice command, speak 700 words, and even smoke cigarettes!",
  "Modern surgical robots are so precise they can successfully peel the skin off a grape and stitch it back together."
];

// ─── Floating Daily Fact Widget ──────────────────────────────────────────────
const DailyFactWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [dailyFact, setDailyFact] = useState("");

  useEffect(() => {
    // Calculate a unique index based on the current day of the year
    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 1000 / 60 / 60 / 24);
    setDailyFact(roboticsFacts[dayOfYear % roboticsFacts.length]);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!hasBeenClicked) {
      setHasBeenClicked(true); // Stop the bouncing permanently after first interaction
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* The Popup Card */}
      <div 
        className={`mb-4 w-72 md:w-80 bg-gray-900/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-5 shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}
      >
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center gap-2 text-yellow-400">
            <Lightbulb size={18} className="animate-pulse" />
            <h4 className="font-bold font-heading text-sm uppercase tracking-wider">Daily Robo-Fact</h4>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">
          {dailyFact}
        </p>
      </div>

      {/* The Floating Toggle Button */}
      <button
        onClick={handleToggle}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${isOpen ? 'bg-gray-800 border border-gray-600 text-gray-400' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] hover:-translate-y-1'}`}
      >
        <Bot size={24} className={!hasBeenClicked ? "animate-bounce" : ""} />
      </button>
    </div>
  );
};

// ─── About Component ───────────────────────────────────────────────────────────
const About = () => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  
  // Setup State and Ref for the scroll reveal
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Create the Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
          observer.disconnect(); // Stops observing once it animates in (only animates once)
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the element is visible on screen
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-900/70 relative overflow-hidden">
      
      {/* Floating Daily Fact Widget Injection */}
      <DailyFactWidget />

      <div className="container mx-auto px-4">

        {/* ── Animated Heading Section ── */}
        <div ref={headerRef} className="text-center mb-16 flex flex-col items-center">
          
          {/* Title Reveal */}
          <h1 className={`text-5xl mb-4 font-heading font-bold
            bg-gradient-to-r from-yellow-300 to-orange-500
            bg-[length:200%_200%] bg-clip-text text-transparent
            animate-gradient-x
            transition-all duration-1000 ease-out
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            ELECTRIFY. CODE. INNOVATE.
          </h1>
          
          {/* Blue Line Expand Reveal */}
          <div className={`w-24 h-1 bg-blue-500 mb-8 transition-all duration-1000 delay-300 ease-out origin-center
            ${isHeaderVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}
          ></div>
          
          {/* Paragraph Reveal */}
          <p className={`max-w-3xl mx-auto text-gray-300 text-lg transition-all duration-1000 delay-500 ease-out
            ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            The Electronics & Robotics Club, IIT Bombay is a vibrant community of passionate students united by a love for circuits, robotics, and innovation. Open to all skill levels, the club hosts competitions, workshops, and discussions throughout the year to promote hands-on learning and creative problem-solving.
          </p>
        </div>
        {/* ──────────────────────────────── */}

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

            <div className="w-64 h-64 rounded-full bg-gray-900 overflow-hidden shadow-lg relative shrink-0">
              <div className="absolute inset-0 animate-spin-slow border border-yellow-400/30 rounded-full" />
              <SplineErrorBoundary>
                {/* Spinner until Spline fires onLoad */}
                {!splineLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin" />
                  </div>
                )}
                <Spline
                  scene="https://prod.spline.design/uP8FxAJpRdIs-ei6/scene.splinecode"
                  className="w-full h-full relative z-10"
                  onLoad={() => setSplineLoaded(true)}
                />
              </SplineErrorBoundary>
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