import React from "react";
import { Calendar, Clock, ExternalLink, Presentation, Video } from "lucide-react";
import session1Image from "../assets/Mechatronics1_SOR.png";

const Session1 = () => {
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
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
            <div className="flex flex-col lg:flex-row">
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

                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://canva.link/ebvm1sdz3mth1jq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-blue-500/20"
                  >
                    <Presentation size={18} />
                    Slides
                  </a>
                  
                  <a
                    href="https://iitbacin.sharepoint.com/sites/ERCBLAH-BASICSOFROBOTNAVIGATION/Shared%20Documents/Summer%20Of%20Robotics/Recordings/Session%201%20%E2%80%94%20Introduction%20to%20Mechatronics-20260605_142831-Meeting%20Recording.mp4?web=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-xl transition-colors font-medium border border-gray-600"
                  >
                    <Video size={18} />
                    Recording
                  </a>
                </div>
              </div>

              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ backgroundImage: `url(${session1Image})` }}
              >
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)]">
            <h2 className="text-3xl font-bold mb-6">
              Session 1 Assignment
            </h2>

            <a
              href="https://drive.google.com/file/d/1aLJAE9gvJaXm0iOyp58xxQJy1Hvfy-Ay/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-semibold text-lg transition-colors mb-8"
            >
              <ExternalLink size={20} />
              Click Here to Access Assignment
            </a>

            {/* DEADLINE PASSED BANNER */}
            <div className="max-w-xl mx-auto">
              <div className="bg-gray-800/80 border border-gray-700 rounded-xl p-8 shadow-lg">
                <div className="flex justify-center mb-3">
                  <div className="bg-red-500/20 p-3 rounded-full">
                    <Clock size={28} className="text-red-400" />
                  </div>
                </div>
                <h3 className="text-gray-200 text-xl font-semibold mb-2">
                  Submission Deadline Passed
                </h3>
                <p className="text-gray-400">
                  We are no longer accepting submissions for this assignment. Thank you to everyone who participated!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Session1;