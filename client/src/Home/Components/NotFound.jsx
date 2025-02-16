import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF7ED] flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="bg-white rounded-lg shadow-lg p-10 text-center transition-transform transform hover:scale-105">
          <div className="mb-8">
            {/* 404 SVG */}
            <svg
              className="w-64 h-64 mx-auto mb-6"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20Z"
                fill="#E5E7EB"
              />
              <text
                x="100"
                y="120"
                fontSize="48"
                fontWeight="bold"
                fill="#4B5563"
                textAnchor="middle"
              >
                404
              </text>
            </svg>
            
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Oops! It seems you've stumbled upon a page that doesn't exist. 
              Don't worry though, CMAC's got your back - let's get you back on track.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
            >
              <Home className="w-5 h-5" />
              Back to Homepage
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;