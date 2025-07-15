import { useEffect, useState } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', description: 'Successful architectural ventures' },
    { number: 20, suffix: '+', label: 'Years Experience', description: 'Years of design excellence' },
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
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const CountUp = ({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const startValue = 0;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const currentCount = Math.floor(progress * (end - startValue) + startValue);
        setCount(currentCount);

        if (progress < 1) requestAnimationFrame(updateCount);
      };

      requestAnimationFrame(updateCount);
    }, [isVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section id="stats-section" className="section-padding bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mb-4 sm:mb-6 animate-fade-in">
            Numbers That Define Our
            <span className="block text-accent">Excellence</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up">
            Our commitment to architectural excellence is reflected in every project we deliver.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-scale-in"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary-foreground">
                {stat.label}
              </h3>
              <p className="text-sm sm:text-base text-primary-foreground/70 leading-relaxed max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Pulses */}
        <div className="mt-12 sm:mt-20 flex justify-center">
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
