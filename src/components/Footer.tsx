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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Company Info - Takes full width on mobile, 2/3 on tablet, 7/12 on desktop */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <img 
                src="/Logo2.png" 
                width={50} 
                height={50}
                alt="Advance Architect Logo" 
                className="filter brightness-0 invert opacity-90 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18" 
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white">
                ADVANCE <span className="text-amber-500">ARCHITECT</span>
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl">
              Creating extraordinary architectural experiences through innovative design,
              sustainable practices, and unwavering commitment to excellence.
            </p>
          </div>

          {/* Contact and Social Section - Takes full width on mobile, 1/3 on tablet, 5/12 on desktop */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8 lg:gap-10">
            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-amber-500">Contact</h4>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    14, First Floor, Saini Complex,<br />
                    Near Civil Hospital,<br />
                    Rohtak - 124001
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                  <a 
                    href="tel:+918997320043" 
                    className="text-gray-300 hover:text-amber-500 transition-colors text-sm sm:text-base"
                  >
                    +91 89973 20043
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" />
                  <a 
                    href="mailto:architectadvance@gmail.com" 
                    className="text-gray-300 hover:text-amber-500 transition-colors text-sm sm:text-base break-all"
                  >
                    architectadvance@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 sm:space-y-5">
              <h4 className="text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-amber-500">Connect With Us</h4>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center 
                      hover:bg-amber-600 transition-all duration-300 group border border-gray-700 hover:border-amber-500
                      hover:scale-110 active:scale-95"
                  >
                    {React.cloneElement(link.icon, {
                      className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-110 group-hover:text-white transition-transform text-gray-300"
                    })}
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-xs sm:text-sm md:text-base italic leading-relaxed">
                Follow us for the latest updates and projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            <div className="text-gray-400 text-xs sm:text-sm md:text-base text-center sm:text-left">
              © {new Date().getFullYear()} Advance Architect. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-amber-500 transition-colors text-xs sm:text-sm md:text-base whitespace-nowrap"
              >
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