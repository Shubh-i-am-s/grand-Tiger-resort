import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DiscoverKanhaPage from './pages/DiscoverKanhaPage';
import RoomsPage from './pages/RoomsPage';
import AmenitiesPage from './pages/AmenitiesPage';
import TariffPage from './pages/TariffPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const navigate = useNavigate();
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
    navigate('/tariff');
  };

  const handleBookRoom = (roomId) => {
    setBookingData((prev) => ({
      ...prev,
      roomId: roomId
    }));
    navigate('/tariff');
  };

  const handleNavBookClick = () => {
    navigate('/tariff');
  };

  return (
    <>
      <Navbar onBookClick={handleNavBookClick} />
      <Routes>
        <Route path="/" element={<HomePage onSearchBooking={handleHeroSearch} />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/discover-kanha" element={<DiscoverKanhaPage />} />
        <Route path="/rooms" element={<RoomsPage onBookRoom={handleBookRoom} />} />
        <Route path="/amenities" element={<AmenitiesPage />} />
        <Route path="/tariff" element={<TariffPage initialData={bookingData} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
