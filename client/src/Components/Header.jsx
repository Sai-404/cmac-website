import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full bg-[#f8f7f4] py-4 shadow-sm z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              CMAC
            </a>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/invest" className="text-gray-700 hover:text-gray-900">
              Invest
            </a>
            <a href="/resources" className="text-gray-700 hover:text-gray-900">
              Resources
            </a>
            <a href="/company" className="text-gray-700 hover:text-gray-900">
              Company
            </a>
            <a href="/premium" className="text-gray-700 hover:text-gray-900">
              Premium
            </a>
          </div>

          {/* CTA Button */}
          <div>
            <a
              href="/get-started"
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;