import React, { useState, useEffect } from 'react';
import { useAuth, logout } from '../hooks/useAuth';

interface TimelineItem {
  week: string;
  title: string;
  description: string;
  gradient: string;
  glow: string;
}

const timelineData: TimelineItem[] = [
  {
    week: 'Week 1',
    title: 'Mechatronics',
    description: 'Dive into the core building blocks of physical robotics. This phase packs in mechanical CAD design, coordinate transformations, and IK/FK math, right alongside practical control theory, dynamic actuation, and sensor integration.',
    gradient: 'from-blue-400 to-blue-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(96,165,250,0.4)]',
  },
  {
    week: 'Week 2-4',
    title: 'ROS Simulation',
    description: 'Transition into software. Learn the Robot Operating System, visualize robot models in RViz, and simulate physics in Gazebo.',
    gradient: 'from-purple-400 to-purple-600',
    glow: 'group-hover:shadow-[0_0_30px_rgba(192,132,252,0.4)]',
  },
  {
    week: 'Week 5-6',
    title: 'Projects',
    description: 'Apply everything learned to build and deploy a comprehensive robotics project from scratch.',
    gradient: 'from-yellow-400 to-orange-500',
    glow: 'group-hover:shadow-[0_0_30px_rgba(251,146,60,0.4)]',
  },
];

const SOR: React.FC = () => {
  const { user } = useAuth();
  
  const [phone, setPhone] = useState('');
  const [motivation, setMotivation] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasRegistered, setHasRegistered] = useState(false);

  useEffect(() => {
    if (user?.roll) {
      const alreadyRegistered = localStorage.getItem(`sor_registered_${user.roll}`);
      if (alreadyRegistered) {
        setHasRegistered(true);
      }
    }
  }, [user]);

  const handleRegister = async () => {
    if (hasRegistered) {
      alert("You have already registered for this event!");
      return;
    }

    if (!phone.trim() || !motivation.trim() || !user?.name || !user?.roll || !user?.department) {
      alert("Please fill out all the required fields before submitting! (Make sure your account details are loaded)");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbyTA9Hvg2-N9jYpFkgo1pRpZvZy6682l3krmVYcpDYvZyYLtnMe7Z_KwWyBHAdajyAS/exec',
        {
          method: 'POST',
          body: new URLSearchParams({ 
            name: user.name,
            roll: user.roll,
            department: user.department,
            phone: phone.trim(),
            motivation: motivation.trim()
          }),
        }
      );

      const resultText = await response.text();

      if (resultText === "Duplicate") {
        alert("Our records show this Roll Number is already registered!");
        setHasRegistered(true);
        if (user?.roll) localStorage.setItem(`sor_registered_${user.roll}`, 'true');
      } 
      else if (resultText === "Success") {
        setHasRegistered(true);
        if (user?.roll) localStorage.setItem(`sor_registered_${user.roll}`, 'true');
        setPhone('');
        setMotivation('');
      } 
      else {
        alert("Something went wrong on the server. Please try again.");
      }
    } catch (error) {
      console.error('Registration failed:', error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">

        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 text-blue-500">
            Summer of Robotics
          </h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your roadmap to mastering the intersection of hardware and software.
          </p>
        </div>

        <div className="mb-20">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">

            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <p className="text-white font-bold text-xl">{user?.name || "Loading..."}</p>
                <p className="text-gray-400 text-sm mt-1">
                  {user?.roll ? `${user.roll} · ${user.department} · ${user.degree}` : "Fetching user details..."}
                </p>
              </div>
              <button
                onClick={logout}
                className="text-xs text-gray-500 hover:text-gray-300 underline transition-colors"
              >
                Logout
              </button>
            </div>

            {hasRegistered ? (
              <div className="text-center py-10">
                <h2 className="text-3xl font-bold text-emerald-400 mb-4">You're Registered!</h2>
                <p className="text-gray-400">Your spot is secured. We'll be in touch soon with more details.</p>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-white mb-6">Complete Your Registration</h2>

                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-400 text-sm mb-2">Why do you want to join SOR? <span className="text-red-500">*</span></label>
                    <textarea
                      rows={4}
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                      placeholder="Tell us your motivation..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                      required
                    />
                  </div>

                  <button 
                    onClick={handleRegister}
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 mt-2 ${
                      isSubmitting 
                        ? 'bg-blue-800 cursor-wait' 
                        : 'bg-blue-600 hover:bg-blue-500 hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-0 md:border-none">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 -translate-x-1/2 rounded-full opacity-50"></div>
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-gray-900 border-4 border-gray-700 group-hover:border-white transition-colors duration-300 z-10 shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transform transition-all duration-500 ease-out group-hover:-translate-y-2 ${item.glow}`}>
                    <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold mb-4 bg-gradient-to-r ${item.gradient} text-gray-950`}>
                      {item.week}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-100 mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SOR;