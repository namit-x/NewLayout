import Hero from '../components/homepage/Hero';
import About from '../components/homepage/About';
import Stats from '../components/homepage/Stats';
import Testimonials from '../components/homepage/Testimonials';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Stats />
      <Testimonials />
    </div>
  );
};

export default Homepage;
