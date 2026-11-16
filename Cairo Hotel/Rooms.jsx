import React from 'react';
import { ROOMS } from '../data/hotelData';
import './Rooms.css';

/* ── RoomCard ──────────────────────────────────────── */
function RoomCard({ room, onSelect }) {
  return (
    <div className="room-card" onClick={() => onSelect(room)}>
      <div className="room-card__img" style={{ background: room.bg }}>
        <span className="room-card__icon">{room.icon}</span>
        <div className="room-card__overlay" aria-hidden="true" />
        <span className="room-card__badge">{room.badge}</span>
      </div>

      <div className="room-card__body">
        <h3 className="room-card__name">{room.name}</h3>
        <p className="room-card__desc">{room.desc}</p>

        <div className="room-card__tags">
          {room.amenities.map((a) => (
            <span key={a} className="room-card__tag">{a}</span>
          ))}
        </div>

        <div className="room-card__footer">
          <div className="room-card__price">
            <span className="room-card__amount">${room.price}</span>
            <span className="room-card__night"> / night</span>
          </div>
          <button className="room-card__btn">View Details</button>
        </div>
      </div>
    </div>
  );
}

/* ── Rooms Section ─────────────────────────────────── */
export default function Rooms({ onSelectRoom }) {
  return (
    <section className="rooms" id="rooms">
      <p className="section-label">Accommodations</p>
      <h2 className="section-title" style={{ color: 'var(--white)' }}>
        Our <em>Finest Rooms</em>
      </h2>
      <div className="divider" />

      <div className="rooms__grid">
        {ROOMS.map((room) => (
          <RoomCard key={room.id} room={room} onSelect={onSelectRoom} />
        ))}
      </div>
    </section>
  );
}
