import { CheckCircle, Users, Award, Lightbulb } from 'lucide-react';
import aboutImage from '/interior.jpg';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge design and sustainable solutions."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Working closely with clients to bring their vision to life."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Delivering exceptional quality in every project we undertake."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Precision",
      description: "Meticulous attention to detail from concept to completion."
    }
  ];

  return (
    <section id="about" className="section-padding bg-surface">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-playfair font-bold text-primary animate-fade-in">
                Crafting Tomorrow's
                <span className="block text-accent">Architectural</span>
                Legacy
              </h2>
              
              <p className="text-lg text-text-secondary leading-relaxed animate-slide-up">
                With over two decades of experience, we are passionate about creating 
                spaces that inspire, function beautifully, and stand the test of time. 
                Our multidisciplinary approach combines architectural innovation with 
                environmental consciousness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="p-6 bg-surface-elevated rounded-lg hover-lift animate-fade-in"
                  style={{ '--stagger': index } as React.CSSProperties}
                >
                  <div className="text-accent mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src='AboutPic.jpg' 
                alt="Modern Interior Design" 
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Statistics */}
            <div className="absolute -bottom-8 -left-8 bg-surface p-6 rounded-lg shadow-lg border border-border">
              <div className="text-3xl font-playfair font-bold text-primary">6+</div>
              <div className="text-text-secondary font-medium">Years Experience</div>
            </div>
            
            <div className="absolute -top-8 -right-8 bg-accent text-accent-foreground p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-playfair font-bold">20+</div>
              <div className="font-medium">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;