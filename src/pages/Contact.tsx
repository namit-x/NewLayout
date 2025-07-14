import { Phone, MapPin, Building2 } from "lucide-react";
import contactHeroBg from "../assets/contact-hero-bg.jpg";
import portfolioHeroBg from "../assets/portfolio-hero-bg.jpg";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="section-padding bg-gradient-to-br from-background/95 to-secondary/40 relative"
        style={{
          backgroundImage: `url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/85 to-secondary/50"></div>
        <div className="max-w-7xl mx-auto container-padding relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your architectural vision to life? Let's discuss your next project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Contact Information */}
            <div className="animate-slide-up space-y-8">
              <div>
                <h2 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground mb-8">
                  Let's Connect
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  At Advance Architect, we believe every space tells a story. 
                  Whether you're envisioning a contemporary home, a commercial space, 
                  or a complete renovation, I'm here to help transform your ideas into reality.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Architect Info */}
                <div className="contact-card animate-scale-in">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary-accent" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                        Principal Architect
                      </h3>
                      <p className="text-foreground font-semibold text-lg">Yogesh</p>
                      <p className="text-muted-foreground">Advance Architect Working Group</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-card animate-scale-in hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-accent" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                        Phone
                      </h3>
                      <a 
                        href="tel:+918529990100" 
                        className="text-primary-accent font-semibold text-lg hover:text-primary-glow transition-colors duration-300"
                      >
                        +91 85299 90100
                      </a>
                      <p className="text-muted-foreground text-sm mt-1">
                        Available Monday - Saturday, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="contact-card animate-scale-in">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-accent" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                        Studio Location
                      </h3>
                      <p className="text-foreground font-medium leading-relaxed">
                        Advance Architect Working Group<br />
                        Haryana, India
                      </p>
                      <p className="text-muted-foreground text-sm mt-2">
                        Visit by appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="pt-8">
                <div className="bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-lg p-6 border border-primary/10">
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">
                    Ready to Start Your Project?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a consultation to discuss your vision, budget, and timeline. 
                    Every great building begins with a conversation.
                  </p>
                  <a 
                    href="tel:+918529990100"
                    className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-accent transition-all duration-300 hover-lift"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="animate-slide-up">
              <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border/20">
                <div className="p-6 bg-gradient-to-r from-primary/5 to-primary-accent/5">
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Find Our Studio
                  </h3>
                  <p className="text-muted-foreground">
                    Located in the heart of Haryana, our studio is where creativity meets craftsmanship.
                  </p>
                </div>
                
                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13971.586920965521!2d76.56596240600992!3d28.901416708300275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d853c329938dd%3A0x798a4b369b4112d2!2sADVANCE%20ARCHITECT%20WORKING%20GROUP!5e0!3m2!1sen!2sin!4v1752489791313!5m2!1sen!2sin" 
                    width="100%" 
                    height="450" 
                    style={{border: 0}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                  
                  {/* Map Overlay */}
                  <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border/20">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-primary-accent rounded-full animate-pulse"></div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">Advance Architect</p>
                        <p className="text-muted-foreground text-xs">Working Group Studio</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-primary-accent/5">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h3 className="font-playfair text-2xl lg:text-3xl font-semibold text-foreground mb-4">
            Every Project Begins with a Vision
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Let's collaborate to create spaces that inspire, function beautifully, and stand the test of time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;