import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
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
            <p className="news-sub">Receive seasonal rates, custom package guides, and Kanha safari invites.</p>
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
            <h3 className="footer-signature" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="http://www.grandtigerresort.com/images/main-logo.png" alt="Grand Tiger Resort Logo" style={{ height: '30px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left' }}>
                <span className="logo-main" style={{ fontSize: '1.2rem', letterSpacing: '1px' }}>GRAND TIGER</span>
                <span className="logo-sub">RESORT KANHA</span>
              </div>
            </h3>
            <p className="brand-summary-text">
              A premium jungle sanctuary nestled in the heart of Kanha National Park. Comfort meets wilderness for an unforgettable luxury experience.
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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/rooms">Accommodations</Link></li>
              <li><Link to="/discover-kanha">Discover Kanha</Link></li>
              <li><Link to="/amenities">Amenities</Link></li>
              <li><Link to="/tariff">Tariff</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Sights */}
          <div className="footer-links-column">
            <h4>Kanha Attractions</h4>
            <ul>
              <li><Link to="/discover-kanha">Kanha Tiger Reserve</Link></li>
              <li><Link to="/discover-kanha">Mukki Gate</Link></li>
              <li><Link to="/discover-kanha">Jungle Safari</Link></li>
              <li><Link to="/discover-kanha">Nature Walks</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="footer-links-column">
            <h4>Inquiry Desk</h4>
            <p className="footer-address-txt">
              Near Mukki Gate, Village: Manjitola, Kanha National Park, Baihar, District: Balaghat, Madhya Pradesh 481111, India
            </p>
            <p className="footer-contact-row">
              <strong>Phone:</strong> +91 9407098996
            </p>
            <p className="footer-contact-row">
              <strong>Email:</strong> grandtigerresort@gmail.com
            </p>
          </div>
        </div>

        {/* Copy bar */}
        <div className="footer-bottom-copy-row">
          <p>&copy; {new Date().getFullYear()} Grand Tiger Resort. All Rights Reserved.</p>
          <div className="footer-bottom-tags">
            <Link to="/contact">Privacy Statement</Link>
            <span className="dot-divider"></span>
            <Link to="/contact">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
