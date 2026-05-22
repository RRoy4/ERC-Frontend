import React, { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';
import CenterLogo from '../assets/newcenterlogo.png';
import TimelineSection from './TimelineSection'; // adjust the path as needed
import bgImage from '../assets/bg.jpeg'; // adjust relative path if needed
import ProblemStatementSection from './ProblemStatement';
import ResultsSection from './ResultsSection'; // adjust the path

const XLR8 = () => {
  const heroRef = useRef<HTMLDivElement>(null);


  
  return (
    <>
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
  {/* Optional overlay */}
   <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(rgb(0, 0, 0), rgb(15, 23, 42))',
          opacity: 0.75, // adjust transparency if needed
        }}
      />

     

      <div className="container mx-auto px-4 z-10 font-body">
        <div className="max-w-2xl mx-auto text-center">
          

          <img src={CenterLogo} alt="Footer Logo" className="block mx-auto w-auto h-auto" />
          <br />

          <p className="text-xl text-gray-300 mb-8">
            Gear up for our club’s flagship event, recognized as the institute’s biggest technical event, bringing together students to compete, learn, and excel.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => {
                  const resultsSection = document.getElementById('results');
                  if (resultsSection) {
                    resultsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3 bg-orange-600 hover:bg-orange-700 rounded-md transition-all hover:shadow-lg hover:shadow-blue-500/20 text-lg font-medium font-heading"
              >
                See Results!
              </button>
             <a
              href="https://erc-xlr8.notion.site/xlr8-home-25"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all hover:shadow-lg hover:shadow-blue-500/20 text-lg font-medium font-heading"
            >
              XLR8 Info
            </a>
          </div>
        </div>
      </div>
      
    </section>
    
{/*   
    <section className="px-4 py-12 bg-[#0e1628] text-white text-center">
    <h2 className="text-3xl font-bold text-center mb-8 tracking-wide relative inline-block after:block after:w-16 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2">
        XLR8 2024 After Movie
    </h2>

    <div className="mx-auto w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg border-4 border-orange-400 relative group">
    
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-orange-500/10 pointer-events-none group-hover:opacity-100 transition-opacity duration-500"></div>

    
        <div className="aspect-video">
        <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/KiHMioOa9lY"
            title="XLR8 2024 After Movie"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen>
        </iframe>
        </div>
    </div>
    </section> */}

    <section className="py-12 bg-[#0B1120] text-white">
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-heading mb-6 border-b-4 border-blue-600 inline-block">XLR8 2024 After Movie</h2>

        
        <div className="relative">
        
        <div className="absolute inset-0 rounded-3xl blur-2xl opacity-70 z-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

        
        <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-lg">
            <div className="rounded-2xl bg-[#0B1120] p-1">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
                <iframe 
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/sZyHNQ7Sq2w"
                title="XLR8 Aftermovie"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    <TimelineSection />
    <ProblemStatementSection />
    <section id="results" className="py-16 bg-[#0B1120] text-white">
    {<ResultsSection />}
    </section>
    </>
  );
};

export default XLR8;
