import React, { useState, useEffect, useCallback } from 'react';
import { ExternalLink, X, Plus, ChevronDown, Loader2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
// import followerImg from "../assets/follower.png";
// import rssiImg from "../assets/rssi.png";
// import armImg from "../assets/arm.png";
// import llmImg from "../assets/llm.png";
// import droneImg from "../assets/drone.png";
// import roverImg from "../assets/rover.png";

const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwa7qRY--gt-JS0mdSgdSjgWDeKFDyV7F_yKlEHuY7hWRGEy4nbxWJvu2_RFBhZo6Nj/exec';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  githubUrl: string;
}

interface FormData {
  projectTitle: string;
  motivation: string;
  mobile: string;
}

interface RegistrationStatus {
  registered: boolean;
  projectTitle?: string;
}

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'ROBOTRACE — Autonomous Vision-Based Line Follower',
    description:
      'Develop an intelligent mobile robot capable of following a track without GPS, maps, or external guidance. Using ROS 2, computer vision, and closed-loop control, you will build a system that detects lane markings, corrects its trajectory in real time, and completes autonomous navigation challenges',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883354/follower_mmbx7s.png',
    category: 'Beginner',
    tags: ['TurtleBot3', 'OpenCV', 'PID Control'],
    githubUrl: 'https://github.com/sachinmandal3580-rgb/ros2_line_follower.git',
  },
  {
    id: 2,
    title: 'SignalSCOUT — Autonomous Spatial Signal Mapper',
    description:
      'Build an autonomous robotic WiFi surveyor that maps an environment, navigates safely through it, collects wireless signal measurements, and generates coverage heatmaps. Implement the complete ROS 2 autonomy pipeline—from SLAM and localization to navigation, data collection, and spatial visualization.',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883379/rssi_xvwpie.png',
    category: 'Intermediate',
    tags: ['TurtleBot3', 'SLAM', 'RSSI'],
    githubUrl: 'https://github.com/sachinmandal3580-rgb/ros2_RSSI_Heatmap.git',
  },
  {
    id: 3,
    title: 'BraccioSORT — Vision-Guided Pick-and-Place System',
    description:
      'Build a complete vision-guided manipulation stack including camera-based object detection, pixel-to-world coordinate estimation, MoveIt-powered inverse kinematics and motion planning, gripper control, and autonomous colour-based pick-and-place sorting using a simulated Braccio robotic arm.',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883355/arm_g9layb.png',
    category: 'Intermediate',
    tags: ['6-DOF Robotic Arm', 'YOLOv8', 'Moveit'],
    githubUrl: 'https://github.com/Saarthak43/ros2_pick_n_place_braccio',
  },
  {
    id: 4,
    title: 'SmartBOT — LLM-Powered Autonomous Exploration Bot',
    description:
      'Build a complete navigation stack including keyboard teleop, a hand-rolled FSM/PID navigator for obstacle avoidance, frontier-based autonomous exploration on a live SLAM Toolbox occupancy grid, and a local LLM that parses typed commands into Nav2 goals.',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883363/llm_ujrr40.png',
    category: 'Intermediate',
    tags: ['LLM', 'ROS', 'Natural Language'],
    githubUrl: 'https://github.com/RRoy4/LLM-Controlled-Bot.git',
  },
  {
    id: 5,
    title: 'AERODrop — DIGIPIN-Based Precision Delivery Drone',
    description:
      'Develop a fully autonomous ROS 2 drone capable of navigating to DIGIPIN-based destinations, detecting targets using YOLO, and performing precision payload deliveries. Experience the complete aerial robotics stack—from flight control and perception to mission planning—in a realistic Gazebo simulation.',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883362/drone_ar9jlz.png',
    category: 'Advanced',
    tags: ['Yolov8', 'PID/PI control', 'Digipin'],
    githubUrl: 'https://github.com/sachinmandal3580-rgb/ros2_drone.git',
  },
  {
    id: 6,
    title: 'TerraROVER — 6-Wheeled Planetary Exploration Rover',
    description:
      'Build an intelligent Mars rover capable of autonomously exploring rugged planetary terrain using ROS 2 Jazzy. Implement the complete autonomy stack—from wheel-level control and EKF localization to Nav2 path planning and obstacle avoidance—in a realistic Gazebo simulation',
    image: 'https://res.cloudinary.com/djbm9dagt/image/upload/v1782883366/rover_fi4iwl.png',
    category: 'Advanced',
    tags: ['Rocker-Bogie', 'Ackermann Steering', 'SLAM'],
    githubUrl: 'https://github.com/sachinmandal3580-rgb/ros2_rover.git',
  },
];

