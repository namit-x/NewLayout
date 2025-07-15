import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logoUrl = isScrolled ? 'Logo.png' : 'Logo2.png';

  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 relative">
          {/* Logo + Firm Name with Borders */}
          <div className="flex items-end gap-1.5 sm:gap-2 md:gap-3 z-10 flex-shrink-0 relative pb-2">
            <img
              className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 cursor-pointer lg:w-10 lg:h-10 xl:w-16 xl:h-16"
              onClick={() => { navigate('/') }}
              src={logoUrl}
              alt="Logo"
            />
            <div className="flex flex-col">
              <div
                className={`font-playfair font-semibold tracking-tight cursor-pointer ${isScrolled ? 'text-black' : 'text-white'
                  } text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl whitespace-nowrap`}
                onClick={() => { navigate('/') }}
              >
                ADVANCE ARCHITECT
              </div>
              {/* Bottom Borders and WORKINGGROUP Text */}
              <div className={`flex flex-col items-center ${isScrolled ? ' text-black shadow-sm' : 'bg-transparent text-white'}`}>
                <div className={`h-[.25px] w-full ${isScrolled? 'bg-black': 'bg-white'}`}></div>
                <div className={`h-[.25px] w-[90%] mt-[3px] ${isScrolled? 'bg-black': 'bg-white'}`}></div>
                <div className="text-[8px] tracking-widest uppercase mt-1 ml-px opacity-70 text-center ">
                <span className="whitespace-pre">W  O  R  K  I  N   G        G  R  O  U  P</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Nav - Hidden on mobile/tablet, shown on desktop */}
          <div className="absolute left-0 right-0 flex justify-center">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-200 ease-in-out 
                    ${isScrolled ? "text-black" : "text-white"} 
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-600 
                    text-sm xl:text-base 2xl:text-lg whitespace-nowrap`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Buttons - Responsive sizing */}
          <div className="flex gap-1.5 sm:gap-2 md:gap-3 lg:gap-4 items-center relative">
            {/* Call Button */}
            <a
              href="tel:+918529990100"
              className={`relative flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 
                px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 xl:px-6 xl:py-3.5
                ${isScrolled ? 'text-black border-gray-300' : 'text-white border-white/30'} 
                text-xs sm:text-sm md:text-base lg:text-base xl:text-lg
                border rounded-md sm:rounded-lg bg-transparent hover:bg-primary/10 transition-colors duration-300 z-20`}
            >
              <Phone className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline md:hidden">Call</span>
              <span className="hidden md:inline">Call Now</span>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/918529990100"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center gap-1 sm:gap-1.5 md:gap-2 
                px-2 py-1 xs:px-2.5 xs:py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 xl:px-6 xl:py-3.5
                bg-green-400 rounded-md sm:rounded-lg hover:bg-green-500 transition-colors duration-300 
                text-white font-medium sm:font-semibold md:font-bold z-20 
                text-xs sm:text-sm md:text-base lg:text-base xl:text-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden sm:inline md:hidden">Start</span>
              <span className="hidden md:inline lg:hidden">Start Project</span>
              <span className="hidden lg:inline">Start Project</span>
            </a>
          </div>

          {/* Mobile Menu Toggle - Visible on mobile and tablet */}
          <button
            className="lg:hidden p-1.5 md:p-2 z-10 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 md:w-6 md:h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            ) : (
              <Menu className={`w-5 h-5 md:w-6 md:h-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu Dropdown - Enhanced for tablet and mobile */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 md:py-6 border-t rounded-lg ${isScrolled ? 'border-gray-200 bg-white' : 'border-white/20 bg-black/20 backdrop-blur-md'}`}>
            <div className="flex flex-col space-y-3 md:space-y-4 p-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-medium py-2 md:py-3 transition-colors duration-200 text-base md:text-lg
                    ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'}`}
                >
                  {item.name}
                </a>
              ))}

              {/* Mobile Buttons - Full width on small screens */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-4 md:mt-6">
                <a
                  href="tel:+918529990100"
                  className={`flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4
                    ${isScrolled ? 'text-black border-gray-300' : 'text-white border-white/30'} 
                    border rounded-lg hover:bg-primary/10 transition-colors duration-300 
                    text-base md:text-lg font-medium`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918529990100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 md:px-6 md:py-4
                    bg-green-400 hover:bg-green-500 text-white font-medium rounded-lg 
                    text-base md:text-lg transition-colors duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                    className="w-5 h-5 md:w-6 md:h-6 fill-current">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Start Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;