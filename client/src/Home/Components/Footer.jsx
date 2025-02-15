import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    'Quick Links': [
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookies', href: '#' }
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

  return (
    <footer className="w-full bg-orange-50 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo and tagline section */}
          <div className="max-w-md text-center md:text-left">
            <a href="/" className="text-2xl font-bold text-gray-900">
              CMAC
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Empowering your financial future with innovative solutions.
            </p>
          </div>

          {/* Quick Links section - now with original text alignment */}
          <div className="mt-8 md:mt-0 text-center md:text-left">
            <h3 className="text-sm font-medium text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerSections['Quick Links'].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
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