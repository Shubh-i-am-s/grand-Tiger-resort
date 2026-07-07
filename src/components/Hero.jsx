import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80",
    title: "Experience Sublime Mountain Luxury",
    subtitle: "WELCOME TO DEE JAY RESORT",
    desc: "A refreshing sanctuary nestling along the idyllic snow-clad Dhauladhar mountains in Himachal Pradesh."
  },
  {
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80",
    title: "Luxury Mountain Lodges & Villas",
    subtitle: "THE ART OF EXQUISITE LIVING",
    desc: "Indulge in suites detailed with local wood accents and private balconies, overlooking the green Kangra valley."
  },
  {
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=80",
    title: "Culinary Journeys & Infinity Pools",
    subtitle: "UNMATCHED PANORAMIC EXPERIENCES",
    desc: "Savor hand-selected local flavors and European recipes prepared by our master chefs under the Himalayan sky."
  }
];

export default function Hero({ onSearchBooking }) {
  const [current, setCurrent] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearchBooking({ checkIn, checkOut, guests });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background slide transitions */}
      <div className="hero-slides" style={{ backgroundColor: '#000' }}>
        <AnimatePresence>
          <motion.div
            key={current}
            className="hero-slide-bg"
            style={{ backgroundImage: `linear-gradient(rgba(10, 13, 11, 0.45), rgba(10, 13, 11, 0.45)), url(${slides[current].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

      {/* Content wrapper with Framer Motion stagger */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <motion.span 
            className="hero-subtitle-tag"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            key={`sub-${current}`}
          >
            {slides[current].subtitle}
          </motion.span>
          <motion.h1 
            className="hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            key={`title-${current}`}
          >
            {slides[current].title}
          </motion.h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            key={`desc-${current}`}
          >
            {slides[current].desc}
          </motion.p>
          <motion.div 
            className="hero-buttons-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <a href="#rooms" className="btn btn-primary clickable">
              Book Stay
            </a>
            <a href="#about" className="btn btn-outline hero-sec-btn clickable">
              Explore Resort <Play size={10} style={{ marginLeft: 6, fill: 'currentColor' }} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Luxury Availability Booking Card */}
      <motion.div 
        className="hero-booking-panel-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <form className="hero-booking-panel glass-panel" onSubmit={handleSearch}>
          <div className="hero-input-field">
            <span className="input-label-icon"><Calendar size={14} /> Check In</span>
            <input 
              type="date" 
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="clickable"
            />
          </div>
          
          <div className="hero-input-divider"></div>

          <div className="hero-input-field">
            <span className="input-label-icon"><Calendar size={14} /> Check Out</span>
            <input 
              type="date" 
              required
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="clickable"
            />
          </div>

          <div className="hero-input-divider"></div>

          <div className="hero-input-field">
            <span className="input-label-icon"><Users size={14} /> Guests</span>
            <select 
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="clickable"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5+">5+ Guests</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary hero-booking-submit clickable">
            Search Rooms <ArrowRight size={14} style={{ marginLeft: 6 }} />
          </button>
        </form>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll Down">
        <span className="mouse-wheel-track">
          <span className="mouse-wheel-dot"></span>
        </span>
        <span className="arrow-down-head"></span>
      </a>
    </section>
  );
}
