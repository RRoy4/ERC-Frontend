import React, { useState } from 'react';
import { Send, MapPin, Mail, Clock, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
    // Show success message
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Have questions about our club or interested in joining? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-xl p-8 h-full">
              <h3 className="text-xl font-semibold mb-6 font-heading">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <MapPin className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-gray-400">Engineering Building, Room 305<br />University Campus</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:club@techrobotics.edu" className="text-gray-400 hover:text-blue-400 transition-colors">
                      club@techrobotics.edu
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Club Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 2:00 PM - 8:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'youtube', 'github'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                    >
                      <span className="sr-only">{platform}</span>
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-700">
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  View on Google Maps
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 font-heading">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Club Membership</option>
                    <option value="event">Event Inquiry</option>
                    <option value="project">Project Collaboration</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <div className="flex items-center mb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
                  />
                  <label htmlFor="consent" className="ml-2 block text-sm text-gray-300">
                    I agree to the processing of my personal data in accordance with the club's privacy policy.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors inline-flex items-center text-white font-medium"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'How can I join the club?',
                a: 'Membership is open to all students interested in electronics and robotics. Simply fill out the membership form on our website or attend one of our weekly meetings to get started.'
              },
              {
                q: 'Do I need prior experience to join?',
                a: 'No prior experience is necessary! We welcome members of all skill levels, from beginners to advanced. We provide workshops and mentorship to help you learn and grow.'
              },
              {
                q: 'Is there a membership fee?',
                a: 'Yes, there is an annual membership fee of $20 which covers access to club equipment, components for starter projects, and participation in club events.'
              },
              {
                q: 'When and where do you meet?',
                a: 'We hold general meetings every Wednesday at 5:00 PM in Engineering Building Room 305. Project teams may have additional meeting times.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h4 className="text-lg font-medium mb-3">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;