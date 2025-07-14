import { Phone, MapPin, Building2, Calendar, Mail } from "lucide-react";
import contactHeroBg from "/CHero.png";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced */}
      <section
        className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-background/95 to-secondary/40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Crafting <span className="text-gradient">Spaces</span> That Inspire
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
              Let's collaborate to transform your architectural vision into reality
            </p>
          </div>
        </div>
        
        {/* Scrolling indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Contact Content - Enhanced */}
      <section id="contact-content" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Contact Information - Modern Cards */}
            <div className="space-y-12">
              <div className="animate-slide-up">
                <h2 className="font-playfair text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                  Let's Create <span className="text-primary">Together</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At Advance Architect, we blend creativity with precision to deliver 
                  spaces that resonate with your vision. Share your ideas with us and 
                  let's craft something extraordinary.
                </p>
                
                <div className="grid md:grid-cols-1 gap-6">
                  {/* Architect Card */}
                  <div className="bg-card p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all hover:shadow-lg hover:translate-y-[-4px]">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-1">Designer</h3>
                        <p className="text-xl font-semibold text-foreground">Yogesh</p>
                        <p className="text-sm text-muted-foreground mt-1">Advance Architect</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Card */}
                  <div className="bg-card p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all hover:shadow-lg hover:translate-y-[-4px]">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-1">Email Us</h3>
                        <a href="mailto:contact@advancearchitect.com" className="text-xl font-semibold text-primary hover:text-primary-accent transition-colors">
                        architectadvance@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-6">
                {/* Phone Card */}
                <div className="bg-gradient-to-br from-card to-primary/5 p-6 rounded-xl border border-border/20 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-5">
                    <div className="relative">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-6 h-6 text-primary group-hover:text-primary-accent transition-colors" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        <span>1</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Direct Consultation</h3>
                      <a
                        href="tel:+918529990100"
                        className="text-xl font-bold text-primary hover:text-primary-accent transition-colors inline-flex items-center gap-2"
                      >
                        +91 85299 90100
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                      <p className="text-muted-foreground mt-2">
                        Monday - Saturday, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-card to-primary/5 p-6 rounded-xl border border-border/20 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary group-hover:text-primary-accent transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">Visit Our Studio</h3>
                      <p className="text-lg font-medium text-foreground">
                      14,First Floor, Saini Complex, Near civil hospital, Rohtak
                      </p>
                      <p className="text-muted-foreground mt-2 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-xl p-8 border border-primary/20 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4 relative z-10">
                    Schedule a Consultation
                  </h3>
                  <p className="text-muted-foreground mb-6 relative z-10">
                    Book a meeting to discuss your project requirements, budget, and timeline.
                  </p>
                  <div className="flex flex-wrap gap-4 relative z-10">
                    <a
                      href="tel:+918529990100"
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-accent transition-all hover:translate-y-[-2px] shadow-md"
                    >
                      <Phone className="w-5 h-5" />
                      Call Now
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-semibold border border-border hover:bg-card-hover transition-all hover:translate-y-[-2px] shadow-md"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section - Enhanced */}
            <div className="sticky top-24">
              <div className="bg-card rounded-xl overflow-hidden shadow-xl border border-border/20">
                <div className="p-8 bg-gradient-to-r from-primary/5 to-primary-accent/5">
                  <h3 className="font-playfair text-3xl font-semibold text-foreground mb-3">
                    Our Creative Hub
                  </h3>
                  <p className="text-muted-foreground">
                    Visit our studio in Haryana where ideas take shape and visions become blueprints.
                  </p>
                </div>

                <div className="relative h-[500px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13971.586920965521!2d76.56596240600992!3d28.901416708300275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d853c329938dd%3A0x798a4b369b4112d2!2sADVANCE%20ARCHITECT%20WORKING%20GROUP!5e0!3m2!1sen!2sin!4v1752489791313!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />

                  {/* Map Overlay */}
                  <div className="absolute bottom-6 left-6 bg-card/95 backdrop-blur-sm rounded-lg p-4 shadow-2xl border border-border/20 flex items-center gap-3 animate-float">
                    <div className="w-3 h-3 bg-primary-accent rounded-full animate-pulse"></div>
                    <div>
                      <p className="font-bold text-foreground">Advance Architect</p>
                      <p className="text-muted-foreground text-sm">Design Studio</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-card border-t border-border/20">
                  <div className="flex flex-wrap gap-4 justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <div>
                        <p className="font-medium text-foreground">Haryana, India</p>
                        <p className="text-sm text-muted-foreground">Studio Location</p>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      className="text-primary font-medium hover:text-primary-accent transition-colors flex items-center gap-1"
                    >
                      Get Directions
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                        <path d="M7 7h10v10" />
                        <path d="M7 17 17 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary-accent/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-card/50 backdrop-blur-sm p-10 rounded-2xl border border-border/20 shadow-lg inline-block">
            <h3 className="font-playfair text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Ready to Begin Your Architectural Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every masterpiece starts with a conversation. Let's discuss how we can bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="tel:+918529990100"
                className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-accent transition-all hover:translate-y-[-2px] shadow-lg flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Us Now
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-card text-foreground rounded-lg font-semibold border border-border hover:bg-card-hover transition-all hover:translate-y-[-2px] shadow-lg flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactInfo;