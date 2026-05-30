import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from 'lucide-react';

import itsp from '../assets/itsp banner.png';
import sor from '../assets/sor banner.jpg';

const Events = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbwdx14INhNr5HoY491xHHaRuZjliY-FYyGofc3TrNHsGoNmqZQDpNtqKBDxxiA4p_NLfA/exec',
        {
          method: 'POST',
          body: new URLSearchParams({ email }),
        }
      );

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => {
          setSubscribed(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  return (
    <section
      id="events"
      className="py-20 bg-gray-900 relative overflow-hidden"
    >

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-heading mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-orange-400 bg-clip-text text-transparent">
            Events
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Join futuristic workshops, robotics bootcamps, and cutting-edge engineering events designed to push your technical skills to the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* SUMMER OF ROBOTICS CARD */}
          <div className="relative col-span-1 lg:col-span-2 rounded-3xl overflow-hidden border border-cyan-400/20 bg-white/[0.06] backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.12)] hover:shadow-[0_0_55px_rgba(0,255,255,0.18)] transition-all duration-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8 relative z-10">
                <div className="relative inline-flex items-center mb-4 px-3 py-1 bg-cyan-500/10 border border-cyan-400/20 rounded-full backdrop-blur-md overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl"></div>
                  <div className="relative z-10 flex items-center">
                    <Calendar size={16} className="text-cyan-400 mr-2" />
                    <span className="text-sm text-cyan-300">Flagship Event</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 font-heading text-white">
                  Summer of Robotics
                </h3>

                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar
                    size={16}
                    className="mr-2 text-cyan-400"
                  />

                  <span>6 Weeks Bootcamp</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Clock
                    size={16}
                    className="mr-2 text-cyan-400"
                  />

                  <span>Register by 4th June</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin size={16} className="mr-2 text-cyan-400" />
                  <span>MS Teams</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Summer of Robotics is ERC's flagship robotics bootcamp where ideas turn into intelligent machines. Dive into the complete robotics pipeline — from robot anatomy, CAD modelling, and URDF design to ROS2 simulations in Gazebo. Build autonomous systems using SLAM, OpenCV, YOLOv8, MoveIt, RSSI heatmaps, and Ollama-powered robotics AI while working on exciting real-world projects throughout the program.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScnv4Bs1Nn_aaZ4wuiZ75AFcLq7rKTkbZFDNmyMu2C2FeM5bg/viewform?usp=publish-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/register px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:-translate-y-1 hover:shadow-cyan-500/40 active:scale-95"
                  >
                    Register Now
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/register:translate-x-1" />
                  </a>

                  <Link
                    to="/sor"
                    className="group/details px-6 py-3 rounded-lg border border-cyan-400/40 bg-white/[0.06] hover:bg-cyan-500/15 text-cyan-300 font-medium transition-all duration-300 inline-flex items-center hover:-translate-y-1 hover:shadow-cyan-500/30 hover:shadow-lg active:scale-95"
                  >
                    Details
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/details:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={sor}
                  alt="Summer of Robotics"
                  loading="lazy"
                  className="w-full h-full object-contain bg-gradient-to-br from-[#020617] via-[#0f172a] to-black p-8"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-500/10 opacity-60 pointer-events-none"></div>
              </div>
            </div>
          </div>

          {/* ITSP BOOTCAMP CARD */}
          <div className="relative col-span-1 lg:col-span-2 rounded-3xl overflow-hidden border border-orange-400/20 bg-white/[0.06] backdrop-blur-md shadow-[0_0_40px_rgba(255,140,0,0.12)] hover:shadow-[0_0_55px_rgba(255,140,0,0.18)] transition-all duration-500">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
                <img
                  src={itsp}
                  alt="ITSP bootcamp"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-yellow-500/10 opacity-60 pointer-events-none"></div>
              </div>

              <div className="md:w-1/2 p-8 order-1 md:order-2 relative z-10">
                <div className="relative inline-flex items-center mb-4 px-3 py-1 bg-orange-500/10 border border-orange-400/20 rounded-full backdrop-blur-md overflow-hidden">
                  <div className="absolute inset-0 bg-orange-400/20 blur-xl"></div>
                  <div className="relative z-10 flex items-center">
                    <Calendar size={16} className="text-orange-400 mr-2" />
                    <span className="text-sm text-orange-300">Technical Bootcamp</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 font-heading text-white">
                  ITSP Bootcamp 2025
                </h3>

                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar size={16} className="mr-2 text-orange-400" />
                  <span>24 May 2026</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Clock size={16} className="mr-2 text-orange-400" />
                  <span>2:00 PM onwards</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin size={16} className="mr-2 text-orange-400" />
                  <span>MS Teams</span>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  The ITSP Bootcamp introduced participants to embedded systems, sensors, microcontrollers, and IoT development while exploring tools like Gazebo, Proteus, MATLAB, and Simulink — making it the perfect launchpad for hardware and robotics projects.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/erciitb/ITSP_Resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/resources px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:-translate-y-1 hover:shadow-orange-500/40 active:scale-95"
                  >
                    Resources
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/resources:translate-x-1" />
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/1f6STxw4HsI13xQ7eypBQ2V5cH2fjp4BD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/slides px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-medium transition-all duration-300 inline-flex items-center shadow-lg hover:-translate-y-1 hover:shadow-blue-500/40 active:scale-95"
                  >
                    Slides & Recordings
                    <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover/slides:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-white/[0.06] backdrop-blur-md rounded-3xl border border-white/10 text-center mb-20 shadow-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            Stay Updated on All Events
          </h3>
          <p className="text-gray-300 mb-6">
            Subscribe to receive updates about workshops, robotics bootcamps, competitions, and club activities.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 bg-black/40 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-cyan-400 border border-cyan-400/20 mb-2 sm:mb-0 sm:flex-1"
            />
            <button
              onClick={handleSubscribe}
              disabled={subscribed}
              className={`px-6 py-3 transition-all duration-300 sm:rounded-l-none rounded-md ${
                subscribed
                  ? 'bg-orange-600 text-white cursor-default'
                  : 'bg-cyan-500 hover:bg-cyan-400 text-black font-semibold hover:-translate-y-1 active:scale-95'
              }`}
            >
              {subscribed ? 'Subscribed!' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;