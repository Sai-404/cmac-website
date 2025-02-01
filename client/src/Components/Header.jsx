import React, { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header 
      className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-white shadow-sm"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center">
        {/* Logo */}
        <div className="flex-1">
          <h1 className="text-xl font-semibold">
            <button
              onClick={scrollToTop}
              className="text-black focus:outline-none"
            >
              CMAC
            </button>
          </h1>
        </div>

        {/* Centered Navigation */}
        <nav className="flex-1 flex justify-center space-x-8">
          <a href="#demo" className="text-black hover:text-gray-600">
            Demo
          </a>
          <a href="#features" className="text-black hover:text-gray-600">
            Features
          </a>
          <a href="#product" className="text-black hover:text-gray-600">
            Product
          </a>
          <a href="#about" className="text-black hover:text-gray-600">
            About
          </a>
        </nav>
        
        {/* Login Button - Right Side */}
        <div className="flex-1 flex justify-end">
          <button className={`px-4 py-1 rounded-full text-black border border-black hover:bg-gray-100 ${
            "bg-white"
          }`}>
            Log in
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


  

