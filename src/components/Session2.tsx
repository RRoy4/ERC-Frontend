import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import session2Image from "../assets/Mechatronics2_SOR.png"; // Make sure to add a placeholder image here

const Session2 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-6xl font-bold text-purple-500">Mechatronics: From Perception to Action</h2>
          </div>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Master robotic system dynamics and inertia to understand the physical forces driving your hardware. Bridge the gap between theory and reality by pairing advanced sensor integration with practical PID control, perfectly closing the crucial sense-act loop.
          </p>
        </div>

        <div className="space-y-8">
          {/* Session 2 */}
          <div
            className="
            bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]
          "
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-2/3 p-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Session 2 — Mechatronics: From Perception to Action
                </h2>
                <h3 className="text-purple-400 font-semibold mb-3">
                  What You'll Explore
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Get ready to dive deeper into the hardware that makes robots move and interact with the world. In this session, we will explore the core principles of robotic system dynamics. You will learn how to integrate various sensors to capture environmental data and how to use that data to drive actuators with precision using PID control mechanisms. We will also walk through a full Docker installation to ensure you have a seamless, containerized development environment ready for the upcoming software sessions.
                </p>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-purple-400" />
                    <span>9 June 2026</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-purple-400" />
                    <span>7:00 PM onwards</span>
                  </div>
                </div>

                <a
                  href="https://teams.microsoft.com/meet/46357945342660?p=9sLE3EtEbLsbcF1fBt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-colors"
                >
                  Join on MS Teams
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Right Thumbnail (Background Image Method with bg-contain) */}
              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ 
                  backgroundImage: `url(${session2Image})`,
                  // Optional: If you see empty space above/below the image, 
                  // uncomment the line below and tweak the hex code to match your poster's exact color!
                  // backgroundColor: '#your-color-here' 
                }}
              >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session2;