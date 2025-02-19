import React from 'react';
import { Mail } from 'lucide-react';
import Header from "../Home/Components/Header.jsx";
import Footer from "../Home/Components/Footer.jsx";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED]">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The Council for Mathematics and Advanced Computing welcomes your queries and feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact us for:</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#AD0000] rounded-full mt-2"></span>
                <p className="text-gray-700">Queries about upcoming events, collaborations, or recruitment</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#AD0000] rounded-full mt-2"></span>
                <p className="text-gray-700">Suggestions for events you'd like us to organize</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#AD0000] rounded-full mt-2"></span>
                <p className="text-gray-700">Testimonials about our club and past events</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-[#AD0000] rounded-full mt-2"></span>
                <p className="text-gray-700">Ideas to improve our website</p>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col items-center justify-center">
            <div className="bg-[#FEF1F2] w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-[#AD0000]" />
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Email Us</h2>
            <p className="text-gray-600 text-center mb-6">
              We'll get back to you as soon as possible.
            </p>

            <a
              href="mailto:cmacsrm@gmail.com"
              className="inline-flex items-center gap-2 bg-[#AD0000] text-white px-8 py-4 rounded-lg hover:bg-[#AD0000] transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              cmacsrm@gmail.com
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;