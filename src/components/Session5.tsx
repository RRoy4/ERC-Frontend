import React, { useState, useEffect } from "react";
import { Calendar, Clock, ExternalLink, Presentation, Video, Loader2, Github } from "lucide-react";
import session5Image from "../assets/Mechatronics5_SOR.png"; 
import { useAuth } from "../hooks/useAuth";

const Session5 = () => {
  const [submitted, setSubmitted] = useState(false);
  const [driveLink, setDriveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [feedback, setFeedback] = useState("");
  const [funAnswer, setFunAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [errorMsg, setErrorMsg] = useState(""); 
  
  const { user } = useAuth();

  useEffect(() => {
    const checkStatus = async () => {
      if (!user?.roll) {
        setIsChecking(false);
        return;
      }

      try {
        const scriptUrl = "https://script.google.com/macros/s/AKfycbxfGarPsay6hlIxhj4S2VMIt2KWCoa34iTblgiP8UN8304knYoHV_WppmBWz_OL79g3/exec";
        const response = await fetch(`${scriptUrl}?roll=${user.roll}`);
        const data = await response.json();

        if (data.hasSubmitted) {
          setSubmitted(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsChecking(false);
      }
    };

    checkStatus();
  }, [user?.roll]);

  const handleAssignmentSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setErrorMsg("");

    if (!user?.roll || user.roll.trim() === "" || user.roll === "N/A" || user.roll === "undefined") {
      setErrorMsg("Submission failed: Missing Roll Number. Please log out and log in again to load your profile properly.");
      return; 
    }

    try {
      setSubmitting(true);

      const submitData = new URLSearchParams();
      submitData.append("name", user.name);
      submitData.append("roll", user.roll);
      submitData.append("driveLink", driveLink);
      submitData.append("githubLink", githubLink);
      submitData.append("feedback", feedback);
      submitData.append("funAnswer", funAnswer);

      await fetch(
        "https://script.google.com/macros/s/AKfycbxfGarPsay6hlIxhj4S2VMIt2KWCoa34iTblgiP8UN8304knYoHV_WppmBWz_OL79g3/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: submitData.toString(),
        }
      );

      setSubmitted(true);
      setDriveLink("");
      setGithubLink("");
      setFeedback("");
      setFunAnswer("");
    } catch (error) {
      setErrorMsg("Submission failed due to a network error. Please check your connection and try again.");
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

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

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-2">
                  <a
                    href="https://canva.link/6rjg8zlincawyjw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-green-500/20"
                  >
                    <Presentation size={18} />
                    Slides
                  </a>

                  <a
                    href="https://drive.google.com/file/d/1KGl3R60BPMzC_WJKPE_qGenZzFR8ebBd/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl transition-colors font-medium shadow-lg shadow-green-500/20"
                  >
                    <Video size={18} />
                    Recording
                  </a>

                  <a
                    href="https://github.com/RRoy4/Session5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-green-500/30 text-green-300 px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    <Github size={18} />
                    Session Resources & Code
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

          {/* Assignment Section */}
          <div className="max-w-3xl mx-auto mt-8 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center transition-all duration-300 hover:border-green-500/30 hover:shadow-[0_0_35px_rgba(34,197,94,0.25)]">
            <h2 className="text-3xl font-bold mb-6">
              Session 5 Assignment
            </h2>

            <a
              href="https://drive.google.com/file/d/1F62--5iz1uxiv3F-om_Mc8OOMPbz6KIJ/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 px-8 py-4 rounded-xl font-semibold text-lg transition-colors mb-8"
            >
              <ExternalLink size={20} />
              Click Here to Access Assignment
            </a>

            {!user ? (
              <div className="flex flex-col items-center justify-center py-10">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center max-w-lg mx-auto">
                  <h3 className="text-red-400 text-xl font-semibold mb-2">
                    Authentication Required
                  </h3>
                  <p className="text-gray-300 mb-6">
                    We couldn't detect your IITB SSO session. You must be logged in to submit assignments.
                  </p>
                  <a 
                    href="/" 
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 px-6 py-3 rounded-xl transition-colors font-medium"
                  >
                    Go back to Login
                  </a>
                </div>
              </div>
            ) : isChecking ? (
              <div className="flex flex-col items-center justify-center py-8 text-green-400">
                <Loader2 className="animate-spin mb-4" size={32} />
                <p>Checking submission status...</p>
              </div>
            ) : submitted ? (
              <div className="max-w-xl mx-auto">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-green-400 text-xl font-semibold mb-2">
                    ✓ Assignment Submitted Successfully
                  </h3>
                  <p className="text-gray-300">
                    Your submission has been recorded.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleAssignmentSubmit} className="max-w-2xl mx-auto space-y-6"> 
                
                {errorMsg && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-left">
                    <h3 className="text-red-400 text-xl font-semibold mb-2">
                      ⚠️ Submission Failed
                    </h3>
                    <p className="text-gray-300">
                      {errorMsg}
                    </p>
                  </div>
                )}

                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-5 text-left mb-6">
                  <h4 className="text-green-400 font-medium mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Authenticated as
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Name</span>
                      <span className="text-gray-200 font-medium">{user.name}</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Roll Number</span>
                      <span className="text-gray-200 font-medium uppercase">{user.roll}</span>
                    </div>
                    <div className="md:col-span-2">
                      <span className="text-xs text-gray-500 uppercase tracking-wider block mb-1">Department</span>
                      <span className="text-gray-200 font-medium">{user.department}</span>
                    </div>
                  </div>
                </div>

                <div className="text-left">
                  <label className="block text-green-400 font-medium mb-2">
                    Share your feedback regarding Session 5
                  </label>
                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    rows={4}
                    placeholder="What did you enjoy? What could be improved?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none resize-none"
                  />
                </div>
                
                <div className="text-left">
                  <label className="block text-green-400 font-medium mb-2">
                    🦾 If your SLAM-enabled robotic arm was tasked with making you breakfast, what's the catastrophic-yet-hilarious way it would fail?
                  </label>
                  <textarea
                    value={funAnswer}
                    onChange={(e) => setFunAnswer(e.target.value)}
                    rows={4}
                    placeholder="Example: It maps the kitchen perfectly, but classifies my cat as a toaster..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none resize-none"
                  />
                </div>
                
                <div className="text-left">
                  <label className="block text-green-400 font-medium mb-2">
                    Drive Link
                  </label>
                  <input
                    type="url"
                    value={driveLink}
                    onChange={(e) => setDriveLink(e.target.value)}
                    placeholder="Paste Google Drive folder link here"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <div className="text-left">
                  <label className="block text-green-400 font-medium mb-2">
                    GitHub Code Repository Link
                  </label>
                  <input
                    type="url"
                    value={githubLink}
                    onChange={(e) => setGithubLink(e.target.value)}
                    placeholder="Paste GitHub link here"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting || !user?.roll} 
                  className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-xl font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Assignment"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session5;