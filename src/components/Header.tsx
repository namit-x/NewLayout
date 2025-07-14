import { useState, useEffect } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { Button } from '../components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let logoUrl = isScrolled ? 'Logo.png' : 'Logo2.png'

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
      <div className="container mx-auto container-padding">
        <nav className="flex items-center justify-between h-20 relative">
          {/* Logo - Left Side */}
          <div className="flex items-center z-10">
            <div>
              <img className='w-10' src={logoUrl} alt="Logo" />
            </div>
            <div className={`text-2xl font-playfair font-semibold ${isScrolled ? "text-black" : "text-white"}`}>
              ADVANCE ARCHITECT
            </div>
          </div>

          {/* Centered Navigation */}
          <div className="absolute left-0 right-0 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    ${isScrolled ? "text-black" : "text-white"} 
                    hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-600
                    transition-all duration-200 ease-in-out 
                    font-medium
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            {/* Call Now Button */}
            <a
              href="tel:+918529990100"
              className="flex items-center justify-center text-white gap-2 px-6 py-3 bg-transparent border border-white rounded-lg hover:bg-primary/10 transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>

            {/* Start Project Button (WhatsApp) */}
            <a
              href="https://wa.me/918529990100"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-green-400 rounded-lg hover:bg-green-400 transition-colors duration-300 text-white font-extrabold"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-current cursor-pointer">
                <path className='cursor-pointer' d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Start Project

            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="outline"
                className="w-fit hover:bg-primary hover:text-primary-foreground border-primary/20 mt-4"
              >
                Start Project
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
