import React, { useEffect, useState } from 'react';

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav-logo">Souled Out</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#artists">Artists</a></li>
        <li><a href="#music">Music</a></li>
        <li><a href="#stages">Stages</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
