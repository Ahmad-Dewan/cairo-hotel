import React, { useState } from 'react';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import BookingBar   from './components/BookingBar';
import About        from './components/About';
import Rooms        from './components/Rooms';
import Amenities    from './components/Amenities';
import Testimonials from './components/Testimonials';
import Gallery      from './components/Gallery';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import RoomModal    from './components/RoomModal';

export default function App() {
  // Lifted state: which room is open in the modal (null = closed)
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <>
      <Navbar />
      <Hero />
      <BookingBar />
      <About />
      <Rooms onSelectRoom={setSelectedRoom} />
      <Amenities />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />

      {/* Modal rendered at root level so it overlays everything */}
      {selectedRoom && (
        <RoomModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </>
  );
}