const PROJECT_TITLES = defaultProjects.map((p) => p.title);

const emptyForm: FormData = { projectTitle: '', motivation: '', mobile: '' };

const fetchRegistrationStatus = async (roll: string): Promise<RegistrationStatus | null> => {
  try {
    const url = `${APPS_SCRIPT_URL}?roll=${encodeURIComponent(roll)}`;
    const res = await fetch(url, { method: 'GET' });
    if (!res.ok) return null;
    const data = await res.json();
    return {
      registered: Boolean(data?.registered),
      projectTitle: data?.projectTitle || undefined,
    };
  } catch (error) {
    console.error('Registration status check failed:', error);
    return null;
  }
};

const Projects: React.FC = () => {
  const { user } = useAuth();

  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [existingRegistration, setExistingRegistration] = useState<RegistrationStatus | null>(null);
  const [checkingRegistration, setCheckingRegistration] = useState(false);
  const [checkFailed, setCheckFailed] = useState(false);

  const refreshRegistrationStatus = useCallback(async () => {
    if (!user?.roll) {
      setExistingRegistration(null);
      return;
    }
    setCheckingRegistration(true);
    setCheckFailed(false);
    const status = await fetchRegistrationStatus(user.roll);
    if (status === null) {
      setCheckFailed(true);
      setExistingRegistration(null);
    } else {
      setExistingRegistration(status.registered ? status : null);
    }
    setCheckingRegistration(false);
  }, [user?.roll]);

  // Check once when the user logs in / roll number becomes available.
  useEffect(() => {
    refreshRegistrationStatus();
  }, [refreshRegistrationStatus]);

  // Re-check every time the modal is opened, so the status is always fresh
  // against the sheet (in case they registered from another device/tab).
  useEffect(() => {
    if (showModal) {
      refreshRegistrationStatus();
    }
  }, [showModal, refreshRegistrationStatus]);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.projectTitle) newErrors.projectTitle = 'Please select a project.';
    if (!form.motivation.trim()) newErrors.motivation = 'Tell us why you want to join.';
    if (!form.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^[6-9]\d{9}$/.test(form.mobile.trim())) {
      newErrors.mobile = 'Enter a valid 10-digit mobile number.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    if (!user?.roll || user.roll.trim() === '' || user.roll === 'N/A' || user.roll === 'undefined') {
      setSubmitState('error');
      setSubmitError('Missing Roll Number. Please log out and log in again.');
      return;
    }

    setSubmitState('loading');
    setSubmitError('');

    // Guard against double-submits (e.g. two tabs open, or registered from
    // another device since the modal was opened) — re-check the sheet
    // right before submitting.
    const freshStatus = await fetchRegistrationStatus(user.roll);
    if (freshStatus?.registered) {
      setExistingRegistration(freshStatus);
      setSubmitState('idle');
      return;
    }

    try {
      // Exact same pattern as Session4 — URLSearchParams + no-cors is the only
      // reliable way to POST to Google Apps Script from a browser.
      const submitData = new URLSearchParams();
      submitData.append('name', user?.name ?? '');
      submitData.append('roll', user?.roll ?? '');
      submitData.append('department', user?.department ?? '');
      submitData.append('projectTitle', form.projectTitle);
      submitData.append('motivation', form.motivation.trim());
      submitData.append('mobile', form.mobile.trim());

      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: submitData.toString(),
      });

      // no-cors gives an opaque response — if fetch didn't throw, data reached Google ✅
      setExistingRegistration({ registered: true, projectTitle: form.projectTitle });
      setSubmitState('success');
      setTimeout(() => {
        setShowModal(false);
        setForm(emptyForm);
        setErrors({});
        setSubmitState('idle');
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitState('error');
      setSubmitError('Submission failed due to a network error. Please check your connection and try again.');
    }
  };

  const handleClose = () => {
    if (submitState === 'loading') return;
    setShowModal(false);
    setForm(emptyForm);
    setErrors({});
    setSubmitState('idle');
    setSubmitError('');
  };

  const field = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
    : '?';

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">

      {/* ── Modal ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div className="bg-gray-900 border border-white/10 rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <h3 className="text-xl font-semibold text-white">Register Now</h3>
              <button
                onClick={handleClose}
                disabled={submitState === 'loading'}
                className="text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10 disabled:opacity-40"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Not logged in */}
            {!user ? (
              <div className="px-6 py-10 text-center">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-red-400 text-lg font-semibold mb-2">Authentication Required</h3>
                  <p className="text-gray-300 text-sm mb-5">
                    You must be logged in to register for a project.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-xl transition-colors font-medium text-white text-sm"
                  >
                    Go to Login
                  </a>
                </div>
              </div>

            ) : checkingRegistration ? (
              /* Checking the sheet for an existing registration */
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <Loader2 size={28} className="text-blue-400 animate-spin mb-4" />
                <p className="text-gray-400 text-sm">Checking your registration status…</p>
              </div>

            ) : existingRegistration ? (
              /* Already registered — block the form entirely */
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <CheckCircle2 size={28} className="text-blue-400" />
                </div>
                <p className="text-white text-lg font-semibold mb-1">You're already registered</p>
                <p className="text-gray-400 text-sm mb-1">
                  {existingRegistration.projectTitle ? (
                    <>
                      You've applied for{' '}
                      <span className="text-blue-400">{existingRegistration.projectTitle}</span>.
                    </>
                  ) : (
                    'Our records show you have an active registration.'
                  )}
                </p>
                <p className="text-gray-500 text-xs mb-6">
                  Each participant can register for one project only.
                </p>
                <button
                  onClick={handleClose}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10
                    px-5 py-2 rounded-xl transition-colors font-medium text-white text-sm"
                >
                  Close
                </button>
              </div>

            ) : submitState === 'success' ? (
              /* Success */
              <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-white text-lg font-semibold mb-1">Registration successful!</p>
                <p className="text-gray-400 text-sm">
                  You've applied for{' '}
                  <span className="text-blue-400">{form.projectTitle}</span>.
                </p>
              </div>

            ) : (
              /* Form */
              <div className="px-6 py-5 space-y-4">

                {checkFailed && (
                  <div className="flex items-start gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-xl px-4 py-3 text-yellow-400 text-xs">
                    <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                    <span>
                      Couldn't verify your registration status right now. If you've already
                      registered, please don't submit again.
                    </span>
                  </div>
                )}

                {/* Authenticated as */}
                <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 text-left">
                  <h4 className="text-blue-400 font-medium mb-3 flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Authenticated as
                  </h4>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-blue-600/30 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0">
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium truncate">{user.name}</p>
                      <p className="text-gray-500 text-xs truncate uppercase">
                        {user.roll} · {user.department}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project selector */}
                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">
                    Select project <span className="text-blue-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.projectTitle}
                      onChange={(e) => field('projectTitle', e.target.value)}
                      className={`w-full appearance-none bg-white/5 border rounded-xl px-4 py-2.5 text-sm
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition pr-10
                        ${form.projectTitle ? 'text-white' : 'text-gray-500'}
                        ${errors.projectTitle ? 'border-red-500/60' : 'border-white/10'}`}
                    >
                      <option value="" disabled className="bg-gray-800 text-gray-400">
                        Choose a project…
                      </option>
                      {PROJECT_TITLES.map((title) => (
                        <option key={title} value={title} className="bg-gray-800 text-white">
                          {title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={16}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>
                  {errors.projectTitle && (
                    <p className="text-red-400 text-xs mt-1">{errors.projectTitle}</p>
                  )}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">
                    Mobile number <span className="text-blue-400">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-white/5 border border-r-0 border-white/10 rounded-l-xl text-gray-400 text-sm select-none">
                      +91
                    </span>
                    <input
                      type="tel"
                      value={form.mobile}
                      onChange={(e) =>
                        field('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))
                      }
                      placeholder="Enter your WhatsApp number"
                      className={`flex-1 bg-white/5 border rounded-r-xl px-4 py-2.5 text-white text-sm placeholder-gray-500
                        focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition
                        ${errors.mobile ? 'border-red-500/60' : 'border-white/10'}`}
                    />
                  </div>
                  {errors.mobile && (
                    <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Motivation */}
                <div>
                  <label className="block text-sm text-gray-300 mb-1.5">
                    Why do you want to join this project?{' '}
                    <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    value={form.motivation}
                    onChange={(e) => field('motivation', e.target.value)}
                    placeholder="What excites you about this project?"
                    rows={4}
                    className={`w-full bg-white/5 border rounded-xl px-4 py-2.5 text-white text-sm placeholder-gray-500
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none
                      ${errors.motivation ? 'border-red-500/60' : 'border-white/10'}`}
                  />
                  <div className="flex justify-between mt-1">
                    {errors.motivation ? (
                      <p className="text-red-400 text-xs">{errors.motivation}</p>
                    ) : (
                      <span />
                    )}
                    <p className="text-gray-600 text-xs ml-auto">{form.motivation.length} chars</p>
                  </div>
                </div>

                {/* Server error */}
                {submitState === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 text-red-400 text-sm">
                    {submitError}
                  </div>
                )}

                {/* Submit */}
                <div className="pt-1 pb-1">
                  <button
                    onClick={handleSubmit}
                    disabled={submitState === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] disabled:opacity-60
                      text-white font-semibold py-3 rounded-xl transition-all text-sm shadow-lg shadow-blue-500/20
                      flex items-center justify-center gap-2"
                  >
                    {submitState === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Submitting…
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── Page ── */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading text-white">Project Registrations</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>
          <p className="max-w-4xl mx-auto text-gray-300 text-lg">
            The theory is behind you—now it's time to build intelligent robots in simulation. Put
            your ROS skills to the test through immersive, hands-on projects where autonomous
            navigation, computer vision, manipulation, and AI come together to solve real-world
            robotics challenges.
          </p>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 hover:bg-white/10
                border border-blue-500/40 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-full transition-all"
            >
              {existingRegistration ? (
                <>
                  <CheckCircle2 size={16} />
                  Registered
                </>
              ) : checkingRegistration ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Checking…
                </>
              ) : (
                <>
                  <Plus size={16} />
                  Register Now
                </>
              )}
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {defaultProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden transition-all hover:-translate-y-2
                hover:shadow-lg hover:shadow-blue-500/10 group border border-white/5 hover:border-blue-500/20"
            >
              <div className="h-48 overflow-hidden relative bg-gray-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800">
                    <span className="text-gray-500 text-sm">No image</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tags.filter(Boolean).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-900/80 text-xs rounded-full text-blue-400 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors font-heading text-white leading-snug">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                {/* Category */}
                <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-400">
                  {project.category}
                </span>

                {/* More Info */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors gap-1"
                >
                  <span>More Info</span>
                  <ExternalLink size={14} />
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
