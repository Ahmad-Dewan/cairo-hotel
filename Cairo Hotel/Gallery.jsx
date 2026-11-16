import React, { useState } from 'react';
import './Gallery.css';

const GALLERY_ITEMS = [
  { id: 1, symbol: '✦', bg: 'linear-gradient(135deg, #2c2620, #3d2e1e)',   label: 'Grand Lobby'      },
  { id: 2, symbol: '♦', bg: 'linear-gradient(135deg, #1a2a1a, #2a3a2a)',   label: 'Garden Terrace'   },
  { id: 3, symbol: '◆', bg: 'linear-gradient(135deg, #2a1a1a, #3a2020)',   label: 'Penthouse Suite'  },
  { id: 4, symbol: '★', bg: 'linear-gradient(135deg, #1a1a2a, #20203a)',   label: 'Rooftop Pool'     },
  { id: 5, symbol: '◇', bg: 'linear-gradient(135deg, #2a2a1a, #3a3a20)',   label: 'Fine Dining'      },
  { id: 6, symbol: '✧', bg: 'linear-gradient(135deg, #1a2a2a, #20303a)',   label: 'Spa & Wellness'   },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <p className="section-label">Visual Journey</p>
      <h2 className="section-title">
        Experience <em>Cairo</em>
      </h2>
      <div className="divider" />

      <div className="gallery__grid">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            className={`gallery__item gallery__item--${item.id}`}
            style={{ background: item.bg }}
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
            role="img"
            aria-label={item.label}
          >
            <span className="gallery__symbol" aria-hidden="true">
              {item.symbol}
            </span>
            <div
              className={`gallery__caption ${hovered === item.id ? 'gallery__caption--visible' : ''}`}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
