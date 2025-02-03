import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Add this import

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
      <header
          className={`w-full py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled || isMenuOpen ? "bg-white shadow-md" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold">
                <button
                    onClick={scrollToTop}
                    className="text-black hover:text-gray-700 focus:outline-none transition-colors duration-200"
                >
                  CMAC
                </button>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-center space-x-8">
              <Link to="/demo" className="text-black hover:text-gray-600 transition-colors duration-200">
                Demo
              </Link>
              <Link to="/features" className="text-black hover:text-gray-600 transition-colors duration-200">
                Features
              </Link>
              <Link to="/product" className="text-black hover:text-gray-600 transition-colors duration-200">
                Product
              </Link>
              <Link to="/about" className="text-black hover:text-gray-600 transition-colors duration-200">
                About
              </Link>
            </nav>

            {/* Desktop Login Button */}
            <div className="hidden md:block">
              <button className="px-4 py-1 rounded-full text-black border border-black hover:bg-gray-100 transition-colors duration-200 bg-white">
                Log in
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-black focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className="md:hidden mt-4">
                <nav className="flex flex-col space-y-4">
                  <Link to="/demo" className="text-black hover:text-gray-600 transition-colors duration-200">
                    Demo
                  </Link>
                  <Link to="/features" className="text-black hover:text-gray-600 transition-colors duration-200">
                    Features
                  </Link>
                  <Link to="/product" className="text-black hover:text-gray-600 transition-colors duration-200">
                    Product
                  </Link>
                  <Link to="/about" className="text-black hover:text-gray-600 transition-colors duration-200">
                    About
                  </Link>
                  <button className="w-full px-4 py-1 rounded-full text-black border border-black hover:bg-gray-100 transition-colors duration-200 bg-white">
                    Log in
                  </button>
                </nav>
              </div>
          )}
        </div>
      </header>
  );
};

export default Header;