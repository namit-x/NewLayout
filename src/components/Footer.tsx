import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Phone className="w-5 h-5" />, href: "#", label: "Phone" }
  ];

  return (
    <footer className="bg-neutral-900 text-gray-100">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className=" justify-evenly gap-12 lg:gap-24">
          {/* Company Info */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <img src="/Logo2.png" width={70} alt="Advance Architect Logo" className="filter brightness-0 invert opacity-90" />
              <h3 className="text-3xl font-playfair font-bold text-white">
                ADVANCE <span className="text-amber-500">ARCHITECT</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating extraordinary architectural experiences through innovative design,
              sustainable practices, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Contact and Social Section */}
          <div className="flex justify-between mt-10 space-y-8">
            {/* Contact Info */}
            <div className="space-y-5">
              <h4 className="text-xl font-playfair font-semibold text-amber-500">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">
                    14, First Floor, Saini Complex,<br />
                    Near Civil Hospital,<br />
                    Rohtak - 124001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-300">+91 89973 20043</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-500" />
                  <span className="text-gray-300">architectadvance@gmail.com</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-playfair font-semibold text-amber-500">Connect With Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-all duration-300 group border border-gray-700 hover:border-amber-500"
                  >
                    {React.cloneElement(link.icon, {
                      className: "w-6 h-6 group-hover:scale-110 group-hover:text-white transition-transform text-gray-300"
                    })}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm italic">
                Follow us for the latest updates and projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Advance Architect. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;