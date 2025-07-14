import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
    { name: 'Contact', href: '#' },
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
              Advance Architect
            </div>
          </div>

          {/* Centered Navigation */}
          <div className="absolute left-0 right-0 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${isScrolled ? "text-black" : "text-white"} hover:text-primary transition-colors duration-200 font-medium`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Right Side */}
          <div className="hidden md:block z-10">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground border-primary/20"
            >
              Start Project
            </Button>
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
