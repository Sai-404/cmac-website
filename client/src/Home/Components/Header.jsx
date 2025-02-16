import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../../assets/logo.png';
import './Header.css'; // Import the CSS file

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

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
    navigate("/"); // Redirect to the home page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll to the top
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
            <button
              onClick={scrollToTop}
              className="focus:outline-none transition-colors duration-200"
            >
              <img
                src={logo}
                alt="Logo"
                className="h-16 w-auto" // Increased height from h-12 to h-16
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center space-x-8">
            <Link to="/about" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
              About
            </Link>
            <Link to="/contact" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
              Contact
            </Link>
            <Link to="/ourTeam" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
              Our Team
            </Link>
          </nav>

          {/* Desktop Apply Now Button */}
          <div className="hidden md:block">
            <button className="px-4 py-1 rounded-full text-white font-bold relative overflow-hidden bg-[#0A1A1F] hover:bg-[#0A1A1F] transition-all duration-300">
              <span className="relative z-10">Apply Now</span>
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-40 animate-shimmer"></span>
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
              <Link to="/about" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
                About
              </Link>
              <Link to="/contact" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
                Contact
              </Link>
              <Link to="/ourTeam" className="text-black hover:text-gray-600 transition-colors duration-200 font-bold">
                Our Team
              </Link>
              <button className="w-full px-4 py-1 rounded-full text-black border border-black hover:bg-gray-100 transition-colors duration-200 bg-white">
                Apply Now
              </button>
 </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;