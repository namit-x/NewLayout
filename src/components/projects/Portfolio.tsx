import { useEffect, useRef, useState } from 'react';
import { AspectRatio } from '../../components/ui/aspect-ratio';
import portfolioHeroBg from '/PHero.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Updated projects data structure to include multiple images
const projects = [
  {
    id: 1,
    title: "Residential",
    description: "From elegant villas to modern urban homes, we design living spaces that reflect personal lifestyles and stand the test of time. Comfort meets creativity in every corner.",
    images: ['p1.png', 'p1-2.png', 'p1-3.png', 'p1-4.png'], // Multiple images
    year: "2023",
    location: "Jaipur, Rajasthan, India"
  },
  {
    id: 2,
    title: "Commercial",
    description: "Functionality and brand identity come together in our commercial projects—be it retail outlets, office complexes, or hospitality environments. We deliver design that works and sells.",
    images: ["/p2.png", "/p2-2.png", "/p2-3.png"],
    year: "2023",
    location: "Bengaluru, Karnataka, India"
  },
  {
    id: 3,
    title: "Industrial",
    description: "With a deep understanding of technical requirements and operational flow, our industrial architecture focuses on efficiency, durability, and scalable layouts that support growth.",
    images: ["/p3.png", "/p3-2.png", "/p3-3.png"],
    year: "2022",
    location: "Pune, Maharashtra, India"
  },
  {
    id: 4,
    title: "Renovation",
    description: "Old becomes new. We breathe life into aged structures—honoring their character while integrating modern standards. Ideal for clients who want transformation without compromise.",
    images: ["/p4.png", "/p4-2.png", "/p4-3.png"],
    year: "2023",
    location: "Alibaug, Maharashtra, India"
  }
];

// ImageSlider component
const ImageSlider = ({ images, isOdd }: { images: string[], isOdd: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // The minimum distance to trigger a swipe
  const minSwipeDistance = 50;

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null); // Reset touchEnd
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-surface-elevated shadow-lg"
      ref={sliderRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <AspectRatio ratio={3 / 2} className="bg-muted">
        <img
          src={images[currentIndex]}
          alt={`Project image ${currentIndex + 1}`}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 select-none"
          loading="lazy"
          draggable="false" // Prevent default drag behavior
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </AspectRatio>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isOdd ? 'bg-primary/80 text-white' : 'bg-white/80 text-primary'}`}
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${isOdd ? 'bg-primary/80 text-white' : 'bg-white/80 text-primary'}`}
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? (isOdd ? 'bg-primary w-4' : 'bg-white w-4') : 'bg-white/50'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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
        className="py-[75px] relative"
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
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
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
                        <span className='ml-4'>{project.year}</span>
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
                  </div>

                  {/* Project Image Slider */}
                  <div className={`${isOdd ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="group relative overflow-hidden rounded-2xl bg-surface-elevated shadow-lg">
                      <ImageSlider images={project.images} isOdd={isOdd} />

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
    </section>
  );
};

export default Portfolio;
