import React from "react";
import { Calendar, Clock, ExternalLink, Presentation, Video, Github } from "lucide-react";
import session2Image from "../assets/Mechatronics2_SOR.png";

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
          {/* Session 2 Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">
            <div className="flex flex-col lg:flex-row">
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

                {/* Updated Buttons Section */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://canva.link/fr2mjbrr4r33hal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-purple-500/20"
                  >
                    <Presentation size={18} />
                    Slides
                  </a>
                  
                  <a
                    href="https://iitbacin.sharepoint.com/sites/ERCBLAH-BASICSOFROBOTNAVIGATION/Shared%20Documents/Summer%20Of%20Robotics/Recordings/Session%202%20%E2%80%94%20Mechatronics%20From%20Perception%20to%20Action-20260609_190055-Meeting%20Recording.mp4?web=1" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-purple-500/20"
                  >
                    <Video size={18} />
                    Recording
                  </a>

                  <a
                    href="https://github.com/RRoy4/Docker-Installation/tree/main" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-purple-500/30 text-purple-300 px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    <Github size={18} />
                    Docker Installation & Resources
                  </a>
                </div>
              </div>

              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ backgroundImage: `url(${session2Image})` }}
              >
              </div>
            </div>
          </div>

          {/* Assignment Section */}
          <div className="max-w-3xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">
            <h2 className="text-3xl font-bold mb-6">
              Session 2 Assignment
            </h2>

            <a
              href="https://drive.google.com/file/d/1c6mHP4Pc1-4HzDuJa6XvZrAK7_W7oDy-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-xl font-semibold text-lg transition-colors mb-8"
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

export default Session2;