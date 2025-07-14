import Header from '../components/Header';
import Footer from '../components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Button } from '../components/ui/button';
import { ArrowRight, Building, Hammer, Cog } from 'lucide-react';
import { motion } from 'framer-motion';

const servicesData = {
  "services": [
    {
      "category": "Architecture",
      "tagline": "Your Vision, Our Expertise",
      "icon": <Building className="w-16 h-16" />,
      "image": "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=600&fit=crop",
      "services_offered": [
        {
          "title": "Master Planning & Consultancy",
          "description": "In-depth site analysis and feasibility advice tailored to your lifestyle needs.",
          "image": "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=400&h=300&fit=crop"
        },
        {
          "title": "Designing",
          "description": "From concept to construction drawings—balancing aesthetics, Vastu, and functionality.",
          "image": "https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=400&h=300&fit=crop"
        },
        {
          "title": "Interior",
          "description": "Interiors shaped by your life—refined, functional, and deeply personal.",
          "image": "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&h=300&fit=crop"
        },
        {
          "title": "Exterior",
          "description": "Timeless facades and expressive forms—where architecture becomes identity.",
          "image": "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      "category": "Engineering",
      "tagline": "Structural Strength meets Thoughtful Design",
      "icon": <Cog className="w-16 h-16" />,
      "image": "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
      "services_offered": [
        {
          "title": "Structural Designing",
          "description": "Safe, compliant calculations and material specs with clear, client-friendly explanations.",
          "image": "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=400&h=300&fit=crop"
        },
        {
          "title": "Site Visit & Supervision",
          "description": "Regular on-site checks, progress updates, and seamless coordination with contractors.",
          "image": "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=300&fit=crop"
        }
      ]
    },
    {
      "category": "Construction",
      "tagline": "Building Your Dream, Brick by Brick",
      "icon": <Hammer className="w-16 h-16" />,
      "image": "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop",
      "services_offered": [
        {
          "title": "Turnkey Projects",
          "description": "End-to-end execution—design, build, and handover, so you can move in worry-free.",
          "image": "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=400&h=300&fit=crop"
        },
        {
          "title": "Percentage Fee Contracts",
          "description": "A transparent fee structure linked to project milestones, ensuring your budget stays on track.",
          "image": "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop"
        }
      ]
    }
  ]
};

const Services = () => {

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
      <div className="relative h-[60vh] bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80)'
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

      {/* Services Categories */}
      {servicesData.services.map((category, categoryIndex) => (
        <section
          key={category.category}
          className={`section-padding ${categoryIndex % 2 === 0 ? 'bg-surface' : 'bg-primary text-primary-foreground'
            }`}
        >
          <div className="container mx-auto container-padding">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div className={`space-y-8 ${categoryIndex % 2 === 1 ? 'lg:order-2' : ''}`}>
                {/* Icon & Title */}
                <div className="space-y-6">
                  <div className={`${categoryIndex % 2 === 0 ? 'text-accent' : 'text-accent'}`}>
                    {category.icon}
                  </div>

                  <div>
                    <h2 className={`text-4xl md:text-5xl font-playfair font-bold mb-4 animate-fade-in ${categoryIndex % 2 === 0 ? 'text-primary' : 'text-primary-foreground'
                      }`}>
                      {category.category}
                    </h2>
                    <p className={`text-xl md:text-2xl font-medium animate-slide-up ${categoryIndex % 2 === 0 ? 'text-accent' : 'text-accent'
                      }`}>
                      {category.tagline}
                    </p>
                  </div>
                </div>

                {/* Services Accordion */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    {category.services_offered.map((service, serviceIndex) => (
                      <AccordionItem
                        key={service.title}
                        value={`${category.category}-${serviceIndex}`}
                        className={`border rounded-lg transition-all duration-500 ${categoryIndex % 2 === 0
                          ? 'border-border bg-surface-elevated hover:bg-muted/30'
                          : 'border-primary-foreground/20 bg-primary-foreground/10 hover:bg-primary-foreground/20'
                          }`}
                      >
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline group">
                          <div className="flex items-center gap-4 w-full">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <span className={`text-lg md:text-xl font-playfair font-semibold ${categoryIndex % 2 === 0 ? 'text-primary' : 'text-primary-foreground'
                              }`}>
                              {service.title}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6 pt-0">
                          <div className="ml-20">
                            <p className={`leading-relaxed text-base md:text-lg ${categoryIndex % 2 === 0 ? 'text-text-secondary' : 'text-primary-foreground/80'
                              }`}>
                              {service.description}
                            </p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              {/* Image */}
              <div className={`relative animate-scale-in ${categoryIndex % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <img
                    src={category.image}
                    alt={category.category}
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>

                {/* Floating Stat */}
                <div className={`absolute -bottom-6 -right-6 p-6 rounded-lg shadow-lg ${categoryIndex % 2 === 0
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-surface text-primary border border-border'
                  }`}>
                  <div className="text-2xl font-playfair font-bold">
                    {categoryIndex === 0 ? '100+' : categoryIndex === 1 ? '20+' : '150+'}
                  </div>
                  <div className="text-sm font-medium">
                    {categoryIndex === 0 ? 'Designs Created' : categoryIndex === 1 ? 'Years Experience' : 'Projects Built'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto container-padding text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-fade-in">
              Ready to Start Your
              <span className="block text-accent">Dream Project?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-12 leading-relaxed animate-slide-up">
              Let's discuss how we can bring your architectural vision to life with our comprehensive services and decades of expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;