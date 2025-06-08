import React, { useState } from 'react';
import { Send, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Contact Us</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Have questions about our club? Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6 font-heading">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-gray-700 p-3 rounded-lg mr-4">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <a
                        href="mailto:elecrobo.club@iitb.ac.in"
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        elecrobo.club@iitb.ac.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <h4 className="font-medium mb-4">Connect With Us</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.facebook.com/share/16mzHh1sFB/"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Facebook</span>
                      <i className="fab fa-facebook"></i>
                    </a>

                    <a
                      href="https://www.linkedin.com/company/electronics-and-robotics-club-iit-bombay/posts/?feedView=all"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <i className="fab fa-linkedin"></i>
                    </a>

                    <a
                      href="https://www.instagram.com/erc.iitb"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">Instagram</span>
                      <i className="fab fa-instagram"></i>
                    </a>

                    <a
                      href="https://www.youtube.com/@ERC-IITB"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">YouTube</span>
                      <i className="fab fa-youtube"></i>
                    </a>

                    <a
                      href="https://github.com/erciitb"
                      className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="sr-only">GitHub</span>
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <h4 className="font-medium mb-2">Our Location</h4>
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    title="Tinkerers' Lab"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.8634520068786!2d72.9143248!3d19.1340629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f5e4ac7efd%3A0xd9d02f29b4617fb4!2sTinkerers'%20Laboratory!5e0!3m2!1sen!2sin!4v1717843912345!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <a
                  href="https://www.google.com/maps/place/Tinkerers'+Laboratory/@19.1340629,72.9143248,15.96z/data=!4m6!3m5!1s0x3be7c7f5e4ac7efd:0xd9d02f29b4617fb4!8m2!3d19.1337854!4d72.9167784!16s%2Fg%2F1pycxwth8?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  View on Google Maps <ExternalLink size={16} className="ml-2" />
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
      </div>
    </section>
  );
};

export default Contact;
