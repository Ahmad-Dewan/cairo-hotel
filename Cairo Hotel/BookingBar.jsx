import React, { useState } from 'react';
import './BookingBar.css';

export default function BookingBar() {
  const today    = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d) => d.toISOString().split('T')[0];

  const [checkin,   setCheckin]   = useState(fmt(today));
  const [checkout,  setCheckout]  = useState(fmt(tomorrow));
  const [guests,    setGuests]    = useState('2 Adults');
  const [roomType,  setRoomType]  = useState('Any Room');

  const handleCheck = () => {
    if (!checkin || !checkout) {
      alert('Please select both check-in and check-out dates.');
      return;
    }
    if (new Date(checkout) <= new Date(checkin)) {
      alert('Check-out must be after check-in.');
      return;
    }
    const el = document.querySelector('#rooms');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="booking-bar">
      <div className="booking-bar__field">
        <label>Check-In</label>
        <input
          type="date"
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
        />
      </div>

      <div className="booking-bar__field">
        <label>Check-Out</label>
        <input
          type="date"
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
        />
      </div>

      <div className="booking-bar__field">
        <label>Guests</label>
        <select value={guests} onChange={(e) => setGuests(e.target.value)}>
          <option>1 Adult</option>
          <option>2 Adults</option>
          <option>2 Adults, 1 Child</option>
          <option>2 Adults, 2 Children</option>
        </select>
      </div>

      <div className="booking-bar__field">
        <label>Room Type</label>
        <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
          <option>Any Room</option>
          <option>Deluxe Room</option>
          <option>Junior Suite</option>
          <option>Penthouse Suite</option>
        </select>
      </div>

      <button className="booking-bar__submit" onClick={handleCheck}>
        Check Availability
      </button>
    </div>
  );
}
