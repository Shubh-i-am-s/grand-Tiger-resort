import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: "/hero1.jpeg",
    title: "Welcome to Grand Tiger Resort",
    subtitle: "WELCOME TO KANHA NATIONAL PARK",
    desc: "Located just 1.1 Kms from the Mukki Gate, our resort offers a luxurious sanctuary surrounded by lush green forests of Sal and Bamboo."
  },
  {
    image: "/hero2.jpeg",
    title: "Experience the Jungle Thrill",
    subtitle: "AN UNFORGETTABLE WILDERNESS",
    desc: "Indulge in elegant A.C. rooms equipped with modern amenities, creating a mesmerizing jungle theme for your perfect getaway."
  },
  {
    image: "/hero3.jpeg",
    title: "Culinary Journeys & Relaxation",
    subtitle: "THE ART OF EXQUISITE LIVING",
    desc: "Listen to the call of the wild whilst having a sumptuous dinner from our authentic Indian and Continental cuisine."
  },
  {
    image: "/hero4.jpeg",
    title: "Luxury Amidst Nature",
    subtitle: "KANHA'S FINEST JUNGLE RETREAT",
    desc: "Wake up to birdsong and forest serenity. Our premium rooms offer the perfect blend of luxury and the untamed wilderness."
  },
  {
    image: "/hero5.jpeg",
    title: "Discover Wild Kanha",
    subtitle: "HOME OF THE ROYAL BENGAL TIGER",
    desc: "Step into the heart of Kanha National Park — the land of tigers, leopards, and rare wildlife set amidst pristine sal forests."
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
            style={{ backgroundImage: `linear-gradient(rgba(10, 13, 11, 0.30), rgba(10, 13, 11, 0.55)), url("${slides[current].image}")` }}
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
            <Link to="/tariff" className="btn btn-primary clickable">
              Book Stay
            </Link>
            <Link to="/rooms" className="btn btn-outline hero-sec-btn clickable">
              Explore Resort <Play size={10} style={{ marginLeft: 6, fill: 'currentColor' }} />
            </Link>
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
    </section>
  );
}
