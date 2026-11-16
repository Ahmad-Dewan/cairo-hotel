import React, { useEffect } from 'react';
import './RoomModal.css';

export default function RoomModal({ room, onClose }) {
  /* Close on Escape key */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBook = () => {
    onClose();
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label={`${room.name} details`}
    >
      <div className="modal">
        <button className="modal__close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <p className="modal__label">Cairo Hotel</p>
        <h2 className="modal__title">{room.name}</h2>
        <p className="modal__price">
          ${room.price}
          <span> / night</span>
        </p>
        <p className="modal__desc">{room.desc}</p>

        <ul className="modal__features">
          {room.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <button className="modal__book-btn" onClick={handleBook}>
          Book This Room
        </button>
      </div>
    </div>
  );
}
