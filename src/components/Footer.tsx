import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        "Architectural Design",
        "Interior Design",
        "Urban Planning",
        "3D Visualization",
        "Project Management",
        "Sustainability Consulting"
      ]
    },
    {
      title: "Projects",
      links: [
        "Residential",
        "Commercial",
        "Institutional",
        "Mixed-Use",
        "Renovation",
        "Landscape"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Our Team",
        "Careers",
        "Awards",
        "News",
        "Contact"
      ]
    }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className='flex items-end'>
                <img src="/Logo2.png" width={60} alt="" />
                <h3 className="text-3xl font-playfair font-bold mb-4">Advance Architect</h3>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed max-w-md">
                Creating extraordinary architectural experiences through innovative design,
                sustainable practices, and unwavering commitment to excellence.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">
                  123 Design Avenue, Architecture District, AD 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">+91 89973 20043</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">hello@advancearchitect.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="text-xl font-playfair font-semibold text-accent">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-accent transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/60 text-sm">
              © 2022 Advance Architect. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
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