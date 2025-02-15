import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import { Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'Quick Links': [
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Our Team', href: '/ourTeam' }
    ],
  };

  const SocialIcon = ({ Icon }) => (
    <a
      href="#"
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      <Icon size={20} strokeWidth={1.5} />
    </a>
  );

  // Use useLocation to get the current route
  const location = useLocation();

  // Scroll to the top whenever the route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <footer className="w-full bg-orange-50 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and tagline section */}
          <div className="max-w-md text-center md:text-left">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              CMAC
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Empowering your financial future with innovative solutions.
            </p>
          </div>

          {/* Quick Links section */}
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerSections['Quick Links'].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and social icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2025 CMAC. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Instagram} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;