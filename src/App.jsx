import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Dining from './components/Dining';
import Amenities from './components/Amenities';
import Experiences from './components/Experiences';
import SpecialOffers from './components/SpecialOffers';
import BookingWizard from './components/BookingWizard';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingUI from './components/FloatingUI';

export default function App() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomId: 'deluxe'
  });

  const handleHeroSearch = (data) => {
    setBookingData((prev) => ({
      ...prev,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests
    }));
    scrollToSection('booking');
  };

  const handleBookRoom = (roomId) => {
    setBookingData((prev) => ({
      ...prev,
      roomId: roomId
    }));
    scrollToSection('booking');
  };

  const handleNavBookClick = () => {
    scrollToSection('booking');
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <FloatingUI />
      <Navbar onBookClick={handleNavBookClick} />
      <Hero onSearchBooking={handleHeroSearch} />
      <About />
      <Rooms onBookRoom={handleBookRoom} />
      <Gallery />
      <Dining />
      <Amenities />
      <Experiences />
      <SpecialOffers />
      <BookingWizard initialData={bookingData} />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
