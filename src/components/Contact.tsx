import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_hocfe6g',     // 🛠️ Replace with your EmailJS Service ID
      'template_7d5au78',    // 🛠️ Replace with your Template ID
      formData,
      'iQ8oZeIUKrSv_e8BA'      // 🛠️ Replace with your Public Key
    )
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('FAILED...', error);
        alert('Oops! Something went wrong.');
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div  className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 font-heading">Contact Us</h2>
          <div id="cus" className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg">
            Curious about us? Got questions, ideas, or need resources? Drop us a message -  we're always happy to help.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-800 rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-6 font-heading">Get In Touch</h3>
                <div className="flex items-start mb-6">
                  <div className="bg-gray-700 p-3 rounded-lg mr-4">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <a href="mailto:elecrobo.club@iitb.ac.in" className="text-gray-400 hover:text-blue-400 transition-colors">
                      elecrobo.club@iitb.ac.in
                    </a>
                  </div>
                </div>

                <h4 className="font-medium mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {/* Social Links */}
                  <a href="https://www.instagram.com/erc.iitb" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 text-2xl">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                   <a href="https://www.linkedin.com/company/electronics-and-robotics-club-iit-bombay/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 text-2xl">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="https://github.com/erciitb" target="_blank" rel="noopener noreferrer" className="bg-gray-700 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 text-2xl">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
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
                <a href="https://www.google.com/maps/place/Tinkerers'+Laboratory/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
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
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 w-full"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 w-full"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject (e.g., Request for resources)"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mb-6 px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 w-full"
                />

                <textarea
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mb-6 px-4 py-3 bg-gray-700 text-white rounded-md border border-gray-600 w-full resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md inline-flex items-center"
                >
                  Send Message <Send size={16} className="ml-2" />
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
