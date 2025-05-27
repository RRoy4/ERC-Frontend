import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

// Event data
const eventsData = [
  {
    id: 1,
    title: 'Introduction to Arduino Workshop',
    date: 'May 15, 2025',
    time: '3:00 PM - 5:30 PM',
    location: 'Tech Lab 101',
    description: 'Learn the basics of Arduino programming and create your first LED circuit in this hands-on workshop for beginners.',
    seats: 20,
    image: 'https://images.pexels.com/photos/2568412/pexels-photo-2568412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    title: 'Robotics Competition Prep',
    date: 'May 22, 2025',
    time: '4:00 PM - 7:00 PM',
    location: 'Main Engineering Hall',
    description: 'Team strategy session and practice for the upcoming regional robotics competition. All team members should attend.',
    seats: 15,
    image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    title: 'IoT Project Showcase',
    date: 'June 5, 2025',
    time: '1:00 PM - 4:00 PM',
    location: 'Innovation Center',
    description: 'Members will present their Internet of Things projects and receive feedback from peers and industry mentors.',
    seats: 30,
    image: 'https://images.pexels.com/photos/2659939/pexels-photo-2659939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];

const Events = () => {
  return (
    <section id="events" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Join us for workshops, competitions, and social gatherings to enhance your skills and connect with fellow tech enthusiasts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          <div className="col-span-1 lg:col-span-2 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl overflow-hidden border border-blue-500/20">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-8">
                <div className="inline-flex items-center mb-4 px-3 py-1 bg-blue-500/20 rounded-full">
                  <Calendar size={16} className="text-blue-400 mr-2" />
                  <span className="text-sm text-blue-400">Featured Event</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">Annual Robotics Exhibition</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar size={16} className="mr-2 text-gray-400" />
                  <span>June 15, 2025</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span>University Grand Hall</span>
                </div>
                <p className="text-gray-300 mb-6">
                  Our biggest event of the year! Showcase your robotics projects to the university community, industry professionals, and the public. Prizes will be awarded for the most innovative designs.
                </p>
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-all inline-flex items-center">
                  Register Now
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Annual Robotics Exhibition" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent md:bg-gradient-to-l"></div>
              </div>
            </div>
          </div>
          
          {/* Regular Events */}
          {eventsData.map((event) => (
            <div 
              key={event.id} 
              className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all group"
            >
              <div className="h-48 relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar size={16} className="mr-2 text-gray-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Clock size={16} className="mr-2 text-gray-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin size={16} className="mr-2 text-gray-400" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-400 mb-4">
                  {event.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-300">
                    <Users size={16} className="mr-2 text-gray-400" />
                    <span>{event.seats} seats available</span>
                  </div>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    Register
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-gray-900 rounded-xl border border-gray-700 text-center">
          <h3 className="text-xl font-semibold mb-4">Stay Updated on All Events</h3>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter to receive notifications about upcoming events, workshops, and competitions.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-4 py-3 bg-gray-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 border border-gray-700 mb-2 sm:mb-0 sm:flex-1"
            />
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md sm:rounded-l-none transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;