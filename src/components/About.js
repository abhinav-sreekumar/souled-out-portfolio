import React from 'react';
import bandPhoto from '../assets/images/Band.jpg';

function About() {
  return (
    <section id="about" style={{'--about-bg': `url(${bandPhoto})`}}>
      <div className="about-bar"></div>
      <div className="about-inner">
        <div className="section-label reveal" style={{color: 'rgba(232,98,26,.65)'}}>About</div>
        <div className="about-headline">
          <span className="l1 reveal d1">NOT YOUR</span>
          <span className="l2 reveal d2">AVERAGE</span>
          <span className="l3 reveal d3">SOUND.</span>
        </div>
        <p className="about-body reveal d4">
          Two-piece R&amp;B. Funky basslines, vocal harmonies,<br />
          and chord progressions that take the long way home.<br />
          Soul by design, not by accident.
        </p>
      </div>
    </section>
  );
}

export default About;
