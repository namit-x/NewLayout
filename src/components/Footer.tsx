import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import clsx from 'clsx';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/advancearchitect?igsh=eHhpbHJ1NTYyczQ3&utm_source=qr",
      label: "Instagram",
      color: "border-pink-500 hover:bg-pink-500"
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/share/16rBLsQmXw/?mibextid=wwXIfr",
      label: "Facebook",
      color: "border-blue-500 hover:bg-blue-500"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      href: "tel:+918529990100",
      label: "Phone",
      color: "border-green-500 hover:bg-green-500"
    }
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
                width={100}
                height={100}
                alt="Advance Architect Logo"
                className="filter brightness-0 invert opacity-90 w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-playfair font-bold text-white">
                ADVANCE <span className="text-amber-500">ARCHITECT</span>
                {/* Bottom Borders and WORKINGGROUP Text */}
                <div className={`flex flex-col items-center text-white`}>
                  <div className={`h-[.25px] w-full bg-white`}></div>
                  <div className={`h-[.25px] w-[90%] mt-[3px] bg-white`}></div>
                  <div className="text-[12px] tracking-widest uppercase opacity-70 text-center -mt-1">
                  <span className="whitespace-pre">W  O  R  K  I  N   G        G  R  O  U  P</span>
                  </div>
                </div>
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
                    href="tel:+918529990100"
                    className="text-gray-300 hover:text-amber-500 transition-colors text-sm sm:text-base"
                  >
                    +91 85299 90100
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
                    target='_blank'
                    aria-label={link.label}
                    className={clsx(
                      'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center',
                      'transition-all duration-300 group hover:scale-110 active:scale-95',
                      link.color
                    )}
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
    </footer>
  );
};

export default Footer;