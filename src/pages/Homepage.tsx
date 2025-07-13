import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
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
