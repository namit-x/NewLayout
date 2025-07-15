import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Verma",
      position: "MD, Gurugram Urban Development Authority",
      rating: 5,
      content:
        "This Chandigarh-based firm transformed our Gurugram commercial complex with their innovative approach. Their fusion of modern architecture with Haryanvi cultural elements created a landmark that perfectly balances functionality with regional identity.",
    },
    {
      name: "Priya Singh",
      position: "Director, Haryana Heritage Trust",
      rating: 5,
      content:
        "Their restoration work on the Faridabad heritage site was exceptional. They preserved our traditional 'haveli' architecture while incorporating earthquake-resistant techniques - a perfect blend of heritage and modernity for Haryana.",
    },
  ];

  return (
    <section className="section-padding bg-muted px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-primary mb-4 sm:mb-6 animate-fade-in">
            Client
            <span className="block text-accent">Testimonials</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto animate-slide-up">
            Discover what our clients say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-surface p-6 sm:p-8 rounded-lg shadow-lg hover-lift animate-scale-in relative"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6 sm:left-8">
                <div className="bg-accent text-accent-foreground p-2 sm:p-3 rounded-full shadow-lg">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4 sm:mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed mb-6 sm:mb-8 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div>
                  <div className="font-playfair font-semibold text-lg sm:text-xl text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm sm:text-base text-text-secondary">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-text-muted">
            Give us a chance to build your home and trust.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
