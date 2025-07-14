import React, { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowRight, Building, Hammer, Cog } from 'lucide-react';
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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current && navigationBoxRef.current) {
      const boxHeight = navigationBoxRef.current.offsetHeight;
      const sectionPosition = ref.current.offsetTop;
      const offsetPosition = sectionPosition - boxHeight - 20; // Reduced extra spacing

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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="h-screen w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bgImage})`
          }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={staggerChildren}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-light text-white tracking-wider mb-4"
              variants={fadeIn}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-gray-200 text-lg max-w-2xl mx-auto px-4"
              variants={fadeIn}
            >
              Where creativity meets precision in architectural design
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Floating Navigation Box */}
      <div ref={navigationBoxRef} className="container mx-auto px-4 -mt-12 sticky top-0 left-0 z-50 mb-12">
        <motion.div
          className="bg-background border-2 border-accent rounded-2xl shadow-xl p-4 flex flex-col md:flex-row justify-center gap-2 md:gap-6"
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
              className="flex-1 flex items-center gap-4 p-4 md:p-5 rounded-xl transition-all duration-300 hover:bg-accent/10 hover:shadow-sm group"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                {React.cloneElement(category.icon, { className: "w-6 h-6" })}
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
                <p className="text-sm text-muted-foreground">{category.tagline}</p>
              </div>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Architecture Section */}
      <section
        ref={architectureRef}
        className="min-h-screen flex items-center justify-center pt-10 pb-4 bg-surface"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full mb-4 bg-accent/10 text-accent">
              <Building className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-3">Architecture</h2>
            <p className="text-xl text-primary">Your Vision, Our Expertise</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.services[0].services_offered.map((service) => (
              <motion.div
                key={service.title}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col h-[100%]"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[9/8] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Section */}
      <section
        ref={engineeringRef}
        className="min-h-screen flex items-center justify-center pt-10 bg-primary text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full mb-4 bg-white/10">
              <Cog className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-3">Engineering</h2>
            <p className="text-xl">Structural Strength meets Thoughtful Design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicesData.services[1].services_offered.map((service) => (
              <motion.div
                key={service.title}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col bg-white/5 backdrop-blur-sm h-full"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[12/7] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-white/80 flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section
        ref={constructionRef}
        className="min-h-screen flex items-center justify-center pt-10 pb-20 bg-surface"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full mb-4 bg-accent/10 text-accent">
              <Hammer className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-bold mb-3">Construction</h2>
            <p className="text-xl text-primary">Building Your Dream, Brick by Brick</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {servicesData.services[2].services_offered.map((service) => (
              <motion.div
                key={service.title}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col border border-border h-full"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                transition={{ duration: 0.4 }}
              >
                <div className="aspect-[12/7] relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                  <p className="text-muted-foreground flex-1">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;