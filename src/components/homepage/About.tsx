import { CheckCircle, Users, Award, Lightbulb, ArrowUpRight } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering architectural excellence through cutting-edge design and sustainable innovation."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Precision",
      description: "Meticulous attention to detail from conceptual design through execution."
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.03]" />
      
      <div className="container mx-auto container-padding relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm font-medium text-accent uppercase tracking-wider">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                About Our Practice
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-[1.1] animate-fade-in">
                Crafting Tomorrow's
                <span className="block text-accent relative">
                  Architectural
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
                </span>
                <span className="block mt-2">Legacy</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-xl text-primary/80 leading-relaxed font-medium animate-slide-up">
                  Distinguished by two decades of architectural excellence, we create 
                  transformative environments that transcend conventional design boundaries.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed animate-slide-up">
                  Our design philosophy harmonizes innovation with environmental stewardship, 
                  delivering spaces that inspire and endure.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="group relative p-8 bg-gradient-to-br from-surface-elevated to-surface-elevated/50 border border-border/50 rounded-xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover-lift animate-fade-in backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-accent/10 border border-accent/20 rounded-lg text-accent group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                      {value.icon}
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-lg font-playfair font-bold text-primary group-hover:text-accent transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed group-hover:text-primary/70 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  
                  <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-accent/0 group-hover:text-accent/60 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />
              
              <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-2xl shadow-primary/10">
                <img 
                  src='AboutPic.jpg' 
                  alt="Architectural Excellence - Modern Interior Design Showcase" 
                  className="w-full h-[650px] object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-surface/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-border/50">
              <div className="space-y-1">
                <div className="text-4xl font-playfair font-bold text-primary">6+</div>
                <div className="text-sm text-text-secondary font-medium uppercase tracking-wide">Years Excellence</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground p-8 rounded-2xl shadow-2xl border border-accent/30">
              <div className="space-y-1">
                <div className="text-4xl font-playfair font-bold">20+</div>
                <div className="text-sm font-medium uppercase tracking-wide opacity-90">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
