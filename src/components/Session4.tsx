import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import session4Image from "../assets/Mechatronics4_SOR.png"; 

const Session4 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-6xl font-bold text-orange-500">
              Sensors and Perception
            </h2>
          </div>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Bridge the gap between hardware and software through advanced sensor integration. Dive into machine perception using OpenCV, empowering your robots to accurately interpret and react to dynamic visual environments.
          </p>
        </div>

        <div className="space-y-8">
          {/* Session 4 Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 p-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Session 4 — Sensors and Perception
                </h2>
                <h3 className="text-orange-400 font-semibold mb-3">
                  What You'll Explore
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Get ready to give your robot the gift of sight. In this session, we will explore the fundamentals of computer vision using OpenCV, teaching you how to process and analyze live camera feeds. You will learn essential techniques like color tracking, edge detection, and shape recognition, bridging the gap between raw pixel data and intelligent, vision-based decision making.
                </p>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-orange-400" />
                    <span>19th June 2026</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-orange-400" />
                    <span>7:00 PM</span>
                  </div>
                </div>

                {/* Join Us Button */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://teams.microsoft.com/meet/45892581445864?p=mgTDrsIgWanJKjWjWC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-orange-500/20"
                  >
                    Join Us
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ backgroundImage: `url(${session4Image})` }}
              >
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Session4;