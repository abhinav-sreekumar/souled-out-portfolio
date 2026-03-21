import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Vision from './components/Vision';
import Artists from './components/Artists';
import Music from './components/Music';
import Stages from './components/Stages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useCursor from './hooks/useCursor';
import useScrollReveal from './hooks/useScrollReveal';
import useMagneticEffect from './hooks/useMagneticEffect';

function App() {
  useCursor();
  useScrollReveal();
  useMagneticEffect('.magnetic');

  return (
    <>
      <div id="cur-dot"></div>
      <div id="cur-ring"></div>
      <Nav />
      <Hero />
      <About />
      <Vision />
      <Artists />
      <Music />
      <Stages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
