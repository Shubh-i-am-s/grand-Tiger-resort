import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Percent, Clock, Sparkles, ArrowRight } from 'lucide-react';
import './SpecialOffers.css';

export default function SpecialOffers() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 18,
    minutes: 42,
    seconds: 9
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 24, minutes: 0, seconds: 0 }; // reset
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const offers = [
    {
      title: "Honeymoon Escape Package",
      desc: "Indulge in 2 nights at our Honeymoon Sanctuary Villa. Includes a complimentary candle light pool dinner, spa session for two, and organic rhododendron cooler welcome shots.",
      price: 19600,
      oldPrice: 23000,
      discount: "15% OFF"
    },
    {
      title: "Himalayan Adventure Package",
      desc: "Enjoy 3 nights at our Premium Mountain View room. Includes a guided nature hike to Pragpur, tickets for zip-lining, and daily local breakfast Dham thali.",
      price: 12200,
      oldPrice: 14400,
      discount: "15% OFF"
    }
  ];

  return (
    <section id="special-offers" className="offers-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Limited Reservations</span>
          <h2 className="section-title">Special Stay <span>Offers</span></h2>
          <p className="section-desc">
            Take advantage of these seasonal packages. Act fast—these rates are only available for a limited duration.
          </p>
        </div>

        {/* Live Timer Countdown Bar */}
        <div className="offers-timer-row flex-center">
          <div className="timer-box glass-panel">
            <Clock size={16} className="timer-icon" />
            <span>FLASH OFFER ENDS IN:</span>
            <div className="timer-nums flex-center">
              <span className="num">{timeLeft.hours.toString().padStart(2, '0')}h</span>
              <span className="sep">:</span>
              <span className="num">{timeLeft.minutes.toString().padStart(2, '0')}m</span>
              <span className="sep">:</span>
              <span className="num">{timeLeft.seconds.toString().padStart(2, '0')}s</span>
            </div>
          </div>
        </div>

        {/* Offer Cards */}
        <div className="offers-luxury-grid">
          {offers.map((offer, idx) => (
            <motion.div 
              key={idx}
              className="offer-luxury-card glass-panel"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="offer-badge-float glass-panel">
                <Percent size={14} style={{ marginRight: 6 }} /> {offer.discount}
              </div>
              
              <div className="offer-info">
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
                
                <div className="offer-pricing">
                  <div className="pricing-col">
                    <span>Regular Rate</span>
                    <strong className="old-rate">₹{offer.oldPrice.toLocaleString('en-IN')}</strong>
                  </div>
                  <div className="pricing-col">
                    <span>Exclusive Deal</span>
                    <strong className="deal-rate">₹{offer.price.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <a href="#rooms" className="btn btn-luxury offer-action-btn clickable">
                  Select Package <ArrowRight size={14} style={{ marginLeft: 6 }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
