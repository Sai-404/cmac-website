import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-24 px-4">
            <Header />

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center">
            <svg
              viewBox="0 0 100 100"
              className="w-12 h-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50 95C75 95 95 75 95 50C95 25 75 5 50 5C25 5 5 25 5 50C5 75 25 95 50 95Z"
                fill="#15803d"
              />
              <path
                d="M30 35L70 35M30 50L70 50M30 65L70 65"
                stroke="white"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-semibold text-green-700">Contact Us</h1>
            <p className="text-green-600">We would love to hear from you!</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            <p className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Contact us for queries about upcoming events, collaborations, or recruitment.
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Share your suggestions for events you'd like us to organize.
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Send us your testimonials about our club and past events.
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Have an idea to improve our website? Let us know!
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Multiple form submissions are not allowed; we will reach out to you soon.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-green-600">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Full Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-green-600">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-green-600">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Reason for contacting"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-green-600">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                placeholder="Type your message here"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;