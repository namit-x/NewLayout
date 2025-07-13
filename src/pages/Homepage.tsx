import Header from '../components/Header';
import Hero from '../components/homepage/Hero';
import About from '../components/homepage/About';
import Stats from '../components/homepage/Stats';
import Testimonials from '../components/homepage/Testimonials';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
