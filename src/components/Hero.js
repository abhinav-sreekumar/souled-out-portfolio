import React, { useEffect } from 'react';
import Particles from './Particles';

function Hero() {
  useEffect(() => {
    const ghost = document.querySelector('.hero-ghost');

    const handleScroll = () => {
      const y = window.scrollY;
      if (ghost) {
        ghost.style.transform = `translate(-50%, calc(-50% + ${y * .28}px))`;
        ghost.style.opacity = Math.max(0, 1 - y / 360);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="animated-gradient">
      <Particles />
      <div className="hero-ghost magnetic">SOULED</div>
      <div className="hero-glow"></div>
      <div className="hero-line"></div>
      <div className="hero-content">
        <h1 className="hero-title magnetic-title">
          <span className="split-char">S</span>
          <span className="split-char">O</span>
          <span className="split-char">U</span>
          <span className="split-char">L</span>
          <span className="split-char">E</span>
          <span className="split-char">D</span>
          <span className="word-break"><span className="split-char">O</span><span className="split-char">U</span><span className="split-char">T</span><span className="split-char">.</span></span>
        </h1>
        <div className="hero-right">
          <p className="hero-tagline">World-class soul.<br />Made in India.</p>
          <a href="#contact" className="hero-cta magnetic">For bookings, get in touch</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
