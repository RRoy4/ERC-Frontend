import React from "react";
import { Calendar, Clock, ExternalLink } from "lucide-react";
import session3Image from "../assets/Mechatronics3_SOR.png"; 

const Session3 = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
            <h2 className="text-6xl font-bold text-fuchsia-500">
              Introduction to ROS
            </h2>
          </div>

          <p className="max-w-4xl mx-auto text-gray-400 text-lg leading-relaxed">
            Get started with the Robot Operating System (ROS). Learn nodes, topics, services, packages, and build your first simulated robot in Gazebo while visualizing data using RViz.
          </p>
        </div>

        <div className="space-y-8">
          {/* Session 3 Info Card */}
          <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-2/3 p-8 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Session 3 — Introduction to ROS
                </h2>
                <h3 className="text-fuchsia-400 font-semibold mb-3">
                  What You'll Explore
                </h3>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Get ready to dive into the software architecture that powers modern autonomous systems. In this session, we will explore the fundamental building blocks of ROS, including nodes, topics, services, and packages. You will learn how to establish communication channels between different parts of a robot's "brain." We will also walk through building your first simulated robot in Gazebo and monitoring its internal state using RViz, ensuring your code is ready before it ever touches physical hardware.
                </p>
                
                <div className="flex flex-col gap-3 text-gray-300 mb-6">
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-3 text-fuchsia-400" />
                    <span>13 June 2026</span>
                  </div>

                  <div className="flex items-center">
                    <Clock size={18} className="mr-3 text-fuchsia-400" />
                    <span>7:00 PM Onwards</span>
                  </div>
                </div>

                {/* Join Us Button */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://teams.microsoft.com/meet/44688152051447?p=k4BfBkj95oCIimndVV" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-fuchsia-500/20"
                  >
                    Join Us
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div 
                className="w-full lg:w-1/3 order-1 lg:order-2 min-h-[300px] lg:min-h-full bg-contain bg-center bg-no-repeat border-b lg:border-b-0 lg:border-l border-white/10"
                style={{ backgroundImage: `url(${session3Image})` }}
              >
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Session3;