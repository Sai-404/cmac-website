import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <header 
        className={`
          rounded-b-lg transition-all duration-300 inline-block
          ${isScrolled 
            ? 'bg-white shadow-sm' 
            : 'bg-[#f8f7f4]'
          }
        `}
      >
        <div className="px-4 py-2">
          <nav className="flex items-center">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-black"></div>
              <span className="text-sm font-medium text-black ml-2">CMAC</span>
            </a>
            
            {/* Main Navigation */}
            <div className="flex items-center ml-8 space-x-8">
              <a 
                href="/invest" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Invest
              </a>
              <a 
                href="/resources" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Resources
              </a>
              <a 
                href="/company" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Company
              </a>
              <a 
                href="/premium" 
                className="text-gray-900 hover:text-gray-600 text-sm font-medium"
              >
                Premium
              </a>
              <a
                href="/get-started"
                className="bg-gray-900 text-white px-4 py-1.5 rounded-lg hover:bg-gray-800 transition-colors duration-300 text-sm font-medium"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;