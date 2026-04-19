import React from 'react';
import abhinavPhoto from '../assets/images/Abhinav.jpg';
import siddharthPhoto from '../assets/images/Siddarth.jpg';

function Artists() {
  // 3D tilt removed per user preference
  return (
    <section id="artists">
      <div className="section-label reveal">The Artists</div>
      <div className="artists-grid">
        <div className="reveal d1">
          <div className="artist-photo">
            <img src={abhinavPhoto} alt="Abhinav Sreekumar" />
          </div>
          <div className="artist-role">Guitar · Backing Vocals · Creative Direction</div>
          <h2 className="artist-name">Abhinav<br />Sreekumar</h2>
          <p className="artist-bio">Started playing in second grade and never stopped. Influenced by Cory Wong's funk vocabulary, Parcels' groove sensibility, and John Mayer's melodic approach. His playing sits at the intersection of feel and precision. Outside of music, he's a technologist drawn to artists like Daniel Rozin who blur the line between code and art. That same approach defines his production work: modern, intentional, alive.</p>
        </div>
        <div className="reveal d2">
          <div className="artist-photo">
            <img src={siddharthPhoto} alt="Siddarth Sreekumar" />
          </div>
          <div className="artist-role">Guitar · Lead Vocals · Lead Producer</div>
          <h2 className="artist-name">Siddarth<br />Nayanar</h2>
          <p className="artist-bio">Over 200 live shows. Collaborations with Arivu and Ilayaraja. A reputation for basslines that hit you before you think about them. Siddarth's playing pulls from the lyrical phrasing of Mark Knopfler and the emotional depth of David Gilmour, translated through a funk and R&B lens. His production is built on precision and groove. Off stage, you'll find him in the kitchen or with Kamali. Both require the same attention to detail.</p>
        </div>
      </div>
    </section>
  );
}

export default Artists;
