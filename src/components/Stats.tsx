import { useEffect, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 10, suffix: '+', label: 'Projects Completed', description: 'Successful architectural ventures' },
    { number: 6, suffix: '+', label: 'Years Experience', description: 'Decades of design excellence' },
    { number: 100, suffix: '%', label: 'Client Satisfaction', description: 'Happy clients worldwide' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;
      const endValue = end;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="stats-section" className="section-padding bg-primary text-primary-foreground">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 animate-fade-in">
            Numbers That Define Our
            <span className="block text-accent">Excellence</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
            Our commitment to architectural excellence is reflected in every project we deliver.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group animate-scale-in"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="text-5xl md:text-6xl font-playfair font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary-foreground">
                {stat.label}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-accent rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;