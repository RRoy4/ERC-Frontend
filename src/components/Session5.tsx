import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
// Make sure to add this image to your assets folder
import session5Image from "../assets/Mechatronics5_SOR.png"; 

const Session5 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-6xl font-bold text-green-500">
              SLAM & Manipulation
            </h2>
          </div>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Step into the world of advanced robotics. Learn how mobile robots map and navigate unknown environments using SLAM, and dive into the mechanics of robotic arms to master precise object manipulation and physical interaction.
          </p>
        </div>

        <div className="space-y-8">
          {/* Session 5 Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 p-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Session 5 — SLAM & Manipulation
                </h2>
                <h3 className="text-green-400 font-semibold mb-3">
                  What You'll Explore
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  With perception in place, it’s time to take action. This session covers two core pillars of autonomous systems: Simultaneous Localization and Mapping (SLAM) for mobile bots, and spatial control for robotic arm manipulation. We will explore how a mobile base continuously builds a map of an unknown environment to navigate autonomously, and then shift gears to learn how a robotic arm calculates joint movements to precisely reach, grasp, and manipulate target objects in 3D space.
                </p>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-green-400" />
                    <span>26th June 2026</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-green-400" />
                    <span>7:00 PM</span>
                  </div>
                </div>

                {/* Join Us Button */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://teams.microsoft.com/meet/46903169093492?p=waSVpufaSWZ7vV054M" // ADD YOUR MS TEAMS LINK HERE
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-green-500/20"
                  >
                    Join Us
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ backgroundImage: `url(${session5Image})` }}
              >
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Session5;