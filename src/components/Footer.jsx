import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 5000);
    }
  };

  return (
    <footer className="luxury-footer">
      <div className="container">
        {/* Newsletter bar */}
        <div className="footer-newsletter-row glass-panel">
          <div className="newsletter-intro text-left">
            <h3 className="news-heading">Subscribe for Exclusive Invites</h3>
            <p className="news-sub">Receive seasonal rates, custom package guides, and Dhauladhar trekking invites.</p>
          </div>

          <div className="newsletter-form-container">
            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div 
                  className="newsletter-success flex-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Check size={14} style={{ marginRight: 6 }} /> Thank you for subscribing!
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="newsletter-form-wiz">
                  <div className="news-input-box">
                    <Mail size={16} className="news-mail-icon" />
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email ID"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary news-submit-btn clickable">
                    Subscribe <Send size={12} style={{ marginLeft: 6 }} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Structured Grid */}
        <div className="footer-links-grid">
          {/* Brand info */}
          <div className="footer-brand-summary">
            <h3 className="footer-signature">
              <span className="logo-main">DEE JAY</span>
              <span className="logo-sub">RESORT</span>
            </h3>
            <p className="brand-summary-text">
              A premium mountain sanctuary nestling in the foothills of Shivalik, Himachal Pradesh. Handcrafted comfort designed for luxury rest.
            </p>
            <div className="footer-social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="clickable" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.79-5 4v2z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="clickable" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="clickable" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links-column">
            <h4>Quick Navigation</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Story</a></li>
              <li><a href="#rooms">Suites & Rooms</a></li>
              <li><a href="#dining">Chef Gastronomy</a></li>
              <li><a href="#gallery">Masonry Gallery</a></li>
            </ul>
          </div>

          {/* Sights */}
          <div className="footer-links-column">
            <h4>Himalayan Attractions</h4>
            <ul>
              <li><a href="#attractions">Pragpur Heritage Village</a></li>
              <li><a href="#attractions">Chintpurni Shakti Peeth</a></li>
              <li><a href="#attractions">Beas River & Pong Dam</a></li>
              <li><a href="#attractions">Historic Kangra Fort</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-links-column">
            <h4>Inquiry Desk</h4>
            <p className="footer-address-txt">
              Chandigarh-Dharamshala Highway, Dhaliara, Tehsil Dehra, Kangra, HP - 177103
            </p>
            <p className="footer-contact-row">
              <strong>Phone:</strong> +91 94181 03888
            </p>
            <p className="footer-contact-row">
              <strong>Email:</strong> reservations@deejayresort.com
            </p>
          </div>
        </div>

        {/* Copy bar */}
        <div className="footer-bottom-copy-row">
          <p>&copy; {new Date().getFullYear()} Dee Jay Resort. All Rights Reserved.</p>
          <div className="footer-bottom-tags">
            <a href="#privacy">Privacy Statement</a>
            <span className="dot-divider"></span>
            <a href="#terms">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
