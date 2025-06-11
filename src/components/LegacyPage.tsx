// LegacyPage.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HexagonBackground from './HexagonBackground';
import AnimatedBackground from './AnimatedBackground';

const LegacyPage = () => {
  // Refs for animations
  const titleRef = useRef(null);
  const finalTextRef = useRef(null);
  
  // InView hooks for animations
  const titleInView = useInView(titleRef, { once: true, margin: "-20%" });
  const finalInView = useInView(finalTextRef, { once: true, margin: "-20%" });
  
  // Team data with years and image paths - ordered from 2020 to 2024
  const teams = [
    { year: 2024, image: '/team/images/2024-25.jpg' },
    { year: 2023, image: '/team/images/2023-24.jpg' },
    { year: 2022, image: '/team/images/2022-23.jpg' },
    { year: 2021, image: '/team/images/2021-22.jpg' },
    { year: 2020, image: '/team/images/2020-21.jpg' },
    { year: 2020, image: '/team/images/2019-20.jpg' },
  ];

  return (
    <div className="relative bg-transparent">
  <HexagonBackground />
  <AnimatedBackground/>
  <div className="scroll-container relative z-10">
    
      {/* Slide 1: Full-screen ERC LEGACY Popup */}
      <section className="scroll-section flex items-center justify-center relative min-h-screen">
        <motion.div
          ref={titleRef}
          initial={{ scale: 0.7, opacity: 0 }}
          animate={titleInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ 
            type: "spring", 
            damping: 15, 
            stiffness: 100,
            delay: 0.2
          }}
          className="text-center px-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              ERC
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={titleInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <h2 className="text-7xl md:text-9xl font-playfair tracking-wide mt-2">
              LEGACY
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={titleInView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
            <p className="mt-8 font-playfair text-400 text-xl">The Architects of our Odyssey</p>
          </motion.div>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-4 h-4 bg-blue-500 rounded-full mb-2"
          ></motion.div>
          <p className="text-sm text-gray-400">Swipe up to explore</p>
        </div>
      </section>

      {/* Slide 2: Team 2020 - Image left, text right */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative"
            >
              <div className="absolute -inset-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-70 blur-xl"></div>
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                <img 
                  src={teams[0].image} 
                  alt={`Team ${teams[0].year}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2024-25</h2>
              <p className="text-gray-300 text-xl max-w-md">
                Led by Ayush Prasad & Kyari Ponkiya
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 3: Team 2021 - Image right, text left */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-70 blur-xl"></div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                  <img 
                    src={teams[1].image} 
                    alt={`Team ${teams[1].year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-1 md:pr-10 md:text-right"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2023-24</h2>
              <p className="text-gray-300 text-xl max-w-md md:ml-auto">
                Led by Anuj Bangad & Kushal Agarwal
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 4: Team 2022 - Image left, text right */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative"
            >
              <div className="absolute -inset-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-70 blur-xl"></div>
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                <img 
                  src={teams[2].image} 
                  alt={`Team ${teams[2].year}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2022-23</h2>
              <p className="text-gray-300 text-xl max-w-md">
                Led by Sourabh Hanje & Tejas Amritkar
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 5: Team 2023 - Image right, text left */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-70 blur-xl"></div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                  <img 
                    src={teams[3].image} 
                    alt={`Team ${teams[3].year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-1 md:pr-10 md:text-right"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2021-22</h2>
              <p className="text-gray-300 text-xl max-w-md md:ml-auto">
                Led by Sharvaree Sinkar & Sidharth Mundhra
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 6: Team 2024 - Image left, text right */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-20%" }}
              className="relative"
            >
              <div className="absolute -inset-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-70 blur-xl"></div>
              <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                <img 
                  src={teams[4].image} 
                  alt={`Team ${teams[4].year}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2020-21</h2>
              <p className="text-gray-300 text-xl max-w-md">
                Led by Shubham Agrawal & Shubham Lohiya
              </p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Slide 7: Team 2023 - Image right, text left */}
      <section className="scroll-section flex items-center justify-center py-16 md:py-24">
        <div className="max-w-6xl w-full px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-2"
            >
              <div className="relative">
                <div className="absolute -inset-5 bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl opacity-70 blur-xl"></div>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl aspect-video">
                  <img 
                    src={teams[5].image} 
                    alt={`Team ${teams[5].year}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="md:order-1 md:pr-10 md:text-right"
            >
              <h2 className="text-5xl md:text-7xl font-playfair mb-8">Team 2019-20</h2>
              <p className="text-gray-300 text-xl max-w-md md:ml-auto">
                Led by Aniruddha Mittal &  Jian Vora
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Slide 8: Full-screen Legacy Continuation */}
      <section className="scroll-section flex items-center justify-center relative min-h-screen">
        <motion.div
          ref={finalTextRef}
          initial={{ opacity: 0, y: 50 }}
          animate={finalInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center px-4 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={finalInView ? { scale: 1 } : {}}
            transition={{ type: "spring", delay: 0.3 }}
            className="inline-block mb-12"
          >
            <div className="w-48 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </motion.div>
          <motion.h2 
            className="text-5xl md:text-7xl font-playfair mb-12 leading-tight"
            initial={{ opacity: 0 }}
            animate={finalInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            Carrying forward the passion.<br />Continuing the legacy.
          </motion.h2>
          <motion.p 
            className="text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={finalInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            From 2017 to today, our journey continues with the same dedication and spirit that started it all.
          </motion.p>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-gray-500 text-lg">ERC Legacy: striving for excellence</p>
        </div>
      </section>
    </div>
    </div>
  );
};

export default LegacyPage;