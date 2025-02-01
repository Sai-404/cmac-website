import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-start">
          {/* Logo */}
          <div className="w-48">
            <a href="/" className="text-black text-2xl font-bold">
              CMAC
            </a>
          </div>

          {/* Navigation Sections */}
          <div className="flex flex-1 justify-between max-w-4xl">
            {/* Product Section */}
            <div className="space-y-3">
              <h3 className="text-gray-500 font-medium">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Stock</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Crypto</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Premium</a></li>
              </ul>
            </div>

            {/* Resources Section */}
            <div className="space-y-3">
              <h3 className="text-gray-500 font-medium">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-800 hover:text-gray-600">About Us</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Careers</a></li>
              </ul>
            </div>

            {/* Quick links Section */}
            <div className="space-y-3">
              <h3 className="text-gray-500 font-medium">Quick links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Themes</a></li>
                <li><a href="#" className="text-gray-800 hover:text-gray-600">Glossary</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="space-y-3">
              <h3 className="text-gray-500 font-medium">Contact us</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085a4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;