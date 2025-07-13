import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CEO, Urban Development Corp",
      rating: 5,
      content: "Working with this architectural firm has been transformative for our company. Their innovative approach to sustainable design and meticulous attention to detail resulted in a space that not only meets our functional needs but truly inspires our team every day."
    },
    {
      name: "Michael Rodriguez", 
      position: "Director, Heritage Foundation",
      rating: 5,
      content: "The level of professionalism and creative vision demonstrated throughout our project was exceptional. They seamlessly blended modern functionality with historical preservation, creating a space that honors the past while embracing the future."
    }
  ];

  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary mb-6 animate-fade-in">
            Client
            <span className="block text-accent">Testimonials</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto animate-slide-up">
            Discover what our clients say about their experience working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-surface p-8 rounded-lg shadow-lg hover-lift animate-scale-in relative"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-accent text-accent-foreground p-3 rounded-full shadow-lg">
                  <Quote className="w-6 h-6" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-6 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-text-secondary text-lg leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div>
                  <div className="font-playfair font-semibold text-xl text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-text-secondary">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-text-muted mb-8">Trusted by leading organizations worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Fortune 500', 'Government', 'Non-Profit', 'Startups'].map((type) => (
              <div key={type} className="text-text-muted font-medium px-4 py-2 border border-border rounded-full">
                {type}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;