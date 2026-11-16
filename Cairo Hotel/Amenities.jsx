import React from 'react';
import { AMENITIES } from '../data/hotelData';
import './Amenities.css';

function AmenityIcon({ iconPath }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={iconPath} />
    </svg>
  );
}

function AmenityCard({ amenity }) {
  return (
    <div className="amenity-card">
      <div className="amenity-card__icon">
        <AmenityIcon iconPath={amenity.iconPath} />
      </div>
      <h3 className="amenity-card__name">{amenity.name}</h3>
      <p className="amenity-card__desc">{amenity.desc}</p>
    </div>
  );
}

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <p className="section-label">Facilities &amp; Services</p>
      <h2 className="section-title">
        World-Class <em>Amenities</em>
      </h2>
      <div className="divider" />

      <div className="amenities__grid">
        {AMENITIES.map((a) => (
          <AmenityCard key={a.id} amenity={a} />
        ))}
      </div>
    </section>
  );
}
