import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import heroImage from '/heroImage.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent opacity-80 z-50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto container-padding text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary-foreground mb-8 animate-fade-in">
            Redefining
            <span className="block text-gradient">Architectural</span>
            Excellence
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Creating extraordinary spaces that harmonize form, function, and sustainability 
            for the modern world.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold group"
            >
              Explore Projects
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary-foreground/30 text-black hover:bg-primary-foreground hover:text-primary px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;