import { CheckCircle, ArrowUpRight, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation",
      description: "Pioneering architectural excellence through cutting-edge design and sustainable innovation.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Precision",
      description: "Meticulous attention to detail from conceptual design through execution.",
    },
  ];

  return (
    <section id="about" className="section-padding bg-surface relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.03]" />

      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Column */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                About Our Practice
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-primary leading-[1.15] animate-fade-in">
                Crafting Tomorrow's
                <span className="block text-accent relative">
                  Architectural
                  <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-accent via-accent/50 to-transparent" />
                </span>
                <span className="block mt-2">Legacy</span>
              </h2>

              <div className="space-y-4">
                <p className="text-base sm:text-lg md:text-xl text-primary/80 leading-relaxed font-medium animate-slide-up">
                  Distinguished by two decades of architectural excellence, we create 
                  transformative environments that transcend conventional design boundaries.
                </p>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed animate-slide-up">
                  Our design philosophy harmonizes innovation with environmental stewardship, 
                  delivering spaces that inspire and endure.
                </p>
              </div>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative p-6 sm:p-8 bg-gradient-to-br from-surface-elevated to-surface-elevated/50 border border-border/50 rounded-xl hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 hover-lift animate-fade-in backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-accent/10 border border-accent/20 rounded-lg text-accent group-hover:bg-accent/15 group-hover:scale-110 transition-all duration-300">
                      {value.icon}
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-base sm:text-lg font-playfair font-bold text-primary group-hover:text-accent transition-colors duration-300">
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

          {/* Right Image Column */}
          <div className="relative w-full animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700" />

              <div className="relative overflow-hidden rounded-2xl border border-border/30 shadow-2xl shadow-primary/10">
                <img
                  src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
                  alt="Architectural Excellence"
                  className="w-full h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] object-cover group-hover:scale-[1.02] transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
                <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
              </div>
            </div>

            {/* Bottom-Left Floating Stat */}
            <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-surface/95 backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-border/50 w-max">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-primary">20+</div>
                <div className="text-xs sm:text-sm text-text-secondary font-medium uppercase tracking-wide">
                  Years Excellence
                </div>
              </div>
            </div>

            {/* Top-Right Floating Stat */}
            <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 bg-gradient-to-br from-accent to-accent/90 text-accent-foreground p-4 sm:p-6 md:p-8 rounded-2xl shadow-2xl border border-accent/30 w-max">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold">50+</div>
                <div className="text-xs sm:text-sm font-medium uppercase tracking-wide opacity-90">
                  Projects Delivered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
