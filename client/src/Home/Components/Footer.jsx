import React from 'react';
import { Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    Product: [
      { name: 'Stock', href: '#' },
      { name: 'Crypto', href: '#' },
      { name: 'Premium', href: '#' },
      { name: 'Features', href: '#' },
      { name: 'Solutions', href: '#' }
    ],
    Resources: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Help Centre', href: '#' },
      { name: 'Media Kit', href: '#' }
    ],
    'Quick Links': [
      { name: 'Themes', href: '#' },
      { name: 'Glossary', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Support', href: '#' }
    ],
    Legal: [
      { name: 'Terms and Conditions', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Cookies', href: '#' }
    ]
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
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and tagline section */}
          <div className="col-span-1 text-center md:text-left">
            <a href="/" className="text-2xl font-bold text-gray-900">
              CMAC
            </a>
            <p className="mt-4 text-sm text-gray-600">
              Empowering your financial future with innovative solutions.
            </p>
          </div>

          {/* Navigation sections */}
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="col-span-1 text-center md:text-left">
              <h3 className="text-sm font-medium text-gray-900 mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
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
          ))}
        </div>

        {/* Bottom section with copyright and social icons */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-600">
              © 2024 CMAC. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <SocialIcon Icon={Twitter} />
              <SocialIcon Icon={Linkedin} />
              <SocialIcon Icon={Facebook} />
              <SocialIcon Icon={Instagram} />
              <SocialIcon Icon={Github} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;