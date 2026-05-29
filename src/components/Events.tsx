import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
} from 'lucide-react';

import Cont from '../assets/itsp banner.png';
import Xlr8Img from '../assets/header.png';

const Events = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const navigate = useNavigate();

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
    <section id="events" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">
            Events
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Join us for workshops, competitions, and technical events
            designed to enhance your skills and connect you with fellow
            enthusiasts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* SUMMER OF ROBOTICS CARD */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-900/30 to-orange-900/30 rounded-xl overflow-hidden border border-blue-500/20">
            <div className="flex flex-col md:flex-row">

              {/* Content */}
              <div className="md:w-1/2 p-8">
                <div className="inline-flex items-center mb-4 px-3 py-1 bg-blue-500/20 rounded-full">
                  <Calendar
                    size={16}
                    className="text-blue-400 mr-2"
                  />

                  <span className="text-sm text-blue-400">
                    Flagship Event
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 font-heading">
                  Summer of Robotics
                </h3>

                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>1.5 Month Program</span>
                </div>

                <div className="flex items-center text-gray-300 mb-2">
                  <Clock
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>Hands-on Learning Series</span>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>MS Teams</span>
                </div>

                <p className="text-gray-300 mb-6">
                  Summer of Robotics is ERC's flagship robotics
                  learning program covering the complete mechatronics
                  and robotics workflow — from robot anatomy and CAD
                  modelling to ROS2 simulations using Gazebo.

                  Participants explore SLAM, OpenCV,
                  YOLOv8, MoveIt, RSSI heatmaps, Ollama LLM integration,
                  and exciting real-world robotics projects throughout
                  the bootcamp.
                </p>

                <button
                  onClick={() => navigate('/summer-of-robotics')}
                  className="px-6 py-3 bg-blue-600 hover:bg-orange-600 rounded-md transition-all inline-flex items-center"
                >
                  Explore Program

                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>

              {/* Image */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={Xlr8Img}
                  alt="Summer of Robotics"
                  loading="lazy"
                  className="w-full h-full object-contain bg-gray-900 p-6"
                />
              </div>
            </div>
          </div>

          {/* ITSP BOOTCAMP CARD */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-orange-900/30 to-blue-900/30 rounded-xl overflow-hidden border border-orange-500/20">
            <div className="flex flex-col md:flex-row">

              {/* Replace your current image block with this */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img
                  src={Cont}
                  alt="ITSP bootcamp"
                  loading="lazy"
                  className="w-full h-full object-cover" 
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 order-1 md:order-2">

                <div className="inline-flex items-center mb-4 px-3 py-1 bg-orange-500/20 rounded-full">
                  <Calendar
                    size={16}
                    className="text-orange-400 mr-2"
                  />

                  <span className="text-sm text-orange-400">
                    Technical Bootcamp
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 font-heading">
                  ITSP Bootcamp 2025
                </h3>

                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>24 May 2026</span>
                </div>

                <div className="flex items-center text-gray-300 mb-2">
                  <Clock
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>2:00 PM onwards</span>
                </div>

                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin
                    size={16}
                    className="mr-2 text-gray-400"
                  />

                  <span>MS Teams</span>
                </div>

                <p className="text-gray-300 mb-6">
                  The ITSP Bootcamp introduced participants to the
                  fundamentals of embedded systems, sensors,
                  microcontrollers, and IoT development.
                  Participants also explored powerful engineering tools
                  like Gazebo, Proteus, MATLAB, and Simulink — making
                  it the perfect starting point for students doing hardware 
                  projects under ITSP.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-4">

                  <a
                    href="https://github.com/erciitb/ITSP_Resources"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-md transition-all inline-flex items-center"
                  >
                    Resources

                    <ArrowRight size={16} className="ml-2" />
                  </a>

                  <a
                    href="https://drive.google.com/drive/folders/1f6STxw4HsI13xQ7eypBQ2V5cH2fjp4BD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all inline-flex items-center"
                  >
                    Slides & Recordings

                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subscription */}
        <div className="mt-12 p-6 bg-blue-900/30 rounded-xl border border-gray-700 text-center mb-20">
          <h3 className="text-xl font-semibold mb-4">
            Stay Updated on All Events
          </h3>

          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to receive updates about
            workshops, competitions, and upcoming club activities.
          </p>

          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-3 bg-gray-900 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700 mb-2 sm:mb-0 sm:flex-1"
            />

            <button
              onClick={handleSubscribe}
              disabled={subscribed}
              className={`px-6 py-3 transition-colors sm:rounded-l-none rounded-md ${
                subscribed
                  ? 'bg-orange-600 text-white cursor-default'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
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