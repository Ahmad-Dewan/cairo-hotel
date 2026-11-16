import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Welcome to Cairo Hotel &amp; Spa</p>
        <div className="hero__ornament" aria-hidden="true" />
        <h1 className="hero__title">
          Where Luxury<br />
          <em>Meets Serenity</em>
        </h1>
        <p className="hero__subtitle">
          Exquisite accommodations in the heart of the city
        </p>
        <div className="hero__actions">
          <button className="btn-primary" onClick={() => scrollTo('#rooms')}>
            Explore Rooms
          </button>
          <button className="btn-outline" onClick={() => scrollTo('#amenities')}>
            Our Amenities
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
