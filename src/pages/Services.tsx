import React, { useRef, useEffect, useState } from 'react';
import { Building, Hammer, Cog } from 'lucide-react';
import { motion } from 'framer-motion';
import bgImage from '/SHero.png'

const servicesData = {
  "services": [
    {
      "category": "Architecture",
      "tagline": "Your Vision, Our Expertise",
      "icon": <Building className="w-16 h-16" />,
      "services_offered": [
        {
          "title": "Master Planning & Consultancy",
          "description": "In-depth site analysis and feasibility advice tailored to your lifestyle needs.",
          "image": "Planning&Consultancy.jpg"
        },
        {
          "title": "Designing",
          "description": "From concept to construction drawings—balancing aesthetics, Vastu, and functionality.",
          "image": "Design.jpg"
        },
        {
          "title": "Interior",
          "description": "Interiors shaped by your life—refined, functional, and deeply personal.",
          "image": "interior.jpg"
        },
        {
          "title": "Exterior",
          "description": "Timeless facades and expressive forms—where architecture becomes identity.",
          "image": "Extrior.jpg"
        }
      ]
    },
    {
      "category": "Engineering",
      "tagline": "Structural Strength meets Thoughtful Design",
      "icon": <Cog className="w-16 h-16" />,
      "services_offered": [
        {
          "title": "Structural Designing",
          "description": "Safe, compliant calculations and material specs with clear, client-friendly explanations.",
          "image": "StructureDesigning.jpg"
        },
        {
          "title": "Site Visit & Supervision",
          "description": "Regular on-site checks, progress updates, and seamless coordination with contractors.",
          "image": "SiteVisit.jpg"
        }
      ]
    },
    {
      "category": "Construction",
      "tagline": "Building Your Dream, Brick by Brick",
      "icon": <Hammer className="w-16 h-16" />,
      "services_offered": [
        {
          "title": "Turnkey Projects",
          "description": "End-to-end execution—design, build, and handover, so you can move in worry-free.",
          "image": "TurnKey.jpg"
        },
        {
          "title": "Percentage Fee Contracts",
          "description": "A transparent fee structure linked to project milestones, ensuring your budget stays on track.",
          "image": "PercentageFee.jpg"
        }
      ]
    }
  ]
};

const Services = () => {
  const architectureRef = useRef<HTMLDivElement>(null);
  const engineeringRef = useRef<HTMLDivElement>(null);
  const constructionRef = useRef<HTMLDivElement>(null);
  const navigationBoxRef = useRef<HTMLDivElement>(null);
  const [viewportHeight, setViewportHeight] = useState(0);
  const [navigationHeight, setNavigationHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight);
      if (navigationBoxRef.current) {
        setNavigationHeight(navigationBoxRef.current.offsetHeight);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current && navigationBoxRef.current) {
      const headerHeight = 80; // Approximate header height
      const navigationHeight = navigationBoxRef.current.offsetHeight;
      const totalOffset = headerHeight + navigationHeight -90;
      const sectionPosition = ref.current.offsetTop;
      const offsetPosition = sectionPosition - totalOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Calculate section height to ensure proper viewport fitting
  const sectionHeight = viewportHeight > 0 ? Math.max(viewportHeight - navigationHeight - 80, 600) : 'auto';

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Hero Section */}
      <div className="h-[70vh] sm:h-[80vh] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center px-4">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-6xl font-playfair text-white tracking-wider mb-4"
              variants={fadeIn}
            >
              <span className='text-gradient'>Our</span> Services
            </motion.h1>
            <motion.p
              className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto px-4"
              variants={fadeIn}
            >
              Where creativity meets precision in architectural design
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Floating Navigation Box */}
      <div ref={navigationBoxRef} className="container mx-auto px-4 -mt-8 sm:-mt-12 sticky top-0 left-0 z-50 mb-4 sm:mb-8">
        <motion.div
          className="bg-background border-2 border-accent rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 md:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {servicesData.services.map((category) => (
            <button
              key={category.category}
              onClick={() => {
                if (category.category === "Architecture") scrollToSection(architectureRef);
                if (category.category === "Engineering") scrollToSection(engineeringRef);
                if (category.category === "Construction") scrollToSection(constructionRef);
              }}
              className="flex-1 flex items-center gap-2 sm:gap-4 p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl transition-all duration-300 hover:bg-accent/10 hover:shadow-sm group"
            >
              <div className="p-2 sm:p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors flex-shrink-0">
                {React.cloneElement(category.icon, { className: "w-4 h-4 sm:w-5 h-5 md:w-6 h-6" })}
              </div>
              <div className="text-left min-w-0 flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary truncate">{category.category}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">{category.tagline}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Architecture Section */}
      <section
        ref={architectureRef}
        className="flex items-center justify-center py-8 sm:py-12 bg-surface"
        style={{ minHeight: sectionHeight }}
      >
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-block p-3 sm:p-4 rounded-full mb-4 bg-accent/10 text-accent">
              <Building className="w-6 sm:w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 sm:mb-3">ARCHITECTURE</h2>
            <p className="text-lg sm:text-xl text-primary">Your Vision, Our Expertise</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-h-[60vh] overflow-y-auto sm:max-h-none sm:overflow-visible">
            {servicesData.services[0].services_offered.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="aspect-[4/3] sm:aspect-[9/8] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-1 line-clamp-3">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section
        ref={engineeringRef}
        className="flex items-center justify-center py-8 sm:py-12 bg-primary text-white"
        style={{ minHeight: sectionHeight }}
      >
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-block p-3 sm:p-4 rounded-full mb-4 bg-white/10">
              <Cog className="w-6 sm:w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Engineering</h2>
            <p className="text-lg sm:text-xl">Structural Strength meets Thoughtful Design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto max-h-[60vh] overflow-y-auto md:max-h-none md:overflow-visible">
            {servicesData.services[1].services_offered.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col bg-white/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="aspect-[4/3] sm:aspect-[12/7] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-white/80 flex-1 line-clamp-3">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section
        ref={constructionRef}
        className="flex items-center justify-center py-8 sm:py-12 pb-12 sm:pb-20 bg-surface"
        style={{ minHeight: sectionHeight }}
      >
        <div className="container mx-auto px-4 w-full">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-block p-3 sm:p-4 rounded-full mb-4 bg-accent/10 text-accent">
              <Hammer className="w-6 sm:w-8 h-8" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">Construction</h2>
            <p className="text-lg sm:text-xl text-primary">Building Your Dream, Brick by Brick</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto max-h-[60vh] overflow-y-auto md:max-h-none md:overflow-visible">
            {servicesData.services[2].services_offered.map((service, index) => (
              <motion.div
                key={service.title}
                className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col border border-border"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
              >
                <div className="aspect-[4/3] sm:aspect-[12/7] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground flex-1 line-clamp-3">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;