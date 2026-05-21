import { useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Advantages from './components/Advantages';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  // Setup smooth scroll for all anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Portfolio />
        <Process />
        <Advantages />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
