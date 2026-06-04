import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import session1Image from "../assets/Mechatronics1_SOR.png";

const Week1 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-6xl font-bold text-blue-500">Mechatronics</h2>
          </div>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Discover the fundamentals of modern robotics through Mechatronics —
            the interdisciplinary field that combines mechanics, electronics,
            control systems, and computing. These sessions introduce the building
            blocks of robotic systems, from robot anatomy and kinematics to
            sensors, actuators, and control.
          </p>
        </div>

        <div className="space-y-8">
          {/* Session 1 */}
          <div
            className="
            bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]
          "
          >
            <div className="flex flex-col lg:flex-row">
              {/* Left Content */}
              <div className="w-full lg:w-2/3 p-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Session 1 — Introduction to Mechatronics
                </h2>
                <h3 className="text-blue-400 font-semibold mb-3">
                  What You'll Explore
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Ever wondered how a robot sees an object and precisely reaches
                  for it? This session takes you through the complete pipeline.
                  We'll dive into the anatomy of a robot, exploring how real
                  robotic systems are designed and modelled using CAD. Once the
                  physical structure is in place, we'll uncover how robots
                  understand their surroundings by transforming information from
                  the camera frame into the robot's base frame through
                  coordinate systems and transformation matrices. Finally, we'll
                  connect perception to motion, learning how a robot moves its
                  end-effector to a camera-detected target using the principles
                  of Forward Kinematics and Inverse Kinematics.
                </p>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-blue-400" />
                    <span>5 June 2026</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-blue-400" />
                    <span>2:00 PM onwards</span>
                  </div>
                </div>

                <a
                  href="https://teams.microsoft.com/meet/44483570719347?p=kOhId8PyecX2UujFUY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition-colors"
                >
                  Join on MS Teams
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Right Thumbnail (Background Image Method with bg-contain) */}
              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ 
                  backgroundImage: `url(${session1Image})`,
                  // Optional: If you see empty space above/below the image, 
                  // uncomment the line below and tweak the hex code to match your poster's exact blue!
                  // backgroundColor: '#5B68F6' 
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

export default Week1;