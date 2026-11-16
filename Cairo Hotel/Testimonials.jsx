import React from 'react';
import { TESTIMONIALS } from '../data/hotelData';
import './Testimonials.css';

function TestimonialCard({ testimonial }) {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__stars">
        {'★'.repeat(testimonial.stars)}
      </div>
      <p className="testimonial-card__quote">"{testimonial.quote}"</p>
      <div className="testimonial-card__author">
        <div className="testimonial-card__avatar" aria-hidden="true">
          {testimonial.initials}
        </div>
        <div>
          <p className="testimonial-card__name">{testimonial.author}</p>
          <p className="testimonial-card__location">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <p className="section-label">Guest Voices</p>
      <h2 className="section-title" style={{ color: 'var(--white)' }}>
        What Our <em>Guests Say</em>
      </h2>
      <div className="divider" style={{ margin: '1.5rem auto' }} />

      <div className="testimonials__grid">
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  );
}
