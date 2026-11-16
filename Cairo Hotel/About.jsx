import React from 'react';
import './About.css';

const STATS = [
  { num: '120', label: 'Rooms & Suites' },
  { num: '3',   label: 'Restaurants' },
  { num: '98%', label: 'Guest Satisfaction' },
  { num: '5★',  label: 'Luxury Rating' },
];

export default function About() {
  return (
    <section className="about" id="about">
      {/* Visual column */}
      <div className="about__visual">
        <div className="about__img" aria-hidden="true">✦</div>
        <div className="about__badge">
          <span className="about__badge-num">25</span>
          <span className="about__badge-lbl">Years of<br />Excellence</span>
        </div>
      </div>

      {/* Text column */}
      <div className="about__text">
        <p className="section-label">Our Story</p>
        <h2 className="section-title">
          A Tradition of<br /><em>Timeless Elegance</em>
        </h2>
        <div className="divider" />
        <p>
          Established in 1999, Cairo Hotel &amp; Spa has been a beacon of
          refined hospitality, offering guests an unparalleled experience that
          blends contemporary luxury with classical grace.
        </p>
        <p>
          Nestled in the cultural heart of the city, our property features 120
          meticulously appointed rooms and suites, three world-class restaurants,
          and a renowned spa — all designed to create moments of pure indulgence.
        </p>

        <div className="about__stats">
          {STATS.map((s) => (
            <div className="about__stat" key={s.label}>
              <span className="about__stat-num">{s.num}</span>
              <span className="about__stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
