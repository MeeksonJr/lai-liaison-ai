// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import DemoSection from './Components/DemoSection';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import GlobalStyles from './Components/GlobalStyle';
import Features from './Components/Features';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <About />
      <Features />
      <DemoSection />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
