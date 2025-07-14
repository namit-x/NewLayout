import { useEffect, useRef } from 'react';
import { AspectRatio } from '../../components/ui/aspect-ratio';
import portfolioHeroBg from '/PHero.png'

const projects = [
  {
    id: 1,
    title: "Meridian Residence",
    category: "Residential",
    description: "A stunning modern home that seamlessly blends contemporary design with natural elements. Featuring expansive glass facades and sustainable materials, this residence creates a harmonious connection between indoor and outdoor living spaces.",
    image: 'p1.png',
    year: "2023",
    location: "California, USA"
  },
  {
    id: 2,
    title: "Nova Corporate Center",
    category: "Commercial",
    description: "An innovative office complex designed to foster collaboration and creativity. The building's glass and steel structure maximizes natural light while providing flexible workspaces that adapt to the evolving needs of modern businesses.",
    image: "/p2.png",
    year: "2023",
    location: "New York, USA"
  },
  {
    id: 3,
    title: "Urban Gardens Complex",
    category: "Mixed-Use",
    description: "A revolutionary approach to urban living that integrates vertical gardens and sustainable design principles. This multi-family complex demonstrates how architecture can promote environmental consciousness while creating vibrant communities.",
    image: "/p3.png",
    year: "2022",
    location: "Portland, USA"
  },
  {
    id: 4,
    title: "Azure Villa",
    category: "Luxury Residential",
    description: "An architectural masterpiece that epitomizes luxury living with its infinity pool, open-plan design, and premium materials. The villa's seamless indoor-outdoor flow creates an unparalleled living experience in a stunning natural setting.",
    image: "/p4.png",
    year: "2023",
    location: "Miami, USA"
  },
  {
    id: 5,
    title: "Cultural Arts Center",
    category: "Public/Cultural",
    description: "A dynamic cultural hub featuring innovative curved architecture and flexible performance spaces. The building's design reflects the creative spirit of the community while providing state-of-the-art facilities for arts and cultural programs.",
    image: "/p5.png",
    year: "2022",
    location: "Austin, USA"
  },
  {
    id: 6,
    title: "EcoLiving Residential",
    category: "Sustainable Housing",
    description: "A pioneering example of sustainable architecture featuring green roofs, solar integration, and eco-friendly materials. This project demonstrates our commitment to environmental responsibility without compromising on design excellence.",
    image: "/p6.png",
    year: "2023",
    location: "Seattle, USA"
  }
];

const Portfolio = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-16">
      {/* Hero Section */}
      <section
        className="py-20 relative"
        style={{
          backgroundImage: `url(${portfolioHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40"></div>
        <div className="container pt-20 mx-auto container-padding mb-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className='text-gradient'>Portfolio</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto" style={{ animationDelay: '0.2s' }}>
              Discover our collection of architectural masterpieces that redefine spaces and inspire communities.
              Each project tells a unique story of innovation, sustainability, and timeless design.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <div className="space-y-32">
        {projects.map((project, index) => {
          const isOdd = index % 2 === 0;

          return (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className={`container mx-auto container-padding ${index % 2 === 0 ? 'bg-background' : 'bg-primary text-white rounded-2xl'
                } py-16 -mx-4`}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${isOdd ? '' : 'lg:grid-flow-col-dense'
                  }`}>

                  {/* Project Description */}
                  <div className={`space-y-6 ${isOdd ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2">
                      <div className={`flex items-center gap-3 text-sm font-medium ${index % 2 === 0 ? 'text-primary' : 'text-primary-foreground/80'
                        }`}>
                        <span>{project.category}</span>
                        <span className={`w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-primary-foreground/80'
                          }`}></span>
                        <span>{project.year}</span>
                        <span className={`w-1 h-1 rounded-full ${index % 2 === 0 ? 'bg-primary' : 'bg-primary-foreground/80'
                          }`}></span>
                        <span>{project.location}</span>
                      </div>
                      <h2 className={`text-4xl lg:text-5xl font-playfair font-bold leading-tight ${index % 2 === 0 ? 'text-primary' : 'text-white'
                        }`}>
                        {project.title}
                      </h2>
                    </div>

                    <p className={`text-lg leading-relaxed ${index % 2 === 0 ? 'text-text-secondary' : 'text-primary-foreground/90'
                      }`}>
                      {project.description}
                    </p>

                    <div className="pt-4">
                      <button className={`group inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300 ${index % 2 === 0 ? 'text-primary' : 'text-primary-foreground'
                        }`}>
                        View Project Details
                        <svg
                          className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Project Image - Remains unchanged */}
                  <div className={`${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-surface-elevated shadow-lg">
                      <AspectRatio ratio={3 / 2} className="bg-muted">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </AspectRatio>

                      {/* Project number overlay */}
                      <div className={`absolute top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${index % 2 === 0 ? 'bg-primary/90 text-white' : 'bg-white/90 text-primary'
                        } backdrop-blur-sm`}>
                        {String(project.id).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="container mx-auto container-padding mt-32">
        <div className="text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6">
            Ready to Create Your Vision?
          </h2>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your architectural dreams to life with innovative design and exceptional craftsmanship.
          </p>
          <button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 rounded-lg font-medium transition-colors duration-300 hover:shadow-lg transform hover:-translate-y-1 transition-transform">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;