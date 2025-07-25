import { Phone, MapPin, Building2, Mail } from "lucide-react";
import contactHeroBg from "/CHero.png";

const ContactInfo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Enhanced Responsive */}
      <section
        className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-gradient-to-br from-background/95 to-secondary/40"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${contactHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: window.innerWidth > 768 ? 'fixed' : 'scroll'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="animate-fade-in-up">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Crafting <span className="text-gradient">Spaces</span> That Inspire
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-4">
              Let's collaborate to transform your architectural vision into reality
            </p>
          </div>
        </div>
        
        {/* Scrolling indicator - Hidden on mobile */}
        <div className="hidden sm:block absolute bottom-6 lg:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/80 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      {/* Contact Content - Enhanced Responsive */}
      <section id="contact-content" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">

            {/* Contact Information - Responsive Cards */}
            <div className="space-y-8 sm:space-y-10 lg:space-y-12">
              <div className="animate-slide-up">
                <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6">
                  Let's Create <span className="text-primary">Together</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                  At Advance Architect, we blend creativity with precision to deliver 
                  spaces that resonate with your vision. Share your ideas with us and 
                  let's craft something extraordinary.
                </p>
                
                <div className="grid gap-4 sm:gap-6">
                  {/* Architect Card */}
                  <div className="bg-card p-4 sm:p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all hover:shadow-lg hover:translate-y-[-4px]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-muted-foreground mb-1 text-sm sm:text-base">Designer</h3>
                        <p className="text-lg sm:text-xl font-semibold text-foreground">Yogesh</p>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Advance Architect</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Contact Card */}
                  <div className="bg-card p-4 sm:p-6 rounded-xl border border-border/20 hover:border-primary/30 transition-all hover:shadow-lg hover:translate-y-[-4px]">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-muted-foreground mb-1 text-sm sm:text-base">Email Us</h3>
                        <a 
                          href="mailto:architectadvance@gmail.com" 
                          className="text-base sm:text-xl font-semibold text-primary hover:text-primary-accent transition-colors break-all sm:break-normal"
                        >
                          architectadvance@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-4 sm:space-y-6">
                {/* Phone Card */}
                <div className="bg-gradient-to-br from-card to-primary/5 p-4 sm:p-6 rounded-xl border border-border/20 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-accent transition-colors" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
                        <span>1</span>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-playfair text-lg sm:text-xl font-semibold text-foreground mb-2">Direct Consultation</h3>
                      <a
                        href="tel:+918529990100"
                        className="text-lg sm:text-xl font-bold text-primary hover:text-primary-accent transition-colors inline-flex items-center gap-2 flex-wrap"
                      >
                        +91 85299 90100
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                          <path d="M7 7h10v10" />
                          <path d="M7 17 17 7" />
                        </svg>
                      </a>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2">
                        Monday - Saturday, 9:00 AM - 7:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gradient-to-br from-card to-primary/5 p-4 sm:p-6 rounded-xl border border-border/20 hover:shadow-lg transition-all group">
                  <div className="flex items-start gap-3 sm:gap-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-accent transition-colors" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-playfair text-lg sm:text-xl font-semibold text-foreground mb-2">Visit Our Studio</h3>
                      <p className="text-base sm:text-lg font-medium text-foreground">
                        14, First Floor, Saini Complex, Near civil hospital, Rohtak - 124001
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground mt-2 flex items-center gap-1">
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

              {/* CTA Section - Responsive */}
              <div className="pt-4 sm:pt-6">
                <div className="bg-gradient-to-r from-primary/5 to-primary-accent/5 rounded-xl p-4 sm:p-6 lg:p-8 border border-primary/20 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
                  <h3 className="font-playfair text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4 relative z-10">
                    Schedule a Consultation
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 relative z-10">
                    Book a meeting to discuss your project requirements, budget, and timeline.
                  </p>
                  
                  {/* Responsive Button Layout */}
                  <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 relative">
                    {/* Call Now Button */}
                    <a
                      href="tel:+918529990100"
                      className="relative flex items-center justify-center text-black gap-2 px-4 sm:px-6 py-3 bg-transparent border-2 rounded-lg hover:bg-primary/10 transition-colors duration-300 z-20 text-sm sm:text-base font-medium"
                    >
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                      Call Now
                    </a>

                    {/* Start Project Button (WhatsApp) */}
                    <a
                      href="https://wa.me/918529990100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-green-400 rounded-lg hover:bg-green-500 transition-colors duration-300 text-white font-bold z-20 text-sm sm:text-base"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Start Project
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section - Enhanced Responsive */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-card rounded-xl overflow-hidden shadow-xl border border-border/20">
                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-primary/5 to-primary-accent/5">
                  <h3 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground mb-2 sm:mb-3">
                    Our Creative Hub
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Visit our studio in Haryana where ideas take shape and visions become blueprints.
                  </p>
                </div>

                <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
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

                  {/* Map Overlay - Responsive */}
                  <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 bg-card/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-2xl border border-border/20 flex items-center gap-2 sm:gap-3 animate-float max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2rem)] lg:max-w-none">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-primary-accent rounded-full animate-pulse flex-shrink-0"></div>
                    <div className="min-w-0">
                      <p className="font-bold text-foreground text-sm sm:text-base truncate">Advance Architect</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Design Studio</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6 bg-card border-t border-border/20">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-between">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-foreground text-sm sm:text-base">Haryana, India</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Studio Location</p>
                      </div>
                    </div>
                    <a 
                      href="https://www.google.com/maps/place/ADVANCE+ARCHITECT+WORKING+GROUP/@28.899829,76.583346,14z/data=!4m6!3m5!1s0x390d853c329938dd:0x798a4b369b4112d2!8m2!3d28.8998292!4d76.5833463!16s%2Fg%2F11h5vlfs0d?hl=en&entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-medium hover:text-primary-accent transition-colors flex items-center gap-1 text-sm sm:text-base whitespace-nowrap"
                    >
                      Get Directions
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" sm-width="16" sm-height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
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
    </div>
  );
};

export default ContactInfo;